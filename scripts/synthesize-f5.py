#!/usr/bin/env python3
import os
import sys
import re
import argparse
import subprocess
import tempfile
import datetime
import numpy as np
import soundfile as sf
from tqdm import tqdm

# 1. 補丁修復 MLX normal 接受 scalar 參數問題
import mlx.core as mx

_orig_normal = mx.random.normal
def _safe_normal(shape, *args, **kwargs):
    if isinstance(shape, (tuple, list)):
        shape = tuple(int(x.item()) if hasattr(x, "item") else int(x) for x in shape)
    return _orig_normal(shape, *args, **kwargs)
mx.random.normal = _safe_normal

from f5_tts_mlx.generate import (
    F5TTS,
    convert_char_to_pinyin,
    estimated_duration,
    SAMPLE_RATE,
    FRAMES_PER_SEC,
    TARGET_RMS,
)

def split_chinese_sentences(text, max_len=75):
    """
    依據中文句號、問號、驚嘆號、分號以及換行符號進行自然切句，
    合併為每段約 30~75 字左右的呼吸長度，避免過長溢出或過短碎裂。
    """
    parts = re.split(r"([。！？；\n\r]+|[.!?;]+)", text)
    sentences = []
    current = ""
    for i in range(0, len(parts), 2):
        chunk = parts[i].strip()
        delim = parts[i + 1].strip() if i + 1 < len(parts) else ""
        combined = chunk + delim
        if not combined:
            continue
        if len(current) + len(combined) <= max_len:
            current += combined
        else:
            if current:
                sentences.append(current)
            current = combined
    if current:
        sentences.append(current)
    return sentences

def main():
    parser = argparse.ArgumentParser(description="F5-TTS MLX Synthesis Pipeline for Devotionals")
    parser.add_argument("--text-file", required=True, help="Path to input text file")
    parser.add_argument("--ref-audio", required=True, help="Path to reference audio file (WAV)")
    parser.add_argument("--ref-text-file", required=True, help="Path to reference text file")
    parser.add_argument("--output-mp3", required=True, help="Path to output MP3 file")
    parser.add_argument("--speed", type=float, default=1.0, help="Speech rate multiplier")
    args = parser.parse_args()

    if not os.path.exists(args.text_file):
        print(f"Error: Text file not found: {args.text_file}", file=sys.stderr)
        sys.exit(1)

    if not os.path.exists(args.ref_audio):
        print(f"Error: Ref audio not found: {args.ref_audio}", file=sys.stderr)
        sys.exit(1)

    if not os.path.exists(args.ref_text_file):
        print(f"Error: Ref text file not found: {args.ref_text_file}", file=sys.stderr)
        sys.exit(1)

    with open(args.text_file, "r", encoding="utf-8") as f:
        gen_text = f.read().strip()

    with open(args.ref_text_file, "r", encoding="utf-8") as f:
        ref_text = f.read().strip()

    # 讀取參考音檔
    audio, sr = sf.read(args.ref_audio)
    if sr != SAMPLE_RATE:
        raise ValueError(f"Reference audio must have a sample rate of {SAMPLE_RATE}Hz")
    audio = mx.array(audio)

    # RMS 音量標準化
    rms = mx.sqrt(mx.mean(mx.square(audio)))
    if rms < TARGET_RMS:
        audio = audio * TARGET_RMS / rms

    # 中文智慧分句
    chunks = split_chinese_sentences(gen_text, max_len=75)
    print(f"  📝 正文共 {len(gen_text)} 字，切分為 {len(chunks)} 個語音片段進行批次合成...")

    # 載入 F5-TTS 模型
    print("  🧠 正在載入 F5-TTS MLX 模型至 Apple Silicon GPU...")
    f5tts = F5TTS.from_pretrained("lucasnewman/f5-tts-mlx")

    # 句間自然停頓靜音（0.15 秒）
    pause_samples = int(SAMPLE_RATE * 0.15)
    pause_wave = mx.zeros((pause_samples,))

    output_waves = []
    t_start = datetime.datetime.now()

    for idx, chunk in enumerate(chunks):
        dur = int(estimated_duration(audio, ref_text, chunk, args.speed) * FRAMES_PER_SEC)
        text_pinyin = convert_char_to_pinyin([ref_text + " " + chunk])

        wave, _ = f5tts.sample(
            mx.expand_dims(audio, axis=0),
            text=text_pinyin,
            duration=dur,
            steps=8,
            method="rk4",
            speed=args.speed,
            cfg_strength=2.0,
            sway_sampling_coef=-1.0,
        )

        # 裁切掉前面的參考音檔部分
        wave = wave[audio.shape[0]:]
        mx.eval(wave)

        output_waves.append(wave)
        if idx < len(chunks) - 1:
            output_waves.append(pause_wave)

    full_wave = mx.concatenate(output_waves, axis=0)
    total_audio_sec = full_wave.shape[0] / SAMPLE_RATE
    total_time_cost = (datetime.datetime.now() - t_start).total_seconds()

    print(f"  ⚡ 合成完畢！產出語音時長: {total_audio_sec:.1f} 秒，M5 Max 耗時: {total_time_cost:.1f} 秒 (約 {total_audio_sec/max(1,total_time_cost):.1f}x 實時速度)")

    os.makedirs(os.path.dirname(os.path.abspath(args.output_mp3)), exist_ok=True)
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp_wav:
        tmp_wav_path = tmp_wav.name

    try:
        sf.write(tmp_wav_path, np.array(full_wave), SAMPLE_RATE)
        ffmpeg_cmd = [
            "ffmpeg", "-y",
            "-i", tmp_wav_path,
            "-b:a", "64k",
            args.output_mp3
        ]
        subprocess.run(ffmpeg_cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    finally:
        if os.path.exists(tmp_wav_path):
            os.remove(tmp_wav_path)

if __name__ == "__main__":
    main()

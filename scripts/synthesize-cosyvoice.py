#!/usr/bin/env python3
"""
CosyVoice 3.0 (Fun-CosyVoice3-0.5B) TTS Synthesis Pipeline for Devotionals
Runs natively on Apple Silicon GPU using MLX.
Supports Zero-Shot voice cloning with semantic prompt conditioning.
"""

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

import mlx.core as mx
from mlx_audio.tts.utils import load_model
from mlx_audio.tts.generate import load_audio

try:
    import cn2an
    HAS_CN2AN = True
except ImportError:
    HAS_CN2AN = False

def normalize_numbers(text):
    """
    將文本中的阿拉伯數字、經文章節、年份及數量等標準化為流暢的中文數字，
    以避免 TTS 引擎將 ASCII 數字以英文或破碎的拼字音節朗讀。
    """
    if not text or not HAS_CN2AN:
        return text

    # 1. 經文範圍：如「4:16-18」->「四章十六至十八節」
    text = re.sub(
        r'(\d+):(\d+)\s*[–—~至到\-]\s*(\d+)',
        lambda m: f'{cn2an.an2cn(m.group(1))}章{cn2an.an2cn(m.group(2))}至{cn2an.an2cn(m.group(3))}節',
        text
    )
    # 2. 單一經文：如「4:16」->「四章十六節」
    text = re.sub(
        r'(\d+):(\d+)',
        lambda m: f'{cn2an.an2cn(m.group(1))}章{cn2an.an2cn(m.group(2))}節',
        text
    )
    # 3. 數字範圍：如「51–52」->「五十一至五十二」
    text = re.sub(
        r'(\d+)\s*[–—~至到\-]\s*(\d+)',
        lambda m: f'{cn2an.an2cn(m.group(1))}至{cn2an.an2cn(m.group(2))}',
        text
    )
    # 4. 處理帶空格的章節或序號，如「4 章 17 節」->「4章17節」、「第 17 節」->「第17節」
    text = re.sub(r'(第)\s*(\d+)', r'\1\2', text)
    text = re.sub(r'(\d+)\s*([章節篇卷條個天年歲度代次種位雙本隻面點分秒])', r'\1\2', text)

    # 5. 轉換其餘所有阿拉伯數字為中文數字 (an2cn)
    try:
        text = cn2an.transform(text, "an2cn")
    except Exception:
        pass

    # 6. 繁體字修正（避免 cn2an 產出簡體「点」字）
    text = text.replace("点", "點")

    # 7. 清理轉換後量詞與數字間的多餘空白
    text = re.sub(r'([零一二三四五六七八九十百千萬億]+)\s+([章節篇卷條個天年歲度代次種位雙本隻面點分秒人])', r'\1\2', text)
    text = re.sub(r'([章節篇卷])\s+([零一二三四五六七八九十百千萬億]+)', r'\1\2', text)
    text = re.sub(r'(百分之[零一二三四五六七八九十百千萬億]+)\s+', r'\1', text)
    text = re.sub(r'([零一二三四五六七八九十百千萬億]+)\s+(多[章節篇卷條個天年歲度代次種位雙本隻面點分秒人])', r'\1\2', text)
    return text

def normalize_quotes(text):
    """
    將繁體直角引號「」與『』標準化為引號 “” 與 ‘’
    """
    if not text:
        return ""
    text = text.replace("「", "“").replace("」", "”")
    text = text.replace("『", "‘").replace("』", "’")
    return text

def normalize_colons(text):
    """
    單獨冒號微調：若冒號後方未緊跟引號（“、"、‘、'、「、『），轉換為逗號以利 TTS 進行自然呼吸停頓。
    """
    if not text:
        return ""
    text = re.sub(r'[:：](?!\s*["“\'‘「『])', '，', text)
    text = re.sub(r'([。！？；])\s*，', r'\1', text)
    text = re.sub(r'，\s*([。！？；])', r'\1', text)
    return text

def split_chinese_sentences(text, max_len=65):
    """
    依據中文句號、問號、驚嘆號、分號以及換行符號進行自然切句，
    合併為每段約 30~65 字左右的最佳呼吸長度（避免 LLM 自回歸生成過長導致循環或發音不穩）。
    """
    # 依段落先分大組
    paragraphs = [p.strip() for p in text.split("\n") if p.strip()]
    all_chunks = []

    for para in paragraphs:
        parts = re.split(r"([。！？；]+|[.!?;]+)", para)
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
                    all_chunks.append((current, False))
                # 若單句本身即超過 max_len，嘗試以逗號再切分
                if len(combined) > max_len:
                    sub_parts = re.split(r"([，,]+)", combined)
                    sub_curr = ""
                    for j in range(0, len(sub_parts), 2):
                        s_chunk = sub_parts[j].strip()
                        s_delim = sub_parts[j + 1].strip() if j + 1 < len(sub_parts) else ""
                        s_comb = s_chunk + s_delim
                        if not s_comb:
                            continue
                        if len(sub_curr) + len(s_comb) <= max_len:
                            sub_curr += s_comb
                        else:
                            if sub_curr:
                                all_chunks.append((sub_curr, False))
                            sub_curr = s_comb
                    current = sub_curr
                else:
                    current = combined
        if current:
            # 標記段落末尾（供段間微調停頓時長）
            all_chunks.append((current, True))

    return all_chunks

def main():
    parser = argparse.ArgumentParser(description="CosyVoice 3.0 MLX Synthesis Pipeline for Devotionals")
    parser.add_argument("--text-file", required=True, help="Path to input text file")
    parser.add_argument("--ref-audio", required=True, help="Path to reference audio file (WAV)")
    parser.add_argument("--ref-text-file", required=True, help="Path to reference text file")
    parser.add_argument("--output-mp3", required=True, help="Path to output MP3 file")
    parser.add_argument("--model-id", default="mlx-community/Fun-CosyVoice3-0.5B-2512-8bit", help="HuggingFace model ID")
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

    # 1. 文本標準化
    gen_text = normalize_numbers(gen_text)
    ref_text = normalize_numbers(ref_text)

    gen_text = normalize_colons(gen_text)
    ref_text = normalize_colons(ref_text)

    gen_text = normalize_quotes(gen_text)
    ref_text = normalize_quotes(ref_text)

    # 2. 構建 CosyVoice 3 核心指令 Prompt (<|endofprompt|>)
    formatted_prompt = f"You are a helpful assistant.<|endofprompt|>{ref_text}"

    # 3. 載入模型與參考音訊 (24kHz)
    print(f"  🧠 正在載入 CosyVoice 3.0 模型 ({args.model_id}) 至 Apple Silicon GPU...")
    model = load_model(args.model_id)
    target_sr = model.sample_rate

    ref_audio_arr = load_audio(args.ref_audio, sample_rate=target_sr)

    # 4. 文本智慧分句
    chunk_items = split_chinese_sentences(gen_text, max_len=65)
    print(f"  📝 正文共 {len(gen_text)} 字，切分為 {len(chunk_items)} 個語意片段進行批次合成...")

    # 停頓取樣數設定
    # 句間停頓: 0.18s, 段落停頓: 0.35s
    pause_sentence = np.zeros(int(target_sr * 0.18), dtype=np.float32)
    pause_paragraph = np.zeros(int(target_sr * 0.35), dtype=np.float32)

    output_waves = []
    t_start = datetime.datetime.now()

    for idx, (chunk_text, is_para_end) in enumerate(tqdm(chunk_items, desc="  🎙️ 合成進度", unit="句")):
        if not chunk_text.strip():
            continue

        try:
            for res in model.generate(
                text=chunk_text,
                ref_audio=ref_audio_arr,
                ref_text=formatted_prompt,
                speed=args.speed,
                verbose=False
            ):
                audio_np = np.array(res.audio, dtype=np.float32)
                output_waves.append(audio_np)
                if idx < len(chunk_items) - 1:
                    output_waves.append(pause_paragraph if is_para_end else pause_sentence)
        except Exception as e:
            print(f"\n  ⚠️ 片段 [{chunk_text[:15]}...] 合成出錯: {e}，跳過。", file=sys.stderr)

    if not output_waves:
        print("Error: 未能產出任何語音資料！", file=sys.stderr)
        sys.exit(1)

    full_wave = np.concatenate(output_waves, axis=0)
    total_audio_sec = len(full_wave) / target_sr
    total_time_cost = (datetime.datetime.now() - t_start).total_seconds()

    print(f"  ⚡ 合成完畢！產出語音時長: {total_audio_sec:.1f} 秒，M5 Max 耗時: {total_time_cost:.1f} 秒 (約 {total_audio_sec/max(1,total_time_cost):.1f}x 實時速度)")

    os.makedirs(os.path.dirname(os.path.abspath(args.output_mp3)), exist_ok=True)
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp_wav:
        tmp_wav_path = tmp_wav.name

    try:
        sf.write(tmp_wav_path, full_wave, target_sr)
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

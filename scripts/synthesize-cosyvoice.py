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

def normalize_initials(text):
    """
    英文人名縮寫過濾但書：
    若遇到英文人名縮寫（如 N. T.、J. I.、G. K. 等），TTS 朗讀時自動略過，保留中文全名。
    """
    if not text:
        return ""
    text = re.sub(r'\b(?:[A-Z]\.\s*)+', '', text)
    text = re.sub(r'([\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef])\s+(?=[\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef])', r'\1', text)
    text = re.sub(r'(?<=[\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef])\s+([\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef])', r'\1', text)
    return text

def split_chinese_sentences(text, max_len=40):
    """
    智慧分句與三級呼吸停頓分類器：
    1. 依段落（換行）切分大組，確保段落末尾擁有最長默想停頓（para_pause: 0.8s）。
    2. 保護英文字母縮寫/名號（如 J. I. 巴刻）之小數點，防止被誤判為英文句點而破裂。
    3. 依據中文句號、問號、驚嘆號（。！？）及句末英文句號進行完整句子切分（sentence_pause: 0.3s）。
    4. 當完整句子長度超過 max_len（40 字）時，進一步依逗號、分號、頓號（，；、）切分為子意群（clause_pause: 0.18s）。

    回傳：[(chunk_text, pause_type), ...]
    其中 pause_type 為 "clause"（子句微停頓）、"sentence"（完整句換氣）或 "paragraph"（段落深呼吸停頓）。
    """
    paragraphs = [p.strip() for p in text.split("\n") if p.strip()]
    all_chunks = []

    def protect_initials(t):
        return re.sub(r"\b([A-Za-z])\.", lambda m: m.group(1) + "\u2024", t)

    def unprotect_initials(t):
        return t.replace("\u2024", ".")

    for para in paragraphs:
        para_protected = protect_initials(para)
        parts = re.split(r"([。！？]+[”\"」』]*|(?<!\b[A-Za-z])\.[”\"」』]*(?:\s+|$))", para_protected)

        sentences = []
        for i in range(0, len(parts), 2):
            chunk = parts[i].strip()
            delim = parts[i + 1].strip() if i + 1 < len(parts) else ""
            comb = chunk + delim
            if comb:
                sentences.append(unprotect_initials(comb))

        para_chunks = []
        for s_idx, sentence in enumerate(sentences):
            is_last_sentence = (s_idx == len(sentences) - 1)

            if len(sentence) <= max_len:
                p_type = "paragraph" if is_last_sentence else "sentence"
                para_chunks.append((sentence, p_type))
            else:
                sub_parts = re.split(r"([，；、,;]+)", sentence)
                clauses = []
                for j in range(0, len(sub_parts), 2):
                    c_chunk = sub_parts[j].strip()
                    c_delim = sub_parts[j + 1].strip() if j + 1 < len(sub_parts) else ""
                    c_comb = c_chunk + c_delim
                    if c_comb:
                        clauses.append(c_comb)

                sub_curr = ""
                for c_idx, cl in enumerate(clauses):
                    if len(sub_curr) + len(cl) <= max_len:
                        sub_curr += cl
                    else:
                        if sub_curr:
                            para_chunks.append((sub_curr, "clause"))
                            sub_curr = ""
                        while len(cl) > max_len:
                            para_chunks.append((cl[:max_len], "clause"))
                            cl = cl[max_len:]
                        sub_curr = cl

                if sub_curr:
                    p_type = "paragraph" if is_last_sentence else "sentence"
                    para_chunks.append((sub_curr, p_type))

        all_chunks.extend(para_chunks)

    return all_chunks

def main():
    parser = argparse.ArgumentParser(description="CosyVoice 3.0 MLX Synthesis Pipeline for Devotionals")
    parser.add_argument("--text-file", required=True, help="Path to input text file")
    parser.add_argument("--ref-audio", required=True, help="Path to reference audio file (WAV)")
    parser.add_argument("--ref-text-file", required=True, help="Path to reference text file")
    parser.add_argument("--output-mp3", required=True, help="Path to output MP3 file")
    parser.add_argument("--model-id", default="mlx-community/Fun-CosyVoice3-0.5B-2512-8bit", help="HuggingFace model ID")
    parser.add_argument("--speed", type=float, default=1.0, help="Speech rate multiplier")
    parser.add_argument("--max-len", type=int, default=40, help="Max chunk length in characters (default: 40)")
    parser.add_argument("--clause-pause", type=float, default=0.18, help="Pause between sub-clauses in seconds (default: 0.18)")
    parser.add_argument("--sentence-pause", type=float, default=0.30, help="Pause between sentences within paragraph in seconds (default: 0.30)")
    parser.add_argument("--para-pause", type=float, default=0.80, help="Pause between paragraphs in seconds (default: 0.80)")
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

    gen_text = normalize_initials(gen_text)

    # 2. 構建 CosyVoice 3 核心指令 Prompt (<|endofprompt|>)
    formatted_prompt = f"You are a helpful assistant.<|endofprompt|>{ref_text}"

    # 3. 載入模型與參考音訊 (24kHz)
    print(f"  🧠 正在載入 CosyVoice 3.0 模型 ({args.model_id}) 至 Apple Silicon GPU...")
    model = load_model(args.model_id)
    target_sr = model.sample_rate

    ref_audio_arr = load_audio(args.ref_audio, sample_rate=target_sr)

    # 4. 文本智慧分句（三級呼吸停頓分類）
    chunk_items = split_chinese_sentences(gen_text, max_len=args.max_len)
    print(f"  📝 正文共 {len(gen_text)} 字，切分為 {len(chunk_items)} 個語意片段進行批次合成...")
    print(f"  ⏱️ 停頓設定：子句微停頓 {args.clause_pause:.2f} 秒，句間換氣 {args.sentence_pause:.2f} 秒，段落間停頓 {args.para_pause:.2f} 秒 (最大長度 {args.max_len} 字)")

    # 停頓取樣數設定
    pause_clause = np.zeros(int(target_sr * args.clause_pause), dtype=np.float32)
    pause_sentence = np.zeros(int(target_sr * args.sentence_pause), dtype=np.float32)
    pause_paragraph = np.zeros(int(target_sr * args.para_pause), dtype=np.float32)

    output_waves = []
    t_start = datetime.datetime.now()

    for idx, (chunk_text, pause_type) in enumerate(tqdm(chunk_items, desc="  🎙️ 合成進度", unit="句")):
        if not chunk_text.strip():
            continue

        try:
            chunk_audio_parts = []
            for res in model.generate(
                text=chunk_text,
                ref_audio=ref_audio_arr,
                ref_text=formatted_prompt,
                speed=args.speed,
                verbose=False
            ):
                chunk_audio_parts.append(np.array(res.audio, dtype=np.float32))

            if chunk_audio_parts:
                output_waves.extend(chunk_audio_parts)
                if idx < len(chunk_items) - 1:
                    if pause_type == "paragraph":
                        output_waves.append(pause_paragraph)
                    elif pause_type == "sentence":
                        output_waves.append(pause_sentence)
                    else:
                        output_waves.append(pause_clause)
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
            "-ar", "44100",
            "-b:a", "192k",
            args.output_mp3
        ]
        subprocess.run(ffmpeg_cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    finally:
        if os.path.exists(tmp_wav_path):
            os.remove(tmp_wav_path)

if __name__ == "__main__":
    main()

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
import jieba
from pypinyin import load_phrases_dict
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

# 2. 自動繁體化 pypinyin 內建 4.7 萬詞庫（解決繁體字如 沒、難、藉 找不到詞典退回單字錯誤發音問題）
try:
    import opencc
    from pypinyin.phrases_dict import phrases_dict
    s2t = opencc.OpenCC("s2t")
    trad_auto_dict = {}
    for s_phrase, pinyin_list in phrases_dict.items():
        t_phrase = s2t.convert(s_phrase)
        if t_phrase != s_phrase:
            trad_auto_dict[t_phrase] = pinyin_list
    load_phrases_dict(trad_auto_dict)
except Exception as e:
    pass

# 3. 聖經/神學專用發音與繁體高頻多音字核心詞庫（最高優先級覆蓋）
DEVOTIONAL_LEXICON = {
    # 沒字多音字校正（避免被 pypinyin 單字 fallback 誤念為 mei2）
    "沒收": [["mo4"], ["shou1"]],
    "淹沒": [["yan1"], ["mo4"]],
    "沉沒": [["chen2"], ["mo4"]],
    "出沒": [["chu1"], ["mo4"]],
    "埋沒": [["mai2"], ["mo4"]],
    "吞沒": [["tun1"], ["mo4"]],
    "覆沒": [["fu4"], ["mo4"]],
    "沒頂": [["mo4"], ["ding3"]],
    "沒落": [["mo4"], ["luo4"]],
    # 著字多音字與助詞校正（避免繁體「著」退回單字被誤念為 zhu4）
    "得著": [["de2"], ["zhao2"]],
    "摸著": [["mo1"], ["zhao2"]],
    "尋著": [["xun2"], ["zhao2"]],
    "找著": [["zhao3"], ["zhao2"]],
    "碰著": [["peng4"], ["zhao2"]],
    "著急": [["zhao2"], ["ji2"]],
    "著火": [["zhao2"], ["huo3"]],
    "著涼": [["zhao2"], ["liang2"]],
    "睡著": [["shui4"], ["zhao2"]],
    "著落": [["zhuo2"], ["luo4"]],
    "執著": [["zhi2"], ["zhuo2"]],
    "顯著": [["xian3"], ["zhu4"]],
    "著重": [["zhuo2"], ["zhong4"]],
    # 繁體中文「動詞/介詞 + 著」動態助詞（讀作 zhe）
    "藉著": [["jie4"], ["zhe"]],
    "照著": [["zhao4"], ["zhe"]],
    "按著": [["an4"], ["zhe"]],
    "靠著": [["kao4"], ["zhe"]],
    "因著": [["yin1"], ["zhe"]],
    "憑著": [["ping2"], ["zhe"]],
    "循著": [["xun2"], ["zhe"]],
    "順著": [["shun4"], ["zhe"]],
    "隨著": [["sui2"], ["zhe"]],
    "向著": [["xiang4"], ["zhe"]],
    "朝著": [["chao2"], ["zhe"]],
    "對著": [["dui4"], ["zhe"]],
    "活著": [["huo2"], ["zhe"]],
    "看著": [["kan4"], ["zhe"]],
    "聽著": [["ting1"], ["zhe"]],
    "跟著": [["gen1"], ["zhe"]],
    "帶著": [["dai4"], ["zhe"]],
    "等著": [["deng3"], ["zhe"]],
    "望著": [["wang4"], ["zhe"]],
    "守著": [["shou3"], ["zhe"]],
    "存著": [["cun2"], ["zhe"]],
    "懷著": [["huai2"], ["zhe"]],
    "牽著": [["qian1"], ["zhe"]],
    "站著": [["zhan4"], ["zhe"]],
    "坐著": [["zuo4"], ["zhe"]],
    "跪著": [["gui4"], ["zhe"]],
    "拿著": [["na2"], ["zhe"]],
    "走著": [["zou3"], ["zhe"]],
    "躺著": [["tang3"], ["zhe"]],
    "本著": [["ben3"], ["zhe"]],
    "依著": [["yi1"], ["zhe"]],
    "藉由": [["jie4"], ["you2"]],
    "藉此": [["jie4"], ["ci3"]],
    "憑藉": [["ping2"], ["jie4"]],
    # 難字多音字校正（災禍/苦境讀作 nan4）
    "苦難": [["ku3"], ["nan4"]],
    "患難": [["huan4"], ["nan4"]],
    "受難": [["shou4"], ["nan4"]],
    "災難": [["zai1"], ["nan4"]],
    "避難": [["bi4"], ["nan4"]],
    "遇難": [["yu4"], ["nan4"]],
    "殉難": [["xun4"], ["nan4"]],
    "落難": [["luo4"], ["nan4"]],
    "遭難": [["zao1"], ["nan4"]],
    "非難": [["fei1"], ["nan4"]],
    "難處": [["nan2"], ["chu5"]],
    # 十字架與背負校正（背讀作 bei1）
    "背十字架": [["bei1"], ["shi2"], ["zi4"], ["jia4"]],
    "背起十字架": [["bei1"], ["qi3"], ["shi2"], ["zi4"], ["jia4"]],
    "背負": [["bei1"], ["fu4"]],
    "背負著": [["bei1"], ["fu4"], ["zhe"]],
    # 應字多音字校正（供應念 gong1 ying4，應許念 ying1 xu3）
    "供應": [["gong1"], ["ying4"]],
    "應許": [["ying1"], ["xu3"]],
    "應允": [["ying1"], ["yun3"]],
    "應驗": [["ying1"], ["yan4"]],
    "呼應": [["hu1"], ["ying4"]],
    "感應": [["gan3"], ["ying4"]],
    "回應": [["hui2"], ["ying4"]],
    # 重字多音字校正（重新/再次讀作 chong2）
    "重造": [["chong2"], ["zao4"]],
    "重新": [["chong2"], ["xin1"]],
    "重整": [["chong2"], ["zheng3"]],
    "重塑": [["chong2"], ["su4"]],
    "重生": [["chong2"], ["sheng1"]],
    "重生得救": [["chong2"], ["sheng1"], ["de2"], ["jiu4"]],
    "重現": [["chong2"], ["xian4"]],
    "重聚": [["chong2"], ["ju4"]],
    "重申": [["chong2"], ["shen1"]],
    "重複": [["chong2"], ["fu4"]],
    "重組": [["chong2"], ["zu3"]],
    "重疊": [["chong2"], ["die2"]],
    "重建": [["chong2"], ["jian4"]],
    # 差字多音字校正（派遣讀作 chai1）
    "差派": [["chai1"], ["pai4"]],
    "差遣": [["chai1"], ["qian3"]],
    "差使": [["chai1"], ["shi3"]],
    "使差": [["shi3"], ["chai1"]],
    # 行字族
    "行虧負": [["xing2"], ["kui1"], ["fu4"]],
    "行事": [["xing2"], ["shi4"]],
    "行在": [["xing2"], ["zai4"]],
    "行走": [["xing2"], ["zou3"]],
    "行道": [["xing2"], ["dao4"]],
    "行為": [["xing2"], ["wei2"]],
    "施行": [["shi1"], ["xing2"]],
    "同行": [["tong2"], ["xing2"]],
    # 降字族
    "降卑": [["jiang4"], ["bei1"]],
    "降臨": [["jiang4"], ["lin2"]],
    "降下": [["jiang4"], ["xia4"]],
    "降世": [["jiang4"], ["shi4"]],
    "降生": [["jiang4"], ["sheng1"]],
    "投降": [["tou2"], ["xiang2"]],
    # 分字族
    "分量": [["fen4"], ["liang4"]],
    "名分": [["ming2"], ["fen4"]],
    "福分": [["fu2"], ["fen4"]],
    "職分": [["zhi2"], ["fen4"]],
    "身分": [["shen1"], ["fen4"]],
    "本分": [["ben3"], ["fen4"]],
    # 聖經專用人名/地名/詞彙
    "便雅憫": [["bian4"], ["ya3"], ["min3"]],
    "腓利門": [["fei2"], ["li4"], ["men2"]],
    "帖撒羅尼迦": [["tie1"], ["sa1"], ["luo2"], ["ni2"], ["jia1"]],
    "以法他": [["yi3"], ["fa3"], ["ta1"]],
    "撒迦利亞": [["sa1"], ["jia1"], ["li4"], ["ya3"]],
    "瑪拉基": [["ma3"], ["la1"], ["ji1"]],
    "哈利路亞": [["ha1"], ["li4"], ["lu4"], ["ya4"]],
    "亞伯拉罕": [["ya4"], ["bo2"], ["la1"], ["han3"]],
    "以撒": [["yi3"], ["sa3"]],
    "以利亞": [["yi3"], ["li4"], ["ya3"]],
    "以利沙": [["yi3"], ["li4"], ["sha1"]],
    "撒母耳": [["sa1"], ["mu3"], ["er3"]],
    "所羅門": [["suo3"], ["luo2"], ["men2"]],
    "迦百農": [["jia1"], ["bai3"], ["nong2"]],
    "客西馬尼": [["ke4"], ["xi1"], ["ma3"], ["ni2"]],
    "各各他": [["ge4"], ["ge4"], ["ta1"]],
}

# 注入詞庫至 jieba 與 pypinyin（最高優先級）
for _w in DEVOTIONAL_LEXICON.keys():
    jieba.add_word(_w)
load_phrases_dict(DEVOTIONAL_LEXICON)

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

def normalize_quotes(text):
    """
    方案 B：將繁體直角引號「」與『』標準化為 F5-TTS 訓練集能精準識別的引號 “” 與 ‘’
    """
    if not text:
        return ""
    text = text.replace("「", "“").replace("」", "”")
    text = text.replace("『", "‘").replace("』", "’")
    return text

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

    # 方案 B：直角引號標準化
    gen_text = normalize_quotes(gen_text)
    ref_text = normalize_quotes(ref_text)

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

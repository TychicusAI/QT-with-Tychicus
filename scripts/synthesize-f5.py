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
from pypinyin import load_phrases_dict, load_single_dict, lazy_pinyin, Style
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
    estimated_duration,
    SAMPLE_RATE,
    FRAMES_PER_SEC,
    TARGET_RMS,
)

# 2. 自動繁體化 pypinyin 內建 4.7 萬詞庫（使用 s2tw 確保「着->著」、「长->長」完整對齊）
try:
    import opencc
    from pypinyin.phrases_dict import phrases_dict
    s2tw = opencc.OpenCC("s2tw")
    trad_auto_dict = {}
    for s_phrase, pinyin_list in phrases_dict.items():
        t_phrase = s2tw.convert(s_phrase)
        if t_phrase != s_phrase:
            trad_auto_dict[t_phrase] = pinyin_list
    load_phrases_dict(trad_auto_dict)
except Exception as e:
    pass

# 繁體「著」單字預設音強制轉為輕聲 zhe（避免退回 pypinyin 單字庫時誤讀為 zhu4）
try:
    load_single_dict({ord("著"): "zhe"})
except Exception:
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
    # 著字多音字校正（非 zhe 之名詞/動詞明確覆蓋，其餘助詞一律為 zhe）
    "著名": [["zhu4"], ["ming2"]],
    "著作": [["zhu4"], ["zuo4"]],
    "著作等身": [["zhu4"], ["zuo4"], ["deng3"], ["shen1"]],
    "名著": [["ming2"], ["zhu4"]],
    "著述": [["zhu4"], ["shu4"]],
    "專著": [["zhuan1"], ["zhu4"]],
    "原著": [["yuan2"], ["zhu4"]],
    "著稱": [["zhu4"], ["cheng1"]],
    "土著": [["tu3"], ["zhu4"]],
    "編著": [["bian1"], ["zhu4"]],
    "巨著": [["ju4"], ["zhu4"]],
    "著文": [["zhu4"], ["wen2"]],
    "著手": [["zhuo2"], ["shou3"]],
    "著眼": [["zhuo2"], ["yan3"]],
    "著力": [["zhuo2"], ["li4"]],
    "著陸": [["zhuo2"], ["lu4"]],
    "著想": [["zhuo2"], ["xiang3"]],
    "穿著": [["chuan1"], ["zhuo2"]],
    "膠著": [["jiao1"], ["zhuo2"]],
    "沉著": [["chen2"], ["zhuo2"]],
    "意味著": [["yi4"], ["wei4"], ["zhe"]],
    "標誌著": [["biao1"], ["zhi4"], ["zhe"]],
    "象徵著": [["xiang4"], ["zheng1"], ["zhe"]],
    "顯明著": [["xian3"], ["ming2"], ["zhe"]],
    "伴隨著": [["ban4"], ["sui2"], ["zhe"]],
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
    # 長字多音字校正（時間/空間長度讀作 chang2，年長/長輩/生長讀作 zhang3）
    "長凳": [["chang2"], ["deng4"]],
    "玄關長凳": [["xuan2"], ["guan1"], ["chang2"], ["deng4"]],
    "長椅": [["chang2"], ["yi3"]],
    "長桌": [["chang2"], ["zhuo1"]],
    "長條": [["chang2"], ["tiao2"]],
    "長年": [["chang2"], ["nian2"]],
    "長年累月": [["chang2"], ["nian2"], ["lei3"], ["yue4"]],
    "日積月累": [["ri4"], ["ji1"], ["yue4"], ["lei3"]],
    "長久": [["chang2"], ["jiu3"]],
    "長期": [["chang2"], ["qi1"]],
    "長遠": [["chang2"], ["yuan3"]],
    "長存": [["chang2"], ["cun2"]],
    "長達": [["chang2"], ["da2"]],
    "長夜": [["chang2"], ["ye4"]],
    "長長": [["chang2"], ["chang2"]],
    "越來越長": [["yue4"], ["lai2"], ["yue4"], ["chang2"]],
    "越長": [["yue4"], ["chang2"]],
    "更長": [["geng4"], ["chang2"]],
    "很長": [["hen3"], ["chang2"]],
    "較長": [["jiao4"], ["chang2"]],
    "長短": [["chang2"], ["duan3"]],
    "長度": [["chang2"], ["du4"]],
    "生長": [["sheng1"], ["zhang3"]],
    "成長": [["cheng2"], ["zhang3"]],
    "長大": [["zhang3"], ["da4"]],
    "長老": [["zhang3"], ["lao3"]],
    "長子": [["zhang3"], ["zi3"]],
    # 繁體中文「動詞/介詞 + 著」動態助詞（讀作 zhe）
    "亮著": [["liang4"], ["zhe"]],
    "照亮著": [["zhao4"], ["liang4"], ["zhe"]],
    "點亮著": [["dian3"], ["liang4"], ["zhe"]],
    "經歷著": [["jing1"], ["li4"], ["zhe"]],
    "體驗著": [["ti3"], ["yan4"], ["zhe"]],
    "承受著": [["cheng2"], ["shou4"], ["zhe"]],
    "面對著": [["mian4"], ["dui4"], ["zhe"]],
    "凝結著": [["ning2"], ["jie2"], ["zhe"]],
    "注視著": [["zhu4"], ["shi4"], ["zhe"]],
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
    # 從字族（從容讀作 cong1 rong2）
    "從容": [["cong1"], ["rong2"]],
    "從容不迫": [["cong1"], ["rong2"], ["bu4"], ["po4"]],
    "從容面對": [["cong1"], ["rong2"], ["mian4"], ["dui4"]],
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

def custom_convert_char_to_pinyin(text_list, polyphone=True):
    """
    自訂 G2P 轉換器：
    1. 支援 F5-TTS 的雙引號與英文標點轉換
    2. 斷詞後是單字詞「著」時，G2P 強制轉為輕聲 zhe（即 zhe5），杜絕誤讀為 zhu4
    3. 保留 multi-character 詞庫（如 著名、執著、著急）之精準詞義發音
    """
    final_text_list = []
    god_knows_why_en_testset_contains_zh_quote = str.maketrans(
        {"“": '"', "”": '"', "‘": "'", "’": "'"}
    )
    custom_trans = str.maketrans({";": ","})
    for text in text_list:
        char_list = []
        text = text.translate(god_knows_why_en_testset_contains_zh_quote)
        text = text.translate(custom_trans)
        for seg in jieba.cut(text):
            seg_byte_len = len(bytes(seg, "UTF-8"))
            if seg_byte_len == len(seg):  # 若為純英文字母與 ASCII 符號
                if char_list and seg_byte_len > 1 and char_list[-1] not in " :'\"":
                    char_list.append(" ")
                char_list.extend(seg)
            elif polyphone and seg_byte_len == 3 * len(seg):  # 若為純中文字詞
                # 關鍵防護：若斷詞後為單字詞「著」，一律轉為輕聲 zhe（即 zhe5）
                if seg == "著":
                    seg_pinyin = ["zhe"]
                else:
                    seg_pinyin = lazy_pinyin(seg, style=Style.TONE3, tone_sandhi=True)
                for c in seg_pinyin:
                    if c not in "。，、；：？！《》【】—…":
                        char_list.append(" ")
                    char_list.append(c)
            else:  # 若為中英混合或符號混合
                for c in seg:
                    if ord(c) < 256:
                        char_list.extend(c)
                    else:
                        if c not in "。，、；：？！《》【】—…":
                            char_list.append(" ")
                            if c == "著":
                                char_list.append("zhe")
                            else:
                                char_list.extend(lazy_pinyin(c, style=Style.TONE3, tone_sandhi=True))
                        else:
                            char_list.append(c)
        final_text_list.append(char_list)

    return final_text_list

def split_chinese_sentences(text, max_len=75):
    """
    依據段落（換行）先切分大組，再依據中文句號、問號、驚嘆號、分號進行自然切句，
    合併為每段約 30~75 字左右的呼吸長度，避免過長溢出或過短碎裂。
    回傳：[(chunk_text, is_para_end), ...]
    其中 is_para_end 為 True 表示該 chunk 為該段落的末尾，後續應插入較長之段落停頓（silence）。
    """
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
                # 若單句本身長度即超過 max_len，以逗號再微切
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
            # 標記段落末尾（供段間較長停頓）
            all_chunks.append((current, True))

    return all_chunks

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
    方案 B：將繁體直角引號「」與『』標準化為 F5-TTS 訓練集能精準識別的引號 “” 與 ‘’
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

def main():
    parser = argparse.ArgumentParser(description="F5-TTS MLX Synthesis Pipeline for Devotionals")
    parser.add_argument("--text-file", required=True, help="Path to input text file")
    parser.add_argument("--ref-audio", required=True, help="Path to reference audio file (WAV)")
    parser.add_argument("--ref-text-file", required=True, help="Path to reference text file")
    parser.add_argument("--output-mp3", required=True, help="Path to output MP3 file")
    parser.add_argument("--speed", type=float, default=1.0, help="Speech rate multiplier")
    parser.add_argument("--sentence-pause", type=float, default=0.25, help="Pause between sentences within paragraph in seconds (default: 0.25)")
    parser.add_argument("--para-pause", type=float, default=0.8, help="Pause between paragraphs in seconds (default: 0.8)")
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

    # 阿拉伯數字轉中文數字標準化
    gen_text = normalize_numbers(gen_text)
    ref_text = normalize_numbers(ref_text)

    # 單獨冒號微調為逗號（自然呼吸停頓；此時支援包含「、『在內的所有引號形態）
    gen_text = normalize_colons(gen_text)
    ref_text = normalize_colons(ref_text)

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

    # 中文智慧分句（依段落結構化處理）
    chunk_items = split_chinese_sentences(gen_text, max_len=75)
    print(f"  📝 正文共 {len(gen_text)} 字，切分為 {len(chunk_items)} 個語音片段進行批次合成...")
    print(f"  ⏱️ 停頓設定：句間停頓 {args.sentence_pause:.2f} 秒，段落間停頓 {args.para_pause:.2f} 秒")

    # 載入 F5-TTS 模型
    print("  🧠 正在載入 F5-TTS MLX 模型至 Apple Silicon GPU...")
    f5tts = F5TTS.from_pretrained("lucasnewman/f5-tts-mlx")

    # 句間停頓波形與段落停頓波形
    pause_sentence_samples = int(SAMPLE_RATE * args.sentence_pause)
    pause_sentence_wave = mx.zeros((pause_sentence_samples,))

    pause_para_samples = int(SAMPLE_RATE * args.para_pause)
    pause_para_wave = mx.zeros((pause_para_samples,))

    output_waves = []
    t_start = datetime.datetime.now()

    for idx, (chunk, is_para_end) in enumerate(chunk_items):
        dur = int(estimated_duration(audio, ref_text, chunk, args.speed) * FRAMES_PER_SEC)
        text_pinyin = custom_convert_char_to_pinyin([ref_text + " " + chunk])

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
        if idx < len(chunk_items) - 1:
            if is_para_end:
                output_waves.append(pause_para_wave)
            else:
                output_waves.append(pause_sentence_wave)

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

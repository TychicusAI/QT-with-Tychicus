import asyncio
import os
import subprocess
import edge_tts

# 控制在 35 字左右（約 8.5~9 秒），確保 F5-TTS 零樣本克隆擁有最佳的語境窗口與合成速度
TEXT = "親愛的弟兄姊妹平安，在病痛與疲憊中，願主輕輕托住你，賜你夠用的恩典與安息。"
VOICES_DIR = os.path.join(os.getcwd(), "data", "voices")

# 微光版（Solace）候選音色：
# 1. zh-TW-HsiaoChenNeural (台灣溫潤女聲，搭配 -8% 語速與 -2Hz 音高，親切柔和、極具病榻陪伴感)
# 2. zh-CN-XiaoxiaoNeural (溫暖療癒女聲，搭配 -8% 語速與 -2Hz 音高)
# 3. zh-TW-HsiaoYuNeural (台灣輕柔女聲)

async def main():
    os.makedirs(VOICES_DIR, exist_ok=True)

    txt_path = os.path.join(VOICES_DIR, "solace_female.txt")
    with open(txt_path, "w", encoding="utf-8") as f:
        f.write(TEXT + "\n")
    print(f"✓ Wrote {txt_path}")

    # 主音色：採用台灣溫潤女聲 zh-TW-HsiaoChenNeural，語速放慢 (-8%)、音高微降 (-2Hz) 營造夜間病榻的低刺激撫慰感
    voice = "zh-TW-HsiaoChenNeural"
    mp3_path = os.path.join(VOICES_DIR, "solace_female.mp3")
    wav_path = os.path.join(VOICES_DIR, "solace_female.wav")

    communicate = edge_tts.Communicate(TEXT, voice, rate="-8%", pitch="-2Hz")
    await communicate.save(mp3_path)
    print(f"✓ Generated {mp3_path} using {voice} (rate=-8%, pitch=-2Hz)")

    # 轉換為 F5-TTS 所需的 24kHz 單聲道 WAV
    subprocess.run(
        ["ffmpeg", "-nostdin", "-y", "-i", mp3_path, "-ar", "24000", "-ac", "1", wav_path],
        check=True,
        stdin=subprocess.DEVNULL,
    )
    print(f"✓ Converted to {wav_path}")

if __name__ == "__main__":
    asyncio.run(main())

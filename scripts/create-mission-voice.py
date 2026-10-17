import asyncio
import os
import subprocess
import edge_tts

TEXT = "親愛的同路人平安，願我們在今天的靈修中，貼近萬國之主的心腸，領受差遣的恩典與力量。"
VOICES_DIR = os.path.join(os.getcwd(), "data", "voices")

# Available candidates:
# 1. zh-CN-YunjianNeural (Deep, narrative, mature, documentary tone - excellent for mission)
# 2. zh-CN-YunyangNeural (Professional, authoritative, broadcasting)
# 3. zh-CN-YunzeNeural (Calm, mature elder)
# 4. zh-TW-YunJheNeural (Taiwan Male, if preferred)

async def main():
    os.makedirs(VOICES_DIR, exist_ok=True)
    
    # Save the txt reference
    txt_path = os.path.join(VOICES_DIR, "mission_male.txt")
    with open(txt_path, "w", encoding="utf-8") as f:
        f.write(TEXT + "\n")
    print(f"✓ Wrote {txt_path}")
    
    # Generate MP3 using zh-CN-YunjianNeural (深沉敘事、田野滄桑感)
    voice = "zh-CN-YunjianNeural"
    mp3_path = os.path.join(VOICES_DIR, "mission_male.mp3")
    wav_path = os.path.join(VOICES_DIR, "mission_male.wav")
    
    communicate = edge_tts.Communicate(TEXT, voice, rate="-4%", pitch="-2Hz")
    await communicate.save(mp3_path)
    print(f"✓ Generated {mp3_path} using {voice}")
    
    # Convert to 16kHz / 24kHz WAV for F5-TTS
    cmd = f'ffmpeg -y -i "{mp3_path}" -ar 24000 -ac 1 "{wav_path}"'
    subprocess.run(cmd, shell=True, check=True)
    print(f"✓ Converted to {wav_path}")

if __name__ == "__main__":
    asyncio.run(main())

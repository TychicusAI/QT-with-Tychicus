import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const DAY_MAP = {
  週一: "mon",
  週二: "tue",
  週三: "wed",
  週四: "thu",
  週五: "fri",
  週六: "sat",
  週日: "sun",
};

/**
 * 清洗 Markdown 文本以適合 TTS 朗讀
 * 1. 遞迴移除所有半形 () 與全形 （） 括弧及其內部所有內容
 * 2. 移除 Markdown 標題、粗體、斜體、引用、橫線、超連結語法
 * 3. 清理多餘換行與空白，保持段落之間的平滑停頓
 */
export function cleanMessageForTTS(rawMessage) {
  if (!rawMessage) return "";

  let text = rawMessage;

  // 1. 遞迴移除所有半形 () 與全形 （） 括弧及其內容（包含巢狀）
  let prev;
  do {
    prev = text;
    text = text.replace(/[（(][^（）()]*[）)]/g, "");
  } while (text !== prev);

  // 1.1 英文縮寫過濾但書：若遇到英文人名縮寫（如 N. T.、J. I.、G. K. 等），TTS 朗讀時自動略過，保留中文全名
  text = text.replace(/\b(?:[A-Z]\.\s*)+/g, "");
  // 壓縮中文字元與中文字元/標點之間因移除縮寫產生的多餘空白
  text = text.replace(/([\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef])\s+(?=[\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef])/g, "$1");
  text = text.replace(/(?<=[\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef])\s+([\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef])/g, "$1");

  // 2. 移除 Markdown 語法
  // 移除圖片語法 ![alt](url)
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, "");
  // 轉換連結 [文字](url) -> 文字
  text = text.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
  // 移除粗體與斜體 ***word***, **word**, *word*
  text = text.replace(/\*{1,3}([^*]+)\*{1,3}/g, "$1");
  text = text.replace(/_{1,3}([^_]+)_{1,3}/g, "$1");
  // 移除引用引號開頭 >
  text = text.replace(/^>\s*/gm, "");
  // 移除標題開頭 #
  text = text.replace(/^#{1,6}\s+/gm, "");
  // 移除水平分割線 --- 或 ***
  text = text.replace(/^[-*_]{3,}\s*$/gm, "");
  // 移除行內程式碼或代碼區塊
  text = text.replace(/`([^`]+)`/g, "$1");

  // 3. 符號微調以利朗讀
  // 單獨冒號微調：若冒號後方未跟隨引號（包含直角引號「、『以及“、‘、"、'），轉換為逗號以利自然氣息停頓
  text = text.replace(/[:：](?!\s*["“'‘「『])/g, "，");
  // 方案 B：直角引號標準化為 F5-TTS 訓練集能精準識別的引號
  text = text.replace(/「/g, "“").replace(/」/g, "”");
  text = text.replace(/『/g, "‘").replace(/』/g, "’");
  text = text.replace(/，，+/g, "，");
  text = text.replace(/、、+/g, "、");
  text = text.replace(/……+/g, "。");
  text = text.replace(/[—–-]{2,}/g, "，");
  text = text.replace(/([。！？；])\s*，/g, "$1");
  text = text.replace(/，\s*([。！？；])/g, "$1");

  // 4. 清理空白行，保留段落之間的單一換行
  const paragraphs = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return paragraphs.join("\n\n");
}

/**
 * 解析 Markdown 檔案中的每日信息
 */
function parseMessagesFromMarkdown(content) {
  const daySections = content.split(/(?=##\s*(?:【)?週[一二三四五六日](?:】)?)/g);
  const result = [];

  for (const sec of daySections) {
    const trimmed = sec.trim();
    if (!trimmed) continue;

    const dayMatch = trimmed.match(/##\s*(?:【)?(週[一二三四五六日])(?:】)?/);
    if (!dayMatch) continue;

    const dayLabel = dayMatch[1];
    const dayId = DAY_MAP[dayLabel];
    if (!dayId) continue;

    const dayBodyMatch = trimmed.match(/##[^\n]*\n([\s\S]*)/);
    const dayBody = dayBodyMatch ? dayBodyMatch[1] : "";

    // 提取今日信息
    const messageMatch = dayBody.match(/###\s*【信息】\s*\n+([\s\S]*?)(?=###\s*【建議禱告】|###|$)/);
    if (messageMatch) {
      const rawMsg = messageMatch[1].trim();
      const cleanMsg = cleanMessageForTTS(rawMsg);
      result.push({
        dayLabel,
        dayId,
        rawMsg,
        cleanMsg,
      });
    }
  }

  return result;
}

/**
 * 依據版本代碼解析參考音檔與參考文本路徑
 */
function resolveVoicePaths(versionKey) {
  const voicesDir = path.join(process.cwd(), "data", "voices");
  let voiceStem = "family_female";
  if (versionKey === "youth" || versionKey === "family") {
    voiceStem = "family_female";
  } else if (versionKey === "encore" || versionKey === "mission") {
    voiceStem = "mission_male";
  }

  const refAudio = path.join(voicesDir, `${voiceStem}.wav`);
  const refText = path.join(voicesDir, `${voiceStem}.txt`);

  if (!fs.existsSync(refAudio) || !fs.existsSync(refText)) {
    throw new Error(`找不到音色參考檔案: ${refAudio} 或 ${refText}`);
  }
  return { refAudio, refText };
}

function buildExtraArgs({ sentencePause, paraPause, clausePause, maxLen, steps, cfg, speed } = {}) {
  let extraArgs = "";
  if (sentencePause) extraArgs += ` --sentence-pause ${sentencePause}`;
  if (paraPause) extraArgs += ` --para-pause ${paraPause}`;
  if (clausePause) extraArgs += ` --clause-pause ${clausePause}`;
  if (maxLen) extraArgs += ` --max-len ${maxLen}`;
  if (steps) extraArgs += ` --steps ${steps}`;
  if (cfg) extraArgs += ` --cfg ${cfg}`;
  if (speed) extraArgs += ` --speed ${speed}`;
  return extraArgs;
}

/**
 * 單一常駐程序批次執行 F5-TTS MLX 合成（僅載入一次 58.4 萬詞大字典與 1.35GB 模型權重）
 */
function synthesizeF5Batch(jobs, options = {}) {
  if (!jobs || jobs.length === 0) return;
  const tmpDir = path.join(process.cwd(), ".next", "cache", "tts-tmp");
  fs.mkdirSync(tmpDir, { recursive: true });
  const batchJsonFile = path.join(tmpDir, `f5-batch-${Date.now()}-${Math.random().toString(36).slice(2)}.json`);
  const extraArgs = buildExtraArgs(options);

  try {
    fs.writeFileSync(batchJsonFile, JSON.stringify(jobs, null, 2), "utf-8");
    const cmd = `uv run --with f5-tts-mlx --with opencc-python-reimplemented --with cn2an --with scipy python3 scripts/synthesize-f5.py --batch-json "${batchJsonFile}"${extraArgs}`;
    execSync(cmd, { stdio: "inherit", env: { ...process.env, HF_HUB_OFFLINE: "1" } });
  } finally {
    if (fs.existsSync(batchJsonFile)) {
      try {
        fs.unlinkSync(batchJsonFile);
      } catch {}
    }
  }
}

/**
 * 執行 CosyVoice 3.0 單篇合成
 */
function synthesizeCosyVoiceSingle(text, refAudio, refText, outputPath, options = {}) {
  const tmpDir = path.join(process.cwd(), ".next", "cache", "tts-tmp");
  fs.mkdirSync(tmpDir, { recursive: true });
  const tmpTextFile = path.join(tmpDir, `cosyvoice-${Date.now()}-${Math.random().toString(36).slice(2)}.txt`);
  const extraArgs = buildExtraArgs(options);

  try {
    fs.writeFileSync(tmpTextFile, text, "utf-8");
    const cmd = `uv run --with mlx-audio-plus --with cn2an python3 scripts/synthesize-cosyvoice.py --text-file "${tmpTextFile}" --ref-audio "${refAudio}" --ref-text-file "${refText}" --output-mp3 "${outputPath}"${extraArgs}`;
    execSync(cmd, { stdio: "inherit", env: { ...process.env, HF_HUB_OFFLINE: "1" } });
  } finally {
    if (fs.existsSync(tmpTextFile)) {
      try {
        fs.unlinkSync(tmpTextFile);
      } catch {}
    }
  }
}

/**
 * 主流程
 */
async function main() {
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const allWeeks = args.includes("--all");
  const weekArgIdx = args.indexOf("--week");
  const specifiedWeek = weekArgIdx !== -1 ? args[weekArgIdx + 1] : null;
  const dayArgIdx = args.indexOf("--day");
  const specifiedDay = dayArgIdx !== -1 ? args[dayArgIdx + 1] : null;
  const verArgIdx = args.indexOf("--version");
  const specifiedVersion = verArgIdx !== -1 ? args[verArgIdx + 1] : null;
  const engineArgIdx = args.indexOf("--engine");
  const engine = engineArgIdx !== -1 ? args[engineArgIdx + 1] : "f5";
  const paraPauseIdx = args.indexOf("--para-pause");
  const specifiedParaPause = paraPauseIdx !== -1 ? args[paraPauseIdx + 1] : null;
  const sentencePauseIdx = args.indexOf("--sentence-pause");
  const specifiedSentencePause = sentencePauseIdx !== -1 ? args[sentencePauseIdx + 1] : null;
  const clausePauseIdx = args.indexOf("--clause-pause");
  const specifiedClausePause = clausePauseIdx !== -1 ? args[clausePauseIdx + 1] : null;
  const maxLenIdx = args.indexOf("--max-len");
  const specifiedMaxLen = maxLenIdx !== -1 ? args[maxLenIdx + 1] : null;
  const stepsIdx = args.indexOf("--steps");
  const specifiedSteps = stepsIdx !== -1 ? args[stepsIdx + 1] : null;
  const cfgIdx = args.indexOf("--cfg");
  const specifiedCfg = cfgIdx !== -1 ? args[cfgIdx + 1] : null;
  const speedIdx = args.indexOf("--speed");
  const specifiedSpeed = speedIdx !== -1 ? args[speedIdx + 1] : null;

  const engineName = engine === "cosyvoice" ? "CosyVoice 3.0 (Fun-CosyVoice3-0.5B MLX)" : "F5-TTS MLX (常駐批次加速)";

  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    console.error("❌ 找不到 data 目錄！");
    process.exit(1);
  }

  // 取得所有可用的週次資料夾（YYYY-MM-DD）
  const weekDirs = fs
    .readdirSync(dataDir)
    .filter((name) => /^\d{4}-\d{2}-\d{2}$/.test(name) && fs.statSync(path.join(dataDir, name)).isDirectory())
    .sort();

  if (weekDirs.length === 0) {
    console.error("❌ 在 data/ 中未發現任何週次目錄！");
    process.exit(1);
  }

  // 決定要處理的週次清單
  let targetWeeks = [];
  if (specifiedWeek) {
    if (!weekDirs.includes(specifiedWeek)) {
      console.error(`❌ 指定的週次 ${specifiedWeek} 不存在！`);
      process.exit(1);
    }
    targetWeeks = [specifiedWeek];
  } else if (allWeeks) {
    targetWeeks = weekDirs;
  } else {
    // 預設為最新一週
    targetWeeks = [weekDirs[weekDirs.length - 1]];
  }

  console.log(`\n🎙️ ========================================================`);
  console.log(`🎙️   靈修推基古語音朗讀生成管線 (TTS Generation Pipeline)`);
  console.log(`🎙️   語音引擎: ${engineName}`);
  console.log(`🎙️   運算架構: Apple Silicon GPU (MLX 原生加速 / 零樣本聲音克隆)`);
  console.log(`🎙️   目標週次: ${targetWeeks.join(", ")}`);
  console.log(`🎙️   強制覆蓋: ${force ? "是 (Force)" : "否 (已存在則跳過)"}`);
  console.log(`🎙️ ========================================================\n`);

  let totalSkipped = 0;
  const pendingJobs = [];

  for (const weekId of targetWeeks) {
    const weekPath = path.join(dataDir, weekId);
    console.log(`\n📅 正在掃描週次：${weekId}`);

    let versions = [
      { key: "youth", file: "qt_for_youth.md", name: "青年版" },
      { key: "family", file: "qt_for_family.md", name: "家庭版" },
      { key: "encore", file: "qt_for_encore.md", name: "樂齡版" },
      { key: "mission", file: "qt_for_mission.md", name: "宣教版" },
    ];
    if (specifiedVersion) {
      versions = versions.filter((v) => v.key === specifiedVersion);
    }

    for (const v of versions) {
      const mdPath = path.join(weekPath, v.file);
      if (!fs.existsSync(mdPath)) {
        console.warn(`  ⚠️ 找不到 ${v.file}，略過。`);
        continue;
      }

      const content = fs.readFileSync(mdPath, "utf-8");
      let dayMessages = parseMessagesFromMarkdown(content);
      if (specifiedDay) {
        dayMessages = dayMessages.filter((d) => d.dayId === specifiedDay || d.dayLabel === specifiedDay);
      }

      const outDir = path.join(process.cwd(), "public", "audio", weekId, v.key);
      fs.mkdirSync(outDir, { recursive: true });
      const { refAudio, refText } = resolveVoicePaths(v.key);

      for (const item of dayMessages) {
        const outPath = path.join(outDir, `${item.dayId}.mp3`);
        const relativeOut = path.relative(process.cwd(), outPath);

        if (fs.existsSync(outPath) && !force) {
          console.log(`  ⏩ [${v.name}][${item.dayLabel}] 已存在，略過: ${relativeOut}`);
          totalSkipped++;
          continue;
        }

        pendingJobs.push({
          label: `${weekId} ${v.name} ${item.dayLabel}`,
          text: item.cleanMsg,
          refAudio,
          refText,
          outputPath: outPath,
          relativeOut,
        });
      }
    }
  }

  if (pendingJobs.length === 0) {
    console.log(`\n🎉 無需新增音檔（共略過 ${totalSkipped} 個已存在音檔）。\n`);
    return;
  }

  const synthOptions = {
    sentencePause: specifiedSentencePause,
    paraPause: specifiedParaPause,
    clausePause: specifiedClausePause,
    maxLen: specifiedMaxLen,
    steps: specifiedSteps,
    cfg: specifiedCfg,
    speed: specifiedSpeed,
  };

  let totalProcessed = 0;
  const startTime = Date.now();

  if (engine === "cosyvoice") {
    for (const job of pendingJobs) {
      console.log(`  🎙️ 正在以 [${engineName}] 生成 [${job.label}] (字數: ${job.text.length} 字)...`);
      try {
        synthesizeCosyVoiceSingle(job.text, job.refAudio, job.refText, job.outputPath, synthOptions);
        totalProcessed++;
      } catch (err) {
        console.error(`  ❌ 合成失敗 [${job.label}]:`, err.message);
      }
    }
  } else {
    console.log(`\n🚀 共排入 ${pendingJobs.length} 個語音合成任務，啟動單一常駐 F5-TTS MLX GPU 程序批次處理...`);
    try {
      synthesizeF5Batch(pendingJobs, synthOptions);
      totalProcessed = pendingJobs.filter((j) => fs.existsSync(j.outputPath)).length;
    } catch (err) {
      console.error(`  ❌ 批次合成發生錯誤:`, err.message);
    }
  }

  const totalSec = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n🎉 TTS 生成完成！成功生成 ${totalProcessed} 個音檔，略過 ${totalSkipped} 個音檔（總耗時 ${totalSec}s）。\n`);
}

main().catch((err) => {
  console.error("❌ 發生未捕捉錯誤:", err);
  process.exit(1);
});

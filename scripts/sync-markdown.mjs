import fs from "fs";
import path from "path";

let BIBLE_CACHE = {};
const bibleCachePath = path.join(process.cwd(), "data", "bible-cache.json");
if (fs.existsSync(bibleCachePath)) {
  try {
    BIBLE_CACHE = JSON.parse(fs.readFileSync(bibleCachePath, "utf-8"));
  } catch (e) {
    console.warn("Failed to load bible-cache.json", e);
  }
}

const DAY_MAP = {
  週一: { id: "mon", dayNumber: 1 },
  週二: { id: "tue", dayNumber: 2 },
  週三: { id: "wed", dayNumber: 3 },
  週四: { id: "thu", dayNumber: 4 },
  週五: { id: "fri", dayNumber: 5 },
  週六: { id: "sat", dayNumber: 6 },
  週日: { id: "sun", dayNumber: 7 },
};

const BIBLE_BOOK_MAP = {
  創世記: "Gen", 出埃及記: "Exod", 利未記: "Lev", 民數記: "Num", 申命記: "Deut",
  約書亞記: "Josh", 士師記: "Judg", 路得記: "Ruth", 撒母耳記上: "1Sam", 撒母耳記下: "2Sam",
  列王紀上: "1Kgs", 列王紀下: "2Kgs", 歷代志上: "1Chr", 歷代志下: "2Chr", 以斯拉記: "Ezra",
  尼希米記: "Neh", 以斯帖記: "Esth", 約伯記: "Job", 詩篇: "Ps", 箴言: "Prov",
  傳道書: "Eccl", 雅歌: "Song", 以賽亞書: "Isa", 耶利米書: "Jer", 耶利米哀歌: "Lam",
  以西結書: "Ezek", 但以理書: "Dan", 何西阿書: "Hos", 約珥書: "Joel", 阿摩司書: "Amos",
  俄巴底亞書: "Obad", 約拿書: "Jonah", 彌迦書: "Mic", 那鴻書: "Nah", 哈巴谷書: "Hab",
  西番雅書: "Zeph", 哈該書: "Hag", 撒迦利亞書: "Zech", 瑪拉基書: "Mal",
  馬太福音: "Matt", 馬可福音: "Mark", 路加福音: "Luke", 約翰福音: "John", 使徒行傳: "Acts",
  羅馬書: "Rom", 哥林多前書: "1Cor", 哥林多後書: "2Cor", 加拉太書: "Gal", 以弗所書: "Eph",
  腓立比書: "Phil", 歌羅西書: "Col", 帖撒羅尼迦前書: "1Thess", 帖撒羅尼迦後書: "2Thess",
  提摩太前書: "1Tim", 提摩太後書: "2Tim", 提多書: "Titus", 腓利門書: "Phlm", 希伯來書: "Heb",
  雅各書: "Jas", 彼得前書: "1Pet", 彼得後書: "2Pet", 約翰一書: "1John", 約翰二書: "2John",
  約翰三書: "3John", 猶大書: "Jude", 啟示錄: "Rev"
};

function getBibliaUrl(ref) {
  if (!ref) return "";
  const match = ref.match(/^([\u4e00-\u9fa5]+)\s*(\d+)(?:[:：](\d+(?:-\d+)?))?/);
  if (!match) return "";
  const bookName = match[1];
  const chapter = match[2];
  const verse = match[3];
  const bookCode = BIBLE_BOOK_MAP[bookName];
  if (!bookCode) return "";
  const passage = verse ? `${bookCode}${chapter}.${verse}` : `${bookCode}${chapter}`;
  return `https://biblia.com/books/hlybbltrdshndtn/${passage}`;
}

function parseMarkdown(content, fileId, version, isCurrent = true) {
  const lines = content.split("\n");

  let title = "";
  let book = "";
  let foreword = "";

  // 1. Check for bullet-style metadata
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.includes("【經文範圍】")) {
      const m = trimmed.match(/【經文範圍】[＊*]*\s*(.+)$/);
      if (m) book = m[1].replace(/^[：:\s]+/, "").trim();
    } else if (trimmed.includes("經文範圍：")) {
      book = trimmed.replace("經文範圍：", "").trim();
    }

    if (trimmed.includes("【總主題】")) {
      const m = trimmed.match(/【總主題】[＊*]*\s*(.+)$/);
      if (m) title = m[1].replace(/^[：:\s]+/, "").trim();
    }

    if (trimmed.includes("【簡述】")) {
      const m = trimmed.match(/【簡述】[＊*]*\s*([\s\S]+)$/);
      if (m) foreword = m[1].replace(/^[：:\s]+/, "").trim();
    }
  }

  // Fallback for title and book from header lines if not matched above
  if (!title || !book || !foreword) {
    let i = 0;
    while (i < lines.length && !lines[i].startsWith("## ")) {
      const line = lines[i].trim();
      if (!title && line && !line.startsWith("===") && !line.startsWith("#") && !line.startsWith("*") && !line.startsWith("經文範圍")) {
        title = line;
      }
      if (!book && line.startsWith("經文範圍：")) {
        book = line.replace("經文範圍：", "").trim();
      }
      i++;
    }

    if (!foreword && i < lines.length && lines[i].includes("前言")) {
      i++;
      const forewordLines = [];
      while (i < lines.length && !lines[i].startsWith("## ")) {
        forewordLines.push(lines[i]);
        i++;
      }
      foreword = forewordLines.join("\n").trim();
    }
  }

  if (!title) {
    title = version === "family" ? "在家庭張力與承諾轉折中重建信任" : "活在坦誠與恩典中：重塑誠信與愛";
  }
  if (!book) {
    book = "哥林多後書 1:12-2:13";
  }

  // 2. Parse Day sections
  const daySections = content.split(/(?=##\s*(?:【)?週[一二三四五六日](?:】)?)/g);
  const days = [];

  for (const sec of daySections) {
    const trimmed = sec.trim();
    if (!trimmed) continue;

    const dayMatch = trimmed.match(/##\s*(?:【)?(週[一二三四五六日])(?:】)?(?:[^\n]*)?\n([\s\S]*)/);
    if (!dayMatch) continue;

    const dayLabel = dayMatch[1];
    const dayBody = dayMatch[2];
    const dayInfo = DAY_MAP[dayLabel] || { id: "mon", dayNumber: 1 };

    // Theme
    const themeMatch = dayBody.match(/###\s*【主題】\s*\n+([^\n#]+)/);
    const dayTheme = themeMatch ? themeMatch[1].trim() : `${dayLabel} 靈修`;

    // Scripture
    let scriptureRef = book;
    let scriptureText = "";
    let scriptureVersion = "";

    const versionMatch = dayBody.match(/###\s*【經文】[（(]([^）)]+)[）)]/);
    if (versionMatch) {
      scriptureVersion = versionMatch[1].trim();
    }

    const scriptureBlockMatch = dayBody.match(/###\s*【經文】[^\n]*\n+([\s\S]*?)(?=###|$)/);
    if (scriptureBlockMatch) {
      const block = scriptureBlockMatch[1].trim();
      const boldRefMatch = block.match(/^\*\*([^*]+)\*\*\s*\n+([\s\S]*)/);
      if (boldRefMatch) {
        scriptureRef = boldRefMatch[1].trim();
        const textContent = boldRefMatch[2].replace(/^>\s*/gm, "").trim();
        scriptureText = textContent.replace(/^[「"“]|["”」]$/g, "").trim();
      } else {
        const trailingRefMatch = block.match(/[（(]([^）)]+)[）)]\s*$/);
        if (trailingRefMatch) {
          scriptureRef = trailingRefMatch[1].trim();
        }
        const cleanBlock = block.replace(/[（(][^）)]+[）)]\s*$/, "").replace(/^>\s*/gm, "").trim();
        scriptureText = cleanBlock.replace(/^[「"“]|["”」]$/g, "").trim();
      }
    }

    // Message
    let message = "";
    const messageMatch = dayBody.match(/###\s*【信息】\s*\n+([\s\S]*?)(?=###\s*【建議禱告】|###|$)/);
    if (messageMatch) {
      message = messageMatch[1].trim();
    }

    // Suggested Prayer
    let suggestedPrayer = "";
    const prayerMatch = dayBody.match(/###\s*【建議禱告】\s*\n+([\s\S]*?)(?=###\s*【延伸研讀】|###|$)/);
    if (prayerMatch) {
      suggestedPrayer = prayerMatch[1].trim().replace(/^[「"“]|["”」]$/g, "");
    }

    // Extended Study
    const extendedStudy = [];
    const extendedMatch = dayBody.match(/###\s*【延伸研讀】\s*\n+([\s\S]*?)(?=###\s*【默想問題】|###|$)/);
    if (extendedMatch) {
      const extContent = extendedMatch[1].trim();
      const extLines = extContent.split("\n");
      let currentItem = null;

      for (const el of extLines) {
        const line = el.trim();
        if (!line) continue;

        // Pattern 1: * **約翰一書 1:5-7**｜神就是光... (支援任意清單符號、序號或無前綴)
        const pipeMatch = line.match(/^(?:(?:\d+\.|\*|•|-)\s*)?\*\*([^*]+)\*\*\s*[｜|]\s*(.*)$/);
        if (pipeMatch) {
          if (currentItem) {
            if (!currentItem.text && BIBLE_CACHE[currentItem.reference]) {
              currentItem.text = BIBLE_CACHE[currentItem.reference];
            }
            extendedStudy.push(currentItem);
          }
          const ref = pipeMatch[1].trim();
          const desc = pipeMatch[2].trim();
          currentItem = {
            title: ref,
            reference: ref,
            text: BIBLE_CACHE[ref] || "",
            question: desc, // 符號「｜」右邊對這段經文的補述
            bibliaUrl: getBibliaUrl(ref),
          };
          continue;
        }

        // Pattern 2: 1. **以弗所書 1:3-4**  or * **以弗所書 1:3-4**
        const numMatch = line.match(/^(?:\d+\.|\*|-)\s*\*\*([^*]+)\*\*(?:\s*(.*))?$/);
        if (numMatch) {
          if (currentItem) {
            if (!currentItem.text && BIBLE_CACHE[currentItem.reference]) {
              currentItem.text = BIBLE_CACHE[currentItem.reference];
            }
            extendedStudy.push(currentItem);
          }
          const ref = numMatch[1].trim();
          currentItem = {
            title: ref,
            reference: ref,
            text: BIBLE_CACHE[ref] || "",
            question: numMatch[2] ? numMatch[2].trim() : "",
            bibliaUrl: getBibliaUrl(ref),
          };
          continue;
        }

        // Sublines: > quote or *question*
        if (line.startsWith(">") && currentItem) {
          const scriptureQuote = line.replace(/^>\s*/, "").replace(/^[「"“]|["”」]$/g, "").trim();
          currentItem.text = currentItem.text ? `${currentItem.text}\n${scriptureQuote}` : scriptureQuote;
        } else if (line.startsWith("*") && currentItem) {
          const content = line.replace(/^\*+|\*+$/g, "").trim();
          currentItem.question = currentItem.question ? `${currentItem.question} ${content}` : content;
        } else if (currentItem) {
          currentItem.question = currentItem.question ? `${currentItem.question} ${line}` : line;
        }
      }
      if (currentItem) {
        if (!currentItem.text && BIBLE_CACHE[currentItem.reference]) {
          currentItem.text = BIBLE_CACHE[currentItem.reference];
        }
        extendedStudy.push(currentItem);
      }
    }

    // Meditation Question
    let meditationQuestion = "";
    const medMatch = dayBody.match(/###\s*【默想問題】\s*\n+([\s\S]*?)(?=##|$)/);
    if (medMatch) {
      meditationQuestion = medMatch[1]
        .replace(/---+/g, "")
        .trim()
        .replace(/^[「"“]|["”」]$/g, "");
    }

    const cleanQuote = scriptureText.replace(/^[「"“]|["”」]$/g, "");
    const goldenVerse = cleanQuote.length > 100 ? `${cleanQuote.slice(0, 100)}...` : cleanQuote;

    days.push({
      id: dayInfo.id,
      dayNumber: dayInfo.dayNumber,
      dayLabel,
      title: dayTheme,
      scriptureRef,
      scriptureVersion,
      scriptureText,
      goldenVerse,
      readTimeMinutes: Math.max(5, Math.ceil(message.length / 280)),
      message,
      suggestedPrayer,
      extendedStudy,
      meditationQuestion,
    });
  }

  const defaultGoldenVerse = days[2]?.goldenVerse || days[0]?.goldenVerse || "神的應許，不論有多少，在基督都是是的。所以藉著他也都是實在的，叫神因我們得榮耀。";
  const defaultGoldenRef = days[2]?.scriptureRef || days[0]?.scriptureRef || "哥林多後書 1:20";

  return {
    id: fileId,
    version,
    startDate: fileId,
    title,
    book,
    goldenVerse: {
      text: defaultGoldenVerse,
      reference: defaultGoldenRef,
    },
    foreword,
    days,
    publishedAt: fileId,
    isCurrentWeek: isCurrent,
  };
}

// Scanning routine
const dataDir = path.join(process.cwd(), "data");
const targetBaseDir = path.join(process.cwd(), "src", "data", "weeks");

if (!fs.existsSync(dataDir)) {
  console.error("data/ directory not found!");
  process.exit(1);
}

const youthOutputDir = path.join(targetBaseDir, "youth");
const familyOutputDir = path.join(targetBaseDir, "family");

fs.mkdirSync(youthOutputDir, { recursive: true });
fs.mkdirSync(familyOutputDir, { recursive: true });

const items = fs.readdirSync(dataDir).sort();
const weekDirs = items.filter((item) => {
  const fullItemPath = path.join(dataDir, item);
  return (
    (fs.statSync(fullItemPath).isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(item)) ||
    (fs.statSync(fullItemPath).isFile() && /^\d{4}-\d{2}-\d{2}\.md$/.test(item))
  );
}).map(item => item.replace(/\.md$/, "")).sort();

const latestWeekId = weekDirs[weekDirs.length - 1];

const youthWeeks = [];
const familyWeeks = [];

for (const item of items) {
  const fullItemPath = path.join(dataDir, item);
  const stat = fs.statSync(fullItemPath);

  // Subdirectory mode e.g. data/2026-09-14/
  if (stat.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(item)) {
    const weekId = item;
    const isCurrent = (weekId === latestWeekId);

    // 1. Youth
    const youthPath = path.join(fullItemPath, "qt_for_youth.md");
    if (fs.existsSync(youthPath)) {
      const content = fs.readFileSync(youthPath, "utf-8");
      const weekObj = parseMarkdown(content, weekId, "youth", isCurrent);
      const outTs = path.join(youthOutputDir, `${weekId}.ts`);
      const varName = `youth_${weekId.replace(/-/g, "_")}`;
      fs.writeFileSync(
        outTs,
        `import { DevotionalWeek } from "@/types/devotional";\n\nexport const ${varName}: DevotionalWeek = ${JSON.stringify(
          weekObj,
          null,
          2
        )};\n`,
        "utf-8"
      );
      console.log(`✓ [Youth] Generated ${outTs} (${weekObj.title}, ${weekObj.days.length} days, isCurrent: ${isCurrent})`);
      youthWeeks.push({ weekId, varName });
    }

    // 2. Family
    const familyPath = path.join(fullItemPath, "qt_for_family.md");
    if (fs.existsSync(familyPath)) {
      const content = fs.readFileSync(familyPath, "utf-8");
      const weekObj = parseMarkdown(content, weekId, "family", isCurrent);
      const outTs = path.join(familyOutputDir, `${weekId}.ts`);
      const varName = `family_${weekId.replace(/-/g, "_")}`;
      fs.writeFileSync(
        outTs,
        `import { DevotionalWeek } from "@/types/devotional";\n\nexport const ${varName}: DevotionalWeek = ${JSON.stringify(
          weekObj,
          null,
          2
        )};\n`,
        "utf-8"
      );
      console.log(`✓ [Family] Generated ${outTs} (${weekObj.title}, ${weekObj.days.length} days, isCurrent: ${isCurrent})`);
      familyWeeks.push({ weekId, varName });
    }
  }

  // Direct file mode e.g. data/2026-09-07.md
  if (stat.isFile() && item.endsWith(".md")) {
    const weekId = item.replace(/\.md$/, "");
    if (/^\d{4}-\d{2}-\d{2}$/.test(weekId)) {
      const isCurrent = (weekId === latestWeekId);
      const content = fs.readFileSync(fullItemPath, "utf-8");
      const weekObj = parseMarkdown(content, weekId, "youth", isCurrent);
      const outTs = path.join(youthOutputDir, `${weekId}.ts`);
      const varName = `youth_${weekId.replace(/-/g, "_")}`;
      fs.writeFileSync(
        outTs,
        `import { DevotionalWeek } from "@/types/devotional";\n\nexport const ${varName}: DevotionalWeek = ${JSON.stringify(
          weekObj,
          null,
          2
        )};\n`,
        "utf-8"
      );
      console.log(`✓ [Youth Legacy] Generated ${outTs} (${weekObj.title})`);
      youthWeeks.push({ weekId, varName });
    }
  }
}

// Generate devotional-service.ts
const servicePath = path.join(process.cwd(), "src", "lib", "devotional-service.ts");

const youthImports = youthWeeks
  .map((w) => `import { ${w.varName} } from "@/data/weeks/youth/${w.weekId}";`)
  .join("\n");

const familyImports = familyWeeks
  .map((w) => `import { ${w.varName} } from "@/data/weeks/family/${w.weekId}";`)
  .join("\n");

const serviceCode = `import { DevotionalDay, DevotionalWeek, DevotionalVersion } from "@/types/devotional";

${youthImports}

${familyImports}

export const allYouthWeeks: DevotionalWeek[] = [${youthWeeks.map((w) => w.varName).join(", ")}];
export const allFamilyWeeks: DevotionalWeek[] = [${familyWeeks.map((w) => w.varName).join(", ")}];

export function getWeeksByVersion(version: DevotionalVersion): DevotionalWeek[] {
  return version === "family" ? allFamilyWeeks : allYouthWeeks;
}

export function getCurrentWeek(version: DevotionalVersion = "youth"): DevotionalWeek {
  const weeks = getWeeksByVersion(version);
  const current = weeks.find((w) => w.isCurrentWeek);
  return current || weeks[0];
}

export function getWeekById(version: DevotionalVersion, weekId: string): DevotionalWeek | undefined {
  const weeks = getWeeksByVersion(version);
  return weeks.find((w) => w.id === weekId);
}

export function getDayById(
  version: DevotionalVersion,
  weekId: string,
  dayId: string
): { week: DevotionalWeek; day: DevotionalDay } | null {
  const week = getWeekById(version, weekId);
  if (!week) return null;
  const day = week.days.find((d) => d.id === dayId);
  if (!day) return null;
  return { week, day };
}

export function getAllParams(): { version: DevotionalVersion; weekId: string; dayId: string }[] {
  const params: { version: DevotionalVersion; weekId: string; dayId: string }[] = [];
  for (const week of allYouthWeeks) {
    for (const day of week.days) {
      params.push({ version: "youth", weekId: week.id, dayId: day.id });
    }
  }
  for (const week of allFamilyWeeks) {
    for (const day of week.days) {
      params.push({ version: "family", weekId: week.id, dayId: day.id });
    }
  }
  return params;
}

export function formatWeekDateRange(week: DevotionalWeek): string {
  try {
    const monday = new Date(week.id);
    if (isNaN(monday.getTime())) {
      return week.id;
    }
    const saturday = new Date(monday);
    saturday.setDate(monday.getDate() + 5);

    const pad = (n: number) => String(n).padStart(2, "0");
    const mYear = monday.getFullYear();
    const mMonth = pad(monday.getMonth() + 1);
    const mDate = pad(monday.getDate());

    const sMonth = pad(saturday.getMonth() + 1);
    const sDate = pad(saturday.getDate());

    if (monday.getMonth() === saturday.getMonth()) {
      return \`\${mYear}.\${mMonth}.\${mDate} - \${sDate}\`;
    }
    return \`\${mYear}.\${mMonth}.\${mDate} - \${sMonth}.\${sDate}\`;
  } catch {
    return week.id;
  }
}

export function getRecommendedDayIdForToday(): string {
  if (typeof window === "undefined") {
    return "mon";
  }
  const dayOfWeek = new Date().getDay();
  switch (dayOfWeek) {
    case 1:
      return "mon";
    case 2:
      return "tue";
    case 3:
      return "wed";
    case 4:
      return "thu";
    case 5:
      return "fri";
    case 6:
      return "sat";
    case 0:
    default:
      return "mon";
  }
}
`;

fs.writeFileSync(servicePath, serviceCode, "utf-8");
console.log(`✓ Updated devotional-service.ts with ${youthWeeks.length} Youth week(s) & ${familyWeeks.length} Family week(s)`);

// ==========================================
// Books / Bibliographies Scanning Routine
// ==========================================
const booksDir = path.join(process.cwd(), "books");
const booksOutputDir = path.join(process.cwd(), "src", "data", "books");
fs.mkdirSync(booksOutputDir, { recursive: true });

function parseBookMarkdown(content, filename) {
  const slug = filename.replace(/\.md$/, "").replace(/_/g, "-");
  const lines = content.split("\n");
  const firstLine = lines[0]?.trim() || "";
  const bookNameMatch = firstLine.match(/參考書目[：:]\s*(.+)/);
  const bookName = bookNameMatch ? bookNameMatch[1].trim() : "哥林多後書";
  const title = `${bookName} 釋經參考書目`;

  const sections = content.split(/\n---\s*\n/);
  const items = [];

  function getCategory(author, series, titleStr) {
    const accessibleSeries = ["TNTC", "For Everyone", "BST", "聖經信息", "丁道爾"];
    const pastoralSeries = ["CSC", "SoGBC", "TTCS", "NIVAC", "Teach the Text", "Story of God", "Application Commentary"];
    
    if (author.includes("Packer") || accessibleSeries.some(s => series.includes(s) || titleStr.includes(s))) {
      return { category: "accessible", categoryLabel: "大眾初學與靈修入門" };
    }
    if (pastoralSeries.some(s => series.includes(s) || titleStr.includes(s))) {
      return { category: "pastoral", categoryLabel: "教牧講道與當代應用" };
    }
    return { category: "academic", categoryLabel: "嚴謹釋經與高階學術" };
  }

  for (const s of sections) {
    const headerMatch = s.match(/###\s*(\d+)\.\s*([^\n—]+)\s*—\s*([^\n]+)/);
    if (!headerMatch) continue;
    
    const id = parseInt(headerMatch[1], 10);
    const author = headerMatch[2].trim();
    const bookTitle = headerMatch[3].trim();
    
    const seriesMatch = s.match(/\*\s*\*\*書系\*\*[：:]\s*([^\n]+)/);
    const series = seriesMatch ? seriesMatch[1].trim() : "";
    
    let authorBackground = "";
    const bgMatch = s.match(/\*\s*\*\*(?:作者|作者／編者)背景\*\*[：:]\s*\n([\s\S]*?)(?=\*\s*\*\*內容特色\*\*)/);
    if (bgMatch) {
      authorBackground = bgMatch[1].trim();
    }
    
    const features = [];
    const featSectionMatch = s.match(/\*\s*\*\*內容特色\*\*[：:]\s*\n([\s\S]*)$/);
    if (featSectionMatch) {
      const featLines = featSectionMatch[1].trim().split("\n");
      let currentBullet = "";
      for (const fl of featLines) {
        const trimmed = fl.trim();
        if (!trimmed) continue;
        if (trimmed.startsWith("*") || trimmed.startsWith("-") || /^\d+\./.test(trimmed)) {
          if (currentBullet) features.push(currentBullet);
          currentBullet = trimmed.replace(/^[*•-]\s*/, "");
        } else {
          currentBullet = currentBullet ? `${currentBullet} ${trimmed}` : trimmed;
        }
      }
      if (currentBullet) features.push(currentBullet);
    }
    
    const cat = getCategory(author, series, bookTitle);
    items.push({
      id,
      author,
      bookTitle,
      series,
      authorBackground,
      category: cat.category,
      categoryLabel: cat.categoryLabel,
      features
    });
  }

  return {
    slug,
    title,
    bookName,
    description: `本靈修材料奠基於當代 ${items.length} 部福音派頂尖釋經著作與神學專論，涵蓋社會修辭學、語篇結構分析、歷史背景考證與牧養實踐。`,
    totalBooks: items.length,
    items
  };
}

const bookFiles = fs.existsSync(booksDir) ? fs.readdirSync(booksDir).filter(f => f.endsWith(".md")) : [];
const allBibliographies = [];

for (const bf of bookFiles) {
  const content = fs.readFileSync(path.join(booksDir, bf), "utf-8");
  const biblio = parseBookMarkdown(content, bf);
  const outPath = path.join(booksOutputDir, `${biblio.slug}.ts`);
  const varName = `biblio_${biblio.slug.replace(/-/g, "_")}`;
  
  fs.writeFileSync(
    outPath,
    `import { BookBibliography } from "@/types/book";\n\nexport const ${varName}: BookBibliography = ${JSON.stringify(biblio, null, 2)};\n`,
    "utf-8"
  );
  console.log(`✓ Generated ${outPath} (${biblio.bookName}, ${biblio.totalBooks} books)`);
  allBibliographies.push({ slug: biblio.slug, varName });
}

// Generate src/lib/books-service.ts
const booksServicePath = path.join(process.cwd(), "src", "lib", "books-service.ts");
const booksServiceCode = `// Generated by scripts/sync-markdown.mjs - DO NOT EDIT MANUALLY
import { BookBibliography } from "@/types/book";
${allBibliographies.map((b) => `import { ${b.varName} } from "@/data/books/${b.slug}";`).join("\n")}

export const allBibliographies: BookBibliography[] = [${allBibliographies.map((b) => b.varName).join(", ")}];

export function getBookBibliography(slug: string): BookBibliography | undefined {
  return allBibliographies.find((b) => b.slug === slug);
}

export function getAllBookBibliographies(): BookBibliography[] {
  return allBibliographies;
}
`;

fs.writeFileSync(booksServicePath, booksServiceCode, "utf-8");
console.log(`✓ Updated books-service.ts with ${allBibliographies.length} bibliography collection(s)`);

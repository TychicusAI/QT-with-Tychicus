import fs from "fs";
import path from "path";

function parseListValue(raw) {
  if (!raw) return [];
  const trimmed = raw.trim();
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(/[,，]/)
      .map((s) => s.trim().replace(/^["']|["']$/g, ""))
      .filter(Boolean);
  }
  return trimmed
    .split(/[,，、]/)
    .map((s) => s.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) {
    return { meta: {}, body: content.trim() };
  }

  const rawFrontmatter = match[1];
  const body = match[2].trim();
  const meta = {};
  const lines = rawFrontmatter.split("\n");
  let currentArrayKey = null;

  for (const line of lines) {
    const arrayItemMatch = line.match(/^\s*-\s+(.+)$/);
    if (arrayItemMatch && currentArrayKey) {
      if (!Array.isArray(meta[currentArrayKey])) {
        meta[currentArrayKey] = [];
      }
      meta[currentArrayKey].push(arrayItemMatch[1].trim().replace(/^["']|["']$/g, ""));
      continue;
    }

    const kvMatch = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (kvMatch) {
      const key = kvMatch[1].trim();
      const val = kvMatch[2].trim();
      if (!val) {
        currentArrayKey = key;
        meta[key] = [];
      } else {
        currentArrayKey = null;
        meta[key] = val.replace(/^["']|["']$/g, "");
      }
    }
  }

  return { meta, body };
}

function parseRelatedLinks(raw) {
  if (!raw) return [];
  const items = Array.isArray(raw) ? raw : [raw];
  return items
    .map((entry) => {
      const parts = String(entry).split("|").map((p) => p.trim());
      if (parts.length < 2) return null;
      return {
        label: parts[0],
        href: parts[1],
        type: parts[2] || "devotional",
      };
    })
    .filter(Boolean);
}

export function syncQA() {
  const qaDir = path.join(process.cwd(), "data", "qa");
  const outDir = path.join(process.cwd(), "src", "data", "qa");
  const servicePath = path.join(process.cwd(), "src", "lib", "qa-service.ts");

  fs.mkdirSync(outDir, { recursive: true });

  let categories = [];
  const categoriesPath = path.join(qaDir, "categories.json");
  if (fs.existsSync(categoriesPath)) {
    categories = JSON.parse(fs.readFileSync(categoriesPath, "utf-8"));
  }

  const categoryMap = new Map(categories.map((c) => [c.id, c]));
  const articles = [];

  if (fs.existsSync(qaDir)) {
    const entries = fs.readdirSync(qaDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const categoryId = entry.name;
      const catDir = path.join(qaDir, categoryId);
      const files = fs
        .readdirSync(catDir)
        .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md")
        .sort();

      for (const file of files) {
        const raw = fs.readFileSync(path.join(catDir, file), "utf-8");
        const { meta, body } = parseFrontmatter(raw);
        const slug = meta.slug || file.replace(/\.md$/, "");
        const resolvedCategory = meta.category || categoryId;
        const catInfo = categoryMap.get(resolvedCategory);
        const hasBody = body.length > 0;
        const status =
          meta.status === "published" || meta.status === "upcoming"
            ? meta.status
            : hasBody
            ? "published"
            : "upcoming";

        const title = meta.title || slug;
        const question = meta.question || title;
        const firstParagraph = body
          .split(/\n\n+/)
          .find((p) => p.trim() && !p.trim().startsWith("#"))
          ?.replace(/[*_`>#]/g, "")
          .trim();

        const summary =
          meta.summary ||
          (firstParagraph
            ? firstParagraph.length > 96
              ? `${firstParagraph.slice(0, 96)}…`
              : firstParagraph
            : "阿咕正在翻閱郵差包裡的書信，這篇回信即將上線。");

        const orderNum = meta.order !== undefined ? Number(meta.order) : 999;
        const tags = Array.isArray(meta.tags) ? meta.tags : parseListValue(meta.tags);
        const scriptures = Array.isArray(meta.scriptures)
          ? meta.scriptures
          : parseListValue(meta.scriptures);

        const pastoralNotice =
          meta.pastoralNotice !== undefined
            ? String(meta.pastoralNotice).toLowerCase() === "true"
            : Boolean(catInfo?.pastoralNotice);

        const eventContext = meta.eventContext ? String(meta.eventContext).trim() : undefined;
        const featured = String(meta.featured || "").toLowerCase() === "true";

        articles.push({
          slug,
          category: resolvedCategory,
          categoryLabel: catInfo?.name || resolvedCategory,
          title,
          question,
          summary,
          status,
          publishedAt: meta.publishedAt || "",
          order: Number.isNaN(orderNum) ? 999 : orderNum,
          tags,
          scriptures,
          readTimeMinutes: hasBody ? Math.max(2, Math.ceil(body.length / 320)) : 0,
          pastoralNotice,
          ...(eventContext ? { eventContext } : {}),
          ...(featured ? { featured } : {}),
          relatedLinks: parseRelatedLinks(meta.relatedLinks),
          body,
        });
      }
    }
  }

  // Sort: published first; for current-affairs sort by publishedAt desc first, otherwise order asc then publishedAt desc
  articles.sort((a, b) => {
    if (a.status !== b.status) return a.status === "published" ? -1 : 1;
    if (a.category === "current-affairs" && b.category === "current-affairs") {
      if (a.publishedAt !== b.publishedAt) return (b.publishedAt || "").localeCompare(a.publishedAt || "");
    }
    if ((a.order ?? 999) !== (b.order ?? 999)) return (a.order ?? 999) - (b.order ?? 999);
    if (a.publishedAt !== b.publishedAt) return (b.publishedAt || "").localeCompare(a.publishedAt || "");
    return a.slug.localeCompare(b.slug);
  });

  const dataOutPath = path.join(outDir, "index.ts");
  fs.writeFileSync(
    dataOutPath,
    `// Generated by scripts/sync-qa.mjs - DO NOT EDIT MANUALLY
import { QAArticle, QACategoryConfig } from "@/types/qa";

export const qaCategories: QACategoryConfig[] = ${JSON.stringify(categories, null, 2)};

export const allQAArticles: QAArticle[] = ${JSON.stringify(articles, null, 2)};
`,
    "utf-8"
  );

  const serviceCode = `// Generated by scripts/sync-qa.mjs - DO NOT EDIT MANUALLY
import { QAArticle, QACategoryConfig } from "@/types/qa";
import { qaCategories, allQAArticles } from "@/data/qa";

export function getQACategories(): QACategoryConfig[] {
  return qaCategories;
}

export function getAllQAArticles(): QAArticle[] {
  return allQAArticles;
}

export function getPublishedQAArticles(): QAArticle[] {
  return allQAArticles.filter((a) => a.status === "published");
}

export function getQAArticleBySlug(slug: string): QAArticle | undefined {
  return allQAArticles.find((a) => a.slug === slug);
}

export function getAdjacentQAArticles(slug: string): {
  prev: QAArticle | null;
  next: QAArticle | null;
} {
  const published = getPublishedQAArticles();
  const idx = published.findIndex((a) => a.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? published[idx - 1] : null,
    next: idx < published.length - 1 ? published[idx + 1] : null,
  };
}
`;

  fs.writeFileSync(servicePath, serviceCode, "utf-8");
  const publishedCount = articles.filter((a) => a.status === "published").length;
  const upcomingCount = articles.filter((a) => a.status === "upcoming").length;
  console.log(
    `✓ [QA] Synced ${categories.length} category(ies), ${publishedCount} published & ${upcomingCount} upcoming article(s)`
  );
}

if (import.meta.url === `file://${process.argv[1]}`) {
  syncQA();
}

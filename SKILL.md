---
name: tychicus-qt-generator
description: Generate complete weekly devotional materials for the QT-with-Tychicus project strictly following WORKFLOW.md. Use when the user requests generating weekly devotionals, academic study notes (study.md), illustration collections (illustrations.md), topic plans (topics_*.md), or youth/family/encore/mission/exegesis devotionals (qt_for_youth.md, qt_for_family.md, qt_for_encore.md, qt_for_mission.md, qt_for_exegesis.md) in the QT-with-Tychicus repository.
allowed-tools: client default_api notebooklm
---
# Tychicus QT Generator

A specialized skill for executing the complete four-phase weekly devotional material generation workflow in the QT-with-Tychicus repository, strictly adhering to WORKFLOW.md and prompts/ templates.

## Target Directory

All operations must be performed within the repository root: `/Users/winston/Repo/QT-with-Tychicus`

## When to Use

Use this skill when the user asks to:

  - Generate weekly devotional materials for a specific week (e.g. YYYY-MM-DD).
  - Create academic study notes (`study.md`) and illustration collections (`illustrations.md`).
  - Plan weekly topics for youth (`topics_for_youth.md`), family (`topics_for_family.md`), encore/50+ (`topics_for_encore.md`), or mission (`topics_for_mission.md`).
  - Write in-depth daily devotionals for youth (`qt_for_youth.md`), family (`qt_for_family.md`), encore/50+ (`qt_for_encore.md`), or mission (`qt_for_mission.md`).
  - Run the full end-to-end devotional generation pipeline for QT-with-Tychicus.

## Workflow Parameters

The skill expects or extracts three key parameters from the user request:

1.  Target Date: `[YYYY-MM-DD]` (e.g. 2026-09-28)
2.  Scripture Range: `[Book Chapter:Verse-Chapter:Verse]` (e.g. 哥林多後書 4:1-4:15)
3.  Target Deliverables: Youth version (`qt_for_youth.md`), Family version (`qt_for_family.md`), Encore 50+ version (`qt_for_encore.md`), Mission version (`qt_for_mission.md`), Exegesis version (`qt_for_exegesis.md`), or any combination.

If any parameter is missing, extract it from existing files under `data/` or ask the user.

## Four-Phase Execution Pipeline

### Phase 1: Groundwork (Study Notes and Illustrations)

Never skip Phase 1. Groundwork must be established before planning topics or writing devotionals.

1.  Ensure target directory `data/<YYYY-MM-DD>/` exists.
2.  Read `prompts/study.txt` and query the corresponding book-specific exegesis NotebookLM notebook **「研經推基古：[書卷]」** (e.g., `研經推基古：羅馬書` `notebooks/79e21a83-9b85-4237-b472-7fcc22a0e01c`, `研經推基古：哥林多後書` `notebooks/ca9c010e-9c96-410c-bfbe-95762c047dce`, etc.; optionally co-query `神學推基古` `notebooks/9f0f227e-e040-4fa9-b7b2-6b873b167972` via `notebooklm:retrieve_relevant_chunks`).
3.  Generate academic exegesis notes covering all five core modules of the Textual Micro-Exegesis Toolkit:
      - Module 0: Pericope delimitation and boundary markers
      - Module 1: The 6 Micro-Exegesis Tools (lexical/semantic domains & multi-version table, syntactical/verbal aspect & connectives, literary topology/chiasmus, rhetorical pragmatics, deictic/pronominal shifts, canonical echoes)
      - Module 2: Genre-specific dynamic adaptation
      - Module 3: 1,800–2,000 word continuous theological prose synthesis
      - Module 4 & 5: Dual-level big ideas / redemptive ladder, verse-by-verse commentary synthesis, crux interpretum, scholarly debates (with English scholar names), and refutations
4.  Write to `data/<YYYY-MM-DD>/study.md`. If generation hits token limits, append continuously until all modules are fully completed.
5.  If target deliverables include Youth, Family, Encore, or Mission tracks, read `prompts/illustrations.txt` and extract a **Dual-Track Illustration Collection** for each daily pericope segment by querying the dedicated **「喻道推基古」** notebook (`notebooks/69625716-c3ce-455a-8054-208fd88db91e`) as primary source and the book's **「研經推基古：[書卷]」** commentary illustrations as fallback:
      - **Track A (`例證 A：通用生活／歷史／人文`)**: General life analogies, world literature, historical/biographical anecdotes, and pastoral metaphors (not necessarily mission-related), with Youth, Family, and Encore application angles.
      - **Track B (`例證 B：宣教／跨文化歷史與國度見證`)**: Cross-cultural missionary accounts, church history & martyrdoms, redemptive analogies, and broader *Missio Dei* / cross-boundary witness stories, with Frontline Worker, Everyday Missional Disciple, and optional cross-track angles.
    Write to `data/<YYYY-MM-DD>/illustrations.md` (skip if only generating `qt_for_exegesis.md`).

### Phase 2: Topics Planning

1.  Read `prompts/topics_for_youth.txt`, `prompts/topics_for_family.txt`, `prompts/topics_for_encore.txt`, and/or `prompts/topics_for_mission.txt`.
2.  Strictly base topic design on `study.md` and `illustrations.md` (Youth/Family/Encore primarily aligned with Track A `例證 A`; Mission primarily aligned with Track B `例證 B`).
3.  Plan the overall weekly theme, introductory guidance, and Monday-to-Saturday daily breakdown (scripture division, daily theme, and core thesis).
      - For **Mission (`topics_for_mission.md`)**, weave the **Dual-Track Missional Progression** across Monday to Saturday (interleaving frontline cross-cultural realities with everyday missional discipleship: Mon calibrating to *Missio Dei*, Tue crossing everyday local/cross-cultural borders, Wed frontline "jars of clay" vulnerability, Thu guarding the baggage via intercession & support, Fri incarnational translation & dying to cultural superiority, Sat eschatological hope & global worship).
4.  Write to `data/<YYYY-MM-DD>/topics_for_youth.md`, `data/<YYYY-MM-DD>/topics_for_family.md`, `data/<YYYY-MM-DD>/topics_for_encore.md`, and/or `data/<YYYY-MM-DD>/topics_for_mission.md`.

### Phase 3: Day-by-Day Deep Dive (Mon-Sat)

Never batch all six days together in a single prompt or step. Write day by day (Monday to Saturday) to maintain maximum literary depth, theological rigor, and psychological insight.

For each target deliverable (Youth / Family / Encore / Mission / Exegesis):

1.  Initialize file header in `data/<YYYY-MM-DD>/qt_*.md` with scripture range, overall theme, and introductory guide (`# 每日靈修：青年篇` / `# 每日靈修：家庭篇` / `# 每日靈修：樂齡篇` / `# 每日靈修：宣教篇` / `# 每日釋經深研`).
2.  For each day from Monday to Saturday, write the daily devotional adhering strictly to `prompts/qt_for_youth.txt`, `prompts/qt_for_family.txt`, `prompts/qt_for_encore.txt`, `prompts/qt_for_mission.txt`, and `prompts/qt_for_exegesis.txt`:
      - **Scripture**: Chinese Union Version (CUV) text.
      - **Theme**: Derived from `topics_*.md`.
      - **Five-Track Persona & Pastoral/Exegetical Focus**:
          - **Youth (`youth`)**: Sensitive, incisive mentor addressing social persona anxiety, career competition, authority pressure, cancel culture, and productivity idolatry.
          - **Family (`family`)**: Warm, empathetic family pastor addressing dinner-table silence, broken promises, control vs. grace boundaries, cold wars, and cross-generational reconciliation.
          - **Encore (`encore`, 50+)**: Warm, seasoned spiritual companion (never patronizing or preachy) addressing physical decline ("jars of clay"), empty-nest letting go (from helm-holder to prayer watchman), career handoff (from Do to Be), caregiving for aging parents & bereavement, and reconciling past regrets into a glorious second-half Encore.
          - **Mission (`mission`, 雙軌整合「使命人生篇」)**: Seasoned, empathetic kingdom fellow traveler with field depth and historical vision (like Tychicus, Luke, or Barnabas—never using guilt-driven mobilization or triumphalist slogans). Integrates frontline cross-cultural workers and everyday missional believers across 5 core pain points.
          - **Exegesis (`exegesis`, 釋經版高可讀性微觀釋經深研)**: 100% grounded in `study.md` (zero illustrations, zero modern anecdotes). Structured into **4 organic movements headed by `#### 一、...` to `#### 四、...` subheadings** across **12–15 concise paragraphs** (120–180 chars per paragraph, 20–38 chars per sentence). Strictly enforce **Insight/Tension First, Grammar as Evidence** (forbid formulaic meta-openings), **Parenthetical Discipline** (max 15 chars in parentheses; only 1–3 word Greek terms, English scholar names, or brief verse refs; move all longer explanations into standalone Chinese sentences), **Focused Scholarly Attribution** (cite at most 1–2 representative scholars per point, never 3–4 name-lists), and **Natural Convergence in Movement 4** (no redundant trailing 3-bullet summary at the end of the message).
          - **Exegetical Discourse SVG Charts Specification (釋經向量圖解規範)**:
              - When pericope features significant structural topology (e.g. Chiastic pivot center, dual theological contrasts & semantic bifurcation, complex syntactic flow, or epistolary route), plan an accompanying discourse vector diagram.
              - **Markdown Placeholder Architecture (Strictly Forbid Inline Multi-Line Raw SVG)**: In markdown (`qt_for_exegesis.md`), strictly forbid pasting raw multi-line SVG XML (prevents markdown parser `marked` from misinterpreting indented tags as `<pre><code>` code blocks). Always use a clean HTML comment placeholder: `<!-- CHART:<chart-id> -->` (e.g. `<!-- CHART:two-sorrows -->`), placed right after Movement 1 and before the `#### 二、...` subheading.
              - **Native React Component**: Implement the chart under `src/components/charts/<ChartName>.tsx` as a pure React SVG component equipped with responsive `viewBox` and `aspectRatio`, mobile horizontal scroll protection container (`min-w-[720px] overflow-x-auto`), and automatic Dark Mode styling.
      - **Opening Diversity & Anti-Formula Policy (開篇多樣性與反模式化規範)**:
          - Strictly forbid beginning every devotional with formulaic societal/stage/mission generalizations (e.g., "在當代/現代社會中，青年/家庭往往面臨...", "步入人生下半場/隨著年歲漸長，我們往往面臨...", "在當今全球化/大使命的時代，我們往往面臨...", "還有數以十億的未得之民...").
          - Strictly forbid transitional cliches (e.g., "正是在這種...中，使徒保羅在...為我們帶來了...") and overused clichés (e.g., 演算法/內耗 for youth; 餐桌沉默/刺蝟心態 for family; 夕陽無限好/白髮蒼蒼/含飴弄孫/老驥伏櫪/風燭殘年 for encore; 認領群體/突破營壘/福音收割/宣教動員/大使命口號 for mission).
          - Rotate across distinct opening paradigms across the 6 days:
              - Paradigm A [Paradoxical Hook / 語言與神學悖論]: Open with shocking, counter-intuitive scripture terms or theological conflicts (e.g., why the sovereign God entrusts the gospel of glory to fragile, tongue-tied earthen vessels).
              - Paradigm B [Story/Image-First / 喻道畫面先行]: Begin immediately with a vivid scene, church/mission history anecdote, or metaphor from `illustrations.md`.
              - Paradigm C [Micro-moment / 微觀心靈切片]: Capture a quiet, intimate, highly concrete sensory moment in daily life (e.g., late-night subway for youth; living room light left on for family; 5 AM dawn light, one fewer set of chopsticks, or reading glasses for encore; unfamiliar spice scents or dawn call-to-prayer in a foreign city, unpacking an overweight suitcase before departure, catching the eye of a hijabi migrant caregiver on the MRT, or reading a missionary prayer letter at a quiet kitchen table for mission).
              - Paradigm D [Historical Immersion / 歷史現場還原]: Anchor opening in 1st-century Roman/Greek historical settings, paved imperial roads, ports, workshops, sounds, scents, or physical environments.
              - Paradigm E [Direct Provocation / 直球反思提問]: Launch with a penetrating, honest question that cuts through defenses, comfort-zone attachments, or hidden cultural superiority.
      - **Message & Sentence Rhythm (文風與句式節奏規範：意斷氣連，短句穿透，篇幅錨定)**:
          - 1,800 to 2,200 words of pure literary/exegetical prose. No numbered lists (1. 2. 3.), no bullet points.
          - Single sentence golden length: 20–35 characters (20–38 for Exegesis). Strictly avoid convoluted compound sentences over 45–48 characters.
          - Punctuation temperance: Max 1–2 commas per sentence. Decisively end thoughts and transitions with periods ("。"), refusing cascading commas.
          - Transform long compound clauses into crisp, declarative short sentences.
          - Coherence without dilution ("意斷氣連"): Maintain tight inner theological logic, redemptive-historical development, and dialectical tension between sentences; never degrade into disjointed slogans.
          - Paragraph breathing & count anchor: Keep natural paragraphs to 120–180 characters (approx. 4–6 concise sentences). Strictly enforce 12–15 natural paragraphs per message to fulfill the ~2,000-word depth requirement. Never compress devotionals into 4–8 giant paragraphs.
      - **Exegesis**: 100% grounded in `study.md`. Adhere strictly to the "Chinese first, Greek in parentheses" policy. Always cite the CUV term first in quotation marks followed by the transliterated Greek term in parentheses (e.g. 「良心」（*syneidēsis*）). Greek terms must NEVER serve as the grammatical subject or object of a Chinese sentence. Strip all parentheses and the prose must remain 100% fluent. First mention of modern scholars includes English name in parentheses.
      - **Scripture Citation in Narrative**: In narrative text, strictly write out full scripture references with Chinese measure words and Arabic numerals (e.g., "哥林多後書 4 章 17 節", "4 章 1 節", "第 16 節"). For continuous verses, strictly use "至" (e.g., "4 章 16 至 18 節"). Strictly forbid colon notations (like "4:16") or Chinese numerals (like "四章十七節") in narrative prose. Parenthetical citations at sentence end may keep concise abbreviations (e.g., "(徒 18:3)").
      - **Illustrations (Dual-Track Routing)**: 100% grounded in `illustrations.md`. For **Youth, Family, and Encore**, primarily draw from **Track A (`例證 A：通用生活／歷史／人文`)** (with flexible cross-track borrowing from Track B when fitting). For **Mission**, primarily draw from **Track B (`例證 B：宣教／跨文化歷史與國度見證`)** as the narrative backbone (while organically weaving in Track A metaphors when helpful).
      - **Suggested Prayer**: 250 to 300 words in first person (Youth: "主耶穌，我..."; Family: "天父上帝/親愛的主耶穌，我們全家..."; Encore: "主啊/親愛的天父，走過這許多年日，我..."; Mission: "萬國的主/差遣我們的天父，我..."; Exegesis: "全能的父神/至聖的主，我們...").
      - **Extended Study**: Exactly 3 cross-testament scriptures formatted as `* **書卷 章:節**｜說明...` with 4-5 sentences explaining the redemptive theological connection (for Mission, highlight Old Testament covenant promises to the nations, prophetic vision, and Acts/Epistles cross-cultural breakthroughs).
      - **Reflection Question**: 1 probing, non-judgmental open question tailored to the target group (for Mission, suitable for personal quiet time, mission prayer groups, or cross-cultural fellowship reflection).
3.  Append each completed day cleanly to `data/<YYYY-MM-DD>/qt_*.md`.
4.  Bible Cache Maintenance: Ensure all extended study scripture references are populated in `data/bible-cache.json` with full CUV text. Never use literal double-backslash `\\n` strings; use standard newline characters.

### Phase 4: Database Sync and Verification

1.  Verify word counts for all daily messages (must reach 1,800–2,200 words across 12–15 paragraphs).
2.  Execute sync script in project root: Run command: `npm run sync` Confirm that all extended study scriptures exist in `data/bible-cache.json` (100% coverage required by sync script) and TypeScript database files under `src/data/weeks/` are successfully regenerated.
3.  Execute type check: Run command: `npx tsc --noEmit` Verify 0 type compilation errors.
4.  Report completion to user with daily word count stats and clickable markdown links to created files.

## Critical Rules and Gotchas

  - Repository Locking: Always operate within `/Users/winston/Repo/QT-with-Tychicus`.
  - Dual Foundation First: `study.md` and `illustrations.md` must be completed before writing devotionals.
  - No Batch Compression: Strictly generate devotionals day by day.
  - Opening Diversity: Ensure all 6 days exhibit diverse, non-repetitive literary openings.
  - Sentence Rhythm & Paragraph Count Anchor: Strictly maintain 20–38 chars per sentence (max 48 chars), 1–2 commas max, and 120–180 chars per paragraph across 12–15 paragraphs per day (~2,000 words). Forbid convoluted Western translationese and cascading commas; write with crisp, piercing declarative cadence while preserving rigorous theological depth and life applications.
  - In-line Scripture Formats: Always write "4 章 16 至 18 節", never "4:16" or "四章十六節" in message body.
  - No Literal Backslash-N: Never insert literal `\\n` characters in markdown or JSON files.
  - Bible Cache Required: Every extended study reference must exist in `data/bible-cache.json` or `npm run sync` will abort with exit code 1.
  - Exegetical Discourse Charts (3 Golden Rules):
      1. Single Placeholder: Exactly one `<!-- CHART:<chart-id> -->` per day, never duplicate.
      2. No Markdown Asterisks in SVG: SVG `<text>` must be clean plain text without `*`, use CSS for italics.
      3. Spatial Zoning & Width: Independent vertical/horizontal bands for badges/blocks (no overlapping), hinge box width >= 550px to prevent text overflow.

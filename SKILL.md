---
name: tychicus-qt-generator
description: Generate complete weekly devotional materials for the QT-with-Tychicus project strictly following WORKFLOW.md. Use when the user requests generating weekly devotionals, academic study notes (study.md), illustration collections (illustrations.md), topic plans (topics_*.md), or youth/family/encore/mission devotionals (qt_for_youth.md, qt_for_family.md, qt_for_encore.md, qt_for_mission.md) in the QT-with-Tychicus repository.
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
3.  Target Deliverables: Youth version (`qt_for_youth.md`), Family version (`qt_for_family.md`), Encore 50+ version (`qt_for_encore.md`), Mission version (`qt_for_mission.md`), or any combination.

If any parameter is missing, extract it from existing files under `data/` or ask the user.

## Four-Phase Execution Pipeline

### Phase 1: Groundwork (Study Notes and Illustrations)

Never skip Phase 1. Groundwork must be established before planning topics or writing devotionals.

1.  Ensure target directory `data/<YYYY-MM-DD>/` exists.
2.  Read `prompts/study.txt` and consult the mounted NotebookLM notebook (or retrieve notebook chunks via `notebooklm:retrieve_relevant_chunks`).
3.  Generate academic exegesis notes covering all five core sections:
      - Macro discourse analysis and historical context
      - Micro-exegesis and semantic field analysis (Greek terms italicized with Chinese definitions)
      - Crux interpretum (difficult text analysis)
      - Scholarly consensus and debates (with original English scholar names)
      - Refutations and opposing views
4.  Write to `data/<YYYY-MM-DD>/study.md`. If generation hits token limits, append continuously until all five sections are fully completed.
5.  Read `prompts/illustrations.txt` and extract illustrations, metaphors, historical anecdotes, missionary/church history accounts, and life analogies from NotebookLM (including youth, family, encore, and mission application angles). Write to `data/<YYYY-MM-DD>/illustrations.md`.

### Phase 2: Topics Planning

1.  Read `prompts/topics_for_youth.txt`, `prompts/topics_for_family.txt`, `prompts/topics_for_encore.txt`, and/or `prompts/topics_for_mission.txt`.
2.  Strictly base topic design on `study.md` and `illustrations.md`.
3.  Plan the overall weekly theme, introductory guidance, and Monday-to-Saturday daily breakdown (scripture division, daily theme, and core thesis).
      - For **Mission (`topics_for_mission.md`)**, weave the **Dual-Track Missional Progression** across Monday to Saturday (interleaving frontline cross-cultural realities with everyday missional discipleship: Mon calibrating to *Missio Dei*, Tue crossing everyday local/cross-cultural borders, Wed frontline "jars of clay" vulnerability, Thu guarding the baggage via intercession & support, Fri incarnational translation & dying to cultural superiority, Sat eschatological hope & global worship).
4.  Write to `data/<YYYY-MM-DD>/topics_for_youth.md`, `data/<YYYY-MM-DD>/topics_for_family.md`, `data/<YYYY-MM-DD>/topics_for_encore.md`, and/or `data/<YYYY-MM-DD>/topics_for_mission.md`.

### Phase 3: Day-by-Day Deep Dive (Mon-Sat)

Never batch all six days together in a single prompt or step. Write day by day (Monday to Saturday) to maintain maximum literary depth, theological rigor, and psychological insight.

For each target deliverable (Youth / Family / Encore / Mission):

1.  Initialize file header in `data/<YYYY-MM-DD>/qt_*.md` with scripture range, overall theme, and introductory guide (`# 每日靈修：青年篇` / `# 每日靈修：家庭篇` / `# 每日靈修：樂齡篇` / `# 每日靈修：宣教篇`).
2.  For each day from Monday to Saturday, write the daily devotional adhering strictly to `prompts/qt_for_youth.txt`, `prompts/qt_for_family.txt`, `prompts/qt_for_encore.txt`, and `prompts/qt_for_mission.txt`:
      - **Scripture**: Chinese Union Version (CUV) text.
      - **Theme**: Derived from `topics_*.md`.
      - **Four-Track Persona & Pastoral Pain Points**:
          - **Youth (`youth`)**: Sensitive, incisive mentor addressing social persona anxiety, career competition, authority pressure, cancel culture, and productivity idolatry.
          - **Family (`family`)**: Warm, empathetic family pastor addressing dinner-table silence, broken promises, control vs. grace boundaries, cold wars, and cross-generational reconciliation.
          - **Encore (`encore`, 50+)**: Warm, seasoned spiritual companion (never patronizing or preachy) addressing physical decline ("jars of clay"), empty-nest letting go (from helm-holder to prayer watchman), career handoff (from Do to Be), caregiving for aging parents & bereavement, and reconciling past regrets into a glorious second-half Encore.
          - **Mission (`mission`, 雙軌整合「使命人生篇」)**: Seasoned, empathetic kingdom fellow traveler with field depth and historical vision (like Tychicus, Luke, or Barnabas—never using guilt-driven mobilization or triumphalist slogans). Integrates frontline cross-cultural workers and everyday missional believers across 5 core pain points:
              1. Frontline vulnerability & "jars of clay" exhaustion (language barriers, cultural shock, unseen fruit, isolation from sending churches, family/children adaptation guilt).
              2. Everyday comfort-zone inertia & kingdom numbness (spiritual apathy in consumerist routines, invisible indifference toward cross-cultural neighbors such as migrant workers, new immigrants, international students, or workplace outsiders).
              3. Surrendering cultural superiority & incarnational translation (dying to ethnocentrism and savior complexes, learning Paul's humility of becoming all things to all people).
              4. The weight of "staying with the baggage" (intercession, sacrificial kingdom stewardship, and genuine pastoral holding for frontline workers without performative pity).
              5. Reconciling personal brokenness with *Missio Dei* (moving from ego-centric self-actualization or ministry burnout to participating in God's cosmic reconciliation and eschatological worship).
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
          - 2,000 to 2,200 words of pure literary narrative prose. No numbered lists (1. 2. 3.), no bullet points, no excessive subheadings.
          - Single sentence golden length: 20–35 characters. Strictly avoid convoluted compound sentences over 45 characters.
          - Punctuation temperance: Max 1–2 commas per sentence. Decisively end thoughts and transitions with periods ("。"), refusing cascading commas.
          - Transform long compound clauses into crisp, declarative short sentences.
          - Coherence without dilution ("意斷氣連"): Maintain tight inner theological logic, redemptive-historical development, and dialectical tension between sentences; never degrade into disjointed slogans.
          - Paragraph breathing & count anchor: Keep natural paragraphs to 120–180 characters (approx. 4–6 concise sentences). Strictly enforce 13–15 natural paragraphs per message to fulfill the ~2,000-word depth requirement. Never compress devotionals into 7–9 paragraphs.
      - **Exegesis**: 100% grounded in `study.md`. Adhere strictly to the "Chinese first, Greek in parentheses" policy. Always cite the CUV term first in quotation marks followed by the transliterated Greek term in parentheses (e.g. 「良心」（*syneidēsis*）). Greek terms must NEVER serve as the grammatical subject or object of a Chinese sentence. Strip all parentheses and the prose must remain 100% fluent. Limit to 2–4 key Greek terms per day. First mention of modern scholars includes English name in parentheses.
      - **Scripture Citation in Narrative**: In narrative text, strictly write out full scripture references with Chinese measure words and Arabic numerals (e.g., "哥林多後書 4 章 17 節", "4 章 1 節", "第 16 節"). For continuous verses, strictly use "至" (e.g., "4 章 16 至 18 節"). Strictly forbid colon notations (like "4:16") or Chinese numerals (like "四章十七節") in narrative prose. Parenthetical citations at sentence end may keep concise abbreviations (e.g., "(徒 18:3)").
      - **Illustrations**: 100% grounded in `illustrations.md`. Integrated deeply into real-life pain points.
      - **Suggested Prayer**: 250 to 300 words in first person (Youth: "主耶穌，我..."; Family: "天父上帝/親愛的主耶穌，我們全家..."; Encore: "主啊/親愛的天父，走過這許多年日，我..."; Mission: "萬國的主/差遣我們的天父，我...").
      - **Extended Study**: Exactly 3 cross-testament scriptures formatted as `* **書卷 章:節**｜說明...` with 4-5 sentences explaining the redemptive theological connection (for Mission, highlight Old Testament covenant promises to the nations, prophetic vision, and Acts/Epistles cross-cultural breakthroughs).
      - **Reflection Question**: 1 probing, non-judgmental open question tailored to the target group (for Mission, suitable for personal quiet time, mission prayer groups, or cross-cultural fellowship reflection).
3.  Append each completed day cleanly to `data/<YYYY-MM-DD>/qt_*.md`.
4.  Bible Cache Maintenance: Ensure all extended study scripture references are populated in `data/bible-cache.json` with full CUV text. Never use literal double-backslash `\\n` strings; use standard newline characters.

### Phase 4: Database Sync and Verification

1.  Verify word counts for all daily messages (must reach 2,000+ words across 13–15 paragraphs).
2.  Execute sync script in project root: Run command: `npm run sync` Confirm that all extended study scriptures exist in `data/bible-cache.json` (100% coverage required by sync script) and TypeScript database files under `src/data/weeks/` are successfully regenerated.
3.  Execute type check: Run command: `npx tsc --noEmit` Verify 0 type compilation errors.
4.  Report completion to user with daily word count stats and clickable markdown links to created files.

## Critical Rules and Gotchas

  - Repository Locking: Always operate within `/Users/winston/Repo/QT-with-Tychicus`.
  - Dual Foundation First: `study.md` and `illustrations.md` must be completed before writing devotionals.
  - No Batch Compression: Strictly generate devotionals day by day.
  - Opening Diversity: Ensure all 6 days exhibit diverse, non-repetitive literary openings.
  - Sentence Rhythm & Paragraph Count Anchor: Strictly maintain 20–35 chars per sentence (max 45 chars), 1–2 commas max, and 120–180 chars per paragraph across 13–15 paragraphs per day (~2,000 words). Forbid convoluted Western translationese and cascading commas; write with crisp, piercing declarative cadence while preserving rigorous theological depth and life applications.
  - In-line Scripture Formats: Always write "4 章 16 至 18 節", never "4:16" or "四章十六節" in message body.
  - No Literal Backslash-N: Never insert literal `\\n` characters in markdown or JSON files.
  - Bible Cache Required: Every extended study reference must exist in `data/bible-cache.json` or `npm run sync` will abort with exit code 1.

# 每週經課靈修生成工作流（Workflow Specification）

本專案旨在將每週教會經課與 NotebookLM 研經資料庫，高品質轉化為針對不同族群（「青年」與「父母與青少年」）的六日（週一至週六）靈修材料。

> **核心準則：以 `prompts/` 為唯一真理來源（SSOT），以 `study.md` 與 `illustrations.md` 為雙基石**  
> 所有提示詞設計、內容細節、字數規範、釋經架構與排版要求，皆由 `prompts/` 目錄下的模板檔案直接定義與主導。本工作流文件專注於定義執行架構、環境配置、目錄映射與階段任務推進流程。**工作流強制實施「研經與素材先行」與「逐日深耕」**：在規劃主題與撰寫靈修前，必須先以 `prompts/study.txt` 產生深度學術研經筆記 `study.md`，並以 `prompts/illustrations.txt` 產生專屬喻道素材庫 `illustrations.md`；而在撰寫靈修信息時，**一律採行「一天一指令、逐日深耕打磨」**，徹底杜絕批量產出造成的細節稀釋與品質退化。

---

## 1. 核心原則與預設設定（Default Policy）

1. **檔案覆蓋策略：預設「重新生成並覆蓋」（Overwrite = true）**：
   * 當目標日期目錄或檔案已存在時，工作流預設**直接重新生成並覆蓋現有檔案**。
   * 確保每次執行都能取得最新、最完整的內容，無需手動刪除舊檔。

2. **核心解經與素材雙基石：預設「研經與素材先行」（Study & Illustrations First Policy）**：
   * 在進行任何群體主題規劃或每日靈修寫作之前，**必須優先執行 `prompts/study.txt` 生成 `study.md`，並執行 `prompts/illustrations.txt` 生成 `illustrations.md`**。
   * `study.md` 是對該段經文在篇章論述、逐節希臘原文語義場、難解經文剖析、學者爭鳴與文獻駁斥上的深度學術沉澱（嚴格僅依賴 NotebookLM 註釋書文獻，經文參考新標點和合本）。
   * `illustrations.md` 是從 NotebookLM 來源中全面萃取之專屬喻道故事、現代生活類比、歷史軼事、文豪名言與教父隱喻的素材庫。
   * **完整性保障與中斷續寫機制（Continuation & Append Protocol）**：
     * 由於學術研經追求高規格的深度與逐節詳解，若單次輸出達到長度上限而中斷，模型會在最後一句提示「內容未完，可輸入『繼續』以產出剩餘部分」。
     * 使用者輸入「繼續」後，工作流將接續未完段落並以**追加寫入（Append）**更新至 `data/<YYYY-MM-DD>/study.md`，直至五大板塊完全收尾，確保最終的 `study.md` 是一份結構完整、無缺漏的學術研經文獻。
   * **後續所有主題進程規劃與靈修信息撰寫，皆必須以這兩份完整的 `study.md` 與 `illustrations.md` 為共同的唯一事實來源**，實現完全本地化、零矛盾的資料依託，徹底杜絕外求與幻覺。

3. **執行模式：唯一採行「逐日深耕模式」（Day-by-Day Deep-Dive Mode，一天一指令）**：
   * **徹底廢除「一次生成全週 6 天」的批次指令**：單次輸出高達 1.2 萬字會導致模型注意力預算稀釋、句型模式化、故事被草草略述以及靈性深度扁平化。
   * **落實一天一指令**：每天集中模型 100% 的推理與修辭算力，深耕約 1,800–2,000 字具文學呼吸感的深度散文、希臘原文語義場拆解、專屬喻道故事改寫與約 300 字的真摯第一人稱禱告詞。
   * **單一檔案無縫追加**：每日信息直接依序寫入/追加至本機的 `qt_*.md` 檔案中，使用者無需手動建立多個檔案再費力複製合併，兼顧「極致精緻」與「操作流暢」。

---

## 2. Spark 環境配置與前置準備（Setup in Spark）

在 Gemini Spark 中執行此工作流，請確認以下兩項設定：

1. **已連結本機資料夾（Connected Folders）**：
   * 請確認 Spark 的 Connected Folders 已加入本專案根目錄：`/Users/winston/Repo/QT-with-Tychicus`。
   * 這允許 Spark 直接讀取 `prompts/` 中的指令模板，並自動將產出檔案寫入 `data/`。

2. **掛載 NotebookLM 筆記本（NotebookLM Integration）**：
   * 在 Spark 輸入框旁點選附件「+」（或資料來源整合），選擇對應的 **NotebookLM 筆記本**（例如「研經推基古：哥林多後書」）。
   * 掛載後，Spark 即具備該經卷完整的高階釋經資料庫（含上下文歷史、希臘原文分析、教義神學等），生成時會優先汲取其中的解經亮光。

---

## 3. 是否需要建立新工作？（Task Management Strategy）

### **強烈建議：每一週（或每個新進程）建立一個「新工作」（New Chat / Task）**

雖然在同一個對話中可以繼續進行下一週，但採用**「一週一工作」**是最佳實踐，原因如下：
1. **防止上下文過度膨脹（Context Window Bloat）**：
   * 每一週工作流包含學術研經筆記、喻道素材庫、兩份主題進程及逐日深耕生成的完整靈修信息，總字數達 2 萬字以上。若數週疊加在同一個對話中，龐大的歷史紀錄會消耗大量上下文，可能導致生成速度變慢或格式精確度下降。
2. **乾淨的解經資料庫對應**：
   * 若進度切換至不同書卷（例如從《哥林多後書》換到《加拉太書》或《以弗所書》），在新工作中直接掛載對應卷別的 NotebookLM 筆記本，能確保資料來源純淨，不被前卷書的文獻干擾。
3. **專案管理清晰**：
   * 每個工作專注於單一週次的產出與檢驗，若需要針對該週細節微調（如重新潤飾某天的禱告或信息），紀錄單純且易於追溯。

---

## 4. 目錄與 Prompt 映射關係（I/O Mapping）

所有生成輸入皆以 `prompts/` 內檔案為準，產出成果皆存儲於 `data/<YYYY-MM-DD>/`：

| 階段 | 族群版本 | Prompt 來源模板（SSOT） | 輸出目標檔案 | 產出說明 |
| :--- | :--- | :--- | :--- | :--- |
| **第 1 階段：學術研經** | 全體共用 | `prompts/study.txt` | `data/<YYYY-MM-DD>/study.md` | 不限長度與深度的學術研經筆記（篇章論述、語義場、難解剖析、學者爭鳴、文獻駁斥） |
| **第 1 階段：喻道素材** | 全體共用 | `prompts/illustrations.txt` | `data/<YYYY-MM-DD>/illustrations.md` | 從 NotebookLM 萃取之專屬喻道故事、現代生活類比、歷史軼事、文豪名言與教父隱喻 |
| **第 2 階段：主題規劃** | 青年篇 | `prompts/topics_for_youth.txt` | `data/<YYYY-MM-DD>/topics_for_youth.md` | 嚴格參考 `study.md` 與 `illustrations.md`，擬定青年總主題、導讀與週一至週六進程規劃 |
| **第 2 階段：主題規劃** | 家庭篇 | `prompts/topics_for_family.txt` | `data/<YYYY-MM-DD>/topics_for_family.md` | 嚴格參考 `study.md` 與 `illustrations.md`，擬定家庭總主題、導讀與週一至週六進程規劃 |
| **第 3 階段：逐日深耕** | 青年篇 | `prompts/qt_for_youth.txt` | `data/<YYYY-MM-DD>/qt_for_youth.md` | 依據 `study.md`（釋經）與 `illustrations.md`（例證），**逐日下達指令無縫追加寫入**週一至週六完整信息 |
| **第 3 階段：逐日深耕** | 家庭篇 | `prompts/qt_for_family.txt` | `data/<YYYY-MM-DD>/qt_for_family.md` | 依據 `study.md`（釋經）與 `illustrations.md`（例證），**逐日下達指令無縫追加寫入**週一至週六完整信息 |

---

## 5. 標準操作流程（Day-by-Day Deep-Dive SOP）

工作流全面採行「**研經奠基、定立骨架、逐日打磨、同步驗證**」的四階段推進流程：

```
步驟 1：建立新工作 (New Task in Spark)
   │
步驟 2：確認 Connected Folders 包含 QT-with-Tychicus，並掛載對應 NotebookLM
   │
步驟 3【第 1 階段：研經與素材雙基石】：發送指令生成學術研經筆記 study.md 與喻道素材庫 illustrations.md
   │   ├─ 3a. Spark 讀取 prompts/study.txt，嚴格依據筆記本來源在 data/<YYYY-MM-DD>/ 寫入 study.md
   │   │     └─ [若遇長度上限中斷]：末句提示「內容未完，可輸入『繼續』以產出剩餘部分」
   │   │           └─ 使用者輸入「繼續」 ──> Spark 續寫並無縫追加（Append）寫入 study.md，直至五大板塊完整收尾
   │   └─ 3b. Spark 讀取 prompts/illustrations.txt，全面萃取筆記本喻道素材寫入 data/<YYYY-MM-DD>/illustrations.md
   │
步驟 4【第 2 階段：主題骨架】：發送指令生成「主題進程規劃」
   │   └─ Spark 讀取 prompts/topics_*.txt 並嚴格參考完整之 study.md (+ illustrations.md)，在 data/<YYYY-MM-DD>/ 覆蓋寫入 topics_for_youth.md 或 topics_for_family.md
   │
步驟 5【第 3 階段：逐日深耕（一天一指令，打磨最極致品質）】：
   │   ├─ 5a. 初始化全週檔案骨架（寫入頂部標籤與總主題導讀）
   │   ├─ 5b. 週一深耕：發送週一指令 ──> Spark 調用 prompts/qt_*.txt 撰寫約 2,000 字散文，寫入 qt_*.md
   │   ├─ 5c. 週二深耕：發送週二指令 ──> Spark 撰寫週二信息，無縫追加（Append）至 qt_*.md
   │   ├─ 5d. 週三深耕：發送週三指令 ──> Spark 撰寫週三信息，無縫追加至 qt_*.md
   │   ├─ 5e. 週四深耕：發送週四指令 ──> Spark 撰寫週四信息，無縫追加至 qt_*.md
   │   ├─ 5f. 週五深耕：發送週五指令 ──> Spark 撰寫週五信息，無縫追加至 qt_*.md
   │   └─ 5g. 週六深耕：發送週六指令 ──> Spark 撰寫週六信息，無縫追加至 qt_*.md
   │
步驟 6【第 4 階段：同步與檢驗】：執行 npm run sync 與 npx tsc --noEmit
       └─ 自動解析 Markdown、生成前台 TypeScript 資料庫並通過型別編譯檢驗
```

### 標準觸發指令範例

#### 第 1 階段：生成學術研經筆記與喻道素材庫（地基）
> **「請根據 WORKFLOW.md，為 2026-09-14 的經課『哥林多後書 1:12-2:13』生成學術研經筆記 `study.md` 與喻道素材庫 `illustrations.md`。」**  
* **續寫指令（若出現長度中斷提示時使用）**：  
  > **「繼續」**  
  > （Spark 自動接續未完小節，將後續內容無縫追加寫入 `study.md`，直到第五大項完整結束）

#### 第 2 階段：生成每週主題規劃（骨架）
> **「請根據剛剛產生的 study.md、illustrations.md 與 prompts/topics_for_youth.txt 模板，為 2026-09-14 生成本週青年篇主題進程規劃 `topics_for_youth.md`。」**  
*（家庭篇請將模板替換為 `prompts/topics_for_family.txt`，輸出為 `topics_for_family.md`）*

#### 第 3 階段：逐日深耕靈修信息（一天一指令，打造極致精品）
* **步驟 3-0（初始化全週檔案骨架）**：  
  > **「請根據 topics_for_youth.md，在 `data/2026-09-14/qt_for_youth.md` 初始化建立全週檔案骨架（包含經文範圍、總主題與總主題導讀標頭）。」**
* **步驟 3-1（深耕週一信息）**：  
  > **「請根據 study.md、illustrations.md 與主題規劃，依據 prompts/qt_for_youth.txt 規範，為【週一】（1:12-14）撰寫約 2,000 字深度靈修散文與禱告，寫入 `qt_for_youth.md`。」**
* **步驟 3-2（深耕週二信息）**：  
  > **「週一確認無誤。請接著為【週二】（1:15-17）撰寫約 2,000 字深度靈修散文與禱告，無縫追加至 `qt_for_youth.md`。」**
* **步驟 3-3 至 3-6（依序深耕週三至週六）**：  
  > **「請接著為【週三】（1:18-22）撰寫完整信息，無縫追加至 `qt_for_youth.md`。」**  
  *（使用者可於每日前進時檢驗前一日之文學質感與修辭，逐日推進至週六）*

#### 第 4 階段：資料同步與型別檢驗
> **「全週 6 天已生成完畢，請執行 npm run sync 與 npx tsc --noEmit 驗證資料庫同步與型別安全。」**

---

## 6. 工作流內部執行流水線（Pipeline Details）

### 第 1 階段：生成學術研經筆記與喻道素材庫（Foundational Knowledge Base）
1. **目錄初始化**：
   * 依據輸入日期確認或建立目錄：`data/<YYYY-MM-DD>/`。預設採覆蓋寫入（`Overwrite: true`）。
2. **1a. 學術研經筆記（Academic Study Notes）**：
   * Spark 讀取 `prompts/study.txt` 生成 `data/<YYYY-MM-DD>/study.md`。
   * 嚴格且完全僅依賴掛載之 NotebookLM 筆記本中的注釋書文獻，中文經文一律參考「新標點和合本」（CUV）。
   * 完整呈現五大板塊：
     1. **一、篇章論述分析與歷史處境（Discourse Analysis & Historical Context）**：宏觀篇章架構（邏輯階層、論述標記、修辭包夾結構）、書卷文脈承接、歷史社會文化背景。
     2. **二、逐節深度釋經與語義場分析（Micro-Exegesis & Semantic Field Analysis）**：解經焦點、關鍵字彙語義場與詞義範圍分析（防範字根謬誤與非法總合轉移）、文獻歸屬。
     3. **三、難解經文剖析（Crux Interpretum）**：抄本異文、歷史重構困境、文本張力與學者解惑途徑。
     4. **四、學者詮釋分歧與爭鳴**：爭議焦點、各方學者論點與論據。
     5. **五、文本反對意見與文獻駁斥**：注釋書作者明確反對或駁斥之立場。
   * **長度上限中斷與續寫規範（Continuation Protocol）**：若單次生成達到 token 上限中斷，結尾標註「內容未完，可輸入『繼續』以產出剩餘部分」，使用者輸入「繼續」後以追加模式（Append）寫入，直至第五大項完整收尾。
3. **1b. 喻道素材庫（Illustrations Knowledge Base）**：
   * Spark 讀取 `prompts/illustrations.txt` 生成 `data/<YYYY-MM-DD>/illustrations.md`。
   * 檢索優先順序：第一優先為筆記本中 `[Illustrations]` 專題文件；備援為註釋書與講章中引用的文學名著、歷史軼事、教父隱喻與現代生活類比；嚴禁外求。
   * 依六日經文小段結構化萃取：包含出處來源、類型、對應核心神學與原文、完整敘事與情境詳情、青年/家庭切入視角建議。
   * **階段準入門檻**：必須確認 `study.md` 與 `illustrations.md` 均完整產出後，方可進入第 2 階段的主題規劃。

### 第 2 階段：生成每週主題規劃（Topics Planning）
1. Spark 直接讀取對應模板執行生成：
   * 青年篇：讀取 `prompts/topics_for_youth.txt`
   * 家庭篇：讀取 `prompts/topics_for_family.txt`
2. **強制依據 `study.md` 與 `illustrations.md`**：主題設計必須汲取完整版 `study.md` 整理出的文脈進程與核心神學，並輔以 `illustrations.md` 的喻道脈絡，分別切入青年與家庭的真實生命處境。
3. 輸出並覆蓋寫入：
   * `data/<YYYY-MM-DD>/topics_for_youth.md`
   * `data/<YYYY-MM-DD>/topics_for_family.md`

### 第 3 階段：逐日深耕靈修材料生成（Day-by-Day Deep-Dive Generation）
1. **雙基石資料源**：
   * 釋經骨架 100% 取材自本機 `study.md`。
   * 敘事例證 100% 取材自本機 `illustrations.md`。
   * 嚴格禁止脫離這兩份文件自行杜撰或調用外部未收錄的罐頭故事。
2. **檔案初始化與標頭結構**：
   * 先行在 `qt_*.md` 頂部寫入週次元資料（供前台同步腳本自動解析）：
     ```markdown
     # 每日靈修：青年篇（YYYY-MM-DD）

     * **【經文範圍】** <經卷 章:節>
     * **【總主題】** <總主題名稱>
     * **【簡述】** <主題說明與前言導讀>

     ---
     ```
3. **每日信息內容結構**：
   * 嚴格遵循 `prompts/qt_for_youth.txt` 與 `prompts/qt_for_family.txt` 所定義之各區塊規範：
     * **【經文】**：附上新標點和合本經文。
     * **【主題】**：沿用主題規劃中該日名稱。
     * **【信息】**：篇幅約 **1,800–2,000 字純散文**，嚴禁任何編號清單、項目符號或過度切割的小標題。
     * **【建議禱告】**：約 **300 字**，以第一人稱真誠撰寫。
     * **【延伸研讀】**：3 處跨卷經文，每處以 4–5 句話闡釋內在神學關聯（格式：`* **書卷 章:節**｜說明...`）。
     * **【默想問題】**：1 個具穿透力的高質感開放式反思問題。
4. **排版與專有名詞三大規範（強制執行）**：
   1. **非聖經耳熟能詳之現代學者/文豪人名**：首次出現時必須在中文譯名後括弧附上英文原名，如「哈夫曼（Scott Hafemann）」、「霍桑（Nathaniel Hawthorne）」、「加蘭（David Garland）」、「金口若望（John Chrysostom）」。
   2. **希臘原文與拉丁外語字詞**：一律使用 Markdown 斜體標註（例如：*syneidēsis*, *eilikrineia*, *arrhabōn*, *Coram Christo*）。
   3. **原文中文釋義**：若原文詞彙前後文未直接給予對應的中文和合本詞彙或字義解釋，必須緊隨於該詞後方以括號標明中文含義，例如「*synochē kardias*（心靈絞痛）」、「*ho adikēsas*（行虧負者）」，確保讀者能清晰理解。
5. **逐日無縫追加寫入**：
   * 每日產出後，Spark 直接使用追加模式（Append）無縫寫入至目標檔案，保持格式規範且不需手動合併檔案。

### 第 4 階段：資料同步與編譯檢驗（Data Sync & Verification）
* 生成完成後，執行同步腳本驗證 Markdown 語法並自動生成前台 TypeScript 資料庫：
  ```bash
  npm run sync
  ```
* 執行靜態型別檢驗確保前端相容性：
  ```bash
  npx tsc --noEmit
  ```

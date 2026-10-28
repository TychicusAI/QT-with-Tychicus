# 每週經課靈修與釋經生成工作流（Workflow Specification）

本專案旨在將每週教會經課與 NotebookLM 研經資料庫，高品質轉化為針對五個不同生命階段、使命視角與解經深度的族群軌道——**「青年版 Youth」**、**「家庭版 Family（父母與青少年）」**、**「樂齡版 Encore（50 歲以上熟齡與樂齡）」**、**「宣教版 Mission（雙軌整合使命人生篇）」**與**「釋經版 Exegesis（純文字微觀釋經深研）」**——的六日（週一至週六）靈修與釋經材料。

> **核心準則：以 `prompts/` 為唯一真理來源（SSOT），以 `study.md` 與 `illustrations.md` 為雙基石**  
> 所有提示詞設計、內容細節、字數規範、釋經架構與排版要求，皆由 `prompts/` 目錄下的模板檔案直接定義與主導。本工作流文件專注於定義執行架構、環境配置、目錄映射、五軌版本牧養與釋經定位及階段任務推進流程。**工作流強制實施「微觀研經與素材先行」與「逐日深耕」**：在規劃主題與撰寫每日專文前，必須先以 `prompts/study.txt` 產生基於「文本微觀解經工具箱」的深度學術研經筆記 `study.md`（若目標包含青年／家庭／樂齡／宣教四軌，並以 `prompts/illustrations.txt` 產生專屬喻道素材庫 `illustrations.md`）；而在撰寫每日信息時，**一律採行「一天一指令、逐日深耕打磨」**，徹底杜絕批量產出造成的細節稀釋與品質退化。

---

## 1. 核心原則與預設設定（Default Policy）

1. **檔案覆蓋策略：預設「重新生成並覆蓋」（Overwrite = true）**：
   * 當目標日期目錄或檔案已存在時，工作流預設**直接重新生成並覆蓋現有檔案**。
   * 確保每次執行都能取得最新、最完整的內容，無需手動刪除舊檔。

2. **核心解經與素材基石：預設「研經與素材先行」（Study & Illustrations First Policy）**：
   * 在進行任何群體主題規劃或每日寫作之前，**必須優先執行 `prompts/study.txt` 生成 `study.md`**；若目標包含牧養四軌（青年、家庭、樂齡、宣教），則同步執行 `prompts/illustrations.txt` 生成 `illustrations.md`（若僅單獨生成「釋經版 `qt_for_exegesis.md`」，則無需生成或讀取 `illustrations.md`）。
   * `study.md` 採用權威的**「文本微觀解經工具箱（Textual Micro-Exegesis Toolkit）」五大模組架構**（模組零：經文邊界論證；模組一：六大微觀工具實戰剖析；模組二：文體動態對焦；模組三：1,800–2,000 字純散文體微觀解經綜合重構；模組四：雙層核心主旨與救贖神學階梯；模組五：逐節深度釋經、難解經文剖析、學者爭鳴與文獻駁斥），嚴格僅依賴 NotebookLM 註釋書文獻。
   * `illustrations.md` 是從 NotebookLM 來源中全面萃取之專屬喻道故事、現代生活類比、歷史軼事、宣教與教會歷史事件、文豪名言與教父隱喻的素材庫（同時提供青年、家庭、樂齡、宣教四種轉譯視角切入建議）。
   * **完整性保障與中斷續寫機制（Continuation & Append Protocol）**：
     * 由於學術研經追求高規格的深度與逐節詳解，若單次輸出達到長度上限而中斷，模型會在最後一句提示「內容未完，可輸入『繼續』以產出剩餘部分」。
     * 使用者輸入「繼續」後，工作流將接續未完段落並以**追加寫入（Append）**更新至 `data/<YYYY-MM-DD>/study.md`，直至所有模組完全收尾，確保最終的 `study.md` 是一份結構完整、無缺漏的學術研經文獻。
   * **後續所有主題進程規劃與每日專文撰寫，皆必須以 `study.md`（及牧養四軌所用的 `illustrations.md`）為共同的唯一事實來源**，實現完全本地化、零矛盾的資料依託，徹底杜絕外求與幻覺。

3. **執行模式：唯一採行「逐日深耕模式」（Day-by-Day Deep-Dive Mode，一天一指令）**：
   * **徹底廢除「一次生成全週 6 天」的批次指令**：單次輸出高達 1.2 萬字以上會導致模型注意力預算稀釋、句型模式化、故事被草草略述以及釋經與靈性深度扁平化。
   * **落實一天一指令**：每天集中模型 100% 的推理與修辭算力，深耕約 2,000 字具文學呼吸感的深度散文或高密度微觀釋經論述、希臘原文語義場與動詞體貌拆解，以及真摯的第一人稱禱告詞。
   * **單一檔案無縫追加**：每日信息直接依序寫入/追加至本機的 `qt_*.md` 檔案中，使用者無需手動建立多個檔案再費力複製合併，兼顧「極致精緻」與「操作流暢」。

4. **延伸研讀經文快取全覆蓋規範（Bible Cache Full Coverage Policy）**：
   * 所有在每日專文【延伸研讀】中引用的經文章節，必須同步收錄於 `data/bible-cache.json` 中（包含完整新標點和合本經文字句與節數標註）。
   * 前台閱讀器採用點擊展開經文設計，若快取中無此經文，讀者展開時會顯示「未收錄本處經文文字」。
   * **硬性中斷保護**：在執行 `npm run sync` 時，系統會自動嚴格校驗全站所有延伸研讀經文的快取覆蓋率；若檢測到任何未收錄之經文，同步腳本將**強制拋錯並中斷退出（Exit Code 1）**，徹底阻斷缺失經文發布到前台，嚴防此項疏漏。
   * **排版格式防呆（No Literal \n Rule）**：經文文字與 Markdown 文件中所有換行必須為標準真實換行字元（`\n`），嚴禁帶有字面雙反斜線轉義字元（`\\n`），杜絕前台展開卡片或研經文件渲染出 raw `\n` 字樣。同步腳本與前台閱讀器已全面配置自動清洗過濾層。

5. **釋經版向量圖解規範（Exegetical Discourse SVG Charts Policy）**：
   * **視覺拓撲錨點**：當經文具備顯著篇章結構（交叉對稱樞紐 Chiasmus / Pivot Center、二元神學對決與語意分流如「依神憂愁 vs 世俗憂愁」、複雜文法論證鏈 Syntactic Flow 或宣教行旅時間軸）時，於該日釋經專文中配置專屬向量結構圖解。
   * **佔位符架構（Markdown Placeholder Architecture，嚴禁內嵌原始多行 SVG）**：在 Markdown 檔案（`qt_for_exegesis.md`）中，**嚴格禁止直接貼入多行原始 SVG XML**（避免 Markdown 解析器 `marked` 將 4 空格縮排標籤誤判為 `<pre><code>` 代碼塊而導致 SVG 渲染損壞中斷）。一律使用標準 HTML 註解佔位符：`<!-- CHART:<chart-id> -->`（例如 `<!-- CHART:two-sorrows -->`），建議置於第一樂章【篇章座標與結構拓撲】之後，作為開篇即見的視覺導航錨點。
   * **純 React 向量元件實作**：圖表一律於 `src/components/charts/<ChartName>.tsx` 實作為純 React JSX 向量元件，配備自適應視區（`aspectRatio` 與 `viewBox`）、外層橫向捲動保護容器（`min-w-[720px] overflow-x-auto`，確保手機端不壓扁變形、桌機端滿版舒展）及深色模式（Dark Mode）自適應色彩，並於 `DevotionalReader.tsx` 透過 `messageHtml.split("<!-- CHART:<chart-id> -->")` 自動精準掛載。

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
   * 每一週工作流包含學術研經筆記、喻道素材庫、主題進程及逐日深耕生成的完整專文，總字數達 2 萬至 6 萬字以上。若數週疊加在同一個對話中，龐大的歷史紀錄會消耗大量上下文，可能導致生成速度變慢或格式精確度下降。
2. **乾淨的解經資料庫對應**：
   * 若進度切換至不同書卷（例如從《哥林多後書》換到《加拉太書》或《以弗所書》），在新工作中直接掛載對應卷別的 NotebookLM 筆記本，能確保資料來源純淨，不被前卷書的文獻干擾。
3. **專案管理清晰**：
   * 每個工作專注於單一週次的產出與檢驗，若需要針對該週細節微調（如重新潤飾某天的禱告或信息），紀錄單純且易於追溯。

---

## 4. 目錄與 Prompt 映射關係（I/O Mapping）

所有生成輸入皆以 `prompts/` 內檔案為準，產出成果皆存儲於 `data/<YYYY-MM-DD>/`：

| 階段 | 族群版本 | Prompt 來源模板（SSOT） | 輸出目標檔案 | 產出說明 |
| :--- | :--- | :--- | :--- | :--- |
| **第 1 階段：學術研經** | 全體共用 | `prompts/study.txt` | `data/<YYYY-MM-DD>/study.md` | 採用「文本微觀解經工具箱」五大模組之深度學術研經筆記（邊界論證、六大微觀工具、文體對焦、2,000字綜合重構、救贖階梯與逐節釋經爭鳴） |
| **第 1 階段：喻道素材** | 牧養四軌共用 | `prompts/illustrations.txt` | `data/<YYYY-MM-DD>/illustrations.md` | 從 NotebookLM 萃取之專屬喻道故事、現代生活類比、歷史軼事、宣教與教會歷史、文豪名言與教父隱喻（若僅生成釋經版則跳過此項） |
| **第 2 階段：主題規劃** | 釋經版 (`exegesis`) | `prompts/topics_for_exegesis.txt` | `data/<YYYY-MM-DD>/topics_for_exegesis.md` | 嚴格參考 `study.md`（去案例化），擬定微觀釋經深研總主題、導讀與週一至週六釋經命題規劃 |
| **第 2 階段：主題規劃** | 青年篇 (`youth`) | `prompts/topics_for_youth.txt` | `data/<YYYY-MM-DD>/topics_for_youth.md` | 嚴格參考 `study.md` 與 `illustrations.md`，擬定青年總主題、導讀與週一至週六進程規劃 |
| **第 2 階段：主題規劃** | 家庭篇 (`family`) | `prompts/topics_for_family.txt` | `data/<YYYY-MM-DD>/topics_for_family.md` | 嚴格參考 `study.md` 與 `illustrations.md`，擬定家庭總主題、導讀與週一至週六進程規劃 |
| **第 2 階段：主題規劃** | 樂齡篇 (`encore`) | `prompts/topics_for_encore.txt` | `data/<YYYY-MM-DD>/topics_for_encore.md` | 嚴格參考 `study.md` 與 `illustrations.md`，擬定樂齡總主題、導讀與週一至週六進程規劃 |
| **第 2 階段：主題規劃** | 宣教篇 (`mission`) | `prompts/topics_for_mission.txt` | `data/<YYYY-MM-DD>/topics_for_mission.md` | 嚴格參考 `study.md` 與 `illustrations.md`，依雙軌整合節奏擬定宣教總主題、導讀與週一至週六進程規劃 |
| **第 3 階段：逐日深耕** | 釋經版 (`exegesis`) | `prompts/qt_for_exegesis.txt` | `data/<YYYY-MM-DD>/qt_for_exegesis.md` | 唯一依據 `study.md`（嚴禁外部例證），**逐日下達指令無縫追加寫入**週一至週六純散文體微觀釋經深研與文末三層命題 |
| **第 3 階段：逐日深耕** | 青年篇 (`youth`) | `prompts/qt_for_youth.txt` | `data/<YYYY-MM-DD>/qt_for_youth.md` | 依據 `study.md`（釋經）與 `illustrations.md`（例證），**逐日下達指令無縫追加寫入**週一至週六完整信息 |
| **第 3 階段：逐日深耕** | 家庭篇 (`family`) | `prompts/qt_for_family.txt` | `data/<YYYY-MM-DD>/qt_for_family.md` | 依據 `study.md`（釋經）與 `illustrations.md`（例證），**逐日下達指令無縫追加寫入**週一至週六完整信息 |
| **第 3 階段：逐日深耕** | 樂齡篇 (`encore`) | `prompts/qt_for_encore.txt` | `data/<YYYY-MM-DD>/qt_for_encore.md` | 依據 `study.md`（釋經）與 `illustrations.md`（例證），**逐日下達指令無縫追加寫入**週一至週六完整信息 |
| **第 3 階段：逐日深耕** | 宣教篇 (`mission`) | `prompts/qt_for_mission.txt` | `data/<YYYY-MM-DD>/qt_for_mission.md` | 依據 `study.md`（釋經）與 `illustrations.md`（例證），**逐日下達指令無縫追加寫入**週一至週六完整信息 |
| **第 3 階段：經文快取** | 全體共用 | 每日專文之【延伸研讀】經文引用 | `data/bible-cache.json` | 延伸研讀經文之完整和合本內文快取，確保前台點擊展開能即時檢視經文 |

### 4.1 五軌版本牧養與釋經定位總覽（Five-Track Persona & Style Matrix）

以下記錄五個版本的受眾定位、核心焦點與文風設定，作為日後動態調整各版 Prompt 模板之基準：

| 設定維度 | 青年版 Youth (`youth`) | 家庭版 Family (`family`) | 樂齡版 Encore (`encore`) | 宣教版 Mission (`mission`) | 釋經版 Exegesis (`exegesis`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **目標受眾** | 升學、初入職場、面臨生涯未知與信仰拉扯的當代青年 | 面對家庭教養、溝通張力與同行成長的父母與青少年 | 步入 50 歲以上人生下半場（含 50–65 歲熟齡轉折與 65+ 退休樂齡）的基督徒 | 雙軌整合「使命人生」讀者群（跨文化前線工人／差傳同工，與本地日常職場鄰舍中的使命門徒） | 牧者、傳道人、神學生、查經帶領者與渴慕深研聖經原文肌理的成熟門徒 |
| **Markdown 標頭** | `# 每日靈修：青年篇（YYYY-MM-DD）` | `# 每日靈修：家庭篇（YYYY-MM-DD）` | `# 每日靈修：樂齡篇（YYYY-MM-DD）` | `# 每日靈修：宣教篇（YYYY-MM-DD）` | `# 每日釋經深研（YYYY-MM-DD）` |
| **作者人設與語氣** | 敏銳、熱血、直球破除虛假人設的屬靈導師 | 溫柔、同理兩代張力、引導換位思考的家庭牧者 | 溫厚、沉靜、同走過半生風雨的屬靈同行摯友（嚴禁哄長輩或晚輩說教口吻） | 兼具田野滄桑、救贖歷史厚度與溫柔同理的國度同行旅伴（嚴禁道德綁架與空泛凱旋口號） | 融合德英美嚴謹文法歷史解經傳統與宗教改革聖約神學火焰的解經學者與導師 |
| **文風與節奏氣質** | 如擊石出火，節奏明快、穿透力強 | 如餐桌夜談，溫暖平實、具對話感 | 如陳年醇酒與晨間微光，洗鍊從容、飽含歲月餘韻與安慰力道 | 如使徒行旅書簡，深邃洗鍊、兼具救贖歷史縱深與異鄉人間煙火氣 | 如精密手術刀與交響樂章，純散文體高密度論述（去案例化、零外部故事），文末附三層核心命題 |
| **核心焦點／五大痛點** | 1. 社群人設防衛與冒牌者症候群<br>2. 計畫變折的猜忌與生涯焦慮<br>3. 職場權力壓迫與績效偶像<br>4. 群體冷暴力與取消文化<br>5. 盲目追求產能效率而失去安息 | 1. 餐桌防衛與兩代沉默<br>2. 承諾落空的信任裂痕<br>3. 以愛為名的掌控與轄管界線<br>4. 犯錯後的冷戰與翻舊帳<br>5. 追求外在成敗而忽略家人呼求 | 1. 外體漸衰與面對有限的從容<br>2. 空巢期的放手與成年親子界線<br>3. 職場交棒與自我價值重尋（從 Do 轉向 Be）<br>4. 照顧年邁雙親負荷與面對生離死別<br>5. 半生回顧和解與安可使命（Encore） | 1. 前線跨文化瓦器軟弱與孤寂<br>2. 日常安舒區慣性與對跨文化鄰舍冷漠<br>3. 放下文化優越感與道成肉身轉譯<br>4. 後方「看守器具者」代禱與管家職分<br>5. 個人破碎與 Missio Dei 及萬族敬拜連結 | 1. 篇章座標與同心圓／交叉拓撲結構<br>2. 詞族語意域、多譯本張力與語意安全防線<br>3. 句法骨架、動詞體貌與標記性詞序前置<br>4. 修辭風暴、人稱變焦與自義防線拆解<br>5. 正典互文迴響與十架救贖神學高峰 |
| **建議禱告** | 「主啊，我……」聚焦突破懼怕與委身呼召 | 「天父，我們……」聚焦全家關係修復與彼此饒恕 | 「主啊，走過這許多年日，我……」聚焦數算恩典、交託兒女雙親與迎向永恆 | 「萬國的主，我……」聚焦拆毀文化優越感、托住前線工人、與神同工 | 「全能的父神／至聖的主，我們……」聚焦緊扣當日經文神學核心之認罪、敬拜與降服 |
| **默想問題（1題）** | 檢視自我動機、恐懼與偶像 | 適合父母與孩子餐桌敞開對話 | 適合個人晨間靜思、與老伴散步對談或熟齡團契分享 | 適合宣教代禱小組或跨文化團契分享，檢視跨越邊界行動 | 錨定微觀文本線索 ➔ 推敲神學意圖 ➔ 省察講台教學或個人事奉盲點 |

---

## 5. 標準操作流程（Day-by-Day Deep-Dive SOP）

工作流全面採行「**研經奠基、定立骨架、逐日打磨、同步驗證**」的四階段推進流程：

```
步驟 1：建立新工作 (New Task in Spark)
   │
步驟 2：確認 Connected Folders 包含 QT-with-Tychicus，並掛載對應 NotebookLM
   │
步驟 3【第 1 階段：研經與素材基石】：發送指令生成學術研經筆記 study.md（與喻道素材庫 illustrations.md）
   │   ├─ 3a. Spark 讀取 prompts/study.txt，依「文本微觀解經工具箱」五大模組在 data/<YYYY-MM-DD>/ 寫入 study.md
   │   │     └─ [若遇長度上限中斷]：末句提示「內容未完，可輸入『繼續』以產出剩餘部分」
   │   │           └─ 使用者輸入「繼續」 ──> Spark 續寫並無縫追加（Append）寫入 study.md，直至五大模組完整收尾
   │   └─ 3b. [若目標包含青年／家庭／樂齡／宣教] Spark 讀取 prompts/illustrations.txt，萃取筆記本喻道素材寫入 data/<YYYY-MM-DD>/illustrations.md
   │
步驟 4【第 2 階段：主題骨架】：發送指令生成「主題進程規劃」
   │   └─ Spark 讀取 prompts/topics_*.txt 並嚴格參考完整之 study.md (+ illustrations.md)，在 data/<YYYY-MM-DD>/ 覆蓋寫入 topics_for_exegesis.md、topics_for_youth.md、topics_for_family.md、topics_for_encore.md 或 topics_for_mission.md
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
步驟 6【第 4 階段：同步與檢驗】：確認 data/bible-cache.json 補全，執行 npm run sync 與 npx tsc --noEmit
       └─ 自動校驗經文快取覆蓋率（100% 覆蓋方可通過）、解析 Markdown、生成前台 TypeScript 資料庫並通過型別編譯檢驗
```

### ⚡ 一鍵觸發專屬技能（Recommended Shortcut）
專案已配置 Gemini Spark 專屬技能 **`tychicus-qt-generator`**，只要輸入以下指令即可全自動執行四階段工作流：
```text
@tychicus-qt-generator 請為我生成 [YYYY-MM-DD]（[書卷 章:節–章:節]）的釋經版、青年篇、家庭篇、樂齡篇與宣教篇全套材料。
```
> **提示**：亦可單獨指定生成特定軌道，例如：`@tychicus-qt-generator 產生 2026-10-26（哥林多後書 7:1-7:16）的釋經版內容`。

---

## 6. 工作流內部執行流水線（Pipeline Details）

### 第 1 階段：生成學術研經筆記與喻道素材庫（Foundational Knowledge Base）
1. **目錄初始化**：
   * 依據輸入日期確認或建立目錄：`data/<YYYY-MM-DD>/`。預設採覆蓋寫入（`Overwrite: true`）。
2. **1a. 學術研經筆記（Academic Micro-Exegesis Study Notes）**：
   * Spark 讀取 `prompts/study.txt` 生成 `data/<YYYY-MM-DD>/study.md`。
   * 嚴格且完全僅依賴掛載之 NotebookLM 筆記本中的註釋書文獻，中文經文參考「新標點和合本」（CUV）並於表格對照 RCUV、NCV、ESV/NASB。
   * 完整呈現「文本微觀解經工具箱」五大核心模組：
     * **模組零：經文邊界論證（Pericope Delimitation）**：前向邊界、內在遠距鉤連復歸、後向邊界與大段落收結。
     * **模組一：六大微觀工具實戰剖析（The 6 Micro-Exegesis Tools）**：（1）字詞、詞族與語意域分析（嚴格執行語意安全防線）及多譯本對照表；（2）句法骨架、動詞體貌（Verbal Aspect）與邏輯連接詞鏈；（3）文學結構與論證拓撲圖（標定結構核心 Pivot）；（4）修辭論辯、語用情境與張力；（5）指示語與人稱／視角變焦；（6）正典迴響、盟約意象與互文驗證。
     * **模組二：文體動態對焦（Genre-Specific Dynamic Adaptation）**。
     * **模組三：微觀解經綜合重構（Textual Synthesis & Discourse Flow）**：1,800–2,000 字一氣呵成的純散文體高密度神學論述（嚴禁條列式清單）。
     * **模組四：雙層核心主旨與救贖神學階梯（Dual-Level Big Ideas & Redemptive Ladder）**：文本解經命題、正典救贖神學樞紐、講道／教學命題。
     * **模組五：逐節深度釋經、難解經文剖析、學者爭鳴與文獻駁斥（Verse-by-Verse Commentary Synthesis, Crux Interpretum & Scholarly Debates）**。
3. **1b. 喻道素材庫（Illustrations Knowledge Base）**：
   * 若目標包含青年、家庭、樂齡或宣教篇，Spark 讀取 `prompts/illustrations.txt` 生成 `data/<YYYY-MM-DD>/illustrations.md`（若僅生成釋經版 `qt_for_exegesis.md` 則跳過此步驟）。

### 第 2 階段：生成每週主題規劃（Topics Planning）
1. Spark 直接讀取對應模板執行生成：
   * 釋經版：讀取 `prompts/topics_for_exegesis.txt` 輸出 `data/<YYYY-MM-DD>/topics_for_exegesis.md`
   * 青年篇：讀取 `prompts/topics_for_youth.txt` 輸出 `data/<YYYY-MM-DD>/topics_for_youth.md`
   * 家庭篇：讀取 `prompts/topics_for_family.txt` 輸出 `data/<YYYY-MM-DD>/topics_for_family.md`
   * 樂齡篇：讀取 `prompts/topics_for_encore.txt` 輸出 `data/<YYYY-MM-DD>/topics_for_encore.md`
   * 宣教篇：讀取 `prompts/topics_for_mission.txt` 輸出 `data/<YYYY-MM-DD>/topics_for_mission.md`

### 第 3 階段：逐日深耕材料生成（Day-by-Day Deep-Dive Generation）
1. **資料源規範**：
   * **釋經版（`qt_for_exegesis.md`）**：100% 唯一取材自 `study.md`，徹底去案例化（嚴禁任何外部生活故事或通俗比喻），純散文體推進四大樂章，並於每日【信息】文末附上三層核心命題收斂（文本解經命題、正典救贖神學樞紐、講道／教學命題）。若遇顯著篇章結構或二元神學對決，於第一樂章後插入 `<!-- CHART:<chart-id> -->` 佔位符，並於 `src/components/charts/` 實作對應之純 React SVG 向量圖解元件。
   * **牧養四軌（`qt_for_youth.md`, `qt_for_family.md`, `qt_for_encore.md`, `qt_for_mission.md`）**：釋經骨架 100% 取材自 `study.md`，敘事例證 100% 取材自 `illustrations.md`。
2. **檔案初始化與標頭結構**：
   * 先行在 `qt_*.md` 頂部寫入週次元資料（供前台同步腳本自動解析）：
     * 青年篇：`# 每日靈修：青年篇（YYYY-MM-DD）`
     * 家庭篇：`# 每日靈修：家庭篇（YYYY-MM-DD）`
     * 樂齡篇：`# 每日靈修：樂齡篇（YYYY-MM-DD）`
     * 宣教篇：`# 每日靈修：宣教篇（YYYY-MM-DD）`
     * 釋經版：`# 每日釋經深研（YYYY-MM-DD）`
3. **排版與專有名詞三大規範（五軌強制執行）**：
   1. **非聖經耳熟能詳之現代學者/文豪/宣教先驅/教父人名**：首次出現時必須在中文譯名後括弧附上英文原名，如「哈夫曼（Scott Hafemann）」、「哈里斯（Murray Harris）」、「葛斯理（George Guthrie）」、「金口若望（John Chrysostom）」。
   2. **原文與外語呈現規範（「中文為主體、原文退居括弧」原則，極重要）**：
      * **括號剝離原則**：正文為流暢優美的中文散文，希臘原文、希伯來文或拉丁外語絕對禁止直接充當中文句子的主詞、受詞或表語。整篇散文即使剝離所有括號內容，中文語意與行氣必須依然完全通順、完整無缺（TTS 語音生成亦會自動過濾括號內容純讀中文）。
   3. **正文經節引用規範**：【信息】正文散文行氣中提及經節時，一律嚴格寫全，使用阿拉伯數字搭配中文量詞（例如「哥林多後書 7 章 1 節」、「7 章 8 至 10 節」），嚴格禁止在正文敘事主句中使用冒號簡寫（如「7:1」）或國字大寫（如「七章一節」）。句尾括號輔助出處則保留緊湊簡短縮寫即可（例如「（結 36:25–27）」）。

### 第 4 階段：資料同步與編譯檢驗（Data Sync & Verification）
1. **延伸研讀經文快取檢查（Bible Cache Audit）**：
   * 檢查本週所有 `qt_for_*.md` 中【延伸研讀】引用的經文，確認每一處皆已將完整和合本經文寫入 `data/bible-cache.json`。
2. **執行同步與自動校驗**：
   ```bash
   npm run sync
   ```
3. **執行靜態型別檢驗與建置測試**：
   ```bash
   npx tsc --noEmit
   npm run build
   ```

### 第 5 階段：TTS 語音生成（Text-to-Speech Generation）

專案預設採用 **F5-TTS MLX 原生架構**（具備 58.4 萬詞繁體原生大辭典、繁體多音字專用詞庫校正與精準 G2P 控制，發音零差錯率，音質清澈穩定），亦整合支援 **CosyVoice 3.0 (`Fun-CosyVoice3-0.5B-2512` MLX 8-bit)** 作為實驗性語音引擎。全管線運用 Apple Silicon GPU 統一記憶體進行零樣本語音克隆，並自動執行文本清洗（小括號過濾、阿拉伯數字轉中文數字、未帶引號冒號轉逗號）：

#### 5.1 一鍵全自動語音克隆指令
```bash
# 預設採用 F5-TTS MLX 為最新一週進行增量生成（已存在的音檔自動略過）
npm run tts

# 僅為特定族群版本生成
npm run tts -- --version youth        # 青年版
npm run tts -- --version family       # 家庭版
npm run tts -- --version encore       # 樂齡版
npm run tts -- --version mission      # 宣教版
npm run tts -- --version exegesis     # 釋經版
```

#### 5.2 客製化專屬音色庫（`data/voices/`）
音色來源直接依賴 `data/voices/` 中的參考音訊與對應文字檔：
* `family_female.wav` + `family_female.txt`（青年版 `youth` 與家庭版 `family` 參考聲音，約 5～10 秒）
* `mission_male.wav` + `mission_male.txt`（樂齡版 `encore`、宣教版 `mission` 與釋經版 `exegesis` 參考聲音，約 5～10 秒）

#### 5.3 語音工程黃金標準與避坑備忘錄（TTS Engineering Standards & Gotchas）

1. **黃金聲學參數配方（Sample 4）**：
   * **最佳設定值**：`steps=32, cfg=1.2, speed=1.03`，音訊規格為 44.1 kHz / 192 kbps MP3。
2. **G2P 切詞與斷詞三重防護體系（Triple-Layer Segmentation Architecture）**：
   * 底層：Jieba 官方繁體大詞庫（`scripts/dict.txt.big`）。
   * 中層：`tw2s` 投影機制（在 `segment_text` 中）。
   * 頂層：聖經神學專用核心辭典（`DEVOTIONAL_LEXICON`）。
3. **音節邊界空格規範（不得移除音節間的空格，防吃字與發音形變）**。
4. **文本寫作與排版鐵律（外文退居括弧原則，確保 TTS 零外文發音事故）**。

# 靈修推基古（QT with Tychicus）

專為青年與基督徒家庭量身打造的現代互動式雙版本靈修（Quiet Time）Web 應用。每週深度研經，立足於十字架與復活，陪伴青年在升學、職場與人際風浪中拆毀自我焦慮；陪伴父母與青少年在家庭餐桌與代際張力中，卸下防衛的面具，以真誠與恩典重建信任。

---

## 🌟 核心特色

1. **「青年版」與「家庭版」雙軌切換（Dual-Mode QT Experience）**：
   * **青年版（Youth）**：專注於升學、職場、人際風浪中拆解自我焦慮，擁抱天國身分與基督裡的誠信。
   * **家庭版（Family）**：專注於餐桌旁的真實對話、管教與赦免的界線拿捏、代際溝通與家庭避風港的建立。
   * 首頁與每日閱讀頁面均設有一鍵切換按鈕，可即時對照同一段經文對青年與家庭的不同生活應用。

2. **六日靈修旅程（6-Day Journey）**：
   * 完整呈現每週主題、前言導讀、每日經文、希臘原文解析、深度信息、建議禱告、延伸研讀與默想問題。

3. **靈修生活工具箱（Faith Toolkit）**：
   * **金句卡片產生器**：一鍵套用晨曦、星夜、清心、雅致四款美感背景，生成社群/家人分享圖文。
   * **靜心深呼吸計時器**：內建 1/3/5/10 分鐘安靜默想引導與動態呼吸球，陪伴讀者在閱讀前安息在主前。

4. **Local-first 靈修打卡與心得手記**：
   * 無需繁瑣註冊登入即可在頁面直接記錄個人靈修心得與完成「同心阿們」打卡。
   * 所有資料均即時自動保存在使用者本機瀏覽器（LocalStorage），隱私安全且永不遺失。

5. **深色／淺色模式切換**：
   * 晨禱時使用溫暖雅致的淺色紙感，夜間默想時一鍵切換柔和深色護眼模式。

---

## 🚀 快速啟動

```bash
# 1. 安裝相依套件
npm install

# 2. 同步 Markdown 材料（可選，dev 與 build 會自動執行）
npm run sync

# 3. 啟動本地開發伺服器
npm run dev

# 4. 構建生產版本（靜態預渲染 SSG）
npm run build
npm run start
```

瀏覽器打開 `http://localhost:3000` 即可預覽。

---

## 📖 如何每週新增或更新靈修教材？

本專案完全自動化，**不需要修改任何前端程式碼**：

### 只要一步：放入每週資料夾與 Markdown 檔案
在專案根目錄的 `data/` 資料夾下，新增以當週週一日期命名的目錄，並放入兩份材料：
```
data/
└── <YYYY-MM-DD>/                 # 例如 2026-09-14
    ├── qt_for_youth.md           # 青年篇週一至週六完整靈修
    └── qt_for_family.md          # 家庭篇週一至週六完整靈修
```

系統在 `npm run dev` 或 `npm run build`（包括 Vercel 部署）時，會**全自動解析該目錄下的兩份 Markdown 檔案，自動生成雙版本的 TypeScript 型別定義與 12 個靜態預渲染閱讀頁面**！

---

## 🗑️ 如何移除原 QT-for-Youth 網站（qt-for-youth.vercel.app）？

若您想關閉或徹底刪除原本部署在 Vercel 上的舊專案，請按照以下步驟操作：

1. **登入 Vercel**：打開瀏覽器前往 [Vercel Dashboard](https://vercel.com/dashboard) 並登入您的帳號。
2. **進入舊專案**：在專案列表（Projects）中，找到並點擊 **`qt-for-youth`**。
3. **進入專案設定**：點擊頂部導覽列最右側的 **Settings**（設定）分頁。
4. **捲動至最底部**：在 Settings 頁面中一路向下捲動到最底端的 **Delete Project** 區域。
5. **確認刪除**：
   * 點擊紅色的 **Delete** 按鈕。
   * 系統會彈出確認對話框，請在輸入框中手動輸入專案名稱（如 `qt-for-youth` 或加上您的團隊前綴）。
   * 點擊確認刪除按鈕。
6. **完成**：刪除完成後，原本的 `https://qt-for-youth.vercel.app/` 將立即失效並停止託管，該網址名稱也會被釋放。

---

## 🌐 如何建立並部署全新「靈修推基古」網站？

要將此全新的 `QT-with-Tychicus` 部署至 Vercel，步驟如下：

### 第一步：在本機初始化 Git 並推送到 GitHub

1. 開啟終端機進入專案目錄：
   ```bash
   cd /Users/winston/Repo/QT-with-Tychicus
   ```
2. 初始化 Git 儲存庫並提交程式碼：
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for QT-with-Tychicus dual-version website"
   ```
3. 在 GitHub 上建立一個新的儲存庫（例如命名為 `QT-with-Tychicus`）：
   * 前往 [GitHub New Repository](https://github.com/new)
   * 儲存庫名稱填寫：`QT-with-Tychicus`
   * 選擇 Public 或 Private，點擊 **Create repository**。
4. 將本機程式碼推送至 GitHub：
   ```bash
   git branch -M main
   git remote add origin git@github.com:TychicusAI/QT-with-Tychicus.git  # 或您的個人 GitHub 帳號路徑
   git push -u origin main
   ```

### 第二步：在 Vercel 匯入並一鍵發布

1. 登入 [Vercel Dashboard](https://vercel.com/dashboard)。
2. 點選右上角的 **Add New...** 按鈕，選擇 **Project**。
3. 在 **Import Git Repository** 列表中找到剛剛建立的 **`QT-with-Tychicus`**，點選 **Import**。
4. **配置專案設定**：
   * **Project Name**：可自訂為 `qt-with-tychicus`（屆時預設網址為 `https://qt-with-tychicus.vercel.app`）。
   * **Framework Preset**：Vercel 會自動辨識為 `Next.js`。
   * **Build and Output Settings**：保持預設即可（Build Command 會自動執行 `npm run build`，其中包含 `prebuild` 自動編譯 markdown）。
5. 點擊 **Deploy**（部署）。
6. 等待約 1 分鐘，看到滿屏彩帶即表示部署完成！點擊提供的網址即可在線上開始使用全新的「靈修推基古」網站。

---

## 📂 目錄結構

```
QT-with-Tychicus/
├── data/                         # 靈修 Markdown 材料來源
│   └── 2026-09-14/
│       ├── qt_for_youth.md       # 青年版週一至週六材料
│       └── qt_for_family.md      # 家庭版週一至週六材料
├── scripts/
│   └── sync-markdown.mjs         # 雙版本智慧同步腳本
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── devotional/[version]/[weekId]/[dayId]/ # 每日閱讀頁（SSG 靜態預渲染）
│   │   ├── globals.css           # 全域紙感美學與深色模式
│   │   ├── layout.tsx            # 根版面配置
│   │   └── page.tsx              # 首頁入口
│   ├── components/               # UI 組件（雙版切換、卡片、計時器、筆記等）
│   ├── data/weeks/               # 由腳本自動生成的週次資料庫 (youth & family)
│   ├── lib/                      # 核心工具函式（雙版服務層、LocalStorage 儲存、主題）
│   └── types/                    # TypeScript 型別定義
├── WORKFLOW.md                   # 每週經課靈修生成工作流
├── next.config.ts                # Next.js 配置（含舊路徑相容性重新導向）
└── package.json                  # 專案相依套件與腳本
```

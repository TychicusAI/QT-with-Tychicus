# 阿咕信箱（data/qa）內容維護指南

本資料夾存放「阿咕信箱」所有信仰問答的 Markdown 檔案。只要新增或編輯 `.md` 檔案並執行 `npm run sync`（`npm run dev` 與 `npm run build` 也會自動執行），網站就會自動生成對應的靜態頁面與列表卡片。

## 五大分類資料夾結構

```text
data/qa/
├── categories.json           # 五大分類名稱、說明、配色與牧養提醒設定
├── chinese-culture/          # 一、華人文化與傳統習俗（祭祖孝道、民間禁忌、婚姻傳宗接代）
├── suffering-prayer/         # 二、苦難、禱告與神的作為（苦難意義、禱告未應允、成功神學落差）
├── core-doctrine/            # 三、核心教義與宗派差異（救恩安全感、聖靈靈恩、聖禮教會觀）
├── bible-exegesis/           # 四、聖經難題與解經方法（舊新約落差、文化應用、科學與信仰）
└── modern-ethics/            # 五、現代生活倫理與身心健康（金錢奉獻、心理健康、職場與社會）
```

## 單篇問答 Markdown 格式

每篇檔案放在對應分類資料夾內，檔名即為網址 slug（例如 `01-heaven-boring.md` 會對應 `/qa/01-heaven-boring`）。

```markdown
---
title: 上天堂整天唱詩是不是很無聊？
question: 每次想到永生要在雲朵上穿白袍、彈豎琴唱詩到永遠，其實我心裡有點提不起勁……這代表我屬靈光景不好嗎？
summary: 會覺得雲端彈豎琴很無聊，不是你屬靈光景不好，而是我們不小心把柏拉圖劇本錯當成聖經的新創造大結局了。
publishedAt: 2026-11-22
order: 1
tags: 天國, 新創造, 永生, 啟示錄
scriptures: 啟示錄 21:1-5, 路加福音 24:36-43
pastoralNotice: false
relatedLinks:
  - 查閱《哥林多後書》釋經參考書目|/books/2-corinthians|book
  - 瀏覽歷週循序讀經存檔|/archive|devotional
---

這裡放用推基咕人設生成的完整回信正文（支援標準 Markdown 段落、引用、粗體與小標題）。
```

> **提示**：
> - `suffering-prayer` 分類會自動顯示文末「溫柔的牧養提醒」小卡；若 `modern-ethics` 裡涉及心理健康／憂鬱焦慮等文章也想顯示該提醒，只需在 frontmatter 加上 `pastoralNotice: true` 即可。
> - 尚未撰寫答案的題目，只要先填寫 frontmatter（`title`、`question`、`order`）而正文留白，系統會自動標記為「阿咕執筆中（upcoming）」預告卡片；填入正文後即自動轉為正式發布（published）。

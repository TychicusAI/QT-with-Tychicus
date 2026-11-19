"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function ImpartialityChiasmChart() {
  const rows = [
    {
      tag: "A (2:6)",
      indent: "",
      boxClass: "bg-slate-50/95 dark:bg-slate-800/80 border-2 border-slate-400 dark:border-slate-500",
      tagClass: "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100",
      greekClass: "text-purple-700 dark:text-purple-300",
      title: "【審判準則】祂必照各人的行為報應各人",
      greek: "hos apodōsei hekastō kata ta erga autou",
      sub: "引用詩篇 62:12 與箴言 24:12，奠定末日公義審判之普世標準",
    },
    {
      tag: "B (2:7)",
      indent: "sm:ml-6",
      boxClass: "bg-purple-50/90 dark:bg-purple-950/35 border border-purple-300 dark:border-purple-700",
      tagClass: "bg-purple-200/80 dark:bg-purple-900 text-purple-900 dark:text-purple-100",
      greekClass: "text-purple-700 dark:text-purple-300",
      title: "【正面：品格 ➔ 獎賞】凡恆心行善、尋求榮耀尊貴不能朽壞的 ➔ 永生",
      greek: "doxan kai timēn kai aphtharsian ... zōēn aiōnion",
      sub: "語序：先列行為態度（恆心行善），句尾揭曉報應結果（永生）",
    },
    {
      tag: "C (2:8)",
      indent: "sm:ml-12",
      boxClass: "bg-rose-50/90 dark:bg-rose-950/35 border border-rose-300 dark:border-rose-700",
      tagClass: "bg-rose-200/80 dark:bg-rose-900 text-rose-900 dark:text-rose-100",
      greekClass: "text-rose-700 dark:text-rose-300",
      title: "【負面：品格 ➔ 刑罰】惟有出於自私野心、不順從真理反順從不義的 ➔ 忿怒與暴怒",
      greek: "ex eritheias ... orgē kai thymos",
      sub: "語序：先列悖逆品格，句尾砸落雙重震怒名詞",
    },
    {
      tag: "C' (2:9)",
      indent: "sm:ml-12",
      boxClass: "bg-rose-50/95 dark:bg-rose-950/50 border-2 border-rose-500",
      tagClass: "bg-rose-600 text-white",
      greekClass: "text-rose-700 dark:text-rose-300",
      title: "★【樞紐 I：刑罰前置＋族裔打破】患難與困苦！臨到一切作惡之人的靈魂——先是猶太人，後是希利尼人",
      greek: "thlipsis kai stenochōria ... Ioudaiō te prōton kai Hellēni",
      sub: "（詞序反轉：報應強勢前置；特權越大，審判問責越先！）",
    },
    {
      tag: "B' (2:10)",
      indent: "sm:ml-6",
      boxClass: "bg-purple-50/95 dark:bg-purple-950/50 border-2 border-purple-500",
      tagClass: "bg-purple-600 text-white",
      greekClass: "text-purple-700 dark:text-purple-300",
      title: "★【樞紐 II：獎賞前置＋族裔打破】但榮耀、尊貴與平安！歸給一切行善的人——先是猶太人，後是希利尼人",
      greek: "doxa de kai timē kai eirēnē ... Ioudaiō te prōton kai Hellēni",
      sub: "（以盟約「平安 eirēnē」對應 B 段之「不能朽壞與永生」）",
    },
    {
      tag: "A' (2:11)",
      indent: "",
      boxClass: "bg-slate-50/95 dark:bg-slate-800/80 border-2 border-slate-400 dark:border-slate-500",
      tagClass: "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100",
      greekClass: "text-purple-700 dark:text-purple-300",
      title: "【神本根基】因為在神面前，並沒有偏待人的事",
      greek: "ou gar estin prosōpolēmpsia para tō theō",
      sub: "濃縮申命記 10:17 與歷代志下 19:7：至高法官絕不「看人的臉面／族裔招牌」",
    },
  ];

  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜神不偏待人的六層交叉對稱結構拓撲（羅 2:6–11）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Chiastic Structure (A-B-C-C&apos;-B&apos;-A&apos;)
        </span>
      </div>

      <div className="space-y-2.5">
        {rows.map((row) => (
          <div
            key={row.tag}
            className={`${row.indent} ${row.boxClass} rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-start gap-2.5`}
          >
            <span className={`${row.tagClass} shrink-0 self-start px-2.5 py-1 rounded-lg font-mono text-xs font-bold`}>
              {row.tag}
            </span>
            <div className="min-w-0 flex-1 space-y-1">
              <p className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 leading-snug">
                {row.title}
              </p>
              <p className={`text-xs font-serif italic font-semibold break-words ${row.greekClass}`}>
                {row.greek}
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {row.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">結構幾何核心：</span>
          <span>2:9–10 報應名詞前置＋兩次「先是猶太人，後是希利尼人」</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          外圍框架：按行為報應（2:6）⇔ 神不偏待人（2:11）
        </div>
      </div>
    </figure>
  );
}

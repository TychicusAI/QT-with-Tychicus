"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function ImpartialityChiasmChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜神不偏待人的六層交叉對稱結構拓撲（羅 2:6–11）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Chiastic Structure (A-B-C-C&apos;-B&apos;-A&apos;)
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-1">
        <div className="min-w-[720px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940 480"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto", aspectRatio: "940 / 480" }}
            role="img"
            aria-label="羅馬書 2:6-11 六層交叉對稱結構圖"
          >
            <style>{`
              .ch-box { rx: 12px; ry: 12px; stroke-width: 1.5; }
              .lvl-a { fill: #f8fafc; stroke: #64748b; stroke-width: 2; }
              .lvl-b { fill: #f5f3ff; stroke: #a78bfa; }
              .lvl-c { fill: #fff1f2; stroke: #fda4af; }
              .lvl-pivot { stroke-width: 2.5; }

              .txt-t { font-family: system-ui, -apple-system, sans-serif; font-size: 13px; font-weight: 700; fill: #0f172a; }
              .txt-g { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 11.5px; font-weight: 600; fill: #6d28d9; }
              .txt-gw { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 11.5px; font-weight: 600; fill: #be123c; }
              .txt-sub { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: #475569; }
              .tag-a { fill: #e2e8f0; rx: 8px; }
              .tag-b { fill: #ede9fe; rx: 8px; }
              .tag-c { fill: #ffe4e6; rx: 8px; }
              .tag-txt { font-family: ui-monospace, monospace; font-size: 11px; font-weight: 700; fill: #1e293b; }

              :root.dark .lvl-a, .dark .lvl-a { fill: #1e293b; stroke: #94a3b8; }
              :root.dark .lvl-b, .dark .lvl-b { fill: #2e1065; stroke: #8b5cf6; }
              :root.dark .lvl-c, .dark .lvl-c { fill: #4c0519; stroke: #f43f5e; }
              :root.dark .txt-t, .dark .txt-t { fill: #f8fafc; }
              :root.dark .txt-g, .dark .txt-g { fill: #c084fc; }
              :root.dark .txt-gw, .dark .txt-gw { fill: #fb7185; }
              :root.dark .txt-sub, .dark .txt-sub { fill: #cbd5e1; }
              :root.dark .tag-a, .dark .tag-a { fill: #334155; }
              :root.dark .tag-b, .dark .tag-b { fill: #4c1d95; }
              :root.dark .tag-c, .dark .tag-c { fill: #881337; }
              :root.dark .tag-txt, .dark .tag-txt { fill: #f8fafc; }
            `}</style>

            {/* Connecting symmetry brackets on left */}
            <path d="M 28 45 L 12 45 L 12 435 L 28 435" stroke="#64748b" strokeWidth="2" fill="none" />
            <path d="M 78 120 L 55 120 L 55 360 L 78 360" stroke="#8b5cf6" strokeWidth="2" fill="none" />
            <path d="M 128 195 L 105 195 L 105 280 L 128 280" stroke="#f43f5e" strokeWidth="2" fill="none" />

            {/* Row 1: A (2:6) - Width 860 */}
            <g transform="translate(30, 15)">
              <rect width="880" height="62" className="ch-box lvl-a" />
              <rect x="14" y="16" width="52" height="28" className="tag-a" />
              <text x="40" y="34" textAnchor="middle" className="tag-txt">A (2:6)</text>
              <text x="80" y="29" className="txt-t">【審判準則】祂必照各人的行為報應各人</text>
              <text x="355" y="29" className="txt-g">hos apodōsei hekastō kata ta erga autou</text>
              <text x="80" y="49" className="txt-sub">引用詩篇 62:12 與箴言 24:12，奠定末日公義審判之普世標準</text>
            </g>

            {/* Row 2: B (2:7) - Indented, Width 830 */}
            <g transform="translate(80, 90)">
              <rect width="830" height="62" className="ch-box lvl-b" />
              <rect x="14" y="16" width="52" height="28" className="tag-b" />
              <text x="40" y="34" textAnchor="middle" className="tag-txt">B (2:7)</text>
              <text x="80" y="29" className="txt-t">【正面：品格 ➔ 獎賞】凡恆心行善、尋求榮耀尊貴不能朽壞的 ➔ 永生</text>
              <text x="530" y="29" className="txt-g">doxan kai timēn kai aphtharsian ... zōēn aiōnion</text>
              <text x="80" y="49" className="txt-sub">語序：先列行為態度（恆心行善），句尾揭曉報應結果（永生）</text>
            </g>

            {/* Row 3: C (2:8) - Indented, Width 780 */}
            <g transform="translate(130, 165)">
              <rect width="780" height="62" className="ch-box lvl-c" />
              <rect x="14" y="16" width="52" height="28" className="tag-c" />
              <text x="40" y="34" textAnchor="middle" className="tag-txt">C (2:8)</text>
              <text x="80" y="29" className="txt-t">【負面：品格 ➔ 刑罰】惟有出於自私野心、不順從真理反順從不義的 ➔ 忿怒與暴怒</text>
              <text x="605" y="29" className="txt-gw">ex eritheias ... orgē kai thymos</text>
              <text x="80" y="49" className="txt-sub">語序：先列悖逆品格，句尾砸落雙重震怒名詞</text>
            </g>

            {/* Row 4: C' (2:9) - Pivot Center 1, Width 780 (>= 550px) */}
            <g transform="translate(130, 245)">
              <rect width="780" height="68" className="ch-box lvl-c lvl-pivot" />
              <rect x="14" y="19" width="58" height="28" className="tag-c" />
              <text x="43" y="37" textAnchor="middle" className="tag-txt">C&apos; (2:9)</text>
              <text x="84" y="29" className="txt-t">★【樞紐 I：刑罰前置＋族裔打破】患難與困苦！臨到一切作惡之人的靈魂——先是猶太人，後是希利尼人</text>
              <text x="84" y="51" className="txt-gw">thlipsis kai stenochōria ... Ioudaiō te prōton kai Hellēni</text>
              <text x="465" y="51" className="txt-sub">（詞序反轉：報應強勢前置；特權越大，審判問責越先！）</text>
            </g>

            {/* Row 5: B' (2:10) - Pivot Center 2, Width 830 */}
            <g transform="translate(80, 328)">
              <rect width="830" height="68" className="ch-box lvl-b lvl-pivot" />
              <rect x="14" y="19" width="62" height="28" className="tag-b" />
              <text x="45" y="37" textAnchor="middle" className="tag-txt">B&apos; (2:10)</text>
              <text x="88" y="29" className="txt-t">★【樞紐 II：獎賞前置＋族裔打破】但榮耀、尊貴與平安！歸給一切行善的人——先是猶太人，後是希利尼人</text>
              <text x="88" y="51" className="txt-g">doxa de kai timē kai eirēnē ... Ioudaiō te prōton kai Hellēni</text>
              <text x="485" y="51" className="txt-sub">（以盟約「平安 eirēnē」對應 B 段之「不能朽壞與永生」）</text>
            </g>

            {/* Row 6: A' (2:11) - Width 880 */}
            <g transform="translate(30, 410)">
              <rect width="880" height="58" className="ch-box lvl-a" />
              <rect x="14" y="15" width="62" height="28" className="tag-a" />
              <text x="45" y="33" textAnchor="middle" className="tag-txt">A&apos; (2:11)</text>
              <text x="88" y="27" className="txt-t">【神本根基】因為在神面前，並沒有偏待人的事</text>
              <text x="405" y="27" className="txt-g">ou gar estin prosōpolēmpsia para tō theō</text>
              <text x="88" y="46" className="txt-sub">濃縮申命記 10:17 與歷代志下 19:7：至高法官絕不「看人的臉面／族裔招牌」</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
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

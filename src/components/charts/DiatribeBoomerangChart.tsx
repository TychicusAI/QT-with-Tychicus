"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function DiatribeBoomerangChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜假想辯論的人稱突襲與迴力鏢定罪機制（羅 2:1–3）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Diatribe &amp; Deictic Shift
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-1">
        <div className="min-w-[720px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940 430"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto", aspectRatio: "940 / 430" }}
            role="img"
            aria-label="假想辯論的人稱突襲與迴力鏢定罪機制圖"
          >
            <defs>
              <marker id="arrow-purp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
              <marker id="arrow-rose" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#e11d48" />
              </marker>
            </defs>

            <style>{`
              .node-card { rx: 16px; ry: 16px; stroke-width: 1.5; }
              .box-neutral { fill: #f8fafc; stroke: #cbd5e1; }
              .box-trap { fill: #f5f3ff; stroke: #a78bfa; stroke-width: 2; }
              .box-verdict { fill: #fff1f2; stroke: #fda4af; stroke-width: 2; }
              .box-truth { fill: #faf5ff; stroke: #c084fc; stroke-width: 2; }

              .txt-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: #0f172a; }
              .txt-greek { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-greek-warn { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #be123c; }
              .txt-body { font-family: system-ui, -apple-system, sans-serif; font-size: 11.5px; fill: #334155; }
              .badge-purp { fill: #ede9fe; stroke: #c4b5fd; rx: 10px; }
              .badge-rose { fill: #ffe4e6; stroke: #fecdd3; rx: 10px; }
              .badge-txt-p { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #6d28d9; }
              .badge-txt-r { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #be123c; }

              :root.dark .box-neutral, .dark .box-neutral { fill: #1e293b; stroke: #475569; }
              :root.dark .box-trap, .dark .box-trap { fill: #2e1065; stroke: #8b5cf6; }
              :root.dark .box-verdict, .dark .box-verdict { fill: #4c0519; stroke: #f43f5e; }
              :root.dark .box-truth, .dark .box-truth { fill: #3b0764; stroke: #a855f7; }
              :root.dark .txt-title, .dark .txt-title { fill: #f8fafc; }
              :root.dark .txt-greek, .dark .txt-greek { fill: #c084fc; }
              :root.dark .txt-greek-warn, .dark .txt-greek-warn { fill: #fb7185; }
              :root.dark .txt-body, .dark .txt-body { fill: #cbd5e1; }
              :root.dark .badge-purp, .dark .badge-purp { fill: #3b0764; stroke: #7c3aed; }
              :root.dark .badge-rose, .dark .badge-rose { fill: #4c0519; stroke: #e11d48; }
              :root.dark .badge-txt-p, .dark .badge-txt-p { fill: #d8b4fe; }
              :root.dark .badge-txt-r, .dark .badge-txt-r { fill: #fecdd3; }
            `}</style>

            {/* Top Row: Step 1 -> Step 2 -> Step 3 */}
            <path d="M 285 110 L 335 110" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arrow-purp)" />
            <path d="M 615 110 L 665 110" stroke="#e11d48" strokeWidth="2.5" fill="none" markerEnd="url(#arrow-rose)" />

            {/* Boomerang Return Arc from Box 2 to Box 3 and down to Bottom Hinge */}
            <path d="M 795 190 L 795 255" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="5,4" fill="none" markerEnd="url(#arrow-rose)" />
            <path d="M 475 190 L 475 255" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4,4" fill="none" markerEnd="url(#arrow-purp)" />

            {/* Node 1: 1:18-32 Third Person Plural */}
            <g transform="translate(20, 30)">
              <rect width="265" height="160" className="node-card box-neutral" />
              <rect x="14" y="14" width="110" height="20" className="badge-purp" />
              <text x="69" y="28" textAnchor="middle" className="badge-txt-p">第三人稱複數・他們</text>
              <text x="16" y="56" className="txt-title">外邦罪惡清單與無可推諉</text>
              <text x="16" y="76" className="txt-greek">autous anapologētous (1:20)</text>
              <text x="16" y="98" className="txt-body">・1:18–32 控訴壓抑真理與拜偶像</text>
              <text x="16" y="118" className="txt-body">・1:32 明知神判定行這事的人當死</text>
              <text x="16" y="138" className="txt-body">・旁觀者在看台上點頭定「他們」死罪</text>
            </g>

            {/* Node 2: 2:1a Apostrophe & Diatribe Shift */}
            <g transform="translate(340, 30)">
              <rect width="275" height="160" className="node-card box-trap" />
              <rect x="14" y="14" width="115" height="20" className="badge-purp" />
              <text x="71" y="28" textAnchor="middle" className="badge-txt-p">第二人稱單數・突襲</text>
              <text x="16" y="56" className="txt-title">拿單式轉身：你這論斷人的！</text>
              <text x="16" y="76" className="txt-greek">Dio anapologētos ei, ō anthrōpe</text>
              <text x="16" y="98" className="txt-body">・推論詞 Dio 鉤連 1:20 無可推諉</text>
              <text x="16" y="118" className="txt-body">・頓呼法 (Apostrophe) 揪住假想對話者</text>
              <text x="16" y="138" className="txt-body">・能精準論斷他人，證明深知神標準</text>
            </g>

            {/* Node 3: 2:1b-c Boomerang Self-Condemnation */}
            <g transform="translate(670, 30)">
              <rect width="250" height="160" className="node-card box-verdict" />
              <rect x="14" y="14" width="110" height="20" className="badge-rose" />
              <text x="69" y="28" textAnchor="middle" className="badge-txt-r">迴力鏢定罪效應</text>
              <text x="16" y="56" className="txt-title">論斷他人 ＝ 定自己的罪</text>
              <text x="16" y="76" className="txt-greek-warn">krineis ... seauton katakrineis</text>
              <text x="16" y="98" className="txt-body">・受詞前置：定「你自己」的罪</text>
              <text x="16" y="118" className="txt-body">・升級強化：從論斷 (krinō) 到定罪</text>
              <text x="16" y="138" className="txt-body">・因為你正持續行「同樣的事」(ta auta)</text>
            </g>

            {/* Bottom Wide Hinge Box (>= 550px width): 2:2-3 Truth Judgment vs Vain Calculation */}
            <g transform="translate(150, 260)">
              <rect width="680" height="140" className="node-card box-truth" />
              <rect x="18" y="14" width="160" height="22" className="badge-purp" />
              <text x="98" y="29" textAnchor="middle" className="badge-txt-p">終極法庭公理（2:2–3）</text>

              <text x="20" y="58" className="txt-title">神按真理審判 vs. 自義者「唯獨我能逃脫」的妄想算計</text>
              <text x="20" y="78" className="txt-greek">to krima tou theou estin kata alētheian ... logizē hoti sy ekpheuxē;</text>
              <text x="20" y="100" className="txt-body">・包含式複數「我們知道」(Oidamen de)：援引猶太與基督徒共認公理——神的審判完全按真實實況 (kata alētheian)</text>
              <text x="20" y="120" className="txt-body">・修辭詰問與強調主格代名詞「唯獨你」(sy)：粉碎依靠族裔身分或道德口號即可豁免審判的雙重標準</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">關鍵修辭機制：</span>
          <span>第三人稱「他們」（1:18–32）➔ 第二人稱「你這人哪」（2:1–3）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          無可推諉（<em>anapologētos</em>）的首尾雙重鎖定
        </div>
      </div>
    </figure>
  );
}

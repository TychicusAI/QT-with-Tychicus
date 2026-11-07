"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function ChristologicalExchangePivotChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜基督「富足成貧窮」的救贖大交換與交叉結構核心（林後 8:6–9）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Christological Chiasm Pivot
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-1">
        <div className="min-w-[720px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940 460"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto", aspectRatio: "940 / 460" }}
            role="img"
            aria-label="基督富足成貧窮的救贖大交換結構圖"
          >
            <defs>
              <marker id="arr-chr-p" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
              <marker id="arr-chr-e" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
              </marker>
            </defs>

            <style>{`
              .node-card { rx: 16px; ry: 16px; stroke-width: 1.5; }
              .cor-card { fill: #fafaf9; stroke: #cbd5e1; }
              .pivot-card { fill: #fdf4ff; stroke: #9333ea; stroke-width: 2.2; }
              .rich-card { fill: #f5f3ff; stroke: #a855f7; }
              .poor-card { fill: #ecfdf5; stroke: #10b981; stroke-width: 2; }

              .txt-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: #0f172a; }
              .txt-greek { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-greek-e { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #047857; }
              .txt-body { font-family: system-ui, -apple-system, sans-serif; font-size: 11.5px; fill: #334155; }
              .badge-p { fill: #ede9fe; stroke: #c4b5fd; rx: 10px; }
              .badge-e { fill: #d1fae5; stroke: #6ee7b7; rx: 10px; }
              .btxt-p { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #6d28d9; }
              .btxt-e { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #047857; }

              :root.dark .cor-card, .dark .cor-card { fill: #1e293b; stroke: #475569; }
              :root.dark .pivot-card, .dark .pivot-card { fill: #3b0764; stroke: #c084fc; }
              :root.dark .rich-card, .dark .rich-card { fill: #2e1065; stroke: #7c3aed; }
              :root.dark .poor-card, .dark .poor-card { fill: #064e3b; stroke: #10b981; }
              :root.dark .txt-title, .dark .txt-title { fill: #f8fafc; }
              :root.dark .txt-greek, .dark .txt-greek { fill: #c084fc; }
              :root.dark .txt-greek-e, .dark .txt-greek-e { fill: #34d399; }
              :root.dark .txt-body, .dark .txt-body { fill: #cbd5e1; }
              :root.dark .badge-p, .dark .badge-p { fill: #3b0764; stroke: #7c3aed; }
              :root.dark .badge-e, .dark .badge-e { fill: #065f46; stroke: #10b981; }
              :root.dark .btxt-p, .dark .btxt-p { fill: #d8b4fe; }
              :root.dark .btxt-e, .dark .btxt-e { fill: #a7f3d0; }
            `}</style>

            {/* Top Box: Exhortation & Testing Genuine Love (8:6–8) */}
            <g transform="translate(150, 20)">
              <rect width="640" height="90" className="node-card cor-card" />
              <rect x="18" y="12" width="175" height="20" className="badge-p" />
              <text x="105" y="26" textAnchor="middle" className="btxt-p">勸勉與試驗真愛（8:6–8）</text>
              <text x="205" y="27" className="txt-title">在信心、口才、知識上富足 ➔ 更當在這施予的恩典上富足</text>
              <text x="18" y="52" className="txt-greek">ou kat&apos; epitagēn legō, alla ... to tēs hymeteras agapēs gnēsion dokimazōn</text>
              <text x="18" y="74" className="txt-body">・非律法命令 (epitagē)，乃藉馬其頓人的熱心檢驗哥林多人愛心的純正血統 (to gnēsion)</text>
            </g>

            {/* Arrow Down to Christological Pivot */}
            <path d="M 470 110 L 470 145" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arr-chr-p)" />

            {/* Center Pivot Header Box (8:9a) */}
            <g transform="translate(170, 150)">
              <rect width="600" height="72" className="node-card pivot-card" />
              <rect x="18" y="12" width="165" height="20" className="badge-p" />
              <text x="100" y="26" textAnchor="middle" className="btxt-p">全章結構樞紐（8:9a γάρ）</text>
              <text x="195" y="27" className="txt-title">因為你們知道我們主耶穌基督的恩典</text>
              <text x="18" y="53" className="txt-greek">ginōskete gar tēn charin tou kyriou hēmōn Iēsou Christou</text>
            </g>

            {/* Diagonal Crossover Arrows for Wonderful Exchange */}
            <path d="M 320 222 L 235 268" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arr-chr-p)" />
            <path d="M 620 222 L 705 268" stroke="#059669" strokeWidth="2.5" fill="none" markerEnd="url(#arr-chr-e)" />
            <path d="M 445 350 L 495 350" stroke="#059669" strokeWidth="2.8" fill="none" markerEnd="url(#arr-chr-e)" />

            {/* Bottom Left: Christ's Self-Impoverishment (8:9b) */}
            <g transform="translate(25, 275)">
              <rect width="420" height="155" className="node-card rich-card" />
              <rect x="16" y="14" width="165" height="20" className="badge-p" />
              <text x="98" y="28" textAnchor="middle" className="btxt-p">基督的降卑致貧（8:9b）</text>
              <text x="16" y="55" className="txt-title">祂本來富足，卻「為了你們」成了貧窮</text>
              <text x="16" y="75" className="txt-greek">hoti di&apos; hymas eptōcheusen plousios ōn</text>
              <text x="16" y="98" className="txt-body">・現在分詞 (plousios ōn)：永恆先存的神性榮耀與天上豐富</text>
              <text x="16" y="118" className="txt-body">・新約孤立詞 (eptōcheusen)：起始性不定過去式，道成肉身至十架死地</text>
              <text x="16" y="138" className="txt-body">・前置聚光燈 (di&apos; hymas)：「正是為了你們！」甘願傾倒一切</text>
            </g>

            {/* Bottom Right: Believers' Eschatological Enrichment (8:9c) */}
            <g transform="translate(500, 275)">
              <rect width="415" height="155" className="node-card poor-card" />
              <rect x="16" y="14" width="165" height="20" className="badge-e" />
              <text x="98" y="28" textAnchor="middle" className="btxt-e">信徒的救贖富足（8:9c）</text>
              <text x="16" y="55" className="txt-title">好叫「你們」因祂的貧窮，可以成為富足</text>
              <text x="16" y="75" className="txt-greek-e">hina hymeis tē ekeinou ptōcheia ploutēsēte</text>
              <text x="16" y="98" className="txt-body">・強調主詞 (hymeis) 與遠指代名詞 (ekeinou) 的正面交鋒</text>
              <text x="16" y="118" className="txt-body">・起始性不定過去式 (ploutēsēte)：進入罪得赦免與神兒女的永恆富足</text>
              <text x="16" y="138" className="txt-body">・呼應 5:21「無罪替我們成為罪，使我們成為神的義」之奇妙交換</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">雙重代名詞前置：</span>
          <span>為了你們（<em>di&apos; hymas</em>）➔ 好叫你們（<em>hina hymeis</em>）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          駁斥成功神學：基督的貧窮換取的是救恩與慷慨生命，而非物質暴富
        </div>
      </div>
    </figure>
  );
}

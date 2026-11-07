"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function MacedonianGraceParadoxChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜馬其頓恩典算術悖論與「先獻己身」神學次序（林後 8:1–5）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Paradoxical Grace Equation
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
            aria-label="馬其頓恩典算術悖論與先獻己身結構圖"
          >
            <defs>
              <marker id="arr-mac-p" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
              <marker id="arr-mac-a" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706" />
              </marker>
            </defs>

            <style>{`
              .node-card { rx: 16px; ry: 16px; stroke-width: 1.5; }
              .source-card { fill: #f5f3ff; stroke: #a855f7; stroke-width: 2; }
              .input-card { fill: #fafaf9; stroke: #cbd5e1; }
              .output-card { fill: #fffbeb; stroke: #f59e0b; stroke-width: 2; }
              .root-card { fill: #fdf4ff; stroke: #9333ea; stroke-width: 2; }

              .txt-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: #0f172a; }
              .txt-greek { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-greek-a { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #b45309; }
              .txt-body { font-family: system-ui, -apple-system, sans-serif; font-size: 11.5px; fill: #334155; }
              .badge-p { fill: #ede9fe; stroke: #c4b5fd; rx: 10px; }
              .badge-a { fill: #fef3c7; stroke: #fde68a; rx: 10px; }
              .btxt-p { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #6d28d9; }
              .btxt-a { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #b45309; }

              :root.dark .source-card, .dark .source-card { fill: #2e1065; stroke: #a855f7; }
              :root.dark .input-card, .dark .input-card { fill: #1e293b; stroke: #475569; }
              :root.dark .output-card, .dark .output-card { fill: #451a03; stroke: #f59e0b; }
              :root.dark .root-card, .dark .root-card { fill: #3b0764; stroke: #c084fc; }
              :root.dark .txt-title, .dark .txt-title { fill: #f8fafc; }
              :root.dark .txt-greek, .dark .txt-greek { fill: #c084fc; }
              :root.dark .txt-greek-a, .dark .txt-greek-a { fill: #fbbf24; }
              :root.dark .txt-body, .dark .txt-body { fill: #cbd5e1; }
              :root.dark .badge-p, .dark .badge-p { fill: #3b0764; stroke: #7c3aed; }
              :root.dark .badge-a, .dark .badge-a { fill: #78350f; stroke: #d97706; }
              :root.dark .btxt-p, .dark .btxt-p { fill: #d8b4fe; }
              :root.dark .btxt-a, .dark .btxt-a { fill: #fde68a; }
            `}</style>

            {/* Top Source Box (8:1) */}
            <g transform="translate(170, 20)">
              <rect width="600" height="82" className="node-card source-card" />
              <rect x="18" y="12" width="160" height="20" className="badge-p" />
              <text x="98" y="26" textAnchor="middle" className="btxt-p">主權源頭（8:1 完成分詞）</text>
              <text x="192" y="27" className="txt-title">神賜給馬其頓眾教會的恩典</text>
              <text x="415" y="27" className="txt-greek">(tēn charin tou theou tēn dedomenēn)</text>
              <text x="18" y="54" className="txt-body">・狀態結果體貌 (dedomenēn)：恩典由神主動賜下並持續常駐，非人本動員所能製造</text>
              <text x="18" y="72" className="txt-body">・在極多患難的試煉中 (en pollē dokimē thlipseōs，8:2a) 點燃超自然的屬靈反應</text>
            </g>

            {/* Arrows from Source to Paradoxical Equation */}
            <path d="M 320 102 L 245 140" stroke="#7c3aed" strokeWidth="2.2" fill="none" markerEnd="url(#arr-mac-p)" />
            <path d="M 620 102 L 695 140" stroke="#d97706" strokeWidth="2.2" fill="none" markerEnd="url(#arr-mac-a)" />

            {/* Middle Left: Paradoxical Inputs (8:2b) */}
            <g transform="translate(25, 145)">
              <rect width="420" height="145" className="node-card input-card" />
              <rect x="16" y="14" width="150" height="20" className="badge-p" />
              <text x="91" y="28" textAnchor="middle" className="btxt-p">天國矛盾算術左端（8:2a–b）</text>
              <text x="16" y="55" className="txt-title">滿溢的喜樂 ＋ 深淵般的見底赤貧</text>
              <text x="16" y="75" className="txt-greek">hē perisseia tēs charas + hē kata bathous ptōcheia</text>
              <text x="16" y="98" className="txt-body">・赤貧 (ptōcheia)：非一般清寒 (penia)，乃一無所有之乞丐絕境</text>
              <text x="16" y="117" className="txt-body">・深淵修飾語 (kata bathous)：往下直到深淵底部之極度匱乏</text>
              <text x="16" y="135" className="txt-body">・喜樂充盈 (perisseia)：患難非但未撲滅喜樂，反而使其滿溢</text>
            </g>

            {/* Arrow from Left to Right */}
            <path d="M 445 218 L 490 218" stroke="#d97706" strokeWidth="2.8" fill="none" markerEnd="url(#arr-mac-a)" />

            {/* Middle Right: Overflowing Generosity & Pleading (8:2c–4) */}
            <g transform="translate(495, 145)">
              <rect width="420" height="145" className="node-card output-card" />
              <rect x="16" y="14" width="155" height="20" className="badge-a" />
              <text x="93" y="28" textAnchor="middle" className="btxt-a">天國算術右端（8:2c–4）</text>
              <text x="16" y="55" className="txt-title">湧流出慷慨的富足與苦苦哀求有份</text>
              <text x="16" y="75" className="txt-greek-a">eperisseusen eis to ploutos tēs haplotētos autōn</text>
              <text x="16" y="98" className="txt-body">・屬性屬格 (tēs haplotētos)：心無二用之單純真誠化為奢華慷慨</text>
              <text x="16" y="117" className="txt-body">・按力量更超過力量 (para dynamin)，完全自發主動 (authairetoi)</text>
              <text x="16" y="135" className="txt-body">・再三懇求 (deomenoi) 准許參與服事聖徒的恩典 (charis) 與團契 (koinōnia)</text>
            </g>

            {/* Arrows Down to Theological Root (8:5) */}
            <path d="M 470 290 L 470 330" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arr-mac-p)" />

            {/* Bottom Root Box (8:5) */}
            <g transform="translate(150, 335)">
              <rect width="640" height="105" className="node-card root-card" />
              <rect x="18" y="14" width="185" height="20" className="badge-p" />
              <text x="110" y="28" textAnchor="middle" className="btxt-p">標記性受詞前置核心（8:5）</text>
              <text x="215" y="29" className="txt-title">「他們自己！」先獻給了主，又照神旨意獻給我們</text>
              <text x="18" y="53" className="txt-greek">all&apos; heautous edōkan prōton tō kyriō kai hēmin dia thelēmatos theou</text>
              <text x="18" y="75" className="txt-body">・受詞前置 (heautous) + 延遲主句動詞 (edōkan)：獻上的首要祭物不是金錢，而是全人主權</text>
              <text x="18" y="93" className="txt-body">・優先次序副詞 (prōton)：垂直向主委身是一切水平聖徒相通與順服使徒職事的根本源頭</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">貧富反轉伏筆：</span>
          <span>深淵赤貧（<em>ptōcheia</em>）➔ 慷慨富足（<em>ploutos</em>），預備 8:9 基督致貧之巔峰</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          三位一體捐款詞彙：恩典（<em>charis</em>）・團契（<em>koinōnia</em>）・服事（<em>diakonia</em>）
        </div>
      </div>
    </figure>
  );
}

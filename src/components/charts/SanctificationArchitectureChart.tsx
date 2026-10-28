"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function SanctificationArchitectureChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜聖約應許根基與全人除污成聖進程（林後 7:1）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Syntax & Sanctification
        </span>
      </div>

      {/* Canvas */}
      <div className="w-full overflow-x-auto pb-1">
        <div className="min-w-[720px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940 450"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto", aspectRatio: "940 / 450" }}
            role="img"
            aria-label="聖約應許根基與全人成聖架構圖"
          >
            <defs>
              <marker
                id="arrow-purple"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>

              <linearGradient id="grad-indicative" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6d28d9" />
              </linearGradient>
            </defs>

            <style>{`
              .node-card { rx: 16px; ry: 16px; stroke-width: 1.5; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.03)); }
              .base-box { fill: #f3e8ff; stroke: #c084fc; stroke-width: 2; }
              .hinge-box { fill: #f8fafc; stroke: #94a3b8; }
              .action-a-box { fill: #eff6ff; stroke: #93c5fd; }
              .action-b-box { fill: #f0fdf4; stroke: #86efac; }
              .summit-box { fill: #faf5ff; stroke: #a855f7; stroke-width: 2; }

              .txt-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: #0f172a; }
              .txt-greek { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-body { font-family: system-ui, -apple-system, sans-serif; font-size: 11.5px; fill: #334155; }
              .txt-pill { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; }

              :root.dark .base-box, .dark .base-box { fill: #3b0764; stroke: #9333ea; }
              :root.dark .hinge-box, .dark .hinge-box { fill: #1e293b; stroke: #475569; }
              :root.dark .action-a-box, .dark .action-a-box { fill: #172554; stroke: #3b82f6; }
              :root.dark .action-b-box, .dark .action-b-box { fill: #052e16; stroke: #22c55e; }
              :root.dark .summit-box, .dark .summit-box { fill: #2e1065; stroke: #a855f7; }

              :root.dark .txt-title, .dark .txt-title { fill: #f8fafc; }
              :root.dark .txt-greek, .dark .txt-greek { fill: #c084fc; }
              :root.dark .txt-body, .dark .txt-body { fill: #cbd5e1; }
            `}</style>

            {/* Level 1: Covenant Indicative Foundation (Bottom) */}
            <g transform="translate(40, 310)">
              <rect width="860" height="110" className="node-card base-box" />
              <rect x="20" y="14" width="130" height="22" rx="11" fill="#7c3aed" />
              <text x="85" y="29" textAnchor="middle" fill="#ffffff" className="txt-pill">指示語氣・聖約基石</text>

              <text x="20" y="60" className="txt-title">「這等應許」前置超越修辭 (Tautas ... tas epangelias)</text>
              <text x="20" y="80" className="txt-greek">林後 6:16–18 七重聖約珠串（利 26:12；結 37:27；賽 52:11；撒下 7:14）</text>
              <text x="20" y="100" className="txt-body">「我要在他們中間居住來往；我要作他們的神，他們要作我的子民……我要作你們的父，你們要作我的兒女。」</text>
            </g>

            {/* Vertical Arrow from Base to Center */}
            <path d="M 470 310 L 470 260" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arrow-purple)" />

            {/* Level 2: The Inferential Hinge */}
            <g transform="translate(320, 205)">
              <rect width="300" height="46" className="node-card hinge-box" />
              <text x="150" y="28" textAnchor="middle" className="txt-title">
                推論樞紐：既然持續擁有 (echontes) ➔ 所以 (oun)！
              </text>
            </g>

            {/* Branching Arrows from Hinge to Dual Sanctification Tracks */}
            <path d="M 410 205 C 380 180, 280 180, 240 165" stroke="#3b82f6" strokeWidth="2" fill="none" markerEnd="url(#arrow-purple)" />
            <path d="M 530 205 C 560 180, 660 180, 700 165" stroke="#22c55e" strokeWidth="2" fill="none" markerEnd="url(#arrow-purple)" />

            {/* Level 3: Dual Aspects of Sanctification */}
            {/* 3A: Decisive Cleansing (Negative / Crisis) */}
            <g transform="translate(40, 30)">
              <rect width="400" height="135" className="node-card action-a-box" />
              <rect x="16" y="14" width="115" height="20" rx="10" fill="#3b82f6" />
              <text x="73" y="28" textAnchor="middle" fill="#ffffff" className="txt-pill">果斷決裂・消極除污</text>

              <text x="16" y="58" className="txt-title">就當潔淨自己 (katharisōmen heautous)</text>
              <text x="16" y="76" className="txt-greek">不定過去主動假設語氣（外在整體體貌 Perfective）</text>
              <text x="16" y="96" className="txt-body">・新約孤立詞「污穢」(*molysmos*)：偶像罪污深層染色</text>
              <text x="16" y="114" className="txt-body">・人類學總括對偶法 (*merism*)：「肉體與心靈一切污穢」</text>
            </g>

            {/* 3B: Continuous Maturation (Positive / Process) */}
            <g transform="translate(500, 30)">
              <rect width="400" height="135" className="node-card action-b-box" />
              <rect x="16" y="14" width="115" height="20" rx="10" fill="#22c55e" />
              <text x="73" y="28" textAnchor="middle" fill="#ffffff" className="txt-pill">持續進程・積極成聖</text>

              <text x="16" y="58" className="txt-title">持續使聖潔完全 (epitelountes hagiosynēn)</text>
              <text x="16" y="76" className="txt-greek">現在主動分詞（內在持續體貌 Imperfective）</text>
              <text x="16" y="96" className="txt-body">・專有名詞 *hagiosynē*：一生之久培育完全聖潔生命品質</text>
              <text x="16" y="114" className="txt-body">・正典呼應結 36:25–27：神灑清水與賜新靈之聖約實踐</text>
            </g>

            {/* Central Atmosphere Badge */}
            <g transform="translate(370, 95)">
              <rect width="200" height="30" rx="15" fill="#7c3aed" />
              <text x="100" y="20" textAnchor="middle" fill="#ffffff" className="txt-pill">
                氛圍：在敬畏神之中 (en phobō theou)
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">神學鐵律：</span>
          <span>指示語氣恩典（Indicative）先於並驅動命令語氣成聖（Imperative）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          果斷斬斷罪污（不定過去式）＋ 持續臻至完全（現在分詞）
        </div>
      </div>
    </figure>
  );
}

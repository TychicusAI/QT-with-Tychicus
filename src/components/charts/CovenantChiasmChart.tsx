"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function CovenantChiasmChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜使徒敞開的心與同心圓交叉包夾結構（林後 6:11–7:4）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Chiastic Inclusio
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
            aria-label="林後 6:11–7:4 同心圓交叉包夾結構圖"
          >
            <style>{`
              .layer-ring { rx: 14px; ry: 14px; fill-opacity: 0.15; stroke-width: 1.5; }
              .ring-a { fill: #8b5cf6; stroke: #7c3aed; }
              .ring-b { fill: #3b82f6; stroke: #2563eb; }
              .ring-c { fill: #0d9488; stroke: #0f766e; }
              .pivot-box { fill: #fdf4ff; stroke: #9333ea; stroke-width: 2.5; rx: 16px; ry: 16px; }

              .txt-label { font-family: system-ui, -apple-system, sans-serif; font-size: 13px; font-weight: 700; fill: #0f172a; }
              .txt-sub { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; }
              .txt-desc { font-family: system-ui, -apple-system, sans-serif; font-size: 11.5px; fill: #334155; }
              .badge-text { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #ffffff; }

              :root.dark .ring-a, .dark .ring-a { fill: #7c3aed; stroke: #a78bfa; fill-opacity: 0.2; }
              :root.dark .ring-b, .dark .ring-b { fill: #2563eb; stroke: #60a5fa; fill-opacity: 0.2; }
              :root.dark .ring-c, .dark .ring-c { fill: #0f766e; stroke: #2dd4bf; fill-opacity: 0.2; }
              :root.dark .pivot-box, .dark .pivot-box { fill: #3b0764; stroke: #c084fc; }

              :root.dark .txt-label, .dark .txt-label { fill: #f8fafc; }
              :root.dark .txt-desc, .dark .txt-desc { fill: #cbd5e1; }
            `}</style>

            {/* A Layer (Outermost Ring - Oral Expression) */}
            <g transform="translate(30, 20)">
              <rect width="880" height="50" className="layer-ring ring-a" />
              <rect x="12" y="14" width="28" height="22" rx="11" fill="#7c3aed" />
              <text x="26" y="29" textAnchor="middle" className="badge-text">A</text>
              <text x="50" y="32" className="txt-label">6:11a「哥林多人哪，我們向你們，口是張開的」</text>
              <text x="490" y="32" className="txt-desc">使徒毫無保留坦誠直言，向兒女敞開話匣</text>
            </g>

            {/* B Layer (Inner Ring - Heart Capacity) */}
            <g transform="translate(60, 80)">
              <rect width="820" height="50" className="layer-ring ring-b" />
              <rect x="12" y="14" width="28" height="22" rx="11" fill="#2563eb" />
              <text x="26" y="29" textAnchor="middle" className="badge-text">B</text>
              <text x="50" y="32" className="txt-label">6:11b–12「我們的心是寬宏的；你們狹窄，原不在乎我們」</text>
              <text x="510" y="32" className="txt-desc">指出信徒心腸狹窄 (*stenochōreisthe*) 的病根</text>
            </g>

            {/* C Layer (Inner Ring - Heart Appeal) */}
            <g transform="translate(90, 140)">
              <rect width="760" height="50" className="layer-ring ring-c" />
              <rect x="12" y="14" width="28" height="22" rx="11" fill="#0f766e" />
              <text x="26" y="29" textAnchor="middle" className="badge-text">C</text>
              <text x="50" y="32" className="txt-label">6:13「你們也要照樣心腸寬宏，這是我對兒女說的話」</text>
              <text x="510" y="32" className="txt-desc">慈父般的懇請：求你們以愛回報寬大心腸</text>
            </g>

            {/* D Layer: Central Pivot Point (The Prerequisite of Sanctification) */}
            <g transform="translate(130, 200)">
              <rect width="680" height="65" className="pivot-box" />
              <rect x="16" y="12" width="70" height="22" rx="11" fill="#9333ea" />
              <text x="51" y="27" textAnchor="middle" className="badge-text">D 樞紐</text>
              <text x="96" y="28" className="txt-label">6:14–7:1【核心樞紐】：分別為聖與除淨肉體心靈污穢</text>
              <text x="96" y="48" className="txt-desc">
                不可與不信者同負一軛！清空心中偶像污垢，方能騰出心房席位收納神的真使徒（駁斥外來插段假說）
              </text>
            </g>

            {/* C' Layer (Mirroring C - Make Room) */}
            <g transform="translate(90, 275)">
              <rect width="760" height="50" className="layer-ring ring-c" />
              <rect x="12" y="14" width="28" height="22" rx="11" fill="#0f766e" />
              <text x="26" y="29" textAnchor="middle" className="badge-text">C'</text>
              <text x="50" y="32" className="txt-label">7:2a「你們要心地寬大收納我們！」(Chōrēsate hēmas)</text>
              <text x="510" y="32" className="txt-desc">果斷騰出心靈空間 (*chōra*)，回應 6:13 寬宏呼籲</text>
            </g>

            {/* B' Layer (Mirroring B - Dying & Living Together) */}
            <g transform="translate(60, 335)">
              <rect width="820" height="50" className="layer-ring ring-b" />
              <rect x="12" y="14" width="28" height="22" rx="11" fill="#2563eb" />
              <text x="26" y="29" textAnchor="middle" className="badge-text">B'</text>
              <text x="50" y="32" className="txt-label">7:2b–3「未曾虧負誰……不是要定罪，情願同死同活！」</text>
              <text x="510" y="32" className="txt-desc">
                三連無連詞清白抗辯 ➔ 顛倒古典詞序為「先同死後同活」(*synapothanein kai syzēn*)
              </text>
            </g>

            {/* A' Layer (Mirroring A - Boldness & Overflowing Joy) */}
            <g transform="translate(30, 395)">
              <rect width="880" height="50" className="layer-ring ring-a" />
              <rect x="12" y="14" width="28" height="22" rx="11" fill="#7c3aed" />
              <text x="26" y="29" textAnchor="middle" className="badge-text">A'</text>
              <text x="50" y="32" className="txt-label">7:4「我大大的放膽直言，在患難中喜樂格外充盈！」</text>
              <text x="510" y="32" className="txt-desc">
                超凡複合詞 *hyperperisseuomai*：喜樂如大水漫過一切患難堤防，呼應 6:11 張開的口
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">篇章拓撲：</span>
          <span>A-B-C-D-C'-B'-A' 工整鏡像，徹底粉碎近代分割學者將 6:14–7:1 視為插段的假說</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          從法庭自辯反轉為十字架「先同死、後同活」之盟約團契
        </div>
      </div>
    </figure>
  );
}

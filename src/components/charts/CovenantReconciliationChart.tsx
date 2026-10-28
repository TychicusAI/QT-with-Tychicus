"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function CovenantReconciliationChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜提多心靈的完成式暢快與盟約互信高峰（林後 7:13–16）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Covenant Summit
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
            aria-label="林後 7:13–16 提多心靈暢快與盟約復和高峰圖"
          >
            <defs>
              <marker
                id="summit-arrow"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
            </defs>

            <style>{`
              .card-box { rx: 16px; ry: 16px; stroke-width: 1.5; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.03)); }
              .rest-box { fill: #f0fdf4; stroke: #86efac; }
              .heart-box { fill: #eff6ff; stroke: #93c5fd; }
              .fear-box { fill: #fefce8; stroke: #fde047; }
              .climax-box { fill: #faf5ff; stroke: #a855f7; stroke-width: 2.5; }

              .txt-h { font-family: system-ui, -apple-system, sans-serif; font-size: 13.5px; font-weight: 700; fill: #0f172a; }
              .txt-g { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-b { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: #334155; }
              .tag-text { font-family: system-ui, -apple-system, sans-serif; font-size: 10px; font-weight: 700; fill: #ffffff; }

              :root.dark .rest-box, .dark .rest-box { fill: #052e16; stroke: #22c55e; }
              :root.dark .heart-box, .dark .heart-box { fill: #172554; stroke: #3b82f6; }
              :root.dark .fear-box, .dark .fear-box { fill: #422006; stroke: #ca8a04; }
              :root.dark .climax-box, .dark .climax-box { fill: #3b0764; stroke: #c084fc; }

              :root.dark .txt-h, .dark .txt-h { fill: #f8fafc; }
              :root.dark .txt-g, .dark .txt-g { fill: #c084fc; }
              :root.dark .txt-b, .dark .txt-b { fill: #cbd5e1; }
            `}</style>

            {/* Triadic Foundations of Reconciliation */}
            {/* 1. Stative Rest (Left) */}
            <g transform="translate(30, 25)">
              <rect width="275" height="210" className="card-box rest-box" />
              <rect x="12" y="10" width="125" height="20" rx="10" fill="#16a34a" />
              <text x="74" y="24" textAnchor="middle" className="tag-text">狀態完成式・暢快安息</text>

              <text x="14" y="52" className="txt-h">提多的心靈已得安息</text>
              <text x="14" y="72" className="txt-g">anapepautai to pneuma autou</text>
              <text x="14" y="94" className="txt-b">・完成被動直說語氣（狀態結果體貌）</text>
              <text x="14" y="112" className="txt-b">・字根：將沉重行囊徹底卸下放平</text>
              <text x="14" y="130" className="txt-b">・從焦慮特使化為享受持久甜美安息</text>
              <text x="14" y="148" className="txt-b">・因你們眾人而暢快 (apo pantōn hymōn)</text>
              <text x="14" y="166" className="txt-b">・保羅先前的「誇口」全無落空</text>
            </g>

            {/* 2. Splanchna Transformation (Center) */}
            <g transform="translate(330, 25)">
              <rect width="275" height="210" className="card-box heart-box" />
              <rect x="12" y="10" width="125" height="20" rx="10" fill="#2563eb" />
              <text x="74" y="24" textAnchor="middle" className="tag-text">解剖學詞彙・心腸轉化</text>

              <text x="14" y="52" className="txt-h">提多的心腸更加深厚</text>
              <text x="14" y="72" className="txt-g">ta splanchna autou perissoterōs</text>
              <text x="14" y="94" className="txt-b">・解剖學詞彙「內臟／心腸」神學軌跡</text>
              <text x="14" y="112" className="txt-b">・6:12 哥林多人自私狹隘阻塞動脈</text>
              <text x="14" y="130" className="txt-b">・7:15 提多心靈向教會深情傾注</text>
              <text x="14" y="148" className="txt-b">・親眼見證全體會眾真摯順服</text>
              <text x="14" y="166" className="txt-b">・基督身體中牧者與羊群心腸通暢</text>
            </g>

            {/* 3. Covenant Fear & Trembling (Right) */}
            <g transform="translate(630, 25)">
              <rect width="275" height="210" className="card-box fear-box" />
              <rect x="12" y="10" width="125" height="20" rx="10" fill="#ca8a04" />
              <text x="74" y="24" textAnchor="middle" className="tag-text">神聖敬畏・戰兢順服</text>

              <text x="14" y="52" className="txt-h">恐懼戰兢中的接待</text>
              <text x="14" y="72" className="txt-g">meta phobou kai tromou</text>
              <text x="14" y="94" className="txt-b">・保羅獨特成語，源自七十士譯本</text>
              <text x="14" y="112" className="txt-b">・出 15:16 逾越節與賽 19:16 盟約審判</text>
              <text x="14" y="130" className="txt-b">・林前 2:3 保羅在哥林多同樣戰兢</text>
              <text x="14" y="148" className="txt-b">・非奴隸畏縮，乃在神聖臨在前的敬畏</text>
              <text x="14" y="166" className="txt-b">・會眾以對基督的順服接待使徒</text>
            </g>

            {/* Triple Converging Arrows down to Climax */}
            <path d="M 167 235 C 167 270, 380 270, 420 280" stroke="#16a34a" strokeWidth="2" fill="none" markerEnd="url(#summit-arrow)" />
            <path d="M 467 235 L 467 275" stroke="#2563eb" strokeWidth="2" fill="none" markerEnd="url(#summit-arrow)" />
            <path d="M 767 235 C 767 270, 560 270, 520 280" stroke="#ca8a04" strokeWidth="2" fill="none" markerEnd="url(#summit-arrow)" />

            {/* Climax Summit Card (Bottom) */}
            <g transform="translate(30, 290)">
              <rect width="875" height="135" className="card-box climax-box" />
              <rect x="18" y="14" width="170" height="22" rx="11" fill="#9333ea" />
              <text x="103" y="29" textAnchor="middle" className="tag-text">第 1–7 章第一大部終極頂峰</text>

              <text x="20" y="60" className="txt-h">
                7:16「我如今歡喜，能在凡事上為你們放心！」(en panti tharrō en hymin)
              </text>
              <text x="20" y="80" className="txt-g">
                首尾呼應（Inclusio）：7:4「放膽誇口」➔ 7:16「凡事放心」，完成撕裂到復和的壯麗凱歌
              </text>
              <text x="20" y="100" className="txt-b">
                使徒不再被防備為貪婪騙子（7:2），在基督十字架的盟約互信中，為第 8 至 9 章「辦理耶路撒冷貧窮聖徒慈惠捐款」奠定不可動搖的基石！
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">終末凱歌：</span>
          <span>提多暢快安息 ＋ 心腸深情傾注 ＋ 恐懼戰兢順服 ➔ 成就「凡事放心」的盟約互信</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          神學承接：為林後 8–9 章聖徒捐獻奠定成熟教會之神學與情感基石
        </div>
      </div>
    </figure>
  );
}

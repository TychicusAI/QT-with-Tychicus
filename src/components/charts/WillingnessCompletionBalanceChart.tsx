"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function WillingnessCompletionBalanceChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜從「去年願作」到「如今辦成」的體貌天平與蒙悅納法則（林後 8:10–12）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Aspectual Alignment &amp; Proportionality
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-1">
        <div className="min-w-[720px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940 450"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto", aspectRatio: "940 / 450" }}
            role="img"
            aria-label="從去年願作到如今辦成的體貌天平圖"
          >
            <defs>
              <marker id="arr-wil-p" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
            </defs>

            <style>{`
              .node-card { rx: 16px; ry: 16px; stroke-width: 1.5; }
              .left-pan { fill: #f5f3ff; stroke: #c4b5fd; }
              .right-pan { fill: #fdf4ff; stroke: #a855f7; stroke-width: 2; }
              .base-card { fill: #fafaf9; stroke: #94a3b8; stroke-width: 1.8; }

              .txt-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: #0f172a; }
              .txt-greek { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-body { font-family: system-ui, -apple-system, sans-serif; font-size: 11.5px; fill: #334155; }
              .badge-p { fill: #ede9fe; stroke: #c4b5fd; rx: 10px; }
              .btxt-p { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #6d28d9; }

              :root.dark .left-pan, .dark .left-pan { fill: #2e1065; stroke: #7c3aed; }
              :root.dark .right-pan, .dark .right-pan { fill: #3b0764; stroke: #c084fc; }
              :root.dark .base-card, .dark .base-card { fill: #1e293b; stroke: #64748b; }
              :root.dark .txt-title, .dark .txt-title { fill: #f8fafc; }
              :root.dark .txt-greek, .dark .txt-greek { fill: #c084fc; }
              :root.dark .txt-body, .dark .txt-body { fill: #cbd5e1; }
              :root.dark .badge-p, .dark .badge-p { fill: #3b0764; stroke: #7c3aed; }
              :root.dark .btxt-p, .dark .btxt-p { fill: #d8b4fe; }
            `}</style>

            {/* Top Left Pan: Past Eagerness from Last Year (8:10, 11b) */}
            <g transform="translate(25, 30)">
              <rect width="415" height="175" className="node-card left-pan" />
              <rect x="16" y="14" width="165" height="20" className="badge-p" />
              <text x="98" y="28" textAnchor="middle" className="btxt-p">天平左端：從去年起（8:10）</text>
              <text x="16" y="55" className="txt-title">先起了熱切願作的心（現在不定詞）</text>
              <text x="16" y="75" className="txt-greek">apo perysi ... kathaper hē prothymia tou thelein</text>
              <text x="16" y="98" className="txt-body">・時間座標 (apo perysi)：一年前（林前 16:1–4）即率先開頭</text>
              <text x="16" y="118" className="txt-body">・逆向強調 (ou monon to poiēsai alla kai to thelein)：</text>
              <text x="16" y="138" className="txt-body">  不僅外在啟動行動，內心更充滿自發躍躍欲試的熱忱 (prothymia)</text>
              <text x="16" y="158" className="txt-body">・危機：若僅停留在「持續想做 (tou thelein)」，將淪為屬靈爛尾樓</text>
            </g>

            {/* Alignment Arrow Between Pans */}
            <path d="M 440 118 L 495 118" stroke="#7c3aed" strokeWidth="2.8" fill="none" markerEnd="url(#arr-wil-p)" />

            {/* Top Right Pan: Present Completion (8:11) */}
            <g transform="translate(500, 30)">
              <rect width="415" height="175" className="node-card right-pan" />
              <rect x="16" y="14" width="165" height="20" className="badge-p" />
              <text x="98" y="28" textAnchor="middle" className="btxt-p">天平右端：但如今！（8:11）</text>
              <text x="16" y="55" className="txt-title">照你們所有的去徹底辦成（不定過去式）</text>
              <text x="16" y="75" className="txt-greek">nyni de ... houtōs kai to epitelesai ek tou echein</text>
              <text x="16" y="98" className="txt-body">・時間轉折 (nyni de)：和解既已成就，當下即是完工時刻</text>
              <text x="16" y="118" className="txt-body">・外在整體體貌 (epitelesate / to epitelesai)：果斷徹底完成善工</text>
              <text x="16" y="138" className="txt-body">・天平對齊句式 (kathaper ... houtōs kai)：讓實際完工配得上起初熱忱</text>
              <text x="16" y="158" className="txt-body">・現實衡量基準 (ek tou echein)：從現有資源出發，非強人所難</text>
            </g>

            {/* Vertical Support Arrow to Foundation */}
            <path d="M 470 205 L 470 255" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arr-wil-p)" />

            {/* Bottom Foundation: Principle of Proportionate Acceptance (8:12) */}
            <g transform="translate(150, 260)">
              <rect width="640" height="155" className="node-card base-card" />
              <rect x="18" y="14" width="195" height="20" className="badge-p" />
              <text x="115" y="28" textAnchor="middle" className="btxt-p">預先糾正與蒙悅納法則（8:12）</text>
              <text x="225" y="29" className="txt-title">人若有願作的心，必照他所有的蒙悅納</text>
              <text x="18" y="55" className="txt-greek">ei gar hē prothymia prokeitai, katho ean echē euprosdektos, ou katho ouk echei</text>
              <text x="18" y="80" className="txt-body">・前提條件 (ei hē prothymia prokeitai)：甘心樂意的熱切心態已經擺在神面前</text>
              <text x="18" y="102" className="txt-body">・正反平行裁決：極蒙悅納 (euprosdektos) 乃「照他所擁有的 (katho ean echē)」，絕非「照他所沒有的 (ou katho ouk echei)」</text>
              <text x="18" y="124" className="txt-body">・牧養釋放：消除「等我像富豪一樣有錢再奉獻」的完美主義藉口，亦解除「被榨乾」的恐懼</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">動詞體貌對比：</span>
          <span>持續想做的心願（現在式 <em>tou thelein</em>）vs. 徹底完成的行動（不定過去式 <em>to epitelesai</em>）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          恩典比例原則：神看重甘心與現有比例，不看絕對金額大小
        </div>
      </div>
    </figure>
  );
}

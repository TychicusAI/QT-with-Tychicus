"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function LawHearingDoingChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜有無律法的雙軌定罪與「聽行律法」的反義格言（羅 2:11–13）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Gar-Chain &amp; Parallelism
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-1">
        <div className="min-w-[720px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940 435"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto", aspectRatio: "940 / 435" }}
            role="img"
            aria-label="羅馬書 2:11-13 有無律法與聽行律法結構圖"
          >
            <defs>
              <marker id="arr-g" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
            </defs>

            <style>{`
              .node-card { rx: 16px; ry: 16px; stroke-width: 1.5; }
              .top-card { fill: #f8fafc; stroke: #94a3b8; stroke-width: 2; }
              .left-card { fill: #fff1f2; stroke: #fecdd3; }
              .right-card { fill: #fff1f2; stroke: #fda4af; }
              .bot-card { fill: #f5f3ff; stroke: #8b5cf6; stroke-width: 2; }

              .txt-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: #0f172a; }
              .txt-greek { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-greek-w { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #be123c; }
              .txt-body { font-family: system-ui, -apple-system, sans-serif; font-size: 11.5px; fill: #334155; }
              .badge-p { fill: #ede9fe; stroke: #c4b5fd; rx: 10px; }
              .badge-r { fill: #ffe4e6; stroke: #fecdd3; rx: 10px; }
              .btxt-p { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #6d28d9; }
              .btxt-r { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #be123c; }

              :root.dark .top-card, .dark .top-card { fill: #1e293b; stroke: #64748b; }
              :root.dark .left-card, .dark .left-card { fill: #4c0519; stroke: #e11d48; }
              :root.dark .right-card, .dark .right-card { fill: #500724; stroke: #f43f5e; }
              :root.dark .bot-card, .dark .bot-card { fill: #2e1065; stroke: #a855f7; }
              :root.dark .txt-title, .dark .txt-title { fill: #f8fafc; }
              :root.dark .txt-greek, .dark .txt-greek { fill: #c084fc; }
              :root.dark .txt-greek-w, .dark .txt-greek-w { fill: #fb7185; }
              :root.dark .txt-body, .dark .txt-body { fill: #cbd5e1; }
              :root.dark .badge-p, .dark .badge-p { fill: #3b0764; stroke: #7c3aed; }
              :root.dark .badge-r, .dark .badge-r { fill: #4c0519; stroke: #e11d48; }
              :root.dark .btxt-p, .dark .btxt-p { fill: #d8b4fe; }
              :root.dark .btxt-r, .dark .btxt-r { fill: #fecdd3; }
            `}</style>

            {/* Top Box: 2:11 Principle (Width 620 >= 550) */}
            <g transform="translate(160, 15)">
              <rect width="620" height="72" className="node-card top-card" />
              <rect x="16" y="14" width="130" height="20" className="badge-p" />
              <text x="81" y="28" textAnchor="middle" className="btxt-p">第一級 γάρ（2:11）</text>
              <text x="160" y="30" className="txt-title">神學大前提：因為在神面前，並沒有偏待人的事</text>
              <text x="160" y="54" className="txt-greek">ou gar estin prosōpolēmpsia para tō theō</text>
            </g>

            {/* Arrows to 2:12a and 2:12b */}
            <path d="M 350 87 L 240 125" stroke="#7c3aed" strokeWidth="2" fill="none" markerEnd="url(#arr-g)" />
            <path d="M 590 87 L 700 125" stroke="#7c3aed" strokeWidth="2" fill="none" markerEnd="url(#arr-g)" />

            {/* Middle Left: 2:12a Sinning without the Law */}
            <g transform="translate(30, 130)">
              <rect width="415" height="125" className="node-card left-card" />
              <rect x="16" y="14" width="150" height="20" className="badge-r" />
              <text x="91" y="28" textAnchor="middle" className="btxt-r">第二級 γάρ：外邦軌跡（2:12a）</text>
              <text x="16" y="56" className="txt-title">凡沒有律法犯了罪的，也必不按律法滅亡</text>
              <text x="16" y="76" className="txt-greek-w">Hosoi gar anomōs hēmarton, anomōs kai apollountai</text>
              <text x="16" y="98" className="txt-body">・保羅獨有副詞 anomōs：處於摩西成文妥拉之外</text>
              <text x="16" y="116" className="txt-body">・概括性不定過去式 hēmarton ➔ 未來式滅亡 (apollountai)</text>
            </g>

            {/* Middle Right: 2:12b Sinning in the Law */}
            <g transform="translate(495, 130)">
              <rect width="415" height="125" className="node-card right-card" />
              <rect x="16" y="14" width="150" height="20" className="badge-r" />
              <text x="91" y="28" textAnchor="middle" className="btxt-r">第二級 γάρ：猶太軌跡（2:12b）</text>
              <text x="16" y="56" className="txt-title">凡在律法以下犯了罪的，也必按律法受審判</text>
              <text x="16" y="76" className="txt-greek-w">kai hosoi en nomō hēmarton, dia nomou krithēsontai</text>
              <text x="16" y="98" className="txt-body">・在律法領域內 (en nomō) 犯罪，毫無豁免特權</text>
              <text x="16" y="116" className="txt-body">・反而必藉著律法標準 (dia nomou) 被定罪受審</text>
            </g>

            {/* Arrows converging to 2:13 */}
            <path d="M 240 255 L 350 290" stroke="#7c3aed" strokeWidth="2" fill="none" markerEnd="url(#arr-g)" />
            <path d="M 700 255 L 590 290" stroke="#7c3aed" strokeWidth="2" fill="none" markerEnd="url(#arr-g)" />

            {/* Bottom Hinge Box: 2:13 Hearers vs Doers (Width 740 >= 550) */}
            <g transform="translate(100, 295)">
              <rect width="740" height="125" className="node-card bot-card" />
              <rect x="18" y="14" width="165" height="20" className="badge-p" />
              <text x="100" y="28" textAnchor="middle" className="btxt-p">第三級 γάρ：核心律法公理（2:13）</text>
              <text x="18" y="56" className="txt-title">因為在神面前，不是「聽律法的」為義，乃是「行律法的」將被稱義！</text>
              <text x="18" y="76" className="txt-greek">ou gar hoi akroatai nomou dikaioi para tō theō, all hoi poiētai nomou dikaiōthēsontai</text>
              <text x="18" y="98" className="txt-body">・擊碎猶太會堂特權迷思：每週安息日「聆聽妥拉誦讀」(akroatai nomou) 絕不等於在神面前得稱為義</text>
              <text x="18" y="116" className="txt-body">・神聖被動未來式「將被宣判為義」(dikaiōthēsontai)：指向末日法庭，將無力自救的聽道者逼向基督十架</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">聽覺押韻對偶：</span>
          <span>聽律法者（<em>hoi akroatai nomou</em>）vs. 行律法者（<em>hoi poiētai nomou</em>）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          在神面前（<em>para tō theō</em>，2:11, 13 雙重法庭空間定位）
        </div>
      </div>
    </figure>
  );
}

"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function ApostlesGloryChristChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜「眾教會的使者、基督的榮耀」與公開顯明愛心明證（林後 8:22–24）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Apostolic Authorization &amp; Public Proof
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
            aria-label="眾教會的使者基督的榮耀與公開愛心明證圖"
          >
            <defs>
              <marker id="arr-apo-p" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
            </defs>

            <style>{`
              .node-card { rx: 16px; ry: 16px; stroke-width: 1.5; }
              .auth-card { fill: #f5f3ff; stroke: #c4b5fd; }
              .glory-card { fill: #fdf4ff; stroke: #a855f7; stroke-width: 2; }
              .climax-card { fill: #fffbeb; stroke: #f59e0b; stroke-width: 2.2; }

              .txt-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: #0f172a; }
              .txt-greek { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-greek-a { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #b45309; }
              .txt-body { font-family: system-ui, -apple-system, sans-serif; font-size: 11.5px; fill: #334155; }
              .badge-p { fill: #ede9fe; stroke: #c4b5fd; rx: 10px; }
              .badge-a { fill: #fef3c7; stroke: #fde68a; rx: 10px; }
              .btxt-p { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #6d28d9; }
              .btxt-a { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #b45309; }

              :root.dark .auth-card, .dark .auth-card { fill: #2e1065; stroke: #7c3aed; }
              :root.dark .glory-card, .dark .glory-card { fill: #3b0764; stroke: #c084fc; }
              :root.dark .climax-card, .dark .climax-card { fill: #451a03; stroke: #f59e0b; }
              :root.dark .txt-title, .dark .txt-title { fill: #f8fafc; }
              :root.dark .txt-greek, .dark .txt-greek { fill: #c084fc; }
              :root.dark .txt-greek-a, .dark .txt-greek-a { fill: #fbbf24; }
              :root.dark .txt-body, .dark .txt-body { fill: #cbd5e1; }
              :root.dark .badge-p, .dark .badge-p { fill: #3b0764; stroke: #7c3aed; }
              :root.dark .badge-a, .dark .badge-a { fill: #78350f; stroke: #d97706; }
              :root.dark .btxt-p, .dark .btxt-p { fill: #d8b4fe; }
              :root.dark .btxt-a, .dark .btxt-a { fill: #fde68a; }
            `}</style>

            {/* Top Left: Titus Authorization (8:23a) */}
            <g transform="translate(25, 30)">
              <rect width="420" height="170" className="node-card auth-card" />
              <rect x="16" y="14" width="165" height="20" className="badge-p" />
              <text x="98" y="28" textAnchor="middle" className="btxt-p">對稱授權公式一（8:23a）</text>
              <text x="16" y="55" className="txt-title">論到提多：我的夥伴，且為你們與我同工</text>
              <text x="16" y="75" className="txt-greek">Eite hyper Titou, koinōnos emos kai eis hymas synergos</text>
              <text x="16" y="100" className="txt-body">・共享團契者 (koinōnos emos)：與使徒保羅生命與異象完全合一</text>
              <text x="16" y="120" className="txt-body">・為你們的同工 (eis hymas synergos)：一切勞苦皆以造就哥林多人為目標</text>
              <text x="16" y="140" className="txt-body">・接待提多即是接待使徒保羅本人的職事權柄</text>
            </g>

            {/* Top Right: Two Tested Brothers Authorization (8:22, 23b) */}
            <g transform="translate(495, 30)">
              <rect width="420" height="170" className="node-card glory-card" />
              <rect x="16" y="14" width="180" height="20" className="badge-p" />
              <text x="106" y="28" textAnchor="middle" className="btxt-p">對稱授權公式二（8:22, 23b）</text>
              <text x="16" y="55" className="txt-title">論到眾弟兄：眾教會的使者，基督的榮耀！</text>
              <text x="16" y="75" className="txt-greek">eite adelphoi hēmōn, apostoloi ekklēsiōn, doxa Christou</text>
              <text x="16" y="100" className="txt-body">・屢經試驗 (edokimasamen en pollois pollakis)：歲月實戰淬煉的忠心</text>
              <text x="16" y="120" className="txt-body">・眾教會的使者 (apostoloi ekklēsiōn)：受眾教會正式差遣之全權代表</text>
              <text x="16" y="140" className="txt-body">・基督的榮耀 (doxa Christou)：無名僕人的品格折射出基督救贖榮光（3:18）</text>
            </g>

            {/* Converging Arrows to Final Call (8:24) */}
            <path d="M 235 200 L 350 245" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arr-apo-p)" />
            <path d="M 705 200 L 590 245" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arr-apo-p)" />

            {/* Bottom Climax Box: Public Demonstration Before the Churches (8:24) */}
            <g transform="translate(150, 250)">
              <rect width="640" height="165" className="node-card climax-card" />
              <rect x="18" y="14" width="205" height="20" className="badge-a" />
              <text x="120" y="28" textAnchor="middle" className="btxt-a">全章收束與受詞前置（8:24 οὖν）</text>
              <text x="235" y="29" className="txt-title">在眾教會的臉面前，顯明你們愛心與我們誇口的憑據！</text>
              <text x="18" y="55" className="txt-greek-a">Tēn oun endeixin tēs agapēs hymōn ... endeiknymenoi eis prosōpon tōn ekklēsiōn</text>
              <text x="18" y="80" className="txt-body">・分詞命令式 (endeiknymenoi)：承接 8:8「試驗愛心的真誠」，將內在愛心化為不可辯駁的公開明證 (endeixis)</text>
              <text x="18" y="102" className="txt-body">・印證使徒誇口 (hēmōn kauchēseōs)：使保羅在馬其頓眾教會前對哥林多人的信心（7:14; 9:2）得著榮耀印證</text>
              <text x="18" y="124" className="txt-body">・公開劇場 (eis prosōpon tōn ekklēsiōn)：突破地方堂會本位主義，在普世眾教會注視下見證基督身體的合一</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">首尾閉環：</span>
          <span>馬其頓眾教會的恩典（8:1）➔ 試驗愛心真誠（8:8）➔ 在眾教會面前顯明愛心憑據（8:24）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          尊榮顛覆：連名字都未留下的跑腿代表，卻被冠以「基督的榮耀（<em>doxa Christou</em>）」
        </div>
      </div>
    </figure>
  );
}

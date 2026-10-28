"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function TwoSorrowsDiscourseChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜兩種憂愁的神學分流與終極結局（林後 7:8–10）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Discourse Topology
        </span>
      </div>

      {/* SVG Canvas Container with Horizontal Scroll for Mobile */}
      <div className="w-full overflow-x-auto pb-1">
        <div className="min-w-[720px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940 450"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto", aspectRatio: "940 / 450" }}
            role="img"
            aria-label="兩種憂愁與無悔救恩的神學分流圖"
          >
            <defs>
              <marker
                id="arrow-grace"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#8b5cf6" />
              </marker>
              <marker
                id="arrow-flesh"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
              </marker>

              <linearGradient id="grad-grace-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="30%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>

              <linearGradient id="grad-flesh-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="30%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#be123c" />
              </linearGradient>
            </defs>

            <style>{`
              .node-card { rx: 16px; ry: 16px; stroke-width: 1.5; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.03)); }
              .start-box { fill: #f8fafc; stroke: #cbd5e1; }
              .grace-box { fill: #f5f3ff; stroke: #c4b5fd; }
              .grace-end-box { fill: #fdf4ff; stroke: #d8b4fe; stroke-width: 2; }
              .flesh-box { fill: #fff1f2; stroke: #fecdd3; }
              .flesh-end-box { fill: #fff1f2; stroke: #fda4af; stroke-width: 2; }

              .txt-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: #0f172a; }
              .txt-greek { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-greek-warn { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #be123c; }
              .txt-body { font-family: system-ui, -apple-system, sans-serif; font-size: 11.5px; fill: #334155; }
              .txt-pill { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; font-weight: 600; fill: #475569; }

              .badge-bg-grace { fill: #ede9fe; stroke: #c4b5fd; stroke-width: 1; rx: 10px; }
              .badge-bg-flesh { fill: #ffe4e6; stroke: #fecdd3; stroke-width: 1; rx: 10px; }
              .badge-txt-grace { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #6d28d9; }
              .badge-txt-flesh { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #be123c; }

              :root.dark .start-box, .dark .start-box { fill: #1e293b; stroke: #475569; }
              :root.dark .grace-box, .dark .grace-box { fill: #2e1065; stroke: #7c3aed; }
              :root.dark .grace-end-box, .dark .grace-end-box { fill: #3b0764; stroke: #a855f7; }
              :root.dark .flesh-box, .dark .flesh-box { fill: #4c0519; stroke: #e11d48; }
              :root.dark .flesh-end-box, .dark .flesh-end-box { fill: #500724; stroke: #f43f5e; }

              :root.dark .txt-title, .dark .txt-title { fill: #f8fafc; }
              :root.dark .txt-greek, .dark .txt-greek { fill: #c084fc; }
              :root.dark .txt-greek-warn, .dark .txt-greek-warn { fill: #fb7185; }
              :root.dark .txt-body, .dark .txt-body { fill: #cbd5e1; }
              :root.dark .txt-pill, .dark .txt-pill { fill: #94a3b8; }

              :root.dark .badge-bg-grace, .dark .badge-bg-grace { fill: #3b0764; stroke: #7c3aed; }
              :root.dark .badge-bg-flesh, .dark .badge-bg-flesh { fill: #4c0519; stroke: #e11d48; }
              :root.dark .badge-txt-grace, .dark .badge-txt-grace { fill: #d8b4fe; }
              :root.dark .badge-txt-flesh, .dark .badge-txt-flesh { fill: #fecdd3; }
            `}</style>

            {/* Branch Paths */}
            {/* Upward Grace Branch */}
            <path
              d="M 235 225 C 285 225, 295 115, 345 115"
              stroke="url(#grad-grace-line)"
              strokeWidth="2.5"
              fill="none"
              markerEnd="url(#arrow-grace)"
            />
            {/* Downward Flesh Branch */}
            <path
              d="M 235 225 C 285 225, 295 335, 345 335"
              stroke="url(#grad-flesh-line)"
              strokeWidth="2.5"
              fill="none"
              markerEnd="url(#arrow-flesh)"
            />

            {/* Step 1 to Step 2 connect: Grace */}
            <path
              d="M 605 115 L 640 115"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
              markerEnd="url(#arrow-grace)"
            />
            {/* Step 1 to Step 2 connect: Flesh */}
            <path
              d="M 605 335 L 640 335"
              stroke="#f43f5e"
              strokeWidth="2"
              strokeDasharray="4,4"
              fill="none"
              markerEnd="url(#arrow-flesh)"
            />

            {/* 1. Origin Node (Left Center) */}
            <g transform="translate(20, 155)">
              <rect width="215" height="140" className="node-card start-box" />
              <rect x="14" y="14" width="76" height="20" rx="10" fill="#e2e8f0" />
              <text x="52" y="28" textAnchor="middle" className="txt-pill">起點・刺痛</text>

              <text x="16" y="58" className="txt-title">神聖真理的刺痛</text>
              <text x="16" y="78" className="txt-greek">lypē pros hōran</text>
              <text x="16" y="98" className="txt-body">・流淚之信的嚴正管教（7:8）</text>
              <text x="16" y="116" className="txt-body">・受神主權限制的短暫陣痛</text>
              <text x="16" y="134" className="txt-body">・使徒短暫心疼後悔 (metemelomēn)</text>
            </g>

            {/* Branch Labels near bifurcation */}
            <g transform="translate(255, 140)">
              <rect width="70" height="22" className="badge-bg-grace" />
              <text x="35" y="15" textAnchor="middle" className="badge-txt-grace">朝向上帝</text>
            </g>
            <g transform="translate(255, 285)">
              <rect width="70" height="22" className="badge-bg-flesh" />
              <text x="35" y="15" textAnchor="middle" className="badge-txt-flesh">朝向自我</text>
            </g>

            {/* 2A. Grace Branch Node 1 (Middle Top) */}
            <g transform="translate(355, 45)">
              <rect width="250" height="140" className="node-card grace-box" />
              <rect x="14" y="14" width="76" height="20" className="badge-bg-grace" />
              <text x="52" y="28" textAnchor="middle" className="badge-txt-grace">依神憂愁</text>

              <text x="16" y="58" className="txt-title">依著神的意思憂愁</text>
              <text x="16" y="78" className="txt-greek">hē kata theon lypē</text>
              <text x="16" y="98" className="txt-body">・眼目朝向上帝，看見得罪至聖天父</text>
              <text x="16" y="116" className="txt-body">・大衛痛悔（詩 51「惟獨得罪了祢」）</text>
              <text x="16" y="134" className="txt-body">・神掌管手術刀，對靈魂零虧損</text>
            </g>

            {/* 2B. Flesh Branch Node 1 (Middle Bottom) */}
            <g transform="translate(355, 265)">
              <rect width="250" height="140" className="node-card flesh-box" />
              <rect x="14" y="14" width="76" height="20" className="badge-bg-flesh" />
              <text x="52" y="28" textAnchor="middle" className="badge-txt-flesh">世俗憂愁</text>

              <text x="16" y="58" className="txt-title">屬乎這世界的憂愁</text>
              <text x="16" y="78" className="txt-greek-warn">hē tou kosmou lypē</text>
              <text x="16" y="98" className="txt-body">・眼目死盯自我、面子、利益與名聲</text>
              <text x="16" y="116" className="txt-body">・驕傲與自憐：害怕東窗事發</text>
              <text x="16" y="134" className="txt-body">・金口若望：將神完全排除在視野外</text>
            </g>

            {/* 3A. Grace End Node (Right Top) */}
            <g transform="translate(650, 45)">
              <rect width="270" height="140" className="node-card grace-end-box" />
              <rect x="14" y="14" width="80" height="20" className="badge-bg-grace" />
              <text x="54" y="28" textAnchor="middle" className="badge-txt-grace">終極救恩</text>

              <text x="16" y="58" className="txt-title">生出真悔改・以致得救</text>
              <text x="16" y="78" className="txt-greek">metanoian eis sōtērian</text>
              <text x="16" y="98" className="txt-body">・metanoia：全人意志向神 180° 轉向</text>
              <text x="16" y="116" className="txt-body">・生出七級悔改行動瀑布（7:11）</text>
              <text x="16" y="134" className="txt-body">・無可後悔 (ametamelētos) 的終末榮耀</text>
            </g>

            {/* 3B. Flesh End Node (Right Bottom) */}
            <g transform="translate(650, 265)">
              <rect width="270" height="140" className="node-card flesh-end-box" />
              <rect x="14" y="14" width="80" height="20" className="badge-bg-flesh" />
              <text x="54" y="28" textAnchor="middle" className="badge-txt-flesh">徹底滅亡</text>

              <text x="16" y="58" className="txt-title">停留在懊惱・製造死亡</text>
              <text x="16" y="78" className="txt-greek-warn">thanaton katergazetai</text>
              <text x="16" y="98" className="txt-body">・metamelomai：純情緒遺憾，無歸向</text>
              <text x="16" y="116" className="txt-body">・猶大賣主後悔卻上吊（太 27:3）</text>
              <text x="16" y="134" className="txt-body">・推向自我控告、苦毒與靈性永死</text>
            </g>
          </svg>
        </div>
      </div>

      {/* Footer Key Note */}
      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">關鍵字義鑑別：</span>
          <span>懊惱情緒（<em>Metamelomai</em>）≠ 生命真悔改（<em>Metanoia</em>）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          依神憂愁生出無悔救恩（<em>ametamelēton</em>）｜世俗憂愁做成死亡
        </div>
      </div>
    </figure>
  );
}

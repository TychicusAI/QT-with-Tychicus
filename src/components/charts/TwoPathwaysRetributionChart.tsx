"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function TwoPathwaysRetributionChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜照各人行為報應的主權公理與兩極生命軌跡（羅 2:6–8）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Syntactic Parallelism (men ... de)
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-1">
        <div className="min-w-[720px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940 440"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto", aspectRatio: "940 / 440" }}
            role="img"
            aria-label="照各人行為報應的兩極生命軌跡圖"
          >
            <defs>
              <marker id="arr-p" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
              <marker id="arr-r" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#e11d48" />
              </marker>
            </defs>

            <style>{`
              .node-card { rx: 16px; ry: 16px; stroke-width: 1.5; }
              .axiom-box { fill: #f8fafc; stroke: #94a3b8; stroke-width: 2; }
              .good-box { fill: #f5f3ff; stroke: #c4b5fd; }
              .life-box { fill: #fdf4ff; stroke: #a855f7; stroke-width: 2; }
              .evil-box { fill: #fff1f2; stroke: #fecdd3; }
              .wrath-box { fill: #fff1f2; stroke: #f43f5e; stroke-width: 2; }

              .txt-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: #0f172a; }
              .txt-greek { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-greek-w { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #be123c; }
              .txt-body { font-family: system-ui, -apple-system, sans-serif; font-size: 11.5px; fill: #334155; }
              .badge-p { fill: #ede9fe; stroke: #c4b5fd; rx: 10px; }
              .badge-r { fill: #ffe4e6; stroke: #fecdd3; rx: 10px; }
              .btxt-p { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #6d28d9; }
              .btxt-r { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #be123c; }

              :root.dark .axiom-box, .dark .axiom-box { fill: #1e293b; stroke: #64748b; }
              :root.dark .good-box, .dark .good-box { fill: #2e1065; stroke: #7c3aed; }
              :root.dark .life-box, .dark .life-box { fill: #3b0764; stroke: #c084fc; }
              :root.dark .evil-box, .dark .evil-box { fill: #4c0519; stroke: #e11d48; }
              :root.dark .wrath-box, .dark .wrath-box { fill: #500724; stroke: #fb7185; }
              :root.dark .txt-title, .dark .txt-title { fill: #f8fafc; }
              :root.dark .txt-greek, .dark .txt-greek { fill: #c084fc; }
              :root.dark .txt-greek-w, .dark .txt-greek-w { fill: #fb7185; }
              :root.dark .txt-body, .dark .txt-body { fill: #cbd5e1; }
              :root.dark .badge-p, .dark .badge-p { fill: #3b0764; stroke: #7c3aed; }
              :root.dark .badge-r, .dark .badge-r { fill: #4c0519; stroke: #e11d48; }
              :root.dark .btxt-p, .dark .btxt-p { fill: #d8b4fe; }
              :root.dark .btxt-r, .dark .btxt-r { fill: #fecdd3; }
            `}</style>

            {/* Top Center Axiom Box (width 640px >= 550px) */}
            <g transform="translate(150, 20)">
              <rect width="640" height="95" className="node-card axiom-box" />
              <rect x="16" y="12" width="160" height="20" className="badge-p" />
              <text x="96" y="26" textAnchor="middle" className="btxt-p">正典審判總綱（2:6｜外層 A）</text>
              <text x="16" y="52" className="txt-title">祂必照各人的行為報應各人（引詩 62:12 LXX / 箴 24:12）</text>
              <text x="16" y="72" className="txt-greek">hos apodōsei hekastō kata ta erga autou</text>
              <text x="310" y="72" className="txt-body">・未來式 apodōsei 統攝 2:7，2:8 則轉為無動詞名詞宣判</text>
            </g>

            {/* Branching Lines from Top Axiom */}
            <path d="M 350 115 L 250 160" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arr-p)" />
            <path d="M 590 115 L 690 160" stroke="#e11d48" strokeWidth="2.5" fill="none" markerEnd="url(#arr-r)" />

            {/* Left Column: 2:7 (tois men) -> Eternal Life */}
            <g transform="translate(30, 165)">
              <rect width="415" height="140" className="node-card good-box" />
              <rect x="16" y="14" width="140" height="20" className="badge-p" />
              <text x="86" y="28" textAnchor="middle" className="btxt-p">正面軌跡（2:7a｜tois men）</text>
              <text x="16" y="56" className="txt-title">凡恆心行善，尋求榮耀、尊貴與不能朽壞的</text>
              <text x="16" y="76" className="txt-greek">kath hypomonēn ergou agathou doxan kai timēn kai aphtharsian</text>
              <text x="16" y="98" className="txt-body">・恆心 (hypomonē)：在試煉阻力中持續不懈的堅毅順服</text>
              <text x="16" y="118" className="txt-body">・尋求 (zētousin)：以神為中心，仰望末世復活的不朽冠冕</text>
            </g>

            <path d="M 237 305 L 237 335" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arr-p)" />

            <g transform="translate(30, 340)">
              <rect width="415" height="80" className="node-card life-box" />
              <text x="20" y="32" className="txt-title">終末報應（直接受詞）：永生</text>
              <text x="235" y="32" className="txt-greek">zōēn aiōnion (2:7b)</text>
              <text x="20" y="56" className="txt-body">・新世代復活生命的成全（在基督與聖靈裡結出果子之印證）</text>
            </g>

            {/* Right Column: 2:8 (tois de) -> Wrath and Fury */}
            <g transform="translate(495, 165)">
              <rect width="415" height="140" className="node-card evil-box" />
              <rect x="16" y="14" width="140" height="20" className="badge-r" />
              <text x="86" y="28" textAnchor="middle" className="btxt-r">負面軌跡（2:8a｜tois de）</text>
              <text x="16" y="56" className="txt-title">惟有出於自私野心，不順從真理反順從不義的</text>
              <text x="16" y="76" className="txt-greek-w">ex eritheias kai apeithousi tē alētheia peithomenois de tē adikia</text>
              <text x="16" y="98" className="txt-body">・语意安全防線：eritheia 源自雇工 (erithos) 唯利是圖的自私鑽營</text>
              <text x="16" y="118" className="txt-body">・同根分詞對撞 (apeithousi / peithomenois) 鉤連 1:18 壓抑真理</text>
            </g>

            <path d="M 702 305 L 702 335" stroke="#e11d48" strokeWidth="2.5" fill="none" markerEnd="url(#arr-r)" />

            <g transform="translate(495, 340)">
              <rect width="415" height="80" className="node-card wrath-box" />
              <text x="20" y="32" className="txt-title">終末報應（無動詞主格宣判）：忿怒與暴怒</text>
              <text x="305" y="32" className="txt-greek-w">orgē kai thymos (2:8b)</text>
              <text x="20" y="56" className="txt-body">・省略動詞直接砸落，迴響舊約「耶和華大而可畏之日」的審判</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">語意安全防線：</span>
          <span><em>eritheia</em>（雇工式的自私野心，非字根謬誤之「結黨」）vs. <em>hypomonē</em>（堅毅恆心）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          2:6–11 六層交叉結構之外圍與第一組對比
        </div>
      </div>
    </figure>
  );
}

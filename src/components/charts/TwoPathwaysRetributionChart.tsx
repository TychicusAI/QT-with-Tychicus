"use client";

import React from "react";
import { Sparkles, ArrowDown } from "lucide-react";

export function TwoPathwaysRetributionChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜照各人行為報應的主權公理與兩極生命軌跡（羅 2:6–8）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Syntactic Parallelism (men ... de)
        </span>
      </div>

      {/* Top Axiom Box (2:6) */}
      <div className="rounded-2xl bg-slate-50/95 dark:bg-slate-800/80 border-2 border-slate-400/80 dark:border-slate-600 p-4 space-y-1.5">
        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
          正典審判總綱（2:6｜外層 A）
        </span>
        <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
          祂必照各人的行為報應各人（引詩 62:12 LXX / 箴 24:12）
        </p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="font-serif italic font-semibold text-purple-700 dark:text-purple-300">
            hos apodōsei hekastō kata ta erga autou
          </span>
          <span className="text-stone-600 dark:text-stone-300">
            ・未來式 <span className="italic">apodōsei</span> 統攝 2:7，2:8 則轉為無動詞名詞宣判
          </span>
        </div>
      </div>

      {/* Two Parallel Tracks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column: 2:7 */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-center text-purple-600 dark:text-purple-400">
            <ArrowDown className="w-5 h-5" />
          </div>
          <div className="flex-1 rounded-2xl bg-purple-50/90 dark:bg-purple-950/35 border border-purple-300 dark:border-purple-700 p-4 space-y-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
              正面軌跡（2:7a｜tois men）
            </span>
            <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
              凡恆心行善，尋求榮耀、尊貴與不能朽壞的
            </p>
            <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
              kath hypomonēn ergou agathou doxan kai timēn kai aphtharsian
            </p>
            <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
              <p>・恆心（<span className="italic">hypomonē</span>）：在試煉阻力中持續不懈的堅毅順服</p>
              <p>・尋求（<span className="italic">zētousin</span>）：以神為中心，仰望末世復活的不朽冠冕</p>
            </div>
          </div>

          <div className="flex justify-center text-purple-600 dark:text-purple-400">
            <ArrowDown className="w-5 h-5" />
          </div>

          <div className="rounded-2xl bg-fuchsia-50/90 dark:bg-purple-950/50 border-2 border-purple-500 p-4 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold text-stone-900 dark:text-stone-100">終末報應（直接受詞）：永生</span>
              <span className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">zōēn aiōnion (2:7b)</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              ・新世代復活生命的成全（在基督與聖靈裡結出果子之印證）
            </p>
          </div>
        </div>

        {/* Right Column: 2:8 */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-center text-rose-600 dark:text-rose-400">
            <ArrowDown className="w-5 h-5" />
          </div>
          <div className="flex-1 rounded-2xl bg-rose-50/90 dark:bg-rose-950/35 border border-rose-300 dark:border-rose-700 p-4 space-y-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-900/70 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-700">
              負面軌跡（2:8a｜tois de）
            </span>
            <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
              惟有出於自私野心，不順從真理反順從不義的
            </p>
            <p className="text-xs font-serif italic font-semibold text-rose-700 dark:text-rose-300 break-words">
              ex eritheias kai apeithousi tē alētheia peithomenois de tē adikia
            </p>
            <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
              <p>・語意安全防線：<span className="italic">eritheia</span> 源自雇工（<span className="italic">erithos</span>）唯利是圖的自私鑽營</p>
              <p>・同根分詞對撞（<span className="italic">apeithousi / peithomenois</span>）鉤連 1:18 壓抑真理</p>
            </div>
          </div>

          <div className="flex justify-center text-rose-600 dark:text-rose-400">
            <ArrowDown className="w-5 h-5" />
          </div>

          <div className="rounded-2xl bg-rose-50/95 dark:bg-rose-950/50 border-2 border-rose-500 p-4 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold text-stone-900 dark:text-stone-100">終末報應（無動詞主格宣判）：忿怒與暴怒</span>
              <span className="text-xs font-serif italic font-semibold text-rose-700 dark:text-rose-300">orgē kai thymos (2:8b)</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              ・省略動詞直接砸落，迴響舊約「耶和華大而可畏之日」的審判
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
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

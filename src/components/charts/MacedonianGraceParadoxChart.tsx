"use client";

import React from "react";
import { Sparkles, ArrowRight, ArrowDown } from "lucide-react";

export function MacedonianGraceParadoxChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜馬其頓恩典算術悖論與「先獻己身」神學次序（林後 8:1–5）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Paradoxical Grace Equation
        </span>
      </div>

      {/* Top Source Box (8:1) */}
      <div className="rounded-2xl bg-purple-50/90 dark:bg-purple-950/40 border-2 border-purple-400 dark:border-purple-600 p-4 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            主權源頭（8:1 完成分詞）
          </span>
          <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
            神賜給馬其頓眾教會的恩典
          </span>
          <span className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
            (tēn charin tou theou tēn dedomenēn)
          </span>
        </div>
        <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          <p>・狀態結果體貌（<span className="italic">dedomenēn</span>）：恩典由神主動賜下並持續常駐，非人本動員所能製造</p>
          <p>・在極多患難的試煉中（<span className="italic">en pollē dokimē thlipseōs</span>，8:2a）點燃超自然的屬靈反應</p>
        </div>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Middle Paradoxical Equation */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {/* Left: Paradoxical Inputs */}
        <div className="flex-1 rounded-2xl bg-stone-50/95 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            天國矛盾算術左端（8:2a–b）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            滿溢的喜樂 ＋ 深淵般的見底赤貧
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            hē perisseia tēs charas + hē kata bathous ptōcheia
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・赤貧（<span className="italic">ptōcheia</span>）：非一般清寒（<span className="italic">penia</span>），乃一無所有之乞丐絕境</p>
            <p>・深淵修飾語（<span className="italic">kata bathous</span>）：往下直到深淵底部之極度匱乏</p>
            <p>・喜樂充盈（<span className="italic">perisseia</span>）：患難非但未撲滅喜樂，反而使其滿溢</p>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        {/* Right: Overflowing Generosity */}
        <div className="flex-1 rounded-2xl bg-amber-50/95 dark:bg-amber-950/35 border-2 border-amber-400 dark:border-amber-600 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/70 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
            天國算術右端（8:2c–4）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            湧流出慷慨的富足與苦苦哀求有份
          </p>
          <p className="text-xs font-serif italic font-semibold text-amber-700 dark:text-amber-300 break-words">
            eperisseusen eis to ploutos tēs haplotētos autōn
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・屬性屬格（<span className="italic">tēs haplotētos</span>）：心無二用之單純真誠化為奢華慷慨</p>
            <p>・按力量更超過力量（<span className="italic">para dynamin</span>），完全自發主動（<span className="italic">authairetoi</span>）</p>
            <p>・再三懇求（<span className="italic">deomenoi</span>）准許參與服事聖徒的恩典（<span className="italic">charis</span>）與團契（<span className="italic">koinōnia</span>）</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Bottom Root Box (8:5) */}
      <div className="rounded-2xl bg-fuchsia-50/90 dark:bg-purple-950/50 border-2 border-purple-500 dark:border-purple-500 p-4 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            標記性受詞前置核心（8:5）
          </span>
          <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
            「他們自己！」先獻給了主，又照神旨意獻給我們
          </span>
        </div>
        <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
          all&apos; heautous edōkan prōton tō kyriō kai hēmin dia thelēmatos theou
        </p>
        <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          <p>・受詞前置（<span className="italic">heautous</span>）＋ 延遲主句動詞（<span className="italic">edōkan</span>）：獻上的首要祭物不是金錢，而是全人主權</p>
          <p>・優先次序副詞（<span className="italic">prōton</span>）：垂直向主委身是一切水平聖徒相通與順服使徒職事的根本源頭</p>
        </div>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
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

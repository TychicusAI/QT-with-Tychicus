"use client";

import React from "react";
import { Sparkles, ArrowRight, ArrowDown } from "lucide-react";

export function ChristologicalExchangePivotChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜基督「富足成貧窮」的救贖大交換與交叉結構核心（林後 8:6–9）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Christological Chiasm Pivot
        </span>
      </div>

      {/* Top Box (8:6–8) */}
      <div className="rounded-2xl bg-stone-50/95 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 p-4 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            勸勉與試驗真愛（8:6–8）
          </span>
          <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
            在信心、口才、知識上富足 ➔ 更當在這施予的恩典上富足
          </span>
        </div>
        <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
          ou kat&apos; epitagēn legō, alla ... to tēs hymeteras agapēs gnēsion dokimazōn
        </p>
        <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          ・非律法命令（<span className="italic">epitagē</span>），乃藉馬其頓人的熱心檢驗哥林多人愛心的純正血統（<span className="italic">to gnēsion</span>）
        </p>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Center Pivot Header Box (8:9a) */}
      <div className="rounded-2xl bg-fuchsia-50/90 dark:bg-purple-950/50 border-2 border-purple-500 p-4 space-y-1.5 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            全章結構樞紐（8:9a γάρ）
          </span>
          <span className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
            因為你們知道我們主耶穌基督的恩典
          </span>
        </div>
        <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
          ginōskete gar tēn charin tou kyriou hēmōn Iēsou Christou
        </p>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Bottom Wonderful Exchange */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {/* Left: Christ's Self-Impoverishment */}
        <div className="flex-1 rounded-2xl bg-purple-50/90 dark:bg-purple-950/35 border border-purple-400 dark:border-purple-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            基督的降卑致貧（8:9b）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            祂本來富足，卻「為了你們」成了貧窮
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            hoti di&apos; hymas eptōcheusen plousios ōn
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・現在分詞（<span className="italic">plousios ōn</span>）：永恆先存的神性榮耀與天上豐富</p>
            <p>・新約孤立詞（<span className="italic">eptōcheusen</span>）：起始性不定過去式，道成肉身至十架死地</p>
            <p>・前置聚光燈（<span className="italic">di&apos; hymas</span>）：「正是為了你們！」甘願傾倒一切</p>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        {/* Right: Believers' Eschatological Enrichment */}
        <div className="flex-1 rounded-2xl bg-emerald-50/95 dark:bg-emerald-950/35 border-2 border-emerald-500 dark:border-emerald-600 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-900/70 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">
            信徒的救贖富足（8:9c）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            好叫「你們」因祂的貧窮，可以成為富足
          </p>
          <p className="text-xs font-serif italic font-semibold text-emerald-700 dark:text-emerald-300 break-words">
            hina hymeis tē ekeinou ptōcheia ploutēsēte
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・強調主詞（<span className="italic">hymeis</span>）與遠指代名詞（<span className="italic">ekeinou</span>）的正面交鋒</p>
            <p>・起始性不定過去式（<span className="italic">ploutēsēte</span>）：進入罪得赦免與神兒女的永恆富足</p>
            <p>・呼應 5:21「無罪替我們成為罪，使我們成為神的義」之奇妙交換</p>
          </div>
        </div>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">雙重代名詞前置：</span>
          <span>為了你們（<em>di&apos; hymas</em>）➔ 好叫你們（<em>hina hymeis</em>）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          駁斥成功神學：基督的貧窮換取的是救恩與慷慨生命，而非物質暴富
        </div>
      </div>
    </figure>
  );
}

"use client";

import React from "react";
import { Sparkles, ArrowRight, ArrowDown } from "lucide-react";

export function TwoSorrowsDiscourseChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜兩種憂愁的神學分流與終極結局（林後 7:8–10）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Discourse Topology
        </span>
      </div>

      {/* Origin Node */}
      <div className="rounded-2xl bg-slate-50/95 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 p-4 space-y-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
            起點・刺痛
          </span>
          <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
            神聖真理的刺痛
          </span>
          <span className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
            lypē pros hōran
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-xs text-stone-700 dark:text-stone-300 pt-1">
          <p>・流淚之信的嚴正管教（7:8）</p>
          <p>・受神主權限制的短暫陣痛</p>
          <p>・使徒短暫心疼後悔（<span className="italic">metemelomēn</span>）</p>
        </div>
      </div>

      {/* Two Diverging Tracks */}
      <div className="space-y-3">
        {/* Track A: Godly Sorrow -> Salvation */}
        <div className="rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-800/60 p-3 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
              分流 A：朝向上帝
            </span>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            <div className="flex-1 rounded-2xl bg-purple-50/90 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-700 p-4 space-y-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200">
                依神憂愁
              </span>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
                依著神的意思憂愁
              </p>
              <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
                hē kata theon lypē
              </p>
              <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 pt-1">
                <p>・眼目朝向上帝，看見得罪至聖天父</p>
                <p>・大衛痛悔（詩 51「惟獨得罪了祢」）</p>
                <p>・神掌管手術刀，對靈魂零虧損</p>
              </div>
            </div>

            <div className="flex items-center justify-center shrink-0 text-purple-600 dark:text-purple-400">
              <ArrowRight className="hidden lg:block w-5 h-5" />
              <ArrowDown className="lg:hidden w-5 h-5" />
            </div>

            <div className="flex-1 rounded-2xl bg-fuchsia-50/90 dark:bg-purple-950/55 border-2 border-purple-400 dark:border-purple-500 p-4 space-y-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-600 text-white">
                終極救恩
              </span>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
                生出真悔改・以致得救
              </p>
              <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
                metanoian eis sōtērian
              </p>
              <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 pt-1">
                <p>・<span className="italic">metanoia</span>：全人意志向神 180° 轉向</p>
                <p>・生出七級悔改行動瀑布（7:11）</p>
                <p>・無可後悔（<span className="italic">ametamelētos</span>）的終末榮耀</p>
              </div>
            </div>
          </div>
        </div>

        {/* Track B: Worldly Sorrow -> Death */}
        <div className="rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-800/60 p-3 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-900/70 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-700">
              分流 B：朝向自我
            </span>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            <div className="flex-1 rounded-2xl bg-rose-50/90 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-700 p-4 space-y-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-900/70 text-rose-800 dark:text-rose-200">
                世俗憂愁
              </span>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
                屬乎這世界的憂愁
              </p>
              <p className="text-xs font-serif italic font-semibold text-rose-700 dark:text-rose-300">
                hē tou kosmou lypē
              </p>
              <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 pt-1">
                <p>・眼目死盯自我、面子、利益與名聲</p>
                <p>・驕傲與自憐：害怕東窗事發</p>
                <p>・金口若望：將神完全排除在視野外</p>
              </div>
            </div>

            <div className="flex items-center justify-center shrink-0 text-rose-600 dark:text-rose-400">
              <ArrowRight className="hidden lg:block w-5 h-5" />
              <ArrowDown className="lg:hidden w-5 h-5" />
            </div>

            <div className="flex-1 rounded-2xl bg-rose-50/95 dark:bg-rose-950/55 border-2 border-rose-400 dark:border-rose-500 p-4 space-y-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-600 text-white">
                徹底滅亡
              </span>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
                停留在懊惱・製造死亡
              </p>
              <p className="text-xs font-serif italic font-semibold text-rose-700 dark:text-rose-300">
                thanaton katergazetai
              </p>
              <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 pt-1">
                <p>・<span className="italic">metamelomai</span>：純情緒遺憾，無歸向</p>
                <p>・猶大賣主後悔卻上吊（太 27:3）</p>
                <p>・推向自我控告、苦毒與靈性永死</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
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

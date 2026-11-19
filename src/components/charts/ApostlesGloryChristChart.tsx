"use client";

import React from "react";
import { Sparkles, ArrowDown } from "lucide-react";

export function ApostlesGloryChristChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜「眾教會的使者、基督的榮耀」與公開顯明愛心明證（林後 8:22–24）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Apostolic Authorization &amp; Public Proof
        </span>
      </div>

      {/* Top Two Symmetric Authorizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Titus */}
        <div className="rounded-2xl bg-purple-50/90 dark:bg-purple-950/35 border border-purple-300 dark:border-purple-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            對稱授權公式一（8:23a）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            論到提多：我的夥伴，且為你們與我同工
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            Eite hyper Titou, koinōnos emos kai eis hymas synergos
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・共享團契者（<span className="italic">koinōnos emos</span>）：與使徒保羅生命與異象完全合一</p>
            <p>・為你們的同工（<span className="italic">eis hymas synergos</span>）：一切勞苦皆以造就哥林多人為目標</p>
            <p>・接待提多即是接待使徒保羅本人的職事權柄</p>
          </div>
        </div>

        {/* Two Tested Brothers */}
        <div className="rounded-2xl bg-fuchsia-50/90 dark:bg-purple-950/50 border-2 border-purple-400 dark:border-purple-600 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            對稱授權公式二（8:22, 23b）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            論到眾弟兄：眾教會的使者，基督的榮耀！
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            eite adelphoi hēmōn, apostoloi ekklēsiōn, doxa Christou
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・屢經試驗（<span className="italic">edokimasamen en pollois pollakis</span>）：歲月實戰淬煉的忠心</p>
            <p>・眾教會的使者（<span className="italic">apostoloi ekklēsiōn</span>）：受眾教會正式差遣之全權代表</p>
            <p>・基督的榮耀（<span className="italic">doxa Christou</span>）：無名僕人的品格折射出基督救贖榮光（3:18）</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Bottom Climax Box (8:24) */}
      <div className="rounded-2xl bg-amber-50/95 dark:bg-amber-950/35 border-2 border-amber-400 dark:border-amber-600 p-4 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/70 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
            全章收束與受詞前置（8:24 οὖν）
          </span>
          <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
            在眾教會的臉面前，顯明你們愛心與我們誇口的憑據！
          </span>
        </div>
        <p className="text-xs font-serif italic font-semibold text-amber-700 dark:text-amber-300 break-words">
          Tēn oun endeixin tēs agapēs hymōn ... endeiknymenoi eis prosōpon tōn ekklēsiōn
        </p>
        <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          <p>・分詞命令式（<span className="italic">endeiknymenoi</span>）：承接 8:8「試驗愛心的真誠」，將內在愛心化為不可辯駁的公開明證（<span className="italic">endeixis</span>）</p>
          <p>・印證使徒誇口（<span className="italic">hēmōn kauchēseōs</span>）：使保羅在馬其頓眾教會前對哥林多人的信心（7:14; 9:2）得著榮耀印證</p>
          <p>・公開劇場（<span className="italic">eis prosōpon tōn ekklēsiōn</span>）：突破地方堂會本位主義，在普世眾教會注視下見證基督身體的合一</p>
        </div>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
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

"use client";

import React from "react";
import { Sparkles, ArrowDown } from "lucide-react";

export function DualIntegrityStewardshipChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜跨教會護款代表團與「主前人前雙重光明」防弊架構（林後 8:16–21）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Ecclesial Accountability &amp; Prov 3:4 LXX
        </span>
      </div>

      {/* Top Two Delegates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Titus */}
        <div className="rounded-2xl bg-purple-50/90 dark:bg-purple-950/35 border border-purple-300 dark:border-purple-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            使徒代表：提多（8:16–17）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            神將同樣的殷勤放入心中，自願熱切動身
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            tēn autēn spoudēn ... spoudaioteros de hyparchōn authairetos
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・感恩起首（<span className="italic">Charis de tō theō</span>）：連同工的熱誠也是神主權的恩賜</p>
            <p>・自發主動（<span className="italic">authairetos</span>）：呼應 8:3 馬其頓人，非被強派乃甘心前往</p>
            <p>・書信不定過去式（<span className="italic">exēlthen</span>）：讀信之時提多已站在哥林多人面前</p>
          </div>
        </div>

        {/* Famous Brother Elected by Churches */}
        <div className="rounded-2xl bg-purple-50/90 dark:bg-purple-950/35 border border-purple-300 dark:border-purple-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            眾教會公選代表（8:18–19）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            在福音工作享譽眾教會、經公開推選同行
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            cheirotonētheis hypo tōn ekklēsiōn synodēmos hēmōn
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・普世聲譽：在傳揚福音事工上得眾教會一致稱讚（<span className="italic">epainos</span>）</p>
            <p>・公開票選（<span className="italic">cheirotonētheis</span>）：由捐款教會正式舉手推選，非保羅私黨</p>
            <p>・雙重目的：為榮耀主自己（<span className="italic">pros tēn autou tou kyriou doxan</span>）並顯明甘心</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Middle Shield Box (8:20) */}
      <div className="rounded-2xl bg-fuchsia-50/90 dark:bg-purple-950/50 border-2 border-purple-500 p-4 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            制度性防弊核心（8:20）
          </span>
          <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
            謹慎收帆防備，免得有人在這筆豐厚巨款上挑毛病
          </span>
        </div>
        <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
          stellomenoi touto, mē tis hēmas mōmēsētai en tē hadrotēti tautē
        </p>
        <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          ・航海隱喻（<span className="italic">stellomenoi</span>）：如水手見暗礁收縮船帆；新約孤立詞「巨款（<span className="italic">hadrotēs</span>）」絕不單獨私下經手
        </p>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Bottom Canonical Wisdom Box (8:21) */}
      <div className="rounded-2xl bg-amber-50/95 dark:bg-amber-950/35 border-2 border-amber-400 dark:border-amber-600 p-4 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/70 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
            雙重空間問責（8:21 暗引箴 3:4）
          </span>
          <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
            留心行光明美善的事：不但在主面前，也在人面前！
          </span>
        </div>
        <p className="text-xs font-serif italic font-semibold text-amber-700 dark:text-amber-300 break-words">
          pronooumen gar kala ou monon enōpion kyriou alla kai enōpion anthrōpōn
        </p>
        <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          ・駁斥「只要神知道我清白就好」的屬靈傲慢：公開透明的財務問責正是捍衛福音公信力的城牆
        </p>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">雙重空間指示語：</span>
          <span>在主面前（<em>enōpion kyriou</em>）＋ 在人面前（<em>enōpion anthrōpōn</em>）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          正典互文：七十士譯本箴言 3:4（亦見於羅馬書 12:17）
        </div>
      </div>
    </figure>
  );
}

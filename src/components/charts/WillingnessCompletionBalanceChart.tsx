"use client";

import React from "react";
import { Sparkles, ArrowRight, ArrowDown } from "lucide-react";

export function WillingnessCompletionBalanceChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜從「去年願作」到「如今辦成」的體貌天平與蒙悅納法則（林後 8:10–12）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Aspectual Alignment &amp; Proportionality
        </span>
      </div>

      {/* Balance Pans */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {/* Left Pan */}
        <div className="flex-1 rounded-2xl bg-purple-50/90 dark:bg-purple-950/35 border border-purple-300 dark:border-purple-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            天平左端：從去年起（8:10）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            先起了熱切願作的心（現在不定詞）
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            apo perysi ... kathaper hē prothymia tou thelein
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・時間座標（<span className="italic">apo perysi</span>）：一年前（林前 16:1–4）即率先開頭</p>
            <p>・逆向強調（<span className="italic">ou monon to poiēsai alla kai to thelein</span>）：不僅外在啟動行動，內心更充滿自發躍躍欲試的熱忱（<span className="italic">prothymia</span>）</p>
            <p>・危機：若僅停留在「持續想做（<span className="italic">tou thelein</span>）」，將淪為屬靈爛尾樓</p>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-purple-600 dark:text-purple-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        {/* Right Pan */}
        <div className="flex-1 rounded-2xl bg-fuchsia-50/90 dark:bg-purple-950/50 border-2 border-purple-500 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            天平右端：但如今！（8:11）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            照你們所有的去徹底辦成（不定過去式）
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            nyni de ... houtōs kai to epitelesai ek tou echein
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・時間轉折（<span className="italic">nyni de</span>）：和解既已成就，當下即是完工時刻</p>
            <p>・外在整體體貌（<span className="italic">epitelesate / to epitelesai</span>）：果斷徹底完成善工</p>
            <p>・天平對齊句式（<span className="italic">kathaper ... houtōs kai</span>）：讓實際完工配得上起初熱忱</p>
            <p>・現實衡量基準（<span className="italic">ek tou echein</span>）：從現有資源出發，非強人所難</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Bottom Foundation (8:12) */}
      <div className="rounded-2xl bg-stone-50/95 dark:bg-slate-800/80 border-2 border-slate-400/80 dark:border-slate-600 p-4 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            預先糾正與蒙悅納法則（8:12）
          </span>
          <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
            人若有願作的心，必照他所有的蒙悅納
          </span>
        </div>
        <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
          ei gar hē prothymia prokeitai, katho ean echē euprosdektos, ou katho ouk echei
        </p>
        <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          <p>・前提條件（<span className="italic">ei hē prothymia prokeitai</span>）：甘心樂意的熱切心態已經擺在神面前</p>
          <p>・正反平行裁決：極蒙悅納（<span className="italic">euprosdektos</span>）乃「照他所擁有的（<span className="italic">katho ean echē</span>）」，絕非「照他所沒有的（<span className="italic">ou katho ouk echei</span>）」</p>
          <p>・牧養釋放：消除「等我像富豪一樣有錢再奉獻」的完美主義藉口，亦解除「被榨乾」的恐懼</p>
        </div>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">動詞體貌對比：</span>
          <span>持續想做的心願（現在式 <em>tou thelein</em>）vs. 徹底完成的行動（不定過去式 <em>to epitelesai</em>）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          恩典比例原則：神看重甘心與現有比例，不看絕對金額大小
        </div>
      </div>
    </figure>
  );
}

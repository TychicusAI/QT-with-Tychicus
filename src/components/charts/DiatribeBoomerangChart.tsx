"use client";

import React from "react";
import { Sparkles, ArrowRight, ArrowDown } from "lucide-react";

export function DiatribeBoomerangChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜假想辯論的人稱突襲與迴力鏢定罪機制（羅 2:1–3）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Diatribe &amp; Deictic Shift
        </span>
      </div>

      {/* Top Row: Step 1 -> Step 2 -> Step 3 */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {/* Node 1 */}
        <div className="flex-1 rounded-2xl bg-slate-50/95 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            第三人稱複數・他們
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            外邦罪惡清單與無可推諉
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            autous anapologētous (1:20)
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・1:18–32 控訴壓抑真理與拜偶像</p>
            <p>・1:32 明知神判定行這事的人當死</p>
            <p>・旁觀者在看台上點頭定「他們」死罪</p>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-purple-600 dark:text-purple-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        {/* Node 2 */}
        <div className="flex-1 rounded-2xl bg-purple-50/95 dark:bg-purple-950/40 border-2 border-purple-400 dark:border-purple-600 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            第二人稱單數・突襲
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            拿單式轉身：你這論斷人的！
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            Dio anapologētos ei, ō anthrōpe
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・推論詞 <span className="italic">Dio</span> 鉤連 1:20 無可推諉</p>
            <p>・頓呼法（Apostrophe）揪住假想對話者</p>
            <p>・能精準論斷他人，證明深知神標準</p>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-rose-600 dark:text-rose-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        {/* Node 3 */}
        <div className="flex-1 rounded-2xl bg-rose-50/95 dark:bg-rose-950/40 border-2 border-rose-400 dark:border-rose-600 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-900/70 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-700">
            迴力鏢定罪效應
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            論斷他人 ＝ 定自己的罪
          </p>
          <p className="text-xs font-serif italic font-semibold text-rose-700 dark:text-rose-300 break-words">
            krineis ... seauton katakrineis
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・受詞前置：定「你自己」的罪</p>
            <p>・升級強化：從論斷（<span className="italic">krinō</span>）到定罪</p>
            <p>・因為你正持續行「同樣的事」（<span className="italic">ta auta</span>）</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-rose-600 dark:text-rose-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Bottom Wide Hinge Box: 2:2-3 */}
      <div className="rounded-2xl bg-fuchsia-50/90 dark:bg-purple-950/50 border-2 border-purple-400 dark:border-purple-600 p-4 space-y-2">
        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
          終極法庭公理（2:2–3）
        </span>
        <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
          神按真理審判 vs. 自義者「唯獨我能逃脫」的妄想算計
        </p>
        <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
          to krima tou theou estin kata alētheian ... logizē hoti sy ekpheuxē;
        </p>
        <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          <p>・包含式複數「我們知道」（<span className="italic">Oidamen de</span>）：援引猶太與基督徒共認公理——神的審判完全按真實實況（<span className="italic">kata alētheian</span>）</p>
          <p>・修辭詰問與強調主格代名詞「唯獨你」（<span className="italic">sy</span>）：粉碎依靠族裔身分或道德口號即可豁免審判的雙重標準</p>
        </div>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">關鍵修辭機制：</span>
          <span>第三人稱「他們」（1:18–32）➔ 第二人稱「你這人哪」（2:1–3）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          無可推諉（<em>anapologētos</em>）的首尾雙重鎖定
        </div>
      </div>
    </figure>
  );
}

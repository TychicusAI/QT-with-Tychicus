"use client";

import React from "react";
import { Sparkles, ArrowDown } from "lucide-react";

export function LawHearingDoingChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜有無律法的雙軌定罪與「聽行律法」的反義格言（羅 2:11–13）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Gar-Chain &amp; Parallelism
        </span>
      </div>

      {/* Top Box: 2:11 Principle */}
      <div className="rounded-2xl bg-slate-50/95 dark:bg-slate-800/80 border-2 border-slate-400/80 dark:border-slate-600 p-4 space-y-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            第一級 γάρ（2:11）
          </span>
          <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
            神學大前提：因為在神面前，並沒有偏待人的事
          </span>
        </div>
        <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
          ou gar estin prosōpolēmpsia para tō theō
        </p>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Middle Dual Tracks: 2:12a & 2:12b */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-rose-50/90 dark:bg-rose-950/35 border border-rose-300 dark:border-rose-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-900/70 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-700">
            第二級 γάρ：外邦軌跡（2:12a）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            凡沒有律法犯了罪的，也必不按律法滅亡
          </p>
          <p className="text-xs font-serif italic font-semibold text-rose-700 dark:text-rose-300 break-words">
            Hosoi gar anomōs hēmarton, anomōs kai apollountai
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・保羅獨有副詞 <span className="italic">anomōs</span>：處於摩西成文妥拉之外</p>
            <p>・概括性不定過去式 <span className="italic">hēmarton</span> ➔ 未來式滅亡（<span className="italic">apollountai</span>）</p>
          </div>
        </div>

        <div className="rounded-2xl bg-rose-50/95 dark:bg-rose-950/50 border border-rose-400 dark:border-rose-600 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-900/70 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-700">
            第二級 γάρ：猶太軌跡（2:12b）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            凡在律法以下犯了罪的，也必按律法受審判
          </p>
          <p className="text-xs font-serif italic font-semibold text-rose-700 dark:text-rose-300 break-words">
            kai hosoi en nomō hēmarton, dia nomou krithēsontai
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・在律法領域內（<span className="italic">en nomō</span>）犯罪，毫無豁免特權</p>
            <p>・反而必藉著律法標準（<span className="italic">dia nomou</span>）被定罪受審</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Bottom Hinge Box: 2:13 */}
      <div className="rounded-2xl bg-purple-50/95 dark:bg-purple-950/50 border-2 border-purple-500 p-4 space-y-2">
        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
          第三級 γάρ：核心律法公理（2:13）
        </span>
        <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
          因為在神面前，不是「聽律法的」為義，乃是「行律法的」將被稱義！
        </p>
        <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
          ou gar hoi akroatai nomou dikaioi para tō theō, all hoi poiētai nomou dikaiōthēsontai
        </p>
        <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          <p>・擊碎猶太會堂特權迷思：每週安息日「聆聽妥拉誦讀」（<span className="italic">akroatai nomou</span>）絕不等於在神面前得稱為義</p>
          <p>・神聖被動未來式「將被宣判為義」（<span className="italic">dikaiōthēsontai</span>）：指向末日法庭，將無力自救的聽道者逼向基督十架</p>
        </div>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">聽覺押韻對偶：</span>
          <span>聽律法者（<em>hoi akroatai nomou</em>）vs. 行律法者（<em>hoi poiētai nomou</em>）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          在神面前（<em>para tō theō</em>，2:11, 13 雙重法庭空間定位）
        </div>
      </div>
    </figure>
  );
}

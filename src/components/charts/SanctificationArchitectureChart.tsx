"use client";

import React from "react";
import { Sparkles, ArrowUp } from "lucide-react";

export function SanctificationArchitectureChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜聖約應許根基與全人除污成聖進程（林後 7:1）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Syntax &amp; Sanctification
        </span>
      </div>

      {/* Row 1: Dual Aspects of Sanctification (Top) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* 1A: Decisive Cleansing */}
        <div className="rounded-2xl bg-blue-50/90 dark:bg-blue-950/35 border border-blue-300 dark:border-blue-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">
            果斷決裂・消極除污
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            就當潔淨自己（<span className="italic">katharisōmen heautous</span>）
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
            不定過去主動假設語氣（外在整體體貌 Perfective）
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・新約孤立詞「污穢」（<span className="italic">molysmos</span>）：偶像玷污深層染色</p>
            <p>・人類學總括法（<span className="italic">merism</span>）：「肉體與心靈一切污穢」</p>
          </div>
        </div>

        {/* 1B: Continuous Maturation */}
        <div className="rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/35 border border-emerald-300 dark:border-emerald-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white">
            持續進程・積極成聖
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            持續使聖潔完全（<span className="italic">epitelountes hagiosynēn</span>）
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
            現在主動分詞（內在持續體貌 Imperfective）
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・專有名詞 <span className="italic">hagiosynē</span>：一生之久培育完全聖潔生命品質</p>
            <p>・正典結 36:25–27：神灑清水洗淨與賜新靈之聖約應驗</p>
          </div>
        </div>
      </div>

      {/* Row 2: Atmosphere Badge & Upward Arrows */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center gap-12 text-purple-600 dark:text-purple-400">
          <ArrowUp className="w-5 h-5 text-blue-500" />
          <div className="px-4 py-1.5 rounded-full bg-fuchsia-50 dark:bg-purple-950/60 border border-purple-300 dark:border-purple-600 text-xs sm:text-sm font-serif italic font-semibold text-purple-800 dark:text-purple-200 text-center">
            盟約氛圍：存著敬畏神的心（en phobō theou）
          </div>
          <ArrowUp className="w-5 h-5 text-emerald-500" />
        </div>
      </div>

      {/* Row 3: Inferential Hinge */}
      <div className="rounded-2xl bg-slate-50/95 dark:bg-indigo-950/60 border-2 border-purple-500 px-4 py-3 text-center">
        <p className="text-xs sm:text-sm font-bold text-purple-700 dark:text-purple-300">
          推論門軸：既然持續擁有應許（<span className="italic">echontes</span>）➔ 所以（<span className="italic">oun</span>）就當自潔！
        </p>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowUp className="w-5 h-5" />
      </div>

      {/* Row 4: Covenant Indicative Foundation */}
      <div className="rounded-2xl bg-purple-100/80 dark:bg-purple-950/50 border-2 border-purple-400 dark:border-purple-600 p-4 space-y-2">
        <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold bg-purple-700 text-white">
          指示語氣・聖約基石
        </span>
        <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
          「這等應許」前置超越修辭（<span className="italic">Tautas ... tas epangelias</span>）
        </p>
        <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
          林後 6:16–18 七重聖約珠串（利 26:12；結 37:27；賽 52:11；撒下 7:14）
        </p>
        <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          「我要在他們中間居住來往；我要作他們的神，他們要作我的子民……我要作你們的父，你們要作我的兒女。」
        </p>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">神學鐵律：</span>
          <span>指示語氣恩典（Indicative）先於並驅動命令語氣成聖（Imperative）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          果斷斬斷罪污（不定過去式）＋ 持續臻至完全（現在分詞）
        </div>
      </div>
    </figure>
  );
}

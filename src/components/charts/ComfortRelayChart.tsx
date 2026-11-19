"use client";

import React from "react";
import { Sparkles, ArrowRight, ArrowDown } from "lucide-react";

export function ComfortRelayChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜遠距鉤連行旅與神聖安慰三重流轉網絡（林後 7:5–7）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Relay Network
        </span>
      </div>

      {/* Top Row: Distant Hook 2:12-13 -> 7:5 */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        <div className="flex-1 rounded-2xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 p-4 space-y-1.5">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-600 text-white">
            2:12–13 特羅亞
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            心靈沒有安寧（<span className="italic">anesis</span>）
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
            因為沒有遇見兄弟提多
          </p>
          <p className="text-xs text-stone-600 dark:text-stone-300">
            便辭別那裡的人往馬其頓去
          </p>
        </div>

        <div className="flex lg:flex-col items-center justify-center gap-1 shrink-0 text-sky-600 dark:text-sky-400">
          <span className="text-xs font-bold">跨越 4 章半</span>
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        <div className="flex-1 rounded-2xl bg-rose-50/90 dark:bg-rose-950/35 border border-rose-400 dark:border-rose-700 p-4 space-y-1.5">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-600 text-white">
            7:5 馬其頓行旅
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            肉體毫無安寧（<span className="italic">oudemian anesin</span>）
          </p>
          <p className="text-xs font-serif italic font-semibold text-rose-700 dark:text-rose-300">
            「外有爭戰，內有懼怕」
          </p>
          <p className="text-xs text-stone-600 dark:text-stone-300">
            使徒真實瓦器脆弱性，無安舒妥協
          </p>
        </div>
      </div>

      {/* Turning Point */}
      <div className="flex items-center justify-center gap-2 text-purple-700 dark:text-purple-300">
        <ArrowDown className="w-5 h-5" />
        <span className="text-xs font-bold">然而（<span className="italic">all&apos;</span>）逆轉！</span>
      </div>

      {/* Central God Node (7:6) */}
      <div className="rounded-2xl bg-fuchsia-50/95 dark:bg-purple-950/55 border-2 border-purple-600 dark:border-purple-400 p-4 space-y-1.5">
        <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold bg-purple-700 text-white">
          7:6 神聖安慰源頭
        </span>
        <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
          「那安慰喪氣之人的上帝」（<span className="italic">ho parakalōn tous tapeinous</span>）
        </p>
        <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
          正典以賽亞書 49:13 末世彌賽亞之歌的歷史臨在
        </p>
        <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
          上帝的主權安慰化為肢體同在的接力棒（<span className="italic">en tē parousia Titou</span>）
        </p>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Triadic Relay Flow */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {/* Node 1: Corinth */}
        <div className="flex-1 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/35 border border-emerald-400 dark:border-emerald-700 p-4 space-y-1.5">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white">
            管道一・哥林多教會
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            痛悔與愛意三重回響
          </p>
          <p className="text-xs font-serif italic font-semibold text-emerald-700 dark:text-emerald-300">
            想念・哀慟・為我發的熱心
          </p>
          <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 pt-1">
            <p>・<span className="italic">epipothēsis</span>（切慕想念父親）</p>
            <p>・<span className="italic">odyrmos</span>（為過犯放聲哀痛）</p>
            <p>・<span className="italic">zēlos hyper emou</span>（捍衛使徒熱誠）</p>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        {/* Node 2: Titus */}
        <div className="flex-1 rounded-2xl bg-green-50/90 dark:bg-green-950/35 border border-green-400 dark:border-green-700 p-4 space-y-1.5">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-600 text-white">
            管道二・特使提多
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            提多心靈得著安慰
          </p>
          <p className="text-xs font-serif italic font-semibold text-green-700 dark:text-green-300">
            pareklēthē eph&apos; hymin
          </p>
          <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 pt-1">
            <p>・從焦慮特使化為平安器皿</p>
            <p>・親身同在（<span className="italic">parousia</span>）帶來第一道光</p>
            <p>・向保羅帶回教會復和好消息</p>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-purple-600 dark:text-purple-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        {/* Node 3: Paul */}
        <div className="flex-1 rounded-2xl bg-purple-50/95 dark:bg-purple-950/45 border-2 border-purple-500 p-4 space-y-1.5">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-700 text-white">
            管道三・使徒保羅
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            更加歡喜・雙倍安慰
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
            hōste me mallon charēnai
          </p>
          <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 pt-1">
            <p>・提多的到來 ＋ 教會回轉消息</p>
            <p>・安慰在身體流轉，喜樂幾何倍增</p>
            <p>・應驗 1:3–4 患難中同得安慰總綱</p>
          </div>
        </div>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">安慰機制：</span>
          <span>神聖安慰不憑空懸浮，藉教會痛悔、特使提多與喪氣使徒彼此傳遞倍增</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          駁斥分割論：2:12–13 與 7:5–6 遠距鉤連證明三明治鑲嵌結構完整性
        </div>
      </div>
    </figure>
  );
}

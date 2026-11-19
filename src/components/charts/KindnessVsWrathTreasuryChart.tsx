"use client";

import React from "react";
import { Sparkles, ArrowRight, ArrowDown } from "lucide-react";

export function KindnessVsWrathTreasuryChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜神聖寬容的悔改牽引 vs. 石心積蓄忿怒的終末帳本（羅 2:4–5）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Theological Antithesis
        </span>
      </div>

      {/* Top Track (2:4 Divine Purpose) */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        <div className="flex-1 rounded-2xl bg-purple-50/90 dark:bg-purple-950/35 border border-purple-300 dark:border-purple-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            神聖恩典的豐盛（2:4a）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            豐富的恩慈、寬容（停火期）與恆久忍耐
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            ploutou tēs chrēstotētos kai tēs anochēs kai tēs makrothymias
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・出 34:6 盟約屬性：恩慈良善與長久忍耐不輕易發怒</p>
            <p>・寬容（<span className="italic">anochē</span>）：主權法官暫緩執行死刑的「休戰寬限期」</p>
            <p>・顛覆《所羅門智慧書》15:1–4 將神忍耐當作選民犯罪保護傘</p>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-purple-600 dark:text-purple-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        <div className="flex-1 rounded-2xl bg-fuchsia-50/90 dark:bg-purple-950/50 border-2 border-purple-500 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            恩典的真實目的（2:4b）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            神的恩慈正持續引領你進入真悔改
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            to chrēston tou theou eis metanoian se agei
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・企圖現在式（<span className="italic">agei</span>）：神的仁慈如慈繩愛索持續牽引</p>
            <p>・悔改（<span className="italic">metanoia</span>）：全人心思、價值與效忠方向徹底掉頭</p>
            <p>・給予罪人俯伏求憐憫、逃離終末審判的唯一窗口</p>
          </div>
        </div>
      </div>

      {/* Disruption Divider */}
      <div className="flex items-center justify-center gap-2 py-0.5">
        <ArrowDown className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-900/70 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-700">
          藐視與無知（<span className="italic">kataphroneis / agnoōn</span>）
        </span>
        <ArrowDown className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
      </div>

      {/* Bottom Track (2:5 Human Perversion) */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        <div className="flex-1 rounded-2xl bg-rose-50/90 dark:bg-rose-950/35 border border-rose-300 dark:border-rose-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-900/70 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-700">
            自義者的石心反應（2:5a）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            任著剛硬與不肯悔改的心抗拒恩慈
          </p>
          <p className="text-xs font-serif italic font-semibold text-rose-700 dark:text-rose-300 break-words">
            kata de tēn sklērotēta sou kai ametanoēton kardian
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・剛硬（<span className="italic">sklērotēs</span>）：新約孤立詞，迴響申 9:27 曠野金牛犢頑梗</p>
            <p>・不悔改（<span className="italic">ametanoētos</span>）：與 2:4 悔改（<span className="italic">metanoia</span>）構成語音反諷</p>
            <p>・把神的暫緩降罰誤讀為對自身道德與血統的縱容</p>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-rose-600 dark:text-rose-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        <div className="flex-1 rounded-2xl bg-rose-50/95 dark:bg-rose-950/50 border-2 border-rose-500 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-900/70 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-700">
            反諷的終末寶庫（2:5b）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            在神公義審判顯露之日為自己積蓄忿怒
          </p>
          <p className="text-xs font-serif italic font-semibold text-rose-700 dark:text-rose-300 break-words">
            thēsaurizeis seautō orgēn en hēmera orgēs kai dikaiokrisias
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・苦澀反諷（<span className="italic">thēsaurizō</span>）：自以為存功德，實則每日存入神烈怒</p>
            <p>・顯露（<span className="italic">apokalypsis</span>）：呼應 1:17–18 神的義與忿怒雙重顯明</p>
            <p>・公義審判（<span className="italic">dikaiokrisia</span>）：新約孤立詞，末日連本帶利總清算</p>
          </div>
        </div>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">語音雙關對決：</span>
          <span>領你悔改（<em>metanoia</em>）vs. 不悔改的心（<em>ametanoētos kardia</em>）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          寬容停火期（<em>anochē</em>：羅 2:4 ➔ 羅 3:26 十架挽回祭）
        </div>
      </div>
    </figure>
  );
}

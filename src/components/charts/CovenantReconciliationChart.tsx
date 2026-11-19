"use client";

import React from "react";
import { Sparkles, ArrowDown } from "lucide-react";

export function CovenantReconciliationChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜提多心靈的完成式暢快與盟約互信高峰（林後 7:13–16）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Covenant Summit
        </span>
      </div>

      {/* Triadic Foundations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* 1. Stative Rest */}
        <div className="rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/35 border border-emerald-400 dark:border-emerald-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white">
            狀態完成式・暢快安息
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            提多的心靈已得安息
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            anapepautai to pneuma autou
          </p>
          <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・完成被動直說語氣（狀態結果體貌）</p>
            <p>・字根：將沉重行囊徹底卸下放平</p>
            <p>・從焦慮特使化為享受持久甜美安息</p>
            <p>・因你們眾人而暢快（<span className="italic">apo pantōn hymōn</span>）</p>
            <p>・保羅先前的「誇口」全無落空</p>
          </div>
        </div>

        {/* 2. Splanchna Transformation */}
        <div className="rounded-2xl bg-blue-50/90 dark:bg-blue-950/35 border border-blue-400 dark:border-blue-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">
            解剖學詞彙・心腸轉化
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            提多的心腸更加深厚
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            ta splanchna autou perissoterōs
          </p>
          <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・解剖學詞彙「內臟／心腸」神學軌跡</p>
            <p>・6:12 哥林多人自私狹隘阻塞動脈</p>
            <p>・7:15 提多心靈向教會深情傾注</p>
            <p>・親眼見證全體會眾真摯順服</p>
            <p>・基督身體中牧者與羊群心腸通暢</p>
          </div>
        </div>

        {/* 3. Covenant Fear & Trembling */}
        <div className="rounded-2xl bg-yellow-50/90 dark:bg-amber-950/35 border border-yellow-400 dark:border-amber-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-600 text-white">
            神聖敬畏・戰兢順服
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            恐懼戰兢中的接待
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            meta phobou kai tromou
          </p>
          <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・保羅獨特成語，源自七十士譯本</p>
            <p>・出 15:16 逾越節與賽 19:16 盟約審判</p>
            <p>・林前 2:3 保羅在哥林多同樣戰兢</p>
            <p>・非奴隸畏縮，乃在神聖臨在前的敬畏</p>
            <p>・會眾以對基督的順服接待使徒</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Climax Summit Card */}
      <div className="rounded-2xl bg-fuchsia-50/90 dark:bg-purple-950/55 border-2 border-purple-500 p-4 space-y-2">
        <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold bg-purple-700 text-white">
          第 1–7 章第一大部終極頂峰
        </span>
        <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
          7:16「我如今歡喜，能在凡事上為你們放心！」（<span className="italic">en panti tharrō en hymin</span>）
        </p>
        <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
          首尾呼應（Inclusio）：7:4「放膽誇口」➔ 7:16「凡事放心」，完成撕裂到復和的壯麗凱歌
        </p>
        <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          使徒不再被防備為貪婪騙子（7:2），在基督十字架的盟約互信中，為第 8 至 9 章「辦理耶路撒冷貧窮聖徒慈惠捐款」奠定不可動搖的基石！
        </p>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">終末凱歌：</span>
          <span>提多暢快安息 ＋ 心腸深情傾注 ＋ 恐懼戰兢順服 ➔ 成就「凡事放心」的盟約互信</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          神學承接：為林後 8–9 章聖徒捐獻奠定成熟教會之神學與情感基石
        </div>
      </div>
    </figure>
  );
}

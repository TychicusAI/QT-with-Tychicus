"use client";

import React from "react";
import { Sparkles, ArrowLeftRight, ArrowDown } from "lucide-react";

export function MannaEqualityCirculationChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜基督身體的「均平」循環與出埃及記曠野嗎哪互文（林後 8:13–15）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Ecclesial Isotēs &amp; Exodus Manna
        </span>
      </div>

      {/* Reciprocal Circulation Row */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {/* Left: Corinth */}
        <div className="flex-1 rounded-2xl bg-purple-50/90 dark:bg-purple-950/40 border-2 border-purple-400 dark:border-purple-600 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            外邦哥林多教會（8:14a）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            現今的富餘 ➔ 補足他們的不足
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            en tō nyn kairō to hymōn perisseuma
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・關鍵救贖時機（<span className="italic">en tō nyn kairō</span>）：當下擁有的經濟寬裕</p>
            <p>・富餘（<span className="italic">perisseuma</span>）：滿足基本生活所需後的恩典盈餘</p>
            <p>・非叫別人輕省（<span className="italic">anesis</span>）、你們受累（<span className="italic">thlipsis</span>）的不公轉嫁</p>
            <p>・避免將神賜的富餘自私囤積而失去流動生命力</p>
          </div>
        </div>

        {/* Center Isotēs Bridge */}
        <div className="flex lg:flex-col items-center justify-center gap-1.5 shrink-0 py-1 lg:px-1">
          <ArrowLeftRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <div className="px-3 py-1.5 rounded-xl bg-purple-100 dark:bg-purple-900/70 border border-purple-300 dark:border-purple-700 text-center">
            <p className="text-xs font-bold text-purple-800 dark:text-purple-200">均平 (isotēs)</p>
            <p className="text-[11px] font-semibold text-purple-700 dark:text-purple-300">8:13b &amp; 8:14c</p>
          </div>
        </div>

        {/* Right: Jerusalem */}
        <div className="flex-1 rounded-2xl bg-teal-50/90 dark:bg-teal-950/35 border-2 border-teal-500 dark:border-teal-600 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 dark:bg-teal-900/70 text-teal-800 dark:text-teal-200 border border-teal-300 dark:border-teal-700">
            耶路撒冷貧窮聖徒（8:14b）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            他們的富餘 ➔ 補足你們的不足
          </p>
          <p className="text-xs font-serif italic font-semibold text-teal-700 dark:text-teal-300 break-words">
            to ekeinōn perisseuma eis to hymōn hysterēma
          </p>
          <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
            <p>・當下處境：因飢荒與逼迫陷入基本生存缺乏（<span className="italic">hysterēma</span>）</p>
            <p>・雙向互補（A派）：未來若哥林多遇患難，普世肢體必回援</p>
            <p>・異維交換（B派）：猶太母會以救恩根源與切切代禱（9:14）之屬靈富餘，補足外邦教會的屬靈需要（參羅 15:27）</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Bottom Canonical Manna Box (8:15) */}
      <div className="rounded-2xl bg-amber-50/95 dark:bg-amber-950/35 border-2 border-amber-400 dark:border-amber-600 p-4 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/70 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
            新出埃及正典印證（8:15 引出 16:18）
          </span>
          <span className="text-sm font-bold text-stone-900 dark:text-stone-100">
            「那多收的並沒有餘，那少收的也沒有缺」
          </span>
        </div>
        <p className="text-xs font-serif italic font-semibold text-amber-700 dark:text-amber-300 break-words">
          kathōs gegraptai: Ho to poly ouk epleonasen, kai ho to oligon ouk ēlattonēsen
        </p>
        <div className="space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          <p>・微觀詞序重組：保羅將主詞「多收的（<span className="italic">Ho to poly</span>）」前置，與「少收的（<span className="italic">ho to oligon</span>）」構成工整平行</p>
          <p>・出埃及記 16 章語境警告：凡出於貪婪與不信將多餘嗎哪私藏過夜者，隔日必生蟲變臭（出 16:20）</p>
          <p>・救贖歷史成全：昔日神在曠野用神蹟量度俄梅珥達成均平；今日神藉新約肢體甘心分享重現嗎哪神蹟</p>
        </div>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">首尾包夾關鍵詞：</span>
          <span>乃要出於均平（<em>ex isotētos</em>, 8:13）➔ 好叫均平得以成就（<em>hopōs genētai isotēs</em>, 8:14）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          語意防線：<em>isotēs</em> 指基督身體休戚與共的公允互助，非強制齊頭式共產
        </div>
      </div>
    </figure>
  );
}

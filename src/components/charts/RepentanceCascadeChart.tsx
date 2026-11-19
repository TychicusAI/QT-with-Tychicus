"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function RepentanceCascadeChart() {
  const steps = [
    {
      num: "01",
      title: "何等的殷勤",
      greek: "posēn spoudēn",
      scope: "總綱領頭",
      desc: "告別冷漠袖手旁觀，展現極度認真、迫切委身與火熱行動力",
      badgeClass: "bg-purple-600",
      indent: "",
    },
    {
      num: "02",
      title: "更有何等的自訴",
      greek: "alla apologian",
      scope: "面對過去",
      desc: "向提多坦誠自白申訴，洗刷蓄意與冒犯者同謀背叛的嫌疑",
      badgeClass: "bg-blue-600",
      indent: "sm:ml-3",
    },
    {
      num: "03",
      title: "更有何等的義憤",
      greek: "alla aganaktēsis",
      scope: "面對過去",
      desc: "新約孤立詞：對冒犯使徒之狂妄深惡痛絕，為先前懦弱姑息自責",
      badgeClass: "bg-rose-600",
      indent: "sm:ml-6",
    },
    {
      num: "04",
      title: "更有何等的敬畏",
      greek: "alla phobon",
      scope: "面對使徒與神",
      desc: "意識到輕慢基督使徒即是得罪上帝，生發戒慎恐懼的神聖敬畏",
      badgeClass: "bg-amber-600",
      indent: "sm:ml-9",
    },
    {
      num: "05",
      title: "更有何等的想念",
      greek: "alla epipothēsin",
      scope: "面對使徒與神",
      desc: "如兒女渴望重見父親，心靈深處迫切渴望與保羅重新擁抱和好",
      badgeClass: "bg-emerald-600",
      indent: "sm:ml-12",
    },
    {
      num: "06",
      title: "更有何等的熱心",
      greek: "alla zēlon",
      scope: "落實公義",
      desc: "從冷眼旁觀徹底逆轉，挺身捍衛保羅使徒權柄的火熱忠誠委身",
      badgeClass: "bg-indigo-600",
      indent: "sm:ml-14",
    },
    {
      num: "07",
      title: "更有何等的懲治",
      greek: "alla ekdikēsin",
      scope: "落實公義",
      desc: "付諸具體紀律裁決（受多數人的責罰），徹底捍衛教會聖潔見證",
      badgeClass: "bg-violet-600",
      indent: "sm:ml-16",
    },
  ];

  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜六重遞進連接詞催生的七級悔改瀑布（林後 7:11–12）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Ascensive Cascade
        </span>
      </div>

      {/* Top Engine Banner */}
      <div className="rounded-2xl bg-fuchsia-50/90 dark:bg-purple-950/50 border-2 border-purple-400 dark:border-purple-600 px-4 py-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
          動態引擎：看哪！依神憂愁在你們裡面徹底產生了（<span className="italic">idou gar ... kateirgasato hymin</span>）
        </p>
        <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
          修辭奇觀：6 個強勢「不僅如此更有！」(alla) 階梯遞進
        </p>
      </div>

      {/* 7 Cascading Step Rows */}
      <div className="space-y-2">
        {steps.map((st) => (
          <div
            key={st.num}
            className={`${st.indent} rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center gap-2 shadow-xs`}
          >
            <div className="flex items-center gap-2 shrink-0">
              <span className={`${st.badgeClass} text-white text-xs font-bold px-2.5 py-0.5 rounded-full`}>
                {st.num}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                {st.scope}
              </span>
              <span className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
                {st.title}
              </span>
              <span className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300">
                ({st.greek})
              </span>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed sm:ml-auto sm:text-right">
              {st.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Verdict Base */}
      <div className="rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/40 border-2 border-emerald-400 dark:border-emerald-700 p-4 space-y-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white">
            法庭無罪宣判
          </span>
          <span className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
            「在凡事上，你們都推薦／證明自己是純潔無辜的了」（<span className="italic">synestēsate heautous hagnous einai</span>）
          </span>
        </div>
        <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
          7:12 牧養意圖：閃族相對否定修辭（不是為虧負人的，不是為受虧負的）➔「要在神面前把你們對我們的熱誠，向你們自己顯明出來！」（<span className="italic">pros hymas enōpion tou theou</span>）
        </p>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">修辭爆發力：</span>
          <span>連詞疊加與階梯遞進（Polysyndeton &amp; Ascensive Climax）將真悔改化為看得見的行動風暴</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          神聖光照鏡像：在神面前向信徒自己顯明深藏於冷漠面具下的真實熱誠
        </div>
      </div>
    </figure>
  );
}

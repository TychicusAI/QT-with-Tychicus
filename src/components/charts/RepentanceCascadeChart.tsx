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
      badgeColor: "#7c3aed",
    },
    {
      num: "02",
      title: "更有何等的自訴",
      greek: "alla apologian",
      scope: "面對過去",
      desc: "向提多坦誠自白申訴，洗刷蓄意與冒犯者同謀背叛的嫌疑",
      badgeColor: "#2563eb",
    },
    {
      num: "03",
      title: "更有何等的義憤",
      greek: "alla aganaktēsis",
      scope: "面對過去",
      desc: "新約孤立詞：對冒犯使徒之狂妄深惡痛絕，為先前懦弱姑息自責",
      badgeColor: "#e11d48",
    },
    {
      num: "04",
      title: "更有何等的敬畏",
      greek: "alla phobon",
      scope: "面對使徒與神",
      desc: "意識到輕慢基督使徒即是得罪上帝，生發戒慎恐懼的神聖敬畏",
      badgeColor: "#d97706",
    },
    {
      num: "05",
      title: "更有何等的想念",
      greek: "alla epipothēsin",
      scope: "面對使徒與神",
      desc: "如兒女渴望重見父親，心靈深處迫切渴望與保羅重新擁抱和好",
      badgeColor: "#059669",
    },
    {
      num: "06",
      title: "更有何等的熱心",
      greek: "alla zēlon",
      scope: "落實公義",
      desc: "從冷眼旁觀徹底逆轉，挺身捍衛保羅使徒權柄的火熱忠誠委身",
      badgeColor: "#4f46e5",
    },
    {
      num: "07",
      title: "更有何等的懲治",
      greek: "alla ekdikēsin",
      scope: "落實公義",
      desc: "付諸具體紀律裁決（受多數人的責罰），徹底捍衛教會聖潔見證",
      badgeColor: "#9333ea",
    },
  ];

  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜六重遞進連接詞催生的七級悔改瀑布（林後 7:11–12）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Ascensive Cascade
        </span>
      </div>

      {/* Canvas */}
      <div className="w-full overflow-x-auto pb-1">
        <div className="min-w-[720px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940 500"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto", aspectRatio: "940 / 500" }}
            role="img"
            aria-label="林後 7:11–12 七級悔改行動瀑布圖"
          >
            <style>{`
              .step-rect { rx: 12px; ry: 12px; stroke-width: 1.2; fill: #ffffff; stroke: #e2e8f0; filter: drop-shadow(0 1px 3px rgba(0,0,0,0.03)); }
              .header-rect { rx: 14px; ry: 14px; fill: #faf5ff; stroke: #c084fc; stroke-width: 2; }
              .verdict-rect { rx: 14px; ry: 14px; fill: #f0fdf4; stroke: #86efac; stroke-width: 2; }

              .txt-h { font-family: system-ui, -apple-system, sans-serif; font-size: 13px; font-weight: 700; fill: #0f172a; }
              .txt-g { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 11.5px; font-weight: 600; fill: #6d28d9; }
              .txt-d { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: #475569; }
              .badge-t { font-family: system-ui, -apple-system, sans-serif; font-size: 10px; font-weight: 700; fill: #ffffff; }

              :root.dark .step-rect, .dark .step-rect { fill: #1e293b; stroke: #334155; }
              :root.dark .header-rect, .dark .header-rect { fill: #3b0764; stroke: #a855f7; }
              :root.dark .verdict-rect, .dark .verdict-rect { fill: #052e16; stroke: #22c55e; }

              :root.dark .txt-h, .dark .txt-h { fill: #f8fafc; }
              :root.dark .txt-g, .dark .txt-g { fill: #c084fc; }
              :root.dark .txt-d, .dark .txt-d { fill: #cbd5e1; }
            `}</style>

            {/* Top Engine Banner */}
            <g transform="translate(30, 15)">
              <rect width="880" height="45" className="header-rect" />
              <text x="20" y="28" className="txt-h">
                動態引擎：看哪！依神憂愁在你們裡面徹底產生了 (idou gar ... kateirgasato hymin)
              </text>
              <text x="610" y="28" className="txt-g">
                修辭奇觀：6 個強勢「不僅如此更有！」(alla) 階梯遞進
              </text>
            </g>

            {/* 7 Cascading Step Rows */}
            {steps.map((st, i) => {
              const y = 72 + i * 46;
              const xOffset = 30 + i * 14;
              const width = 880 - i * 14;

              return (
                <g key={st.num} transform={`translate(${xOffset}, ${y})`}>
                  <rect width={width} height="40" className="step-rect" />
                  
                  {/* Step Number Tag */}
                  <rect x="8" y="9" width="34" height="22" rx="11" fill={st.badgeColor} />
                  <text x="25" y="24" textAnchor="middle" className="badge-t">{st.num}</text>

                  {/* Category scope */}
                  <rect x="48" y="10" width="76" height="20" rx="10" fill="#f1f5f9" className="dark:fill-slate-800" />
                  <text x="86" y="24" textAnchor="middle" fill="#475569" className="dark:fill-slate-300" style={{ fontSize: "10px", fontWeight: "700" }}>
                    {st.scope}
                  </text>

                  {/* Title & Greek */}
                  <text x="135" y="25" className="txt-h">{st.title}</text>
                  <text x="270" y="25" className="txt-g">{st.greek}</text>

                  {/* Description */}
                  <text x="440" y="25" className="txt-d">{st.desc}</text>
                </g>
              );
            })}

            {/* Bottom Verdict Base */}
            <g transform="translate(30, 405)">
              <rect width="880" height="75" className="verdict-rect" />
              <rect x="16" y="12" width="100" height="20" rx="10" fill="#16a34a" />
              <text x="66" y="26" textAnchor="middle" className="badge-t">法庭無罪宣判</text>
              
              <text x="126" y="27" className="txt-h">
                「在凡事上，你們都推薦／證明自己是純潔無辜的了」(synestēsate heautous hagnous einai)
              </text>
              <text x="20" y="58" className="txt-d">
                7:12 牧養意圖：閃族相對否定修辭（不是為虧負人的，不是為受虧負的）➔「要在神面前把你們對我們的熱誠，向你們自己顯明出來！」(pros hymas enōpion tou theou)
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">修辭爆發力：</span>
          <span>連詞疊加與階梯遞進（Polysyndeton & Ascensive Climax）將真悔改化為看得見的行動風暴</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          神聖光照鏡像：在神面前向信徒自己顯明深藏於冷漠面具下的真實熱誠
        </div>
      </div>
    </figure>
  );
}

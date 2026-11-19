"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function CovenantChiasmChart() {
  const rings = [
    {
      tag: "A",
      indent: "",
      boxClass: "bg-purple-100/60 dark:bg-purple-950/40 border border-purple-400/70 dark:border-purple-700",
      badgeClass: "bg-purple-600 text-white",
      title: "6:11a「哥林多人哪，我們向你們，口是張開的」",
      desc: "使徒毫無保留坦誠直言，向兒女敞開話匣",
    },
    {
      tag: "B",
      indent: "sm:ml-5",
      boxClass: "bg-blue-100/60 dark:bg-blue-950/40 border border-blue-400/70 dark:border-blue-700",
      badgeClass: "bg-blue-600 text-white",
      title: "6:11b–12「我們的心是寬宏的；你們狹窄，原不在乎我們」",
      desc: "指出信徒心腸狹窄（stenochōreisthe）的病根",
    },
    {
      tag: "C",
      indent: "sm:ml-10",
      boxClass: "bg-teal-100/60 dark:bg-teal-950/40 border border-teal-500/70 dark:border-teal-700",
      badgeClass: "bg-teal-600 text-white",
      title: "6:13「你們也要照樣心腸寬宏，這是我對兒女說的話」",
      desc: "慈父般的懇請：求你們以愛回報寬大心腸",
    },
    {
      tag: "D 樞紐",
      indent: "sm:ml-14",
      boxClass: "bg-fuchsia-50/95 dark:bg-purple-950/60 border-2 border-purple-600 dark:border-purple-400",
      badgeClass: "bg-purple-700 text-white",
      title: "6:14–7:1【核心樞紐】：分別為聖與除淨肉體心靈污穢",
      desc: "不可與不信者同負一軛！清空心中偶像污垢，方能騰出心房席位收納神的真使徒（駁斥外來插段假說）",
    },
    {
      tag: "C'",
      indent: "sm:ml-10",
      boxClass: "bg-teal-100/60 dark:bg-teal-950/40 border border-teal-500/70 dark:border-teal-700",
      badgeClass: "bg-teal-600 text-white",
      title: "7:2a「你們要心地寬大收納我們！」(Chōrēsate hēmas)",
      desc: "果斷騰出心靈空間（chōra），回應 6:13 寬宏呼籲",
    },
    {
      tag: "B'",
      indent: "sm:ml-5",
      boxClass: "bg-blue-100/60 dark:bg-blue-950/40 border border-blue-400/70 dark:border-blue-700",
      badgeClass: "bg-blue-600 text-white",
      title: "7:2b–3「未曾虧負誰……不是要定罪，情願同死同活！」",
      desc: "三連無連詞清白抗辯 ➔ 顛倒古典詞序為「先同死後同活」（synapothanein kai syzēn）",
    },
    {
      tag: "A'",
      indent: "",
      boxClass: "bg-purple-100/60 dark:bg-purple-950/40 border border-purple-400/70 dark:border-purple-700",
      badgeClass: "bg-purple-600 text-white",
      title: "7:4「我大大的放膽直言，在患難中喜樂格外充盈！」",
      desc: "超凡複合詞 hyperperisseuomai：喜樂如大水漫過一切患難堤防，呼應 6:11 張開的口",
    },
  ];

  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜使徒敞開的心與同心圓交叉包夾結構（林後 6:11–7:4）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Chiastic Inclusio
        </span>
      </div>

      <div className="space-y-2.5">
        {rings.map((ring) => (
          <div
            key={ring.tag}
            className={`${ring.indent} ${ring.boxClass} rounded-2xl p-3.5 flex flex-col sm:flex-row sm:items-start gap-2.5`}
          >
            <span className={`${ring.badgeClass} shrink-0 self-start px-2.5 py-0.5 rounded-full text-xs font-bold`}>
              {ring.tag}
            </span>
            <div className="min-w-0 flex-1 space-y-1">
              <p className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 leading-snug">
                {ring.title}
              </p>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {ring.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">篇章拓撲：</span>
          <span>A-B-C-D-C&apos;-B&apos;-A&apos; 工整鏡像，徹底粉碎近代分割學者將 6:14–7:1 視為插段的假說</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          從法庭自辯反轉為十字架「先同死、後同活」之盟約團契
        </div>
      </div>
    </figure>
  );
}

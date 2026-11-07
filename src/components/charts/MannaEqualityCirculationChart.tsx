"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function MannaEqualityCirculationChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜基督身體的「均平」循環與出埃及記曠野嗎哪互文（林後 8:13–15）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Ecclesial Isotēs &amp; Exodus Manna
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-1">
        <div className="min-w-[720px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940 460"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto", aspectRatio: "940 / 460" }}
            role="img"
            aria-label="基督身體的均平循環與曠野嗎哪互文圖"
          >
            <defs>
              <marker id="arr-man-p" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
              <marker id="arr-man-t" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#0d9488" />
              </marker>
            </defs>

            <style>{`
              .node-card { rx: 16px; ry: 16px; stroke-width: 1.5; }
              .cor-box { fill: #f5f3ff; stroke: #a855f7; stroke-width: 2; }
              .jer-box { fill: #f0fdfa; stroke: #14b8a6; stroke-width: 2; }
              .manna-box { fill: #fffbeb; stroke: #f59e0b; stroke-width: 2; }

              .txt-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: #0f172a; }
              .txt-greek { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-greek-t { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #0f766e; }
              .txt-greek-a { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #b45309; }
              .txt-body { font-family: system-ui, -apple-system, sans-serif; font-size: 11.5px; fill: #334155; }
              .badge-p { fill: #ede9fe; stroke: #c4b5fd; rx: 10px; }
              .badge-t { fill: #ccfbf1; stroke: #99f6e4; rx: 10px; }
              .badge-a { fill: #fef3c7; stroke: #fde68a; rx: 10px; }
              .btxt-p { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #6d28d9; }
              .btxt-t { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #0f766e; }
              .btxt-a { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #b45309; }

              :root.dark .cor-box, .dark .cor-box { fill: #2e1065; stroke: #a855f7; }
              :root.dark .jer-box, .dark .jer-box { fill: #134e4a; stroke: #14b8a6; }
              :root.dark .manna-box, .dark .manna-box { fill: #451a03; stroke: #f59e0b; }
              :root.dark .txt-title, .dark .txt-title { fill: #f8fafc; }
              :root.dark .txt-greek, .dark .txt-greek { fill: #c084fc; }
              :root.dark .txt-greek-t, .dark .txt-greek-t { fill: #2dd4bf; }
              :root.dark .txt-greek-a, .dark .txt-greek-a { fill: #fbbf24; }
              :root.dark .txt-body, .dark .txt-body { fill: #cbd5e1; }
              :root.dark .badge-p, .dark .badge-p { fill: #3b0764; stroke: #7c3aed; }
              :root.dark .badge-t, .dark .badge-t { fill: #115e59; stroke: #14b8a6; }
              :root.dark .badge-a, .dark .badge-a { fill: #78350f; stroke: #d97706; }
              :root.dark .btxt-p, .dark .btxt-p { fill: #d8b4fe; }
              :root.dark .btxt-t, .dark .btxt-t { fill: #99f6e4; }
              :root.dark .btxt-a, .dark .btxt-a { fill: #fde68a; }
            `}</style>

            {/* Top Left: Corinthian Church (8:13–14a) */}
            <g transform="translate(25, 30)">
              <rect width="380" height="190" className="node-card cor-box" />
              <rect x="16" y="14" width="160" height="20" className="badge-p" />
              <text x="96" y="28" textAnchor="middle" className="btxt-p">外邦哥林多教會（8:14a）</text>
              <text x="16" y="55" className="txt-title">現今的富餘 ➔ 補足他們的不足</text>
              <text x="16" y="75" className="txt-greek">en tō nyn kairō to hymōn perisseuma</text>
              <text x="16" y="100" className="txt-body">・關鍵救贖時機 (en tō nyn kairō)：當下擁有的經濟寬裕</text>
              <text x="16" y="120" className="txt-body">・富餘 (perisseuma)：滿足基本生活所需後的恩典盈餘</text>
              <text x="16" y="140" className="txt-body">・非叫別人輕省 (anesis)、你們受累 (thlipsis) 的不公轉嫁</text>
              <text x="16" y="160" className="txt-body">・避免將神賜的富餘自私囤積而失去流動生命力</text>
            </g>

            {/* Reciprocal Arrows & Center Isotēs Badge */}
            <path d="M 405 90 L 530 90" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arr-man-p)" />
            <path d="M 535 160 L 410 160" stroke="#0d9488" strokeWidth="2.5" fill="none" markerEnd="url(#arr-man-t)" />
            <g transform="translate(415, 108)">
              <rect width="110" height="34" className="badge-p" />
              <text x="55" y="15" textAnchor="middle" className="btxt-p">均平 (isotēs)</text>
              <text x="55" y="28" textAnchor="middle" className="btxt-p">8:13b &amp; 8:14c</text>
            </g>

            {/* Top Right: Jerusalem Saints (8:14b) */}
            <g transform="translate(535, 30)">
              <rect width="380" height="190" className="node-card jer-box" />
              <rect x="16" y="14" width="165" height="20" className="badge-t" />
              <text x="98" y="28" textAnchor="middle" className="btxt-t">耶路撒冷貧窮聖徒（8:14b）</text>
              <text x="16" y="55" className="txt-title">他們的富餘 ➔ 補足你們的不足</text>
              <text x="16" y="75" className="txt-greek-t">to ekeinōn perisseuma eis to hymōn hysterēma</text>
              <text x="16" y="100" className="txt-body">・當下處境：因飢荒與逼迫陷入基本生存缺乏 (hysterēma)</text>
              <text x="16" y="120" className="txt-body">・雙向互補 (A派)：未來若哥林多遇患難，普世肢體必回援</text>
              <text x="16" y="140" className="txt-body">・異維交換 (B派)：猶太母會以救恩根源與切切代禱（9:14）</text>
              <text x="16" y="160" className="txt-body">  之屬靈富餘，補足外邦教會的屬靈需要（參羅 15:27）</text>
            </g>

            {/* Arrow Down to Canonical Manna Anchor */}
            <path d="M 470 220 L 470 265" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arr-man-p)" />

            {/* Bottom Canonical Manna Box (8:15 / Exod 16:18 LXX) */}
            <g transform="translate(150, 270)">
              <rect width="640" height="160" className="node-card manna-box" />
              <rect x="18" y="14" width="210" height="20" className="badge-a" />
              <text x="123" y="28" textAnchor="middle" className="btxt-a">新出埃及正典印證（8:15 引出 16:18）</text>
              <text x="240" y="29" className="txt-title">「那多收的並沒有餘，那少收的也沒有缺」</text>
              <text x="18" y="55" className="txt-greek-a">kathōs gegraptai: Ho to poly ouk epleonasen, kai ho to oligon ouk ēlattonēsen</text>
              <text x="18" y="80" className="txt-body">・微觀詞序重組：保羅將主詞「多收的 (Ho to poly)」前置，與「少收的 (ho to oligon)」構成工整平行</text>
              <text x="18" y="102" className="txt-body">・出埃及記 16 章語境警告：凡出於貪婪與不信將多餘嗎哪私藏過夜者，隔日必生蟲變臭（出 16:20）</text>
              <text x="18" y="124" className="txt-body">・救贖歷史成全：昔日神在曠野用神蹟量度俄梅珥達成均平；今日神藉新約肢體甘心分享重現嗎哪神蹟</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
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

"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function KindnessVsWrathTreasuryChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜神聖寬容的悔改牽引 vs. 石心積蓄忿怒的終末帳本（羅 2:4–5）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Theological Antithesis
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-1">
        <div className="min-w-[720px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940 440"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto", aspectRatio: "940 / 440" }}
            role="img"
            aria-label="神聖寬容的悔改牽引與石心積蓄忿怒對照圖"
          >
            <defs>
              <marker id="arr-grace" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
              <marker id="arr-wrath" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#e11d48" />
              </marker>
            </defs>

            <style>{`
              .node-card { rx: 16px; ry: 16px; stroke-width: 1.5; }
              .grace-card { fill: #f5f3ff; stroke: #c4b5fd; }
              .grace-goal { fill: #fdf4ff; stroke: #a855f7; stroke-width: 2; }
              .wrath-card { fill: #fff1f2; stroke: #fecdd3; }
              .wrath-goal { fill: #fff1f2; stroke: #f43f5e; stroke-width: 2; }

              .txt-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: #0f172a; }
              .txt-greek { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-greek-w { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #be123c; }
              .txt-body { font-family: system-ui, -apple-system, sans-serif; font-size: 11.5px; fill: #334155; }
              .badge-p { fill: #ede9fe; stroke: #c4b5fd; rx: 10px; }
              .badge-r { fill: #ffe4e6; stroke: #fecdd3; rx: 10px; }
              .btxt-p { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #6d28d9; }
              .btxt-r { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #be123c; }

              :root.dark .grace-card, .dark .grace-card { fill: #2e1065; stroke: #7c3aed; }
              :root.dark .grace-goal, .dark .grace-goal { fill: #3b0764; stroke: #c084fc; }
              :root.dark .wrath-card, .dark .wrath-card { fill: #4c0519; stroke: #e11d48; }
              :root.dark .wrath-goal, .dark .wrath-goal { fill: #500724; stroke: #fb7185; }
              :root.dark .txt-title, .dark .txt-title { fill: #f8fafc; }
              :root.dark .txt-greek, .dark .txt-greek { fill: #c084fc; }
              :root.dark .txt-greek-w, .dark .txt-greek-w { fill: #fb7185; }
              :root.dark .txt-body, .dark .txt-body { fill: #cbd5e1; }
              :root.dark .badge-p, .dark .badge-p { fill: #3b0764; stroke: #7c3aed; }
              :root.dark .badge-r, .dark .badge-r { fill: #4c0519; stroke: #e11d48; }
              :root.dark .btxt-p, .dark .btxt-p { fill: #d8b4fe; }
              :root.dark .btxt-r, .dark .btxt-r { fill: #fecdd3; }
            `}</style>

            {/* Top Track Arrows (2:4 Divine Purpose) */}
            <path d="M 435 115 L 525 115" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arr-grace)" />
            {/* Bottom Track Arrows (2:5 Human Perversion) */}
            <path d="M 435 325 L 525 325" stroke="#e11d48" strokeWidth="2.5" fill="none" markerEnd="url(#arr-wrath)" />
            {/* Vertical Contempt Disruption */}
            <path d="M 225 190 L 225 245" stroke="#e11d48" strokeWidth="2" strokeDasharray="4,4" fill="none" markerEnd="url(#arr-wrath)" />

            {/* Top Left: Riches of Kindness, Forbearance, Patience (2:4a) */}
            <g transform="translate(25, 35)">
              <rect width="410" height="150" className="node-card grace-card" />
              <rect x="16" y="14" width="130" height="20" className="badge-p" />
              <text x="81" y="28" textAnchor="middle" className="btxt-p">神聖恩典的豐盛（2:4a）</text>
              <text x="16" y="56" className="txt-title">豐富的恩慈、寬容（停火期）與恆久忍耐</text>
              <text x="16" y="76" className="txt-greek">ploutou tēs chrēstotētos kai tēs anochēs kai tēs makrothymias</text>
              <text x="16" y="98" className="txt-body">・出 34:6 盟約屬性：恩慈良善与長久忍耐不輕易發怒</text>
              <text x="16" y="118" className="txt-body">・寬容 (anochē)：主權法官暫緩執行死刑的「休戰寬限期」</text>
              <text x="16" y="138" className="txt-body">・顛覆《所羅門智慧書》15:1–4 將神忍耐當作選民犯罪保護傘</text>
            </g>

            {/* Top Right: Intended Goal - Lead to Repentance (2:4b) */}
            <g transform="translate(530, 35)">
              <rect width="385" height="150" className="node-card grace-goal" />
              <rect x="16" y="14" width="130" height="20" className="badge-p" />
              <text x="81" y="28" textAnchor="middle" className="btxt-p">恩典的真實目的（2:4b）</text>
              <text x="16" y="56" className="txt-title">神的恩慈正持續引領你進入真悔改</text>
              <text x="16" y="76" className="txt-greek">to chrēston tou theou eis metanoian se agei</text>
              <text x="16" y="98" className="txt-body">・企圖現在式 (agei)：神的仁慈如慈繩愛索持續牽引</text>
              <text x="16" y="118" className="txt-body">・悔改 (metanoia)：全人心思、價值與效忠方向徹底掉頭</text>
              <text x="16" y="138" className="txt-body">・給予罪人俯伏求憐憫、逃離終末審判的唯一窗口</text>
            </g>

            {/* Middle Transition Label */}
            <g transform="translate(135, 202)">
              <rect width="180" height="24" className="badge-r" />
              <text x="90" y="16" textAnchor="middle" className="btxt-r">藐視與無知 (kataphroneis / agnoōn)</text>
            </g>

            {/* Bottom Left: Hard and Impenitent Heart (2:5a) */}
            <g transform="translate(25, 250)">
              <rect width="410" height="155" className="node-card wrath-card" />
              <rect x="16" y="14" width="130" height="20" className="badge-r" />
              <text x="81" y="28" textAnchor="middle" className="btxt-r">自義者的石心反應（2:5a）</text>
              <text x="16" y="56" className="txt-title">任著剛硬與不肯悔改的心抗拒恩慈</text>
              <text x="16" y="76" className="txt-greek-w">kata de tēn sklērotēta sou kai ametanoēton kardian</text>
              <text x="16" y="98" className="txt-body">・剛硬 (sklērotēs)：新約孤立詞，迴響申 9:27 曠野金牛犢頑梗</text>
              <text x="16" y="118" className="txt-body">・不悔改 (ametanoētos)：與 2:4 悔改 (metanoia) 構成語音反諷</text>
              <text x="16" y="138" className="txt-body">・把神的暫緩降罰誤讀為對自身道德與血統的縱容</text>
            </g>

            {/* Bottom Right: Storing Up Wrath for Day of Wrath (2:5b) */}
            <g transform="translate(530, 250)">
              <rect width="385" height="155" className="node-card wrath-goal" />
              <rect x="16" y="14" width="130" height="20" className="badge-r" />
              <text x="81" y="28" textAnchor="middle" className="btxt-r">反諷的終末寶庫（2:5b）</text>
              <text x="16" y="56" className="txt-title">在神公義審判顯露之日為自己積蓄忿怒</text>
              <text x="16" y="76" className="txt-greek-w">thēsaurizeis seautō orgēn en hēmera orgēs kai dikaiokrisias</text>
              <text x="16" y="98" className="txt-body">・苦澀反諷 (thēsaurizō)：自以為存功德，實則每日存入神烈怒</text>
              <text x="16" y="118" className="txt-body">・顯露 (apokalypsis)：呼應 1:17–18 神的義與忿怒雙重顯明</text>
              <text x="16" y="138" className="txt-body">・公義審判 (dikaiokrisia)：新約孤立詞，末日連本帶利總清算</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
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

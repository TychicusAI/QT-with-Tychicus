"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function DualIntegrityStewardshipChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜跨教會護款代表團與「主前人前雙重光明」防弊架構（林後 8:16–21）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Ecclesial Accountability &amp; Prov 3:4 LXX
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
            aria-label="跨教會護款代表團與主前人前雙重光明防弊架構圖"
          >
            <defs>
              <marker id="arr-stew-p" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
            </defs>

            <style>{`
              .node-card { rx: 16px; ry: 16px; stroke-width: 1.5; }
              .del-card { fill: #f5f3ff; stroke: #c4b5fd; }
              .shield-card { fill: #fdf4ff; stroke: #9333ea; stroke-width: 2.2; }
              .prov-card { fill: #fffbeb; stroke: #f59e0b; stroke-width: 2; }

              .txt-title { font-family: system-ui, -apple-system, sans-serif; font-size: 14px; font-weight: 700; fill: #0f172a; }
              .txt-greek { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-greek-a { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #b45309; }
              .txt-body { font-family: system-ui, -apple-system, sans-serif; font-size: 11.5px; fill: #334155; }
              .badge-p { fill: #ede9fe; stroke: #c4b5fd; rx: 10px; }
              .badge-a { fill: #fef3c7; stroke: #fde68a; rx: 10px; }
              .btxt-p { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #6d28d9; }
              .btxt-a { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #b45309; }

              :root.dark .del-card, .dark .del-card { fill: #2e1065; stroke: #7c3aed; }
              :root.dark .shield-card, .dark .shield-card { fill: #3b0764; stroke: #c084fc; }
              :root.dark .prov-card, .dark .prov-card { fill: #451a03; stroke: #f59e0b; }
              :root.dark .txt-title, .dark .txt-title { fill: #f8fafc; }
              :root.dark .txt-greek, .dark .txt-greek { fill: #c084fc; }
              :root.dark .txt-greek-a, .dark .txt-greek-a { fill: #fbbf24; }
              :root.dark .txt-body, .dark .txt-body { fill: #cbd5e1; }
              :root.dark .badge-p, .dark .badge-p { fill: #3b0764; stroke: #7c3aed; }
              :root.dark .badge-a, .dark .badge-a { fill: #78350f; stroke: #d97706; }
              :root.dark .btxt-p, .dark .btxt-p { fill: #d8b4fe; }
              :root.dark .btxt-a, .dark .btxt-a { fill: #fde68a; }
            `}</style>

            {/* Top Left: Titus (8:16–17) */}
            <g transform="translate(25, 25)">
              <rect width="420" height="145" className="node-card del-card" />
              <rect x="16" y="14" width="160" height="20" className="badge-p" />
              <text x="96" y="28" textAnchor="middle" className="btxt-p">使徒代表：提多（8:16–17）</text>
              <text x="16" y="55" className="txt-title">神將同樣的殷勤放入心中，自願熱切動身</text>
              <text x="16" y="75" className="txt-greek">tēn autēn spoudēn ... spoudaioteros de hyparchōn authairetos</text>
              <text x="16" y="98" className="txt-body">・感恩起首 (Charis de tō theō)：連同工的熱誠也是神主權的恩賜</text>
              <text x="16" y="118" className="txt-body">・自發主動 (authairetos)：呼應 8:3 馬其頓人，非被強派乃甘心前往</text>
              <text x="16" y="136" className="txt-body">・書信不定過去式 (exēlthen)：讀信之時提多已站在哥林多人面前</text>
            </g>

            {/* Top Right: Famous Brother Elected by Churches (8:18–19) */}
            <g transform="translate(495, 25)">
              <rect width="420" height="145" className="node-card del-card" />
              <rect x="16" y="14" width="185" height="20" className="badge-p" />
              <text x="108" y="28" textAnchor="middle" className="btxt-p">眾教會公選代表（8:18–19）</text>
              <text x="16" y="55" className="txt-title">在福音工作享譽眾教會、經公開推選同行</text>
              <text x="16" y="75" className="txt-greek">cheirotonētheis hypo tōn ekklēsiōn synodēmos hēmōn</text>
              <text x="16" y="98" className="txt-body">・普世聲譽：在傳揚福音事工上得眾教會一致稱讚 (epainos)</text>
              <text x="16" y="118" className="txt-body">・公開票選 (cheirotonētheis)：由捐款教會正式舉手推選，非保羅私黨</text>
              <text x="16" y="136" className="txt-body">・雙重目的：為榮耀主自己 (pros tēn autou tou kyriou doxan) 並顯明甘心</text>
            </g>

            {/* Arrows Converging to Precaution Shield (8:20) */}
            <path d="M 235 170 L 340 205" stroke="#7c3aed" strokeWidth="2.2" fill="none" markerEnd="url(#arr-stew-p)" />
            <path d="M 705 170 L 600 205" stroke="#7c3aed" strokeWidth="2.2" fill="none" markerEnd="url(#arr-stew-p)" />

            {/* Middle Shield Box: Avoiding Blame over Lavish Sum (8:20) */}
            <g transform="translate(150, 210)">
              <rect width="640" height="95" className="node-card shield-card" />
              <rect x="18" y="12" width="180" height="20" className="badge-p" />
              <text x="108" y="26" textAnchor="middle" className="btxt-p">制度性防弊核心（8:20）</text>
              <text x="210" y="27" className="txt-title">謹慎收帆防備，免得有人在這筆豐厚巨款上挑毛病</text>
              <text x="18" y="52" className="txt-greek">stellomenoi touto, mē tis hēmas mōmēsētai en tē hadrotēti tautē</text>
              <text x="18" y="74" className="txt-body">・航海隱喻 (stellomenoi)：如水手見暗礁收縮船帆；新約孤立詞「巨款 (hadrotēs)」絕不單獨私下經手</text>
            </g>

            {/* Arrow Down to Proverbs 3:4 LXX Anchor (8:21) */}
            <path d="M 470 305 L 470 335" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#arr-stew-p)" />

            {/* Bottom Canonical Wisdom Box (8:21 / Prov 3:4 LXX) */}
            <g transform="translate(150, 340)">
              <rect width="640" height="100" className="node-card prov-card" />
              <rect x="18" y="12" width="205" height="20" className="badge-a" />
              <text x="120" y="26" textAnchor="middle" className="btxt-a">雙重空間問責（8:21 暗引箴 3:4）</text>
              <text x="235" y="27" className="txt-title">留心行光明美善的事：不但在主面前，也在人面前！</text>
              <text x="18" y="52" className="txt-greek-a">pronooumen gar kala ou monon enōpion kyriou alla kai enōpion anthrōpōn</text>
              <text x="18" y="76" className="txt-body">・駁斥「只要神知道我清白就好」的屬靈傲慢：公開透明的財務問責正是捍衛福音公信力的城牆</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">雙重空間指示語：</span>
          <span>在主面前（<em>enōpion kyriou</em>）＋ 在人面前（<em>enōpion anthrōpōn</em>）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          正典互文：七十士譯本箴言 3:4（亦見於羅馬書 12:17）
        </div>
      </div>
    </figure>
  );
}

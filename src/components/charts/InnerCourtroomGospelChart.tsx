"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function InnerCourtroomGospelChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜心版律法與良心內在法庭 vs. 基督審判隱秘事之日（羅 2:14–16）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Crux Interpretum &amp; Eschatological Court
        </span>
      </div>

      <div className="w-full overflow-x-auto pb-1">
        <div className="min-w-[720px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940 450"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto", aspectRatio: "940 / 450" }}
            role="img"
            aria-label="羅馬書 2:14-16 內在良心法庭與基督審判隱秘事結構圖"
          >
            <defs>
              <marker id="arr-c" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
            </defs>

            <style>{`
              .node-card { rx: 16px; ry: 16px; stroke-width: 1.5; }
              .opt-card { fill: #f8fafc; stroke: #cbd5e1; }
              .inner-card { fill: #f5f3ff; stroke: #a78bfa; stroke-width: 1.5; }
              .christ-card { fill: #fdf4ff; stroke: #9333ea; stroke-width: 2.5; }

              .txt-title { font-family: system-ui, -apple-system, sans-serif; font-size: 13.5px; font-weight: 700; fill: #0f172a; }
              .txt-greek { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-body { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: #334155; }
              .badge-p { fill: #ede9fe; stroke: #c4b5fd; rx: 10px; }
              .btxt-p { font-family: system-ui, -apple-system, sans-serif; font-size: 10.5px; font-weight: 700; fill: #6d28d9; }

              :root.dark .opt-card, .dark .opt-card { fill: #1e293b; stroke: #475569; }
              :root.dark .inner-card, .dark .inner-card { fill: #2e1065; stroke: #7c3aed; }
              :root.dark .christ-card, .dark .christ-card { fill: #3b0764; stroke: #c084fc; }
              :root.dark .txt-title, .dark .txt-title { fill: #f8fafc; }
              :root.dark .txt-greek, .dark .txt-greek { fill: #c084fc; }
              :root.dark .txt-body, .dark .txt-body { fill: #cbd5e1; }
              :root.dark .badge-p, .dark .badge-p { fill: #3b0764; stroke: #7c3aed; }
              :root.dark .btxt-p, .dark .btxt-p { fill: #d8b4fe; }
            `}</style>

            {/* Row 1: Two Exegetical Readings of physei in 2:14 */}
            <g transform="translate(25, 15)">
              <rect width="430" height="115" className="node-card opt-card" />
              <rect x="14" y="12" width="175" height="20" className="badge-p" />
              <text x="101" y="26" textAnchor="middle" className="btxt-p">詮釋路徑 A：physei 連後讀（自然道德律）</text>
              <text x="14" y="52" className="txt-title">未信外邦人「順著本性」偶爾行出合律法之事</text>
              <text x="14" y="70" className="txt-greek">ta mē nomon echonta, physei ta tou nomou poiōsin</text>
              <text x="14" y="90" className="txt-body">・學者：金口若望、加爾文、Moo、Longenecker、Thielman</text>
              <text x="14" y="106" className="txt-body">・證明外邦人擁有受造殘存道德良知，故犯罪無可推諉</text>
            </g>

            <g transform="translate(485, 15)">
              <rect width="430" height="115" className="node-card opt-card" />
              <rect x="14" y="12" width="175" height="20" className="badge-p" />
              <text x="101" y="26" textAnchor="middle" className="btxt-p">詮釋路徑 B：physei 連前讀（新約聖靈寫心）</text>
              <text x="14" y="52" className="txt-title">「生來沒有律法」的外邦信徒被聖靈將律法刻在心上</text>
              <text x="14" y="70" className="txt-greek">ethnē ta mē nomon echonta physei, ta tou nomou poiōsin</text>
              <text x="14" y="90" className="txt-body">・學者：奧古斯丁、Cranfield、Wright、Barclay、Schreiner (2018)</text>
              <text x="14" y="106" className="txt-body">・迴響耶 31:33 新約應許，預伏 2:26–29 心與靈的真割禮</text>
            </g>

            {/* Row 2: Threefold Inner Courtroom in 2:15 (3 cards across) */}
            <path d="M 240 130 L 240 160" stroke="#7c3aed" strokeWidth="2" fill="none" markerEnd="url(#arr-c)" />
            <path d="M 700 130 L 700 160" stroke="#7c3aed" strokeWidth="2" fill="none" markerEnd="url(#arr-c)" />

            <g transform="translate(25, 165)">
              <rect width="280" height="115" className="node-card inner-card" />
              <rect x="14" y="12" width="110" height="20" className="badge-p" />
              <text x="69" y="26" textAnchor="middle" className="btxt-p">內在見證 I：心版</text>
              <text x="14" y="52" className="txt-title">律法的功用刻在他們心裡</text>
              <text x="14" y="72" className="txt-greek">to ergon tou nomou grapton</text>
              <text x="14" y="92" className="txt-body">・非西乃石版，而是銘刻於心版</text>
              <text x="14" y="108" className="txt-body">・顯明神道德要求的內在印記</text>
            </g>

            <g transform="translate(330, 165)">
              <rect width="280" height="115" className="node-card inner-card" />
              <rect x="14" y="12" width="110" height="20" className="badge-p" />
              <text x="69" y="26" textAnchor="middle" className="btxt-p">內在見證 II：良心</text>
              <text x="14" y="52" className="txt-title">他們的良心一同作見證</text>
              <text x="14" y="72" className="txt-greek">symmartyrousēs tēs syneidēseōs</text>
              <text x="14" y="92" className="txt-body">・良心非自主立法者，而是共同證人</text>
              <text x="14" y="108" className="txt-body">・在神面前發出共鳴與監督警報</text>
            </g>

            <g transform="translate(635, 165)">
              <rect width="280" height="115" className="node-card inner-card" />
              <rect x="14" y="12" width="110" height="20" className="badge-p" />
              <text x="69" y="26" textAnchor="middle" className="btxt-p">內在見證 III：思念</text>
              <text x="14" y="52" className="txt-title">思念互相較量・或控告或申辯</text>
              <text x="14" y="72" className="txt-greek">logismōn katēgorountōn ē apologoumenōn</text>
              <text x="14" y="92" className="txt-body">・內心道德推理的交叉詰問</text>
              <text x="14" y="108" className="txt-body">・呼應 2:1 無可申辯 (anapologētos)</text>
            </g>

            {/* Arrows converging to Row 3: 2:16 */}
            <path d="M 165 280 L 350 315" stroke="#7c3aed" strokeWidth="2" fill="none" markerEnd="url(#arr-c)" />
            <path d="M 470 280 L 470 315" stroke="#7c3aed" strokeWidth="2" fill="none" markerEnd="url(#arr-c)" />
            <path d="M 775 280 L 590 315" stroke="#7c3aed" strokeWidth="2" fill="none" markerEnd="url(#arr-c)" />

            {/* Row 3: 2:16 Eschatological Christological Summit (Width 740 >= 550) */}
            <g transform="translate(100, 320)">
              <rect width="740" height="115" className="node-card christ-card" />
              <rect x="18" y="14" width="185" height="20" className="badge-p" />
              <text x="110" y="28" textAnchor="middle" className="btxt-p">終末基督論法庭收結（2:16｜Inclusio 呼應 2:5）</text>
              <text x="18" y="54" className="txt-title">就在神藉著耶穌基督、照著我的福音，審判人一切「隱秘事」的日子！</text>
              <text x="18" y="74" className="txt-greek">en hēmera hote krinei ho theos ta krypta tōn anthrōpōn kata to euangelion mou dia Christou Iēsou</text>
              <text x="18" y="96" className="txt-body">・審判標的：穿透外在儀文直達內心「隱秘事」(ta krypta，傳 12:14)；審判中保：為罪人釘十架並復活的主耶穌基督</text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">全段首尾包夾：</span>
          <span>忿怒與公義審判顯露之日（2:5）⇔ 藉耶穌基督審判人隱秘事之日（2:16）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          照著我的福音（<em>kata to euangelion mou</em>）
        </div>
      </div>
    </figure>
  );
}

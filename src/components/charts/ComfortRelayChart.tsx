"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function ComfortRelayChart() {
  return (
    <figure className="my-8 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜遠距鉤連行旅與神聖安慰三重流轉網絡（林後 7:5–7）</span>
        </div>
        <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Relay Network
        </span>
      </div>

      {/* Canvas */}
      <div className="w-full overflow-x-auto pb-1">
        <div className="min-w-[720px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940 450"
            className="w-full h-auto block"
            style={{ width: "100%", height: "auto", aspectRatio: "940 / 450" }}
            role="img"
            aria-label="林後 7:5–7 遠距鉤連行旅與神聖安慰流轉網絡圖"
          >
            <defs>
              <marker
                id="relay-arrow"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#7c3aed" />
              </marker>
              <marker
                id="dashed-arrow"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
              </marker>
            </defs>

            <style>{`
              .card-box { rx: 16px; ry: 16px; stroke-width: 1.5; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.03)); }
              .hook-box { fill: #f1f5f9; stroke: #94a3b8; }
              .crisis-box { fill: #fff1f2; stroke: #f43f5e; }
              .god-box { fill: #fdf4ff; stroke: #9333ea; stroke-width: 2.5; }
              .corinth-box { fill: #ecfdf5; stroke: #10b981; }
              .titus-box { fill: #f0fdf4; stroke: #22c55e; }
              .paul-box { fill: #faf5ff; stroke: #8b5cf6; stroke-width: 2; }

              .txt-h { font-family: system-ui, -apple-system, sans-serif; font-size: 13.5px; font-weight: 700; fill: #0f172a; }
              .txt-g { font-family: ui-serif, Georgia, Cambria, serif; font-style: italic; font-size: 12px; font-weight: 600; fill: #6d28d9; }
              .txt-b { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: #334155; }
              .pill-tag { font-family: system-ui, -apple-system, sans-serif; font-size: 10px; font-weight: 700; fill: #ffffff; }

              :root.dark .hook-box, .dark .hook-box { fill: #1e293b; stroke: #475569; }
              :root.dark .crisis-box, .dark .crisis-box { fill: #4c0519; stroke: #e11d48; }
              :root.dark .god-box, .dark .god-box { fill: #3b0764; stroke: #c084fc; }
              :root.dark .corinth-box, .dark .corinth-box { fill: #064e3b; stroke: #059669; }
              :root.dark .titus-box, .dark .titus-box { fill: #052e16; stroke: #16a34a; }
              :root.dark .paul-box, .dark .paul-box { fill: #2e1065; stroke: #a855f7; }

              :root.dark .txt-h, .dark .txt-h { fill: #f8fafc; }
              :root.dark .txt-g, .dark .txt-g { fill: #c084fc; }
              :root.dark .txt-b, .dark .txt-b { fill: #cbd5e1; }
            `}</style>

            {/* Top Row: Distant Hook from 2:12-13 to 7:5 */}
            <g transform="translate(40, 25)">
              <rect width="250" height="95" className="card-box hook-box" />
              <rect x="12" y="10" width="85" height="18" rx="9" fill="#64748b" />
              <text x="54" y="22" textAnchor="middle" className="pill-tag">2:12–13 特羅亞</text>
              <text x="14" y="48" className="txt-h">心靈沒有安寧 (anesis)</text>
              <text x="14" y="66" className="txt-g">因為沒有遇見兄弟提多</text>
              <text x="14" y="82" className="txt-b">便辭別那裡的人往馬其頓去</text>
            </g>

            {/* Bridge Arrow across 2:14-7:4 */}
            <path d="M 295 72 L 350 72" stroke="#0284c7" strokeWidth="2" strokeDasharray="5,4" fill="none" markerEnd="url(#dashed-arrow)" />
            <text x="325" y="60" textAnchor="middle" fill="#0284c7" style={{ fontSize: "10px", fontWeight: "700" }}>跨越 4 章半</text>

            <g transform="translate(355, 25)">
              <rect width="265" height="95" className="card-box crisis-box" />
              <rect x="12" y="10" width="85" height="18" rx="9" fill="#e11d48" />
              <text x="54" y="22" textAnchor="middle" className="pill-tag">7:5 馬其頓行旅</text>
              <text x="14" y="48" className="txt-h">肉體毫無安寧 (oudemian anesin)</text>
              <text x="14" y="66" className="txt-g" style={{ fill: "#be123c" }}>「外有爭戰，內有懼怕」</text>
              <text x="14" y="82" className="txt-b">使徒真實瓦器脆弱性，無安舒妥協</text>
            </g>

            {/* Turning Point Hook into God */}
            <path d="M 485 120 L 485 155" stroke="#7c3aed" strokeWidth="2.5" fill="none" markerEnd="url(#relay-arrow)" />
            <text x="500" y="145" fill="#7c3aed" style={{ fontSize: "11px", fontWeight: "700" }}>然而 (all') 逆轉！</text>

            {/* Central God Node (Comfort Source, Isa 49:13) */}
            <g transform="translate(260, 160)">
              <rect width="450" height="85" className="card-box god-box" />
              <rect x="14" y="10" width="135" height="18" rx="9" fill="#9333ea" />
              <text x="81" y="22" textAnchor="middle" className="pill-tag">7:6 神聖安慰源頭</text>
              <text x="16" y="48" className="txt-h">「那安慰喪氣之人的上帝」(ho parakalōn tous tapeinous)</text>
              <text x="16" y="66" className="txt-g">正典以賽亞書 49:13 末世彌賽亞之歌的歷史臨在</text>
              <text x="16" y="80" className="txt-b">上帝的主權安慰化為肢體同在的接力棒 (en tē parousia Titou)</text>
            </g>

            {/* Downward Triadic Relay Flow */}
            <path d="M 330 245 C 330 270, 190 270, 190 290" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#relay-arrow)" />
            <path d="M 485 245 L 485 290" stroke="#22c55e" strokeWidth="2" fill="none" markerEnd="url(#relay-arrow)" />
            <path d="M 640 245 C 640 270, 780 270, 780 290" stroke="#8b5cf6" strokeWidth="2" fill="none" markerEnd="url(#relay-arrow)" />

            {/* Node 1: Corinthian Church Repentance (Bottom Left) */}
            <g transform="translate(40, 295)">
              <rect width="265" height="120" className="card-box corinth-box" />
              <rect x="12" y="10" width="100" height="18" rx="9" fill="#059669" />
              <text x="62" y="22" textAnchor="middle" className="pill-tag">管道一・哥林多教會</text>
              <text x="14" y="46" className="txt-h">痛悔與愛意三重回響</text>
              <text x="14" y="64" className="txt-g">想念・哀慟・為我發的熱心</text>
              <text x="14" y="82" className="txt-b">・epipothēsis（切慕想念父親）</text>
              <text x="14" y="98" className="txt-b">・odyrmos（為過犯放聲哀痛）</text>
              <text x="14" y="114" className="txt-b">・zēlos hyper emou（捍衛使徒熱誠）</text>
            </g>

            {/* Connecting Arrow from Church to Titus */}
            <path d="M 305 355 L 340 355" stroke="#10b981" strokeWidth="2" fill="none" markerEnd="url(#relay-arrow)" />

            {/* Node 2: Titus (Bottom Center) */}
            <g transform="translate(345, 295)">
              <rect width="250" height="120" className="card-box titus-box" />
              <rect x="12" y="10" width="85" height="18" rx="9" fill="#16a34a" />
              <text x="54" y="22" textAnchor="middle" className="pill-tag">管道二・特使提多</text>
              <text x="14" y="46" className="txt-h">提多心靈得著安慰</text>
              <text x="14" y="64" className="txt-g">pareklēthē eph' hymin</text>
              <text x="14" y="82" className="txt-b">・從焦慮特使化為平安器皿</text>
              <text x="14" y="98" className="txt-b">・親身同在 (parousia) 帶來第一道光</text>
              <text x="14" y="114" className="txt-b">・向保羅帶回教會復和好消息</text>
            </g>

            {/* Connecting Arrow from Titus to Paul */}
            <path d="M 595 355 L 630 355" stroke="#22c55e" strokeWidth="2" fill="none" markerEnd="url(#relay-arrow)" />

            {/* Node 3: Paul's Doubled Joy (Bottom Right) */}
            <g transform="translate(635, 295)">
              <rect width="265" height="120" className="card-box paul-box" />
              <rect x="12" y="10" width="100" height="18" rx="9" fill="#7c3aed" />
              <text x="62" y="22" textAnchor="middle" className="pill-tag">管道三・使徒保羅</text>
              <text x="14" y="46" className="txt-h">更加歡喜・雙倍安慰</text>
              <text x="14" y="64" className="txt-g">hōste me mallon charēnai</text>
              <text x="14" y="82" className="txt-b">・提多的到來 ＋ 教會回轉消息</text>
              <text x="14" y="98" className="txt-b">・安慰在身體流轉，喜樂幾何倍增</text>
              <text x="14" y="114" className="txt-b">・應驗 1:3–4 患難中同得安慰總綱</text>
            </g>
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3.5 pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-purple-800 dark:text-purple-300">安慰機制：</span>
          <span>神聖安慰不憑空懸浮，藉教會痛悔、特使提多與喪氣使徒彼此傳遞倍增</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          駁斥分割論：2:12–13 與 7:5–6 遠距鉤連證明三明治鑲嵌結構完整性
        </div>
      </div>
    </figure>
  );
}

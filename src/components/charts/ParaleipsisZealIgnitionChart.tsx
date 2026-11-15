import React from 'react';

export const ParaleipsisZealIgnitionChart: React.FC = () => {
  return (
    <div className="my-8 p-6 bg-gradient-to-br from-amber-50/80 via-stone-50 to-orange-50/50 dark:from-stone-900 dark:via-stone-900/95 dark:to-amber-950/30 rounded-2xl border border-amber-200/70 dark:border-amber-800/40 shadow-sm">
      <div className="mb-4 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-amber-800 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-900/50 rounded-full mb-2">
          修辭結構與連鎖反應圖解（哥林多後書 9:1-2）
        </span>
        <h5 className="text-lg font-bold text-stone-800 dark:text-stone-100">
          「略提法（Paraleipsis）」修辭策略與跨教會熱心點燃鏈
        </h5>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
          保羅藉「寫信是多餘的」肯定哥林多前一年預備好的初心，呈現亞該亞與馬其頓雙向激勵的恩典循環
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 360"
          className="w-full h-auto min-w-[640px]"
          role="img"
          aria-label="略提法修辭策略與跨教會熱心點燃鏈"
        >
          <defs>
            <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fde68a" />
            </linearGradient>
            <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ccfbf1" />
              <stop offset="100%" stopColor="#99f6e4" />
            </linearGradient>
            <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffe4e6" />
              <stop offset="100%" stopColor="#fecdd3" />
            </linearGradient>
            <marker
              id="arrowAmber"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706" />
            </marker>
            <marker
              id="arrowTeal"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0d9488" />
            </marker>
          </defs>

          {/* Top Rhetoric Banner */}
          <rect
            x="40"
            y="18"
            width="720"
            height="78"
            rx="14"
            fill="url(#amberGrad)"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
          <text x="400" y="44" textAnchor="middle" className="text-sm font-bold" fill="#78350f">
            古典修辭「略提法（Paraleipsis）」：表面聲明「無需再寫（perisson）」➔ 實則喚醒尊嚴與承諾
          </text>
          <text x="400" y="66" textAnchor="middle" className="text-xs" fill="#92400e">
            第 1 節：「論到供給聖徒的事（diakonias tēs eis tous hagious），我寫信給你們，於我是多餘的」
          </text>
          <text x="400" y="84" textAnchor="middle" className="text-xs" fill="#b45309">
            牧養智慧：不以律法斥責催逼，乃以「我知道你們樂意的心（oida gar tēn prothymian hymōn）」溫柔託住信徒
          </text>

          {/* Stage 1: Achaia 1 Year Ago */}
          <rect
            x="40"
            y="135"
            width="215"
            height="175"
            rx="14"
            fill="#ffffff"
            stroke="#d97706"
            strokeWidth="2"
          />
          <rect x="40" y="135" width="215" height="36" rx="14" fill="#f59e0b" />
          <text x="147" y="158" textAnchor="middle" className="text-xs font-bold" fill="#ffffff">
            第一階段：亞該亞去年的初心
          </text>
          <text x="147" y="192" textAnchor="middle" className="text-sm font-bold" fill="#1c1917">
            預備好了（parēskeuastai）
          </text>
          <text x="147" y="212" textAnchor="middle" className="text-xs" fill="#57534e">
            完成式被動：自去年起已就緒
          </text>
          <line x1="65" y1="226" x2="230" y2="226" stroke="#e7e5e4" strokeWidth="1" />
          <text x="147" y="248" textAnchor="middle" className="text-xs font-semibold" fill="#b45309">
            內在甘心（prothymia）
          </text>
          <text x="147" y="268" textAnchor="middle" className="text-xs" fill="#44403c">
            發自本心的外顯火熱（zēlos）
          </text>
          <text x="147" y="290" textAnchor="middle" className="text-xs" fill="#78716c">
            成為愛心供給的最初火種
          </text>

          {/* Arrow 1 -> 2 */}
          <path
            d="M 255 215 L 288 215"
            stroke="#d97706"
            strokeWidth="2.5"
            markerEnd="url(#arrowAmber)"
          />

          {/* Stage 2: Paul's Ongoing Boast */}
          <rect
            x="292"
            y="135"
            width="215"
            height="175"
            rx="14"
            fill="url(#tealGrad)"
            stroke="#0d9488"
            strokeWidth="2"
          />
          <rect x="292" y="135" width="215" height="36" rx="14" fill="#0d9488" />
          <text x="400" y="158" textAnchor="middle" className="text-xs font-bold" fill="#ffffff">
            第二階段：保羅的見證橋樑
          </text>
          <text x="400" y="192" textAnchor="middle" className="text-sm font-bold" fill="#134e4a">
            常誇獎你們（kauchōmai）
          </text>
          <text x="400" y="212" textAnchor="middle" className="text-xs" fill="#115e59">
            現在式持續動作：向馬其頓見證
          </text>
          <line x1="315" y1="226" x2="485" y2="226" stroke="#5eead4" strokeWidth="1" />
          <text x="400" y="248" textAnchor="middle" className="text-xs font-semibold" fill="#0f766e">
            公開肯定神在哥林多的作為
          </text>
          <text x="400" y="268" textAnchor="middle" className="text-xs" fill="#134e4a">
            將亞該亞的應許化為宣教激勵
          </text>
          <text x="400" y="290" textAnchor="middle" className="text-xs" fill="#115e59">
            連結南北兩省眾教會的肢體網
          </text>

          {/* Arrow 2 -> 3 */}
          <path
            d="M 507 215 L 540 215"
            stroke="#0d9488"
            strokeWidth="2.5"
            markerEnd="url(#arrowTeal)"
          />

          {/* Stage 3: Macedonia Ignited */}
          <rect
            x="545"
            y="135"
            width="215"
            height="175"
            rx="14"
            fill="url(#roseGrad)"
            stroke="#e11d48"
            strokeWidth="2"
          />
          <rect x="545" y="135" width="215" height="36" rx="14" fill="#e11d48" />
          <text x="652" y="158" textAnchor="middle" className="text-xs font-bold" fill="#ffffff">
            第三階段：馬其頓被點燃行動
          </text>
          <text x="652" y="192" textAnchor="middle" className="text-sm font-bold" fill="#881337">
            激動了許多人（ērethisen）
          </text>
          <text x="652" y="212" textAnchor="middle" className="text-xs" fill="#9f1239">
            不定過去式：極貧中湧出豐盛慷慨
          </text>
          <line x1="568" y1="226" x2="735" y2="226" stroke="#fda4af" strokeWidth="1" />
          <text x="652" y="248" textAnchor="middle" className="text-xs font-semibold" fill="#be123c">
            過了力量地甘心捐助（8:1-4）
          </text>
          <text x="652" y="268" textAnchor="middle" className="text-xs" fill="#881337">
            化感動為具體完成的奉獻行動
          </text>
          <text x="652" y="290" textAnchor="middle" className="text-xs" fill="#9f1239">
            反過來成為哥林多完工的催逼
          </text>

          {/* Feedback Loop Arrow from Stage 3 back to Stage 1 */}
          <path
            d="M 652 310 Q 400 355 147 314"
            fill="none"
            stroke="#d97706"
            strokeWidth="2"
            strokeDasharray="6 4"
            markerEnd="url(#arrowAmber)"
          />
          <rect x="255" y="322" width="290" height="26" rx="8" fill="#fffbeb" stroke="#f59e0b" />
          <text x="400" y="339" textAnchor="middle" className="text-xs font-bold" fill="#92400e">
            回流激勵：馬其頓的實踐喚醒亞該亞將「去年的預備」化為「今日的完工」
          </text>
        </svg>
      </div>
    </div>
  );
};

export default ParaleipsisZealIgnitionChart;

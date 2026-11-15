import React from 'react';

export const PriestlyLeitourgiaDoxologyChart: React.FC = () => {
  return (
    <div className="my-8 p-6 bg-gradient-to-br from-amber-50/90 via-stone-50 to-purple-50/50 dark:from-stone-900 dark:via-stone-900/95 dark:to-purple-950/20 rounded-2xl border border-amber-200/80 dark:border-amber-800/40 shadow-sm">
      <div className="mb-4 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-800 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-900/50 rounded-full mb-2">
          祭司禮拜職任與終極頌榮圖解（哥林多後書 9:12-15）
        </span>
        <h5 className="text-lg font-bold text-stone-800 dark:text-stone-100">
          「供給的祭司禮拜（Diakonia tēs Leitourgias）」水平與垂直雙向頌榮圖
        </h5>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
          從外邦與猶太教會的實質團契與切切代禱，直達「感謝神，因祂有說不盡的恩賜（anekdiēgētō autou dōrea）」之最高峰
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 390"
          className="w-full h-auto min-w-[640px]"
          role="img"
          aria-label="供給的祭司禮拜水平與垂直雙向頌榮圖"
        >
          <defs>
            <marker
              id="arrowGold"
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
              id="arrowPurple"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#7e22ce" />
            </marker>
          </defs>

          {/* Top Pinnacle: V.15 Doxology & Macro-Inclusio */}
          <rect
            x="140"
            y="16"
            width="520"
            height="86"
            rx="16"
            fill="#fef3c7"
            stroke="#d97706"
            strokeWidth="2.5"
          />
          <text x="400" y="42" textAnchor="middle" className="text-sm font-bold" fill="#78350f">
            第 15 節終極頌榮：「感謝神，因祂有說不盡的恩賜（Charis tō theō epi tē anekdiēgētō autou dōrea）！」
          </text>
          <text x="400" y="64" textAnchor="middle" className="text-xs" fill="#92400e">
            新約唯一孤立詞（hapax legomenon）：超越人類語言所能述說的最高禮物 — 基督自己（呼應 8:1, 8:9 首尾呼應）
          </text>
          <text x="400" y="84" textAnchor="middle" className="text-xs font-semibold" fill="#b45309">
            垂直向度：叫許多人越發感謝神（perisseuousa dia pollōn eucharistiōn）並將榮耀歸與神（doxazontes ton theon）
          </text>

          {/* Vertical Arrows Going Up to God */}
          <path
            d="M 220 155 L 300 105"
            stroke="#d97706"
            strokeWidth="2.5"
            markerEnd="url(#arrowGold)"
          />
          <path
            d="M 580 155 L 500 105"
            stroke="#d97706"
            strokeWidth="2.5"
            markerEnd="url(#arrowGold)"
          />

          {/* Center Altar: Diakonia tes Leitourgias (V.12) */}
          <rect
            x="275"
            y="150"
            width="250"
            height="100"
            rx="14"
            fill="#f3e8ff"
            stroke="#9333ea"
            strokeWidth="2"
          />
          <text x="400" y="176" textAnchor="middle" className="text-sm font-bold" fill="#581c87">
            這供給的祭司禮拜職任
          </text>
          <text x="400" y="196" textAnchor="middle" className="text-xs font-semibold" fill="#6b21a8">
            hē diakonia tēs leitourgias tautēs
          </text>
          <text x="400" y="216" textAnchor="middle" className="text-xs" fill="#7e22ce">
            結合「日常桌邊服事」與「聖殿神聖供職」
          </text>
          <text x="400" y="234" textAnchor="middle" className="text-xs" fill="#581c87">
            以經過試驗的憑據（dokimē）印證福音順服
          </text>

          {/* Left Box: Gentile Corinth Church */}
          <rect
            x="30"
            y="150"
            width="210"
            height="145"
            rx="14"
            fill="#ecfdf5"
            stroke="#10b981"
            strokeWidth="2"
          />
          <rect x="30" y="150" width="210" height="34" rx="14" fill="#059669" />
          <text x="135" y="172" textAnchor="middle" className="text-xs font-bold" fill="#ffffff">
            外邦哥林多教會（施予方）
          </text>
          <text x="135" y="204" textAnchor="middle" className="text-xs font-bold" fill="#065f46">
            • 承認基督福音而有的順服
          </text>
          <text x="135" y="222" textAnchor="middle" className="text-xs" fill="#047857">
            hypotagē tēs homologias（源頭屬格）
          </text>
          <text x="135" y="250" textAnchor="middle" className="text-xs font-bold" fill="#065f46">
            • 團契相交的慷慨分享
          </text>
          <text x="135" y="268" textAnchor="middle" className="text-xs" fill="#047857">
            haplotēti tēs koinōnias（向他們與眾人）
          </text>

          {/* Right Box: Jerusalem Jewish Saints */}
          <rect
            x="560"
            y="150"
            width="210"
            height="145"
            rx="14"
            fill="#eff6ff"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          <rect x="560" y="150" width="210" height="34" rx="14" fill="#2563eb" />
          <text x="665" y="172" textAnchor="middle" className="text-xs font-bold" fill="#ffffff">
            耶路撒冷猶太聖徒（受惠方）
          </text>
          <text x="665" y="204" textAnchor="middle" className="text-xs font-bold" fill="#1e40af">
            • 缺乏得著補足與添滿
          </text>
          <text x="665" y="222" textAnchor="middle" className="text-xs" fill="#1d4ed8">
            prosanaplērousa ta hysterēmata
          </text>
          <text x="665" y="250" textAnchor="middle" className="text-xs font-bold" fill="#1e40af">
            • 看見神超越一切的極大恩典
          </text>
          <text x="665" y="268" textAnchor="middle" className="text-xs" fill="#1d4ed8">
            tēn hyperballousan charin tou theou
          </text>

          {/* Horizontal Arrows between Corinth and Jerusalem */}
          <path
            d="M 240 198 L 273 198"
            stroke="#7e22ce"
            strokeWidth="2"
            markerEnd="url(#arrowPurple)"
          />
          <path
            d="M 525 198 L 558 198"
            stroke="#7e22ce"
            strokeWidth="2"
            markerEnd="url(#arrowPurple)"
          />

          {/* Bottom Prayer & Yearning Bridge (V.14) */}
          <path
            d="M 665 295 Q 400 375 135 298"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            markerEnd="url(#arrowPurple)"
          />
          <rect x="175" y="320" width="450" height="50" rx="10" fill="#eff6ff" stroke="#60a5fa" />
          <text x="400" y="342" textAnchor="middle" className="text-xs font-bold" fill="#1e3a8a">
            第 14 節水平回流：耶路撒冷聖徒「在為你們的祈禱中切切想念你們（deēsei hyper hymōn epipothountōn hymas）」
          </text>
          <text x="400" y="360" textAnchor="middle" className="text-xs" fill="#1d4ed8">
            跨越種族與地域鴻溝，外邦與猶太肢體在基督的恩典與代禱中合而為一
          </text>
        </svg>
      </div>
    </div>
  );
};

export default PriestlyLeitourgiaDoxologyChart;

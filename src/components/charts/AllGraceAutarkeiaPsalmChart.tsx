import React from 'react';

export const AllGraceAutarkeiaPsalmChart: React.FC = () => {
  return (
    <div className="my-8 p-6 bg-gradient-to-br from-amber-50/80 via-stone-50 to-sky-50/50 dark:from-stone-900 dark:via-stone-900/95 dark:to-sky-950/20 rounded-2xl border border-amber-200/70 dark:border-amber-800/40 shadow-sm">
      <div className="mb-4 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-sky-800 dark:text-sky-300 bg-sky-100/80 dark:bg-sky-900/50 rounded-full mb-2">
          五重全稱詞與詩篇互文圖解（哥林多後書 9:8-9）
        </span>
        <h5 className="text-lg font-bold text-stone-800 dark:text-stone-100">
          五重「全稱恩典瀑布」重塑斯多亞自足觀（Autarkeia）與詩篇 112:9 互文
        </h5>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
          從哲學家「孤立少欲的自我封閉」轉向信徒「紮根於神全能供應、流向各樣善事的永恆仁義」
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 380"
          className="w-full h-auto min-w-[640px]"
          role="img"
          aria-label="五重全稱恩典瀑布與詩篇112篇互文圖解"
        >
          {/* Top Cascade: 5x pas/panto + 2x perisseuo in 9:8 */}
          <rect
            x="30"
            y="16"
            width="740"
            height="145"
            rx="16"
            fill="#fffbeb"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <text x="400" y="42" textAnchor="middle" className="text-sm font-bold" fill="#78350f">
            第 8 節：神有大能（dynatei de ho theos）啟動「五重全稱詞」與「雙重充盈」恩典流
          </text>

          {/* 5 Pills */}
          <rect x="48" y="58" width="130" height="58" rx="10" fill="#fef3c7" stroke="#d97706" />
          <text x="113" y="80" textAnchor="middle" className="text-xs font-bold" fill="#92400e">
            1. 各樣的恩惠
          </text>
          <text x="113" y="98" textAnchor="middle" className="text-xs" fill="#b45309">
            pasan charin
          </text>

          <rect x="190" y="58" width="130" height="58" rx="10" fill="#fef3c7" stroke="#d97706" />
          <text x="255" y="80" textAnchor="middle" className="text-xs font-bold" fill="#92400e">
            2. 在凡事上
          </text>
          <text x="255" y="98" textAnchor="middle" className="text-xs" fill="#b45309">
            en panti（全領域）
          </text>

          <rect x="332" y="58" width="130" height="58" rx="10" fill="#fef3c7" stroke="#d97706" />
          <text x="397" y="80" textAnchor="middle" className="text-xs font-bold" fill="#92400e">
            3. 常常／在各時
          </text>
          <text x="397" y="98" textAnchor="middle" className="text-xs" fill="#b45309">
            pantote（全時間）
          </text>

          <rect x="474" y="58" width="130" height="58" rx="10" fill="#e0f2fe" stroke="#0284c7" />
          <text x="539" y="80" textAnchor="middle" className="text-xs font-bold" fill="#075985">
            4. 一切的充足
          </text>
          <text x="539" y="98" textAnchor="middle" className="text-xs" fill="#0369a1">
            pasan autarkeian
          </text>

          <rect x="616" y="58" width="136" height="58" rx="10" fill="#dcfce7" stroke="#16a34a" />
          <text x="684" y="80" textAnchor="middle" className="text-xs font-bold" fill="#166534">
            5. 各樣的善事
          </text>
          <text x="684" y="98" textAnchor="middle" className="text-xs" fill="#15803d">
            pan ergon agathon
          </text>

          <text x="400" y="142" textAnchor="middle" className="text-xs font-semibold" fill="#92400e">
            雙重充盈動詞：使恩惠多多加給你們（perisseusai）➔ 使你們能多多行善（perisseuēte）
          </text>

          {/* Bottom Left: Stoic vs Pauline Autarkeia */}
          <rect
            x="30"
            y="182"
            width="355"
            height="180"
            rx="14"
            fill="#f8fafc"
            stroke="#64748b"
            strokeWidth="1.5"
          />
          <rect x="30" y="182" width="355" height="36" rx="14" fill="#475569" />
          <text x="207" y="205" textAnchor="middle" className="text-xs font-bold" fill="#ffffff">
            世界觀重塑：兩種「充足（Autarkeia）」的對比
          </text>
          <text x="50" y="240" className="text-xs font-bold" fill="#334155">
            • 斯多亞與犬儒學派的「自給自足」：
          </text>
          <text x="58" y="258" className="text-xs" fill="#475569">
            靠壓抑慾望、切斷外在依賴，築起孤立無求的防禦高牆
          </text>
          <text x="50" y="290" className="text-xs font-bold" fill="#0369a1">
            • 保羅基督徒的「神恩充足」：
          </text>
          <text x="58" y="308" className="text-xs" fill="#0f766e">
            完全倚靠神源源不絕的供應，不為囤積自保，乃為慷慨湧流
          </text>
          <text x="58" y="330" className="text-xs font-semibold" fill="#047857">
            定義：永遠夠自己需用，並且隨時有餘可以分給缺乏者
          </text>

          {/* Bottom Right: Psalm 111 & 112 Twin Psalms */}
          <rect
            x="415"
            y="182"
            width="355"
            height="180"
            rx="14"
            fill="#f0fdf4"
            stroke="#16a34a"
            strokeWidth="1.5"
          />
          <rect x="415" y="182" width="355" height="36" rx="14" fill="#15803d" />
          <text x="592" y="205" textAnchor="middle" className="text-xs font-bold" fill="#ffffff">
            第 9 節：詩篇 111 與 112 篇雙子字母詩的互文（詩 112:9）
          </text>
          <text x="435" y="240" className="text-xs font-bold" fill="#166534">
            • 兩個無連詞不定過去式動作（Asyndeton）：
          </text>
          <text x="443" y="258" textAnchor="middle" className="text-xs" fill="#15803d">
            </text>
          <text x="443" y="258" className="text-xs" fill="#15803d">
            「他廣撒了（eskorpisen）、他給了窮人（edōken tois penēsin）」
          </text>
          <text x="435" y="288" className="text-xs font-bold" fill="#166534">
            • 轉化為現在持續式的永恆存留：
          </text>
          <text x="443" y="306" className="text-xs" fill="#15803d">
            「他的仁義存到永遠（hē dikaiosynē autou menei eis ton aiōna）」
          </text>
          <text x="443" y="330" className="text-xs font-semibold" fill="#065f46">
            神學深意：信徒效法神慷慨施捨（詩 112），活出神永存的仁義（詩 111）
          </text>
        </svg>
      </div>
    </div>
  );
};

export default AllGraceAutarkeiaPsalmChart;

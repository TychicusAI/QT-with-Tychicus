import React from 'react';

export const BlessingVsAvaricePrepChart: React.FC = () => {
  return (
    <div className="my-8 p-6 bg-gradient-to-br from-stone-50 via-amber-50/50 to-emerald-50/40 dark:from-stone-900 dark:via-stone-900/95 dark:to-emerald-950/20 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
      <div className="mb-4 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-900/50 rounded-full mb-2">
          神學詞彙與牧養對比圖解（哥林多後書 9:3-5）
        </span>
        <h5 className="text-lg font-bold text-stone-800 dark:text-stone-100">
          預備妥當的「福氣（Eulogia）」與臨陣勉強的「貪婪（Pleoneksia）」
        </h5>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
          保羅差遣三位弟兄先行一步（proelthōsin），護衛公開見證的根基（hypostasis），使奉獻顯為甘心祝福
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 370"
          className="w-full h-auto min-w-[640px]"
          role="img"
          aria-label="預備妥當的福氣與臨陣勉強的貪婪對比圖"
        >
          {/* Center Top Bridge: The Advance Delegation */}
          <rect
            x="170"
            y="16"
            width="460"
            height="72"
            rx="12"
            fill="#f5f5f4"
            stroke="#78716c"
            strokeWidth="1.5"
          />
          <text x="400" y="42" textAnchor="middle" className="text-sm font-bold" fill="#292524">
            使徒的預防性牧養：打發提多與兩位弟兄「先到你們那裡去（proelthōsin）」
          </text>
          <text x="400" y="63" textAnchor="middle" className="text-xs" fill="#57534e">
            三重「預備」動詞貫穿 9:3-5：預備妥當（paraskeuasmenoi）➔ 免得未預備（aparaskeuastous）➔ 預先備妥（prokatartisōsin）
          </text>
          <text x="400" y="79" textAnchor="middle" className="text-xs font-semibold" fill="#b45309">
            核心目的：保守我們確信的根基（hypostasis）不致落空（kenōthē）蒙羞
          </text>

          {/* Left Column: Prepared Blessing (Eulogia) */}
          <rect
            x="40"
            y="112"
            width="340"
            height="238"
            rx="16"
            fill="#ecfdf5"
            stroke="#10b981"
            strokeWidth="2"
          />
          <rect x="40" y="112" width="340" height="42" rx="16" fill="#059669" />
          <text x="210" y="138" textAnchor="middle" className="text-sm font-bold" fill="#ffffff">
            道路 A：出於福氣與慷慨（hōs eulogian）
          </text>

          <text x="65" y="180" className="text-xs font-bold" fill="#065f46">
            1. 希伯來背景：祝福的禮物（Berakah）
          </text>
          <text x="65" y="198" className="text-xs" fill="#047857">
            在七十士譯本中譯自「祝福」，領受神恩後滿溢流出的禮物
          </text>

          <text x="65" y="228" className="text-xs font-bold" fill="#065f46">
            2. 預先整頓：從前應許的捐貲（proepēngelmenēn）
          </text>
          <text x="65" y="246" className="text-xs" fill="#047857">
            每週按制度積存預備（林前 16:2），有條不紊完成承諾
          </text>

          <text x="65" y="276" className="text-xs font-bold" fill="#065f46">
            3. 屬靈果效：保護肢體尊嚴與使徒見證
          </text>
          <text x="65" y="294" className="text-xs" fill="#047857">
            馬其頓代表同來時見證名實相符，眾人同得造就與喜樂
          </text>

          <rect x="65" y="310" width="290" height="26" rx="6" fill="#d1fae5" />
          <text x="210" y="327" textAnchor="middle" className="text-xs font-bold" fill="#065f46">
            焦點：對準神的恩典 ➔ 甘心樂意的祝福分享
          </text>

          {/* Right Column: Unprepared Avarice / Extortion (Pleoneksia) */}
          <rect
            x="420"
            y="112"
            width="340"
            height="238"
            rx="16"
            fill="#fff1f2"
            stroke="#f43f5e"
            strokeWidth="2"
          />
          <rect x="420" y="112" width="340" height="42" rx="16" fill="#e11d48" />
          <text x="590" y="138" textAnchor="middle" className="text-sm font-bold" fill="#ffffff">
            道路 B：出於勉強與貪婪（hōs pleoneksian）
          </text>

          <text x="445" y="180" className="text-xs font-bold" fill="#881337">
            1. 雙重語義張力：貪戀不捨 vs. 強索勒索
          </text>
          <text x="445" y="198" className="text-xs" fill="#9f1239">
            既指捐獻者「抓緊錢財割肉般不捨」，也指「被當眾逼捐」
          </text>

          <text x="445" y="228" className="text-xs font-bold" fill="#881337">
            2. 怠惰拖延：毫無預備（aparaskeuastous）
          </text>
          <text x="445" y="246" className="text-xs" fill="#9f1239">
            空有去年的口頭熱心，卻未落實於日常紀律與實際行動
          </text>

          <text x="445" y="276" className="text-xs font-bold" fill="#881337">
            3. 屬靈虧損：確信反成羞愧（kataischynthōmen）
          </text>
          <text x="445" y="294" className="text-xs" fill="#9f1239">
            在貧窮卻慷慨的馬其頓人面前失信，使福音見證蒙受羞辱
          </text>

          <rect x="445" y="310" width="290" height="26" rx="6" fill="#ffe4e6" />
          <text x="590" y="327" textAnchor="middle" className="text-xs font-bold" fill="#881337">
            焦點：對準個人面子與私慾 ➔ 苦澀勉強的交易
          </text>
        </svg>
      </div>
    </div>
  );
};

export default BlessingVsAvaricePrepChart;

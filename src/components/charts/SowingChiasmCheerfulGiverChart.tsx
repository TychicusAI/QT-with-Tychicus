import React from 'react';

export const SowingChiasmCheerfulGiverChart: React.FC = () => {
  return (
    <div className="my-8 p-6 bg-gradient-to-br from-amber-50/70 via-stone-50 to-lime-50/50 dark:from-stone-900 dark:via-stone-900/95 dark:to-lime-950/20 rounded-2xl border border-amber-200/80 dark:border-amber-800/40 shadow-sm">
      <div className="mb-4 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-lime-800 dark:text-lime-300 bg-lime-100/80 dark:bg-lime-900/50 rounded-full mb-2">
          交叉對偶與內在動機圖解（哥林多後書 9:6-7）
        </span>
        <h5 className="text-lg font-bold text-stone-800 dark:text-stone-100">
          撒種與收割的交叉對偶（ABB&apos;A&apos;）與「神喜愛樂意捐獻者」
        </h5>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
          從「把奉獻當作失去」轉化為「將種子撒入恩典土壤」，由本心預先酌定（proērētai）通往神所喜愛的自由
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 360"
          className="w-full h-auto min-w-[640px]"
          role="img"
          aria-label="撒種與收割的交叉對偶與神喜愛樂意捐獻者圖表"
        >
          {/* Left Panel: Chiasm ABB'A' in 9:6 */}
          <rect
            x="35"
            y="20"
            width="355"
            height="320"
            rx="16"
            fill="#ffffff"
            stroke="#ca8a04"
            strokeWidth="2"
          />
          <rect x="35" y="20" width="355" height="40" rx="16" fill="#ca8a04" />
          <text x="212" y="45" textAnchor="middle" className="text-sm font-bold" fill="#ffffff">
            第 6 節：撒種與收割的交叉對偶（ABB&apos;A&apos;）
          </text>

          {/* A */}
          <rect x="55" y="76" width="315" height="46" rx="8" fill="#fef2f2" stroke="#fca5a5" />
          <text x="72" y="96" className="text-xs font-bold" fill="#991b1b">
            A 撒種者（ho speirōn）
          </text>
          <text x="72" y="114" className="text-xs" fill="#b91c1c">
            帶著吝惜不捨地撒種（pheidomenōs）— 視種子為消耗
          </text>

          {/* B */}
          <rect x="85" y="132" width="285" height="46" rx="8" fill="#fff1f2" stroke="#fda4af" />
          <text x="102" y="152" className="text-xs font-bold" fill="#9f1239">
            B 吝惜地（pheidomenōs）
          </text>
          <text x="102" y="170" className="text-xs" fill="#be123c">
            也必吝惜地收割（kai therisei）— 格局受限於恐懼
          </text>

          {/* B' */}
          <rect x="85" y="188" width="285" height="46" rx="8" fill="#ecfdf5" stroke="#6ee7b7" />
          <text x="102" y="208" className="text-xs font-bold" fill="#065f46">
            B&apos; 帶著眾福氣撒種（ep&apos; eulogiais）
          </text>
          <text x="102" y="226" className="text-xs" fill="#047857">
            複數「眾福氣」：建立在神應許與祝福上的慷慨撒種
          </text>

          {/* A' */}
          <rect x="55" y="244" width="315" height="46" rx="8" fill="#f0fdf4" stroke="#86efac" />
          <text x="72" y="264" className="text-xs font-bold" fill="#166534">
            A&apos; 豐盛收割（ep&apos; eulogiais kai therisei）
          </text>
          <text x="72" y="282" className="text-xs" fill="#15803d">
            也必帶著眾福氣收割 — 結出仁義與感恩的豐碩果實
          </text>

          <text x="212" y="318" textAnchor="middle" className="text-xs font-semibold" fill="#854d0e">
            導言獨立子句：「這一點你們要知道（Touto de）」
          </text>

          {/* Right Panel: Heart Disposition in 9:7 */}
          <rect
            x="415"
            y="20"
            width="350"
            height="320"
            rx="16"
            fill="#ffffff"
            stroke="#16a34a"
            strokeWidth="2"
          />
          <rect x="415" y="20" width="350" height="40" rx="16" fill="#16a34a" />
          <text x="590" y="45" textAnchor="middle" className="text-sm font-bold" fill="#ffffff">
            第 7 節：本心酌定與神所喜愛的樂意捐獻者
          </text>

          {/* Step 1: Proeretai */}
          <rect x="438" y="76" width="304" height="58" rx="10" fill="#fefce8" stroke="#fde047" />
          <text x="590" y="98" textAnchor="middle" className="text-xs font-bold" fill="#713f12">
            1. 隨本心所酌定的（kathōs proērētai tē kardia）
          </text>
          <text x="590" y="118" textAnchor="middle" className="text-xs" fill="#854d0e">
            完成式關身語態：在神面前深思熟慮後的自主決定
          </text>

          {/* Step 2: Double Negation */}
          <rect x="438" y="148" width="304" height="72" rx="10" fill="#fff1f2" stroke="#fecdd3" />
          <text x="590" y="170" textAnchor="middle" className="text-xs font-bold" fill="#881337">
            2. 雙重否定界線：排除兩種扭曲動機
          </text>
          <text x="590" y="190" textAnchor="middle" className="text-xs" fill="#9f1239">
            • 不要作難（mē ek lypēs）：非出於內在憂愁與心痛割捨
          </text>
          <text x="590" y="208" textAnchor="middle" className="text-xs" fill="#9f1239">
            • 不要勉強（ē ex anankēs）：非屈服於外在群體壓力或律法
          </text>

          {/* Step 3: Hilaron Doten */}
          <rect x="438" y="234" width="304" height="86" rx="10" fill="#ecfdf5" stroke="#34d399" />
          <text x="590" y="258" textAnchor="middle" className="text-sm font-bold" fill="#065f46">
            3. 神所喜愛的樂意人（hilaron dotēn agapa ho theos）
          </text>
          <text x="590" y="278" textAnchor="middle" className="text-xs" fill="#047857">
            引自七十士譯本箴言 22:8a（申命記 15:10 傳統）
          </text>
          <text x="590" y="296" textAnchor="middle" className="text-xs font-semibold" fill="#065f46">
            前置強調「陽光歡欣的（hilaron）」：映照神樂意施恩的本性
          </text>
        </svg>
      </div>
    </div>
  );
};

export default SowingChiasmCheerfulGiverChart;

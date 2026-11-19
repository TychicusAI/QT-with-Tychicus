import React from 'react';

export const SowingChiasmCheerfulGiverChart: React.FC = () => {
  return (
    <div className="my-6 p-4 sm:p-6 bg-gradient-to-br from-amber-50/70 via-stone-50 to-lime-50/50 dark:from-stone-900 dark:via-stone-900/95 dark:to-lime-950/20 rounded-2xl border border-amber-200/80 dark:border-amber-800/40 shadow-sm space-y-5">
      <div className="text-center space-y-1.5">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-lime-800 dark:text-lime-300 bg-lime-100/80 dark:bg-lime-900/50 rounded-full">
          交叉對偶與內在動機圖解（哥林多後書 9:6-7）
        </span>
        <h5 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 leading-snug">
          撒種與收割的交叉對偶（ABB&apos;A&apos;）與「神喜愛樂意捐獻者」
        </h5>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          從「把奉獻當作失去」轉化為「將種子撒入恩典土壤」，由本心預先酌定（<span className="italic">proērētai</span>）通往神所喜愛的自由
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Panel: Chiasm ABB'A' in 9:6 */}
        <div className="rounded-2xl bg-white dark:bg-stone-900/80 border-2 border-yellow-600/80 dark:border-amber-700/70 overflow-hidden flex flex-col">
          <div className="bg-yellow-600 dark:bg-amber-700 text-white px-4 py-2.5 text-center text-sm font-bold">
            第 6 節：撒種與收割的交叉對偶（ABB&apos;A&apos;）
          </div>
          <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
            <div className="space-y-2.5">
              {/* A */}
              <div className="rounded-xl bg-red-50/90 dark:bg-red-950/30 border border-red-300 dark:border-red-800/70 px-3.5 py-2.5">
                <p className="text-xs sm:text-sm font-bold text-red-900 dark:text-red-200">
                  A 撒種者（<span className="italic">ho speirōn</span>）
                </p>
                <p className="text-xs text-red-800 dark:text-red-300 mt-0.5">
                  帶著吝惜不捨地撒種（<span className="italic">pheidomenōs</span>）— 視種子為消耗
                </p>
              </div>

              {/* B (indented) */}
              <div className="sm:ml-6 rounded-xl bg-rose-50/90 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-800/70 px-3.5 py-2.5">
                <p className="text-xs sm:text-sm font-bold text-rose-900 dark:text-rose-200">
                  B 吝惜地（<span className="italic">pheidomenōs</span>）
                </p>
                <p className="text-xs text-rose-800 dark:text-rose-300 mt-0.5">
                  也必吝惜地收割（<span className="italic">kai therisei</span>）— 格局受限於恐懼
                </p>
              </div>

              {/* B' (indented) */}
              <div className="sm:ml-6 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/70 px-3.5 py-2.5">
                <p className="text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-200">
                  B&apos; 帶著眾福氣撒種（<span className="italic">ep&apos; eulogiais</span>）
                </p>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 mt-0.5">
                  複數「眾福氣」：建立在神應許與祝福上的慷慨撒種
                </p>
              </div>

              {/* A' */}
              <div className="rounded-xl bg-green-50/90 dark:bg-green-950/30 border border-green-300 dark:border-green-800/70 px-3.5 py-2.5">
                <p className="text-xs sm:text-sm font-bold text-green-900 dark:text-green-200">
                  A&apos; 豐盛收割（<span className="italic">ep&apos; eulogiais kai therisei</span>）
                </p>
                <p className="text-xs text-green-800 dark:text-green-300 mt-0.5">
                  也必帶著眾福氣收割 — 結出仁義與感恩的豐碩果實
                </p>
              </div>
            </div>

            <p className="text-center text-xs font-semibold text-amber-800 dark:text-amber-300 pt-1">
              導言獨立子句：「這一點你們要知道（<span className="italic">Touto de</span>）」
            </p>
          </div>
        </div>

        {/* Right Panel: Heart Disposition in 9:7 */}
        <div className="rounded-2xl bg-white dark:bg-stone-900/80 border-2 border-emerald-600/80 dark:border-emerald-700/70 overflow-hidden flex flex-col">
          <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-4 py-2.5 text-center text-sm font-bold">
            第 7 節：本心酌定與神所喜愛的樂意捐獻者
          </div>
          <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
            {/* Step 1: Proeretai */}
            <div className="rounded-xl bg-yellow-50/90 dark:bg-amber-950/30 border border-yellow-300 dark:border-amber-700/70 px-3.5 py-3 text-center space-y-1">
              <p className="text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-200">
                1. 隨本心所酌定的（<span className="italic">kathōs proērētai tē kardia</span>）
              </p>
              <p className="text-xs text-amber-800 dark:text-amber-300">
                完成式關身語態：在神面前深思熟慮後的自主決定
              </p>
            </div>

            {/* Step 2: Double Negation */}
            <div className="rounded-xl bg-rose-50/90 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-800/70 px-3.5 py-3 space-y-1.5">
              <p className="text-xs sm:text-sm font-bold text-rose-900 dark:text-rose-200 text-center">
                2. 雙重否定界線：排除兩種扭曲動機
              </p>
              <p className="text-xs text-rose-800 dark:text-rose-300">
                • 不要作難（<span className="italic">mē ek lypēs</span>）：非出於內在憂愁與心痛割捨
              </p>
              <p className="text-xs text-rose-800 dark:text-rose-300">
                • 不要勉強（<span className="italic">ē ex anankēs</span>）：非屈服於外在群體壓力或律法
              </p>
            </div>

            {/* Step 3: Hilaron Doten */}
            <div className="rounded-xl bg-emerald-50/90 dark:bg-emerald-950/30 border border-emerald-400 dark:border-emerald-700/70 px-3.5 py-3 text-center space-y-1">
              <p className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                3. 神所喜愛的樂意人（<span className="italic">hilaron dotēn agapa ho theos</span>）
              </p>
              <p className="text-xs text-emerald-800 dark:text-emerald-300">
                引自七十士譯本箴言 22:8a（申命記 15:10 傳統）
              </p>
              <p className="text-xs font-semibold text-emerald-900 dark:text-emerald-200">
                前置強調「陽光歡欣的（<span className="italic">hilaron</span>）」：映照神樂意施恩的本性
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SowingChiasmCheerfulGiverChart;

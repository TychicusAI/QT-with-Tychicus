import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export const SeedBreadIsaiahHarvestChart: React.FC = () => {
  return (
    <div className="my-6 p-4 sm:p-6 bg-gradient-to-br from-emerald-50/70 via-stone-50 to-amber-50/60 dark:from-stone-900 dark:via-stone-900/95 dark:to-emerald-950/20 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/40 shadow-sm space-y-5">
      <div className="text-center space-y-1.5">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-900/50 rounded-full">
          舊約雙重互文與恩典循環圖解（哥林多後書 9:10-11）
        </span>
        <h5 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 leading-snug">
          「種子與糧食」的雙重供應（賽 55:10）與「仁義莊稼」的感恩收割（何 10:12）
        </h5>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          至高贊助者（<span className="italic">Epichorēgōn</span>）以三個未來式應許使信徒凡事富足，不為私慾囤積，乃為活出單純慷慨並生發對神的感謝
        </p>
      </div>

      {/* 3-Step Flow */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {/* Step 1: God the Great Choregos (Isaiah 55:10) */}
        <div className="flex-1 rounded-2xl bg-yellow-50/90 dark:bg-amber-950/25 border-2 border-yellow-400/80 dark:border-amber-700/60 overflow-hidden flex flex-col">
          <div className="bg-yellow-600 dark:bg-amber-700 text-white px-3.5 py-2.5 text-center text-xs sm:text-sm font-bold">
            1. 恩典源頭：至高供應者（賽 55:10）
          </div>
          <div className="p-3.5 space-y-2.5 flex-1 flex flex-col justify-between">
            <div className="text-center">
              <p className="text-sm font-bold text-amber-950 dark:text-amber-200">
                那持續慷慨供應的（<span className="italic">epichorēgōn</span>）
              </p>
              <p className="text-xs text-amber-800 dark:text-amber-300 mt-0.5">
                源自古希臘全額出資的合唱團贊助人
              </p>
            </div>
            <div className="space-y-2">
              <div className="rounded-xl bg-yellow-100/90 dark:bg-amber-900/40 px-3 py-2 text-center">
                <p className="text-xs font-bold text-amber-900 dark:text-amber-200">
                  • 賜種給撒種的（<span className="italic">sporon tō speironti</span>）
                </p>
                <p className="text-xs text-amber-800 dark:text-amber-300 mt-0.5">
                  供向外播撒、倍增祝福的資本
                </p>
              </div>
              <div className="rounded-xl bg-yellow-100/90 dark:bg-amber-900/40 px-3 py-2 text-center">
                <p className="text-xs font-bold text-amber-900 dark:text-amber-200">
                  • 賜糧給人吃的（<span className="italic">arton eis brōsin</span>）
                </p>
                <p className="text-xs text-amber-800 dark:text-amber-300 mt-0.5">
                  供日常維生、餵養生命的日用飲食
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        {/* Step 2: Three Future Indicative Promises (Hosea 10:12) */}
        <div className="flex-1 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/30 border-2 border-emerald-500/80 dark:border-emerald-700/60 overflow-hidden flex flex-col">
          <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-3.5 py-2.5 text-center text-xs sm:text-sm font-bold">
            2. 三重未來直說語氣應許（何 10:12）
          </div>
          <div className="p-3.5 space-y-2.5 flex-1 flex flex-col justify-between text-center">
            <div className="space-y-2.5">
              <div>
                <p className="text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-200">
                  ① 必充足供應（<span className="italic">chorēgēsei</span>）
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                  持續不斷補足播撒所需的資源
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-200">
                  ② 必多多倍增（<span className="italic">plēthynei</span>）
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                  倍增你們種地的種子（<span className="italic">ton sporon hymōn</span>）
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-200">
                  ③ 必使之增長（<span className="italic">auxēsei</span>）
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                  增添「你們仁義的果子（<span className="italic">ta genēmata</span>）」
                </p>
              </div>
            </div>
            <p className="text-xs font-semibold text-emerald-900 dark:text-emerald-200 bg-emerald-100/70 dark:bg-emerald-900/40 rounded-lg px-2.5 py-1.5">
              （𝔓46, א, B, C 最古老抄本之確定應許）
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        {/* Step 3: Enriched in Everything for All Generosity (9:11) */}
        <div className="flex-1 rounded-2xl bg-sky-50/90 dark:bg-sky-950/30 border-2 border-sky-500/80 dark:border-sky-700/60 overflow-hidden flex flex-col">
          <div className="bg-sky-600 dark:bg-sky-700 text-white px-3.5 py-2.5 text-center text-xs sm:text-sm font-bold">
            3. 富足的終極目的（第 11 節）
          </div>
          <div className="p-3.5 space-y-2.5 flex-1 flex flex-col justify-between">
            <div className="text-center">
              <p className="text-sm font-bold text-sky-900 dark:text-sky-200">
                凡事被使之富足（<span className="italic">en panti ploutizomenoi</span>）
              </p>
              <p className="text-xs text-sky-700 dark:text-sky-300 mt-0.5">
                神聖被動分詞：神親自使信徒富足
              </p>
            </div>
            <div className="space-y-2">
              <div className="rounded-xl bg-sky-100/90 dark:bg-sky-900/40 px-3 py-2 text-center">
                <p className="text-xs font-bold text-sky-900 dark:text-sky-200">
                  為了活出一切單純的慷慨
                </p>
                <p className="text-xs text-sky-800 dark:text-sky-300 mt-0.5">
                  <span className="italic">eis pasan haplotēta</span>（非為奢華囤積）
                </p>
              </div>
              <div className="rounded-xl bg-emerald-100/90 dark:bg-emerald-900/40 px-3 py-2 text-center">
                <p className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                  終極果效：生發對神的感謝
                </p>
                <p className="text-xs italic text-emerald-800 dark:text-emerald-300 mt-0.5">
                  katergazetai ... eucharistian tō theō
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Warning & Theology Bar */}
      <div className="rounded-xl bg-stone-50/95 dark:bg-stone-900/70 border border-stone-300 dark:border-stone-700 px-4 py-3.5 text-center space-y-1 text-xs sm:text-sm leading-relaxed">
        <p className="font-bold text-stone-800 dark:text-stone-100">
          顛覆成功神學的管道神學：分辨手裡的「麵包（<span className="italic">arton</span>）」與「種子（<span className="italic">sporon</span>）」
        </p>
        <p className="text-stone-600 dark:text-stone-400">
          若把神賜下作播撒用的「種子」當作私慾享樂的「麵包」一口吞下，恩典的循環就在此中斷；
        </p>
        <p className="font-semibold text-emerald-700 dark:text-emerald-300">
          唯有將種子慷慨撒入他人的缺乏中，才能結出仁義的莊稼（<span className="italic">genēmata</span>），化為歸與父神的萬口感恩！
        </p>
      </div>
    </div>
  );
};

export default SeedBreadIsaiahHarvestChart;

import React from 'react';
import { ArrowRight } from 'lucide-react';

export const BlessingVsAvaricePrepChart: React.FC = () => {
  return (
    <div className="my-6 p-4 sm:p-6 bg-gradient-to-br from-stone-50 via-amber-50/50 to-emerald-50/40 dark:from-stone-900 dark:via-stone-900/95 dark:to-emerald-950/20 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-5">
      <div className="text-center space-y-1.5">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-900/50 rounded-full">
          神學詞彙與牧養對比圖解（哥林多後書 9:3-5）
        </span>
        <h5 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 leading-snug">
          預備妥當的「福氣（Eulogia）」與臨陣勉強的「貪婪（Pleoneksia）」
        </h5>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          保羅差遣三位弟兄先行一步（<span className="italic">proelthōsin</span>），護衛公開見證的根基（<span className="italic">hypostasis</span>），使奉獻顯為甘心祝福
        </p>
      </div>

      {/* Top Bridge: The Advance Delegation */}
      <div className="rounded-2xl bg-stone-100/90 dark:bg-stone-800/70 border border-stone-400/70 dark:border-stone-700 px-4 py-3.5 text-center space-y-1.5">
        <p className="text-sm font-bold text-stone-800 dark:text-stone-100">
          使徒的預防性牧養：打發提多與兩位弟兄「先到你們那裡去（<span className="italic">proelthōsin</span>）」
        </p>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 flex flex-wrap items-center justify-center gap-1">
          <span>三重「預備」動詞貫穿 9:3-5：預備妥當（<span className="italic">paraskeuasmenoi</span>）</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0 text-stone-500" />
          <span>免得未預備（<span className="italic">aparaskeuastous</span>）</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0 text-stone-500" />
          <span>預先備妥（<span className="italic">prokatartisōsin</span>）</span>
        </p>
        <p className="text-xs font-semibold text-amber-800 dark:text-amber-300">
          核心目的：保守我們確信的根基（<span className="italic">hypostasis</span>）不致落空（<span className="italic">kenōthē</span>）蒙羞
        </p>
      </div>

      {/* Two-Path Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Path A: Eulogia */}
        <div className="rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/30 border-2 border-emerald-500/80 dark:border-emerald-700/70 overflow-hidden flex flex-col">
          <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-4 py-2.5 text-center text-sm font-bold">
            道路 A：出於福氣與慷慨（<span className="italic">hōs eulogian</span>）
          </div>
          <div className="p-4 space-y-3 text-xs sm:text-sm leading-relaxed flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div>
                <p className="font-bold text-emerald-900 dark:text-emerald-200">
                  1. 希伯來背景：祝福的禮物（<span className="italic">Berakah</span>）
                </p>
                <p className="text-emerald-800 dark:text-emerald-300 mt-0.5">
                  在七十士譯本中譯自「祝福」，領受神恩後滿溢流出的禮物
                </p>
              </div>
              <div>
                <p className="font-bold text-emerald-900 dark:text-emerald-200">
                  2. 預先整頓：從前應許的捐貲（<span className="italic">proepēngelmenēn</span>）
                </p>
                <p className="text-emerald-800 dark:text-emerald-300 mt-0.5">
                  每週按制度積存預備（林前 16:2），有條不紊完成承諾
                </p>
              </div>
              <div>
                <p className="font-bold text-emerald-900 dark:text-emerald-200">
                  3. 屬靈果效：保護肢體尊嚴與使徒見證
                </p>
                <p className="text-emerald-800 dark:text-emerald-300 mt-0.5">
                  馬其頓代表同來時見證名實相符，眾人同得造就與喜樂
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-emerald-100 dark:bg-emerald-900/50 px-3 py-2 text-center text-xs font-bold text-emerald-900 dark:text-emerald-200">
              焦點：對準神的恩典 ➔ 甘心樂意的祝福分享
            </div>
          </div>
        </div>

        {/* Path B: Pleoneksia */}
        <div className="rounded-2xl bg-rose-50/90 dark:bg-rose-950/30 border-2 border-rose-500/80 dark:border-rose-700/70 overflow-hidden flex flex-col">
          <div className="bg-rose-600 dark:bg-rose-700 text-white px-4 py-2.5 text-center text-sm font-bold">
            道路 B：出於勉強與貪婪（<span className="italic">hōs pleoneksian</span>）
          </div>
          <div className="p-4 space-y-3 text-xs sm:text-sm leading-relaxed flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <div>
                <p className="font-bold text-rose-900 dark:text-rose-200">
                  1. 雙重語義張力：貪戀不捨 vs. 強索勒索
                </p>
                <p className="text-rose-800 dark:text-rose-300 mt-0.5">
                  既指捐獻者「抓緊錢財割肉般不捨」，也指「被當眾逼捐」
                </p>
              </div>
              <div>
                <p className="font-bold text-rose-900 dark:text-rose-200">
                  2. 怠惰拖延：毫無預備（<span className="italic">aparaskeuastous</span>）
                </p>
                <p className="text-rose-800 dark:text-rose-300 mt-0.5">
                  空有去年的口頭熱心，卻未落實於日常紀律與實際行動
                </p>
              </div>
              <div>
                <p className="font-bold text-rose-900 dark:text-rose-200">
                  3. 屬靈虧損：確信反成羞愧（<span className="italic">kataischynthōmen</span>）
                </p>
                <p className="text-rose-800 dark:text-rose-300 mt-0.5">
                  在貧窮卻慷慨的馬其頓人面前失信，使福音見證蒙受羞辱
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-rose-100 dark:bg-rose-900/50 px-3 py-2 text-center text-xs font-bold text-rose-900 dark:text-rose-200">
              焦點：對準個人面子與私慾 ➔ 苦澀勉強的交易
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlessingVsAvaricePrepChart;

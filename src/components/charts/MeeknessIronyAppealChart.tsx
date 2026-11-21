import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export const MeeknessIronyAppealChart: React.FC = () => {
  return (
    <div className="my-6 p-4 sm:p-6 bg-gradient-to-br from-purple-50 via-stone-50 to-amber-50/50 dark:from-stone-900 dark:via-stone-900/95 dark:to-purple-950/30 rounded-2xl border border-purple-200/80 dark:border-purple-800/40 shadow-sm space-y-5">
      <div className="text-center space-y-1.5">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-800 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-900/50 rounded-full">
          修辭反諷與彌賽亞溫柔結構圖（哥林多後書 10:1-2）
        </span>
        <h5 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 leading-snug">
          三重自我強調、重言法溫柔與借敵標籤的反諷張力
        </h5>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          手握審判權柄卻主動按兵不動，為迷途教會敞開最後的悔改窗口
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-3">
        <div className="flex-1 rounded-xl bg-white dark:bg-stone-900/80 border-2 border-purple-500/70 dark:border-purple-700/70 p-3.5 space-y-1.5">
          <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200">
            10:1a｜三重自我強調
          </span>
          <p className="text-sm font-bold text-stone-800 dark:text-stone-100">
            就是我保羅親自（<span className="italic">Autos de egō Paulos</span>）
          </p>
          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            以「基督寬容的溫柔」（<span className="italic">praütēs kai epieikeia</span>，重言法）作勸勉根基，映照彌賽亞君王雅量（詩 45:4；亞 9:9）
          </p>
        </div>

        <div className="flex items-center justify-center text-purple-500 dark:text-purple-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        <div className="flex-1 rounded-xl bg-white dark:bg-stone-900/80 border-2 border-rose-500/70 dark:border-rose-700/70 p-3.5 space-y-1.5">
          <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200">
            10:1b–2a｜借敵標籤反諷
          </span>
          <p className="text-sm font-bold text-stone-800 dark:text-stone-100">
            見面卑微（<span className="italic">tapeinos</span>）vs. 遠方放膽（<span className="italic">tharrō</span>）
          </p>
          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            對手企圖以表裡不一的抹黑，將保羅定性為「憑血氣行事」（<span className="italic">kata sarka</span>）的紙老虎
          </p>
        </div>

        <div className="flex items-center justify-center text-purple-500 dark:text-purple-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        <div className="flex-1 rounded-xl bg-white dark:bg-stone-900/80 border-2 border-emerald-500/70 dark:border-emerald-700/70 p-3.5 space-y-1.5">
          <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200">
            10:2b｜牧者最後懇求
          </span>
          <p className="text-sm font-bold text-stone-800 dark:text-stone-100">
            深切懇求（<span className="italic">deomai</span>）免動嚴厲
          </p>
          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            對造謠者保有果決的「勇敢」，卻盼望教會悔改回轉，叫第三次見面不必動用嚴厲管教
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeeknessIronyAppealChart;

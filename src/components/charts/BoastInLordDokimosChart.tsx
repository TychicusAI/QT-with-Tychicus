import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export const BoastInLordDokimosChart: React.FC = () => {
  return (
    <div className="my-6 p-4 sm:p-6 bg-gradient-to-br from-amber-50/70 via-stone-50 to-purple-50/50 dark:from-stone-900 dark:via-stone-900/95 dark:to-amber-950/30 rounded-2xl border border-amber-200/80 dark:border-amber-800/40 shadow-sm space-y-5">
      <div className="text-center space-y-1.5">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-amber-800 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-900/50 rounded-full">
          舊約正典互文與終極檢驗結構圖（哥林多後書 10:17-18）
        </span>
        <h5 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 leading-snug">
          從耶利米書九章到主所稱許的真金印記（<span className="italic">dokimos</span>）
        </h5>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          首尾閉合 10:12–18 交叉結構，徹底終結自我推薦，高舉唯獨在主裡的誇口
        </p>
      </div>

      {/* OT -> NT Christological Concentration */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-3">
        <div className="flex-1 rounded-xl bg-white dark:bg-stone-900/80 border border-amber-300 dark:border-amber-700/70 p-3.5 space-y-1.5">
          <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
            舊約母體｜耶利米書 9:23–24 LXX
          </span>
          <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
            不可誇智慧、勇力、財物，當因「通達（<span className="italic">syniein</span>）並認識耶和華施行慈愛、公平、公義」而誇口
          </p>
        </div>

        <div className="flex items-center justify-center text-amber-600 dark:text-amber-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        <div className="flex-1 rounded-xl bg-white dark:bg-stone-900/80 border-2 border-purple-500/70 dark:border-purple-700/70 p-3.5 space-y-1.5">
          <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200">
            10:17｜基督論濃縮改寫
          </span>
          <p className="text-sm font-bold text-stone-800 dark:text-stone-100">
            誇口的，當指著主誇口（<span className="italic">en kyriō</span>）
          </p>
          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            焦點前置「那誇口的人」，並將神一切慈愛公義作為濃縮進主耶穌基督的十架救贖裡
          </p>
        </div>
      </div>

      {/* 10:18 Final Verdict Contrast */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="rounded-xl bg-rose-50/90 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-800/70 p-3.5 space-y-1">
          <p className="text-xs sm:text-sm font-bold text-rose-900 dark:text-rose-200">
            不是（<span className="italic">ou</span>）：自己稱許的人（<span className="italic">heauton synistanōn</span>）
          </p>
          <p className="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
            回扣 10:12 自我推薦閉環；靠人為薦信與自誇換取掌聲，在神法庭前全然無效
          </p>
        </div>
        <div className="rounded-xl bg-emerald-50/90 dark:bg-emerald-950/30 border-2 border-emerald-400 dark:border-emerald-700 p-3.5 space-y-1">
          <p className="text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-200">
            乃是（<span className="italic">alla</span>）：主所稱許的人（<span className="italic">dokimos</span>）
          </p>
          <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
            經烈火檢驗合格的真金印記——聖靈藉福音在罪人生命中所結的真實果實
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoastInLordDokimosChart;

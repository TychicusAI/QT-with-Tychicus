import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export const SpiritualWarfareSiegeChart: React.FC = () => {
  return (
    <div className="my-6 p-4 sm:p-6 bg-gradient-to-br from-slate-50 via-stone-50 to-indigo-50/50 dark:from-stone-900 dark:via-stone-900/95 dark:to-indigo-950/30 rounded-2xl border border-indigo-200/80 dark:border-indigo-800/40 shadow-sm space-y-5">
      <div className="text-center space-y-1.5">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-indigo-800 dark:text-indigo-300 bg-indigo-100/80 dark:bg-indigo-900/50 rounded-full">
          句法對比與圍城攻堅拓撲圖（哥林多後書 10:3-6）
        </span>
        <h5 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 leading-snug">
          介系詞雙關對決與三重現在分詞的屬靈圍城戰
        </h5>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          活在有限肉身（<span className="italic">en sarki</span>）卻不憑血氣作戰（<span className="italic">ou kata sarka</span>），以福音神能拆毀營壘、奪回心意
        </p>
      </div>

      {/* Top Contrast: en sarki vs ou kata sarka */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="rounded-xl bg-amber-50/90 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/70 p-3.5 space-y-1">
          <p className="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200">
            讓步分詞：雖然「在肉身中」行事（<span className="italic">en sarki</span>）
          </p>
          <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
            中性存有語意：坦然承認活在有限、必朽、會疲憊流血的人類肉身中
          </p>
        </div>
        <div className="rounded-xl bg-indigo-50/90 dark:bg-indigo-950/40 border border-indigo-300 dark:border-indigo-700/70 p-3.5 space-y-1">
          <p className="text-xs sm:text-sm font-bold text-indigo-900 dark:text-indigo-200">
            主句宣告：卻絕不「憑血氣」爭戰（<span className="italic">ou kata sarka</span>）
          </p>
          <p className="text-xs text-indigo-800 dark:text-indigo-300 leading-relaxed">
            神學倫理語意：拒絕世俗修辭威逼與權謀，兵器靠神大有能力（<span className="italic">dynata tō theō</span>）
          </p>
        </div>
      </div>

      {/* Three Participles + Triple Pas */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-3">
        <div className="flex-1 rounded-xl bg-white dark:bg-stone-900/80 border-2 border-rose-500/70 dark:border-rose-700/70 p-3.5 space-y-1.5">
          <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200">
            攻勢一｜10:4b–5a
          </span>
          <p className="text-sm font-bold text-stone-800 dark:text-stone-100">
            不斷拆毀（<span className="italic">kathairountes</span>）
          </p>
          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            攻破堅固營壘（<span className="italic">ochyrōmata</span>，箴 21:22 LXX）、詭辯計謀與<strong>一切</strong>攔阻認識神的自高之事（<span className="italic">pan hypsōma</span>）
          </p>
        </div>

        <div className="flex items-center justify-center text-indigo-500 dark:text-indigo-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        <div className="flex-1 rounded-xl bg-white dark:bg-stone-900/80 border-2 border-indigo-500/70 dark:border-indigo-700/70 p-3.5 space-y-1.5">
          <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-200">
            攻勢二｜10:5b
          </span>
          <p className="text-sm font-bold text-stone-800 dark:text-stone-100">
            不斷擄回（<span className="italic">aichmalōtizontes</span>）
          </p>
          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            將<strong>一切</strong>敵對福音的心意與計謀（<span className="italic">pan noēma</span>）像戰俘般押解歸降，使其全然順服基督（<span className="italic">hypakoēn</span>）
          </p>
        </div>

        <div className="flex items-center justify-center text-indigo-500 dark:text-indigo-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        <div className="flex-1 rounded-xl bg-white dark:bg-stone-900/80 border-2 border-emerald-500/70 dark:border-emerald-700/70 p-3.5 space-y-1.5">
          <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200">
            攻勢三｜10:6
          </span>
          <p className="text-sm font-bold text-stone-800 dark:text-stone-100">
            預備責罰（<span className="italic">en hetoimō echontes</span>）
          </p>
          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            責罰<strong>一切</strong>不順服（<span className="italic">pasan parakoēn</span>），卻先溫柔等候教會多數人的順服達到完全（<span className="italic">plērōthē</span>）
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpiritualWarfareSiegeChart;

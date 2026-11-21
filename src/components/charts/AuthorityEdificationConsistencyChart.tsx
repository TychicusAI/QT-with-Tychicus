import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export const AuthorityEdificationConsistencyChart: React.FC = () => {
  return (
    <div className="my-6 p-4 sm:p-6 bg-gradient-to-br from-teal-50/70 via-stone-50 to-purple-50/50 dark:from-stone-900 dark:via-stone-900/95 dark:to-teal-950/30 rounded-2xl border border-teal-200/80 dark:border-teal-800/40 shadow-sm space-y-5">
      <div className="text-center space-y-1.5">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-teal-800 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-900/50 rounded-full">
          詞彙反轉與權柄試金石圖（哥林多後書 10:7-11）
        </span>
        <h5 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 leading-snug">
          拆毀營壘 vs. 造就教會：穿透外貌的使徒表裡如一
        </h5>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          從「只看表面」（<span className="italic">kata prosōpon</span>）轉向主賜權柄的唯一目的與言行一致鐵律
        </p>
      </div>

      {/* Top Lexical Reversal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="rounded-xl bg-rose-50/90 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-800/70 p-3.5 space-y-1">
          <p className="text-xs sm:text-sm font-bold text-rose-900 dark:text-rose-200">
            10:4｜向敵對謊言：「攻破拆毀」（<span className="italic">kathairesis</span>）
          </p>
          <p className="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
            福音兵器毫不留情拆毀攔阻認識神的堅固營壘與詭辯高牆
          </p>
        </div>
        <div className="rounded-xl bg-emerald-50/90 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/70 p-3.5 space-y-1">
          <p className="text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-200">
            10:8｜向基督教會：「建造造就」（<span className="italic">oikodomē</span>），非拆毀
          </p>
          <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
            主賜權柄（<span className="italic">exousia</span>）唯獨為了建造信徒生命（<span className="italic">ouk eis kathairesin</span>，參 13:10）
          </p>
        </div>
      </div>

      {/* Bottom 3-step Flow: 10:9-11 */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-3">
        <div className="flex-1 rounded-xl bg-white dark:bg-stone-900/80 border border-stone-300 dark:border-stone-700 p-3.5 space-y-1">
          <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
            10:10｜世俗修辭流言
          </span>
          <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
            「信件沉重利害，見面卻肉身軟弱（<span className="italic">asthenēs</span>）、演說令人輕視」——以希臘辯士台風標準貶抑使徒
          </p>
        </div>

        <div className="flex items-center justify-center text-teal-600 dark:text-teal-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        <div className="flex-1 rounded-xl bg-white dark:bg-stone-900/80 border-2 border-teal-500/70 dark:border-teal-700/70 p-3.5 space-y-1">
          <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200">
            10:11｜表裡如一鐵律
          </span>
          <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
            「不在場時信上言語如何，見面時行事也必如何」——十架權柄不靠恐嚇外貌，唯憑誠信與神大能
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorityEdificationConsistencyChart;

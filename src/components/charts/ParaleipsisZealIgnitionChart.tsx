import React from 'react';
import { ArrowRight, ArrowDown, RefreshCw } from 'lucide-react';

export const ParaleipsisZealIgnitionChart: React.FC = () => {
  return (
    <div className="my-6 p-4 sm:p-6 bg-gradient-to-br from-amber-50/80 via-stone-50 to-orange-50/50 dark:from-stone-900 dark:via-stone-900/95 dark:to-amber-950/30 rounded-2xl border border-amber-200/70 dark:border-amber-800/40 shadow-sm space-y-5">
      <div className="text-center space-y-1.5">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-amber-800 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-900/50 rounded-full">
          修辭結構與連鎖反應圖解（哥林多後書 9:1-2）
        </span>
        <h5 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 leading-snug">
          「略提法（Paraleipsis）」修辭策略與跨教會熱心點燃鏈
        </h5>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          保羅藉「寫信是多餘的」肯定哥林多前一年預備好的初心，呈現亞該亞與馬其頓雙向激勵的恩典循環
        </p>
      </div>

      {/* Top Rhetoric Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-100/90 to-amber-200/70 dark:from-amber-950/50 dark:to-amber-900/30 border border-amber-400/80 dark:border-amber-700/60 px-4 py-3.5 text-center space-y-1.5">
        <p className="text-sm font-bold text-amber-950 dark:text-amber-200 leading-snug">
          古典修辭「略提法（<span className="italic">Paraleipsis</span>）」：表面聲明「無需再寫（<span className="italic">perisson</span>）」➔ 實則喚醒尊嚴與承諾
        </p>
        <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-300">
          第 1 節：「論到供給聖徒的事（<span className="italic">diakonias tēs eis tous hagious</span>），我寫信給你們，於我是多餘的」
        </p>
        <p className="text-xs text-amber-800 dark:text-amber-400">
          牧養智慧：不以律法斥責催逼，乃以「我知道你們樂意的心（<span className="italic">oida gar tēn prothymian hymōn</span>）」溫柔託住信徒
        </p>
      </div>

      {/* 3-Stage Chain */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {/* Stage 1 */}
        <div className="flex-1 rounded-2xl bg-white dark:bg-stone-900/80 border-2 border-amber-500/80 dark:border-amber-700/70 overflow-hidden flex flex-col">
          <div className="bg-amber-500 dark:bg-amber-600 text-white px-3.5 py-2.5 text-center text-xs sm:text-sm font-bold">
            第一階段：亞該亞去年的初心
          </div>
          <div className="p-4 text-center space-y-2.5 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
                預備好了（<span className="italic">parēskeuastai</span>）
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                完成式被動：自去年起已就緒
              </p>
            </div>
            <div className="border-t border-stone-200 dark:border-stone-800 pt-2.5 space-y-1 text-xs">
              <p className="font-semibold text-amber-700 dark:text-amber-300">
                內在甘心（<span className="italic">prothymia</span>）
              </p>
              <p className="text-stone-700 dark:text-stone-300">
                發自本心的外顯火熱（<span className="italic">zēlos</span>）
              </p>
              <p className="text-stone-500 dark:text-stone-400">
                成為愛心供給的最初火種
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        {/* Stage 2 */}
        <div className="flex-1 rounded-2xl bg-teal-50/90 dark:bg-teal-950/30 border-2 border-teal-500/80 dark:border-teal-700/70 overflow-hidden flex flex-col">
          <div className="bg-teal-600 dark:bg-teal-700 text-white px-3.5 py-2.5 text-center text-xs sm:text-sm font-bold">
            第二階段：保羅的見證橋樑
          </div>
          <div className="p-4 text-center space-y-2.5 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm font-bold text-teal-950 dark:text-teal-200">
                常誇獎你們（<span className="italic">kauchōmai</span>）
              </p>
              <p className="text-xs text-teal-800 dark:text-teal-300 mt-0.5">
                現在式持續動作：向馬其頓見證
              </p>
            </div>
            <div className="border-t border-teal-200 dark:border-teal-800/70 pt-2.5 space-y-1 text-xs">
              <p className="font-semibold text-teal-800 dark:text-teal-300">
                公開肯定神在哥林多的作為
              </p>
              <p className="text-teal-900 dark:text-teal-200">
                將亞該亞的應許化為宣教激勵
              </p>
              <p className="text-teal-700 dark:text-teal-400">
                連結南北兩省眾教會的肢體網
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-teal-600 dark:text-teal-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        {/* Stage 3 */}
        <div className="flex-1 rounded-2xl bg-rose-50/90 dark:bg-rose-950/30 border-2 border-rose-500/80 dark:border-rose-700/70 overflow-hidden flex flex-col">
          <div className="bg-rose-600 dark:bg-rose-700 text-white px-3.5 py-2.5 text-center text-xs sm:text-sm font-bold">
            第三階段：馬其頓被點燃行動
          </div>
          <div className="p-4 text-center space-y-2.5 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-sm font-bold text-rose-950 dark:text-rose-200">
                激動了許多人（<span className="italic">ērethisen</span>）
              </p>
              <p className="text-xs text-rose-800 dark:text-rose-300 mt-0.5">
                不定過去式：極貧中湧出豐盛慷慨
              </p>
            </div>
            <div className="border-t border-rose-200 dark:border-rose-800/70 pt-2.5 space-y-1 text-xs">
              <p className="font-semibold text-rose-800 dark:text-rose-300">
                過了力量地甘心捐助（8:1-4）
              </p>
              <p className="text-rose-900 dark:text-rose-200">
                化感動為具體完成的奉獻行動
              </p>
              <p className="text-rose-700 dark:text-rose-400">
                反過來成為哥林多完工的催逼
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Loop Banner */}
      <div className="rounded-xl bg-amber-50/95 dark:bg-amber-950/40 border border-dashed border-amber-500 dark:border-amber-600 px-4 py-2.5 flex items-center justify-center gap-2 text-center text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200">
        <RefreshCw className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
        <span>回流激勵：馬其頓的實踐喚醒亞該亞將「去年的預備」化為「今日的完工」</span>
      </div>
    </div>
  );
};

export default ParaleipsisZealIgnitionChart;

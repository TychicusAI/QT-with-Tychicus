import React from 'react';
import { ArrowRight, ArrowDown, ArrowUp, RefreshCw } from 'lucide-react';

export const PriestlyLeitourgiaDoxologyChart: React.FC = () => {
  return (
    <div className="my-6 p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-stone-50 to-purple-50/50 dark:from-stone-900 dark:via-stone-900/95 dark:to-purple-950/20 rounded-2xl border border-amber-200/80 dark:border-amber-800/40 shadow-sm space-y-4">
      <div className="text-center space-y-1.5">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-800 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-900/50 rounded-full">
          祭司禮拜職任與終極頌榮圖解（哥林多後書 9:12-15）
        </span>
        <h5 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 leading-snug">
          「供給的祭司禮拜（Diakonia tēs Leitourgias）」水平與垂直雙向頌榮圖
        </h5>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          從外邦與猶太教會的實質團契與切切代禱，直達「感謝神，因祂有說不盡的恩賜（<span className="italic">anekdiēgētō autou dōrea</span>）」之最高峰
        </p>
      </div>

      {/* Top Pinnacle: V.15 Doxology */}
      <div className="rounded-2xl bg-amber-100/90 dark:bg-amber-950/45 border-2 border-amber-500 dark:border-amber-600 px-4 py-3.5 text-center space-y-1.5">
        <p className="text-sm font-bold text-amber-950 dark:text-amber-200 leading-snug">
          第 15 節終極頌榮：「感謝神，因祂有說不盡的恩賜（<span className="italic">Charis tō theō epi tē anekdiēgētō autou dōrea</span>）！」
        </p>
        <p className="text-xs text-amber-900 dark:text-amber-300">
          新約唯一孤立詞（<span className="italic">hapax legomenon</span>）：超越人類語言所能述說的最高禮物 — 基督自己（呼應 8:1, 8:9 首尾呼應）
        </p>
        <p className="text-xs font-semibold text-amber-800 dark:text-amber-300">
          垂直向度：叫許多人越發感謝神（<span className="italic">perisseuousa dia pollōn eucharistiōn</span>）並將榮耀歸與神（<span className="italic">doxazontes ton theon</span>）
        </p>
      </div>

      {/* Vertical Ascending Indicator */}
      <div className="flex items-center justify-center gap-8 text-amber-600 dark:text-amber-400">
        <ArrowUp className="w-5 h-5" />
        <span className="text-xs font-semibold">歸榮耀與感謝升達天父寶座</span>
        <ArrowUp className="w-5 h-5" />
      </div>

      {/* Middle 3-Column Horizontal Flow */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {/* Left: Gentile Corinth */}
        <div className="flex-1 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/30 border-2 border-emerald-500/80 dark:border-emerald-700/70 overflow-hidden flex flex-col">
          <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-3.5 py-2 text-center text-xs sm:text-sm font-bold">
            外邦哥林多教會（施予方）
          </div>
          <div className="p-3.5 space-y-2.5 text-center text-xs flex-1 flex flex-col justify-center">
            <div>
              <p className="font-bold text-emerald-900 dark:text-emerald-200">• 承認基督福音而有的順服</p>
              <p className="text-emerald-800 dark:text-emerald-300 mt-0.5">
                <span className="italic">hypotagē tēs homologias</span>（源頭屬格）
              </p>
            </div>
            <div>
              <p className="font-bold text-emerald-900 dark:text-emerald-200">• 團契相交的慷慨分享</p>
              <p className="text-emerald-800 dark:text-emerald-300 mt-0.5">
                <span className="italic">haplotēti tēs koinōnias</span>（向他們與眾人）
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center shrink-0 text-purple-600 dark:text-purple-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        {/* Center: Priestly Altar */}
        <div className="flex-1 rounded-2xl bg-purple-100/80 dark:bg-purple-950/40 border-2 border-purple-500 dark:border-purple-600 p-4 text-center flex flex-col justify-center space-y-1.5">
          <p className="text-sm font-bold text-purple-950 dark:text-purple-200">
            這供給的祭司禮拜職任
          </p>
          <p className="text-xs font-semibold italic text-purple-800 dark:text-purple-300">
            hē diakonia tēs leitourgias tautēs
          </p>
          <p className="text-xs text-purple-800 dark:text-purple-300">
            結合「日常桌邊服事」與「聖殿神聖供職」
          </p>
          <p className="text-xs text-purple-900 dark:text-purple-200">
            以經過試驗的憑據（<span className="italic">dokimē</span>）印證福音順服
          </p>
        </div>

        <div className="flex items-center justify-center shrink-0 text-purple-600 dark:text-purple-400">
          <ArrowRight className="hidden lg:block w-5 h-5" />
          <ArrowDown className="lg:hidden w-5 h-5" />
        </div>

        {/* Right: Jerusalem Jewish Saints */}
        <div className="flex-1 rounded-2xl bg-blue-50/90 dark:bg-blue-950/30 border-2 border-blue-500/80 dark:border-blue-700/70 overflow-hidden flex flex-col">
          <div className="bg-blue-600 dark:bg-blue-700 text-white px-3.5 py-2 text-center text-xs sm:text-sm font-bold">
            耶路撒冷猶太聖徒（受惠方）
          </div>
          <div className="p-3.5 space-y-2.5 text-center text-xs flex-1 flex flex-col justify-center">
            <div>
              <p className="font-bold text-blue-900 dark:text-blue-200">• 缺乏得著補足與添滿</p>
              <p className="italic text-blue-800 dark:text-blue-300 mt-0.5">
                prosanaplērousa ta hysterēmata
              </p>
            </div>
            <div>
              <p className="font-bold text-blue-900 dark:text-blue-200">• 看見神超越一切的極大恩典</p>
              <p className="italic text-blue-800 dark:text-blue-300 mt-0.5">
                tēn hyperballousan charin tou theou
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Prayer & Yearning Bridge (V.14) */}
      <div className="rounded-xl bg-blue-50/90 dark:bg-blue-950/40 border border-dashed border-blue-400 dark:border-blue-600 px-4 py-3 text-center space-y-1">
        <p className="text-xs sm:text-sm font-bold text-blue-950 dark:text-blue-200 flex items-center justify-center gap-1.5 flex-wrap">
          <RefreshCw className="w-4 h-4 shrink-0 text-blue-600 dark:text-blue-400" />
          <span>
            第 14 節水平回流：耶路撒冷聖徒「在為你們的祈禱中切切想念你們（<span className="italic">deēsei hyper hymōn epipothountōn hymas</span>）」
          </span>
        </p>
        <p className="text-xs text-blue-800 dark:text-blue-300">
          跨越種族與地域鴻溝，外邦與猶太肢體在基督的恩典與代禱中合而為一
        </p>
      </div>
    </div>
  );
};

export default PriestlyLeitourgiaDoxologyChart;

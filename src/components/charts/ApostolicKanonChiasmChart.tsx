import React from 'react';

export const ApostolicKanonChiasmChart: React.FC = () => {
  return (
    <div className="my-6 p-4 sm:p-6 bg-gradient-to-br from-emerald-50/70 via-stone-50 to-teal-50/60 dark:from-stone-900 dark:via-stone-900/95 dark:to-teal-950/25 rounded-2xl border border-teal-200/80 dark:border-teal-800/40 shadow-sm space-y-5">
      <div className="text-center space-y-1.5">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-teal-800 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-900/50 rounded-full">
          大型交叉對稱與宣教界限開展圖（哥林多後書 10:12-18）
        </span>
        <h5 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 leading-snug">
          神量界限（<span className="italic">kanōn</span>）的交叉核心與福音西進異象
        </h5>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          以 10:14「率先將基督福音傳到哥林多」為幾何樞紐，由拒絕自我推薦邁向「唯獨指著主誇口」
        </p>
      </div>

      <div className="space-y-2.5">
        {/* A */}
        <div className="rounded-xl bg-stone-100/90 dark:bg-stone-800/80 border border-stone-300 dark:border-stone-700 px-4 py-2.5">
          <p className="text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-100">
            A｜10:12 拒絕自我推薦（<span className="italic">heautous synistanontōn</span>）與循環比較
          </p>
        </div>

        {/* B */}
        <div className="sm:ml-5 rounded-xl bg-teal-50/90 dark:bg-teal-950/30 border border-teal-300 dark:border-teal-800/70 px-4 py-2.5">
          <p className="text-xs sm:text-sm font-bold text-teal-900 dark:text-teal-200">
            B｜10:13 不越過界限（<span className="italic">ouk eis ta ametra</span>），照神分派的界限（<span className="italic">metron tou kanonos</span>）夠到你們
          </p>
        </div>

        {/* C / C' Pivot */}
        <div className="sm:ml-10 rounded-xl bg-emerald-100/95 dark:bg-emerald-950/50 border-2 border-emerald-500 dark:border-emerald-600 px-4 py-3 space-y-1.5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
            ★ 結構幾何核心 Pivot（10:14a–b）
          </p>
          <p className="text-xs sm:text-sm font-bold text-emerald-950 dark:text-emerald-100">
            C｜10:14a 我們並非過度伸張（<span className="italic">hyperekteinomen</span>），好像夠不到你們那裡
          </p>
          <p className="text-xs sm:text-sm font-bold text-emerald-950 dark:text-emerald-100">
            C&apos;｜10:14b 因為我們早就率先將基督的福音傳到你們那裡了（<span className="italic">ephthasamen</span>）
          </p>
        </div>

        {/* B' */}
        <div className="sm:ml-5 rounded-xl bg-teal-50/90 dark:bg-teal-950/30 border border-teal-300 dark:border-teal-800/70 px-4 py-2.5 space-y-1">
          <p className="text-xs sm:text-sm font-bold text-teal-900 dark:text-teal-200">
            B&apos;｜10:15–16 不藉別人勞碌（<span className="italic">allotriois kopois</span>）誇口，反盼望你們信心增長
          </p>
          <p className="text-xs text-teal-800 dark:text-teal-300">
            ➔ 使界限大大開展，將福音傳到你們以外更遠之地（<span className="italic">ta hyperekeina</span>：義大利與西班牙）
          </p>
        </div>

        {/* A' */}
        <div className="rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border-2 border-amber-500/80 dark:border-amber-700 px-4 py-2.5">
          <p className="text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-100">
            A&apos;｜10:17–18 唯獨指著主誇口（耶 9:23–24）；蒙悅納（<span className="italic">dokimos</span>）乃是主所稱許的（<span className="italic">ho kyrios synistēsin</span>）
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApostolicKanonChiasmChart;

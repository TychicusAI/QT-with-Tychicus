import React from 'react';

export const SelfComparisonChiasmChart: React.FC = () => {
  return (
    <div className="my-6 p-4 sm:p-6 bg-gradient-to-br from-rose-50/70 via-stone-50 to-amber-50/60 dark:from-stone-900 dark:via-stone-900/95 dark:to-rose-950/25 rounded-2xl border border-rose-200/80 dark:border-rose-800/40 shadow-sm space-y-5">
      <div className="text-center space-y-1.5">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-rose-800 dark:text-rose-300 bg-rose-100/80 dark:bg-rose-900/50 rounded-full">
          雙重微型交叉與反身代名詞閉環圖解（哥林多後書 10:12）
        </span>
        <h5 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 leading-snug">
          假使徒的「自我度量鏡屋」與不通達（<span className="italic">ou syniasin</span>）的宣判
        </h5>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          六重反身代名詞（自己）鎖死在封閉迴圈，遙指 10:17 耶利米書 9:23「通達（<span className="italic">syniein</span>）並認識主」的正典伏筆
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left: First Micro-Chiasm */}
        <div className="rounded-2xl bg-white dark:bg-stone-900/80 border-2 border-amber-600/70 dark:border-amber-700/70 overflow-hidden flex flex-col">
          <div className="bg-amber-600 dark:bg-amber-700 text-white px-4 py-2.5 text-center text-sm font-bold">
            上半句：反諷拒絕加入比較大賽（ABB&apos;A&apos;）
          </div>
          <div className="p-4 space-y-2.5 flex-1">
            <p className="text-xs font-semibold text-amber-800 dark:text-amber-300 text-center">
              開頭反諷：「因為我們不敢（<span className="italic">Ou gar tolmōmen</span>）……」
            </p>
            <div className="rounded-xl bg-amber-50/90 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/70 px-3.5 py-2">
              <p className="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200">
                A 歸類或比較（<span className="italic">enkrinai ē synkrinai</span>）
              </p>
            </div>
            <div className="sm:ml-6 rounded-xl bg-orange-50/90 dark:bg-orange-950/30 border border-orange-300 dark:border-orange-800/70 px-3.5 py-2">
              <p className="text-xs sm:text-sm font-bold text-orange-900 dark:text-orange-200">
                B 我們自己（<span className="italic">heautous</span>）
              </p>
            </div>
            <div className="sm:ml-6 rounded-xl bg-orange-50/90 dark:bg-orange-950/30 border border-orange-300 dark:border-orange-800/70 px-3.5 py-2">
              <p className="text-xs sm:text-sm font-bold text-orange-900 dark:text-orange-200">
                B&apos; 他們自己（<span className="italic">tisin tōn heautous</span>）
              </p>
            </div>
            <div className="rounded-xl bg-amber-50/90 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/70 px-3.5 py-2">
              <p className="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200">
                A&apos; 自我推薦的人（<span className="italic">synistanontōn</span>）
              </p>
            </div>
          </div>
        </div>

        {/* Right: Second Micro-Chiasm */}
        <div className="rounded-2xl bg-white dark:bg-stone-900/80 border-2 border-rose-600/70 dark:border-rose-700/70 overflow-hidden flex flex-col">
          <div className="bg-rose-600 dark:bg-rose-700 text-white px-4 py-2.5 text-center text-sm font-bold">
            下半句：自我度量的封閉鏡屋（ABCC&apos;B&apos;A&apos;）
          </div>
          <div className="p-4 space-y-2 flex-1">
            <div className="rounded-xl bg-rose-50/90 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-800/70 px-3 py-1.5">
              <p className="text-xs font-bold text-rose-900 dark:text-rose-200">
                A 在自己裡面（<span className="italic">en heautois</span>）
              </p>
            </div>
            <div className="sm:ml-4 rounded-xl bg-pink-50/90 dark:bg-pink-950/30 border border-pink-300 dark:border-pink-800/70 px-3 py-1.5">
              <p className="text-xs font-bold text-pink-900 dark:text-pink-200">
                B 把自己（<span className="italic">heautous</span>）
              </p>
            </div>
            <div className="sm:ml-8 rounded-xl bg-red-100/90 dark:bg-red-950/50 border border-red-400 dark:border-red-700 px-3 py-1.5">
              <p className="text-xs font-bold text-red-900 dark:text-red-200">
                C 度量（<span className="italic">metrountes</span>）並且 C&apos; 比較（<span className="italic">synkrinontes</span>）
              </p>
            </div>
            <div className="sm:ml-4 rounded-xl bg-pink-50/90 dark:bg-pink-950/30 border border-pink-300 dark:border-pink-800/70 px-3 py-1.5">
              <p className="text-xs font-bold text-pink-900 dark:text-pink-200">
                B&apos; 把自己（<span className="italic">heautous</span>）
              </p>
            </div>
            <div className="rounded-xl bg-rose-50/90 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-800/70 px-3 py-1.5">
              <p className="text-xs font-bold text-rose-900 dark:text-rose-200">
                A&apos; 與自己（<span className="italic">heautois</span>）
              </p>
            </div>
            <div className="pt-1 text-center">
              <span className="inline-block px-3 py-1 rounded-lg bg-stone-800 dark:bg-stone-700 text-white text-xs font-bold">
                終極判決：乃是不通達的（<span className="italic">ou syniasin</span>）！
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfComparisonChiasmChart;

import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AllGraceAutarkeiaPsalmChart: React.FC = () => {
  const fiveAlls = [
    {
      num: '1',
      title: '各樣的恩惠',
      greek: 'pasan charin',
      cardClass: 'bg-amber-100/80 dark:bg-amber-950/50 border-amber-400/70 dark:border-amber-700/60',
      titleClass: 'text-amber-900 dark:text-amber-200',
      greekClass: 'text-amber-800 dark:text-amber-300',
    },
    {
      num: '2',
      title: '在凡事上',
      greek: 'en panti（全領域）',
      cardClass: 'bg-amber-100/80 dark:bg-amber-950/50 border-amber-400/70 dark:border-amber-700/60',
      titleClass: 'text-amber-900 dark:text-amber-200',
      greekClass: 'text-amber-800 dark:text-amber-300',
    },
    {
      num: '3',
      title: '常常／在各時',
      greek: 'pantote（全時間）',
      cardClass: 'bg-amber-100/80 dark:bg-amber-950/50 border-amber-400/70 dark:border-amber-700/60',
      titleClass: 'text-amber-900 dark:text-amber-200',
      greekClass: 'text-amber-800 dark:text-amber-300',
    },
    {
      num: '4',
      title: '一切的充足',
      greek: 'pasan autarkeian',
      cardClass: 'bg-sky-100/80 dark:bg-sky-950/50 border-sky-400/70 dark:border-sky-700/60',
      titleClass: 'text-sky-900 dark:text-sky-200',
      greekClass: 'text-sky-800 dark:text-sky-300',
    },
    {
      num: '5',
      title: '各樣的善事',
      greek: 'pan ergon agathon',
      cardClass: 'bg-emerald-100/80 dark:bg-emerald-950/50 border-emerald-400/70 dark:border-emerald-700/60',
      titleClass: 'text-emerald-900 dark:text-emerald-200',
      greekClass: 'text-emerald-800 dark:text-emerald-300',
    },
  ];

  return (
    <div className="my-6 p-4 sm:p-6 bg-gradient-to-br from-amber-50/80 via-stone-50 to-sky-50/50 dark:from-stone-900 dark:via-stone-900/95 dark:to-sky-950/20 rounded-2xl border border-amber-200/70 dark:border-amber-800/40 shadow-sm space-y-5">
      <div className="text-center space-y-1.5">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-sky-800 dark:text-sky-300 bg-sky-100/80 dark:bg-sky-900/50 rounded-full">
          五重全稱詞與詩篇互文圖解（哥林多後書 9:8-9）
        </span>
        <h5 className="text-base sm:text-lg font-bold text-stone-800 dark:text-stone-100 leading-snug">
          五重「全稱恩典瀑布」重塑斯多亞自足觀（Autarkeia）與詩篇 112:9 互文
        </h5>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          從哲學家「孤立少欲的自我封閉」轉向信徒「紮根於神全能供應、流向各樣善事的永恆仁義」
        </p>
      </div>

      {/* Top Cascade: 5x pas/panto + 2x perisseuo in 9:8 */}
      <div className="rounded-2xl bg-amber-50/90 dark:bg-amber-950/25 border-2 border-amber-400/80 dark:border-amber-700/60 p-4 space-y-3.5">
        <p className="text-center text-sm font-bold text-amber-950 dark:text-amber-200 leading-snug">
          第 8 節：神有大能（<span className="italic">dynatei de ho theos</span>）啟動「五重全稱詞」與「雙重充盈」恩典流
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {fiveAlls.map((item) => (
            <div
              key={item.num}
              className={`rounded-xl border px-3 py-2.5 text-center flex flex-col justify-center ${item.cardClass}`}
            >
              <div className={`text-xs sm:text-sm font-bold ${item.titleClass}`}>
                {item.num}. {item.title}
              </div>
              <div className={`text-xs italic mt-0.5 break-words ${item.greekClass}`}>
                {item.greek}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-900 dark:text-amber-300 pt-1 text-center">
          <span>雙重充盈動詞：使恩惠多多加給你們（<span className="italic">perisseusai</span>）</span>
          <ArrowRight className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
          <span>使你們能多多行善（<span className="italic">perisseuēte</span>）</span>
        </div>
      </div>

      {/* Bottom Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bottom Left: Stoic vs Pauline Autarkeia */}
        <div className="rounded-2xl bg-slate-50/95 dark:bg-slate-900/70 border border-slate-300 dark:border-slate-700 overflow-hidden flex flex-col">
          <div className="bg-slate-600 dark:bg-slate-700 text-white px-4 py-2.5 text-center text-xs sm:text-sm font-bold">
            世界觀重塑：兩種「充足（Autarkeia）」的對比
          </div>
          <div className="p-4 space-y-3 text-xs sm:text-sm leading-relaxed flex-1">
            <div>
              <p className="font-bold text-slate-800 dark:text-slate-200">
                • 斯多亞與犬儒學派的「自給自足」：
              </p>
              <p className="text-slate-600 dark:text-slate-400 pl-3 mt-0.5">
                靠壓抑慾望、切斷外在依賴，築起孤立無求的防禦高牆
              </p>
            </div>
            <div>
              <p className="font-bold text-sky-800 dark:text-sky-300">
                • 保羅基督徒的「神恩充足」：
              </p>
              <p className="text-teal-800 dark:text-teal-300 pl-3 mt-0.5">
                完全倚靠神源源不絕的供應，不為囤積自保，乃為慷慨湧流
              </p>
            </div>
            <p className="font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-lg px-3 py-2 border border-emerald-200/70 dark:border-emerald-800/50">
              定義：永遠夠自己需用，並且隨時有餘可以分給缺乏者
            </p>
          </div>
        </div>

        {/* Bottom Right: Psalm 111 & 112 Twin Psalms */}
        <div className="rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/30 border border-emerald-500/70 dark:border-emerald-700/70 overflow-hidden flex flex-col">
          <div className="bg-emerald-700 dark:bg-emerald-800 text-white px-4 py-2.5 text-center text-xs sm:text-sm font-bold">
            第 9 節：詩篇 111 與 112 篇雙子字母詩的互文（詩 112:9）
          </div>
          <div className="p-4 space-y-3 text-xs sm:text-sm leading-relaxed flex-1">
            <div>
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                • 兩個無連詞不定過去式動作（Asyndeton）：
              </p>
              <p className="text-emerald-800 dark:text-emerald-300 pl-3 mt-0.5 break-words">
                「他廣撒了（<span className="italic">eskorpisen</span>）、他給了窮人（<span className="italic">edōken tois penēsin</span>）」
              </p>
            </div>
            <div>
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                • 轉化為現在持續式的永恆存留：
              </p>
              <p className="text-emerald-800 dark:text-emerald-300 pl-3 mt-0.5 break-words">
                「他的仁義存到永遠（<span className="italic">hē dikaiosynē autou menei eis ton aiōna</span>）」
              </p>
            </div>
            <p className="font-semibold text-emerald-950 dark:text-emerald-200 bg-emerald-100/80 dark:bg-emerald-900/40 rounded-lg px-3 py-2 border border-emerald-300/60 dark:border-emerald-700/50">
              神學深意：信徒效法神慷慨施捨（詩 112），活出神永存的仁義（詩 111）
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllGraceAutarkeiaPsalmChart;

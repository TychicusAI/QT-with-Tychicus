"use client";

import React from "react";
import { Sparkles, ArrowDown } from "lucide-react";

export function InnerCourtroomGospelChart() {
  return (
    <figure className="my-6 rounded-3xl border border-purple-200/80 dark:border-purple-800/60 bg-gradient-to-b from-purple-50/60 to-stone-50/40 dark:from-purple-950/20 dark:to-stone-900/40 p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-200/60 dark:border-purple-800/40 text-xs">
        <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>釋經結構圖解｜心版律法與良心內在法庭 vs. 基督審判隱秘事之日（羅 2:14–16）</span>
        </div>
        <span className="text-xs font-mono text-purple-700 dark:text-purple-300 bg-purple-100/70 dark:bg-purple-900/60 px-2 py-0.5 rounded-full font-semibold">
          Crux Interpretum &amp; Eschatological Court
        </span>
      </div>

      {/* Row 1: Two Exegetical Readings of physei in 2:14 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-slate-50/95 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            詮釋路徑 A：physei 連後讀（自然道德律）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            未信外邦人「順著本性」偶爾行出合律法之事
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            ta mē nomon echonta, physei ta tou nomou poiōsin
          </p>
          <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
            <p>・學者：金口若望、加爾文、Moo、Longenecker、Thielman</p>
            <p>・證明外邦人擁有受造殘存道德良知，故犯罪無可推諉</p>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50/95 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 p-4 space-y-2">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            詮釋路徑 B：physei 連前讀（新約聖靈寫心）
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            「生來沒有律法」的外邦信徒被聖靈將律法刻在心上
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            ethnē ta mē nomon echonta physei, ta tou nomou poiōsin
          </p>
          <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
            <p>・學者：奧古斯丁、Cranfield、Wright、Barclay、Schreiner (2018)</p>
            <p>・迴響耶 31:33 新約應許，預伏 2:26–29 心與靈的真割禮</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Row 2: Threefold Inner Courtroom in 2:15 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        <div className="rounded-2xl bg-purple-50/90 dark:bg-purple-950/35 border border-purple-300 dark:border-purple-700 p-4 space-y-1.5">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            內在見證 I：心版
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            律法的功用刻在他們心裡
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            to ergon tou nomou grapton
          </p>
          <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 pt-1">
            <p>・非西乃石版，而是銘刻於心版</p>
            <p>・顯明神道德要求的內在印記</p>
          </div>
        </div>

        <div className="rounded-2xl bg-purple-50/90 dark:bg-purple-950/35 border border-purple-300 dark:border-purple-700 p-4 space-y-1.5">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            內在見證 II：良心
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            他們的良心一同作見證
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            symmartyrousēs tēs syneidēseōs
          </p>
          <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 pt-1">
            <p>・良心非自主立法者，而是共同證人</p>
            <p>・在神面前發出共鳴與監督警報</p>
          </div>
        </div>

        <div className="rounded-2xl bg-purple-50/90 dark:bg-purple-950/35 border border-purple-300 dark:border-purple-700 p-4 space-y-1.5">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
            內在見證 III：思念
          </span>
          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
            思念互相較量・或控告或申辯
          </p>
          <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
            logismōn katēgorountōn ē apologoumenōn
          </p>
          <div className="space-y-1 text-xs text-stone-700 dark:text-stone-300 pt-1">
            <p>・內心道德推理的交叉詰問</p>
            <p>・呼應 2:1 無可申辯（<span className="italic">anapologētos</span>）</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-purple-600 dark:text-purple-400">
        <ArrowDown className="w-5 h-5" />
      </div>

      {/* Row 3: 2:16 Eschatological Christological Summit */}
      <div className="rounded-2xl bg-fuchsia-50/90 dark:bg-purple-950/50 border-2 border-purple-600 dark:border-purple-500 p-4 space-y-2">
        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/70 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
          終末基督論法庭收結（2:16｜Inclusio 呼應 2:5）
        </span>
        <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
          就在神藉著耶穌基督、照著我的福音，審判人一切「隱秘事」的日子！
        </p>
        <p className="text-xs font-serif italic font-semibold text-purple-700 dark:text-purple-300 break-words">
          en hēmera hote krinei ho theos ta krypta tōn anthrōpōn kata to euangelion mou dia Christou Iēsou
        </p>
        <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          ・審判標的：穿透外在儀文直達內心「隱秘事」（<span className="italic">ta krypta</span>，傳 12:14）；審判中保：為罪人釘十架並復活的主耶穌基督
        </p>
      </div>

      <div className="pt-2.5 border-t border-purple-200/60 dark:border-purple-800/40 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 dark:text-stone-300">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-purple-800 dark:text-purple-300">全段首尾包夾：</span>
          <span>忿怒與公義審判顯露之日（2:5）⇔ 藉耶穌基督審判人隱秘事之日（2:16）</span>
        </div>
        <div className="text-stone-500 dark:text-stone-400">
          照著我的福音（<em>kata to euangelion mou</em>）
        </div>
      </div>
    </figure>
  );
}

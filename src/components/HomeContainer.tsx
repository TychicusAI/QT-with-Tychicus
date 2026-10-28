"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { TodayHeroCard } from "@/components/TodayHeroCard";
import { WeeklyTimeline } from "@/components/WeeklyTimeline";
import { getCurrentWeek, getAllWeeksSorted, formatWeekDateRange, getRecommendedDayIdForToday } from "@/lib/devotional-service";
import { usePreferredVersion } from "@/lib/storage";
import Link from "next/link";
import { Sparkles, Heart, Layers, Users, Sparkle, Library, Calendar, ChevronRight, History, Sun, Compass, ScrollText } from "lucide-react";

export function HomeContainer() {
  const [recommendedDayId] = useState(() => getRecommendedDayIdForToday());
  const [version, setVersion] = usePreferredVersion();

  const isFamily = version === "family";
  const isEncore = version === "encore";
  const isMission = version === "mission";
  const isExegesis = version === "exegesis";
  const allWeeks = React.useMemo(() => getAllWeeksSorted(version), [version]);
  const currentWeek = getCurrentWeek(version);
  const [selectedWeekId, setSelectedWeekId] = useState<string>(() => currentWeek.id);

  // If version changed and selected week doesn't exist, fallback to currentWeek
  const rawActiveWeek = allWeeks.find((w) => w.id === selectedWeekId) || currentWeek;
  const activeWeek = React.useMemo(() => ({ ...rawActiveWeek, version }), [rawActiveWeek, version]);
  const heroWeek = React.useMemo(() => ({ ...currentWeek, version }), [currentWeek, version]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf9] dark:bg-[#090d16] text-stone-900 dark:text-stone-100 selection:bg-amber-500/20 overflow-x-hidden w-full">
      {/* Top Navigation */}
      <Navbar
        currentVersion={version}
        onVersionChange={setVersion}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12 min-w-0">
        {/* Welcome Tagline */}
        <section className="text-center max-w-2xl mx-auto space-y-4 pt-2 sm:pt-4">
          <div className="flex items-center justify-center w-full">
            {/* Version Switcher Buttons */}
            <div className="grid grid-cols-5 sm:inline-flex items-center justify-center p-1 rounded-full bg-stone-200/80 dark:bg-stone-900 border border-stone-300/60 dark:border-stone-800 shadow-xs w-full max-w-xl sm:w-auto sm:max-w-full">
              <button
                onClick={() => setVersion("youth")}
                className={`flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                  version === "youth"
                    ? "bg-amber-500 text-white shadow-xs"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                }`}
              >
                <Sparkle className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span>青年版</span>
                <span className="hidden md:inline">Youth</span>
              </button>

              <button
                onClick={() => setVersion("family")}
                className={`flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                  isFamily
                    ? "bg-teal-700 text-white shadow-xs"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                }`}
              >
                <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span>家庭版</span>
                <span className="hidden md:inline">Family</span>
              </button>

              <button
                onClick={() => setVersion("encore")}
                className={`flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                  isEncore
                    ? "bg-rose-700 text-white shadow-xs"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                }`}
              >
                <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span>樂齡版</span>
                <span className="hidden md:inline">Encore</span>
              </button>

              <button
                onClick={() => setVersion("mission")}
                className={`flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                  isMission
                    ? "bg-indigo-700 text-white shadow-xs"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                }`}
              >
                <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span>宣教版</span>
                <span className="hidden md:inline">Mission</span>
              </button>

              <button
                onClick={() => setVersion("exegesis")}
                className={`flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                  isExegesis
                    ? "bg-purple-700 text-white shadow-xs"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                }`}
              >
                <ScrollText className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span>釋經版</span>
                <span className="hidden md:inline">Exegesis</span>
              </button>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
            {isExegesis ? (
              <>
                在原文脈絡與救贖宏敘事中，
                <br />
                <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  深研神話語的微觀肌理
                </span>
              </>
            ) : isMission ? (
              <>
                在異鄉前線與日常邊界中，
                <br />
                <span className="bg-gradient-to-r from-indigo-700 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
                  參與神更新萬有的宣教
                </span>
              </>
            ) : isEncore ? (
              <>
                在歲月淬煉的安可樂章裡，
                <br />
                <span className="bg-gradient-to-r from-rose-700 via-pink-600 to-rose-500 bg-clip-text text-transparent">
                  活出日新又新的榮耀盼望
                </span>
              </>
            ) : isFamily ? (
              <>
                在餐桌旁的真實與寬容中，
                <br />
                <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  重建家庭信任與同心
                </span>
              </>
            ) : (
              <>
                在世界的遊戲規則外，
                <br />
                <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  活出天國的尊貴身份
                </span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed max-w-xl mx-auto">
            {isExegesis
              ? "嚴格遵循「文本微觀解經工具箱」，奠基權威註釋書與新約希臘文脈絡，深探經文文體架構、交錯平行與神學張力。"
              : isMission
              ? "每天 10~15 分鐘，連結跨文化前線的瓦器眼淚與本地日常的鄰舍見證，從自我中心轉向萬國萬民的永恆敬拜。"
              : isEncore
              ? "每天 10~15 分鐘，卸下前半生的重擔與牽掛，在肉身漸衰卻內心日新的恩典中，將人生下半場活成自由榮耀的安可曲。"
              : isFamily
              ? "每天 10~15 分鐘，放下指責與防衛的面具，走進兩代溝通的恩典現場，讓家成為真誠與愛的避風港。"
              : "拒絕廉價的世俗成功學，每天 10~15 分鐘走進聖經現場，拆毀自我信靠的焦慮堡壘，迎見那叫死人復活的神。"}
          </p>
        </section>

        {/* 1. Hero: Today's Devotional Quick Card */}
        <TodayHeroCard key={`hero-${version}`} week={heroWeek} recommendedDayId={recommendedDayId} />

        {/* 2. Week Selector Bar & 6-Day Devotional Journey */}
        <section className="space-y-4">
          {/* Week Selector Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 shadow-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-stone-500 dark:text-stone-400 flex items-center gap-1.5 mr-1">
                <Calendar className="w-3.5 h-3.5 text-stone-400" />
                <span>切換靈修週次：</span>
              </span>
              {allWeeks.map((w) => {
                const isSelected = w.id === activeWeek.id;
                const rangeText = formatWeekDateRange(w);
                return (
                  <button
                    key={w.id}
                    onClick={() => setSelectedWeekId(w.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      isSelected
                        ? isExegesis
                          ? "bg-purple-700 text-white shadow-xs"
                          : isMission
                          ? "bg-indigo-700 text-white shadow-xs"
                          : isEncore
                          ? "bg-rose-700 text-white shadow-xs"
                          : isFamily
                          ? "bg-teal-700 text-white shadow-xs"
                          : "bg-amber-600 text-white shadow-xs"
                        : "bg-stone-100 dark:bg-stone-800/80 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/70"
                    }`}
                  >
                    <span>{rangeText}</span>
                    {w.isCurrentWeek && (
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : isExegesis
                            ? "bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300"
                            : isMission
                            ? "bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300"
                            : isEncore
                            ? "bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300"
                            : isFamily
                            ? "bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300"
                            : "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300"
                        }`}
                      >
                        當週
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <Link
              href="/archive"
              className={`flex items-center gap-1 text-xs font-bold hover:underline transition ${
                isExegesis
                  ? "text-purple-700 dark:text-purple-400"
                  : isMission
                  ? "text-indigo-700 dark:text-indigo-400"
                  : isEncore
                  ? "text-rose-700 dark:text-rose-400"
                  : isFamily
                  ? "text-teal-700 dark:text-teal-400"
                  : "text-amber-600 dark:text-amber-400"
              }`}
            >
              <span>📜 查看全部歷週存檔</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Past week indicator banner if activeWeek is not currentWeek */}
          {!activeWeek.isCurrentWeek && (
            <div className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-300/60 dark:border-amber-700/60 text-xs text-amber-900 dark:text-amber-200">
              <span className="flex items-center gap-1.5">
                <History className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>
                  您目前檢視的是過往靈修週次（{formatWeekDateRange(activeWeek)}・{activeWeek.title}）。
                </span>
              </span>
              <button
                onClick={() => setSelectedWeekId(currentWeek.id)}
                className="font-bold underline hover:text-amber-700 dark:hover:text-amber-100 cursor-pointer shrink-0"
              >
                回到最新當週
              </button>
            </div>
          )}

          {/* 6-Day Devotional Journey */}
          <WeeklyTimeline
            key={`timeline-${version}-${activeWeek.id}`}
            week={activeWeek}
            recommendedDayId={recommendedDayId}
          />
        </section>

        {/* 3. Interactive Faith Toolkit */}
        <section className="space-y-4">
          <div
            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
              isExegesis
                ? "text-purple-700 dark:text-purple-400"
                : isMission
                ? "text-indigo-700 dark:text-indigo-400"
                : isEncore
                ? "text-rose-700 dark:text-rose-400"
                : isFamily
                ? "text-teal-700 dark:text-teal-400"
                : "text-amber-600 dark:text-amber-400"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>靈修生活工具箱</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Tool 1: About / Architecture Guide */}
            <Link
              href="/about"
              className="group cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-purple-500/10 via-stone-50 to-indigo-500/5 dark:from-stone-900 dark:via-stone-900 dark:to-slate-950 border border-purple-200/80 dark:border-purple-900/60 hover:border-purple-400 dark:hover:border-purple-600 transition shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                  平台架構與特色導覽
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
                  深入了解「靈修推基古」的 SSOT 架構、六大微觀解經工具、五軌牧養矩陣與三方橫向對比。
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-stone-200/50 dark:border-stone-800 text-xs font-semibold text-purple-700 dark:text-purple-400 flex items-center justify-between">
                <span>了解核心架構與優勢</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Tool 2: Flagship Exegesis Portal */}
            <Link
              href={`/devotional/exegesis/${activeWeek.id}/mon`}
              className="group cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-violet-500/10 via-stone-50 to-purple-500/5 dark:from-stone-900 dark:via-stone-900 dark:to-slate-950 border border-violet-200/80 dark:border-violet-900/60 hover:border-violet-400 dark:hover:border-violet-600 transition shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-violet-700 text-white flex items-center justify-center shadow-md shadow-violet-700/20 group-hover:scale-110 transition-transform">
                  <ScrollText className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                  旗艦釋經深研專區
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
                  專為講道者與研經者打造，純文字思辨論述、無比喻插圖的 5,000 字級文本微觀解經深度篇章。
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-stone-200/50 dark:border-stone-800 text-xs font-semibold text-violet-700 dark:text-violet-400 flex items-center justify-between">
                <span>進入本週釋經深研</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Tool 3: Devotional Archive */}
            <Link
              href="/archive"
              className="group cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-blue-500/10 via-stone-50 to-indigo-500/5 dark:from-stone-900 dark:via-stone-900 dark:to-slate-950 border border-stone-200 dark:border-stone-800 hover:border-blue-400 dark:hover:border-blue-600 transition shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
                  <Calendar className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                  歷週靈修存檔庫
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
                  完整查閱青年、家庭、樂齡、宣教與釋經版歷週經課系列，溫習過往信息、筆記心得與打卡進度。
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-stone-200/50 dark:border-stone-800 text-xs font-semibold text-blue-700 dark:text-blue-400 flex items-center justify-between">
                <span>瀏覽歷週存檔</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Tool 4: Reference Books Library */}
            <Link
              href="/books/2-corinthians"
              className="group cursor-pointer rounded-2xl p-5 bg-gradient-to-br from-amber-500/10 via-stone-50 to-orange-500/5 dark:from-stone-900 dark:via-stone-900 dark:to-slate-950 border border-stone-200 dark:border-stone-800 hover:border-amber-400 dark:hover:border-amber-600 transition shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-600/20 group-hover:scale-110 transition-transform">
                  <Library className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                  釋經參考書目庫
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
                  奠基之權威註釋書（BECNT、NIGTC、NICNT、NTL、NIVAC 等）評介與導讀。
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-stone-200/50 dark:border-stone-800 text-xs font-semibold text-amber-700 dark:text-amber-400 flex items-center justify-between">
                <span>查閱權威書目評介</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* 4. Vision Anchor Banner */}
        <section className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-stone-100 border border-stone-800 shadow-xl relative overflow-hidden">
          <div
            className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
              isExegesis
                ? "bg-purple-500/15"
                : isMission
                ? "bg-indigo-500/15"
                : isEncore
                ? "bg-rose-500/15"
                : isFamily
                ? "bg-teal-500/15"
                : "bg-amber-500/10"
            }`}
          />
          <div className="relative z-10 max-w-2xl space-y-3">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                isExegesis
                  ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                  : isMission
                  ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                  : isEncore
                  ? "bg-rose-500/20 text-rose-300 border-rose-500/30"
                  : isFamily
                  ? "bg-teal-500/20 text-teal-300 border-teal-500/30"
                  : "bg-amber-500/20 text-amber-300 border-amber-500/30"
              }`}
            >
              <Heart
                className={`w-3.5 h-3.5 ${
                  isExegesis
                    ? "text-purple-400"
                    : isMission
                    ? "text-indigo-400"
                    : isEncore
                    ? "text-rose-400"
                    : isFamily
                    ? "text-teal-400"
                    : "text-amber-400"
                }`}
              />
              <span>
                {isExegesis
                  ? "還原現場・深耕神話語微觀肌理"
                  : isMission
                  ? "基督之愛激勵・作神和好的特使"
                  : isEncore
                  ? "歲月淬煉・內心一天新似一天"
                  : isFamily
                  ? "恩典相系・家是基督的避風港"
                  : "屬靈痛覺共生・跨越孤島"}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {isExegesis
                ? "「深哉，神豐富的智慧和知識！他的判斷何其難測！他的蹤跡何其難尋！」"
                : isMission
                ? "「這一切都是出於神；他藉著基督使我們與他和好，又將勸人與他和好的職分賜給我們。」"
                : isEncore
                ? "「所以，我們不喪膽。外體雖然毀壞，內心卻一天新似一天。」"
                : isFamily
                ? "「各人不要單顧自己的事，也要顧別人的事。你們當以基督耶穌的心為心。」"
                : "「你們以祈禱幫助我們，好叫許多人為我們得恩的緣故格外謝恩。」"}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {isExegesis
                ? "研讀聖經不該停留於碎片化的心靈慰藉。唯有沉浸在文法結構、修辭反諷、舊約救贖歷史的回響與當代論辯背景中，神話語的真實力量才能如兩刃的利劍，刺入剖開靈與魂。"
                : isMission
                ? "宣教從來不是少數英雄的遠征，而是每一位門徒在救贖歷史中的生命座標。無論是在異鄉前線面對語言與孤寂的瓦器，還是在本地日常中看守器具、接待鄰舍的守望者，我們都同在基督的差遣裡。"
                : isEncore
                ? "人生下半場不是緩步退場的謝幕，而是卸下世俗成敗包袱後最自由的安可樂章。當我們學習鬆開緊握兒女與頭銜的雙手，基督永恆的榮耀就要在瓦器般的歲月裡愈發明亮。"
                : isFamily
                ? "家庭的修復不是靠誰贏得了爭論，而是靠兩代人願意在十字架前放下手套與面具，以日光下的純全良心，彼此體諒、同心仰望那信實的主。"
                : "基督徒從來不是孤軍奮戰的個體。當我們在深淵中學會專靠上帝，那無數張原本憂傷發顫的臉龐，將在同心仰望中被神照亮，匯聚成奪眶而出的感恩洪流。"}
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-950/50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-stone-800 dark:text-stone-200">
              靈修推基古 (QT with Tychicus)
            </span>
            <span>•</span>
            <span>青年、家庭、樂齡、宣教與釋經每日研經靈修平台</span>
          </div>

          <div className="text-center sm:text-right">
            <span>
              由{" "}
              <a
                href="https://web.ntnu.edu.tw/~hslee/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 underline decoration-stone-300 dark:decoration-stone-700 underline-offset-2 transition"
              >
                李鴻欣 (Hung-Shin Lee)
              </a>{" "}
              使用{" "}
              <a
                href="https://gemini.google.com/app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 underline decoration-stone-300 dark:decoration-stone-700 underline-offset-2 transition"
              >
                Gemini
              </a>{" "}
              製作
            </span>
            <span className="mx-2">•</span>
            <span>每週定時更新當週教材</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

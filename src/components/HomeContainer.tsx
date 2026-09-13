"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { TodayHeroCard } from "@/components/TodayHeroCard";
import { WeeklyTimeline } from "@/components/WeeklyTimeline";
import { VerseShareModal } from "@/components/VerseShareModal";
import { MeditationTimer } from "@/components/MeditationTimer";
import { getCurrentWeek, getRecommendedDayIdForToday } from "@/lib/devotional-service";
import { usePreferredVersion } from "@/lib/storage";
import { Sparkles, Clock, Heart, Layers, Users, Sparkle } from "lucide-react";

export function HomeContainer() {
  const [isVerseModalOpen, setIsVerseModalOpen] = useState(false);
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  const [recommendedDayId] = useState(() => getRecommendedDayIdForToday());
  const [version, setVersion] = usePreferredVersion();

  const isFamily = version === "family";
  const currentWeek = getCurrentWeek(version);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf9] dark:bg-[#090d16] text-stone-900 dark:text-stone-100 selection:bg-amber-500/20">
      {/* Top Navigation */}
      <Navbar
        currentVersion={version}
        onVersionChange={setVersion}
        onOpenVerseModal={() => setIsVerseModalOpen(true)}
        onOpenTimerModal={() => setIsTimerModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12">
        {/* Welcome Tagline */}
        <section className="text-center max-w-2xl mx-auto space-y-4 pt-2 sm:pt-4">
          <div className="flex items-center justify-center gap-2">
            {/* Version Switcher Buttons */}
            <div className="inline-flex items-center p-1 rounded-full bg-stone-200/80 dark:bg-stone-900 border border-stone-300/60 dark:border-stone-800 shadow-xs">
              <button
                onClick={() => setVersion("youth")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                  !isFamily
                    ? "bg-amber-500 text-white shadow-xs"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                }`}
              >
                <Sparkle className="w-3.5 h-3.5" />
                <span>青年版 Youth</span>
              </button>

              <button
                onClick={() => setVersion("family")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                  isFamily
                    ? "bg-teal-700 text-white shadow-xs"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>家庭版 Family</span>
              </button>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
            {isFamily ? (
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
            {isFamily
              ? "每天 6~8 分鐘，放下指責與防衛的面具，走進兩代溝通的恩典現場，讓家成為真誠與愛的避風港。"
              : "拒絕廉價的世俗成功學，每天 6~8 分鐘走進聖經現場，拆毀自我信靠的焦慮堡壘，迎見那叫死人復活的神。"}
          </p>
        </section>

        {/* 1. Hero: Today's Devotional Quick Card */}
        <TodayHeroCard key={`hero-${version}`} week={currentWeek} recommendedDayId={recommendedDayId} />

        {/* 2. 6-Day Devotional Journey */}
        <WeeklyTimeline key={`timeline-${version}`} week={currentWeek} recommendedDayId={recommendedDayId} />

        {/* 3. Interactive Faith Toolkit */}
        <section className="space-y-4">
          <div
            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
              isFamily ? "text-teal-700 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>靈修生活工具箱</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Tool 1: Verse Generator */}
            <div
              onClick={() => setIsVerseModalOpen(true)}
              className={`group cursor-pointer rounded-2xl p-6 border transition shadow-xs flex flex-col justify-between ${
                isFamily
                  ? "bg-gradient-to-br from-teal-500/10 to-emerald-500/5 border-teal-300/40 dark:border-teal-800/40 hover:border-teal-400"
                  : "bg-gradient-to-br from-amber-500/10 to-orange-500/5 border-amber-300/40 dark:border-amber-800/40 hover:border-amber-400"
              }`}
            >
              <div className="space-y-2">
                <div
                  className={`w-10 h-10 rounded-xl text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform ${
                    isFamily ? "bg-teal-700 shadow-teal-700/20" : "bg-amber-500 shadow-amber-500/20"
                  }`}
                >
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                  靈修金句卡片產生器
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  將本週觸動你的經文，一鍵套用晨曦、星夜等四款專屬美感樣式，輕鬆分享至家人群組、社群動態或團契代禱。
                </p>
              </div>

              <div
                className={`mt-4 pt-3 border-t border-stone-200/50 dark:border-stone-800 text-xs font-semibold flex items-center justify-between ${
                  isFamily ? "text-teal-700 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
                }`}
              >
                <span>立即製作卡片</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Tool 2: Meditation Timer */}
            <div
              onClick={() => setIsTimerModalOpen(true)}
              className="group cursor-pointer rounded-2xl p-6 bg-gradient-to-br from-stone-100 to-stone-200/50 dark:from-stone-900 dark:to-stone-950 border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-stone-700 dark:bg-stone-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                  靜心深呼吸計時器
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  在展開繁重課業、工作或家庭瑣事之前，給自己 3~5 分鐘安靜在主前。跟隨節奏深呼吸，卸下心中的重擔與焦慮。
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200 dark:border-stone-800 text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center justify-between">
                <span>開啟靜心模式</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Vision Anchor Banner */}
        <section className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-stone-100 border border-stone-800 shadow-xl relative overflow-hidden">
          <div
            className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
              isFamily ? "bg-teal-500/15" : "bg-amber-500/10"
            }`}
          />
          <div className="relative z-10 max-w-2xl space-y-3">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                isFamily
                  ? "bg-teal-500/20 text-teal-300 border-teal-500/30"
                  : "bg-amber-500/20 text-amber-300 border-amber-500/30"
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isFamily ? "text-teal-400" : "text-amber-400"}`} />
              <span>{isFamily ? "恩典相系・家是基督的避風港" : "屬靈痛覺共生・跨越孤島"}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {isFamily
                ? "「各人不要單顧自己的事，也要顧別人的事。你們當以基督耶穌的心為心。」"
                : "「你們以祈禱幫助我們，好叫許多人為我們得恩的緣故格外謝恩。」"}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {isFamily
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
            <span>青年與家庭每日研經靈修平台</span>
          </div>

          <div className="text-center sm:text-right">
            <span>由 Tychicus AI 事工推動</span>
            <span className="mx-2">•</span>
            <span>每週定時更新當週教材</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <VerseShareModal
        isOpen={isVerseModalOpen}
        onClose={() => setIsVerseModalOpen(false)}
        week={currentWeek}
      />

      <MeditationTimer
        isOpen={isTimerModalOpen}
        onClose={() => setIsTimerModalOpen(false)}
      />
    </div>
  );
}

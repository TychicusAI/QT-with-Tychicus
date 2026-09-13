"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen,
  Quote,
  Clock,
  Share2,
  CheckCircle2,
  Sparkles,
  HandHeart,
  Users,
  Sparkle
} from "lucide-react";
import { marked } from "marked";
import { DevotionalDay, DevotionalWeek, DevotionalVersion } from "@/types/devotional";
import { ExtendedStudySection } from "@/components/ExtendedStudySection";
import { JournalBox } from "@/components/JournalBox";
import { PrayerAmenButton } from "@/components/PrayerAmenButton";
import { VerseShareModal } from "@/components/VerseShareModal";
import { ThemeToggle } from "@/components/ThemeToggle";

interface DevotionalReaderProps {
  week: DevotionalWeek;
  day: DevotionalDay;
}

export function DevotionalReader({ week, day }: DevotionalReaderProps) {
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">("normal");
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const isFamily = week.version === "family";
  const otherVersion: DevotionalVersion = isFamily ? "youth" : "family";
  const otherVersionLabel = isFamily ? "切換至青年版" : "切換至家庭版";

  const messageHtml = React.useMemo(() => {
    return marked.parse(day.message, { breaks: true }) as string;
  }, [day.message]);

  // Find previous and next days
  const currentIndex = week.days.findIndex((d) => d.id === day.id);
  const prevDay = currentIndex > 0 ? week.days[currentIndex - 1] : null;
  const nextDay = currentIndex < week.days.length - 1 ? week.days[currentIndex + 1] : null;

  // Font size classes
  const fontClasses = {
    normal: "text-base leading-relaxed sm:leading-loose",
    large: "text-lg leading-relaxed sm:leading-loose",
    xlarge: "text-xl leading-loose"
  }[fontSize];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
      {/* Top Breadcrumb & Controls Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500 dark:text-stone-400 pb-3 border-b border-stone-200 dark:border-stone-800">
        <nav className="flex items-center gap-2">
          <Link href="/" className="hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-1 font-medium">
            <Home className="w-3.5 h-3.5" />
            <span>首頁</span>
          </Link>
          <span>/</span>
          <span className="font-semibold text-stone-800 dark:text-stone-200">{isFamily ? "家庭版" : "青年版"}</span>
          <span>/</span>
          <span className="font-semibold text-stone-800 dark:text-stone-200">{day.dayLabel}</span>
        </nav>

        {/* Dual Version Switcher & Reader Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Quick Version Toggle for this day */}
          <Link
            href={`/devotional/${otherVersion}/${week.id}/${day.id}`}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 transition"
            title={`對照查看${otherVersionLabel}的靈修信息`}
          >
            {isFamily ? <Sparkle className="w-3 h-3 text-amber-500" /> : <Users className="w-3 h-3 text-teal-600" />}
            <span>{otherVersionLabel}</span>
          </Link>

          {/* Font size switcher */}
          <div className="flex items-center bg-stone-100 dark:bg-stone-800/80 rounded-lg p-0.5 border border-stone-200 dark:border-stone-700">
            <button
              onClick={() => setFontSize("normal")}
              className={`px-2 py-1 rounded text-xs font-semibold cursor-pointer ${
                fontSize === "normal"
                  ? "bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-xs"
                  : "text-stone-500"
              }`}
            >
              小
            </button>
            <button
              onClick={() => setFontSize("large")}
              className={`px-2 py-1 rounded text-xs font-semibold cursor-pointer ${
                fontSize === "large"
                  ? "bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-xs"
                  : "text-stone-500"
              }`}
            >
              中
            </button>
            <button
              onClick={() => setFontSize("xlarge")}
              className={`px-2 py-1 rounded text-xs font-semibold cursor-pointer ${
                fontSize === "xlarge"
                  ? "bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-xs"
                  : "text-stone-500"
              }`}
            >
              大
            </button>
          </div>

          <button
            onClick={() => setIsShareModalOpen(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
              isFamily
                ? "bg-teal-500/10 hover:bg-teal-500/20 text-teal-800 dark:text-teal-300"
                : "bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-300"
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>分享金句</span>
          </button>

          <ThemeToggle
            iconSize="sm"
            className="p-1.5 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-200/70 dark:hover:bg-stone-800 transition cursor-pointer"
          />
        </div>
      </div>

      {/* Hero Title Section */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${
              isFamily ? "bg-teal-700 shadow-teal-700/20" : "bg-amber-600 shadow-amber-600/20"
            }`}
          >
            {isFamily ? `家庭版・${day.dayLabel}` : `青年版・${day.dayLabel}`}
          </span>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${
              isFamily
                ? "text-teal-800 dark:text-teal-300 bg-teal-100/70 dark:bg-teal-950/60 border-teal-200 dark:border-teal-800"
                : "text-amber-700 dark:text-amber-400 bg-amber-100/70 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800"
            }`}
          >
            {day.scriptureRef}
            {day.scriptureVersion && day.scriptureVersion !== "和合本" ? `（${day.scriptureVersion}）` : ""}
          </span>
          <span className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            閱讀時間約 {day.readTimeMinutes} 分鐘
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight leading-snug sm:leading-tight">
          {day.title}
        </h1>
      </header>

      {/* 1. Scripture Reading Card */}
      <section
        className={`rounded-3xl p-6 sm:p-8 border relative overflow-hidden shadow-xs ${
          isFamily
            ? "bg-teal-500/5 dark:bg-teal-950/20 border-teal-300/50 dark:border-teal-700/40"
            : "bg-amber-500/5 dark:bg-amber-950/20 border-amber-300/50 dark:border-amber-700/40"
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <BookOpen
            className={`w-4 h-4 shrink-0 ${
              isFamily ? "text-teal-600 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
            }`}
          />
          <span className="font-bold text-sm text-stone-900 dark:text-stone-100">今日經文</span>
        </div>
        <blockquote className="text-lg sm:text-xl font-serif text-stone-900 dark:text-stone-100 leading-relaxed font-semibold">
          {day.scriptureText.replace(/^[「"“]|["”」]$/g, "")}
        </blockquote>
      </section>

      {/* 2. Deep Devotional Message */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Quote
            className={`w-4 h-4 rotate-180 shrink-0 ${
              isFamily ? "text-teal-600 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
            }`}
          />
          <span className="font-bold text-sm text-stone-900 dark:text-stone-100">今日信息</span>
        </div>

        <div
          className={`max-w-none text-stone-900 dark:text-stone-100 markdown-content ${
            isFamily ? "family-reader" : "youth-reader"
          } ${fontClasses}`}
          dangerouslySetInnerHTML={{ __html: messageHtml }}
        />
      </section>

      {/* 3. Meditation Question Card */}
      {day.meditationQuestion && (
        <section
          className={`rounded-2xl p-5 sm:p-6 border space-y-2 ${
            isFamily
              ? "bg-teal-500/10 dark:bg-teal-950/30 border-teal-300/60 dark:border-teal-700/60"
              : "bg-amber-500/10 dark:bg-amber-950/30 border-amber-300/60 dark:border-amber-700/60"
          }`}
        >
          <div className="flex items-center gap-2">
            <Sparkles
              className={`w-4 h-4 shrink-0 ${
                isFamily ? "text-teal-600 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
              }`}
            />
            <span className="font-bold text-sm text-stone-900 dark:text-stone-100">默想反思</span>
          </div>
          <p className="text-sm font-medium text-stone-800 dark:text-stone-100 leading-relaxed">
            {day.meditationQuestion.replace(/^[「"“]|["”」]$/g, "")}
          </p>
        </section>
      )}

      {/* 4. Journal Reflection Box */}
      <JournalBox
        key={`${week.version}-${week.id}-${day.id}`}
        version={week.version}
        weekId={week.id}
        dayId={day.id}
        dayTitle={day.title}
      />

      {/* 5. Suggested Prayer Section */}
      <section
        className={`rounded-3xl p-6 sm:p-8 border space-y-4 ${
          isFamily
            ? "bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-teal-100/20 dark:from-slate-900 dark:via-stone-900 dark:to-slate-950 border-teal-300/60 dark:border-teal-800/60"
            : "bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-amber-100/20 dark:from-slate-900 dark:via-stone-900 dark:to-slate-950 border-amber-300/60 dark:border-amber-800/60"
        }`}
      >
        <div className="flex items-center gap-2">
          <HandHeart
            className={`w-4 h-4 shrink-0 ${
              isFamily ? "text-teal-600 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
            }`}
          />
          <span className="font-bold text-sm text-stone-900 dark:text-stone-100">建議禱告</span>
        </div>

        <div className="font-serif text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-3 bg-white/60 dark:bg-stone-950/40 p-5 rounded-2xl border border-stone-200/60 dark:border-stone-800">
          {day.suggestedPrayer}
        </div>

        {/* Amen Celebration Button */}
        <PrayerAmenButton version={week.version} weekId={week.id} dayId={day.id} />
      </section>

      {/* 6. Extended Study */}
      {day.extendedStudy && day.extendedStudy.length > 0 && (
        <ExtendedStudySection items={day.extendedStudy} version={week.version} />
      )}

      {/* Bottom Navigation: Prev / Next Day */}
      <footer className="pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-2 sm:gap-4">
        {prevDay ? (
          <Link
            href={`/devotional/${week.version}/${week.id}/${prevDay.id}`}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-stone-400 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900 transition text-xs font-semibold group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform shrink-0" />
            <span>上一日：{prevDay.dayLabel}</span>
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/"
          className={`text-xs font-semibold hover:underline shrink-0 text-center ${
            isFamily ? "text-teal-700 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
          }`}
        >
          返回六日目錄
        </Link>

        {nextDay ? (
          <Link
            href={`/devotional/${week.version}/${week.id}/${nextDay.id}`}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-white transition text-xs font-semibold group shadow-md ${
              isFamily
                ? "bg-teal-700 hover:bg-teal-600 shadow-teal-700/20"
                : "bg-amber-600 hover:bg-amber-500 shadow-amber-600/20"
            }`}
          >
            <span>下一日：{nextDay.dayLabel}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </Link>
        ) : (
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition text-xs font-semibold"
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>完成本週全部旅程</span>
          </Link>
        )}
      </footer>

      {/* Share Modal */}
      <VerseShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        week={week}
      />
    </article>
  );
}

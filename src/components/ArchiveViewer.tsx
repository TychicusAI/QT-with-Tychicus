"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calendar,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Search,
  Sparkle,
  Users,
  Home,
  Clock,
  Sparkles,
  ArrowRight,
  Library,
} from "lucide-react";
import { DevotionalWeek, DevotionalVersion } from "@/types/devotional";
import { allYouthWeeks, allFamilyWeeks, formatWeekDateRange } from "@/lib/devotional-service";
import { usePreferredVersion, useCompletedDays } from "@/lib/storage";
import { Navbar } from "@/components/Navbar";

export function ArchiveViewer() {
  const [version, setVersion] = usePreferredVersion();
  const [searchQuery, setSearchQuery] = useState("");
  const completedMap = useCompletedDays();

  const isFamily = version === "family";
  const allWeeks: DevotionalWeek[] = isFamily ? allFamilyWeeks : allYouthWeeks;

  // Sort descending: newest week first
  const sortedWeeks = useMemo(() => {
    return [...allWeeks].sort((a, b) => b.id.localeCompare(a.id));
  }, [allWeeks]);

  // Filter weeks by search query (matching week title, book, day title, scripture ref)
  const filteredWeeks = useMemo(() => {
    if (!searchQuery.trim()) return sortedWeeks;
    const q = searchQuery.toLowerCase().trim();
    return sortedWeeks.filter((week) => {
      const matchWeek =
        week.title.toLowerCase().includes(q) ||
        week.book.toLowerCase().includes(q) ||
        week.id.includes(q);
      const matchDays = week.days.some(
        (day) =>
          day.title.toLowerCase().includes(q) ||
          day.scriptureRef.toLowerCase().includes(q) ||
          day.message.toLowerCase().includes(q)
      );
      return matchWeek || matchDays;
    });
  }, [sortedWeeks, searchQuery]);

  // Group weeks by Book Series
  const seriesGroups = useMemo(() => {
    const groups: { seriesName: string; weeks: DevotionalWeek[] }[] = [];
    for (const week of filteredWeeks) {
      const match = week.book.match(/^([\u4e00-\u9fa5]+)/);
      const bookName = match ? match[1] : "經課系列";
      const seriesName = `《${bookName}》經課系列`;

      const existing = groups.find((g) => g.seriesName === seriesName);
      if (existing) {
        existing.weeks.push(week);
      } else {
        groups.push({ seriesName, weeks: [week] });
      }
    }
    return groups;
  }, [filteredWeeks]);

  // Overall stats
  const totalDays = allWeeks.reduce((acc, w) => acc + w.days.length, 0);
  const totalCompletedDays = allWeeks.reduce((acc, w) => {
    const completed = w.days.filter(
      (d) => completedMap[`${version}-${w.id}-${d.id}`] || completedMap[`${w.id}-${d.id}`]
    ).length;
    return acc + completed;
  }, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf9] dark:bg-[#090d16] text-stone-900 dark:text-stone-100 selection:bg-amber-500/20">
      <Navbar currentVersion={version} onVersionChange={setVersion} />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10">
        {/* Header Breadcrumb & Tag */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
            <Link href="/" className="hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-1 font-medium">
              <Home className="w-3.5 h-3.5" />
              <span>首頁</span>
            </Link>
            <span>/</span>
            <span className="font-semibold text-stone-800 dark:text-stone-200">歷週存檔庫</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200 dark:border-stone-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                    isFamily
                      ? "bg-teal-100 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 border border-teal-300/60 dark:border-teal-700/50"
                      : "bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300/60 dark:border-amber-700/50"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>歷週靈修存檔庫</span>
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400">
                  共 {allWeeks.length} 個週期・{totalDays} 篇靈修教材
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
                重溫過往經課・見證恩典軌跡
              </h1>

              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
                隨時回溯既往週次的每日經課信息、建議禱告與延伸研讀。您在過往週次所寫下的靈修筆記與打卡記錄均永久保存於本機。
              </p>
            </div>

            {/* Version Switcher Tabs */}
            <div className="flex items-center gap-2 shrink-0">
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
                  <span>青年版</span>
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
                  <span>家庭版</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Cumulative Stats Card */}
        <div className="grid sm:grid-cols-3 gap-4">
          {/* Search Bar */}
          <div className="sm:col-span-2 relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋週主題、經文範圍（如 哥林多後書）、關鍵字..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 dark:focus:ring-amber-400/30 transition shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer"
              >
                清除
              </button>
            )}
          </div>

          {/* Cumulative Progress Pill */}
          <div className="flex items-center justify-between sm:justify-center gap-3 px-4 py-2.5 rounded-xl bg-stone-100 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 text-xs font-semibold text-stone-700 dark:text-stone-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2
                className={`w-4 h-4 ${
                  isFamily ? "text-teal-600 dark:text-teal-400" : "text-amber-500"
                }`}
              />
              <span>累積打卡進度</span>
            </div>
            <span
              className={`px-2 py-0.5 rounded-full font-bold ${
                isFamily
                  ? "bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300"
                  : "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300"
              }`}
            >
              {totalCompletedDays} / {totalDays} 天
            </span>
          </div>
        </div>

        {/* Weeks Grouped by Series */}
        {seriesGroups.length === 0 ? (
          <div className="text-center py-16 space-y-3 bg-white dark:bg-stone-900/50 rounded-2xl border border-stone-200 dark:border-stone-800">
            <BookOpen className="w-10 h-10 text-stone-300 dark:text-stone-600 mx-auto" />
            <h3 className="font-bold text-base text-stone-700 dark:text-stone-300">
              查無相符的靈修週次
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              請嘗試更換搜尋關鍵字，或切換青年版／家庭版查看。
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {seriesGroups.map((group) => (
              <section key={group.seriesName} className="space-y-4">
                {/* Series Banner */}
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-2 h-5 rounded-full ${
                      isFamily ? "bg-teal-600" : "bg-amber-500"
                    }`}
                  />
                  <h2 className="font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 tracking-tight">
                    {group.seriesName}
                  </h2>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                    {group.weeks.length} 週
                  </span>
                </div>

                {/* Week Cards in Series */}
                <div className="space-y-5">
                  {group.weeks.map((week) => {
                    const completedInWeek = week.days.filter(
                      (d) =>
                        completedMap[`${version}-${week.id}-${d.id}`] ||
                        completedMap[`${week.id}-${d.id}`]
                    ).length;
                    const weekProgress = Math.round(
                      (completedInWeek / week.days.length) * 100
                    );
                    const dateRangeStr = formatWeekDateRange(week);

                    return (
                      <article
                        key={week.id}
                        className={`rounded-3xl p-6 sm:p-7 border transition-all duration-200 ${
                          week.isCurrentWeek
                            ? isFamily
                              ? "bg-gradient-to-br from-teal-500/10 via-white dark:via-stone-900 to-teal-500/5 border-teal-400/80 dark:border-teal-700/80 shadow-md shadow-teal-500/5"
                              : "bg-gradient-to-br from-amber-500/10 via-white dark:via-stone-900 to-amber-500/5 border-amber-400/80 dark:border-amber-700/80 shadow-md shadow-amber-500/5"
                            : "bg-white dark:bg-stone-900/70 border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 shadow-xs"
                        }`}
                      >
                        {/* Week Card Header */}
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-stone-200/70 dark:border-stone-800">
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                              {week.isCurrentWeek && (
                                <span
                                  className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold text-white shadow-xs ${
                                    isFamily ? "bg-teal-700" : "bg-amber-600"
                                  }`}
                                >
                                  ✨ 當前靈修週
                                </span>
                              )}
                              <span className="text-xs font-bold text-stone-500 dark:text-stone-400 flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-stone-400" />
                                {dateRangeStr}
                              </span>
                              <span
                                className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${
                                  isFamily
                                    ? "bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800"
                                    : "bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800"
                                }`}
                              >
                                {week.book}
                              </span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
                              {week.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
                              {week.foreword}
                            </p>
                          </div>

                          {/* Progress summary for this week */}
                          <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2 shrink-0">
                            <div className="text-right">
                              <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                                完成進度
                              </span>
                              <div className="text-sm font-bold text-stone-800 dark:text-stone-200">
                                {completedInWeek} / {week.days.length} 天 ({weekProgress}%)
                              </div>
                            </div>

                            <div className="w-24 h-2 rounded-full bg-stone-200 dark:bg-stone-700 overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-300 ${
                                  isFamily ? "bg-teal-600" : "bg-amber-500"
                                }`}
                                style={{ width: `${weekProgress}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* 6-Day Jump Buttons Grid */}
                        <div className="pt-4 space-y-3">
                          <div className="flex items-center justify-between text-xs font-bold text-stone-500 dark:text-stone-400">
                            <span>每日靈修單元（點擊即進入研讀）：</span>
                            <span className="text-[11px] font-normal text-stone-400">
                              共 {week.days.length} 日
                            </span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                            {week.days.map((day) => {
                              const isCompleted = Boolean(
                                completedMap[`${version}-${week.id}-${day.id}`] ||
                                  completedMap[`${week.id}-${day.id}`]
                              );

                              return (
                                <Link
                                  key={day.id}
                                  href={`/devotional/${version}/${week.id}/${day.id}`}
                                  className={`group flex flex-col justify-between p-3 rounded-2xl border transition-all duration-200 ${
                                    isCompleted
                                      ? "bg-emerald-500/5 dark:bg-emerald-950/20 border-emerald-300/50 dark:border-emerald-800/50 hover:border-emerald-500"
                                      : "bg-stone-50/70 dark:bg-stone-800/40 border-stone-200/80 dark:border-stone-800 hover:border-amber-400 dark:hover:border-amber-600 hover:bg-white dark:hover:bg-stone-800"
                                  }`}
                                >
                                  <div>
                                    <div className="flex items-center justify-between gap-1 mb-1.5">
                                      <span
                                        className={`text-xs font-extrabold px-1.5 py-0.5 rounded-md ${
                                          isFamily
                                            ? "bg-teal-700 text-white"
                                            : "bg-amber-600 text-white"
                                        }`}
                                      >
                                        {day.dayLabel}
                                      </span>

                                      {isCompleted && (
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100 dark:fill-emerald-950" />
                                      )}
                                    </div>

                                    <div
                                      className={`text-[11px] font-bold truncate line-clamp-1 transition-colors ${
                                        isFamily
                                          ? "group-hover:text-teal-700 dark:group-hover:text-teal-300"
                                          : "group-hover:text-amber-600 dark:group-hover:text-amber-400"
                                      }`}
                                    >
                                      {day.title}
                                    </div>

                                    <div className="text-[10px] text-stone-500 dark:text-stone-400 truncate mt-0.5">
                                      {day.scriptureRef}
                                    </div>
                                  </div>

                                  <div className="mt-2 pt-1.5 border-t border-stone-200/60 dark:border-stone-800 text-[10px] text-stone-400 flex items-center justify-between">
                                    <span>{day.readTimeMinutes} 分鐘</span>
                                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* Week Card Footer Actions */}
                        <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/60 flex items-center justify-between text-xs">
                          <Link
                            href={`/devotional/${version}/${week.id}/mon`}
                            className={`inline-flex items-center gap-1 font-bold hover:underline ${
                              isFamily
                                ? "text-teal-700 dark:text-teal-400"
                                : "text-amber-600 dark:text-amber-400"
                            }`}
                          >
                            <span>從週一開始閱讀</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          <Link
                            href="/books/2-corinthians"
                            className="text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 flex items-center gap-1 transition"
                          >
                            <Library className="w-3.5 h-3.5 text-amber-600" />
                            <span>查閱本卷釋經書目評介</span>
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-950/50 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-stone-800 dark:text-stone-200">
              靈修推基古 (QT with Tychicus)
            </span>
            <span>•</span>
            <span>歷週靈修進度存檔庫</span>
          </div>

          <div className="text-center sm:text-right">
            <Link href="/" className="hover:underline font-semibold mr-3">
              返回靈修首頁
            </Link>
            <span>由 Tychicus AI 事工推動</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

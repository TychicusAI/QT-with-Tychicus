"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Clock, BookOpen, Quote, Info, Sparkles } from "lucide-react";
import { DevotionalWeek } from "@/types/devotional";
import { useCompletedDays, toggleDayCompleted } from "@/lib/storage";
import confetti from "canvas-confetti";

interface WeeklyTimelineProps {
  week: DevotionalWeek;
  recommendedDayId: string;
}

export function WeeklyTimeline({ week, recommendedDayId }: WeeklyTimelineProps) {
  const completedMap = useCompletedDays();
  const [showForeword, setShowForeword] = useState<boolean>(false);

  const isFamily = week.version === "family";

  const handleToggle = (e: React.MouseEvent, dayId: string) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = toggleDayCompleted(week.version, week.id, dayId);
    if (nextState) {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 }
      });
    }
  };

  const completedCount = week.days.filter(
    (d) => completedMap[`${week.version}-${week.id}-${d.id}`] || completedMap[`${week.id}-${d.id}`]
  ).length;
  const progressPercent = Math.round((completedCount / week.days.length) * 100);

  return (
    <section className="space-y-6">
      {/* Weekly Header & Progress Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-stone-200 dark:border-stone-800">
        <div>
          <div
            className={`text-xs font-bold tracking-wider uppercase mb-1 ${
              isFamily ? "text-teal-700 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
            }`}
          >
            <span>{week.book}・{isFamily ? "家庭版主題" : "青年版主題"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            {week.title}
          </h2>
        </div>

        {/* Progress Bar & Foreword Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowForeword(!showForeword)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition cursor-pointer"
          >
            <Info className={`w-3.5 h-3.5 ${isFamily ? "text-teal-600" : "text-amber-500"}`} />
            <span>前言簡述</span>
          </button>

          <div className="flex items-center gap-3 bg-stone-100 dark:bg-stone-800/60 px-3.5 py-1.5 rounded-full border border-stone-200 dark:border-stone-800">
            <span className="text-xs text-stone-600 dark:text-stone-400 font-medium">
              完成進度: {completedCount}/{week.days.length} 天
            </span>
            <div className="w-16 h-2 rounded-full bg-stone-200 dark:bg-stone-700 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  isFamily ? "bg-teal-600" : "bg-amber-500"
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Foreword Box */}
      {showForeword && (
        <div
          className={`p-5 rounded-2xl border text-stone-700 dark:text-stone-300 text-sm leading-relaxed space-y-2 ${
            isFamily
              ? "bg-teal-500/5 dark:bg-teal-950/20 border-teal-300/30 dark:border-teal-700/30"
              : "bg-amber-500/5 dark:bg-amber-950/20 border-amber-300/30 dark:border-amber-700/30"
          }`}
        >
          <div
            className={`font-bold flex items-center gap-2 ${
              isFamily ? "text-teal-800 dark:text-teal-300" : "text-amber-800 dark:text-amber-300"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>本週導讀前言</span>
          </div>
          <p className="whitespace-pre-line text-stone-700 dark:text-stone-300 font-sans">
            {week.foreword}
          </p>
        </div>
      )}

      {/* Golden Verse of the Week Callout */}
      <div className="flex items-center gap-3 p-4 rounded-2xl bg-stone-100/80 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 text-sm">
        <Quote
          className={`w-5 h-5 shrink-0 rotate-180 ${
            isFamily ? "text-teal-600 dark:text-teal-400" : "text-amber-500 dark:text-amber-400"
          }`}
        />
        <div className="flex-1">
          <span className="font-semibold text-stone-900 dark:text-stone-100 mr-2">
            本週核心金句：
          </span>
          <span className="italic">「{week.goldenVerse.text}」</span>
          <span
            className={`ml-2 text-xs font-medium ${
              isFamily ? "text-teal-700 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
            }`}
          >
            —— {week.goldenVerse.reference}
          </span>
        </div>
      </div>

      {/* 6 Days Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {week.days.map((day) => {
          const isCompleted = Boolean(
            completedMap[`${week.version}-${week.id}-${day.id}`] || completedMap[`${week.id}-${day.id}`]
          );
          const isToday = day.id === recommendedDayId;

          return (
            <div
              key={day.id}
              className={`group relative flex flex-col justify-between rounded-2xl p-5 border transition-all duration-200 ${
                isToday
                  ? isFamily
                    ? "bg-teal-500/5 dark:bg-teal-950/20 border-teal-500/70 dark:border-teal-600/70 shadow-md shadow-teal-500/5"
                    : "bg-amber-500/5 dark:bg-amber-950/20 border-amber-400/80 dark:border-amber-600/80 shadow-md shadow-amber-500/5"
                  : "bg-white dark:bg-stone-900/80 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 hover:shadow-md"
              }`}
            >
              <div>
                {/* Header: Day Badge & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                        isToday
                          ? isFamily
                            ? "bg-teal-700 text-white"
                            : "bg-amber-600 text-white"
                          : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
                      }`}
                    >
                      {day.dayLabel}
                    </span>
                    {isToday && (
                      <span
                        className={`text-[11px] font-bold ${
                          isFamily ? "text-teal-700 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
                        }`}
                      >
                        今日推薦
                      </span>
                    )}
                  </div>

                  <button
                    onClick={(e) => handleToggle(e, day.id)}
                    title={isCompleted ? "點擊標記為未完成" : "點擊完成打卡"}
                    className="p-1 text-stone-400 hover:text-amber-600 transition cursor-pointer"
                  >
                    <CheckCircle2
                      className={`w-5 h-5 transition-colors ${
                        isCompleted
                          ? "text-emerald-500 fill-emerald-100 dark:fill-emerald-950"
                          : "text-stone-300 dark:text-stone-700 hover:text-amber-500"
                      }`}
                    />
                  </button>
                </div>

                {/* Scripture ref */}
                <div
                  className={`text-xs font-semibold mb-1 ${
                    isFamily ? "text-teal-700 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
                  }`}
                >
                  {day.scriptureRef}
                </div>

                {/* Day Title */}
                <h3
                  className={`font-bold text-base text-stone-900 dark:text-stone-100 transition-colors line-clamp-1 ${
                    isFamily
                      ? "group-hover:text-teal-700 dark:group-hover:text-teal-400"
                      : "group-hover:text-amber-600 dark:group-hover:text-amber-400"
                  }`}
                >
                  {day.title}
                </h3>

                {/* Scripture short quote */}
                <p className="mt-2 text-xs text-stone-600 dark:text-stone-400 line-clamp-2 italic leading-relaxed">
                  「{day.goldenVerse}」
                </p>
              </div>

              {/* Footer row */}
              <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  {day.readTimeMinutes} 分鐘
                </span>

                <Link
                  href={`/devotional/${week.version}/${week.id}/${day.id}`}
                  className={`inline-flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform ${
                    isFamily ? "text-teal-700 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
                  }`}
                >
                  <span>進入閱讀</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

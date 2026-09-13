"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Flame, Sparkles, Clock, Users, Sparkle } from "lucide-react";
import { DevotionalVersion } from "@/types/devotional";
import { useStreak } from "@/lib/storage";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavbarProps {
  currentVersion?: DevotionalVersion;
  onVersionChange?: (version: DevotionalVersion) => void;
  onOpenVerseModal?: () => void;
  onOpenTimerModal?: () => void;
}

export function Navbar({
  currentVersion = "youth",
  onVersionChange,
  onOpenVerseModal,
  onOpenTimerModal,
}: NavbarProps) {
  const streak = useStreak();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-stone-50/85 dark:bg-slate-950/85 border-b border-stone-200/60 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-orange-400 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-stone-900 dark:text-stone-100">
                靈修推基古
              </span>
              <span className="hidden md:inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300/60 dark:border-amber-700/50">
                QT with Tychicus
              </span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 truncate max-w-[210px] sm:max-w-none">
              根據<strong className="font-bold text-stone-700 dark:text-stone-200">〈板新信友堂〉</strong>經課進度
            </p>
          </div>
        </Link>

        {/* Center: Version Switcher Tabs */}
        {onVersionChange && (
          <div className="flex items-center bg-stone-200/80 dark:bg-stone-900 p-1 rounded-full border border-stone-300/60 dark:border-stone-800 text-xs font-semibold">
            <button
              onClick={() => onVersionChange("youth")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition cursor-pointer ${
                currentVersion === "youth"
                  ? "bg-amber-500 text-white shadow-xs"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              <Sparkle className="w-3.5 h-3.5" />
              <span>青年版</span>
            </button>

            <button
              onClick={() => onVersionChange("family")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition cursor-pointer ${
                currentVersion === "family"
                  ? "bg-teal-700 text-white shadow-xs"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>家庭版</span>
            </button>
          </div>
        )}

        {/* Right: Interactive Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Streak indicator badge */}
          <div
            title={`連續靈修打卡 ${streak} 天`}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 text-xs font-semibold"
          >
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 animate-pulse" />
            <span>{streak} 天</span>
          </div>

          {/* Verse Card Share Button */}
          {onOpenVerseModal && (
            <button
              onClick={onOpenVerseModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-xs font-medium transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>金句卡片</span>
            </button>
          )}

          {/* Meditation Timer Button */}
          {onOpenTimerModal && (
            <button
              onClick={onOpenTimerModal}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs font-medium transition cursor-pointer"
            >
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>靜心默想</span>
            </button>
          )}

          {/* Dark mode toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

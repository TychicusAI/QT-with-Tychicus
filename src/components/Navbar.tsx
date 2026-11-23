"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { setStoredVersion } from "@/lib/storage";
import { BookOpen, Users, Sparkle, Library, Calendar, Sun, Compass, HeartHandshake, ScrollText, Mail } from "lucide-react";
import { DevotionalVersion } from "@/types/devotional";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavbarProps {
  currentVersion?: DevotionalVersion;
  onVersionChange?: (version: DevotionalVersion) => void;
}

export function Navbar({
  currentVersion = "youth",
  onVersionChange,
}: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleVersionClick = (targetVersion: DevotionalVersion) => {
    setStoredVersion(targetVersion);
    if (onVersionChange) {
      onVersionChange(targetVersion);
    }
    if (pathname !== "/" && pathname !== "/archive") {
      router.push("/");
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-stone-50/85 dark:bg-slate-950/85 border-b border-stone-200/60 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-1.5 sm:gap-4 min-w-0">
        {/* Left: Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink sm:shrink-0 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-orange-400 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-extrabold text-base sm:text-xl tracking-tight text-stone-900 dark:text-stone-100 truncate">
                靈修推基古
              </span>
            </div>
            <p
              title="v. 5.0 循序讀經"
              className="text-xs text-stone-500 dark:text-stone-400 truncate sm:max-w-none"
            >
              <span className="font-semibold text-amber-700 dark:text-amber-400">v.<span className="inline-block w-0.5" />5.0</span>{" "}
              循序讀經
            </p>
          </div>
        </Link>

        {/* Center: Version Switcher Tabs (Extra Large Desktop only; on mobile/tablet/small desktop, page body provides version switcher) */}
        {onVersionChange && (
          <div className="hidden xl:flex items-center bg-stone-200/80 dark:bg-stone-900 p-1 rounded-full border border-stone-300/60 dark:border-stone-800 text-xs font-semibold shrink-0">
            <button
              onClick={() => handleVersionClick("youth")}
              className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap ${
                currentVersion === "youth"
                  ? "bg-amber-500 text-white shadow-xs"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              <Sparkle className="w-3.5 h-3.5" />
              <span>青年版</span>
            </button>

            <button
              onClick={() => handleVersionClick("family")}
              className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap ${
                currentVersion === "family"
                  ? "bg-teal-700 text-white shadow-xs"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>家庭版</span>
            </button>

            <button
              onClick={() => handleVersionClick("encore")}
              className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap ${
                currentVersion === "encore"
                  ? "bg-rose-700 text-white shadow-xs"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>樂齡版</span>
            </button>

            <button
              onClick={() => handleVersionClick("mission")}
              className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap ${
                currentVersion === "mission"
                  ? "bg-indigo-700 text-white shadow-xs"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>宣教版</span>
            </button>

            <button
              onClick={() => handleVersionClick("solace")}
              className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap ${
                currentVersion === "solace"
                  ? "bg-sky-700 text-white shadow-xs"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>微光版</span>
            </button>

            <button
              onClick={() => handleVersionClick("exegesis")}
              className={`flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap ${
                currentVersion === "exegesis"
                  ? "bg-purple-700 text-white shadow-xs"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              <ScrollText className="w-3.5 h-3.5" />
              <span>釋經版</span>
            </button>
          </div>
        )}

        {/* Right: Interactive Controls */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* 阿咕信箱 (QA Mailbox) Link */}
          <Link
            href="/qa"
            className={`flex items-center justify-center gap-1 sm:gap-1.5 p-2 min-w-[36px] min-h-[38px] sm:min-h-[34px] sm:px-3 sm:py-1.5 rounded-full border text-xs sm:text-[13px] font-semibold transition cursor-pointer ${
              pathname.startsWith("/qa")
                ? "bg-[#1B365D] text-amber-200 border-[#1B365D] dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/50 shadow-xs"
                : "bg-[#1B365D]/8 dark:bg-slate-800/90 hover:bg-[#1B365D]/15 dark:hover:bg-slate-700 text-[#1B365D] dark:text-amber-200 border-[#1B365D]/20 dark:border-slate-700"
            }`}
            title="前往「阿咕信箱」查閱推基咕的信仰與聖經問答回信"
          >
            <Mail className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span className="hidden sm:inline">阿咕信箱</span>
          </Link>

          {/* Devotional Archive Link */}
          <Link
            href="/archive"
            className="flex items-center justify-center gap-1 sm:gap-1.5 p-2 min-w-[36px] min-h-[38px] sm:min-h-[34px] sm:px-3 sm:py-1.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs sm:text-[13px] font-medium transition cursor-pointer"
            title="查閱各版本歷週靈修進度存檔庫"
          >
            <Calendar className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            <span className="hidden sm:inline">歷週存檔</span>
          </Link>

          {/* Bibliography / Reference Books Link */}
          <Link
            href="/books/2-corinthians"
            className="flex items-center justify-center gap-1 sm:gap-1.5 p-2 min-w-[36px] min-h-[38px] sm:min-h-[34px] sm:px-3 sm:py-1.5 rounded-full bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs sm:text-[13px] font-medium transition cursor-pointer"
            title="查閱當前經卷之釋經參考書目與權威評介"
          >
            <Library className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span className="hidden sm:inline">釋經書目</span>
          </Link>

          {/* Dark mode toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

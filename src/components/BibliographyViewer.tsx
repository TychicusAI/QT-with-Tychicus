"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Library,
  Search,
  BookOpen,
  GraduationCap,
  Sparkles,
  Award,
  ChevronDown,
  ArrowLeft,
  BookCheck,
  Building2,
  Compass
} from "lucide-react";
import { BookBibliography, BookCategory } from "@/types/book";

interface BibliographyViewerProps {
  bibliography: BookBibliography;
}

export function BibliographyViewer({ bibliography }: BibliographyViewerProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | BookCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedBooks, setExpandedBooks] = useState<Set<number>>(
    () => new Set(bibliography.items.map((b) => b.id))
  );

  const toggleExpand = (id: number) => {
    setExpandedBooks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedBooks(new Set(bibliography.items.map((b) => b.id)));
  };

  const collapseAll = () => {
    setExpandedBooks(new Set());
  };

  const categoryCounts = useMemo(() => {
    const counts = {
      all: bibliography.items.length,
      accessible: 0,
      pastoral: 0,
      academic: 0,
    };
    for (const item of bibliography.items) {
      counts[item.category]++;
    }
    return counts;
  }, [bibliography.items]);

  const filteredItems = useMemo(() => {
    return bibliography.items.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inAuthor = item.author.toLowerCase().includes(q);
        const inTitle = item.bookTitle.toLowerCase().includes(q);
        const inSeries = item.series.toLowerCase().includes(q);
        const inBg = item.authorBackground.toLowerCase().includes(q);
        const inFeatures = item.features.some((f) => f.toLowerCase().includes(q));
        return inAuthor || inTitle || inSeries || inBg || inFeatures;
      }
      return true;
    });
  }, [bibliography.items, selectedCategory, searchQuery]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Top Breadcrumb & Back Navigation */}
      <div className="flex items-center justify-between gap-3 text-xs text-stone-500 dark:text-stone-400 pb-3 border-b border-stone-200 dark:border-stone-800">
        <nav className="flex items-center gap-2">
          <Link href="/" className="hover:text-stone-900 dark:hover:text-stone-100 font-medium">
            首頁
          </Link>
          <span>/</span>
          <span className="font-semibold text-stone-800 dark:text-stone-200">釋經參考書庫</span>
          <span>/</span>
          <span className="font-semibold text-amber-700 dark:text-amber-400">{bibliography.bookName}</span>
        </nav>

        <Link
          href="/devotional/youth/2026-09-14/mon"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>返回當週靈修</span>
        </Link>
      </div>

      {/* Hero Header */}
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300/60 dark:border-amber-700/50">
          <Library className="w-3.5 h-3.5" />
          <span>學術奠基・同行釋經</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
          《{bibliography.bookName}》釋經參考書目評介
        </h1>

        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          {bibliography.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="px-3 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-medium">
            共收錄 <strong className="text-amber-700 dark:text-amber-400 font-bold">{bibliography.totalBooks}</strong> 部權威註釋書與專題著作
          </span>
          <span className="px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
            包含 BECNT、NIGTC、NICNT、NIVAC、PNTC、WSCNT、BST 等權威書系
          </span>
        </div>
      </header>

      {/* Filter and Search Bar */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-x-auto text-xs font-semibold">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-2 rounded-xl transition cursor-pointer whitespace-nowrap ${
                selectedCategory === "all"
                  ? "bg-white dark:bg-stone-800 text-stone-900 dark:text-white shadow-xs"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              全部書目 ({categoryCounts.all})
            </button>

            <button
              onClick={() => setSelectedCategory("accessible")}
              className={`flex items-center gap-1 px-3 py-2 rounded-xl transition cursor-pointer whitespace-nowrap ${
                selectedCategory === "accessible"
                  ? "bg-white dark:bg-stone-800 text-amber-700 dark:text-amber-300 shadow-xs font-bold"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>大眾靈修入門 ({categoryCounts.accessible})</span>
            </button>

            <button
              onClick={() => setSelectedCategory("pastoral")}
              className={`flex items-center gap-1 px-3 py-2 rounded-xl transition cursor-pointer whitespace-nowrap ${
                selectedCategory === "pastoral"
                  ? "bg-white dark:bg-stone-800 text-teal-700 dark:text-teal-300 shadow-xs font-bold"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-teal-500" />
              <span>教牧講道應用 ({categoryCounts.pastoral})</span>
            </button>

            <button
              onClick={() => setSelectedCategory("academic")}
              className={`flex items-center gap-1 px-3 py-2 rounded-xl transition cursor-pointer whitespace-nowrap ${
                selectedCategory === "academic"
                  ? "bg-white dark:bg-stone-800 text-indigo-700 dark:text-indigo-300 shadow-xs font-bold"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
              <span>嚴謹高階學術 ({categoryCounts.academic})</span>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 self-end md:self-auto text-xs text-stone-500 dark:text-stone-400">
            <button
              onClick={expandAll}
              className="hover:text-stone-800 dark:hover:text-stone-200 transition cursor-pointer underline"
            >
              全部展開
            </button>
            <span>・</span>
            <button
              onClick={collapseAll}
              className="hover:text-stone-800 dark:hover:text-stone-200 transition cursor-pointer underline"
            >
              全部收合
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜尋作者（如：賴特、加蘭、巴刻）、書系（BECNT、NIVAC）或特點關鍵字..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-sm text-stone-800 dark:text-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              清除
            </button>
          )}
        </div>
      </div>

      {/* Book Items List */}
      <div className="space-y-6">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 dark:bg-stone-900/40 rounded-3xl border border-dashed border-stone-300 dark:border-stone-800 space-y-3">
            <Library className="w-8 h-8 text-stone-400 mx-auto" />
            <p className="text-stone-600 dark:text-stone-400 font-medium text-sm">
              沒有找到符合「{searchQuery}」的註釋書或著作
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="text-xs text-amber-600 dark:text-amber-400 underline font-medium"
            >
              清除篩選條件
            </button>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isExpanded = expandedBooks.has(item.id);

            const categoryStyle = {
              accessible: {
                badge: "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-300/60",
                icon: <Sparkles className="w-3 h-3 text-amber-600 dark:text-amber-400" />,
              },
              pastoral: {
                badge: "bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border-teal-300/60",
                icon: <Compass className="w-3 h-3 text-teal-600 dark:text-teal-400" />,
              },
              academic: {
                badge: "bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border-indigo-300/60",
                icon: <GraduationCap className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />,
              },
            }[item.category];

            return (
              <div
                key={item.id}
                className="p-5 sm:p-7 rounded-3xl bg-white dark:bg-stone-950 border border-stone-200/90 dark:border-stone-800/90 space-y-4 shadow-xs hover:border-amber-400/50 dark:hover:border-amber-600/40 transition duration-200"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800/80 pb-3.5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-md bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 text-xs font-bold font-mono">
                        #{item.id}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${categoryStyle.badge}`}
                      >
                        {categoryStyle.icon}
                        <span>{item.categoryLabel}</span>
                      </span>
                      <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                        {item.series}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight pt-1">
                      {item.author} — <span className="font-serif italic font-semibold">{item.bookTitle}</span>
                    </h2>
                  </div>

                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="self-end sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition cursor-pointer"
                  >
                    <span>{isExpanded ? "收合評介" : "展開評介"}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {isExpanded && (
                  <div className="space-y-4 pt-1 animate-in fade-in duration-200">
                    {/* Author Background */}
                    {item.authorBackground && (
                      <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-900/60 border border-stone-200/70 dark:border-stone-800/70 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-700 dark:text-stone-300">
                          <Building2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          <span>學者／牧者背景</span>
                        </div>
                        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed whitespace-pre-line">
                          {item.authorBackground}
                        </p>
                      </div>
                    )}

                    {/* Content Highlights / Key Features */}
                    {item.features.length > 0 && (
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-700 dark:text-stone-300">
                          <BookCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                          <span>釋經特色與神學洞見</span>
                        </div>

                        <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-200 leading-relaxed pl-1">
                          {item.features.map((feat, fIdx) => {
                            // Extract title before colon if present
                            const colonMatch = feat.match(/^\*\*([^*]+)\*\*[：:]\s*(.*)$/);
                            if (colonMatch) {
                              return (
                                <li key={fIdx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                                  <div>
                                    <strong className="font-bold text-stone-900 dark:text-stone-100">
                                      {colonMatch[1]}：
                                    </strong>
                                    <span>{colonMatch[2]}</span>
                                  </div>
                                </li>
                              );
                            }

                            return (
                              <li key={fIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                                <span>{feat}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Floating/Sticky Action Banner */}
      <footer className="pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="text-xs font-semibold text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition"
        >
          返回靈修推基古首頁
        </Link>

        <Link
          href="/devotional/youth/2026-09-14/mon"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition shadow-md shadow-amber-600/20"
        >
          <span>進入《哥林多後書》本週靈修 ➔</span>
        </Link>
      </footer>
    </div>
  );
}

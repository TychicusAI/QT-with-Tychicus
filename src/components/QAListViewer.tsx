"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Mail,
  Search,
  BookOpen,
  Clock,
  Feather,
  HeartHandshake,
  Compass,
  Sparkles,
  Scale,
  ArrowRight,
  Tag,
  Newspaper,
  Calendar,
} from "lucide-react";
import { QAArticle, QACategoryConfig } from "@/types/qa";
import { TychiCooImage } from "@/components/TychiCooImage";

interface QAListViewerProps {
  categories: QACategoryConfig[];
  articles: QAArticle[];
}

function formatCurrentAffairsMonth(article: QAArticle): string | null {
  if (article.category !== "current-affairs") return null;
  const raw = (article.askedAt || article.publishedAt || "").trim();
  if (!raw) return null;
  const match = raw.match(/^(\d{4})[-/](\d{1,2})/);
  if (match) {
    return `${match[1]}/${match[2].padStart(2, "0")}`;
  }
  return raw;
}

function getCategoryAccent(accent?: QACategoryConfig["accent"]) {
  switch (accent) {
    case "amber":
      return {
        badge:
          "bg-amber-100/90 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border-amber-300/70 dark:border-amber-800/60",
        tabActive:
          "bg-white dark:bg-slate-800 text-amber-800 dark:text-amber-300 shadow-xs font-bold",
        icon: <Compass className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />,
      };
    case "teal":
      return {
        badge:
          "bg-teal-100/90 dark:bg-teal-950/60 text-teal-900 dark:text-teal-300 border-teal-300/70 dark:border-teal-800/60",
        tabActive:
          "bg-white dark:bg-slate-800 text-teal-800 dark:text-teal-300 shadow-xs font-bold",
        icon: <BookOpen className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />,
      };
    case "indigo":
      return {
        badge:
          "bg-indigo-100/90 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-300 border-indigo-300/70 dark:border-indigo-800/60",
        tabActive:
          "bg-white dark:bg-slate-800 text-indigo-800 dark:text-indigo-300 shadow-xs font-bold",
        icon: <Scale className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />,
      };
    case "rose":
      return {
        badge:
          "bg-rose-100/90 dark:bg-rose-950/60 text-rose-900 dark:text-rose-300 border-rose-300/70 dark:border-rose-800/60",
        tabActive:
          "bg-white dark:bg-slate-800 text-rose-800 dark:text-rose-300 shadow-xs font-bold",
        icon: <Newspaper className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />,
      };
    case "slate":
      return {
        badge:
          "bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300/80 dark:border-slate-700",
        tabActive:
          "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-xs font-bold",
        icon: <HeartHandshake className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />,
      };
    case "navy":
    default:
      return {
        badge:
          "bg-[#1B365D]/10 dark:bg-sky-950/60 text-[#1B365D] dark:text-sky-200 border-[#1B365D]/20 dark:border-sky-800/60",
        tabActive:
          "bg-white dark:bg-slate-800 text-[#1B365D] dark:text-amber-300 shadow-xs font-bold",
        icon: <Sparkles className="w-3.5 h-3.5 text-[#1B365D] dark:text-amber-400" />,
      };
  }
}

export function QAListViewer({ categories, articles }: QAListViewerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryMap = useMemo(
    () => new Map(categories.map((c) => [c.id, c])),
    [categories]
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: articles.length };
    for (const c of categories) map[c.id] = 0;
    for (const a of articles) {
      map[a.category] = (map[a.category] || 0) + 1;
    }
    return map;
  }, [categories, articles]);

  const publishedTotal = useMemo(
    () => articles.filter((a) => a.status === "published").length,
    [articles]
  );
  const upcomingTotal = useMemo(
    () => articles.filter((a) => a.status === "upcoming").length,
    [articles]
  );

  const featuredArticles = useMemo(() => {
    return articles
      .filter((a) => a.status === "published" && a.featured)
      .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
  }, [articles]);

  const filteredArticles = useMemo(() => {
    const list = articles.filter((item) => {
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.question.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q) ||
          (item.eventContext?.toLowerCase().includes(q) ?? false) ||
          item.tags.some((t) => t.toLowerCase().includes(q)) ||
          item.scriptures.some((s) => s.toLowerCase().includes(q))
        );
      }
      return true;
    });
    if (selectedCategory === "current-affairs") {
      return [...list].sort((a, b) => {
        if (a.status !== b.status) return a.status === "published" ? -1 : 1;
        return (b.publishedAt || "").localeCompare(a.publishedAt || "");
      });
    }
    return list;
  }, [articles, selectedCategory, searchQuery]);

  const activeCategoryConfig =
    selectedCategory === "all" ? null : categoryMap.get(selectedCategory) || null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-stone-500 dark:text-stone-400 pb-3 border-b border-stone-200 dark:border-stone-800">
        <nav className="flex items-center gap-2">
          <Link href="/" className="hover:text-stone-900 dark:hover:text-stone-100 font-medium">
            首頁
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#1B365D] dark:text-amber-300">阿咕信箱</span>
        </nav>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-[#1B365D]/8 dark:bg-slate-800 text-[#1B365D] dark:text-amber-300 font-semibold">
            已回信 {publishedTotal} 封
          </span>
          {upcomingTotal > 0 && (
            <span className="px-2.5 py-1 rounded-full bg-amber-100/70 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 font-medium">
              執筆中 {upcomingTotal} 封
            </span>
          )}
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#132642] via-[#1B365D] to-[#244572] text-stone-50 shadow-lg border border-[#2C4E80]/60">
        <div className="p-6 sm:p-9 flex flex-col justify-center space-y-4">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-amber-400/15 text-amber-200 border border-amber-300/30">
            <Mail className="w-3.5 h-3.5 text-amber-300" />
            <span>推基咕（Tychi-Coo）信仰問答專欄</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            阿咕信箱
          </h1>

          <p className="text-sm sm:text-base text-slate-200/95 leading-relaxed max-w-3xl">
            戴著圓框眼鏡、圍著深藍圍巾的跨時空信鴿特使——專門往返於第一世紀的聖經現場與二十一世紀的書桌之間，把架在長頸鹿高度的神學，叼回小羊吃得到的地方。
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 dark:bg-slate-900 border border-stone-200 dark:border-slate-800 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-2 min-h-[38px] rounded-xl transition cursor-pointer whitespace-nowrap ${
              selectedCategory === "all"
                ? "bg-white dark:bg-slate-800 text-[#1B365D] dark:text-amber-300 shadow-xs font-bold"
                : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            }`}
          >
            全部信件 ({counts.all})
          </button>

          {categories.map((cat) => {
            const style = getCategoryAccent(cat.accent);
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-xl transition cursor-pointer whitespace-nowrap ${
                  active
                    ? style.tabActive
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                }`}
              >
                {style.icon}
                <span>
                  {cat.name} ({counts[cat.id] || 0})
                </span>
              </button>
            );
          })}
        </div>

        {activeCategoryConfig && (
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 px-1">
            <span className="font-semibold text-stone-800 dark:text-stone-200">
              {activeCategoryConfig.name}：
            </span>
            {activeCategoryConfig.description}
          </p>
        )}

        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜尋信仰困惑、經卷或關鍵字（如：天國、禱告、苦難、啟示錄）..."
            className="w-full pl-10 pr-12 py-2.5 rounded-2xl bg-white dark:bg-slate-950 border border-stone-200 dark:border-slate-800 text-sm sm:text-base text-stone-800 dark:text-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1B365D] dark:focus:ring-amber-500 transition shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer"
            >
              清除
            </button>
          )}
        </div>
      </section>

      {/* Featured Timely Dispatches */}
      {selectedCategory === "all" && !searchQuery.trim() && featuredArticles.length > 0 && (
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-800 dark:text-rose-300 px-1">
            <Newspaper className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            <span>近期加急回信</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {featuredArticles.map((article) => {
              const monthStamp = formatCurrentAffairsMonth(article);
              return (
                <Link
                  key={`featured-${article.slug}`}
                  href={`/qa/${article.slug}`}
                  className="group p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-rose-50/90 via-white to-amber-50/50 dark:from-rose-950/30 dark:via-slate-950 dark:to-slate-900 border border-rose-200/80 dark:border-rose-900/60 hover:border-rose-400/80 dark:hover:border-rose-700 shadow-xs hover:shadow-md transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 dark:bg-rose-950/70 text-rose-900 dark:text-rose-300 border border-rose-300/70 dark:border-rose-800/60">
                        <Newspaper className="w-3 h-3" />
                        <span>{article.categoryLabel}</span>
                      </span>
                      {monthStamp && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100/80 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 border border-rose-200/80 dark:border-rose-800/60">
                          <Calendar className="w-3 h-3 text-rose-600 dark:text-rose-400" />
                          <span>提問時間 {monthStamp}</span>
                        </span>
                      )}
                      {article.eventContext && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/80 dark:bg-slate-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-slate-700">
                          <span>{article.eventContext}</span>
                        </span>
                      )}
                      {!monthStamp && article.publishedAt && (
                        <span className="text-xs text-stone-500 dark:text-stone-400">
                          {article.publishedAt}
                        </span>
                      )}
                    </div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-stone-900 dark:text-stone-50 group-hover:text-rose-800 dark:group-hover:text-rose-300 transition leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-rose-800 dark:text-rose-300 shrink-0">
                    <span>拆封閱讀</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Letters Grid */}
      <section>
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900/50 rounded-3xl border border-dashed border-stone-300 dark:border-slate-800 space-y-3">
            <Mail className="w-8 h-8 text-stone-400 mx-auto" />
            <p className="text-stone-600 dark:text-stone-400 font-medium text-sm sm:text-base">
              郵差包裡暫時找不到符合條件的信件
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="text-xs sm:text-sm text-[#1B365D] dark:text-amber-400 underline font-semibold cursor-pointer"
            >
              顯示全部信件
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredArticles.map((article) => {
              const cat = categoryMap.get(article.category);
              const style = getCategoryAccent(cat?.accent);
              const isPublished = article.status === "published";
              const monthStamp = formatCurrentAffairsMonth(article);

              if (!isPublished) {
                return (
                  <div
                    key={article.slug}
                    className="p-5 sm:p-6 rounded-3xl bg-stone-100/70 dark:bg-slate-900/60 border border-dashed border-stone-300 dark:border-slate-800 flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${style.badge}`}
                        >
                          {style.icon}
                          <span>{article.categoryLabel}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100/80 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50">
                          <Feather className="w-3 h-3" />
                          <span>阿咕執筆中</span>
                        </span>
                      </div>

                      <h2 className="text-lg sm:text-xl font-bold text-stone-800 dark:text-stone-200 leading-snug">
                        {article.title}
                      </h2>

                      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-200/80 dark:border-slate-800 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-amber-200/70 dark:border-slate-700 bg-[#FAF8F5]">
                        <TychiCooImage
                          src="/images/tychicoo/writing.jpg"
                          alt="推基咕書桌執筆中"
                          variant="writing"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-stone-500 dark:text-stone-400">
                        此題已排入信箱佇列，回信整理完成後就會拆封上架。
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={article.slug}
                  href={`/qa/${article.slug}`}
                  className="group p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-950 border border-stone-200/90 dark:border-slate-800 hover:border-[#1B365D]/40 dark:hover:border-amber-500/50 shadow-xs hover:shadow-md transition duration-200 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${style.badge}`}
                      >
                        {style.icon}
                        <span>{article.categoryLabel}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>約 {article.readTimeMinutes} 分鐘閱讀</span>
                      </span>
                    </div>

                    {(monthStamp || article.eventContext) && (
                      <div className="flex flex-wrap items-center gap-1.5">
                        {monthStamp && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-rose-100/80 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 border border-rose-200/80 dark:border-rose-800/60">
                            <Calendar className="w-3 h-3" />
                            <span>提問時間 {monthStamp}</span>
                          </span>
                        )}
                        {article.eventContext && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-medium bg-rose-50/80 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200/70 dark:border-rose-800/50">
                            <span>{article.eventContext}</span>
                          </span>
                        )}
                      </div>
                    )}

                    <h2 className="text-lg sm:text-xl font-extrabold text-stone-900 dark:text-stone-50 group-hover:text-[#1B365D] dark:group-hover:text-amber-300 transition leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-stone-100 dark:border-slate-800/80">
                    {article.tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5">
                        {article.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-stone-100 dark:bg-slate-900 text-stone-600 dark:text-stone-400"
                          >
                            <Tag className="w-2.5 h-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#1B365D] dark:text-amber-400">
                      <span className="inline-flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>拆封閱讀回信</span>
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

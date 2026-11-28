"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  HeartHandshake,
  Mail,
  Tag,
  Compass,
  Library,
  Newspaper,
  Calendar,
} from "lucide-react";
import { marked } from "marked";
import { QAArticle } from "@/types/qa";
import { TychiCooImage } from "@/components/TychiCooImage";
import { TextSelectionToolbar } from "@/components/TextSelectionToolbar";

interface QADetailReaderProps {
  article: QAArticle;
  prevArticle: QAArticle | null;
  nextArticle: QAArticle | null;
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

export function QADetailReader({
  article,
  prevArticle,
  nextArticle,
}: QADetailReaderProps) {
  const [fontSize, setFontSize] = useState<"normal" | "large" | "xlarge">("large");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("qt_font_size");
      if (saved === "normal" || saved === "large" || saved === "xlarge") {
        setFontSize(saved);
      }
    } catch {}
  }, []);

  const handleSetFontSize = (size: "normal" | "large" | "xlarge") => {
    setFontSize(size);
    try {
      localStorage.setItem("qt_font_size", size);
    } catch {}
  };

  const contentFontClass = {
    normal: "text-base sm:text-[17px] leading-relaxed sm:leading-loose",
    large: "text-[17px] sm:text-lg leading-loose",
    xlarge: "text-lg sm:text-xl leading-loose",
  }[fontSize];

  const isSufferingCare = Boolean(article.pastoralNotice);
  const isCurrentAffairs = article.category === "current-affairs";
  const currentAffairsMonth = formatCurrentAffairsMonth(article);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      <TextSelectionToolbar
        versionLabel="阿咕信箱"
        scriptureRef={article.scriptures.join("、")}
        dayTitle={article.title}
      />

      {/* Top Breadcrumb & Font Size */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-stone-500 dark:text-stone-400 pb-3 border-b border-stone-200 dark:border-slate-800">
        <nav className="flex items-center gap-2">
          <Link href="/" className="hover:text-stone-900 dark:hover:text-stone-100 font-medium">
            首頁
          </Link>
          <span>/</span>
          <Link
            href="/qa"
            className="hover:text-stone-900 dark:hover:text-stone-100 font-medium"
          >
            阿咕信箱
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#1B365D] dark:text-amber-300">
            {article.categoryLabel}
          </span>
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center bg-stone-100 dark:bg-slate-800/80 rounded-lg p-0.5 border border-stone-200 dark:border-slate-700">
            {(["normal", "large", "xlarge"] as const).map((sz, idx) => (
              <button
                key={sz}
                onClick={() => handleSetFontSize(sz)}
                className={`px-2.5 py-1 min-h-[34px] sm:min-h-[30px] rounded text-xs sm:text-sm font-semibold cursor-pointer transition ${
                  fontSize === sz
                    ? "bg-white dark:bg-slate-700 text-stone-900 dark:text-white shadow-xs"
                    : "text-stone-500 hover:text-stone-800 dark:hover:text-stone-200"
                }`}
              >
                {["小", "中", "大"][idx]}
              </button>
            ))}
          </div>

          <Link
            href="/qa"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[34px] rounded-lg text-xs sm:text-sm font-semibold bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-stone-700 dark:text-stone-200 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>返回信箱</span>
          </Link>
        </div>
      </div>

      {/* Letter Header */}
      <header className="space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${
              isSufferingCare
                ? "bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700"
                : isCurrentAffairs
                ? "bg-rose-100/90 dark:bg-rose-950/60 text-rose-900 dark:text-rose-300 border-rose-300/70 dark:border-rose-800/60"
                : "bg-[#1B365D]/10 dark:bg-sky-950/60 text-[#1B365D] dark:text-amber-300 border-[#1B365D]/20 dark:border-sky-800/60"
            }`}
          >
            {isSufferingCare ? (
              <HeartHandshake className="w-3.5 h-3.5" />
            ) : isCurrentAffairs ? (
              <Newspaper className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            ) : (
              <Mail className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            )}
            <span>{article.categoryLabel}</span>
          </span>

          {currentAffairsMonth && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-rose-100/80 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 border border-rose-200/80 dark:border-rose-800/60">
              <Calendar className="w-3.5 h-3.5" />
              <span>提問時間：{currentAffairsMonth}</span>
            </span>
          )}

          {article.eventContext && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200/80 dark:border-rose-800/50">
              <span>時事背景：{article.eventContext}</span>
            </span>
          )}

          {article.readTimeMinutes > 0 && (
            <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-stone-500 dark:text-stone-400">
              <Clock className="w-3.5 h-3.5" />
              <span>約 {article.readTimeMinutes} 分鐘閱讀</span>
            </span>
          )}

          {!isCurrentAffairs && article.publishedAt && (
            <span className="text-xs sm:text-sm text-stone-400 dark:text-stone-500">
              ・{article.publishedAt}
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight leading-snug">
          {article.title}
        </h1>

        {/* Reader Question Callout */}
        {article.question && article.question !== article.title && (
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-100/90 dark:bg-slate-900/80 border-l-4 border-[#1B365D] dark:border-amber-500 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
              來信提問{currentAffairsMonth ? `・${currentAffairsMonth}` : ""}
            </p>
            <p>{article.question}</p>
          </div>
        )}

        {/* Scriptures & Tags */}
        {(article.scriptures.length > 0 || article.tags.length > 0) && (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {article.scriptures.map((ref) => (
              <span
                key={ref}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/50"
              >
                <BookOpen className="w-3 h-3" />
                <span>{ref}</span>
              </span>
            ))}
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-stone-100 dark:bg-slate-900 text-stone-600 dark:text-stone-400"
              >
                <Tag className="w-2.5 h-2.5" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Letter Body Card */}
      <article
        className={`p-6 sm:p-10 rounded-3xl border shadow-xs ${
          isSufferingCare
            ? "bg-stone-50/80 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800"
            : "bg-white dark:bg-slate-950 border-stone-200/90 dark:border-slate-800"
        }`}
      >
        {/* Sender Bar */}
        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-stone-100 dark:border-slate-800/80">
          <div className="w-11 h-11 rounded-2xl overflow-hidden ring-2 ring-[#1B365D]/15 dark:ring-amber-400/30 bg-[#FAF8F5] shrink-0">
            <TychiCooImage
              src="/images/tychicoo/avatar.jpg"
              alt="推基咕頭像"
              variant="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
              推基咕（Tychi-Coo）回信
            </p>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              {isSufferingCare
                ? "收起翅膀，安靜陪你走這一段路"
                : "從第一世紀書信現場飛回你的書桌旁"}
            </p>
          </div>
        </div>

        <div
          className={`markdown-content space-y-5 text-stone-800 dark:text-stone-200 ${contentFontClass} [&_p]:mb-5 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_blockquote]:border-l-4 [&_blockquote]:border-amber-500/70 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-stone-600 dark:[&_blockquote]:text-stone-400`}
          dangerouslySetInnerHTML={{
            __html: marked.parse(
              article.body.replace(/\*\*([^\n*]+?)\*\*/g, "<strong>$1</strong>"),
              { breaks: true }
            ) as string,
          }}
        />
      </article>

      {/* Pastoral Care Notice (for suffering/grief topics) */}
      {isSufferingCare && (
        <aside className="p-5 sm:p-6 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200">
            <HeartHandshake className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <span>溫柔的牧養提醒</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            書信裡的文字能帶來片刻陪伴，但無法取代真實生活裡的擁抱與守望。如果你正走過劇烈的喪親、憂鬱或極度無力的時刻，請不要一個人硬撐——鼓勵你向在地教會信任的牧者、小組長或專業心理諮商師求助；若處於緊急情緒危機，在台灣可隨時撥打衛生福利部 24 小時安心專線 1925。
          </p>
        </aside>
      )}

      {/* Related Links in Messenger Bag */}
      {article.relatedLinks.length > 0 && (
        <section className="p-5 sm:p-6 rounded-3xl bg-[#1B365D]/5 dark:bg-slate-900/70 border border-[#1B365D]/15 dark:border-slate-800 space-y-3.5">
          <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#1B365D] dark:text-amber-300">
            <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>郵差包裡的延伸閱讀</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {article.relatedLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="flex items-center justify-between gap-2 px-4 py-3 rounded-2xl bg-white dark:bg-slate-950 border border-stone-200/90 dark:border-slate-800 hover:border-[#1B365D]/40 dark:hover:border-amber-500/50 text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200 transition"
              >
                <span className="inline-flex items-center gap-2 truncate">
                  {link.type === "book" ? (
                    <Library className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  ) : (
                    <BookOpen className="w-4 h-4 text-[#1B365D] dark:text-sky-400 shrink-0" />
                  )}
                  <span className="truncate">{link.label}</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Prev / Next Navigation */}
      <footer className="pt-6 border-t border-stone-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {prevArticle ? (
          <Link
            href={`/qa/${prevArticle.slug}`}
            className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-stone-200 dark:border-slate-800 hover:border-[#1B365D]/40 dark:hover:border-amber-500/40 transition space-y-1"
          >
            <span className="inline-flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400">
              <ArrowLeft className="w-3 h-3" />
              <span>上一封回信</span>
            </span>
            <p className="text-sm font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
              {prevArticle.title}
            </p>
          </Link>
        ) : (
          <div />
        )}

        {nextArticle && (
          <Link
            href={`/qa/${nextArticle.slug}`}
            className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-stone-200 dark:border-slate-800 hover:border-[#1B365D]/40 dark:hover:border-amber-500/40 transition space-y-1 sm:text-right"
          >
            <span className="inline-flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400 sm:justify-end">
              <span>下一封回信</span>
              <ArrowRight className="w-3 h-3" />
            </span>
            <p className="text-sm font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
              {nextArticle.title}
            </p>
          </Link>
        )}
      </footer>
    </div>
  );
}

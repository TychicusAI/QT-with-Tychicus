"use client";

import { useState } from "react";
import { ExtendedStudyItem, DevotionalVersion } from "@/types/devotional";
import { BookOpen, ExternalLink, ChevronDown } from "lucide-react";

interface ExtendedStudySectionProps {
  items: ExtendedStudyItem[];
  version?: DevotionalVersion;
}

export function ExtendedStudySection({ items, version = "youth" }: ExtendedStudySectionProps) {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  if (!items || items.length === 0) return null;

  const toggleExpand = (idx: number) => {
    setExpandedIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const isFamily = version === "family";

  return (
    <section className="p-5 sm:p-6 rounded-3xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <BookOpen
            className={`w-5 h-5 shrink-0 ${
              isFamily ? "text-teal-600 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
            }`}
          />
          <span>延伸研讀</span>
        </h4>
        <span className="text-[11px] text-stone-500 dark:text-stone-400">
          共 {items.length} 處對照・點擊卡片展開經文
        </span>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => {
          const isExpanded = expandedIndices.has(idx);

          return (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              onClick={() => toggleExpand(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleExpand(idx);
                }
              }}
              className={`group p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-950 border transition-all duration-200 shadow-2xs cursor-pointer select-none ${
                isExpanded
                  ? isFamily
                    ? "border-teal-500/80 shadow-sm ring-1 ring-teal-500/20"
                    : "border-amber-500/80 shadow-sm ring-1 ring-amber-500/20"
                  : isFamily
                  ? "border-stone-200/90 dark:border-stone-800/90 hover:border-teal-500/60 hover:shadow-xs"
                  : "border-stone-200/90 dark:border-stone-800/90 hover:border-amber-500/60 hover:shadow-xs"
              }`}
            >
              {/* Header: Title + Action Buttons */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span
                  className={`font-bold text-xs sm:text-sm tracking-tight ${
                    isFamily ? "text-teal-700 dark:text-teal-400" : "text-amber-700 dark:text-amber-400"
                  }`}
                >
                  {item.title}
                </span>

                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium transition ${
                      isExpanded
                        ? isFamily
                          ? "bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-200"
                          : "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200"
                        : isFamily
                        ? "bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 group-hover:bg-teal-50 dark:group-hover:bg-teal-950/40 group-hover:text-teal-700"
                        : "bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-300 group-hover:bg-amber-50 dark:group-hover:bg-amber-950/40 group-hover:text-amber-700"
                    }`}
                  >
                    <span>{isExpanded ? "收合經文" : "點擊展開經文"}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </span>

                  {item.bibliaUrl && (
                    <a
                      href={item.bibliaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium text-stone-400 hover:text-stone-800 dark:text-stone-500 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition"
                      title="在 Biblia 深入查閱前後文"
                    >
                      <span>Biblia 查經</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Box Body: Commentary (補述的內容) */}
              <p className="pt-2 text-stone-700 dark:text-stone-200 leading-relaxed text-xs sm:text-[13.5px]">
                {item.question}
              </p>

              {/* Expandable Scripture Box below the commentary */}
              {isExpanded && (
                <div
                  className="pt-3 mt-3 border-t border-stone-200/80 dark:border-stone-800/80 animate-in fade-in slide-in-from-top-2 duration-200 select-text"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between text-[11px] font-medium mb-2 text-stone-600 dark:text-stone-400">
                    <span className="flex items-center gap-1.5">
                      <BookOpen
                        className={`w-3.5 h-3.5 ${
                          isFamily ? "text-teal-600 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
                        }`}
                      />
                      <span className="font-semibold text-stone-800 dark:text-stone-200">【經文內容】</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
                      新標點和合本
                    </span>
                  </div>

                  {item.text ? (
                    <blockquote
                      className={`p-3.5 sm:p-4 rounded-xl border font-serif text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                        isFamily
                          ? "bg-teal-500/5 dark:bg-teal-950/25 border-teal-200/50 dark:border-teal-800/40 text-stone-800 dark:text-stone-100"
                          : "bg-amber-500/5 dark:bg-amber-950/25 border-amber-200/50 dark:border-amber-800/40 text-stone-800 dark:text-stone-100"
                      }`}
                    >
                      {item.text}
                    </blockquote>
                  ) : (
                    <p className="text-xs text-stone-400 italic py-2">
                      經文載入中，或請點擊右上角「Biblia 查經」檢視完整前後文。
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

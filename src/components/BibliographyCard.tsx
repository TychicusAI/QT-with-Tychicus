"use client";

import React from "react";
import Link from "next/link";
import { Library, ArrowRight, BookCheck } from "lucide-react";
import { DevotionalVersion } from "@/types/devotional";

interface BibliographyCardProps {
  version?: DevotionalVersion;
  bookSlug?: string;
  bookName?: string;
}

export function BibliographyCard({
  version = "youth",
  bookSlug = "2-corinthians",
  bookName = "哥林多後書",
}: BibliographyCardProps) {
  const isFamily = version === "family";

  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 border transition-all duration-200 shadow-2xs ${
        isFamily
          ? "bg-gradient-to-r from-teal-500/5 via-teal-500/10 to-emerald-500/5 border-teal-300/50 dark:border-teal-800/40"
          : "bg-gradient-to-r from-amber-500/5 via-amber-500/10 to-orange-500/5 border-amber-300/50 dark:border-amber-800/40"
      }`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div
            className={`p-2.5 rounded-xl shrink-0 ${
              isFamily
                ? "bg-teal-600/10 text-teal-700 dark:text-teal-300"
                : "bg-amber-600/10 text-amber-700 dark:text-amber-300"
            }`}
          >
            <Library className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                本篇靈修釋經學術根據
              </span>
              <span
                className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                  isFamily
                    ? "bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-200"
                    : "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200"
                }`}
              >
                <BookCheck className="w-3 h-3" />
                <span>《{bookName}》參考書目</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              本材料嚴謹奠基於當代 14 部頂尖福音派註釋書與神學著作（BECNT、NIGTC、NICNT、NIVAC 等），深入剖析歷史、社會修辭與救贖神學。
            </p>
          </div>
        </div>

        <Link
          href={`/books/${bookSlug}`}
          className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition shadow-xs group ${
            isFamily
              ? "bg-teal-700 hover:bg-teal-600 text-white shadow-teal-700/20"
              : "bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/20"
          }`}
        >
          <span>查閱 14 部書目導讀評介</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Mail, Feather } from "lucide-react";

interface TychiCooImageProps {
  src: string;
  alt: string;
  variant: "avatar" | "hero" | "writing";
  className?: string;
}

export function TychiCooImage({
  src,
  alt,
  variant,
  className = "",
}: TychiCooImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (variant === "hero") {
      return (
        <div
          className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#162C4E] via-[#1E3A5F] to-[#2B4C7E] text-amber-100/90 p-6 ${className}`}
          aria-label={alt}
        >
          <div className="w-14 h-14 rounded-2xl bg-amber-400/15 border border-amber-300/30 flex items-center justify-center mb-3">
            <Mail className="w-7 h-7 text-amber-300" />
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-amber-200/90">
            推基咕的跨時空書房
          </p>
        </div>
      );
    }

    if (variant === "writing") {
      return (
        <div
          className={`flex items-center justify-center bg-amber-50 dark:bg-slate-800/80 border border-amber-200/70 dark:border-slate-700 text-[#1B365D] dark:text-amber-300 ${className}`}
          aria-label={alt}
        >
          <Feather className="w-5 h-5" />
        </div>
      );
    }

    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#1B365D] to-[#2A4B7C] text-amber-200 font-bold ${className}`}
        aria-label={alt}
      >
        <span className="text-sm sm:text-base tracking-tight">咕</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

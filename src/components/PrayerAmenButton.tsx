"use client";

import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { DevotionalVersion } from "@/types/devotional";
import { useIsDayCompleted, toggleDayCompleted } from "@/lib/storage";
import confetti from "canvas-confetti";

interface PrayerAmenButtonProps {
  version: DevotionalVersion;
  weekId: string;
  dayId: string;
}

export function PrayerAmenButton({ version, weekId, dayId }: PrayerAmenButtonProps) {
  const completed = useIsDayCompleted(version, weekId, dayId);

  const handleAmen = () => {
    const nextState = toggleDayCompleted(version, weekId, dayId);

    if (nextState) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const isFamily = version === "family";

  return (
    <div className="flex flex-col items-center justify-center pt-4 pb-2 space-y-3">
      <button
        onClick={handleAmen}
        className={`flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 shadow-xl active:scale-95 cursor-pointer ${
          completed
            ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30"
            : isFamily
            ? "bg-teal-700 hover:bg-teal-600 text-white shadow-teal-700/30 hover:shadow-teal-600/40"
            : "bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/30 hover:shadow-amber-500/40"
        }`}
      >
        {completed ? (
          <>
            <CheckCircle2 className="w-5 h-5" />
            <span>今日靈修已完成（同心阿們）</span>
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            <span>同心阿們・完成今日靈修</span>
          </>
        )}
      </button>

      <p className="text-xs text-stone-500 dark:text-stone-400">
        {completed ? "恭喜你！點擊可取消打卡狀態" : "讀完建議禱告後，點擊以打卡記錄今日靈修"}
      </p>
    </div>
  );
}

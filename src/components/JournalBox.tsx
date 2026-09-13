"use client";

import React, { useState } from "react";
import { PenLine, Check } from "lucide-react";
import { DevotionalVersion } from "@/types/devotional";
import { getJournalNote, saveJournalNote } from "@/lib/storage";

interface JournalBoxProps {
  version: DevotionalVersion;
  weekId: string;
  dayId: string;
  dayTitle?: string;
}

export function JournalBox({ version, weekId, dayId }: JournalBoxProps) {
  const [note, setNote] = useState(() => getJournalNote(version, weekId, dayId));
  const [savedStatus, setSavedStatus] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setNote(val);
    saveJournalNote(version, weekId, dayId, val);
    setSavedStatus(true);
    const timeout = setTimeout(() => setSavedStatus(false), 1500);
    return () => clearTimeout(timeout);
  };

  const isFamily = version === "family";

  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 border space-y-3 ${
        isFamily
          ? "bg-teal-500/5 dark:bg-teal-950/20 border-teal-300/40 dark:border-teal-900/40"
          : "bg-amber-500/5 dark:bg-stone-900/60 border-amber-300/40 dark:border-stone-800"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PenLine
            className={`w-4 h-4 shrink-0 ${
              isFamily ? "text-teal-600 dark:text-teal-400" : "text-amber-600 dark:text-amber-400"
            }`}
          />
          <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">
            {isFamily ? "家庭隨堂筆記與反思" : "我的靈修筆記本"}
          </h4>
        </div>

        <span className="text-[11px] text-stone-500 dark:text-stone-400 flex items-center gap-1">
          {savedStatus ? (
            <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> 已自動存檔
            </span>
          ) : (
            <span>免登入・自動保存於本機</span>
          )}
        </span>
      </div>

      <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
        {isFamily
          ? "面對家庭餐桌上的對話與代際張力，今天神給了你什麼智慧或同理的眼光？"
          : "這篇信息觸動了你的哪一部分？面對身邊的演算法焦慮或人際壓力，今天你有哪些具體的降服或轉向？"}
      </p>

      <textarea
        value={note}
        onChange={handleChange}
        placeholder={
          isFamily
            ? "在此寫下今晚能與家人分享的心裡話、或在安靜中為兒女/父母獻上的真摯代禱..."
            : "在此寫下今天神對你的說話、安靜中的領受、或是寫給天父的真實禱告..."
        }
        rows={4}
        className={`w-full p-3.5 rounded-xl text-base sm:text-sm bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-2 resize-y leading-relaxed ${
          isFamily ? "focus:ring-teal-600" : "focus:ring-amber-500"
        }`}
      />
    </div>
  );
}

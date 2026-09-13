export type DevotionalVersion = "youth" | "family";

export interface ExtendedStudyItem {
  title: string;
  reference: string;
  question: string;
  text?: string;
  bibliaUrl?: string;
}

export interface DevotionalDay {
  id: string; // e.g. 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'
  dayNumber: number; // 1 - 6
  dayLabel: string; // e.g. '週一', '週二'
  title: string; // Theme title
  subtitle?: string;
  scriptureRef: string; // e.g. '哥林多後書 1:12-14'
  scriptureVersion?: string;
  scriptureText: string;
  goldenVerse: string;
  readTimeMinutes: number;
  message: string;
  suggestedPrayer: string;
  extendedStudy: ExtendedStudyItem[];
  meditationQuestion?: string;
}

export interface DevotionalWeek {
  id: string; // e.g. '2026-09-14'
  version: DevotionalVersion; // 'youth' | 'family'
  startDate?: string;
  title: string; // General theme title
  book: string; // Scripture range e.g. '哥林多後書 1:12-2:13'
  subtitle?: string;
  goldenVerse: {
    text: string;
    reference: string;
  };
  foreword: string;
  days: DevotionalDay[];
  publishedAt: string;
  isCurrentWeek?: boolean;
}

export interface UserQTProgress {
  completedDays: Record<string, boolean>; // key: `${version}-${weekId}-${dayId}`
  notes: Record<string, string>; // key: `${version}-${weekId}-${dayId}`
  streak: number;
  lastCompletedDate?: string;
  lastSelectedVersion?: DevotionalVersion;
}

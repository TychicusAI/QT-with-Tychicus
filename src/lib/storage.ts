"use client";

import { useSyncExternalStore } from "react";
import { DevotionalVersion } from "@/types/devotional";

const COMPLETED_KEY = "qt_completed_days";
const NOTES_KEY = "qt_journal_notes";
const STREAK_KEY = "qt_streak_info";
const VERSION_KEY = "qt_preferred_version";

export interface StreakInfo {
  count: number;
  lastDate: string; // YYYY-MM-DD
}

function getTodayDateString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate()
  ).padStart(2, "0")}`;
}

let cachedCompletedDaysRaw: string | null = null;
let cachedCompletedDays: Record<string, boolean> = {};

export function getCompletedDays(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(COMPLETED_KEY) || localStorage.getItem("qtyouth_completed_days");
    if (raw !== cachedCompletedDaysRaw) {
      cachedCompletedDaysRaw = raw;
      cachedCompletedDays = raw ? JSON.parse(raw) : {};
    }
    return cachedCompletedDays;
  } catch {
    return {};
  }
}

export function isDayCompleted(version: DevotionalVersion, weekId: string, dayId: string): boolean {
  const completed = getCompletedDays();
  return Boolean(completed[`${version}-${weekId}-${dayId}`] || completed[`${weekId}-${dayId}`]);
}

export function toggleDayCompleted(version: DevotionalVersion, weekId: string, dayId: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const key = `${version}-${weekId}-${dayId}`;
    const completed = { ...getCompletedDays() };
    const nextState = !completed[key];
    completed[key] = nextState;
    localStorage.setItem(COMPLETED_KEY, JSON.stringify(completed));

    // Update streak if newly completed today
    if (nextState) {
      updateStreak();
    }

    // Trigger local event
    window.dispatchEvent(new Event("qt_progress_updated"));
    return nextState;
  } catch {
    return false;
  }
}

function updateStreak() {
  try {
    const today = getTodayDateString();
    const raw = localStorage.getItem(STREAK_KEY) || localStorage.getItem("qtyouth_streak_info");
    const streakInfo: StreakInfo = raw ? JSON.parse(raw) : { count: 0, lastDate: "" };

    if (streakInfo.lastDate === today) {
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(yesterday.getDate()).padStart(2, "0")}`;

    if (streakInfo.lastDate === yesterdayStr) {
      streakInfo.count += 1;
    } else {
      streakInfo.count = 1;
    }
    streakInfo.lastDate = today;
    localStorage.setItem(STREAK_KEY, JSON.stringify(streakInfo));
  } catch {
    // ignore
  }
}

let cachedStreakRaw: string | null = null;
let cachedStreakCount = 0;

export function getStreakCount(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(STREAK_KEY) || localStorage.getItem("qtyouth_streak_info");
    if (raw !== cachedStreakRaw) {
      cachedStreakRaw = raw;
      const info: StreakInfo = raw ? JSON.parse(raw) : { count: 0, lastDate: "" };
      cachedStreakCount = info.count || 0;
    }
    return cachedStreakCount;
  } catch {
    return 0;
  }
}

export function getJournalNote(version: DevotionalVersion, weekId: string, dayId: string): string {
  if (typeof window === "undefined") return "";
  try {
    const raw = localStorage.getItem(NOTES_KEY) || localStorage.getItem("qtyouth_journal_notes");
    const notes = raw ? JSON.parse(raw) : {};
    return notes[`${version}-${weekId}-${dayId}`] || notes[`${weekId}-${dayId}`] || "";
  } catch {
    return "";
  }
}

export function saveJournalNote(version: DevotionalVersion, weekId: string, dayId: string, note: string): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(NOTES_KEY) || localStorage.getItem("qtyouth_journal_notes");
    const notes = raw ? JSON.parse(raw) : {};
    notes[`${version}-${weekId}-${dayId}`] = note;
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  } catch {
    // ignore
  }
}

export function getStoredVersion(): DevotionalVersion {
  if (typeof window === "undefined") return "youth";
  try {
    const val = localStorage.getItem(VERSION_KEY);
    if (val === "family" || val === "youth") {
      return val;
    }
  } catch {
    // ignore
  }
  return "youth";
}

export function setStoredVersion(version: DevotionalVersion): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(VERSION_KEY, version);
    window.dispatchEvent(new Event("qt_version_updated"));
  } catch {
    // ignore
  }
}

function subscribeToStorage(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("qt_progress_updated", callback);
  window.addEventListener("qt_version_updated", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("qt_progress_updated", callback);
    window.removeEventListener("qt_version_updated", callback);
    window.removeEventListener("storage", callback);
  };
}

export function useCompletedDays(): Record<string, boolean> {
  return useSyncExternalStore(
    subscribeToStorage,
    getCompletedDays,
    () => ({})
  );
}

export function useStreak(): number {
  return useSyncExternalStore(
    subscribeToStorage,
    getStreakCount,
    () => 0
  );
}

export function useIsDayCompleted(version: DevotionalVersion, weekId: string, dayId: string): boolean {
  const completedMap = useCompletedDays();
  return Boolean(completedMap[`${version}-${weekId}-${dayId}`] || completedMap[`${weekId}-${dayId}`]);
}

export function usePreferredVersion(): [DevotionalVersion, (v: DevotionalVersion) => void] {
  const version = useSyncExternalStore(
    subscribeToStorage,
    getStoredVersion,
    () => "youth" as DevotionalVersion
  );
  return [version, setStoredVersion];
}

import { DevotionalDay, DevotionalWeek, DevotionalVersion } from "@/types/devotional";

import { youth_2026_09_14 } from "@/data/weeks/youth/2026-09-14";
import { youth_2026_09_21 } from "@/data/weeks/youth/2026-09-21";

import { family_2026_09_14 } from "@/data/weeks/family/2026-09-14";
import { family_2026_09_21 } from "@/data/weeks/family/2026-09-21";

export const allYouthWeeks: DevotionalWeek[] = [youth_2026_09_14, youth_2026_09_21];
export const allFamilyWeeks: DevotionalWeek[] = [family_2026_09_14, family_2026_09_21];

export function getWeeksByVersion(version: DevotionalVersion): DevotionalWeek[] {
  return version === "family" ? allFamilyWeeks : allYouthWeeks;
}

export function getAllWeeksSorted(version: DevotionalVersion): DevotionalWeek[] {
  const weeks = getWeeksByVersion(version);
  return [...weeks].sort((a, b) => b.id.localeCompare(a.id));
}

export function getCurrentWeek(version: DevotionalVersion = "youth"): DevotionalWeek {
  const weeks = getWeeksByVersion(version);
  const current = weeks.find((w) => w.isCurrentWeek);
  return current || weeks[0];
}

export function getWeekById(version: DevotionalVersion, weekId: string): DevotionalWeek | undefined {
  const weeks = getWeeksByVersion(version);
  return weeks.find((w) => w.id === weekId);
}

export function getDayById(
  version: DevotionalVersion,
  weekId: string,
  dayId: string
): { week: DevotionalWeek; day: DevotionalDay } | null {
  const week = getWeekById(version, weekId);
  if (!week) return null;
  const day = week.days.find((d) => d.id === dayId);
  if (!day) return null;
  return { week, day };
}

export interface AdjacentDayInfo {
  version: DevotionalVersion;
  weekId: string;
  dayId: string;
  dayLabel: string;
  title: string;
  isCrossWeek?: boolean;
}

export function getAdjacentDay(
  version: DevotionalVersion,
  weekId: string,
  dayId: string
): { prev: AdjacentDayInfo | null; next: AdjacentDayInfo | null } {
  const weeksAsc = [...getWeeksByVersion(version)].sort((a, b) => a.id.localeCompare(b.id));
  const weekIndex = weeksAsc.findIndex((w) => w.id === weekId);
  if (weekIndex === -1) return { prev: null, next: null };

  const currentWeek = weeksAsc[weekIndex];
  const dayIndex = currentWeek.days.findIndex((d) => d.id === dayId);
  if (dayIndex === -1) return { prev: null, next: null };

  let prev: AdjacentDayInfo | null = null;
  let next: AdjacentDayInfo | null = null;

  // Previous Day
  if (dayIndex > 0) {
    const prevDay = currentWeek.days[dayIndex - 1];
    prev = {
      version,
      weekId: currentWeek.id,
      dayId: prevDay.id,
      dayLabel: prevDay.dayLabel,
      title: prevDay.title,
      isCrossWeek: false,
    };
  } else if (weekIndex > 0) {
    const prevWeek = weeksAsc[weekIndex - 1];
    if (prevWeek.days.length > 0) {
      const prevDay = prevWeek.days[prevWeek.days.length - 1];
      prev = {
        version,
        weekId: prevWeek.id,
        dayId: prevDay.id,
        dayLabel: `${prevDay.dayLabel}（上週）`,
        title: prevDay.title,
        isCrossWeek: true,
      };
    }
  }

  // Next Day
  if (dayIndex < currentWeek.days.length - 1) {
    const nextDay = currentWeek.days[dayIndex + 1];
    next = {
      version,
      weekId: currentWeek.id,
      dayId: nextDay.id,
      dayLabel: nextDay.dayLabel,
      title: nextDay.title,
      isCrossWeek: false,
    };
  } else if (weekIndex < weeksAsc.length - 1) {
    const nextWeek = weeksAsc[weekIndex + 1];
    if (nextWeek.days.length > 0) {
      const nextDay = nextWeek.days[0];
      next = {
        version,
        weekId: nextWeek.id,
        dayId: nextDay.id,
        dayLabel: `${nextDay.dayLabel}（下週）`,
        title: nextDay.title,
        isCrossWeek: true,
      };
    }
  }

  return { prev, next };
}

export function getAllParams(): { version: DevotionalVersion; weekId: string; dayId: string }[] {
  const params: { version: DevotionalVersion; weekId: string; dayId: string }[] = [];
  for (const week of allYouthWeeks) {
    for (const day of week.days) {
      params.push({ version: "youth", weekId: week.id, dayId: day.id });
    }
  }
  for (const week of allFamilyWeeks) {
    for (const day of week.days) {
      params.push({ version: "family", weekId: week.id, dayId: day.id });
    }
  }
  return params;
}

export function formatWeekDateRange(week: DevotionalWeek): string {
  try {
    const monday = new Date(week.id);
    if (isNaN(monday.getTime())) {
      return week.id;
    }
    const saturday = new Date(monday);
    saturday.setDate(monday.getDate() + 5);

    const pad = (n: number) => String(n).padStart(2, "0");
    const mYear = monday.getFullYear();
    const mMonth = pad(monday.getMonth() + 1);
    const mDate = pad(monday.getDate());

    const sMonth = pad(saturday.getMonth() + 1);
    const sDate = pad(saturday.getDate());

    if (monday.getMonth() === saturday.getMonth()) {
      return `${mYear}.${mMonth}.${mDate} - ${sDate}`;
    }
    return `${mYear}.${mMonth}.${mDate} - ${sMonth}.${sDate}`;
  } catch {
    return week.id;
  }
}

export function getRecommendedDayIdForToday(): string {
  if (typeof window === "undefined") {
    return "mon";
  }
  const dayOfWeek = new Date().getDay();
  switch (dayOfWeek) {
    case 1:
      return "mon";
    case 2:
      return "tue";
    case 3:
      return "wed";
    case 4:
      return "thu";
    case 5:
      return "fri";
    case 6:
      return "sat";
    case 0:
    default:
      return "mon";
  }
}

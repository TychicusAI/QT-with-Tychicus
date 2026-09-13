import { DevotionalDay, DevotionalWeek, DevotionalVersion } from "@/types/devotional";

import { youth_2026_09_14 } from "@/data/weeks/youth/2026-09-14";

import { family_2026_09_14 } from "@/data/weeks/family/2026-09-14";

export const allYouthWeeks: DevotionalWeek[] = [youth_2026_09_14];
export const allFamilyWeeks: DevotionalWeek[] = [family_2026_09_14];

export function getWeeksByVersion(version: DevotionalVersion): DevotionalWeek[] {
  return version === "family" ? allFamilyWeeks : allYouthWeeks;
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

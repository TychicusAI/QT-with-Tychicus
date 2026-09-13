import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DevotionalVersion } from "@/types/devotional";
import { getDayById, getAllParams } from "@/lib/devotional-service";
import { DevotionalReader } from "@/components/DevotionalReader";

export function generateStaticParams() {
  return getAllParams();
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ version: string; weekId: string; dayId: string }>;
}): Promise<Metadata> {
  const { version: rawVersion, weekId, dayId } = await params;
  const version = (rawVersion === "family" ? "family" : "youth") as DevotionalVersion;
  const data = getDayById(version, weekId, dayId);
  if (!data) {
    return {
      title: "找不到靈修內容 | 靈修推基古"
    };
  }

  const vLabel = version === "family" ? "家庭版" : "青年版";
  return {
    title: `${data.day.dayLabel} ${data.day.title} | ${vLabel}・靈修推基古`,
    description: data.day.goldenVerse
  };
}

export default async function DevotionalDayRoute({
  params
}: {
  params: Promise<{ version: string; weekId: string; dayId: string }>;
}) {
  const { version: rawVersion, weekId, dayId } = await params;
  const version = (rawVersion === "family" ? "family" : "youth") as DevotionalVersion;
  const data = getDayById(version, weekId, dayId);

  if (!data) {
    notFound();
  }

  return <DevotionalReader week={data.week} day={data.day} />;
}

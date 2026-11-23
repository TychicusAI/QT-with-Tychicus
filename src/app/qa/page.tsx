import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { QAListViewer } from "@/components/QAListViewer";
import { getQACategories, getAllQAArticles } from "@/lib/qa-service";

export const metadata: Metadata = {
  title: "阿咕信箱｜推基咕信仰問答",
  description:
    "跨時空信鴿特使「推基咕 (Tychi-Coo)」的信仰與聖經問答專欄，以救贖五幕劇視野與牧者雙重聆聽，陪伴基督徒解開教義迷思、讀經困惑與生命低谷。",
};

export default function QAListPage() {
  const categories = getQACategories();
  const articles = getAllQAArticles();

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-950 text-stone-900 dark:text-stone-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <QAListViewer categories={categories} articles={articles} />
      </main>
    </div>
  );
}

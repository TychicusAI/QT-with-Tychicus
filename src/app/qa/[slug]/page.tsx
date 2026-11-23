import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { QADetailReader } from "@/components/QADetailReader";
import {
  getPublishedQAArticles,
  getQAArticleBySlug,
  getAdjacentQAArticles,
} from "@/lib/qa-service";

export function generateStaticParams() {
  return getPublishedQAArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getQAArticleBySlug(slug);
  if (!article || article.status !== "published") {
    return {
      title: "找不到此封回信 | 阿咕信箱",
    };
  }

  return {
    title: `${article.title}｜阿咕信箱`,
    description: article.summary,
    openGraph: {
      title: `${article.title}｜阿咕信箱`,
      description: article.summary,
      siteName: "靈修推基古 (QT with Tychicus)",
    },
  };
}

export default async function QADetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getQAArticleBySlug(slug);

  if (!article || article.status !== "published") {
    notFound();
  }

  const { prev, next } = getAdjacentQAArticles(slug);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-950 text-stone-900 dark:text-stone-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <QADetailReader article={article} prevArticle={prev} nextArticle={next} />
      </main>
    </div>
  );
}

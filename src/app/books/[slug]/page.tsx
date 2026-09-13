import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBookBibliography, getAllBookBibliographies } from "@/lib/books-service";
import { BibliographyViewer } from "@/components/BibliographyViewer";
import { Navbar } from "@/components/Navbar";

export function generateStaticParams() {
  return getAllBookBibliographies().map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const biblio = getBookBibliography(slug);
  if (!biblio) {
    return {
      title: "找不到參考書目 | 靈修推基古",
    };
  }

  return {
    title: `${biblio.title}（收錄 ${biblio.totalBooks} 部權威評介）| 靈修推基古`,
    description: biblio.description,
  };
}

export default async function BookBibliographyRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const biblio = getBookBibliography(slug);

  if (!biblio) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-950 text-stone-900 dark:text-stone-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <BibliographyViewer bibliography={biblio} />
      </main>
    </div>
  );
}

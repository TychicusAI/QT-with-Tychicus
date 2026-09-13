export type BookCategory = "accessible" | "pastoral" | "academic";

export interface BookItem {
  id: number;
  author: string;
  bookTitle: string;
  series: string;
  authorBackground: string;
  category: BookCategory;
  categoryLabel: string;
  features: string[];
}

export interface BookBibliography {
  slug: string;
  title: string;
  bookName: string;
  description: string;
  totalBooks: number;
  items: BookItem[];
}

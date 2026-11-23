export interface QACategoryConfig {
  id: string;
  name: string;
  description: string;
  accent: "navy" | "amber" | "teal" | "slate" | "indigo";
  pastoralNotice?: boolean;
}

export interface QARelatedLink {
  label: string;
  href: string;
  type?: "devotional" | "book" | "qa";
}

export interface QAArticle {
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  question: string;
  summary: string;
  status: "published" | "upcoming";
  publishedAt?: string;
  order?: number;
  tags: string[];
  scriptures: string[];
  readTimeMinutes: number;
  pastoralNotice?: boolean;
  relatedLinks: QARelatedLink[];
  body: string;
}

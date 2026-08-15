import type { TypedObject } from "@portabletext/types";

export type Post = {
  _id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  slug: { current: string };
  publishedAt: string;
  body: TypedObject[];
  genre: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  remote: boolean;
  /** ISO year-month, e.g. `"2024-10"`. */
  start: string;
  /** ISO year-month, or `null` while the role is ongoing. */
  end: string | null;
  /** One paragraph: the problem the company hired me to solve. */
  summary: string;
  /** Outcomes, ideally quantified. Rendered first — these are what people read. */
  highlights: string[];
  responsibilities: string[];
  stack: string[];
};

export type StackItem = {
  name: string;
  logo: string;
  /** Brand colour, used for the hover accent only. */
  color: string;
  url: string;
};

export type StackGroup = {
  label: string;
  items: StackItem[];
};

export type RepoStats = {
  stars: number;
  forks: number;
};

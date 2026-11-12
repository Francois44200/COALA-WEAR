import { collect } from "../collect";
import type { ReactNode } from "react";

export type FaqPageCopy = {
  hero: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    cta: string;
    meta: string[];
  };
  search: {
    placeholder: (total: number) => string;
    ariaLabel: string;
    clear: string;
    results: (count: number) => string;
    showAll: string;
    summary: (categories: number, total: number) => string;
  };
  toc: {
    ariaLabel: string;
    label: string;
    helpTag: string;
    helpLink: string;
  };
  questionCount: (count: number) => string;
  empty: {
    title: (query: string) => ReactNode;
    body: string;
    cta: string;
  };
  crossLinks: { eyebrow: string; title: string }[];
};

const en: FaqPageCopy = {
  hero: {
    eyebrow: "Help centre",
    title: (
      <>
        Every question,<br />a clear <em>answer</em>.
      </>
    ),
    // TODO-EN: FR said "Six catégories, quelque trente réponses"; the FAQ now has 5 categories and fewer questions (France-specific ones removed), so the count was dropped from the lede.
    lede: "Search with a keyword, browse by topic, or write to us directly if you cannot find what you are looking for.",
    cta: "Browse the categories",
    meta: ["Family caregivers", "Professionals & organisations", "Updated monthly"],
  },
  search: {
    placeholder: (total) => `Search ${total} questions…`,
    ariaLabel: "Search the FAQ",
    clear: "Clear search",
    results: (count) => `${count} result${count !== 1 ? "s" : ""}`,
    showAll: "show all",
    summary: (categories, total) => `${categories} categories · ${total} questions in total`,
  },
  toc: {
    ariaLabel: "Categories",
    label: "Categories",
    helpTag: "No answer?",
    helpLink: "Write to our team",
  },
  questionCount: (count) => `${count} question${count !== 1 ? "s" : ""}`,
  empty: {
    title: (query) => <>No answers for “{query}”.</>,
    body: "Try rephrasing your search, or write to us directly.",
    cta: "Write to us",
  },
  // Order matches the pages in Faq.tsx CrossLink: contact, quote, product.
  crossLinks: [
    { eyebrow: "Still not found it?", title: "Write to the COALA team" },
    { eyebrow: "Equipping a care team?", title: "Professional quotes within 48 hours" },
    { eyebrow: "The product in detail", title: "View full product details" },
  ],
};

export const FAQ_PAGE = {
  ...collect<FaqPageCopy>(import.meta.glob("./*/faq.tsx", { eager: true, import: "default" })),
  en,
};

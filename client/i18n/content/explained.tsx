import { collect } from "../collect";
import type { ReactNode } from "react";

export type ExplainedCopy = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  ctaFaq: string;
  ctaHome: string;
};

const en: ExplainedCopy = {
  eyebrow: "Questions & objections",
  title: (
    <>
      Questions about<br />
      <em>COALA</em>.
    </>
  ),
  // TODO-EN: the FR page is still a placeholder ("en cours de préparation"); translated as is. Real content (what COALA does and does not do, limits, comparisons) to be translated once written.
  lede: "What the garment does, what it doesn't do, and the most common objections. This page is being prepared.",
  ctaFaq: "See the full FAQ",
  ctaHome: "Back to home →",
};

export const EXPLAINED = {
  ...collect<ExplainedCopy>(import.meta.glob("./*/explained.tsx", { eager: true, import: "default" })),
  en,
};

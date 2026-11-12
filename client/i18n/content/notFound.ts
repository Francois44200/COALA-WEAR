import { collect } from "../collect";
export type NotFoundCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  ledeBefore: string;
  ledeAfter: string;
  home: string;
  faq: string;
  contact: string;
};

const en: NotFoundCopy = {
  metaTitle: "Page not found | COALA",
  metaDescription: "This page does not exist or has been moved. Return to the COALA home page.",
  eyebrow: "Error 404",
  title: "Page not found.",
  ledeBefore: "The page",
  ledeAfter: "does not exist or has been moved.",
  home: "Back to home",
  faq: "See the FAQ",
  contact: "Contact us →",
};

export const NOT_FOUND = {
  ...collect<NotFoundCopy>(import.meta.glob("./*/notFound.ts", { eager: true, import: "default" })),
  en,
};

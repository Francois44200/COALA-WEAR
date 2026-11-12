import { collect } from "../collect";
import type { ReactNode } from "react";

export type FooterCopy = {
  homeAria: string;
  logoAlt: string;
  tagline: ReactNode;
  byPrefix: string;
  productHeading: string;
  product: string;
  howItWorks: string;
  results: string;
  faq: string;
  journeysHeading: string;
  family: string;
  teams: string;
  quote: string;
  companyHeading: string;
  about: string;
  contact: string;
  followHeading: string;
  legal: string;
  privacy: string;
  terms: string;
  patented: string;
};

const en: FooterCopy = {
  homeAria: "COALA – Home",
  logoAlt: "COALA",
  tagline: (
    <>
      Technical garments that protect<br />those who give so much care.
    </>
  ),
  byPrefix: "Patented French innovation, by",
  productHeading: "The product",
  product: "The COALA garment",
  howItWorks: "How it works",
  results: "Evidence & testimonials",
  faq: "FAQ",
  // TODO-EN: "Parcours" (user journeys) rendered as "Your situation".
  journeysHeading: "Your situation",
  family: "I care for a loved one",
  teams: "I equip a care team",
  quote: "Request a quote",
  companyHeading: "Company",
  about: "About Connect Link",
  contact: "Contact",
  followHeading: "Follow us",
  legal: "Legal notice",
  // TODO-EN: privacy policy and terms of sale link to the Shopify store (shop.connectlink.fr), likely in French.
  privacy: "Privacy policy",
  terms: "Terms of sale",
  patented: "Patented French innovation",
};

export const FOOTER = {
  ...collect<FooterCopy>(import.meta.glob("./*/footer.tsx", { eager: true, import: "default" })),
  en,
};

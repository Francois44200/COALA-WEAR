import { collect } from "../collect";
import type { ReactNode } from "react";

export type AboutCopy = {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  commitmentTitle: string;
  commitments: { title: string; body: string }[];
  ctaContact: string;
  ctaHome: string;
};

const en: AboutCopy = {
  eyebrow: "The company",
  title: (
    <>
      About<br />
      <em>Connect Link</em>.
    </>
  ),
  lede: (
    <>
      Connect Link designs <strong>COALA</strong>, a patented French innovation: a transfer garment worn by family
      caregivers and care professionals. Our mission is to reduce the risk of falls and musculoskeletal disorders
      (MSDs) during everyday transfers.
    </>
  ),
  commitmentTitle: "Our commitment",
  commitments: [
    { title: "Patented French innovation", body: "Designed and patented by Connect Link" },
    { title: "Quality checked", body: "Strict quality control on every batch" },
    { title: "For everyone", body: "Suitable for family caregivers and professional care organisations alike" },
    { title: "Effective", body: "Tested and approved by caregivers and care professionals" },
  ],
  ctaContact: "Contact us",
  ctaHome: "Back to home →",
};

export const ABOUT = {
  ...collect<AboutCopy>(import.meta.glob("./*/about.tsx", { eager: true, import: "default" })),
  en,
};

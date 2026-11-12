import { collect } from "../collect";
import type { ReactNode } from "react";

export type FamilyCopy = {
  hero: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    ctaOrder: string;
    ctaAdvice: string;
    ctaHow: string;
    trust: string[];
    imageAlt: string;
    cardTop: { eyebrow: string; claim: string; desc: string };
    cardBottom: { eyebrow: string; pills: string[] };
  };
  benefits: {
    eyebrow: string;
    title: ReactNode;
    /** Same order as the icons in the page: shield, leaf, heart, users. */
    items: { title: string; desc: string }[];
  };
  steps: {
    eyebrow: string;
    title: ReactNode;
    items: { title: string; desc: string }[];
    noteEyebrow: string;
    changes: [string, string][];
    guideLink: string;
  };
  product: {
    eyebrow: string;
    title: ReactNode;
    specsTitle: string;
    specs: string[];
    commitmentsTitle: string;
    commitments: string[];
  };
  faq: {
    eyebrow: string;
    title: ReactNode;
    cta: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    eyebrow: string;
    title: ReactNode;
    sub: string;
    ctaOrder: string;
    ctaWrite: string;
  };
  /** Same order as the pages in the page: product, howItWorks, faq. */
  crossLinks: { eyebrow: string; title: string }[];
};

const en: FamilyCopy = {
  hero: {
    eyebrow: "Caregiver journey · Designed for family caregivers",
    title: (
      <>
        I care for a loved one.<br /><em>COALA helps me.</em>
      </>
    ),
    lede: "Every day, you help your loved one move from one place to another. COALA supports every transfer to ease the strain on your back, make the movement safer and preserve their dignity.",
    ctaOrder: "Order COALA",
    ctaAdvice: "Talk to us before buying",
    ctaHow: "See how it works",
    trust: ["14-day returns", "Real people in customer support", "Video tutorials included"],
    imageAlt: "Family caregiver wearing the COALA transfer garment during a transfer",
    cardTop: {
      eyebrow: "Protects your back",
      claim: "No more bending your back to lift",
      desc: "you no longer carry them, you support them",
    },
    cardBottom: { eyebrow: "Every day", pills: ["Bed", "Chair", "Bathroom"] },
  },
  benefits: {
    eyebrow: "Why COALA?",
    title: (
      <>
        A solution designed<br />for <em>family caregivers</em>.
      </>
    ),
    items: [
      { title: "Makes the movement safer", desc: "Reinforced grips, evenly spread support points, non-slip." },
      // TODO-EN: FR "port digne, vêtements gardés pendant le transfert" adapted as "dignified to use" and "your loved one stays dressed". Please confirm.
      { title: "Respects the person", desc: "Soft fabric, dignified to use, and your loved one stays dressed throughout the transfer." },
      { title: "Protects your back", desc: "No more bending your back to lift, no more strain on your shoulders and arms." },
      { title: "Supports independence", desc: "Your loved one can take an active part in the movement." },
    ],
  },
  steps: {
    eyebrow: "How does it work?",
    title: (
      <>
        Three simple steps<br />for a <em>safe</em> transfer.
      </>
    ),
    items: [
      { title: "Put on", desc: "You wear COALA like an ordinary work garment. It goes on in a matter of seconds." },
      // TODO-EN: confirm grip zones (shoulders, waist, hips) and posture wording with Connect Link.
      { title: "Hold the grip zones", desc: "Your loved one holds the reinforced handles (shoulders, waist, hips). You stay low, with your back straight." },
      { title: "Transfer", desc: "Guide the movement without forcing. Bed, chair, getting out of the bathroom: the movement is smooth." },
    ],
    noteEyebrow: "What COALA changes",
    changes: [
      ["Back", "No more bending your back to lift."],
      ["Arms", "No more strain on your shoulders and arms."],
      ["Together", "Your loved one takes part: you no longer carry them, you support them."],
    ],
    guideLink: "See the 7-step user guide",
  },
  product: {
    eyebrow: "The product",
    title: (
      <>
        A simple garment,<br /><em>strong</em> and washable.
      </>
    ),
    specsTitle: "Specifications",
    specs: [
      "Technical polyester, 215 g/m²",
      "4 reinforced grip zones",
      "Sizes XS to 4XL",
      "Washable at 40°C · gentle drying",
      "Patented French innovation",
    ],
    commitmentsTitle: "Our commitments",
    // TODO-EN: "Livraison France offerte" removed; restore once international shipping terms are set on Shopify.
    commitments: [
      "14-day returns on unworn products",
      "Real people in customer support",
      "Video tutorials included",
    ],
  },
  faq: {
    eyebrow: "Caregivers' questions",
    title: (
      <>
        What <em>families</em><br />ask us.
      </>
    ),
    cta: "See all questions",
    items: [
      {
        q: "Is COALA right for my loved one?",
        // TODO-EN: FR ties sizes XS to 4XL to the person being helped ("valide ou semi-valide"). Since the caregiver wears COALA, sizes now refer to the wearer. Please confirm.
        a: "COALA is suitable for most people who need help with transfers and can take at least a partial part in the movement, holding the grips with both hands. The garment is worn by you, the caregiver, and comes in sizes XS to 4XL. For specific conditions (advanced pressure sores, recent surgery), ask the care team for advice.",
      },
      {
        q: "How long does the garment last?",
        a: "With home use (1 to 2 transfers a day): 4 to 6 years. With professional use (10 to 15 transfers a day): 18 to 24 months. The fabric can be machine washed at 40°C and tumble dried on a gentle cycle.",
      },
      {
        q: "Can I try it before buying?",
        a: "We do not offer free loans. The product can be returned within 14 days if it has not been worn and is still as new, subject to a check on receipt.",
      },
    ],
  },
  finalCta: {
    // TODO-EN: FR "Prêt à essayer COALA ?" rephrased to avoid implying a free trial.
    eyebrow: "Ready to get started with COALA?",
    title: (
      <>
        Support your loved one,<br /><em>protect your back</em>.
      </>
    ),
    sub: "Returns accepted within 14 days if the product has not been worn · Need advice? contact@connectlink.fr",
    ctaOrder: "Order COALA",
    ctaWrite: "Write to us",
  },
  crossLinks: [
    { eyebrow: "The product", title: "COALA technical specifications" },
    { eyebrow: "Guide", title: "7-step user guide" },
    { eyebrow: "Questions", title: "Full FAQ" },
  ],
};

export const FAMILY = {
  ...collect<FamilyCopy>(import.meta.glob("./*/family.tsx", { eager: true, import: "default" })),
  en,
};

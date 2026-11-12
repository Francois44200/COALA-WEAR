import { collect } from "../collect";
import type { ReactNode } from "react";

export type HomeCopy = {
  hero: {
    tag: string;
    title: ReactNode;
    lede: string;
    ctaFamily: string;
    ctaTeams: string;
    ctaHow: string;
    trust: string[];
    statLabel: string;
    statSource: string;
  };
  logos: { ariaLabel: string; partnersTitle: string; awardsTitle: string; awards: string[] };
  bannerAlt: string;
  problem: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    cards: { stat: string; label: string; source: string }[];
  };
  solution: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    benefits: { title: string; body: string }[];
    ctaOrder: string;
    ctaDetails: string;
  };
  how: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    steps: { title: string; body: string; meta: string; imageLabel: string }[];
    video: string;
  };
  journeys: {
    eyebrow: string;
    title: ReactNode;
    family: { kicker: string; title: string; body: string; bullets: string[]; statLabel: string; ctaPrimary: string; ctaOrder: string };
    teams: { kicker: string; title: string; body: string; bullets: string[]; statLabel: string; ctaPrimary: string; ctaDemo: string };
  };
  proof: {
    eyebrow: string;
    title: ReactNode;
    quote: string;
    quoteAuthor: string;
    quoteRole: string;
    stats: { val: string; unit: string; label: string; src: string }[];
    pressTitle: string;
  };
  faq: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    cta: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    ctaOrder: string;
    ctaQuote: string;
    ctaAdvice: string;
    trust: { strong: string; sub: string; wide?: boolean }[];
  };
};

const en: HomeCopy = {
  hero: {
    tag: "Textile transfer aid · COALA by Connect Link",
    title: (
      <>
        The transfer garment<br />
        that <em>protects</em><br />
        those who care.
      </>
    ),
    lede: "COALA supports everyday transfers: it eases the strain on caregivers, keeps the people they support safe and brings fluidity back to care.",
    ctaFamily: "I care for a loved one",
    ctaTeams: "I equip a care team",
    ctaHow: "See how it works",
    trust: ["Patented French innovation", "Washable & reusable", "Used in care homes & at home"],
    // TODO-EN: FR says "d'impact sur la Santé et les Conditions de Travail" without saying what the 95% measures; aligned with the proof section (users reporting an improvement).
    statLabel: "of home caregivers report better health and working conditions",
    statSource: "ARACT study 2026 · n=48 care professionals / n=665 patients / daily use over 12 months",
  },
  logos: {
    ariaLabel: "Partners and awards",
    partnersTitle: "Deployed with & supported by",
    awardsTitle: "Awards & recognition",
    awards: [
      "French Tech 2023",
      "Santexpo FHF Award 2026",
      "Silver Eco Festival 2024 winner",
      "Janus Award, Institut Français du Design 2026",
      "Salon SAP Award 2024",
    ],
  },
  bannerAlt: "COALA transfer garment in use",
  problem: {
    eyebrow: "The reality",
    title: (
      <>
        Everyday transfers <em>weigh</em><br />
        on those who care.
      </>
    ),
    lede: "Lifting, moving, sitting up, supporting. Every day, millions of repeated movements, sometimes painful and always under strain. COALA was designed from this reality.",
    cards: [
      { stat: "94%", label: "of occupational illnesses among care professionals and caregivers are musculoskeletal disorders (MSDs)", source: "Assurance Maladie (France) 2025" },
      { stat: "4 min", label: "average time for a bed-to-chair transfer with a mechanical lifting aid", source: "BRCS study 2021" },
      { stat: "×3", label: "projected increase in dependent older people living at home in France by 2030", source: "IGAS report (France) 2025" },
    ],
  },
  solution: {
    eyebrow: "The solution",
    title: (
      <>
        A garment designed<br />to <em>support</em><br />every move.
      </>
    ),
    lede: "COALA is worn by the caregiver. Its reinforced grip zones let the person being helped take a firm, two-handed hold and play an active, safe part in the movement: no forcing, no heavy equipment, no set-up.",
    benefits: [
      { title: "Makes every transfer safer", body: "Four reinforced grip zones, evenly spread support points, handles that can be cleaned with a disinfectant wipe." },
      { title: "Eases the caregiver's load", body: "An unrestrictive posture and effort spread across the body: less strain, less risk, more participation." },
      { title: "Respects the person", body: "Invisible from the outside, unnoticeable for the wearer, and it encourages the person being helped to take an active part." },
      { title: "Complements existing equipment", body: "It does not replace a patient hoist. Use it alongside one for transfers where the person can partly participate." },
      { title: "Effective from the first use", body: "On in seconds. No set-up time, no lever arm, no accessories." },
      { title: "Suits every setting", body: "Home, care home, hospital, home care services. Bed, chair, standing, bathroom: one single tool." },
    ],
    ctaOrder: "Order COALA",
    ctaDetails: "View full product details",
  },
  how: {
    eyebrow: "How it works",
    title: (
      <>
        <em>Put on.</em> Support. Transfer.
      </>
    ),
    lede: "Three steps, designed to be learned in minutes by any caregiver, family or professional.",
    steps: [
      {
        title: "Put on",
        body: "The caregiver wears COALA like their usual work garment. It goes on quickly and looks just like a standard work garment when the tensioners are released and the handles tucked away.",
        meta: "< 10 seconds",
        imageLabel: "01 / Put on",
      },
      {
        title: "Support",
        body: "The person being helped finds and holds the grip zones at the shoulders and hips. Low position, straight back, stable grip, with no strain on the back or arms.",
        meta: "Unrestrictive posture for arms and back",
        imageLabel: "02 / Support",
      },
      {
        title: "Transfer",
        body: "The movement is guided. The person can take an active part while the caregiver supports without forcing. Bed, chair, standing, getting out of the bathroom.",
        meta: "Smooth, safe movement",
        imageLabel: "03 / Transfer",
      },
    ],
    video: "Watch the video demonstration (2 min, in French)",
  },
  journeys: {
    eyebrow: "Who it's for",
    title: (
      <>
        A solution for family caregivers<br />and <em>professionals</em> alike.
      </>
    ),
    family: {
      kicker: "01 — Family caregivers",
      title: "I care for a loved one",
      body: "For those who provide support every day. Understand, choose and order COALA, and make the most of our best-practice tutorials.",
      bullets: ["Advice before you buy", "Home delivery, returns within 14 days", "Video tutorials & real human customer service"],
      statLabel: "care professionals and caregivers equipped at home",
      ctaPrimary: "Explore the family caregiver page",
      ctaOrder: "Order COALA",
    },
    teams: {
      kicker: "02 — Professionals",
      title: "I equip a care team",
      body: "Home care services, care homes, hospitals, disability services. Quotes, video demonstrations in English and supported roll-out, to reduce physical strain and prevent MSDs.",
      bullets: ["Video demonstration in English once your order is received", "Embroidery and customisation for group orders", "Training support and usage feedback", "Dedicated, durable COALA Pro model"],
      statLabel: "partner organisations equipped",
      ctaPrimary: "Request a quote",
      ctaDemo: "Arrange a demo",
    },
  },
  proof: {
    eyebrow: "Evidence & results",
    title: (
      <>
        Designed with care professionals.<br /><em>Proven</em> by those who use it.
      </>
    ),
    quote:
      "We use it for morning get-ups and bed-to-chair transfers. Within a week, my care assistants didn't want to work without it, and the residents take a more active part in the movement.",
    quoteAuthor: "Emmanuelle D.",
    quoteRole: "Nurse manager, Nancy (France) · translated from French",
    stats: [
      { val: "95", unit: "%", label: "of users saw their health and working conditions improve after one year with COALA", src: "ARACT Hauts-de-France study 2026" },
      { val: "0", unit: "", label: "adverse events reported across the care of 665 patients with COALA", src: "ARACT Hauts-de-France study 2026" },
      { val: "84", unit: "%", label: "of 2025 customers ordered again in 2026", src: "COALA data" },
    ],
    pressTitle: "In the press (France)",
  },
  faq: {
    eyebrow: "FAQ",
    title: (
      <>
        Your questions,<br /><em>our answers</em>.
      </>
    ),
    lede: "Straight answers, no overpromising, including to the questions people ask us after seeing COALA online.",
    cta: "See all questions",
    items: [
      {
        q: "Does COALA replace a patient hoist?",
        a: "No. COALA is a textile aid for assisted manual transfers, where the person can take at least a partial part in the movement. When a mechanical lifting aid is required (a highly dependent person, or a transfer with no possible participation), a patient hoist remains essential. COALA complements your equipment; it does not replace it.",
      },
      {
        q: "How do I choose the right size?",
        // TODO-EN: FR bases sizing on "la personne accompagnée"; since the caregiver wears COALA, this says "the wearer". Please confirm.
        a: "There are eight sizes from XS to 4XL, chosen according to the wearer's chest measurement and height. A detailed size guide is available on the product page. If in doubt, our team will advise you before you buy, by email and with no obligation.",
      },
      {
        q: "Is the garment washable?",
        a: "Yes. COALA is machine washable at 40°C and meets recommendation r.47 of the French National Authority for Health (HAS) on the hygiene of medical textiles. Gentle or low-temperature drying is recommended to keep the garment comfortable and unnoticeable to wear.",
      },
      {
        q: "Can we arrange a demonstration for our organisation?",
        a: "Yes, by video call in English once your order has been received. A COALA representative presents the product, shows your teams how to use it and answers their questions. The demonstration is free.",
      },
      {
        q: "When is COALA not the right solution?",
        a: "COALA relies on the person being helped taking an active part in the transfer, which protects the caregiver's health. The person must therefore be able to bear some weight, have a workable weight ratio with the caregiver and be able to hold the handles with both hands.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready?",
    title: (
      <>
        Why not <em>try</em><br />COALA yourself?
      </>
    ),
    lede: "A loved one to support, a team to equip, or just a question before you decide. We reply within 24 hours.",
    ctaOrder: "Order COALA",
    ctaQuote: "Request a quote",
    ctaAdvice: "Talk to us before buying",
    trust: [
      { strong: "24 h", sub: "average response time" },
      { strong: "14\u00a0days", sub: "to return your order" },
      { strong: "Trusted by 1,500+ caregivers and care professionals in France", sub: "", wide: true },
    ],
  },
};

export const HOME = {
  ...collect<HomeCopy>(import.meta.glob("./*/home.tsx", { eager: true, import: "default" })),
  en,
};

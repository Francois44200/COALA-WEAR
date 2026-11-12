import { collect } from "../collect";
import type { ReactNode } from "react";

export type TeamsCopy = {
  hero: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    ctaQuote: string;
    ctaDemo: string;
    ctaHow: string;
    trust: [string, string, string];
  };
  visual: {
    topEyebrow: string;
    topClaim: string;
    topDesc: string;
    botEyebrow: string;
    pills: string[];
  };
  structures: {
    eyebrow: string;
    title: ReactNode;
    imageAlt: string;
    labels: string[];
  };
  benefits: {
    eyebrow: string;
    title: ReactNode;
    items: { title: string; desc: string }[];
  };
  technique: {
    eyebrow: string;
    title: ReactNode;
    steps: string[];
    noteEyebrow: string;
    noteBody: string;
    noteCta: string;
  };
  deploy: {
    eyebrow: string;
    title: ReactNode;
    steps: { title: string; body: string }[];
  };
  partnerships: {
    eyebrow: string;
    title: ReactNode;
    body: string;
    cta: string;
    imageAlt: string;
    captionSub: string;
  };
  trust: { label: string; ariaLabel: string };
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
    ctaQuote: string;
    ctaDemo: string;
  };
  crossLinks: { eyebrow: string; title: string }[];
};

const en: TeamsCopy = {
  hero: {
    eyebrow: "For professionals · Care organisations",
    title: (
      <>
        Equip your teams<br />with a transfer aid<br /><em>designed for<br />real-world care</em>.
      </>
    ),
    lede: "COALA fits into everyday care practice: preventing musculoskeletal disorders (MSDs), making transfers safer, reducing physical strain and encouraging the active participation of the person being helped.",
    ctaQuote: "Request a quote",
    // TODO-EN: "Organiser une démonstration" adapted. Demos are by video, in English, after the order only, so the pre-sale CTA becomes a contact CTA (still links to contact?type=demo).
    ctaDemo: "Talk to our team",
    ctaHow: "See how it works",
    // TODO-EN: "Devis sous 48h" and "Livraison groupée sur site" were flagged "TODO: validate with Connect Link" in French; still to be validated for international orders.
    trust: ["Quote within 48 hours", "Training available from 5 equipped professionals", "Grouped delivery to your site"],
  },
  visual: {
    topEyebrow: "MSD prevention",
    topClaim: "No more bending your back to lift",
    topDesc: "the patient takes part, you guide the movement",
    botEyebrow: "Organisations equipped",
    // TODO-EN: French pills were "SAD, EHPAD, SSIAD, HAD"; replaced with generic English equivalents.
    pills: ["Home care", "Care homes", "Home nursing", "Hospital at home"],
  },
  structures: {
    eyebrow: "Which organisations is it for?",
    title: (
      <>
        COALA is for teams who support<br />people with reduced mobility <em>every day</em>.
      </>
    ),
    imageAlt: "Team of care professionals wearing the COALA transfer garment",
    // TODO-EN: generalised French organisation types: SAD/associations d'aide à domicile -> home care services and charities; SAAD/SSIAD -> home care and home nursing services; EHPAD/résidences autonomie -> care homes and assisted living; SSR -> rehabilitation centres; FAM/MAS/foyers -> residential disability services; HAD -> hospital at home; professions libérales -> independent practitioners.
    labels: [
      "Home care services and charities",
      "Home care and home nursing services",
      "Care homes and assisted living residences",
      "Hospitals and clinics",
      "Rehabilitation centres",
      "Residential and supported living services for people with disabilities",
      "Hospital at home services",
      "Independent care professionals and practitioners",
    ],
  },
  benefits: {
    eyebrow: "Benefits for professionals",
    title: (
      <>
        Why your teams<br />will <em>adopt it</em>.
      </>
    ),
    items: [
      {
        title: "MSD prevention",
        desc: "Reduces the dynamic effort on the arms and back during assisted transfers, the main source of MSD risk in care work.",
      },
      {
        title: "Safer handling",
        desc: "A more reliable interface between care professional and patient, with reassuring external grips.",
      },
      {
        title: "Patient participation",
        desc: "The person being helped can take a much greater part in their own movement.",
      },
      {
        title: "Easy to integrate",
        desc: "A lightweight work garment (+200g) that can be activated or deactivated in 5 seconds.",
      },
      {
        title: "Useful innovation",
        desc: "A practical, patented solution designed for real-world care, not a gimmick.",
      },
      {
        title: "Complementary",
        desc: "Works alongside existing mechanical lifting aids, without replacing them.",
      },
    ],
  },
  technique: {
    eyebrow: "How to use it",
    title: (
      <>
        A simple technique to build<br />into your <em>practice</em>.
      </>
    ),
    steps: [
      "Keep your back straight while guiding the patient to lean towards you.",
      "Bend your hips and knees slightly.",
      "Place your feet apart for greater stability.",
      "Use forward and backward lunging movements to accompany the transfer.",
    ],
    noteEyebrow: "A collaborative approach",
    noteBody:
      "The COALA transfer garment supports a collaborative approach to transfers: the patient holds the grips and actively takes part in the movement. The effort is shared, dignity is preserved and the relationship between care professional and patient is strengthened.",
    noteCta: "See all use cases",
  },
  deploy: {
    eyebrow: "Roll-out process",
    title: (
      <>
        How we roll out<br />COALA <em>in your organisation</em>.
      </>
    ),
    // TODO-EN: French step 2 was "Démonstration ou essai" (product presentation with on-site trial). Pre-sale demos and trials are not offered internationally, so step 2 became an information step and the video demo moved to step 5 (after the order).
    steps: [
      { title: "Initial conversation", body: "A first discussion to understand your needs and your day-to-day care setting." },
      { title: "Information and questions", body: "We share product details and answer your team's questions before you decide." },
      { title: "Choosing sizes", body: "We work out which sizes you need based on your team." },
      { title: "Quote or group order", body: "A commercial proposal tailored to your volume and timeline." },
      { title: "Support with use", body: "A video demonstration in English once your order is received, plus initial training and user guides for your teams." },
      { title: "Feedback from the field", body: "We follow up on how the garment is used and adapt where needed." },
    ],
  },
  partnerships: {
    eyebrow: "Industrial partnerships & resale",
    title: (
      <>
        We build partnerships<br />with healthcare organisations.
      </>
    ),
    body: "Connect Link develops partnerships with healthcare and textile industry players: resale, joint product development, industrial collaboration and brand licensing.",
    cta: "Discuss a partnership",
    imageAlt: "Care professional wearing the COALA transfer garment",
    captionSub: "Patented French innovation",
  },
  trust: {
    label: "Trusted by care organisations and partners",
    ariaLabel: "Partners and user organisations",
  },
  faq: {
    eyebrow: "Questions from professionals",
    title: (
      <>
        What frontline<br /><em>care teams</em> ask us.
      </>
    ),
    cta: "See all questions",
    items: [
      {
        // TODO-EN: French offered on-site or video demos before purchase; adapted to video demo in English after the order. Original "TODO: validate with Connect Link".
        q: "Can we arrange a demonstration?",
        a: "Yes, by video call in English once your order has been received. We present the product to your team, show them how to use it and answer their questions. Contact us using the form and we will get back to you within 48 working hours to schedule a time.",
      },
      {
        // TODO-EN: original "TODO: validate with Connect Link". "Médecins coordonnateurs" (French care home role) generalised to care home medical teams.
        q: "Is COALA suitable for care homes?",
        a: "Yes. COALA is already used in several care homes. It meets traceability and hygiene requirements (washable at 40°C, gentle drying) and supports the MSD prevention programmes led by care home medical teams.",
      },
      {
        q: "Is COALA suitable for home care services?",
        a: "Absolutely. In fact, it was originally designed for home care. Lightweight (+200g), it fits easily into a home care worker's bag. Training can be delivered by video call or during a team meeting.",
      },
      {
        q: "Can you train a team?",
        a: "Yes. Training becomes worthwhile from 5 equipped professionals. It is delivered by an ergonomist or occupational therapist from the COALA network, and the training materials are shared with the team.",
      },
      {
        // TODO-EN: original "TODO: validate with Connect Link". Confirm group-order terms (site delivery, dedicated contact) apply to international orders.
        q: "Do you offer pricing for group orders?",
        a: "Yes, volume discounts are available from 10 units. Organisations ordering 50 garments or more benefit from grouped delivery to their site, a dedicated contact and long-term support. Request a personalised quote.",
      },
      {
        // TODO-EN: original "TODO: validate with Connect Link".
        q: "Can we become a reseller?",
        a: "Connect Link selects reseller partners in the healthcare, medical equipment and textile industry sectors. Contact us through the partnership form to introduce your organisation and discuss terms.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready to equip your teams?",
    // TODO-EN: French said "démonstration sur site possible"; adapted to video demo after order.
    title: (
      <>
        Quote within 48 hours,<br />video demonstration<br /><em>once you order</em>.
      </>
    ),
    sub: "Tailored support · Training included · Follow-up in the field",
    ctaQuote: "Request a quote",
    ctaDemo: "Talk to our team",
  },
  crossLinks: [
    { eyebrow: "The product in detail", title: "Full product page" },
    { eyebrow: "Any questions?", title: "Full FAQ" },
    { eyebrow: "Feedback from the field", title: "Read the testimonials" },
  ],
};

export const TEAMS = {
  ...collect<TeamsCopy>(import.meta.glob("./*/teams.tsx", { eager: true, import: "default" })),
  en,
};

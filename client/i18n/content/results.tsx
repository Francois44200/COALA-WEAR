import { collect } from "../collect";
import type { ReactNode } from "react";

export type ResultsCopy = {
  hero: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    ctaOrder: string;
    ctaTestimonials: string;
    imageAlt: string;
  };
  stats: { value: string; label: string; source: string }[];
  pullQuote: { text: string; name: string; role: string };
  testimonials: {
    eyebrow: string;
    title: ReactNode;
    badgePro: string;
    badgeFamily: string;
    ratingLabel: (rating: number) => string;
    items: { quote: string; name: string; role: string; location: string; type: "pro" | "aidant"; rating: number }[];
  };
  cases: {
    eyebrow: string;
    title: ReactNode;
    items: { tag: string; title: string; body: string; metrics: { v: string; l: string }[] }[];
  };
  trust: { label: string; ariaLabel: string; awardsLabel: string; awardsAriaLabel: string; awards: string[] };
  finalCta: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    ctaOrder: string;
    ctaQuote: string;
  };
  crossLinks: { eyebrow: string; title: string }[];
};

const TRANSLATED = " (translated from French)";

const en: ResultsCopy = {
  hero: {
    eyebrow: "Evidence & testimonials",
    title: (
      <>
        What the people<br />
        who <em>use it</em><br />
        have to say.
      </>
    ),
    lede: "Family caregivers, care assistants, care home directors. Real testimonials and figures measured in the field.",
    ctaOrder: "Order COALA",
    ctaTestimonials: "Read the testimonials",
    imageAlt: "Caregiver wearing the COALA transfer garment during a transfer",
  },
  stats: [
    {
      value: "95%",
      // TODO-EN: FR "d'impact sur la santé et les conditions de travail" does not say what the 95% measures; kept close to the source. Align with home hero stat once confirmed.
      label: "reported a positive impact on health and working conditions",
      source: "ARACT study 2026, 48 care professionals",
    },
    {
      value: "65%",
      label: "of patients are suitable for COALA for transfers or repositioning in bed",
      source: "Connect Link study 2024, 95 patients",
    },
    {
      value: "0",
      label: "adverse events reported since November 2024",
      source: "Connect Link customer follow-up and ARACT study 2026",
    },
    {
      value: "665",
      label: "patients assisted with COALA during the ARACT 2026 impact study",
      source: "ARACT study 2026",
    },
  ],
  pullQuote: {
    text: "I was told it was a comfort aid. It isn't. It is a safety aid, for both the person being helped and the caregiver. I have measured the difference.",
    name: "Dr Arnaud V.",
    role: "Coordinating doctor · Non-profit care home · Hauts-de-France" + TRANSLATED,
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: (
      <>
        They tried it.<br />
        Here is what they <em>think</em>.
      </>
    ),
    badgePro: "Care professional",
    badgeFamily: "Family caregiver",
    ratingLabel: (rating) => `${rating} out of 5 stars`,
    items: [
      {
        quote: "I have been caring for my husband for four years. The first time I used COALA for a bed-to-chair transfer, I realised I didn't need to become a physiotherapist. I just needed a tool designed for my own body.",
        name: "Hélène M.",
        role: "Family caregiver" + TRANSLATED,
        location: "Nantes",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "We equipped our 12 care assistants with COALA eight months ago. Sick leave has halved. It was the only thing we changed in our practices that year.",
        name: "Isabelle R.",
        role: "Home care service manager (SAAD)" + TRANSLATED,
        location: "Lyon",
        type: "pro",
        rating: 5,
      },
      {
        quote: "My mother is heavy and I was doing the transfers on my own. I didn't want to move her into a care home. COALA gave us two more years at home than we had hoped for.",
        name: "Patrick D.",
        role: "Family caregiver, son" + TRANSLATED,
        location: "Bordeaux",
        type: "aidant",
        rating: 5,
      },
      {
        // TODO-EN: refers to the training included in France. For international orders, demonstrations are by video call, in English, once the order has been received.
        quote: "The included training is what makes the difference. In 60 minutes, my teams understood the technique. We haven't had a single transfer incident since it was rolled out.",
        name: "Dr Arnaud V.",
        role: "Coordinating doctor, care home" + TRANSLATED,
        location: "Hauts-de-France",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Honestly, I was sceptical. A garment for that? But after the first week, I can't imagine working without it. The grip feels really different.",
        name: "Sylvie T.",
        role: "Home care worker, ADMR" + TRANSLATED,
        location: "Brittany",
        type: "pro",
        rating: 5,
      },
      {
        // TODO-EN: FR "un véritable EPI" (personal protective equipment) is the customer's wording, not a certification claim. Check the client is comfortable keeping "PPE".
        quote: "We have built it into our induction process. Every new member of staff receives their garment on day one. For our care workers, it is genuine personal protective equipment.",
        name: "Claire B.",
        role: "Director, home nursing service" + TRANSLATED,
        location: "Strasbourg",
        type: "pro",
        rating: 5,
      },
      {
        quote: "It changed my relationship with my father. Before, transfers made me anxious, and him too. Now we do them more calmly. This small detail has changed a lot of things.",
        name: "Amina K.",
        role: "Family caregiver, daughter" + TRANSLATED,
        location: "Paris",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "We have three sites in Brittany and 60 garments in use. Feedback from the floor is unanimous. The technique is more precise, and workplace accidents linked to manual handling have practically disappeared.",
        name: "François L.",
        role: "Care home director, mutual-sector group" + TRANSLATED,
        location: "Brittany",
        type: "pro",
        rating: 5,
      },
    ],
  },
  cases: {
    eyebrow: "Field case studies",
    title: (
      <>
        Results that are<br />
        <em>measured</em>, not estimated.
      </>
    ),
    items: [
      {
        tag: "Care provider · Home nursing",
        title: "10 healthcare assistants trained, no sick leave in 18 months",
        body: "A hospital group in northern France rolled out COALA across its home nursing service (SSIAD) and hospital-at-home service (HAD) after a six-week field trial with four volunteer care professionals. Result: no lower-back-related sick leave after roll-out, compared with three cases over the same period the previous year.",
        metrics: [
          { v: "0", l: "MSD and lower-back sick leave" },
          { v: "18 months", l: "of follow-up on the group" },
          { v: "10", l: "care professionals equipped and trained" },
        ],
      },
      {
        tag: "Family caregiver · Home",
        title: "Two more years at home for a family near Bordeaux",
        // TODO-EN: "call with the Connect Link occupational therapist" translated faithfully; confirm whether this is offered in English to international customers.
        body: "Patrick D. was caring for his 87 kg mother on his own. Daily bed-to-chair transfers were becoming physically impossible. After introducing COALA and a call with the Connect Link occupational therapist, he was able to continue caring for her at home, without moving her into a care home, for a further 26 months.",
        metrics: [
          { v: "+26", l: "months at home" },
          { v: "1", l: "caregiver on his own" },
          { v: "87 kg", l: "person being helped" },
        ],
      },
    ],
  },
  trust: {
    // TODO-EN: the FR list (ADMR, Adiaph, Croix-Rouge française, Synerpa, Fehap, AD-PA) is marked as a placeholder in the code; verify these organisations before publishing.
    label: "Used by organisations that trust COALA",
    ariaLabel: "Partners and organisations using COALA",
    awardsLabel: "Awards & recognition",
    awardsAriaLabel: "Awards and recognition",
    // TODO-EN: awards block added per brief. Names/years taken only from the existing site (home awards list + "Silver Surfer" and "Innovation & Prévention" from the For Professionals page, no year given there). Confirm years and exact award titles for Silver Surfer and I&P.
    awards: [
      "Silver Eco Festival 2024 winner",
      "Silver Surfer",
      "Innovation & Prévention (I&P)",
      "French Tech 2023",
      "Santexpo FHF Award 2026",
      "Janus Award, Institut Français du Design 2026",
      "Salon SAP Award 2024",
    ],
  },
  finalCta: {
    eyebrow: "Ready to try it?",
    title: (
      <>
        14 days to make up<br />
        your own <em>mind</em>.
      </>
    ),
    // TODO-EN: FR "Livraison 48h, formation au déploiement" is France-only; replaced with the international video-call demonstration.
    lede: "You can return it within 14 days, anywhere in the European Union, if the garment has not been worn. Demonstration by video call, in English, once your order has been received.",
    ctaOrder: "Order COALA · from €129",
    ctaQuote: "Request a quote",
  },
  crossLinks: [
    { eyebrow: "The garment in detail", title: "Full product page" },
    // TODO-EN: "within 48 hours" kept from FR ("Devis pros sous 48h"); confirm this applies to international requests.
    { eyebrow: "Equipping a care team?", title: "Professional quotes within 48 hours" },
    { eyebrow: "Any questions?", title: "Full FAQ" },
  ],
};

export const RESULTS = {
  ...collect<ResultsCopy>(import.meta.glob("./*/results.tsx", { eager: true, import: "default" })),
  en,
};

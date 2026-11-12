import { collect } from "@/i18n/collect";
export type FaqItem = { q: string; a: string };
export type FaqCategory = { id: string; label: string; desc: string; items: FaqItem[] };

/**
 * English FAQ data. Also used by client/seo/pages.ts for the FAQPage JSON-LD.
 * Removed from the French source (France-specific): "La livraison est-elle gratuite ?"
 * (free delivery in mainland France from €200) and "Comment se passe la facturation pros ?"
 * (mandat administratif / Chorus Pro).
 */
export const FAQ_DATA: FaqCategory[] = [
  {
    id: "produit",
    label: "The product",
    desc: "Materials, durability, standards",
    items: [
      {
        q: "What is the COALA garment made of?",
        a: "Technical polyester (215 g/m²) with a reinforced lining at the stress points. Triple stitching on all four grip zones. Adjustment cords made from technical webbing.",
      },
      {
        q: "How long does the garment last?",
        a: "With home use: 4 to 6 years. With intensive professional use: 18 to 24 months. The fabric can be machine washed at 40°C and tumble dried on a gentle cycle.",
      },
      {
        q: "Is COALA a medical device?",
        a: "No. COALA is not a medical device within the meaning of the European Medical Device Regulation (EU) 2017/745. It is a technical workwear garment and a patented French innovation.",
      },
    ],
  },
  {
    id: "usage",
    label: "Use & technique",
    desc: "Who it is for, how and how often",
    items: [
      {
        q: "Is COALA right for my loved one?",
        // TODO-EN: FR says COALA suits any person "du XS au 4XL, valide ou semi-valide", which ties the size to the person being helped. Since the caregiver wears COALA, sizes now refer to the wearer. Please confirm.
        a: "COALA is suitable for most people who need help with transfers and can take at least a partial part in the movement, holding the grips with both hands. The garment itself is worn by the caregiver and comes in sizes XS to 4XL, chosen for the wearer. For specific conditions (advanced pressure sores, recent surgery), ask the care team for advice.",
      },
      {
        q: "Do I need training to use it?",
        // TODO-EN: FR says training is "systématiquement proposée" for group orders without specifying the format; aligned with the rule that sessions are by video call, in English, once the order has been received. Please confirm.
        a: "Instructions for use come with every garment, and online video tutorials show you how to use it properly.\n\nFor team orders, Connect Link also offers a dedicated training session for professionals and their managers, by video call in English once the order has been received.",
      },
      {
        q: "How many transfers can be done per day?",
        // TODO-EN: figures (18 caregivers, 90 days, 8 transfers/day) kept from FR; please confirm the source of this study.
        a: "The garment itself has no limit. On the human side: among 18 caregivers followed for 90 days, the average was 8 transfers a day with COALA, with no lower back pain reported.",
      },
      {
        q: "Can it be used with a wheelchair?",
        a: "Yes. COALA works just as well for bed-to-chair, chair-to-toilet and chair-to-car transfers. See our “How it works” page for the 6 most common situations.",
      },
      {
        q: "Do you need two people to use it?",
        a: "One caregiver is enough for most transfers. For heavier people (over 100 kg) or floor-to-chair transfers, two caregivers are recommended.",
      },
    ],
  },
  {
    id: "achat",
    label: "Ordering & delivery",
    desc: "Orders, delivery times, returns",
    items: [
      {
        q: "How do I order?",
        a: "Through our online shop, shop.connectlink.fr (card, Apple Pay or bank transfer). For professional orders, you can also contact our team directly at contact@connectlink.fr.",
      },
      {
        q: "How long does delivery take?",
        // TODO-EN: FR promised 48-72 working hours in mainland France (Colissimo/Chronopost) and 4-7 days for Belgium, Switzerland and Luxembourg. France-only promise removed; add international delivery times once shipping terms are set on Shopify.
        a: "Delivery times and shipping costs depend on your country and are shown at checkout. You can follow your parcel by email.",
      },
      {
        q: "Can I return my garment?",
        a: "Yes, within 14 days from anywhere in the European Union, provided the product has not been worn and is as new. Every return is checked before an exchange or refund. For hygiene reasons, the garment is delivered to you sealed.",
      },
      {
        q: "Can I try it before buying?",
        a: "We do not offer free loans, including to professionals. However, the product can be returned within 14 days if it has not been worn and is still as new.",
      },
    ],
  },
  {
    id: "pros",
    label: "Professionals & organisations",
    // TODO-EN: FR lists "EHPAD, hôpital, SAAD, ADMR"; adapted to generic care settings for an international audience (ADMR dropped).
    desc: "Care homes, hospitals, home care services",
    items: [
      {
        q: "How quickly will I receive a professional quote?",
        a: "Within 2 working days. A member of our professional team will call you back to understand your setting, then send you a tailored quote.",
      },
      {
        q: "Is training really included?",
        // TODO-EN: FR does not say how training is delivered; aligned with the video call / English / after order rule. Please confirm.
        a: "Training becomes worthwhile from 5 equipped professionals upwards. It is led by an ergonomist or occupational therapist from the COALA network, by video call in English once the order has been received, and the training materials are sent to you.",
      },
      {
        q: "Do you offer terms for multi-site organisations?",
        a: "Yes. Volume pricing, grouped deliveries and a dedicated contact for groups, care organisations and federations ordering 100 garments or more.",
      },
      {
        q: "Can the garment be customised (logo, department name)?",
        a: "Yes, screen printing or embroidery is available from 25 units. Production time: an extra 10 working days.",
      },
    ],
  },
  {
    id: "lavage",
    label: "Washing & care",
    desc: "How to wash, dry and store it",
    items: [
      {
        q: "What temperature should COALA be washed at?",
        a: "Machine wash at 40°C on a normal cycle with standard detergent. No fabric softener (it weakens the seams). No chlorine bleach.",
      },
      {
        q: "Can it go in the tumble dryer?",
        a: "Yes, on a gentle cycle only. Ideally, dry it flat or on a hanger to keep its shape.",
      },
      {
        q: "What about ironing?",
        a: "Not necessary. If you prefer to, use a medium iron and never iron the reinforced grip zones.",
      },
      {
        q: "How should COALA be stored?",
        a: "Folded flat in a dry place. The individual carry case (included with professional orders) keeps the garment in good condition, even in a work bag.",
      },
    ],
  },
];

export const FAQ = {
  ...collect<FaqCategory[]>(import.meta.glob("../i18n/content/*/faqData.ts", { eager: true, import: "default" })),
  en: FAQ_DATA,
};

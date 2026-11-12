import { collect } from "../collect";
import type { ReactNode } from "react";

type Spec = { label: string; value: string };

export type ProductCopy = {
  buy: {
    viewLabels: string[];
    refPrefix: string;
    thumbsAria: string;
    eyebrow: string;
    title: ReactNode;
    lede: string;
    price: string;
    priceMeta: string;
    sizeLabel: string;
    sizeGuide: string;
    sizeAria: string;
    colourLabel: string;
    colourNote: string;
    ctaOrder: string;
    ctaQuote: string;
    reassuranceAria: string;
    reassurance: string[];
  };
  features: {
    eyebrow: string;
    title: ReactNode;
    items: { tag: string; title: string; body: string; label: string }[];
  };
  range: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    badge: string;
    imgAlt: (name: string) => string;
    vat: string;
    harnessLabel: string;
    fabricLabel: string;
    supportLabel: string;
    cta: string;
    /** Indexed like RANGE in the page (Home, Home+, Pro). */
    models: { audience: string; harness: string; fabric: string; support: string }[];
    noteBefore: string;
    noteLink: string;
    noteAfter: string;
  };
  go: {
    badge: string;
    subtitle: ReactNode;
    priceValue: string;
    priceCta: string;
    lede: string;
    photoAlt: string;
    benefits: { title: string; detail: string }[];
    specs: Spec[];
    usagesTitle: string;
    usages: string[];
    note: string;
  };
  compare: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    coalaSub: string;
    machineBrand: string;
    machineSub: string;
    classicBrand: string;
    classicSub: string;
    rows: { label: string; coala: string; machine: string; classic: string }[];
  };
  specs: {
    eyebrow: string;
    title: string;
    items: Spec[];
    download: string;
    guideEyebrow: string;
    guideTitle: string;
    guideIntro: ReactNode;
    toggleAria: string;
    women: string;
    men: string;
    tableAria: (morpho: string) => string;
    colSize: string;
    colConfection: string;
    colChest: string;
    colWaist: string;
    point: string;
    note: string;
  };
  quote: { text: string; name: string; role: string };
  faq: {
    eyebrow: string;
    title: ReactNode;
    cta: string;
    items: { q: string; a: string }[];
  };
  cross: { eyebrow: string; title: string }[];
};

const en: ProductCopy = {
  buy: {
    viewLabels: [
      "COALA transfer garment, front view, four grip areas deployed",
      "COALA transfer garment, three-quarter view, four grip areas deployed",
      "COALA transfer garment with handles tucked away, front view",
      "Internal exoskeleton structure of the COALA transfer garment",
      "COALA transfer garment worn by a care professional, grip areas deployed",
      "COALA worn with handles tucked away, looking like a standard work garment",
      "Close-up of a grip area at the shoulder",
      "Care professional supporting a patient while wearing the COALA transfer garment",
    ],
    // TODO-EN: SKU code "CL-B137-BLANC" kept unchanged (product reference); only "réf." translated.
    refPrefix: "COALA · ref. CL-B137-BLANC-",
    thumbsAria: "Product views",
    eyebrow: "Transfer garment",
    title: (
      <>
        The <em>COALA</em> transfer garment
      </>
    ),
    lede:
      "A textile garment designed for transfers. Four reinforced grip areas and an exoskeleton structure that protects the caregiver. COALA goes unseen and unfelt, yet protects you whenever you need it.",
    price: "from 129 €",
    // TODO-EN: removed "livraison France offerte dès 200€ de commande" (France-only free delivery); kept "incl. VAT" (TTC).
    priceMeta: "incl. VAT",
    sizeLabel: "Size",
    sizeGuide: "Size guide ↗",
    sizeAria: "Choose a size",
    colourLabel: "Colour · White",
    colourNote: "COALA is currently available in white only.",
    ctaOrder: "Order COALA",
    ctaQuote: "Request a quote",
    reassuranceAria: "Our commitments",
    // TODO-EN: removed "Livraison 48-72h · France métropolitaine" (France-only delivery promise).
    reassurance: [
      "Free returns within 14 days across the EU",
      "Patented French innovation",
      "Machine washable at 40°C",
    ],
  },

  features: {
    eyebrow: "Designed by caregivers, for caregivers",
    title: (
      <>
        Four technical choices,
        <br />
        one single <em>purpose</em>.
      </>
    ),
    items: [
      {
        tag: "01 · Four-handed action",
        title: "A shared movement: the person holds on",
        body: "COALA is worn by the caregiver, and the person being helped holds the handles. The caregiver guides the manoeuvre using their body weight rather than lifting, so the movement becomes a shared effort. Four grip areas, with handles positioned at the shoulders, sides and hips.",
        label: "The four reinforced grip areas of the COALA transfer garment",
      },
      {
        tag: "02 · Workwear",
        title: "Only 200 g extra, no set-up time",
        body: "COALA goes on like an ordinary work garment, in a few seconds. During handling, there is no more strain on the shoulders and lower back, no mechanical fastening and no lengthy training. Ready straight away, wherever you are.",
        label: "COALA transfer garment with handles tucked away, looking just like a standard work garment",
      },
      {
        tag: "03 · Support you can switch off",
        title: "Released in 5 seconds",
        body: "Once the transfers are done, the caregiver releases the support areas and tucks the grips away instantly. Once released, there is no compression at all: COALA is imperceptible to the wearer and invisible to others.",
        label: "Internal harness of the COALA transfer garment, released in five seconds",
      },
      {
        tag: "04 · All-round assistance",
        title: "Assists the caregiver without replacing the human touch",
        body: "COALA supports the caregiver's movement without changing the way they deliver care. Technical polyester fabric 215 g/m², washable at 40°C, sizes XS to 4XL.",
        label: "Care professional walking an older person to their walking frame while wearing COALA",
      },
    ],
  },

  range: {
    eyebrow: "The range",
    title: (
      <>
        Three models, one same <em>movement</em>.
      </>
    ),
    // TODO-EN: "compatibilité R.47 HAS" kept as a French reference (HAS = French National Authority for Health); please confirm the exact reference.
    lede:
      "The harness and fabric vary with how intensively the garment is used. All models come in sizes XS to 4XL (French 34 to 64), are machine washable at 40°C and compatible with HAS recommendation R.47.",
    badge: "Most popular",
    imgAlt: (name) => `${name} transfer garment being worn`,
    vat: "incl. VAT",
    harnessLabel: "Harness",
    fabricLabel: "Fabric",
    supportLabel: "Support",
    cta: "Order COALA",
    models: [
      { audience: "Family caregivers", harness: "1 mm", fabric: "50% cotton · 50% polyester", support: "User guide included" },
      { audience: "Care professionals and regular caregivers", harness: "1 mm, cotton-lined", fabric: "50% cotton · 50% polyester", support: "User guide included" },
      // TODO-EN: "Formation et accompagnement" translated as "Training and support"; for international customers this is delivered by video call in English once the order is received. Please confirm.
      { audience: "Care professionals", harness: "2 mm, CoolTex®-lined", fabric: "CoolTex® technical fabric", support: "Training and support" },
    ],
    noteBefore: "The harness weighs about 200 g and can be deployed in around ten seconds. If you are equipping an organisation, ",
    noteLink: "request a quote",
    noteAfter: " rather than placing an individual order.",
  },

  go: {
    badge: "Coming soon",
    subtitle: (
      <>
        The vest that protects your health so you can better protect <em>others</em>.
      </>
    ),
    priceValue: "Price on request",
    priceCta: "Ask for pricing",
    lede:
      "Developed with and for ambulance crews, COALA Go builds the COALA system into a high-visibility vest: an internal harness and external grip handles that reduce the load on the back and limit the risk of injury.",
    photoAlt: "Ambulance crew member wearing the COALA Go vest",
    benefits: [
      { title: "Reduces strain on the back", detail: "The COALA system transfers forces from the shoulders to the pelvis and lower back." },
      { title: "Limits the risk of MSDs", detail: "External grip handles for a better hold and less tension." },
      { title: "Support and safety", detail: "An integrated system, discreet and always available under the vest." },
      { title: "Everyday comfort", detail: "Ergonomic cut, breathable zones and a mesh lining that move with you." },
    ],
    specs: [
      { label: "COALA system", value: "Concealed internal harness · retractable grip handles" },
      { label: "Visibility", value: "Retro-reflective strips · 360°" },
      { label: "Pockets", value: "Zipped chest pockets · large zipped lower pockets" },
      { label: "Materials", value: "100% hard-wearing, water-repellent polyester · breathable mesh lining" },
      { label: "Colour", value: "Navy blue" },
      { label: "Sizes", value: "XS to 4XL · straight unisex cut" },
      { label: "Care", value: "Machine washable at 60°C" },
    ],
    usagesTitle: "For every call-out",
    usages: [
      "Patient handling",
      "Stretcher transport",
      "Lifting and transfers",
      "Emergency care at home",
      "Emergency situations",
    ],
    note:
      "COALA Go is not yet available to buy online. Contact us to hear when it becomes available and to receive a proposal tailored to your service.",
  },

  compare: {
    // TODO-EN: "blouse classique" rendered as "standard work tunic" (medical or fabric smock), to avoid the word "blouse".
    eyebrow: "Why not a machine or a standard work tunic?",
    title: (
      <>
        Transfers deserve
        <br />
        their own <em>dedicated tool</em>.
      </>
    ),
    lede:
      "We compared COALA with the two most common practices in the field. Here is how they measure up in real-world use.",
    coalaSub: "Transfer garment",
    machineBrand: "Patient hoist",
    machineSub: "Mechanical lifting aid",
    classicBrand: "Standard work tunic",
    classicSub: "Medical or fabric",
    rows: [
      {
        label: "Transfer movement",
        coala: "The person being helped takes an active part, while the caregiver guides the transfer using their body weight, back straight and core engaged, with no strain on the shoulders or arms.",
        machine: "Bending of the back and arms when fitting the slings.\nNo handling movement.",
        classic: "Unassisted manual transfer.\nLoad carried with the back bent and the arms pulling.",
      },
      {
        label: "Preserving dignity",
        coala: "The person being helped takes an active part, which benefits the caregiver's health.\nA more balanced relationship between caregiver and the person cared for.\nEye contact is maintained.",
        machine: "The machine does all the work during the transfer.\nNo human contact.\nDependence on a machine can be hard to accept.",
        classic: "Human contact that puts the care professional at risk.\nNo eye contact.",
      },
      {
        label: "Strain on the back, shoulders and arms",
        coala: "No more bending of the back or active effort from the arms.\nBack straight, core engaged and hands free.",
        machine: "No forceful movements.\nFitting and removing slings, manoeuvring the machine.",
        classic: "Handling movements, effort and strain that cause lower back pain and MSDs of the shoulders and arms.",
      },
      {
        label: "Transfer time",
        coala: "35 seconds to stand someone up and seat them in a chair",
        machine: "3 minutes 40 seconds to stand someone up and seat them in a chair",
        classic: "25 seconds to stand someone up and seat them in a chair",
      },
      {
        label: "Design",
        coala: "Patented French innovation",
        machine: "Designed and manufactured globally",
        classic: "Manufactured globally",
      },
      {
        label: "Cost over 3 years (5 caregivers)",
        coala: "~1650 € · one-off",
        machine: "~10 000 €",
        classic: "~640 € · consumables",
      },
    ],
  },

  specs: {
    eyebrow: "Technical specifications",
    title: "Everything you need, nothing you don't.",
    items: [
      { label: "Composition", value: "Technical polyester 215 g/m² · reinforced lining" },
      { label: "Available sizes", value: "XS · S · M · L · XL · XXL · 3XL · 4XL (French 34 to 64)" },
      { label: "Colour", value: "White" },
      { label: "Washing", value: "Machine wash at 40°C · tumble dry on a delicate cycle" },
      { label: "Design", value: "Patented French innovation · Connect Link" },
    ],
    // TODO-EN: data sheet link is currently "#"; the PDF is likely in French, add "(in French)" if so.
    download: "Download the technical data sheet (PDF)",
    guideEyebrow: "Size guide",
    guideTitle: "Choosing the right size.",
    guideIntro: (
      <>
        COALA is worn by <em>the caregiver or care professional</em>, so measure the person who
        will wear the garment. If you are between two sizes, choose the larger one.
      </>
    ),
    toggleAria: "Size chart",
    women: "Women",
    men: "Men",
    tableAria: (morpho) => `COALA size chart: ${morpho}`,
    colSize: "Size",
    // TODO-EN: "Confection" values (34/36…) are French clothing sizes, labelled "French size".
    colConfection: "French size",
    colChest: "Chest",
    colWaist: "Waist",
    // TODO-EN: "Point" (French workwear size grading index) rendered as "Grade".
    point: "Grade",
    note: "Body measurements, in centimetres.",
  },

  quote: {
    text: "I've been caring for my husband for four years. The first time I used COALA to move him from the bed to the armchair, I realised I didn't need to become a physiotherapist. I just needed a tool designed for my own body.",
    name: "Hélène, 67",
    role: "Family caregiver · Nantes (translated from French)",
  },

  faq: {
    eyebrow: "Questions about the garment",
    // TODO-EN: French heading said "Cinq questions" but only four items are listed; number dropped.
    title: (
      <>
        The questions
        <br />
        we're asked
        <br />
        <em>most often</em>.
      </>
    ),
    cta: "See all questions",
    items: [
      {
        // TODO-EN: original answer implied the helped person wears COALA ("du XS au 4XL"); rewritten so the caregiver wears it and the person holds the handles.
        q: "Is COALA suitable for my loved one?",
        a: "COALA is worn by you, the caregiver, and suits helping anyone who needs assistance with transfers and can hold the handles, whether fully or partly mobile. The garment comes in sizes XS to 4XL to fit the caregiver. For specific conditions (advanced pressure ulcers, recent surgery), ask the care team for advice.",
      },
      {
        q: "How long does a garment last?",
        a: "In home use (1 to 2 transfers a day): 4 to 6 years. In professional use (10 to 15 transfers a day): 18 to 24 months. The fabric can be machine washed at 40°C and tumble dried on a delicate cycle.",
      },
      {
        // TODO-EN: added the video-call demonstration sentence (in English, once the order has been received) per international policy.
        q: "Can I try it before buying?",
        a: "We do not offer free loans, including for professionals. The product can be returned within 14 days if it has not been worn and is still in new condition, subject to inspection on return. Once your order has been received, we can give you a demonstration by video call, in English.",
      },
      {
        q: "How do I wash the garment?",
        a: "Machine wash at 40°C with standard detergent and tumble dry on a delicate cycle. Do not use fabric softener (it weakens the seams). Do not use chlorine bleach.",
      },
    ],
  },

  /** Indexed like the CrossLink items in the page. */
  cross: [
    { eyebrow: "Next step", title: "How does it work in practice?" },
    { eyebrow: "Equipping a care team?", title: "Request a quote" },
    { eyebrow: "From the field", title: "Read the testimonials" },
  ],
};

export const PRODUCT = {
  ...collect<ProductCopy>(import.meta.glob("./*/product.tsx", { eager: true, import: "default" })),
  en,
};

import { collect } from "../collect";
import type { ReactNode } from "react";

type Step = { n: string; title: string; body: string };
type TitledDetail = { title: string; detail: string };
type Card = { eyebrow: string; title: string };

export type HowItWorksCopy = {
  breadcrumb: { ariaLabel: string; home: string; current: string };
  hero: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    ctaOrder: string;
    ctaProduct: string;
  };
  video: {
    eyebrow: string;
    title: ReactNode;
    iframeTitle: string;
    note: string;
  };
  steps: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    phase1Label: string;
    phase1: Step[];
    phase1Alt: string;
    phase1Caption: string;
    phase2Label: string;
    phase2: Step[];
    phase2Alt: string;
    phase2Caption: string;
    warning: string;
  };
  situations: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    imageAlt: string;
    items: string[];
    profilesTitle: string;
    profilesIntro: string;
    profiles: string[];
    profilesNote: string;
  };
  grips: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    imageAlt: string;
    caption: string;
    /** Same order as the ok/warning flags in the page. */
    items: TitledDetail[];
  };
  verbal: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    imageAlt: string;
    caption: string;
    evaluationLabel: string;
    evaluation: string[];
    sequenceLabel: string;
    sequence: string[];
  };
  posture: {
    eyebrow: string;
    title: ReactNode;
    lede: string;
    /** Same order as the icons in the page. */
    items: TitledDetail[];
  };
  care: {
    eyebrow: string;
    title: ReactNode;
    /** Same order as the icons in the page. */
    items: string[];
    imageAlt: string;
    caption: string;
  };
  deployment: {
    eyebrow: string;
    title: ReactNode;
    factors: string[];
    staffLabel: string;
    staffQuotes: string[];
    patientLabel: string;
    patientQuotes: string[];
  };
  cta: {
    title: string;
    body: string;
    order: string;
    quote: string;
    /** Same order as product / results / faq links in the page. */
    cards: Card[];
  };
};

const en: HowItWorksCopy = {
  breadcrumb: {
    ariaLabel: "Breadcrumb",
    home: "Home",
    current: "How it works",
  },
  hero: {
    eyebrow: "User guide",
    title: (
      <>
        Put it on, assist,<br /><em>take it off</em>.
      </>
    ),
    lede:
      "COALA can be activated in a few seconds and deactivated just as quickly. In between, the person you are helping takes part: you no longer lift them, you support them. This guide is based on the training material used when COALA is rolled out to care teams.",
    ctaOrder: "Order COALA",
    ctaProduct: "See the product page",
  },
  video: {
    eyebrow: "Video demonstration",
    title: (
      <>
        The COALA technique<br />in <em>real situations</em>.
      </>
    ),
    iframeTitle: "COALA transfer garment demonstration (in French)",
    note: "Video in French",
  },
  steps: {
    eyebrow: "Instructions",
    title: (
      <>
        Activate, then release<br />the <em>support</em>.
      </>
    ),
    // TODO-EN: "contention" rendered as "support" (the lumbar belt and shoulder straps tightened around the caregiver). Confirm wording.
    lede:
      "Five steps to get ready before helping someone move. Five steps to return to an ordinary garment once the transfer is complete.",
    phase1Label: "Phase 1: Putting it on",
    phase1: [
      { n: "01", title: "Put on the garment", body: "COALA goes on like an ordinary work garment: the lumbar belt is open and fastened to the garment with its hook-and-loop strips, and the shoulder straps are loose." },
      { n: "02", title: "Undo the two bottom buttons", body: "The two lowest buttons give access to the lumbar belt and the shoulder strap tensioners." },
      { n: "03", title: "Tighten the lumbar belt", body: "Tighten the belt, then fasten it at the tension you want." },
      { n: "04", title: "Tension the shoulder straps", body: "Pull the lower strap of the shoulder tensioners until you reach the tension you want, in the closed position." },
      { n: "05", title: "Close the garment", body: "Do up the last two buttons. The support is active: you are ready to assist." },
    ],
    phase1Alt: "COALA transfer garment open, showing the lumbar belt and shoulder strap tensioners",
    phase1Caption: "Lumbar belt and shoulder strap tensioners, support active.",
    phase2Label: "Phase 2: Taking it off",
    phase2: [
      { n: "01", title: "Undo the two bottom buttons", body: "The physical assistance is over: you can release the support." },
      { n: "02", title: "Release the shoulder tension", body: "Lift the tensioners under your arms to loosen the shoulder straps." },
      { n: "03", title: "Unfasten the lumbar belt", body: "Open the belt to remove all tension." },
      { n: "04", title: "Stow the belt", body: "Fasten both ends of the belt back inside the two front panels of the garment." },
      { n: "05", title: "Do up the two bottom buttons", body: "COALA becomes an ordinary garment again, unnoticeable both to you and to those around you." },
    ],
    phase2Alt: "COALA transfer garment with handles tucked away, back to an ordinary garment",
    phase2Caption: "Support released: COALA is an ordinary garment again.",
    warning:
      "Check when putting it on: make sure both parts of the belt pass through the handles, on the inside of the garment.",
  },
  situations: {
    eyebrow: "When to use it",
    title: (
      <>
        When COALA<br /><em>helps</em> you.
      </>
    ),
    lede:
      "Identify the physical assistance situations where COALA reduces the load on your arms and back, and makes it easier for the person you are helping to take part.",
    imageAlt: "Care professional wearing the COALA transfer garment, helping an older person towards their walking frame",
    items: [
      "Sit-to-stand transfer",
      "Chair-to-toilet transfer",
      "Repositioning in bed and getting up",
      "Assisted walking",
      "Repositioning in a chair",
      "Turning in bed",
    ],
    profilesTitle: "Which patients is it suitable for?",
    profilesIntro:
      "Can the patient understand instructions asking them to cooperate? Does their physical condition allow COALA to be used? Assess each case individually:",
    profiles: [
      "Ability to understand cooperative guidance",
      "Quality of weight-bearing",
      "Weight",
      "Mobility",
      "Balance",
      "Upper-limb muscle tone",
    ],
    profilesNote:
      "If you are unsure whether COALA is suitable for a patient's situation, consult the patient's care team.",
  },
  grips: {
    eyebrow: "Guidance for use",
    title: (
      <>
        Which handles<br />to <em>offer</em>.
      </>
    ),
    lede: "The grips you offer determine how much load stays on your shoulders and back.",
    imageAlt: "Close-up of a grip area on the shoulder of the COALA transfer garment",
    caption: "Upper grip area, on the shoulder.",
    items: [
      { title: "Crossed grip", detail: "Offer one lower handle and the upper handle on the opposite side. The upper hand can be placed in the direction of movement, to help guide the patient's gaze." },
      { title: "Both lower handles", detail: "Offering both lower handles reduces the load on your shoulders and back even further." },
      { title: "Never both upper handles", detail: "Do not offer both upper handles at the same time: this puts strain on your shoulders and back." },
      { title: "Don't leave the handles out", detail: "Tuck the handles away between uses: they could catch on something or be grabbed unexpectedly." },
      { title: "Release the support when not in use", detail: "Loosen the belt and shoulder straps when you are not providing physical assistance, for example when helping with meals or during a break." },
    ],
  },
  verbal: {
    eyebrow: "Verbal guidance",
    title: (
      <>
        The words that<br /><em>engage</em> the patient.
      </>
    ),
    lede:
      "Guide the patient as clearly as possible so that you move together. Feel free to repeat yourself and rephrase: every caregiver and patient pair finds its own cues.",
    imageAlt: "Care professional guiding a patient towards the grip areas of the COALA transfer garment",
    caption: "Eye contact is maintained throughout the manoeuvre.",
    evaluationLabel: "Assessing ability to cooperate",
    evaluation: ["“Can you take hold of this handle?”", "“Do you feel strong?”"],
    sequenceLabel: "Transfer sequence",
    sequence: [
      "“Take hold of these handles”",
      "“Close your hands tightly”",
      "“Hold on tight. Do you feel strong?”",
      "“Move your feet back as far as you can”",
      "“Lean forward”",
      "“Pull the handles towards you and push with your legs”",
    ],
  },
  posture: {
    eyebrow: "Caregiver posture",
    title: (
      <>
        Stand in a position of <em>strength</em>,<br />without lifting.
      </>
    ),
    lede:
      "COALA puts less strain on the joints of your arms and back, provided you position yourself correctly.",
    items: [
      { title: "Straight back", detail: "Keep your back straight while guiding the patient to move their feet back and lean towards you." },
      { title: "Hips and knees bent", detail: "Bend your hips and knees slightly to support the patient's movement effectively." },
      { title: "Feet apart", detail: "Place your feet apart to increase your stability." },
      { title: "Forward / backward lunges", detail: "Place one foot between the patient's feet and use lunging movements to accompany the transfer." },
    ],
  },
  care: {
    eyebrow: "Care",
    title: (
      <>
        Washing <em>instructions</em>.
      </>
    ),
    items: [
      "Cotton wash at 40 °C.",
      "Fasten the belt closed, threaded through the handles, before putting it in the machine.",
      "Choose a delicate or low-temperature drying cycle.",
    ],
    imageAlt: "COALA transfer garment folded, ready for washing",
    caption: "Belt fastened and handles tucked away before machine washing.",
  },
  deployment: {
    eyebrow: "Rolling it out in your organisation",
    title: (
      <>
        The five keys<br />to <em>success</em>.
      </>
    ),
    factors: [
      "Offer COALA to volunteer care professionals",
      "Adopt the right guiding movements",
      "Guide patients towards the lower handles",
      "Release the support and tuck the handles away",
      "Unlearn the habit of lifting",
    ],
    // TODO-EN: short user feedback quotes, translated from French; label kept on the role line per testimonial rule.
    staffLabel: "Care professionals (translated from French)",
    staffQuotes: [
      "“Less tired at the end of the day”",
      "“Safer, I keep my hands free”",
      "“Easy to use”",
      "“You get used to it quickly”",
    ],
    patientLabel: "Patients (translated from French)",
    patientQuotes: [
      "“We're face to face, eye to eye”",
      "“More active participation”",
      "“Better grip”",
      "“A feeling of security”",
    ],
  },
  cta: {
    // TODO-EN: FR heading (literally "Ready to try COALA?") adapted to avoid implying a free trial.
    title: "Ready to work with COALA?",
    body: "Order directly, or request a quote for your organisation.",
    order: "Order COALA",
    quote: "Request a quote",
    cards: [
      { eyebrow: "The garment in detail", title: "Full product page" },
      { eyebrow: "Who uses it", title: "Testimonials & results" },
      { eyebrow: "Questions", title: "Full FAQ" },
    ],
  },
};

export const HOW_IT_WORKS = {
  ...collect<HowItWorksCopy>(import.meta.glob("./*/howItWorks.tsx", { eager: true, import: "default" })),
  en,
};

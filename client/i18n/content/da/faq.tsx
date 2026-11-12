import type { FaqPageCopy } from "../faq";

const copy: FaqPageCopy = {
  hero: {
    eyebrow: "Hjælpecenter",
    title: (
      <>
        Alle spørgsmål,<br />et klart <em>svar</em>.
      </>
    ),
    lede: "Søg på et nøgleord, gennemse emnerne, eller skriv direkte til os, hvis du ikke kan finde det, du leder efter.",
    cta: "Gennemse kategorierne",
    meta: ["Pårørende", "Fagfolk og organisationer", "Opdateres hver måned"],
  },
  search: {
    placeholder: (total) => `Søg blandt ${total} spørgsmål …`,
    ariaLabel: "Søg i FAQ'en",
    clear: "Ryd søgning",
    results: (count) => `${count} ${count === 1 ? "resultat" : "resultater"}`,
    showAll: "vis alle",
    summary: (categories, total) =>
      `${categories} ${categories === 1 ? "kategori" : "kategorier"} · ${total} spørgsmål i alt`,
  },
  toc: {
    ariaLabel: "Kategorier",
    label: "Kategorier",
    helpTag: "Intet svar?",
    helpLink: "Skriv til vores team",
  },
  questionCount: (count) => `${count} spørgsmål`,
  empty: {
    title: (query) => <>Ingen svar på »{query}«.</>,
    body: "Prøv at omformulere din søgning, eller skriv direkte til os.",
    cta: "Skriv til os",
  },
  crossLinks: [
    { eyebrow: "Fandt du ikke svaret?", title: "Skriv til COALA-teamet" },
    { eyebrow: "Skal du udstyre et plejeteam?", title: "Tilbud til fagfolk inden for 48 timer" },
    { eyebrow: "Produktet i detaljer", title: "Se alle produktdetaljer" },
  ],
};

export default copy;

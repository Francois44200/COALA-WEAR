import type { FaqPageCopy } from "../faq";

const copy: FaqPageCopy = {
  hero: {
    eyebrow: "Hjelpesenter",
    title: (
      <>
        Alle spørsmål,<br />et tydelig <em>svar</em>.
      </>
    ),
    lede: "Søk med et stikkord, bla etter tema, eller skriv direkte til oss hvis du ikke finner det du leter etter.",
    cta: "Bla i kategoriene",
    meta: ["Pårørende", "Fagfolk og virksomheter", "Oppdateres månedlig"],
  },
  search: {
    placeholder: (total) => `Søk i ${total} spørsmål …`,
    ariaLabel: "Søk i spørsmål og svar",
    clear: "Tøm søket",
    results: (count) => `${count} treff`,
    showAll: "vis alle",
    summary: (categories, total) =>
      `${categories} ${categories === 1 ? "kategori" : "kategorier"} · ${total} spørsmål totalt`,
  },
  toc: {
    ariaLabel: "Kategorier",
    label: "Kategorier",
    helpTag: "Fant du ikke svaret?",
    helpLink: "Skriv til teamet vårt",
  },
  questionCount: (count) => `${count} spørsmål`,
  empty: {
    title: (query) => <>Ingen svar for «{query}».</>,
    body: "Prøv å formulere søket på en annen måte, eller skriv direkte til oss.",
    cta: "Skriv til oss",
  },
  crossLinks: [
    { eyebrow: "Fant du det fortsatt ikke?", title: "Skriv til COALA-teamet" },
    { eyebrow: "Skal du utstyre et pleieteam?", title: "Tilbud til fagfolk innen 48 timer" },
    { eyebrow: "Produktet i detalj", title: "Se alle produktdetaljer" },
  ],
};

export default copy;

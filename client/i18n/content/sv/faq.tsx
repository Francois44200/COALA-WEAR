import type { FaqPageCopy } from "../faq";

const copy: FaqPageCopy = {
  hero: {
    eyebrow: "Hjälpcenter",
    title: (
      <>
        Varje fråga,<br />ett tydligt <em>svar</em>.
      </>
    ),
    lede: "Sök med ett nyckelord, bläddra efter ämne eller skriv direkt till oss om du inte hittar det du letar efter.",
    cta: "Bläddra bland kategorierna",
    meta: ["Anhörigvårdare", "Yrkesverksamma och verksamheter", "Uppdateras varje månad"],
  },
  search: {
    placeholder: (total) => `Sök bland ${total} ${total === 1 ? "fråga" : "frågor"}…`,
    ariaLabel: "Sök bland vanliga frågor",
    clear: "Rensa sökningen",
    results: (count) => `${count} ${count === 1 ? "träff" : "träffar"}`,
    showAll: "visa alla",
    summary: (categories, total) =>
      `${categories} ${categories === 1 ? "kategori" : "kategorier"} · ${total} ${total === 1 ? "fråga" : "frågor"} totalt`,
  },
  toc: {
    ariaLabel: "Kategorier",
    label: "Kategorier",
    helpTag: "Hittar du inget svar?",
    helpLink: "Skriv till vårt team",
  },
  questionCount: (count) => `${count} ${count === 1 ? "fråga" : "frågor"}`,
  empty: {
    title: (query) => <>Inga svar för ”{query}”.</>,
    body: "Prova att formulera din sökning på ett annat sätt, eller skriv direkt till oss.",
    cta: "Skriv till oss",
  },
  crossLinks: [
    { eyebrow: "Hittar du fortfarande inte svaret?", title: "Skriv till COALA-teamet" },
    { eyebrow: "Ska du utrusta ett vårdteam?", title: "Offert för yrkesverksamma inom 48 timmar" },
    { eyebrow: "Produkten i detalj", title: "Se all produktinformation" },
  ],
};

export default copy;

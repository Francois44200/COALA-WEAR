import type { FaqPageCopy } from "../faq";

const copy: FaqPageCopy = {
  hero: {
    eyebrow: "Hilfecenter",
    title: (
      <>
        Jede Frage,<br />eine klare <em>Antwort</em>.
      </>
    ),
    lede: "Suchen Sie nach einem Stichwort, stöbern Sie nach Themen oder schreiben Sie uns direkt, wenn Sie nicht finden, was Sie suchen.",
    cta: "Kategorien durchsuchen",
    meta: ["Pflegende Angehörige", "Fachkräfte & Einrichtungen", "Monatlich aktualisiert"],
  },
  search: {
    placeholder: (total) => `${total} ${total === 1 ? "Frage" : "Fragen"} durchsuchen …`,
    ariaLabel: "FAQ durchsuchen",
    clear: "Suche löschen",
    results: (count) => `${count} ${count === 1 ? "Ergebnis" : "Ergebnisse"}`,
    showAll: "alle anzeigen",
    summary: (categories, total) =>
      `${categories} ${categories === 1 ? "Kategorie" : "Kategorien"} · insgesamt ${total} ${total === 1 ? "Frage" : "Fragen"}`,
  },
  toc: {
    ariaLabel: "Kategorien",
    label: "Kategorien",
    helpTag: "Keine Antwort gefunden?",
    helpLink: "Schreiben Sie unserem Team",
  },
  questionCount: (count) => `${count} ${count === 1 ? "Frage" : "Fragen"}`,
  empty: {
    title: (query) => <>Keine Antworten für „{query}“.</>,
    body: "Formulieren Sie Ihre Suche anders oder schreiben Sie uns direkt.",
    cta: "Schreiben Sie uns",
  },
  crossLinks: [
    { eyebrow: "Immer noch nicht fündig geworden?", title: "Schreiben Sie dem COALA-Team" },
    { eyebrow: "Sie statten ein Pflegeteam aus?", title: "Angebote für Fachkunden innerhalb von 48 Stunden" },
    { eyebrow: "Das Produkt im Detail", title: "Alle Produktdetails ansehen" },
  ],
};

export default copy;

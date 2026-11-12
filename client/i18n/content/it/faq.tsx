import type { FaqPageCopy } from "../faq";

const copy: FaqPageCopy = {
  hero: {
    eyebrow: "Centro assistenza",
    title: (
      <>
        Ogni domanda,<br />una <em>risposta</em> chiara.
      </>
    ),
    lede: "Cerca con una parola chiave, sfoglia per argomento oppure scrivici direttamente se non trovi ciò che cerchi.",
    cta: "Sfoglia le categorie",
    meta: ["Caregiver familiari", "Professionisti e strutture", "Aggiornato ogni mese"],
  },
  search: {
    placeholder: (total) => (total === 1 ? "Cerca tra 1 domanda…" : `Cerca tra ${total} domande…`),
    ariaLabel: "Cerca nelle FAQ",
    clear: "Cancella la ricerca",
    results: (count) => `${count} ${count === 1 ? "risultato" : "risultati"}`,
    showAll: "mostra tutto",
    summary: (categories, total) =>
      `${categories} ${categories === 1 ? "categoria" : "categorie"} · ${total} ${total === 1 ? "domanda" : "domande"} in totale`,
  },
  toc: {
    ariaLabel: "Categorie",
    label: "Categorie",
    helpTag: "Nessuna risposta?",
    helpLink: "Scrivi al nostro team",
  },
  questionCount: (count) => `${count} ${count === 1 ? "domanda" : "domande"}`,
  empty: {
    title: (query) => <>Nessuna risposta per «{query}».</>,
    body: "Prova a riformulare la ricerca oppure scrivici direttamente.",
    cta: "Scrivici",
  },
  crossLinks: [
    { eyebrow: "Non hai ancora trovato?", title: "Scrivi al team COALA" },
    { eyebrow: "Equipaggi un team di assistenza?", title: "Preventivi per professionisti entro 48 ore" },
    { eyebrow: "Il prodotto nel dettaglio", title: "Vedi tutti i dettagli del prodotto" },
  ],
};

export default copy;

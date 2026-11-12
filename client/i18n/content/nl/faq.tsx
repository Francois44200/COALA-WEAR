import type { FaqPageCopy } from "../faq";

const copy: FaqPageCopy = {
  hero: {
    eyebrow: "Helpcentrum",
    title: (
      <>
        Elke vraag,<br />een helder <em>antwoord</em>.
      </>
    ),
    lede: "Zoek op trefwoord, blader per onderwerp of schrijf ons direct als u niet vindt wat u zoekt.",
    cta: "Bekijk de categorieën",
    meta: ["Mantelzorgers", "Professionals & organisaties", "Maandelijks bijgewerkt"],
  },
  search: {
    placeholder: (total) => `Doorzoek ${total} ${total === 1 ? "vraag" : "vragen"}…`,
    ariaLabel: "Doorzoek de veelgestelde vragen",
    clear: "Zoekopdracht wissen",
    results: (count) => `${count} ${count === 1 ? "resultaat" : "resultaten"}`,
    showAll: "alles tonen",
    summary: (categories, total) =>
      `${categories} ${categories === 1 ? "categorie" : "categorieën"} · ${total} ${total === 1 ? "vraag" : "vragen"} in totaal`,
  },
  toc: {
    ariaLabel: "Categorieën",
    label: "Categorieën",
    helpTag: "Geen antwoord gevonden?",
    helpLink: "Schrijf ons team",
  },
  questionCount: (count) => `${count} ${count === 1 ? "vraag" : "vragen"}`,
  empty: {
    title: (query) => <>Geen antwoorden voor ‘{query}’.</>,
    body: "Probeer uw zoekopdracht anders te formuleren of schrijf ons direct.",
    cta: "Schrijf ons",
  },
  crossLinks: [
    { eyebrow: "Nog steeds niet gevonden?", title: "Schrijf het COALA-team" },
    { eyebrow: "Rust u een zorgteam uit?", title: "Offertes voor professionals binnen 48 uur" },
    { eyebrow: "Het product in detail", title: "Bekijk alle productdetails" },
  ],
};

export default copy;

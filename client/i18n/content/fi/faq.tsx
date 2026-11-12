import type { FaqPageCopy } from "../faq";

const copy: FaqPageCopy = {
  hero: {
    eyebrow: "Ohjekeskus",
    title: (
      <>
        Jokaiseen kysymykseen<br />selkeä <em>vastaus</em>.
      </>
    ),
    lede: "Hae hakusanalla, selaa aiheittain tai kirjoita meille suoraan, jos et löydä etsimääsi.",
    cta: "Selaa aihealueita",
    meta: ["Omaishoitajat", "Ammattilaiset ja organisaatiot", "Päivitetään kuukausittain"],
  },
  search: {
    placeholder: (total) => `Hae ${total} ${total === 1 ? "kysymyksestä" : "kysymyksen joukosta"}…`,
    ariaLabel: "Hae usein kysytyistä kysymyksistä",
    clear: "Tyhjennä haku",
    results: (count) => `${count} ${count === 1 ? "tulos" : "tulosta"}`,
    showAll: "näytä kaikki",
    summary: (categories, total) =>
      `${categories} ${categories === 1 ? "aihealue" : "aihealuetta"} · yhteensä ${total} ${total === 1 ? "kysymys" : "kysymystä"}`,
  },
  toc: {
    ariaLabel: "Aihealueet",
    label: "Aihealueet",
    helpTag: "Etkö löytänyt vastausta?",
    helpLink: "Kirjoita tiimillemme",
  },
  questionCount: (count) => `${count} ${count === 1 ? "kysymys" : "kysymystä"}`,
  empty: {
    title: (query) => <>Ei vastauksia haulla ”{query}”.</>,
    body: "Kokeile muotoilla hakusi toisin tai kirjoita meille suoraan.",
    cta: "Kirjoita meille",
  },
  crossLinks: [
    { eyebrow: "Etkö vieläkään löytänyt vastausta?", title: "Kirjoita COALA-tiimille" },
    { eyebrow: "Varustatko hoitotiimiä?", title: "Ammattilaistarjoukset 48 tunnin kuluessa" },
    { eyebrow: "Tuote tarkemmin", title: "Katso tuotteen kaikki tiedot" },
  ],
};

export default copy;

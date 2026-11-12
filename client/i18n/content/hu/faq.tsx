import type { FaqPageCopy } from "../faq";

const copy: FaqPageCopy = {
  hero: {
    eyebrow: "Súgóközpont",
    title: (
      <>
        Minden kérdésre<br />világos <em>válasz</em>.
      </>
    ),
    lede: "Keressen kulcsszóval, böngésszen témák szerint, vagy írjon nekünk közvetlenül, ha nem találja, amit keres.",
    cta: "Kategóriák böngészése",
    meta: ["Gondozó hozzátartozók", "Szakemberek és intézmények", "Havonta frissítve"],
  },
  search: {
    // Hungarian: nouns stay singular after numerals.
    placeholder: (total) => `Keresés ${total} kérdés között…`,
    ariaLabel: "Keresés a GYIK-ben",
    clear: "Keresés törlése",
    results: (count) => `${count} találat`,
    showAll: "összes megjelenítése",
    summary: (categories, total) => `${categories} kategória · összesen ${total} kérdés`,
  },
  toc: {
    ariaLabel: "Kategóriák",
    label: "Kategóriák",
    helpTag: "Nincs válasz?",
    helpLink: "Írjon csapatunknak",
  },
  questionCount: (count) => `${count} kérdés`,
  empty: {
    title: (query) => <>Nincs találat erre: „{query}”.</>,
    body: "Próbálja másképp megfogalmazni a keresést, vagy írjon nekünk közvetlenül.",
    cta: "Írjon nekünk",
  },
  crossLinks: [
    { eyebrow: "Még mindig nem találja?", title: "Írjon a COALA csapatának" },
    { eyebrow: "Ápolói csapatot szerel fel?", title: "Szakmai árajánlat 48 órán belül" },
    { eyebrow: "A termék részletesen", title: "A termék összes részlete" },
  ],
};

export default copy;

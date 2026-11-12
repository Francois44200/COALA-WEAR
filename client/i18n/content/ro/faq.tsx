import type { FaqPageCopy } from "../faq";

const plural = (n: number, one: string, many: string) =>
  n === 1 ? `1 ${one}` : n === 0 || (n % 100 >= 1 && n % 100 <= 19) ? `${n} ${many}` : `${n} de ${many}`;

const copy: FaqPageCopy = {
  hero: {
    eyebrow: "Centru de ajutor",
    title: (
      <>
        Fiecare întrebare,<br />un <em>răspuns</em> clar.
      </>
    ),
    lede: "Căutați după un cuvânt-cheie, răsfoiți pe teme sau scrieți-ne direct dacă nu găsiți ceea ce căutați.",
    cta: "Răsfoiți categoriile",
    meta: ["Îngrijitori din familie", "Profesioniști și organizații", "Actualizat lunar"],
  },
  search: {
    placeholder: (total) => `Căutați în ${plural(total, "întrebare", "întrebări")}…`,
    ariaLabel: "Căutați în întrebările frecvente",
    clear: "Ștergeți căutarea",
    results: (count) => plural(count, "rezultat", "rezultate"),
    showAll: "afișați tot",
    summary: (categories, total) =>
      `${plural(categories, "categorie", "categorii")} · ${plural(total, "întrebare", "întrebări")} în total`,
  },
  toc: {
    ariaLabel: "Categorii",
    label: "Categorii",
    helpTag: "Niciun răspuns?",
    helpLink: "Scrieți echipei noastre",
  },
  questionCount: (count) => plural(count, "întrebare", "întrebări"),
  empty: {
    title: (query) => <>Niciun răspuns pentru „{query}”.</>,
    body: "Încercați să reformulați căutarea sau scrieți-ne direct.",
    cta: "Scrieți-ne",
  },
  crossLinks: [
    { eyebrow: "Tot nu ați găsit?", title: "Scrieți echipei COALA" },
    { eyebrow: "Echipați o echipă de îngrijire?", title: "Oferte pentru profesioniști în 48 de ore" },
    { eyebrow: "Produsul în detaliu", title: "Vedeți toate detaliile produsului" },
  ],
};

export default copy;

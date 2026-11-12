import type { FaqPageCopy } from "../faq";

const plural = (n: number, one: string, few: string, many: string) => {
  if (n === 1) return one;
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
};

const copy: FaqPageCopy = {
  hero: {
    eyebrow: "Centrum pomocy",
    title: (
      <>
        Każde pytanie,<br />jasna <em>odpowiedź</em>.
      </>
    ),
    lede: "Wyszukiwanie po słowie kluczowym, przeglądanie według tematów – a jeśli nie znajdziecie odpowiedzi, po prostu napiszcie do nas.",
    cta: "Przeglądaj kategorie",
    meta: ["Opiekunowie rodzinni", "Profesjonaliści i placówki", "Aktualizowane co miesiąc"],
  },
  search: {
    placeholder: (total) => `Szukaj wśród ${total} ${plural(total, "pytania", "pytań", "pytań")}…`,
    ariaLabel: "Szukaj w FAQ",
    clear: "Wyczyść wyszukiwanie",
    results: (count) => `${count} ${plural(count, "wynik", "wyniki", "wyników")}`,
    showAll: "pokaż wszystkie",
    summary: (categories, total) =>
      `${categories} ${plural(categories, "kategoria", "kategorie", "kategorii")} · łącznie ${total} ${plural(total, "pytanie", "pytania", "pytań")}`,
  },
  toc: {
    ariaLabel: "Kategorie",
    label: "Kategorie",
    helpTag: "Brak odpowiedzi?",
    helpLink: "Napiszcie do naszego zespołu",
  },
  questionCount: (count) => `${count} ${plural(count, "pytanie", "pytania", "pytań")}`,
  empty: {
    title: (query) => <>Brak odpowiedzi dla „{query}”.</>,
    body: "Warto inaczej sformułować wyszukiwanie lub napisać do nas bezpośrednio.",
    cta: "Napiszcie do nas",
  },
  crossLinks: [
    { eyebrow: "Nadal brak odpowiedzi?", title: "Napiszcie do zespołu COALA" },
    { eyebrow: "Wyposażacie zespół opiekunów?", title: "Oferty dla profesjonalistów w 48 godzin" },
    { eyebrow: "Produkt w szczegółach", title: "Pełny opis produktu" },
  ],
};

export default copy;

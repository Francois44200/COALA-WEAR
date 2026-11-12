import type { FamilyCopy } from "../family";

const copy: FamilyCopy = {
  hero: {
    eyebrow: "Ścieżka opiekuna · Stworzona dla opiekunów rodzinnych",
    title: (
      <>
        Opiekuję się bliską osobą.<br /><em>COALA mi pomaga.</em>
      </>
    ),
    lede: "Każdego dnia pomagacie bliskiej osobie przemieszczać się z miejsca na miejsce. COALA wspiera każdy transfer: odciąża plecy, zwiększa bezpieczeństwo ruchu i pozwala zachować godność.",
    ctaOrder: "Zamów COALA",
    ctaAdvice: "Porozmawiajcie z nami przed zakupem",
    ctaHow: "Zobacz, jak to działa",
    trust: ["Zwrot w ciągu 14 dni", "Obsługa klienta prowadzona przez ludzi", "Poradniki wideo w zestawie"],
    imageAlt: "Opiekun rodzinny w odzieży transferowej COALA podczas transferu",
    cardTop: {
      eyebrow: "Chroni plecy",
      claim: "Koniec z pochylaniem się przy podnoszeniu",
      desc: "nie trzeba już dźwigać – wystarczy podtrzymać",
    },
    cardBottom: { eyebrow: "Na co dzień", pills: ["Łóżko", "Fotel", "Łazienka"] },
  },
  benefits: {
    eyebrow: "Dlaczego COALA?",
    title: (
      <>
        Rozwiązanie stworzone<br />dla <em>opiekunów rodzinnych</em>.
      </>
    ),
    items: [
      { title: "Bezpieczniejszy ruch", desc: "Wzmocnione uchwyty, równomiernie rozłożone punkty podparcia, antypoślizgowość." },
      { title: "Szacunek dla osoby", desc: "Miękka tkanina, godny sposób użycia, a bliska osoba pozostaje ubrana przez cały transfer." },
      { title: "Ochrona pleców", desc: "Koniec z pochylaniem się przy podnoszeniu, koniec z obciążaniem barków i ramion." },
      { title: "Wspiera samodzielność", desc: "Bliska osoba może aktywnie uczestniczyć w ruchu." },
    ],
  },
  steps: {
    eyebrow: "Jak to działa?",
    title: (
      <>
        Trzy proste kroki<br />do <em>bezpiecznego</em> transferu.
      </>
    ),
    items: [
      { title: "Załóż", desc: "COALA nosi się jak zwykłą odzież roboczą. Zakłada się ją w kilka sekund." },
      { title: "Chwyć strefy chwytu", desc: "Bliska osoba trzyma wzmocnione uchwyty (barki, talia, biodra). Opiekun pozostaje w niskiej pozycji, z prostymi plecami." },
      { title: "Przenieś", desc: "Ruch prowadzi się bez siłowania. Łóżko, fotel, wychodzenie z łazienki: ruch jest płynny." },
    ],
    noteEyebrow: "Co zmienia COALA",
    changes: [
      ["Plecy", "Koniec z pochylaniem się przy podnoszeniu."],
      ["Ramiona", "Koniec z obciążaniem barków i ramion."],
      ["Razem", "Bliska osoba uczestniczy w ruchu: nie trzeba jej już dźwigać, wystarczy ją podtrzymać."],
    ],
    guideLink: "Zobacz instrukcję użytkowania w 7 krokach",
  },
  product: {
    eyebrow: "Produkt",
    title: (
      <>
        Prosta odzież,<br /><em>wytrzymała</em> i nadająca się do prania.
      </>
    ),
    specsTitle: "Dane techniczne",
    specs: [
      "Poliester techniczny, 215 g/m²",
      "4 wzmocnione strefy chwytu",
      "Rozmiary od XS do 4XL",
      "Pranie w 40°C · delikatne suszenie",
      "Opatentowana francuska innowacja",
    ],
    commitmentsTitle: "Nasze zobowiązania",
    commitments: [
      "Zwrot nienoszonych produktów w ciągu 14 dni",
      "Obsługa klienta prowadzona przez ludzi",
      "Poradniki wideo w zestawie",
    ],
  },
  faq: {
    eyebrow: "Pytania opiekunów",
    title: (
      <>
        O co pytają nas<br /><em>rodziny</em>.
      </>
    ),
    cta: "Zobacz wszystkie pytania",
    items: [
      {
        q: "Czy COALA jest odpowiednia dla mojej bliskiej osoby?",
        a: "COALA sprawdza się u większości osób, które potrzebują pomocy przy transferach i mogą przynajmniej częściowo uczestniczyć w ruchu, trzymając uchwyty obiema rękami. Odzież nosi opiekun; jest dostępna w rozmiarach od XS do 4XL. W szczególnych przypadkach (zaawansowane odleżyny, niedawna operacja) warto zasięgnąć porady zespołu medycznego.",
      },
      {
        q: "Jak długo wytrzymuje odzież?",
        a: "Przy użytkowaniu domowym (1–2 transfery dziennie): od 4 do 6 lat. Przy użytkowaniu zawodowym (10–15 transferów dziennie): od 18 do 24 miesięcy. Tkaninę można prać w pralce w 40°C i suszyć w suszarce w programie delikatnym.",
      },
      {
        q: "Czy można przetestować odzież przed zakupem?",
        a: "Nie oferujemy bezpłatnych wypożyczeń. Produkt można zwrócić w ciągu 14 dni, jeśli nie był noszony i jest w stanie jak nowy – po weryfikacji przy odbiorze.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Gotowi, by zacząć z COALA?",
    title: (
      <>
        Wspierajcie bliską osobę,<br /><em>chrońcie swoje plecy</em>.
      </>
    ),
    sub: "Zwrot możliwy w ciągu 14 dni, jeśli produkt nie był noszony · Potrzebujecie porady? contact@connectlink.fr",
    ctaOrder: "Zamów COALA",
    ctaWrite: "Napiszcie do nas",
  },
  crossLinks: [
    { eyebrow: "Produkt", title: "Dane techniczne COALA" },
    { eyebrow: "Instrukcja", title: "Instrukcja użytkowania w 7 krokach" },
    { eyebrow: "Pytania", title: "Pełne FAQ" },
  ],
};

export default copy;

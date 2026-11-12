import type { ProductCopy } from "../product";

const copy: ProductCopy = {
  buy: {
    viewLabels: [
      "Odzież transferowa COALA, widok z przodu, cztery strefy chwytu rozłożone",
      "Odzież transferowa COALA, widok z ukosa, cztery strefy chwytu rozłożone",
      "Odzież transferowa COALA ze schowanymi uchwytami, widok z przodu",
      "Wewnętrzna struktura egzoszkieletu odzieży transferowej COALA",
      "Odzież transferowa COALA noszona przez opiekuna zawodowego, strefy chwytu rozłożone",
      "COALA noszona ze schowanymi uchwytami, wygląda jak zwykła odzież robocza",
      "Zbliżenie na strefę chwytu na barku",
      "Opiekun zawodowy wspierający pacjenta w odzieży transferowej COALA",
    ],
    refPrefix: "COALA · ref. CL-B137-BLANC-",
    thumbsAria: "Widoki produktu",
    eyebrow: "Odzież transferowa",
    title: (
      <>
        Odzież transferowa <em>COALA</em>
      </>
    ),
    lede:
      "Odzież tekstylna zaprojektowana z myślą o transferach. Cztery wzmocnione strefy chwytu i struktura egzoszkieletu, która chroni opiekuna. COALA jest niewidoczna i nieodczuwalna, a chroni Was zawsze, gdy tego potrzebujecie.",
    price: "od 129 €",
    priceMeta: "z VAT",
    sizeLabel: "Rozmiar",
    sizeGuide: "Tabela rozmiarów ↗",
    sizeAria: "Wybierzcie rozmiar",
    colourLabel: "Kolor · Biały",
    colourNote: "COALA jest obecnie dostępna wyłącznie w kolorze białym.",
    ctaOrder: "Zamów COALA",
    ctaQuote: "Zapytaj o ofertę",
    reassuranceAria: "Nasze zobowiązania",
    reassurance: [
      "Bezpłatny zwrot w ciągu 14 dni w całej UE",
      "Opatentowana francuska innowacja",
      "Pranie w pralce w 40°C",
    ],
  },

  features: {
    eyebrow: "Zaprojektowana przez opiekunów, dla opiekunów",
    title: (
      <>
        Cztery rozwiązania techniczne,
        <br />
        jeden <em>cel</em>.
      </>
    ),
    items: [
      {
        tag: "01 · Działanie na cztery ręce",
        title: "Wspólny ruch: osoba trzyma się uchwytów",
        body: "COALA jest noszona przez opiekuna, a osoba, której się pomaga, trzyma uchwyty. Opiekun prowadzi manewr ciężarem własnego ciała zamiast podnosić, dzięki czemu ruch staje się wspólnym wysiłkiem. Cztery strefy chwytu, z uchwytami na barkach, po bokach i na biodrach.",
        label: "Cztery wzmocnione strefy chwytu odzieży transferowej COALA",
      },
      {
        tag: "02 · Odzież robocza",
        title: "Tylko 200 g więcej, bez czasu na przygotowanie",
        body: "COALA zakłada się jak zwykłą odzież roboczą, w kilka sekund. Podczas przemieszczania nie obciąża już barków ani dolnego odcinka pleców, nie wymaga mechanicznego mocowania ani długiego szkolenia. Gotowa od razu, gdziekolwiek jesteście.",
        label: "Odzież transferowa COALA ze schowanymi uchwytami, wyglądająca jak zwykła odzież robocza",
      },
      {
        tag: "03 · Wsparcie, które można wyłączyć",
        title: "Zwolnione w 5 sekund",
        body: "Po zakończeniu transferów opiekun zwalnia strefy podparcia i natychmiast chowa uchwyty. Po zwolnieniu nie ma żadnego ucisku: COALA jest nieodczuwalna dla osoby, która ją nosi, i niewidoczna dla innych.",
        label: "Wewnętrzna uprząż odzieży transferowej COALA, zwalniana w pięć sekund",
      },
      {
        tag: "04 · Wsparcie w każdym ruchu",
        title: "Wspomaga opiekuna, nie zastępując ludzkiego kontaktu",
        body: "COALA wspiera ruchy opiekuna, nie zmieniając sposobu, w jaki sprawuje on opiekę. Techniczna tkanina poliestrowa 215 g/m², pranie w 40°C, rozmiary od XS do 4XL.",
        label: "Opiekun zawodowy w COALA prowadzi starszą osobę do chodzika",
      },
    ],
  },

  range: {
    eyebrow: "Gama produktów",
    title: (
      <>
        Trzy modele, jeden i ten sam <em>ruch</em>.
      </>
    ),
    lede:
      "Uprząż i tkanina różnią się w zależności od intensywności użytkowania odzieży. Wszystkie modele są dostępne w rozmiarach od XS do 4XL (francuskie 34–64), nadają się do prania w pralce w 40°C i są zgodne z zaleceniem HAS R.47.",
    badge: "Najpopularniejsza",
    imgAlt: (name) => `Odzież transferowa ${name} podczas noszenia`,
    vat: "z VAT",
    harnessLabel: "Uprząż",
    fabricLabel: "Tkanina",
    supportLabel: "Wsparcie",
    cta: "Zamów COALA",
    models: [
      { audience: "Opiekunowie rodzinni", harness: "1 mm", fabric: "50% bawełny · 50% poliestru", support: "Instrukcja użytkowania w zestawie" },
      { audience: "Opiekunowie zawodowi i regularnie opiekujący się osobami", harness: "1 mm, podszewka z bawełny", fabric: "50% bawełny · 50% poliestru", support: "Instrukcja użytkowania w zestawie" },
      { audience: "Opiekunowie zawodowi", harness: "2 mm, podszewka CoolTex®", fabric: "Techniczna tkanina CoolTex®", support: "Szkolenie i wsparcie" },
    ],
    noteBefore: "Uprząż waży około 200 g i można ją rozłożyć w mniej więcej dziesięć sekund. Jeśli wyposażacie organizację, ",
    noteLink: "poproście o ofertę",
    noteAfter: " zamiast składać zamówienie indywidualne.",
  },

  go: {
    badge: "Wkrótce",
    subtitle: (
      <>
        Kamizelka, która chroni Wasze zdrowie, abyście mogli lepiej chronić <em>innych</em>.
      </>
    ),
    priceValue: "Cena na zapytanie",
    priceCta: "Zapytaj o cenę",
    lede:
      "Opracowana wspólnie z załogami karetek i dla nich, COALA Go wbudowuje system COALA w kamizelkę o wysokiej widoczności: wewnętrzną uprząż i zewnętrzne uchwyty, które zmniejszają obciążenie pleców i ograniczają ryzyko urazów.",
    photoAlt: "Członek załogi karetki w kamizelce COALA Go",
    benefits: [
      { title: "Odciąża plecy", detail: "System COALA przenosi siły z barków na miednicę i dolny odcinek pleców." },
      { title: "Ogranicza ryzyko MSD", detail: "Zewnętrzne uchwyty zapewniające lepszy chwyt i mniejsze napięcie." },
      { title: "Wsparcie i bezpieczeństwo", detail: "Zintegrowany system, dyskretny i zawsze dostępny pod kamizelką." },
      { title: "Komfort na co dzień", detail: "Ergonomiczny krój, przewiewne strefy i siatkowa podszewka, które poruszają się razem z Wami." },
    ],
    specs: [
      { label: "System COALA", value: "Ukryta wewnętrzna uprząż · chowane uchwyty" },
      { label: "Widoczność", value: "Taśmy odblaskowe · 360°" },
      { label: "Kieszenie", value: "Kieszenie piersiowe na zamek · duże dolne kieszenie na zamek" },
      { label: "Materiały", value: "100% wytrzymały, hydrofobowy poliester · przewiewna siatkowa podszewka" },
      { label: "Kolor", value: "Granatowy" },
      { label: "Rozmiary", value: "XS do 4XL · prosty krój unisex" },
      { label: "Pielęgnacja", value: "Pranie w pralce w 60°C" },
    ],
    usagesTitle: "Na każdy wyjazd",
    usages: [
      "Przemieszczanie pacjentów",
      "Transport na noszach",
      "Podnoszenie i transfery",
      "Pomoc w nagłych przypadkach w domu",
      "Sytuacje zagrożenia życia",
    ],
    note:
      "COALA Go nie jest jeszcze dostępna w sprzedaży online. Skontaktujcie się z nami, aby dowiedzieć się, kiedy będzie dostępna, i otrzymać ofertę dopasowaną do Waszej służby.",
  },

  compare: {
    eyebrow: "Dlaczego nie maszyna ani zwykły fartuch roboczy?",
    title: (
      <>
        Transfery zasługują na
        <br />
        własne <em>dedykowane narzędzie</em>.
      </>
    ),
    lede:
      "Porównaliśmy COALA z dwoma najczęstszymi praktykami stosowanymi w terenie. Tak wypadają w rzeczywistym użytkowaniu.",
    coalaSub: "Odzież transferowa",
    machineBrand: "Podnośnik pacjenta",
    machineSub: "Mechaniczny sprzęt do podnoszenia",
    classicBrand: "Zwykły fartuch roboczy",
    classicSub: "Medyczny lub tekstylny",
    rows: [
      {
        label: "Ruch podczas transferu",
        coala: "Osoba, której się pomaga, aktywnie uczestniczy w ruchu, a opiekun prowadzi transfer ciężarem własnego ciała, z prostymi plecami i napiętymi mięśniami brzucha, bez obciążania barków i ramion.",
        machine: "Pochylanie pleców i ramion przy zakładaniu uprzęży.\nBrak ruchu związanego z przemieszczaniem.",
        classic: "Ręczny transfer bez wsparcia.\nCiężar niesiony ze zgiętymi plecami i ciągnącymi ramionami.",
      },
      {
        label: "Zachowanie godności",
        coala: "Osoba, której się pomaga, aktywnie uczestniczy w ruchu, co służy zdrowiu opiekuna.\nBardziej zrównoważona relacja między opiekunem a osobą objętą opieką.\nKontakt wzrokowy zostaje zachowany.",
        machine: "Maszyna wykonuje całą pracę podczas transferu.\nBrak kontaktu z drugim człowiekiem.\nUzależnienie od maszyny może być trudne do zaakceptowania.",
        classic: "Kontakt fizyczny, który naraża opiekuna zawodowego na ryzyko.\nBrak kontaktu wzrokowego.",
      },
      {
        label: "Obciążenie pleców, barków i ramion",
        coala: "Koniec z pochylaniem pleców i aktywnym wysiłkiem ramion.\nProste plecy, napięte mięśnie brzucha i wolne ręce.",
        machine: "Brak ruchów wymagających siły.\nZakładanie i zdejmowanie uprzęży, manewrowanie maszyną.",
        classic: "Ruchy, wysiłek i obciążenie, które powodują bóle krzyża oraz MSD barków i ramion.",
      },
      {
        label: "Czas transferu",
        coala: "35 sekund na podniesienie osoby do pozycji stojącej i posadzenie jej na krześle",
        machine: "3 minuty 40 sekund na podniesienie osoby do pozycji stojącej i posadzenie jej na krześle",
        classic: "25 sekund na podniesienie osoby do pozycji stojącej i posadzenie jej na krześle",
      },
      {
        label: "Projekt",
        coala: "Opatentowana francuska innowacja",
        machine: "Projektowany i produkowany na całym świecie",
        classic: "Produkowany na całym świecie",
      },
      {
        label: "Koszt w ciągu 3 lat (5 opiekunów)",
        coala: "~1650 € · jednorazowo",
        machine: "~10 000 €",
        classic: "~640 € · materiały eksploatacyjne",
      },
    ],
  },

  specs: {
    eyebrow: "Dane techniczne",
    title: "Wszystko, czego potrzebujecie, i nic ponadto.",
    items: [
      { label: "Skład", value: "Poliester techniczny 215 g/m² · wzmocniona podszewka" },
      { label: "Dostępne rozmiary", value: "XS · S · M · L · XL · XXL · 3XL · 4XL (francuskie 34–64)" },
      { label: "Kolor", value: "Biały" },
      { label: "Pranie", value: "Pranie w pralce w 40°C · suszenie w suszarce w programie delikatnym" },
      { label: "Projekt", value: "Opatentowana francuska innowacja · Connect Link" },
    ],
    download: "Pobierz kartę techniczną (PDF)",
    guideEyebrow: "Tabela rozmiarów",
    guideTitle: "Jak wybrać właściwy rozmiar.",
    guideIntro: (
      <>
        COALA jest noszona przez <em>opiekuna rodzinnego lub zawodowego</em>, dlatego mierzcie osobę,
        która będzie nosić odzież. Jeśli Wasze wymiary mieszczą się między dwoma rozmiarami, wybierzcie większy.
      </>
    ),
    toggleAria: "Tabela rozmiarów",
    women: "Kobiety",
    men: "Mężczyźni",
    tableAria: (morpho) => `Tabela rozmiarów COALA: ${morpho}`,
    colSize: "Rozmiar",
    colConfection: "Rozmiar francuski",
    colChest: "Obwód klatki piersiowej",
    colWaist: "Obwód talii",
    point: "Stopień",
    note: "Wymiary ciała w centymetrach.",
  },

  quote: {
    text: "Od czterech lat opiekuję się mężem. Gdy pierwszy raz użyłam COALA, żeby przenieść go z łóżka na fotel, zrozumiałam, że nie muszę zostać fizjoterapeutką. Potrzebowałam tylko narzędzia stworzonego z myślą o moim własnym ciele.",
    name: "Hélène, 67 lat",
    role: "Opiekunka rodzinna · Nantes (przetłumaczone z języka francuskiego)",
  },

  faq: {
    eyebrow: "Pytania o odzież",
    title: (
      <>
        Pytania,
        <br />
        które zadaje się nam
        <br />
        <em>najczęściej</em>.
      </>
    ),
    cta: "Zobacz wszystkie pytania",
    items: [
      {
        q: "Czy COALA jest odpowiednia dla mojej bliskiej osoby?",
        a: "COALA jest noszona przez Was, opiekunów, i sprawdza się przy pomaganiu każdemu, kto potrzebuje wsparcia przy transferach i może trzymać uchwyty, niezależnie od tego, czy jest w pełni, czy częściowo sprawny ruchowo. Odzież jest dostępna w rozmiarach od XS do 4XL, aby pasowała do opiekuna. W szczególnych przypadkach (zaawansowane odleżyny, niedawna operacja) warto zasięgnąć porady zespołu medycznego.",
      },
      {
        q: "Jak długo wytrzymuje odzież?",
        a: "Przy użytkowaniu domowym (1–2 transfery dziennie): od 4 do 6 lat. Przy użytkowaniu zawodowym (10–15 transferów dziennie): od 18 do 24 miesięcy. Tkaninę można prać w pralce w 40°C i suszyć w suszarce w programie delikatnym.",
      },
      {
        q: "Czy można przetestować odzież przed zakupem?",
        a: "Nie oferujemy bezpłatnych wypożyczeń, także dla profesjonalistów. Produkt można zwrócić w ciągu 14 dni, jeśli nie był noszony i jest w stanie jak nowy – po weryfikacji przy zwrocie. Po otrzymaniu zamówienia możemy przeprowadzić dla Was pokaz podczas rozmowy wideo, w języku angielskim.",
      },
      {
        q: "Jak prać odzież?",
        a: "Pranie w pralce w 40°C ze standardowym detergentem, suszenie w suszarce w programie delikatnym. Nie używajcie płynu do zmiękczania tkanin (osłabia szwy). Nie używajcie wybielacza chlorowego.",
      },
    ],
  },

  cross: [
    { eyebrow: "Kolejny krok", title: "Jak to działa w praktyce?" },
    { eyebrow: "Wyposażacie zespół opiekunów?", title: "Zapytaj o ofertę" },
    { eyebrow: "Z terenu", title: "Przeczytaj opinie" },
  ],
};

export default copy;

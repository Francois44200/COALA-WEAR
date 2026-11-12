import type { ResultsCopy } from "../results";

const TRANSLATED = " (przetłumaczone z języka francuskiego)";

const copy: ResultsCopy = {
  hero: {
    eyebrow: "Dowody i opinie",
    title: (
      <>
        Co mówią<br />
        ci, którzy<br />
        <em>jej używają</em>.
      </>
    ),
    lede: "Opiekunowie rodzinni, opiekunowie medyczni, dyrektorzy domów opieki. Prawdziwe opinie i dane zmierzone w praktyce.",
    ctaOrder: "Zamów COALA",
    ctaTestimonials: "Przeczytaj opinie",
    imageAlt: "Opiekun w odzieży transferowej COALA podczas transferu",
  },
  stats: [
    {
      value: "95%",
      label: "deklaruje pozytywny wpływ na zdrowie i warunki pracy",
      source: "Badanie ARACT 2026, 48 opiekunów zawodowych",
    },
    {
      value: "65%",
      label: "pacjentów kwalifikuje się do stosowania COALA przy transferach lub zmianie pozycji w łóżku",
      source: "Badanie Connect Link 2024, 95 pacjentów",
    },
    {
      value: "0",
      label: "zdarzeń niepożądanych zgłoszonych od listopada 2024 r.",
      source: "Monitorowanie klientów Connect Link i badanie ARACT 2026",
    },
    {
      value: "665",
      label: "pacjentów, którym pomagano z użyciem COALA w trakcie badania wpływu ARACT 2026",
      source: "Badanie ARACT 2026",
    },
  ],
  pullQuote: {
    text: "Mówiono mi, że to pomoc zwiększająca komfort. Tak nie jest. To pomoc zwiększająca bezpieczeństwo – zarówno osoby, której się pomaga, jak i opiekuna. Zmierzyłem tę różnicę.",
    name: "Dr Arnaud V.",
    role: "Lekarz koordynujący · Dom opieki non-profit · Hauts-de-France" + TRANSLATED,
  },
  testimonials: {
    eyebrow: "Opinie",
    title: (
      <>
        Wypróbowali ją.<br />
        Oto co o niej <em>sądzą</em>.
      </>
    ),
    badgePro: "Opiekun zawodowy",
    badgeFamily: "Opiekun rodzinny",
    ratingLabel: (rating) => `Ocena: ${rating} na 5 gwiazdek`,
    items: [
      {
        quote: "Od czterech lat opiekuję się mężem. Gdy pierwszy raz użyłam COALA przy transferze z łóżka na fotel, zrozumiałam, że nie muszę zostać fizjoterapeutką. Potrzebowałam po prostu narzędzia zaprojektowanego z myślą o moim własnym ciele.",
        name: "Hélène M.",
        role: "Opiekunka rodzinna" + TRANSLATED,
        location: "Nantes",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Osiem miesięcy temu wyposażyliśmy w COALA naszych 12 opiekunów. Liczba zwolnień lekarskich spadła o połowę. To była jedyna zmiana w naszych praktykach w tamtym roku.",
        name: "Isabelle R.",
        role: "Kierowniczka usług opieki domowej (SAAD)" + TRANSLATED,
        location: "Lyon",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Moja mama jest ciężka, a transfery wykonywałem sam. Nie chciałem przenosić jej do domu opieki. Dzięki COALA mogliśmy zostać w domu o dwa lata dłużej, niż się spodziewaliśmy.",
        name: "Patrick D.",
        role: "Opiekun rodzinny, syn" + TRANSLATED,
        location: "Bordeaux",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "To szkolenie w pakiecie robi różnicę. W 60 minut moje zespoły zrozumiały technikę. Od wdrożenia nie mieliśmy ani jednego incydentu podczas transferu.",
        name: "Dr Arnaud V.",
        role: "Lekarz koordynujący, dom opieki" + TRANSLATED,
        location: "Hauts-de-France",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Szczerze mówiąc, byłam sceptyczna. Odzież do czegoś takiego? Ale po pierwszym tygodniu nie wyobrażam sobie pracy bez niej. Chwyt jest naprawdę inny.",
        name: "Sylvie T.",
        role: "Opiekunka domowa, ADMR" + TRANSLATED,
        location: "Bretania",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Włączyliśmy ją do procesu wdrażania nowych pracowników. Każda nowa osoba otrzymuje swoją odzież pierwszego dnia. Dla naszych opiekunów to prawdziwy środek ochrony indywidualnej.",
        name: "Claire B.",
        role: "Dyrektorka, usługi pielęgniarskie w domu" + TRANSLATED,
        location: "Strasburg",
        type: "pro",
        rating: 5,
      },
      {
        quote: "To zmieniło moją relację z tatą. Wcześniej transfery wywoływały we mnie niepokój – w nim też. Teraz przeprowadzamy je spokojniej. Ten mały szczegół zmienił bardzo wiele.",
        name: "Amina K.",
        role: "Opiekunka rodzinna, córka" + TRANSLATED,
        location: "Paryż",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Mamy trzy placówki w Bretanii i 60 sztuk odzieży w użyciu. Opinie z pierwszej linii są jednogłośne. Technika jest precyzyjniejsza, a wypadki przy pracy związane z ręcznym przemieszczaniem praktycznie zniknęły.",
        name: "François L.",
        role: "Dyrektor domu opieki, grupa z sektora ubezpieczeń wzajemnych" + TRANSLATED,
        location: "Bretania",
        type: "pro",
        rating: 5,
      },
    ],
  },
  cases: {
    eyebrow: "Studia przypadków z praktyki",
    title: (
      <>
        Wyniki<br />
        <em>zmierzone</em>, a nie szacowane.
      </>
    ),
    items: [
      {
        tag: "Placówka opieki · Pielęgniarska opieka domowa",
        title: "10 przeszkolonych opiekunów medycznych, zero zwolnień lekarskich przez 18 miesięcy",
        body: "Grupa szpitalna z północnej Francji wdrożyła COALA w swojej pielęgniarskiej opiece domowej (SSIAD) i hospitalizacji domowej (HAD) po sześciotygodniowym teście w praktyce z udziałem czterech opiekunów zawodowych-ochotników. Wynik: po wdrożeniu brak zwolnień lekarskich związanych z dolnym odcinkiem kręgosłupa, wobec trzech przypadków w tym samym okresie roku poprzedniego.",
        metrics: [
          { v: "0", l: "zwolnień z powodu MSD i bólu dolnego odcinka kręgosłupa" },
          { v: "18 miesięcy", l: "obserwacji w grupie" },
          { v: "10", l: "wyposażonych i przeszkolonych opiekunów zawodowych" },
        ],
      },
      {
        tag: "Opiekun rodzinny · Dom",
        title: "Dwa dodatkowe lata w domu dla rodziny spod Bordeaux",
        body: "Patrick D. sam opiekował się swoją ważącą 87 kg mamą. Codzienne transfery z łóżka na fotel stawały się fizycznie niemożliwe. Po wprowadzeniu COALA i rozmowie z terapeutką zajęciową Connect Link mógł dalej opiekować się nią w domu, bez przenoszenia do domu opieki, przez kolejne 26 miesięcy.",
        metrics: [
          { v: "+26", l: "miesięcy w domu" },
          { v: "1", l: "opiekun działający w pojedynkę" },
          { v: "87 kg", l: "– waga osoby, której pomagano" },
        ],
      },
    ],
  },
  trust: {
    label: "Stosowana przez organizacje, które zaufały COALA",
    ariaLabel: "Partnerzy i organizacje korzystające z COALA",
    awardsLabel: "Nagrody i wyróżnienia",
    awardsAriaLabel: "Nagrody i wyróżnienia",
    awards: [
      "Laureat Silver Eco Festival 2024",
      "Silver Surfer",
      "Innovation & Prévention (I&P)",
      "French Tech 2023",
      "Nagroda Santexpo FHF 2026",
      "Nagroda Janus, Institut Français du Design 2026",
      "Nagroda Salon SAP 2024",
    ],
  },
  finalCta: {
    eyebrow: "Gotowi, by spróbować?",
    title: (
      <>
        14 dni, by wyrobić sobie<br />
        własne <em>zdanie</em>.
      </>
    ),
    lede: "Możecie zwrócić odzież w ciągu 14 dni, w dowolnym miejscu w Unii Europejskiej, jeśli nie była noszona. Demonstracja w formie wideorozmowy w języku angielskim po otrzymaniu zamówienia.",
    ctaOrder: "Zamów COALA · od 129 €",
    ctaQuote: "Zapytaj o ofertę",
  },
  crossLinks: [
    { eyebrow: "Odzież w szczegółach", title: "Pełna strona produktu" },
    { eyebrow: "Wyposażacie zespół opiekunów?", title: "Oferty dla profesjonalistów w ciągu 48 godzin" },
    { eyebrow: "Macie pytania?", title: "Pełne FAQ" },
  ],
};

export default copy;

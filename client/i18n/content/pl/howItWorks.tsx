import type { HowItWorksCopy } from "../howItWorks";

const copy: HowItWorksCopy = {
  breadcrumb: {
    ariaLabel: "Ścieżka nawigacji",
    home: "Strona główna",
    current: "Jak to działa",
  },
  hero: {
    eyebrow: "Instrukcja użytkowania",
    title: (
      <>
        Załóż, wspieraj,<br /><em>zdejmij</em>.
      </>
    ),
    lede:
      "COALA aktywuje się w kilka sekund i równie szybko dezaktywuje. W międzyczasie osoba, której pomagacie, uczestniczy w ruchu: już jej nie podnosicie, tylko ją wspieracie. Ten poradnik opiera się na materiałach szkoleniowych używanych podczas wdrażania COALA w zespołach opiekunów.",
    ctaOrder: "Zamów COALA",
    ctaProduct: "Zobacz stronę produktu",
  },
  video: {
    eyebrow: "Demonstracja wideo",
    title: (
      <>
        Technika COALA<br />w <em>rzeczywistych sytuacjach</em>.
      </>
    ),
    iframeTitle: "Demonstracja odzieży transferowej COALA (w języku francuskim)",
    note: "Film w języku francuskim",
  },
  steps: {
    eyebrow: "Instrukcja",
    title: (
      <>
        Aktywuj, a potem zwolnij<br /><em>napięcie</em>.
      </>
    ),
    lede:
      "Pięć kroków, by przygotować się przed pomocą w przemieszczeniu. Pięć kroków, by po zakończeniu transferu odzież znów stała się zwykłym ubraniem.",
    phase1Label: "Etap 1: Zakładanie",
    phase1: [
      { n: "01", title: "Załóż odzież", body: "COALA zakłada się jak zwykłą odzież roboczą: pas lędźwiowy jest rozpięty i przymocowany do odzieży rzepami, a szelki są poluzowane." },
      { n: "02", title: "Rozepnij dwa dolne guziki", body: "Dwa najniższe guziki dają dostęp do pasa lędźwiowego i napinaczy szelek." },
      { n: "03", title: "Zaciśnij pas lędźwiowy", body: "Zaciśnij pas, a następnie zapnij go z wybranym napięciem." },
      { n: "04", title: "Napnij szelki", body: "Pociągnij dolny pasek napinaczy na ramionach, do uzyskania wybranego napięcia w pozycji zamkniętej." },
      { n: "05", title: "Zapnij odzież", body: "Zapnij dwa ostatnie guziki. Napięcie jest aktywne: można zacząć pomagać." },
    ],
    phase1Alt: "Rozpięta odzież transferowa COALA z widocznym pasem lędźwiowym i napinaczami szelek",
    phase1Caption: "Pas lędźwiowy i napinacze szelek, napięcie aktywne.",
    phase2Label: "Etap 2: Zdejmowanie",
    phase2: [
      { n: "01", title: "Rozepnij dwa dolne guziki", body: "Pomoc fizyczna zakończona: można zwolnić napięcie." },
      { n: "02", title: "Zwolnij napięcie na ramionach", body: "Unieś napinacze pod pachami, aby poluzować szelki." },
      { n: "03", title: "Rozepnij pas lędźwiowy", body: "Rozepnij pas, aby całkowicie zwolnić napięcie." },
      { n: "04", title: "Schowaj pas", body: "Przymocuj oba końce pasa z powrotem wewnątrz dwóch przednich połów odzieży." },
      { n: "05", title: "Zapnij dwa dolne guziki", body: "COALA znów staje się zwykłą odzieżą, niezauważalną zarówno dla osoby, która ją nosi, jak i dla otoczenia." },
    ],
    phase2Alt: "Odzież transferowa COALA ze schowanymi uchwytami, znów jako zwykła odzież",
    phase2Caption: "Napięcie zwolnione: COALA znów jest zwykłą odzieżą.",
    warning:
      "Kontrola przy zakładaniu: upewnij się, że obie części pasa przechodzą przez uchwyty, po wewnętrznej stronie odzieży.",
  },
  situations: {
    eyebrow: "Kiedy jej używać",
    title: (
      <>
        Kiedy COALA<br />Wam <em>pomaga</em>.
      </>
    ),
    lede:
      "Rozpoznajcie sytuacje pomocy fizycznej, w których COALA zmniejsza obciążenie ramion i pleców oraz ułatwia osobie, której pomagacie, udział w ruchu.",
    imageAlt: "Opiekun zawodowy w odzieży transferowej COALA pomaga osobie starszej podejść do balkonika",
    items: [
      "Transfer z pozycji siedzącej do stojącej",
      "Transfer z fotela na toaletę",
      "Zmiana pozycji w łóżku i wstawanie",
      "Wspomagane chodzenie",
      "Zmiana pozycji na fotelu",
      "Obracanie w łóżku",
    ],
    profilesTitle: "Dla jakich pacjentów?",
    profilesIntro:
      "Czy pacjent rozumie polecenia zachęcające go do współpracy? Czy jego stan fizyczny pozwala na użycie COALA? Oceniajcie każdy przypadek indywidualnie:",
    profiles: [
      "Zdolność rozumienia poleceń dotyczących współpracy",
      "Jakość obciążania nóg",
      "Masa ciała",
      "Mobilność",
      "Równowaga",
      "Napięcie mięśni kończyn górnych",
    ],
    profilesNote:
      "Jeśli macie wątpliwości, czy COALA jest odpowiednia w sytuacji danego pacjenta, skonsultujcie się z jego zespołem terapeutycznym.",
  },
  grips: {
    eyebrow: "Wskazówki dotyczące użytkowania",
    title: (
      <>
        Które uchwyty<br /><em>podawać</em>.
      </>
    ),
    lede: "Od tego, które uchwyty podajecie, zależy, jak duże obciążenie pozostaje na Waszych barkach i plecach.",
    imageAlt: "Zbliżenie strefy chwytu na ramieniu odzieży transferowej COALA",
    caption: "Górna strefa chwytu, na ramieniu.",
    items: [
      { title: "Chwyt skrzyżowany", detail: "Podajcie jeden dolny uchwyt i górny uchwyt po przeciwnej stronie. Górną rękę można ułożyć w kierunku ruchu, aby pomóc pokierować wzrokiem pacjenta." },
      { title: "Oba dolne uchwyty", detail: "Podanie obu dolnych uchwytów jeszcze bardziej zmniejsza obciążenie Waszych barków i pleców." },
      { title: "Nigdy obu górnych uchwytów", detail: "Nie podawajcie jednocześnie obu górnych uchwytów: to obciąża barki i plecy." },
      { title: "Nie zostawiajcie wysuniętych uchwytów", detail: "Chowajcie uchwyty między użyciami: mogą o coś zahaczyć lub zostać nieoczekiwanie chwycone." },
      { title: "Zwalniajcie napięcie, gdy nie używacie odzieży", detail: "Poluzujcie pas i szelki, gdy nie udzielacie pomocy fizycznej, na przykład przy posiłkach lub podczas przerwy." },
    ],
  },
  verbal: {
    eyebrow: "Komunikacja słowna",
    title: (
      <>
        Słowa, które<br /><em>angażują</em> pacjenta.
      </>
    ),
    lede:
      "Prowadźcie pacjenta jak najjaśniej, aby poruszać się razem. Nie bójcie się powtarzać i przeformułowywać: każda para opiekun–pacjent wypracowuje własne sygnały.",
    imageAlt: "Opiekun zawodowy kieruje dłonie pacjenta do stref chwytu odzieży transferowej COALA",
    caption: "Kontakt wzrokowy jest utrzymywany przez cały manewr.",
    evaluationLabel: "Ocena zdolności do współpracy",
    evaluation: ["„Uda się chwycić ten uchwyt?”", "„Czy siły dopisują?”"],
    sequenceLabel: "Sekwencja transferu",
    sequence: [
      "„Proszę chwycić te uchwyty”",
      "„Proszę mocno zacisnąć dłonie”",
      "„Proszę mocno trzymać. Czy siły dopisują?”",
      "„Proszę cofnąć stopy jak najdalej”",
      "„Proszę pochylić się do przodu”",
      "„Proszę przyciągnąć uchwyty do siebie i odepchnąć się nogami”",
    ],
  },
  posture: {
    eyebrow: "Postawa opiekuna",
    title: (
      <>
        Stańcie w pozycji <em>siły</em>,<br />bez podnoszenia.
      </>
    ),
    lede:
      "COALA mniej obciąża stawy ramion i pleców – pod warunkiem, że przyjmiecie właściwą pozycję.",
    items: [
      { title: "Proste plecy", detail: "Utrzymujcie proste plecy, prowadząc pacjenta tak, by cofnął stopy i pochylił się w Waszą stronę." },
      { title: "Ugięte biodra i kolana", detail: "Lekko ugnijcie biodra i kolana, aby skutecznie wspierać ruch pacjenta." },
      { title: "Rozstawione stopy", detail: "Rozstawcie stopy, aby zwiększyć stabilność." },
      { title: "Wykroki do przodu / do tyłu", detail: "Postawcie jedną stopę między stopami pacjenta i wykonujcie wykroki, by towarzyszyć transferowi." },
    ],
  },
  care: {
    eyebrow: "Pielęgnacja",
    title: (
      <>
        Instrukcja <em>prania</em>.
      </>
    ),
    items: [
      "Pranie w programie do bawełny w 40 °C.",
      "Przed włożeniem do pralki zapnij pas, przewleczony przez uchwyty.",
      "Wybierz delikatny program suszenia lub suszenie w niskiej temperaturze.",
    ],
    imageAlt: "Złożona odzież transferowa COALA gotowa do prania",
    caption: "Pas zapięty, a uchwyty schowane przed praniem w pralce.",
  },
  deployment: {
    eyebrow: "Wdrożenie w Waszej placówce",
    title: (
      <>
        Pięć kluczy<br />do <em>sukcesu</em>.
      </>
    ),
    factors: [
      "Zaproponujcie COALA opiekunom zawodowym-ochotnikom",
      "Stosujcie właściwe ruchy prowadzące",
      "Kierujcie pacjentów do dolnych uchwytów",
      "Zwalniajcie napięcie i chowajcie uchwyty",
      "Oduczcie się nawyku podnoszenia",
    ],
    staffLabel: "Opiekunowie zawodowi (przetłumaczone z języka francuskiego)",
    staffQuotes: [
      "„Mniej zmęczenia pod koniec dnia”",
      "„Bezpieczniej, mam wolne ręce”",
      "„Łatwa w użyciu”",
      "„Szybko można się przyzwyczaić”",
    ],
    patientLabel: "Pacjenci (przetłumaczone z języka francuskiego)",
    patientQuotes: [
      "„Jesteśmy twarzą w twarz, patrzymy sobie w oczy”",
      "„Aktywniejszy udział”",
      "„Lepszy chwyt”",
      "„Poczucie bezpieczeństwa”",
    ],
  },
  cta: {
    title: "Gotowi pracować z COALA?",
    body: "Zamówcie bezpośrednio lub poproście o ofertę dla swojej placówki.",
    order: "Zamów COALA",
    quote: "Zapytaj o ofertę",
    cards: [
      { eyebrow: "Odzież w szczegółach", title: "Pełna strona produktu" },
      { eyebrow: "Kto jej używa", title: "Opinie i wyniki" },
      { eyebrow: "Pytania", title: "Pełne FAQ" },
    ],
  },
};

export default copy;

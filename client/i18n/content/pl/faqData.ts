import type { FaqCategory } from "@/data/faq";

const data: FaqCategory[] = [
  {
    id: "produit",
    label: "Produkt",
    desc: "Materiały, trwałość, normy",
    items: [
      {
        q: "Z czego wykonana jest odzież COALA?",
        a: "Z technicznego poliestru (215 g/m²) ze wzmocnioną podszewką w miejscach największego obciążenia. Potrójne przeszycia we wszystkich czterech strefach chwytu. Sznurki regulacyjne wykonane z technicznej taśmy.",
      },
      {
        q: "Jak długo służy odzież?",
        a: "Przy użytkowaniu domowym: od 4 do 6 lat. Przy intensywnym użytkowaniu zawodowym: od 18 do 24 miesięcy. Tkaninę można prać w pralce w 40°C i suszyć w suszarce bębnowej w delikatnym programie.",
      },
      {
        q: "Czy COALA jest wyrobem medycznym?",
        a: "Nie. COALA nie jest wyrobem medycznym w rozumieniu europejskiego rozporządzenia w sprawie wyrobów medycznych (UE) 2017/745. To techniczna odzież robocza i opatentowana francuska innowacja.",
      },
    ],
  },
  {
    id: "usage",
    label: "Użytkowanie i technika",
    desc: "Dla kogo, jak i jak często",
    items: [
      {
        q: "Czy COALA jest odpowiednia dla mojej bliskiej osoby?",
        a: "COALA nadaje się dla większości osób, które potrzebują pomocy przy transferach i mogą choćby częściowo uczestniczyć w ruchu, trzymając uchwyty obiema rękami. Samą odzież nosi opiekun; jest dostępna w rozmiarach od XS do 4XL, dobieranych do osoby, która ją nosi. W przypadku szczególnych schorzeń (zaawansowane odleżyny, niedawna operacja) poproście o radę zespół opieki.",
      },
      {
        q: "Czy potrzebne jest szkolenie?",
        a: "Do każdej odzieży dołączona jest instrukcja użytkowania, a internetowe poradniki wideo pokazują, jak prawidłowo z niej korzystać.\n\nPrzy zamówieniach dla zespołów Connect Link oferuje także dedykowane szkolenie dla profesjonalistów i ich przełożonych, prowadzone w formie wideorozmowy w języku angielskim po otrzymaniu zamówienia.",
      },
      {
        q: "Ile transferów można wykonać dziennie?",
        a: "Sama odzież nie ma limitu. Po stronie człowieka: wśród 18 opiekunów obserwowanych przez 90 dni średnia wyniosła 8 transferów dziennie z COALA, bez zgłoszonych dolegliwości bólowych dolnego odcinka pleców.",
      },
      {
        q: "Czy można jej używać z wózkiem inwalidzkim?",
        a: "Tak. COALA równie dobrze sprawdza się przy transferach z łóżka na fotel, z fotela do toalety i z fotela do samochodu. Na stronie „Jak to działa” znajdziecie 6 najczęstszych sytuacji.",
      },
      {
        q: "Czy potrzebne są dwie osoby?",
        a: "Przy większości transferów wystarczy jeden opiekun. Przy osobach cięższych (powyżej 100 kg) lub przy transferach z podłogi na fotel zalecamy dwóch opiekunów.",
      },
    ],
  },
  {
    id: "achat",
    label: "Zamawianie i dostawa",
    desc: "Zamówienia, terminy dostawy, zwroty",
    items: [
      {
        q: "Jak złożyć zamówienie?",
        a: "Przez nasz sklep internetowy, shop.connectlink.fr (karta, Apple Pay lub przelew bankowy). W przypadku zamówień profesjonalnych można też skontaktować się bezpośrednio z naszym zespołem pod adresem contact@connectlink.fr.",
      },
      {
        q: "Jak długo trwa dostawa?",
        a: "Terminy dostawy i koszty wysyłki zależą od kraju i są wyświetlane przy finalizacji zamówienia. Przesyłkę można śledzić za pośrednictwem poczty e-mail.",
      },
      {
        q: "Czy mogę zwrócić odzież?",
        a: "Tak, w ciągu 14 dni z dowolnego miejsca w Unii Europejskiej, pod warunkiem że produkt nie był noszony i jest jak nowy. Każdy zwrot jest sprawdzany przed wymianą lub zwrotem pieniędzy. Ze względów higienicznych odzież jest dostarczana w zapieczętowanym opakowaniu.",
      },
      {
        q: "Czy mogę ją przetestować przed zakupem?",
        a: "Nie oferujemy bezpłatnego wypożyczania, także profesjonalistom. Produkt można jednak zwrócić w ciągu 14 dni, jeśli nie był noszony i jest nadal jak nowy.",
      },
    ],
  },
  {
    id: "pros",
    label: "Profesjonaliści i organizacje",
    desc: "Domy opieki, szpitale, usługi opieki domowej",
    items: [
      {
        q: "Jak szybko otrzymam ofertę dla profesjonalistów?",
        a: "W ciągu 2 dni roboczych. Członek naszego zespołu ds. profesjonalistów oddzwoni, aby poznać specyfikę Waszej placówki, a następnie wyśle dopasowaną ofertę.",
      },
      {
        q: "Czy szkolenie rzeczywiście jest wliczone?",
        a: "Szkolenie jest opłacalne od 5 wyposażonych profesjonalistów. Prowadzi je ergonom lub terapeuta zajęciowy z sieci COALA, w formie wideorozmowy w języku angielskim po otrzymaniu zamówienia, a materiały szkoleniowe są Wam przekazywane.",
      },
      {
        q: "Czy oferujecie warunki dla organizacji z wieloma placówkami?",
        a: "Tak. Ceny hurtowe, dostawy zbiorcze i dedykowana osoba kontaktowa dla grup, organizacji opiekuńczych i federacji zamawiających 100 sztuk odzieży lub więcej.",
      },
      {
        q: "Czy odzież można personalizować (logo, nazwa oddziału)?",
        a: "Tak, sitodruk lub haft są dostępne od 25 sztuk. Czas realizacji: dodatkowe 10 dni roboczych.",
      },
    ],
  },
  {
    id: "lavage",
    label: "Pranie i pielęgnacja",
    desc: "Jak prać, suszyć i przechowywać",
    items: [
      {
        q: "W jakiej temperaturze prać COALA?",
        a: "Prać w pralce w 40°C w programie normalnym, ze standardowym detergentem. Bez płynu do zmiękczania tkanin (osłabia szwy). Bez wybielacza chlorowego.",
      },
      {
        q: "Czy można ją wsadzać do suszarki bębnowej?",
        a: "Tak, ale wyłącznie w delikatnym programie. Najlepiej suszyć ją na płasko lub na wieszaku, aby zachowała kształt.",
      },
      {
        q: "A co z prasowaniem?",
        a: "Nie jest konieczne. Jeśli wolicie prasować, używajcie żelazka o średniej temperaturze i nigdy nie prasujcie wzmocnionych stref chwytu.",
      },
      {
        q: "Jak przechowywać COALA?",
        a: "Złożoną na płasko, w suchym miejscu. Indywidualny pokrowiec do przenoszenia (dołączany do zamówień profesjonalnych) chroni odzież, nawet w torbie do pracy.",
      },
    ],
  },
];

export default data;

import type { FaqCategory } from "@/data/faq";

const data: FaqCategory[] = [
  {
    id: "produit",
    label: "Produktet",
    desc: "Materialer, holdbarhed, standarder",
    items: [
      {
        q: "Hvad er COALA-tøjet lavet af?",
        a: "Teknisk polyester (215 g/m²) med forstærket for ved belastningspunkterne. Tredobbelte sømme på alle fire grebszoner. Justeringssnore af teknisk gjordbånd.",
      },
      {
        q: "Hvor længe holder tøjet?",
        a: "Ved brug i hjemmet: 4 til 6 år. Ved intensiv professionel brug: 18 til 24 måneder. Stoffet kan maskinvaskes ved 40 °C og tørretumbles på et skånsomt program.",
      },
      {
        q: "Er COALA medicinsk udstyr?",
        a: "Nej. COALA er ikke medicinsk udstyr i henhold til EU's forordning om medicinsk udstyr (EU) 2017/745. Det er teknisk arbejdstøj og en patenteret fransk innovation.",
      },
    ],
  },
  {
    id: "usage",
    label: "Brug og teknik",
    desc: "Hvem det er til, hvordan og hvor ofte",
    items: [
      {
        q: "Er COALA egnet til min nærtstående?",
        a: "COALA egner sig til de fleste, der har brug for hjælp til forflytninger og i det mindste delvist kan deltage i bevægelsen ved at holde i grebene med begge hænder. Selve tøjet bæres af hjælperen og fås i størrelserne XS til 4XL, som vælges efter den, der bærer det. Ved særlige tilstande (fremskredne tryksår, nylig operation) bør du spørge plejepersonalet til råds.",
      },
      {
        q: "Kræver det oplæring at bruge det?",
        a: "Der følger en brugervejledning med hvert stykke tøj, og videovejledninger online viser, hvordan du bruger det korrekt.\n\nVed bestillinger til teams tilbyder Connect Link desuden et særligt oplæringsforløb for fagfolk og deres ledere via videoopkald på engelsk, når bestillingen er modtaget.",
      },
      {
        q: "Hvor mange forflytninger kan man udføre om dagen?",
        a: "Selve tøjet har ingen begrænsning. Hvad angår mennesket: Blandt 18 hjælpere, der blev fulgt i 90 dage, var gennemsnittet 8 forflytninger om dagen med COALA, uden rapporterede lændesmerter.",
      },
      {
        q: "Kan det bruges sammen med en kørestol?",
        a: "Ja. COALA fungerer lige så godt til forflytninger fra seng til stol, fra stol til toilet og fra stol til bil. Se vores side „Sådan virker det“ for de 6 mest almindelige situationer.",
      },
      {
        q: "Skal man være to for at bruge det?",
        a: "Én hjælper er nok til de fleste forflytninger. Ved tungere personer (over 100 kg) eller forflytninger fra gulv til stol anbefales det at være to hjælpere.",
      },
    ],
  },
  {
    id: "achat",
    label: "Bestilling og levering",
    desc: "Bestillinger, leveringstider, returnering",
    items: [
      {
        q: "Hvordan bestiller jeg?",
        a: "Via vores webshop, shop.connectlink.fr (kort, Apple Pay eller bankoverførsel). Ved professionelle bestillinger kan du også kontakte vores team direkte på contact@connectlink.fr.",
      },
      {
        q: "Hvor lang er leveringstiden?",
        a: "Leveringstid og fragtomkostninger afhænger af dit land og vises ved betalingen. Du kan følge din pakke via e-mail.",
      },
      {
        q: "Kan jeg returnere mit tøj?",
        a: "Ja, inden for 14 dage fra hele EU, forudsat at produktet ikke har været brugt og er som nyt. Alle returneringer kontrolleres før ombytning eller refusion. Af hygiejnehensyn leveres tøjet til dig i forseglet emballage.",
      },
      {
        q: "Kan jeg prøve det, før jeg køber?",
        a: "Vi tilbyder ikke gratis udlån – heller ikke til fagfolk. Produktet kan dog returneres inden for 14 dage, hvis det ikke har været brugt og stadig er som nyt.",
      },
    ],
  },
  {
    id: "pros",
    label: "Fagfolk og organisationer",
    desc: "Plejehjem, hospitaler, hjemmepleje",
    items: [
      {
        q: "Hvor hurtigt får jeg et tilbud som professionel?",
        a: "Inden for 2 hverdage. En fra vores team for professionelle ringer dig op for at forstå jeres arbejdssted og sender dig derefter et skræddersyet tilbud.",
      },
      {
        q: "Er oplæring virkelig inkluderet?",
        a: "Oplæring kan betale sig fra 5 udstyrede fagpersoner og opefter. Den ledes af en ergonom eller ergoterapeut fra COALA-netværket via videoopkald på engelsk, når bestillingen er modtaget, og undervisningsmaterialet sendes til jer.",
      },
      {
        q: "Tilbyder I særlige vilkår til organisationer med flere afdelinger?",
        a: "Ja. Mængderabat, samlet levering og en fast kontaktperson for koncerner, plejeorganisationer og sammenslutninger, der bestiller 100 stk. tøj eller mere.",
      },
      {
        q: "Kan tøjet tilpasses (logo, afdelingsnavn)?",
        a: "Ja, serigrafi eller broderi er muligt fra 25 stk. Produktionstid: 10 ekstra hverdage.",
      },
    ],
  },
  {
    id: "lavage",
    label: "Vask og vedligeholdelse",
    desc: "Sådan vaskes, tørres og opbevares det",
    items: [
      {
        q: "Ved hvilken temperatur skal COALA vaskes?",
        a: "Maskinvask ved 40 °C på et normalt program med almindeligt vaskemiddel. Intet skyllemiddel (det svækker sømmene). Intet klorblegemiddel.",
      },
      {
        q: "Kan det komme i tørretumbler?",
        a: "Ja, men kun på et skånsomt program. Helst tørres det liggende eller på en bøjle, så det holder formen.",
      },
      {
        q: "Hvad med strygning?",
        a: "Det er ikke nødvendigt. Hvis du foretrækker det, så brug middel varme, og stryg aldrig de forstærkede grebszoner.",
      },
      {
        q: "Hvordan skal COALA opbevares?",
        a: "Lagt fladt sammen et tørt sted. Det individuelle opbevaringsetui (medfølger ved professionelle bestillinger) holder tøjet i god stand – også i en arbejdstaske.",
      },
    ],
  },
];

export default data;

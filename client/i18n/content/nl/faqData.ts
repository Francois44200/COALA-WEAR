import type { FaqCategory } from "@/data/faq";

const data: FaqCategory[] = [
  {
    id: "produit",
    label: "Het product",
    desc: "Materialen, levensduur, normen",
    items: [
      {
        q: "Waarvan is het COALA-kledingstuk gemaakt?",
        a: "Technisch polyester (215 g/m²) met een verstevigde voering op de belastingspunten. Driedubbele stiksels op alle vier de grijpzones. Stelkoorden van technische singelband.",
      },
      {
        q: "Hoe lang gaat het kledingstuk mee?",
        a: "Bij thuisgebruik: 4 tot 6 jaar. Bij intensief professioneel gebruik: 18 tot 24 maanden. De stof is machinewasbaar op 40 °C en kan in de droger op een zacht programma.",
      },
      {
        q: "Is COALA een medisch hulpmiddel?",
        a: "Nee. COALA is geen medisch hulpmiddel in de zin van de Europese Verordening medische hulpmiddelen (EU) 2017/745. Het is technische werkkleding en een gepatenteerde Franse innovatie.",
      },
    ],
  },
  {
    id: "usage",
    label: "Gebruik & techniek",
    desc: "Voor wie, hoe en hoe vaak",
    items: [
      {
        q: "Is COALA geschikt voor mijn naaste?",
        a: "COALA is geschikt voor de meeste mensen die hulp nodig hebben bij transfers en ten minste gedeeltelijk kunnen meewerken aan de beweging, door de handgrepen met beide handen vast te houden. Het kledingstuk zelf wordt gedragen door de zorgverlener en is verkrijgbaar in de maten XS t/m 4XL, gekozen op basis van de drager. Bij specifieke aandoeningen (gevorderde doorligwonden, recente operatie) vraagt u het zorgteam om advies.",
      },
      {
        q: "Heb ik een training nodig om het te gebruiken?",
        a: "Bij elk kledingstuk wordt een gebruiksaanwijzing meegeleverd, en online instructievideo’s laten zien hoe u het goed gebruikt.\n\nBij teambestellingen biedt Connect Link daarnaast een speciale training aan voor professionals en hun leidinggevenden, per videogesprek in het Engels zodra de bestelling is ontvangen.",
      },
      {
        q: "Hoeveel transfers kunnen er per dag worden uitgevoerd?",
        a: "Het kledingstuk zelf kent geen limiet. Wat de mens betreft: bij 18 zorgverleners die 90 dagen werden gevolgd, lag het gemiddelde op 8 transfers per dag met COALA, zonder gemelde lage rugpijn.",
      },
      {
        q: "Kan het worden gebruikt met een rolstoel?",
        a: "Ja. COALA werkt even goed bij transfers van bed naar stoel, van stoel naar toilet en van stoel naar auto. Op onze pagina „Hoe het werkt” vindt u de 6 meest voorkomende situaties.",
      },
      {
        q: "Zijn er twee personen nodig om het te gebruiken?",
        a: "Eén zorgverlener volstaat voor de meeste transfers. Bij zwaardere personen (meer dan 100 kg) of transfers van de vloer naar een stoel worden twee zorgverleners aanbevolen.",
      },
    ],
  },
  {
    id: "achat",
    label: "Bestellen & levering",
    desc: "Bestellingen, levertijden, retourneren",
    items: [
      {
        q: "Hoe bestel ik?",
        a: "Via onze webshop, shop.connectlink.fr (kaart, Apple Pay of bankoverschrijving). Voor professionele bestellingen kunt u ook rechtstreeks contact opnemen met ons team via contact@connectlink.fr.",
      },
      {
        q: "Hoe lang duurt de levering?",
        a: "Levertijden en verzendkosten hangen af van uw land en worden getoond bij het afrekenen. U kunt uw pakket volgen via e-mail.",
      },
      {
        q: "Kan ik mijn kledingstuk retourneren?",
        a: "Ja, binnen 14 dagen vanuit de hele Europese Unie, mits het product niet is gedragen en als nieuw is. Elke retourzending wordt gecontroleerd vóór een omruiling of terugbetaling. Om hygiënische redenen wordt het kledingstuk verzegeld geleverd.",
      },
      {
        q: "Kan ik het uitproberen voordat ik het koop?",
        a: "We bieden geen gratis uitleen aan, ook niet aan professionals. Het product kan echter binnen 14 dagen worden geretourneerd als het niet is gedragen en nog als nieuw is.",
      },
    ],
  },
  {
    id: "pros",
    label: "Professionals & organisaties",
    desc: "Verpleeghuizen, ziekenhuizen, thuiszorgorganisaties",
    items: [
      {
        q: "Hoe snel ontvang ik een offerte voor professionals?",
        a: "Binnen 2 werkdagen. Een medewerker van ons team voor professionals belt u terug om uw situatie te begrijpen en stuurt u vervolgens een offerte op maat.",
      },
      {
        q: "Is de training echt inbegrepen?",
        a: "Een training is zinvol vanaf 5 uitgeruste professionals. Ze wordt gegeven door een ergonoom of ergotherapeut uit het COALA-netwerk, per videogesprek in het Engels zodra de bestelling is ontvangen, en u ontvangt het trainingsmateriaal.",
      },
      {
        q: "Bieden jullie voorwaarden voor organisaties met meerdere locaties?",
        a: "Ja. Staffelprijzen, gebundelde leveringen en een vaste contactpersoon voor groepen, zorgorganisaties en koepelorganisaties die 100 kledingstukken of meer bestellen.",
      },
      {
        q: "Kan het kledingstuk worden gepersonaliseerd (logo, afdelingsnaam)?",
        a: "Ja, zeefdruk of borduren is mogelijk vanaf 25 stuks. Productietijd: 10 extra werkdagen.",
      },
    ],
  },
  {
    id: "lavage",
    label: "Wassen & onderhoud",
    desc: "Wassen, drogen en opbergen",
    items: [
      {
        q: "Op welke temperatuur moet COALA worden gewassen?",
        a: "Machinewas op 40 °C op een normaal programma met gewoon wasmiddel. Geen wasverzachter (die verzwakt de naden). Geen chloorbleekmiddel.",
      },
      {
        q: "Mag het in de droger?",
        a: "Ja, maar alleen op een zacht programma. Bij voorkeur plat of op een hanger laten drogen, zodat het zijn vorm behoudt.",
      },
      {
        q: "En strijken?",
        a: "Niet nodig. Wilt u het toch doen, gebruik dan een middelhete strijkbout en strijk nooit over de verstevigde grijpzones.",
      },
      {
        q: "Hoe bewaart u COALA?",
        a: "Plat opgevouwen op een droge plek. De individuele opbergtas (inbegrepen bij professionele bestellingen) houdt het kledingstuk in goede staat, zelfs in een werktas.",
      },
    ],
  },
];

export default data;

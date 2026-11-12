import type { ResultsCopy } from "../results";

const TRANSLATED = " (vertaald uit het Frans)";

const copy: ResultsCopy = {
  hero: {
    eyebrow: "Bewijs & ervaringen",
    title: (
      <>
        Wat de mensen<br />
        die het <em>gebruiken</em><br />
        ervan vinden.
      </>
    ),
    lede: "Mantelzorgers, verzorgenden, directeuren van verpleeghuizen. Echte ervaringen en cijfers die in de praktijk zijn gemeten.",
    ctaOrder: "COALA bestellen",
    ctaTestimonials: "Lees de ervaringen",
    imageAlt: "Zorgverlener die de COALA-transferkleding draagt tijdens een transfer",
  },
  stats: [
    {
      value: "95%",
      label: "meldde een positief effect op de gezondheid en de werkomstandigheden",
      source: "ARACT-onderzoek 2026, 48 zorgprofessionals",
    },
    {
      value: "65%",
      label: "van de patiënten is geschikt voor COALA bij transfers of herpositionering in bed",
      source: "Onderzoek Connect Link 2024, 95 patiënten",
    },
    {
      value: "0",
      label: "ongewenste voorvallen gemeld sinds november 2024",
      source: "Klantopvolging Connect Link en ARACT-onderzoek 2026",
    },
    {
      value: "665",
      label: "patiënten met COALA geholpen tijdens het ARACT-effectonderzoek 2026",
      source: "ARACT-onderzoek 2026",
    },
  ],
  pullQuote: {
    text: "Mij werd verteld dat het een comforthulpmiddel was. Dat is het niet. Het is een veiligheidshulpmiddel, voor zowel de persoon die geholpen wordt als de zorgverlener. Ik heb het verschil gemeten.",
    name: "Dr Arnaud V.",
    role: "Coördinerend arts · Verpleeghuis zonder winstoogmerk · Hauts-de-France" + TRANSLATED,
  },
  testimonials: {
    eyebrow: "Ervaringen",
    title: (
      <>
        Ze hebben het geprobeerd.<br />
        Dit is wat ze ervan <em>vinden</em>.
      </>
    ),
    badgePro: "Zorgprofessional",
    badgeFamily: "Mantelzorger",
    ratingLabel: (rating) => `${rating} van de 5 sterren`,
    items: [
      {
        quote: "Ik zorg al vier jaar voor mijn man. De eerste keer dat ik COALA gebruikte voor een transfer van bed naar stoel, besefte ik dat ik geen fysiotherapeut hoefde te worden. Ik had gewoon een hulpmiddel nodig dat voor mijn eigen lichaam is ontworpen.",
        name: "Hélène M.",
        role: "Mantelzorger" + TRANSLATED,
        location: "Nantes",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Acht maanden geleden hebben we onze 12 verzorgenden met COALA uitgerust. Het ziekteverzuim is gehalveerd. Het was het enige wat we dat jaar in onze werkwijze hebben veranderd.",
        name: "Isabelle R.",
        role: "Manager thuiszorgdienst (SAAD)" + TRANSLATED,
        location: "Lyon",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Mijn moeder is zwaar en ik deed de transfers alleen. Ik wilde haar niet naar een verpleeghuis laten verhuizen. COALA gaf ons twee jaar langer thuis dan we hadden durven hopen.",
        name: "Patrick D.",
        role: "Mantelzorger, zoon" + TRANSLATED,
        location: "Bordeaux",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "De inbegrepen training maakt het verschil. In 60 minuten begrepen mijn teams de techniek. Sinds de invoering hebben we geen enkel incident bij transfers meer gehad.",
        name: "Dr Arnaud V.",
        role: "Coördinerend arts, verpleeghuis" + TRANSLATED,
        location: "Hauts-de-France",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Eerlijk gezegd was ik sceptisch. Een kledingstuk daarvoor? Maar na de eerste week kan ik me niet meer voorstellen om zonder te werken. De grip voelt echt anders.",
        name: "Sylvie T.",
        role: "Thuiszorgmedewerker, ADMR" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
      {
        quote: "We hebben het opgenomen in ons inwerkprogramma. Elke nieuwe medewerker krijgt op de eerste dag een eigen kledingstuk. Voor onze verzorgenden is het echt een persoonlijk beschermingsmiddel.",
        name: "Claire B.",
        role: "Directeur, wijkverpleging" + TRANSLATED,
        location: "Straatsburg",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Het heeft de relatie met mijn vader veranderd. Vroeger maakten transfers mij angstig, en hem ook. Nu doen we ze rustiger. Dit kleine detail heeft veel veranderd.",
        name: "Amina K.",
        role: "Mantelzorger, dochter" + TRANSLATED,
        location: "Parijs",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "We hebben drie locaties in Bretagne en 60 kledingstukken in gebruik. De feedback van de werkvloer is unaniem. De techniek is nauwkeuriger en arbeidsongevallen door tillen en verplaatsen zijn vrijwel verdwenen.",
        name: "François L.",
        role: "Directeur verpleeghuis, groep zonder winstoogmerk" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
    ],
  },
  cases: {
    eyebrow: "Praktijkvoorbeelden",
    title: (
      <>
        Resultaten die<br />
        <em>gemeten</em> zijn, niet geschat.
      </>
    ),
    items: [
      {
        tag: "Zorgaanbieder · Wijkverpleging",
        title: "10 verzorgenden getraind, geen ziekteverzuim in 18 maanden",
        body: "Een ziekenhuisgroep in Noord-Frankrijk voerde COALA in bij haar wijkverpleging (SSIAD) en haar dienst voor ziekenhuiszorg thuis (HAD), na een praktijkproef van zes weken met vier vrijwillige zorgprofessionals. Resultaat: geen ziekteverzuim door rugklachten na de invoering, tegenover drie gevallen in dezelfde periode het jaar ervoor.",
        metrics: [
          { v: "0", l: "verzuim door aandoeningen aan het bewegingsapparaat en rugklachten" },
          { v: "18 maanden", l: "opvolging binnen de groep" },
          { v: "10", l: "zorgprofessionals uitgerust en getraind" },
        ],
      },
      {
        tag: "Mantelzorger · Thuis",
        title: "Twee jaar langer thuis voor een gezin bij Bordeaux",
        body: "Patrick D. zorgde alleen voor zijn moeder van 87 kg. De dagelijkse transfers van bed naar stoel werden fysiek onmogelijk. Na de introductie van COALA en een gesprek met de ergotherapeut van Connect Link kon hij nog 26 maanden thuis voor haar blijven zorgen, zonder dat zij naar een verpleeghuis hoefde.",
        metrics: [
          { v: "+26", l: "maanden thuis" },
          { v: "1", l: "mantelzorger, alleen" },
          { v: "87 kg", l: "persoon die geholpen wordt" },
        ],
      },
    ],
  },
  trust: {
    label: "Gebruikt door organisaties die COALA vertrouwen",
    ariaLabel: "Partners en organisaties die COALA gebruiken",
    awardsLabel: "Prijzen & erkenning",
    awardsAriaLabel: "Prijzen en erkenning",
    awards: [
      "Winnaar Silver Eco Festival 2024",
      "Silver Surfer",
      "Innovation & Prévention (I&P)",
      "French Tech 2023",
      "Santexpo FHF Award 2026",
      "Janus-prijs, Institut Français du Design 2026",
      "Salon SAP Award 2024",
    ],
  },
  finalCta: {
    eyebrow: "Klaar om het te proberen?",
    title: (
      <>
        14 dagen om<br />
        zelf te <em>beslissen</em>.
      </>
    ),
    lede: "U kunt het binnen 14 dagen retourneren, overal in de Europese Unie, als het kledingstuk niet gedragen is. Demonstratie per videogesprek, in het Engels, zodra uw bestelling is ontvangen.",
    ctaOrder: "COALA bestellen · vanaf €129",
    ctaQuote: "Offerte aanvragen",
  },
  crossLinks: [
    { eyebrow: "Het kledingstuk in detail", title: "Volledige productpagina" },
    { eyebrow: "Een zorgteam uitrusten?", title: "Offertes voor professionals binnen 48 uur" },
    { eyebrow: "Nog vragen?", title: "Volledige FAQ" },
  ],
};

export default copy;

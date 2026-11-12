import type { ResultsCopy } from "../results";

const TRANSLATED = " (oversat fra fransk)";

const copy: ResultsCopy = {
  hero: {
    eyebrow: "Dokumentation og udtalelser",
    title: (
      <>
        Det siger dem,<br />
        der <em>bruger det</em><br />
        hver dag.
      </>
    ),
    lede: "Pårørende, plejepersonale, plejehjemsledere. Ægte udtalelser og tal målt i praksis.",
    ctaOrder: "Bestil COALA",
    ctaTestimonials: "Læs udtalelserne",
    imageAlt: "Hjælper iført COALA-forflytningstøj under en forflytning",
  },
  stats: [
    {
      value: "95%",
      label: "oplevede en positiv effekt på helbred og arbejdsforhold",
      source: "ARACT-undersøgelse 2026, 48 plejepersonale",
    },
    {
      value: "65%",
      label: "af patienterne er egnede til COALA ved forflytninger eller omlejring i sengen",
      source: "Connect Link-undersøgelse 2024, 95 patienter",
    },
    {
      value: "0",
      label: "utilsigtede hændelser rapporteret siden november 2024",
      source: "Connect Links kundeopfølgning og ARACT-undersøgelse 2026",
    },
    {
      value: "665",
      label: "patienter fik hjælp med COALA under ARACT-effektundersøgelsen 2026",
      source: "ARACT-undersøgelse 2026",
    },
  ],
  pullQuote: {
    text: "Man fortalte mig, at det var et komforthjælpemiddel. Det er det ikke. Det er et sikkerhedshjælpemiddel – både for den, der får hjælp, og for hjælperen. Jeg har målt forskellen.",
    name: "Dr Arnaud V.",
    role: "Koordinerende læge · Non-profit plejehjem · Hauts-de-France" + TRANSLATED,
  },
  testimonials: {
    eyebrow: "Udtalelser",
    title: (
      <>
        De har prøvet det.<br />
        Her er, hvad de <em>synes</em>.
      </>
    ),
    badgePro: "Fagperson",
    badgeFamily: "Pårørende",
    ratingLabel: (rating) => `${rating} ud af 5 ${rating === 1 ? "stjerne" : "stjerner"}`,
    items: [
      {
        quote: "Jeg har passet min mand i fire år. Første gang, jeg brugte COALA til en forflytning fra seng til stol, gik det op for mig, at jeg ikke behøvede at blive fysioterapeut. Jeg havde bare brug for et redskab, der var udviklet til min egen krop.",
        name: "Hélène M.",
        role: "Pårørende" + TRANSLATED,
        location: "Nantes",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Vi udstyrede vores 12 hjemmehjælpere med COALA for otte måneder siden. Sygefraværet er halveret. Det var det eneste, vi ændrede i vores praksis det år.",
        name: "Isabelle R.",
        role: "Leder af hjemmeplejeordning (SAAD)" + TRANSLATED,
        location: "Lyon",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Min mor er tung, og jeg klarede forflytningerne alene. Jeg ville ikke flytte hende på plejehjem. COALA gav os to år mere hjemme, end vi havde turdet håbe på.",
        name: "Patrick D.",
        role: "Pårørende, søn" + TRANSLATED,
        location: "Bordeaux",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Det er den inkluderede oplæring, der gør forskellen. På 60 minutter forstod mine teams teknikken. Vi har ikke haft en eneste hændelse ved forflytninger, siden vi tog det i brug.",
        name: "Dr Arnaud V.",
        role: "Koordinerende læge, plejehjem" + TRANSLATED,
        location: "Hauts-de-France",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Ærligt talt var jeg skeptisk. Tøj til det? Men efter den første uge kan jeg ikke forestille mig at arbejde uden. Grebet føles virkelig anderledes.",
        name: "Sylvie T.",
        role: "Hjemmehjælper, ADMR" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Vi har gjort det til en del af vores introforløb. Alle nye medarbejdere får deres tøj første dag. For vores plejepersonale er det et egentligt personligt værnemiddel.",
        name: "Claire B.",
        role: "Leder, hjemmesygepleje" + TRANSLATED,
        location: "Strasbourg",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Det har ændret mit forhold til min far. Før gjorde forflytningerne mig nervøs – og ham også. Nu foregår de mere roligt. Den lille detalje har ændret rigtig meget.",
        name: "Amina K.",
        role: "Pårørende, datter" + TRANSLATED,
        location: "Paris",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Vi har tre plejehjem i Bretagne og 60 sæt tøj i brug. Tilbagemeldingerne fra medarbejderne er enstemmige. Teknikken er mere præcis, og arbejdsulykker i forbindelse med manuel håndtering er stort set forsvundet.",
        name: "François L.",
        role: "Plejehjemsleder, gensidig non-profit koncern" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
    ],
  },
  cases: {
    eyebrow: "Cases fra praksis",
    title: (
      <>
        Resultater, der er<br />
        <em>målt</em>, ikke anslået.
      </>
    ),
    items: [
      {
        tag: "Plejeudbyder · Hjemmesygepleje",
        title: "10 social- og sundhedsassistenter oplært, intet sygefravær på 18 måneder",
        body: "En hospitalsgruppe i Nordfrankrig indførte COALA i sin hjemmesygepleje (SSIAD) og sin indlæggelse i eget hjem (HAD) efter et seks ugers forsøg i praksis med fire frivillige fagpersoner. Resultat: intet sygefravær relateret til lænden efter indførelsen, mod tre tilfælde i samme periode året før.",
        metrics: [
          { v: "0", l: "sygefravær pga. MSB og lændesmerter" },
          { v: "18 måneder", l: "opfølgning i gruppen" },
          { v: "10", l: "fagpersoner udstyret og oplært" },
        ],
      },
      {
        tag: "Pårørende · Hjemmet",
        title: "To år mere hjemme for en familie nær Bordeaux",
        body: "Patrick D. passede alene sin mor på 87 kg. De daglige forflytninger fra seng til stol var ved at blive fysisk umulige. Efter at have taget COALA i brug og haft en samtale med Connect Links ergoterapeut kunne han fortsætte med at passe hende hjemme – uden at flytte hende på plejehjem – i yderligere 26 måneder.",
        metrics: [
          { v: "+26", l: "måneder hjemme" },
          { v: "1", l: "pårørende alene" },
          { v: "87 kg", l: "person, der får hjælp" },
        ],
      },
    ],
  },
  trust: {
    label: "Bruges af organisationer, der har tillid til COALA",
    ariaLabel: "Partnere og organisationer, der bruger COALA",
    awardsLabel: "Priser og anerkendelser",
    awardsAriaLabel: "Priser og anerkendelser",
    awards: [
      "Vinder af Silver Eco Festival 2024",
      "Silver Surfer",
      "Innovation & Prévention (I&P)",
      "French Tech 2023",
      "Santexpo FHF Award 2026",
      "Janus-prisen, Institut Français du Design 2026",
      "Salon SAP Award 2024",
    ],
  },
  finalCta: {
    eyebrow: "Klar til at prøve?",
    title: (
      <>
        14 dage til at gøre<br />
        dig din egen <em>mening</em>.
      </>
    ),
    lede: "Du kan returnere det inden for 14 dage overalt i EU, hvis tøjet ikke har været brugt. Demonstration via videoopkald på engelsk, når din ordre er modtaget.",
    ctaOrder: "Bestil COALA · fra 129 €",
    ctaQuote: "Anmod om tilbud",
  },
  crossLinks: [
    { eyebrow: "Tøjet i detaljer", title: "Hele produktsiden" },
    { eyebrow: "Skal du udstyre et plejeteam?", title: "Tilbud til fagfolk inden for 48 timer" },
    { eyebrow: "Har du spørgsmål?", title: "Hele FAQ'en" },
  ],
};

export default copy;

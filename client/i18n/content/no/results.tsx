import type { ResultsCopy } from "../results";

const TRANSLATED = " (oversatt fra fransk)";

const copy: ResultsCopy = {
  hero: {
    eyebrow: "Dokumentasjon og erfaringer",
    title: (
      <>
        Hva de som<br />
        <em>bruker det</em><br />
        sier.
      </>
    ),
    lede: "Pårørende, helsefagarbeidere, sykehjemsledere. Ekte erfaringer og tall målt i praksis.",
    ctaOrder: "Bestill COALA",
    ctaTestimonials: "Les erfaringene",
    imageAlt: "Omsorgsperson med COALA-forflytningsplagget under en forflytning",
  },
  stats: [
    {
      value: "95%",
      label: "rapporterte en positiv effekt på helse og arbeidsforhold",
      source: "ARACT-studie 2026, 48 helsepersonell",
    },
    {
      value: "65%",
      label: "av pasientene egner seg for COALA ved forflytning eller reposisjonering i seng",
      source: "Connect Link-studie 2024, 95 pasienter",
    },
    {
      value: "0",
      label: "uønskede hendelser rapportert siden november 2024",
      source: "Connect Links kundeoppfølging og ARACT-studie 2026",
    },
    {
      value: "665",
      label: "pasienter fikk hjelp med COALA under ARACTs effektstudie 2026",
      source: "ARACT-studie 2026",
    },
  ],
  pullQuote: {
    text: "Jeg fikk høre at det var et komforthjelpemiddel. Det er det ikke. Det er et sikkerhetshjelpemiddel, både for den som får hjelp og for omsorgspersonen. Jeg har målt forskjellen.",
    name: "Dr. Arnaud V.",
    role: "Koordinerende lege · Ideelt sykehjem · Hauts-de-France" + TRANSLATED,
  },
  testimonials: {
    eyebrow: "Erfaringer",
    title: (
      <>
        De har prøvd det.<br />
        Dette er hva de <em>mener</em>.
      </>
    ),
    badgePro: "Helsepersonell",
    badgeFamily: "Pårørende",
    ratingLabel: (rating) => `${rating} av 5 stjerner`,
    items: [
      {
        quote: "Jeg har tatt meg av mannen min i fire år. Første gang jeg brukte COALA ved en forflytning fra seng til stol, skjønte jeg at jeg ikke trengte å bli fysioterapeut. Jeg trengte bare et verktøy laget for min egen kropp.",
        name: "Hélène M.",
        role: "Pårørende" + TRANSLATED,
        location: "Nantes",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Vi utstyrte våre 12 helsefagarbeidere med COALA for åtte måneder siden. Sykefraværet er halvert. Det var det eneste vi endret i arbeidsmåten vår det året.",
        name: "Isabelle R.",
        role: "Leder for hjemmetjeneste (SAAD)" + TRANSLATED,
        location: "Lyon",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Moren min er tung, og jeg gjorde forflytningene alene. Jeg ville ikke flytte henne på sykehjem. COALA ga oss to år mer hjemme enn vi hadde håpet på.",
        name: "Patrick D.",
        role: "Pårørende, sønn" + TRANSLATED,
        location: "Bordeaux",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Det er opplæringen som følger med, som utgjør forskjellen. På 60 minutter forsto teamene mine teknikken. Vi har ikke hatt en eneste hendelse ved forflytning siden vi tok det i bruk.",
        name: "Dr. Arnaud V.",
        role: "Koordinerende lege, sykehjem" + TRANSLATED,
        location: "Hauts-de-France",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Ærlig talt var jeg skeptisk. Et plagg til det? Men etter den første uken kan jeg ikke tenke meg å jobbe uten. Grepet kjennes virkelig annerledes.",
        name: "Sylvie T.",
        role: "Hjemmehjelper, ADMR" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Vi har bygd det inn i introduksjonsprogrammet vårt. Alle nyansatte får plagget sitt første dag. For våre omsorgsarbeidere er det et ekte personlig verneutstyr.",
        name: "Claire B.",
        role: "Leder, hjemmesykepleietjeneste" + TRANSLATED,
        location: "Strasbourg",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Det har endret forholdet mitt til faren min. Før gjorde forflytningene meg engstelig, og ham også. Nå gjør vi dem i større ro. Denne lille detaljen har endret mye.",
        name: "Amina K.",
        role: "Pårørende, datter" + TRANSLATED,
        location: "Paris",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Vi har tre enheter i Bretagne og 60 plagg i bruk. Tilbakemeldingene fra de ansatte er entydige. Teknikken er mer presis, og arbeidsulykker knyttet til manuell håndtering har så godt som forsvunnet.",
        name: "François L.",
        role: "Sykehjemsleder, gjensidig eid konsern" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
    ],
  },
  cases: {
    eyebrow: "Eksempler fra praksis",
    title: (
      <>
        Resultater som er<br />
        <em>målt</em>, ikke anslått.
      </>
    ),
    items: [
      {
        tag: "Helseaktør · Hjemmesykepleie",
        title: "10 helsefagarbeidere opplært, ikke noe sykefravær på 18 måneder",
        body: "En sykehusgruppe i Nord-Frankrike tok i bruk COALA i hjemmesykepleien (SSIAD) og i sykehus i hjemmet (HAD) etter en seks uker lang utprøving i praksis med fire frivillige helsepersonell. Resultat: ikke noe sykefravær knyttet til korsryggen etter innføringen, mot tre tilfeller i samme periode året før.",
        metrics: [
          { v: "0", l: "sykefravær grunnet muskel- og skjelettplager og korsrygg" },
          { v: "18 måneder", l: "med oppfølging av gruppen" },
          { v: "10", l: "helsepersonell utstyrt og opplært" },
        ],
      },
      {
        tag: "Pårørende · Hjemme",
        title: "To år mer hjemme for en familie nær Bordeaux",
        body: "Patrick D. tok seg alene av moren sin, som veide 87 kg. De daglige forflytningene fra seng til stol var i ferd med å bli fysisk umulige. Etter at han tok i bruk COALA og hadde en samtale med ergoterapeuten hos Connect Link, kunne han fortsette å ta seg av henne hjemme, uten å flytte henne på sykehjem, i ytterligere 26 måneder.",
        metrics: [
          { v: "+26", l: "måneder hjemme" },
          { v: "1", l: "omsorgsperson alene" },
          { v: "87 kg", l: "person som får hjelp" },
        ],
      },
    ],
  },
  trust: {
    label: "Brukes av virksomheter som stoler på COALA",
    ariaLabel: "Partnere og virksomheter som bruker COALA",
    awardsLabel: "Priser og anerkjennelse",
    awardsAriaLabel: "Priser og anerkjennelse",
    awards: [
      "Vinner av Silver Eco Festival 2024",
      "Silver Surfer",
      "Innovation & Prévention (I&P)",
      "French Tech 2023",
      "Santexpo FHF Award 2026",
      "Janus-prisen, Institut Français du Design 2026",
      "Salon SAP Award 2024",
    ],
  },
  finalCta: {
    eyebrow: "Klar til å prøve?",
    title: (
      <>
        14 dager til å gjøre deg<br />
        opp din egen <em>mening</em>.
      </>
    ),
    lede: "Du kan returnere det innen 14 dager, hvor som helst i EU, hvis plagget ikke er brukt. Demonstrasjon på videosamtale, på engelsk, når bestillingen din er mottatt.",
    ctaOrder: "Bestill COALA · fra 129 €",
    ctaQuote: "Be om tilbud",
  },
  crossLinks: [
    { eyebrow: "Plagget i detalj", title: "Fullstendig produktside" },
    { eyebrow: "Skal du utstyre et pleieteam?", title: "Tilbud til fagfolk innen 48 timer" },
    { eyebrow: "Har du spørsmål?", title: "Fullstendig FAQ" },
  ],
};

export default copy;

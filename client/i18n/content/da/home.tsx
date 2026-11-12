import type { HomeCopy } from "../home";

const copy: HomeCopy = {
  hero: {
    tag: "Tekstilt forflytningshjælpemiddel · COALA fra Connect Link",
    title: (
      <>
        Forflytningstøjet,<br />
        der <em>beskytter</em><br />
        dem, der hjælper.
      </>
    ),
    lede: "COALA støtter de daglige forflytninger: Det letter belastningen for hjælperen, giver tryghed for den, der får hjælp, og gør plejen mere flydende igen.",
    ctaFamily: "Jeg hjælper en af mine nærmeste",
    ctaTeams: "Jeg udstyrer et plejeteam",
    ctaHow: "Se, hvordan det virker",
    trust: ["Patenteret fransk innovation", "Kan vaskes og genbruges", "Bruges på plejehjem og i hjemmet"],
    statLabel: "af hjemmeplejens medarbejdere oplever bedre helbred og arbejdsforhold",
    statSource: "ARACT-undersøgelse 2026 · n=48 plejepersonale / n=665 patienter / daglig brug over 12 måneder",
  },
  logos: {
    ariaLabel: "Partnere og priser",
    partnersTitle: "Anvendt hos og støttet af",
    awardsTitle: "Priser og anerkendelse",
    awards: [
      "French Tech 2023",
      "Santexpo FHF Award 2026",
      "Vinder af Silver Eco Festival 2024",
      "Janus-prisen, Institut Français du Design 2026",
      "Salon SAP Award 2024",
    ],
  },
  bannerAlt: "COALA-forflytningstøj i brug",
  problem: {
    eyebrow: "Virkeligheden",
    title: (
      <>
        De daglige forflytninger <em>tynger</em><br />
        dem, der hjælper.
      </>
    ),
    lede: "Løfte, flytte, sætte op, støtte. Hver dag millioner af gentagne bevægelser – til tider smertefulde og altid belastende. COALA er udviklet ud fra netop den virkelighed.",
    cards: [
      { stat: "94%", label: "af arbejdsbetingede sygdomme blandt plejepersonale og pårørende er muskel- og skeletbesvær (MSB)", source: "Assurance Maladie (Frankrig) 2025" },
      { stat: "4 min", label: "er den gennemsnitlige tid for en forflytning fra seng til stol med et mekanisk løftehjælpemiddel", source: "BRCS-undersøgelse 2021" },
      { stat: "×3", label: "forventet stigning i antallet af plejekrævende ældre, der bor hjemme i Frankrig, frem mod 2030", source: "IGAS-rapport (Frankrig) 2025" },
    ],
  },
  solution: {
    eyebrow: "Løsningen",
    title: (
      <>
        Et stykke tøj skabt<br />til at <em>støtte</em><br />hver bevægelse.
      </>
    ),
    lede: "COALA bæres af hjælperen. De forstærkede grebszoner gør det muligt for den, der får hjælp, at tage et fast greb med begge hænder og deltage aktivt og sikkert i bevægelsen: uden at tvinge, uden tungt udstyr og uden klargøring.",
    benefits: [
      { title: "Gør hver forflytning mere sikker", body: "Fire forstærkede grebszoner, jævnt fordelte støttepunkter og håndtag, der kan rengøres med en desinfektionsserviet." },
      { title: "Letter hjælperens belastning", body: "En fri arbejdsstilling og en kraft, der fordeles over hele kroppen: mindre belastning, mindre risiko, mere deltagelse." },
      { title: "Respekterer personen", body: "Usynligt udefra, umærkeligt for den, der bærer det, og det motiverer den, der får hjælp, til at deltage aktivt." },
      { title: "Supplerer eksisterende udstyr", body: "Det erstatter ikke en personløfter. Brug det sammen med en til forflytninger, hvor personen delvist kan deltage." },
      { title: "Virker fra første brug", body: "På på få sekunder. Ingen klargøringstid, ingen løftearm, intet tilbehør." },
      { title: "Passer til alle miljøer", body: "Hjemmet, plejehjem, hospital, hjemmepleje. Seng, stol, stående, badeværelse: ét og samme hjælpemiddel." },
    ],
    ctaOrder: "Bestil COALA",
    ctaDetails: "Se alle produktdetaljer",
  },
  how: {
    eyebrow: "Sådan virker det",
    title: (
      <>
        <em>Tag på.</em> Støt. Forflyt.
      </>
    ),
    lede: "Tre trin, som enhver hjælper – pårørende eller fagperson – kan lære på få minutter.",
    steps: [
      {
        title: "Tag på",
        body: "Hjælperen bærer COALA som sit sædvanlige arbejdstøj. Det tages hurtigt på og ligner helt almindeligt arbejdstøj, når strammerne er løsnet og håndtagene gemt væk.",
        meta: "< 10 sekunder",
        imageLabel: "01 / Tag på",
      },
      {
        title: "Støt",
        body: "Den, der får hjælp, finder og holder fast i grebszonerne ved skuldre og hofter. Lav stilling, ret ryg, stabilt greb – uden belastning af ryg eller arme.",
        meta: "Fri arbejdsstilling for arme og ryg",
        imageLabel: "02 / Støt",
      },
      {
        title: "Forflyt",
        body: "Bevægelsen er guidet. Personen kan deltage aktivt, mens hjælperen støtter uden at tvinge. Seng, stol, stående, ud af badeværelset.",
        meta: "Glidende og sikker bevægelse",
        imageLabel: "03 / Forflyt",
      },
    ],
    video: "Se videodemonstrationen (2 min, på fransk)",
  },
  journeys: {
    eyebrow: "Hvem er det til?",
    title: (
      <>
        En løsning for både pårørende<br />og <em>fagfolk</em>.
      </>
    ),
    family: {
      kicker: "01 — Pårørende",
      title: "Jeg hjælper en af mine nærmeste",
      body: "Til dig, der giver støtte hver dag. Forstå, vælg og bestil COALA, og få mest muligt ud af vores vejledninger i god praksis.",
      bullets: ["Rådgivning, før du køber", "Levering til døren, returret i 14 dage", "Videovejledninger og en kundeservice med rigtige mennesker"],
      statLabel: "plejepersonale og pårørende udstyret i hjemmet",
      ctaPrimary: "Se siden for pårørende",
      ctaOrder: "Bestil COALA",
    },
    teams: {
      kicker: "02 — Fagfolk",
      title: "Jeg udstyrer et plejeteam",
      body: "Hjemmepleje, plejehjem, hospitaler, handicaptilbud. Tilbud, videodemonstrationer på engelsk og støttet udrulning for at mindske den fysiske belastning og forebygge MSB.",
      bullets: ["Videodemonstration på engelsk, når vi har modtaget din bestilling", "Broderi og tilpasning ved gruppebestillinger", "Støtte til oplæring og opfølgning på brugen", "Særlig, slidstærk model: COALA Pro"],
      statLabel: "partnerorganisationer udstyret",
      ctaPrimary: "Anmod om tilbud",
      ctaDemo: "Aftal en demo",
    },
  },
  proof: {
    eyebrow: "Dokumentation og resultater",
    title: (
      <>
        Udviklet sammen med plejepersonale.<br /><em>Bevist</em> af dem, der bruger det.
      </>
    ),
    quote:
      "Vi bruger det til morgenopstigninger og forflytninger fra seng til stol. Inden for en uge ville mine plejemedarbejdere ikke arbejde uden, og beboerne deltager mere aktivt i bevægelsen.",
    quoteAuthor: "Emmanuelle D.",
    quoteRole: "Plejeleder, Nancy (Frankrig) · oversat fra fransk",
    stats: [
      { val: "95", unit: "%", label: "af brugerne oplevede bedre helbred og arbejdsforhold efter et år med COALA", src: "ARACT Hauts-de-France-undersøgelse 2026" },
      { val: "0", unit: "", label: "utilsigtede hændelser rapporteret i plejen af 665 patienter med COALA", src: "ARACT Hauts-de-France-undersøgelse 2026" },
      { val: "84", unit: "%", label: "af kunderne fra 2025 bestilte igen i 2026", src: "COALA-data" },
    ],
    pressTitle: "I pressen (Frankrig)",
  },
  faq: {
    eyebrow: "FAQ",
    title: (
      <>
        Dine spørgsmål,<br /><em>vores svar</em>.
      </>
    ),
    lede: "Ærlige svar uden overdrevne løfter – også på de spørgsmål, folk stiller os, efter at have set COALA online.",
    cta: "Se alle spørgsmål",
    items: [
      {
        q: "Erstatter COALA en personløfter?",
        a: "Nej. COALA er et tekstilt hjælpemiddel til assisterede manuelle forflytninger, hvor personen i det mindste delvist kan deltage i bevægelsen. Når der er behov for et mekanisk løftehjælpemiddel (en meget plejekrævende person eller en forflytning uden mulighed for deltagelse), er en personløfter fortsat nødvendig. COALA supplerer dit udstyr – det erstatter det ikke.",
      },
      {
        q: "Hvordan vælger jeg den rigtige størrelse?",
        a: "Der findes otte størrelser fra XS til 4XL, som vælges efter brystmål og højde hos den, der skal bære tøjet. En detaljeret størrelsesguide findes på produktsiden. Er du i tvivl, rådgiver vores team dig gerne, før du køber – via e-mail og helt uforpligtende.",
      },
      {
        q: "Kan tøjet vaskes?",
        a: "Ja. COALA kan maskinvaskes ved 40 °C og opfylder anbefaling r.47 fra den franske sundhedsmyndighed (HAS) om hygiejne for medicinske tekstiler. Skånsom tørring eller tørring ved lav temperatur anbefales, så tøjet forbliver behageligt og umærkeligt at have på.",
      },
      {
        q: "Kan vi få en demonstration til vores organisation?",
        a: "Ja, via videoopkald på engelsk, når vi har modtaget jeres bestilling. En COALA-repræsentant præsenterer produktet, viser jeres teams, hvordan det bruges, og besvarer deres spørgsmål. Demonstrationen er gratis.",
      },
      {
        q: "Hvornår er COALA ikke den rette løsning?",
        a: "COALA bygger på, at den, der får hjælp, deltager aktivt i forflytningen – det beskytter hjælperens helbred. Personen skal derfor kunne bære noget af sin vægt, have et rimeligt vægtforhold til hjælperen og kunne holde fast i håndtagene med begge hænder.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Klar?",
    title: (
      <>
        Hvorfor ikke <em>prøve</em><br />COALA selv?
      </>
    ),
    lede: "En af dine nærmeste, der skal støttes, et team, der skal udstyres, eller bare et spørgsmål, før du beslutter dig. Vi svarer inden for 24 timer.",
    ctaOrder: "Bestil COALA",
    ctaQuote: "Anmod om tilbud",
    ctaAdvice: "Tal med os, før du køber",
    trust: [
      { strong: "24 t", sub: "gennemsnitlig svartid" },
      { strong: "14\u00a0dage", sub: "til at returnere din bestilling" },
      { strong: "Over 1.500 pårørende og plejepersonale i Frankrig har tillid til os", sub: "", wide: true },
    ],
  },
};

export default copy;

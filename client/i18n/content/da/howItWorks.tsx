import type { HowItWorksCopy } from "../howItWorks";

const copy: HowItWorksCopy = {
  breadcrumb: {
    ariaLabel: "Brødkrumme",
    home: "Forside",
    current: "Sådan virker det",
  },
  hero: {
    eyebrow: "Brugervejledning",
    title: (
      <>
        Tag på, hjælp,<br /><em>tag af</em>.
      </>
    ),
    lede:
      "COALA aktiveres på få sekunder og deaktiveres lige så hurtigt. Ind imellem deltager den, du hjælper: Du løfter ikke længere – du støtter. Vejledningen bygger på det undervisningsmateriale, der bruges, når COALA indføres i plejeteams.",
    ctaOrder: "Bestil COALA",
    ctaProduct: "Se produktsiden",
  },
  video: {
    eyebrow: "Videodemonstration",
    title: (
      <>
        COALA-teknikken<br />i <em>virkelige situationer</em>.
      </>
    ),
    iframeTitle: "Demonstration af COALA-forflytningstøj (på fransk)",
    note: "Video på fransk",
  },
  steps: {
    eyebrow: "Vejledning",
    title: (
      <>
        Aktivér, og løsn derefter<br /><em>støtten</em>.
      </>
    ),
    lede:
      "Fem trin til at gøre dig klar, før du hjælper nogen med at flytte sig. Fem trin til at vende tilbage til almindeligt tøj, når forflytningen er gennemført.",
    phase1Label: "Fase 1: Påtagning",
    phase1: [
      { n: "01", title: "Tag tøjet på", body: "COALA tages på som almindeligt arbejdstøj: Lændebæltet er åbent og fastgjort til tøjet med burrebånd, og skulderstropperne er løse." },
      { n: "02", title: "Knap de to nederste knapper op", body: "De to nederste knapper giver adgang til lændebæltet og skulderstroppernes strammere." },
      { n: "03", title: "Stram lændebæltet", body: "Stram bæltet, og luk det med den ønskede stramning." },
      { n: "04", title: "Stram skulderstropperne", body: "Træk i den nederste strop på skulderstrammerne, indtil du når den ønskede stramning, i lukket position." },
      { n: "05", title: "Luk tøjet", body: "Knap de sidste to knapper. Støtten er aktiv: Du er klar til at hjælpe." },
    ],
    phase1Alt: "COALA-forflytningstøj åbent, så lændebæltet og skulderstroppernes strammere ses",
    phase1Caption: "Lændebælte og skulderstrammere, støtte aktiv.",
    phase2Label: "Fase 2: Aftagning",
    phase2: [
      { n: "01", title: "Knap de to nederste knapper op", body: "Den fysiske hjælp er slut: Du kan løsne støtten." },
      { n: "02", title: "Løsn skulderstramningen", body: "Løft strammerne under armene for at løsne skulderstropperne." },
      { n: "03", title: "Åbn lændebæltet", body: "Åbn bæltet for at fjerne al stramning." },
      { n: "04", title: "Gem bæltet væk", body: "Fastgør begge ender af bæltet igen på indersiden af tøjets to forstykker." },
      { n: "05", title: "Knap de to nederste knapper", body: "COALA bliver igen almindeligt tøj, som hverken du eller dine omgivelser lægger mærke til." },
    ],
    phase2Alt: "COALA-forflytningstøj med håndtagene gemt væk, igen almindeligt tøj",
    phase2Caption: "Støtten er løsnet: COALA er igen almindeligt tøj.",
    warning:
      "Tjek ved påtagning: Sørg for, at begge dele af bæltet går gennem håndtagene på indersiden af tøjet.",
  },
  situations: {
    eyebrow: "Hvornår bruges det?",
    title: (
      <>
        Når COALA<br /><em>hjælper</em> dig.
      </>
    ),
    lede:
      "Find de situationer med fysisk hjælp, hvor COALA mindsker belastningen af dine arme og din ryg og gør det lettere for den, du hjælper, at deltage.",
    imageAlt: "Fagperson iført COALA-forflytningstøj, der hjælper en ældre person hen til rollatoren",
    items: [
      "Forflytning fra siddende til stående",
      "Forflytning fra stol til toilet",
      "Omlejring i sengen og at komme op",
      "Assisteret gang",
      "Omplacering i stolen",
      "Vending i sengen",
    ],
    profilesTitle: "Hvilke patienter er det egnet til?",
    profilesIntro:
      "Kan patienten forstå instruktioner, der beder om samarbejde? Tillader den fysiske tilstand brug af COALA? Vurdér hvert tilfælde individuelt:",
    profiles: [
      "Evne til at forstå samarbejdende guidning",
      "Kvalitet af vægtbæring",
      "Vægt",
      "Mobilitet",
      "Balance",
      "Muskeltonus i overekstremiteterne",
    ],
    profilesNote:
      "Hvis du er i tvivl om, hvorvidt COALA passer til en patients situation, så spørg patientens plejeteam til råds.",
  },
  grips: {
    eyebrow: "Råd om brug",
    title: (
      <>
        Hvilke håndtag<br />du skal <em>tilbyde</em>.
      </>
    ),
    lede: "De greb, du tilbyder, afgør, hvor meget belastning der bliver på dine skuldre og din ryg.",
    imageAlt: "Nærbillede af en grebszone på skulderen af COALA-forflytningstøjet",
    caption: "Øvre grebszone, på skulderen.",
    items: [
      { title: "Krydset greb", detail: "Tilbyd ét nederste håndtag og det øverste håndtag i den modsatte side. Den øverste hånd kan placeres i bevægelsens retning for at hjælpe med at lede patientens blik." },
      { title: "Begge nederste håndtag", detail: "Når du tilbyder begge nederste håndtag, mindskes belastningen af dine skuldre og din ryg yderligere." },
      { title: "Aldrig begge øverste håndtag", detail: "Tilbyd ikke begge øverste håndtag på samme tid: Det belaster dine skuldre og din ryg." },
      { title: "Lad ikke håndtagene hænge fremme", detail: "Gem håndtagene væk mellem brugene: De kan hænge fast i noget eller blive grebet uventet." },
      { title: "Løsn støtten, når den ikke bruges", detail: "Løsn bæltet og skulderstropperne, når du ikke yder fysisk hjælp, fx ved hjælp til måltider eller i en pause." },
    ],
  },
  verbal: {
    eyebrow: "Verbal guidning",
    title: (
      <>
        Ordene, der<br /><em>engagerer</em> patienten.
      </>
    ),
    lede:
      "Guid patienten så tydeligt som muligt, så I bevæger jer sammen. Gentag og omformulér gerne: Hvert par af hjælper og patient finder sine egne signaler.",
    imageAlt: "Fagperson, der guider en patient hen til grebszonerne på COALA-forflytningstøjet",
    caption: "Øjenkontakten bevares under hele manøvren.",
    evaluationLabel: "Vurdering af evnen til at samarbejde",
    evaluation: ["»Kan du tage fat i det her håndtag?«", "»Føler du dig stærk?«"],
    sequenceLabel: "Forflytningsforløb",
    sequence: [
      "»Tag fat i de her håndtag«",
      "»Knug hænderne godt sammen«",
      "»Hold godt fast. Føler du dig stærk?«",
      "»Sæt fødderne så langt tilbage, som du kan«",
      "»Læn dig frem«",
      "»Træk håndtagene ind mod dig, og skub fra med benene«",
    ],
  },
  posture: {
    eyebrow: "Hjælperens arbejdsstilling",
    title: (
      <>
        Stå i en <em>stærk</em> stilling,<br />uden at løfte.
      </>
    ),
    lede:
      "COALA belaster leddene i dine arme og din ryg mindre – forudsat at du placerer dig korrekt.",
    items: [
      { title: "Ret ryg", detail: "Hold ryggen ret, mens du guider patienten til at sætte fødderne tilbage og læne sig ind mod dig." },
      { title: "Bøjede hofter og knæ", detail: "Bøj let i hofter og knæ for effektivt at støtte patientens bevægelse." },
      { title: "Fødderne fra hinanden", detail: "Stå med fødderne fra hinanden for at øge din stabilitet." },
      { title: "Udfald frem / tilbage", detail: "Placér den ene fod mellem patientens fødder, og brug udfaldsbevægelser til at følge forflytningen." },
    ],
  },
  care: {
    eyebrow: "Pleje",
    title: (
      <>
        <em>Vaskeanvisning</em>.
      </>
    ),
    items: [
      "Bomuldsvask ved 40 °C.",
      "Luk bæltet, ført gennem håndtagene, før tøjet lægges i maskinen.",
      "Vælg et skåneprogram eller tørring ved lav temperatur.",
    ],
    imageAlt: "COALA-forflytningstøj lagt sammen, klar til vask",
    caption: "Bæltet lukket og håndtagene gemt væk før maskinvask.",
  },
  deployment: {
    eyebrow: "Indførelse i jeres organisation",
    title: (
      <>
        De fem nøgler<br />til <em>succes</em>.
      </>
    ),
    factors: [
      "Tilbyd COALA til frivillige fagpersoner",
      "Brug de rigtige guidende bevægelser",
      "Guid patienterne hen til de nederste håndtag",
      "Løsn støtten, og gem håndtagene væk",
      "Aflær vanen med at løfte",
    ],
    staffLabel: "Fagpersoner (oversat fra fransk)",
    staffQuotes: [
      "»Mindre træt ved dagens slutning«",
      "»Mere sikkert, jeg har hænderne fri«",
      "»Nemt at bruge«",
      "»Man vænner sig hurtigt til det«",
    ],
    patientLabel: "Patienter (oversat fra fransk)",
    patientQuotes: [
      "»Vi er ansigt til ansigt, øje til øje«",
      "»Mere aktiv deltagelse«",
      "»Bedre greb«",
      "»En følelse af tryghed«",
    ],
  },
  cta: {
    title: "Klar til at arbejde med COALA?",
    body: "Bestil direkte, eller anmod om et tilbud til din organisation.",
    order: "Bestil COALA",
    quote: "Anmod om tilbud",
    cards: [
      { eyebrow: "Tøjet i detaljer", title: "Hele produktsiden" },
      { eyebrow: "Hvem bruger det", title: "Udtalelser og resultater" },
      { eyebrow: "Spørgsmål", title: "Hele FAQ'en" },
    ],
  },
};

export default copy;

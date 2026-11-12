import type { ProductCopy } from "../product";

const copy: ProductCopy = {
  buy: {
    viewLabels: [
      "COALA-forflytningstøj set forfra med de fire grebszoner foldet ud",
      "COALA-forflytningstøj set i trekvartprofil med de fire grebszoner foldet ud",
      "COALA-forflytningstøj med håndtagene gemt væk, set forfra",
      "Den indvendige exoskeletstruktur i COALA-forflytningstøjet",
      "COALA-forflytningstøj båret af en plejemedarbejder med grebszonerne foldet ud",
      "COALA båret med håndtagene gemt væk – ligner almindeligt arbejdstøj",
      "Nærbillede af en grebszone ved skulderen",
      "Plejemedarbejder iført COALA-forflytningstøj, der støtter en patient",
    ],
    refPrefix: "COALA · ref. CL-B137-BLANC-",
    thumbsAria: "Produktbilleder",
    eyebrow: "Forflytningstøj",
    title: (
      <>
        <em>COALA</em>-forflytningstøjet
      </>
    ),
    lede:
      "Et stykke tekstiltøj udviklet til forflytninger. Fire forstærkede grebszoner og en exoskeletstruktur, der beskytter hjælperen. COALA hverken ses eller mærkes – men beskytter dig, hver gang du har brug for det.",
    price: "fra 129 €",
    priceMeta: "inkl. moms",
    sizeLabel: "Størrelse",
    sizeGuide: "Størrelsesguide ↗",
    sizeAria: "Vælg en størrelse",
    colourLabel: "Farve · Hvid",
    colourNote: "COALA fås i øjeblikket kun i hvid.",
    ctaOrder: "Bestil COALA",
    ctaQuote: "Anmod om tilbud",
    reassuranceAria: "Vores løfter",
    reassurance: [
      "Gratis returnering inden for 14 dage i hele EU",
      "Patenteret fransk innovation",
      "Kan maskinvaskes ved 40 °C",
    ],
  },

  features: {
    eyebrow: "Udviklet af plejepersonale, til plejepersonale",
    title: (
      <>
        Fire tekniske valg,
        <br />
        ét eneste <em>formål</em>.
      </>
    ),
    items: [
      {
        tag: "01 · Firehåndsgreb",
        title: "En fælles bevægelse: Personen holder fast",
        body: "COALA bæres af hjælperen, og den, der får hjælp, holder i håndtagene. Hjælperen guider bevægelsen med sin kropsvægt i stedet for at løfte, så forflytningen bliver en fælles indsats. Fire grebszoner med håndtag placeret ved skuldre, sider og hofter.",
        label: "De fire forstærkede grebszoner på COALA-forflytningstøjet",
      },
      {
        tag: "02 · Arbejdstøj",
        title: "Kun 200 g ekstra, ingen klargøringstid",
        body: "COALA tages på som almindeligt arbejdstøj på få sekunder. Under forflytningen er der ikke længere belastning af skuldre og lænd, ingen mekaniske spænder og ingen lang oplæring. Klar med det samme, uanset hvor du er.",
        label: "COALA-forflytningstøj med håndtagene gemt væk – ligner helt almindeligt arbejdstøj",
      },
      {
        tag: "03 · Støtte, der kan slås fra",
        title: "Løsnet på 5 sekunder",
        body: "Når forflytningerne er overstået, løsner hjælperen støttezonerne og gemmer grebene væk med det samme. Når støtten er løsnet, er der slet ingen kompression: COALA er umærkeligt for den, der bærer det, og usynligt for andre.",
        label: "Den indvendige sele i COALA-forflytningstøjet, der løsnes på fem sekunder",
      },
      {
        tag: "04 · Støtte hele vejen rundt",
        title: "Hjælper hjælperen uden at erstatte den menneskelige kontakt",
        body: "COALA støtter hjælperens bevægelse uden at ændre måden, plejen udføres på. Teknisk polyesterstof 215 g/m², kan vaskes ved 40 °C, størrelser XS til 4XL.",
        label: "Plejemedarbejder iført COALA, der følger en ældre person hen til rollatoren",
      },
    ],
  },

  range: {
    eyebrow: "Sortimentet",
    title: (
      <>
        Tre modeller, én og samme <em>bevægelse</em>.
      </>
    ),
    lede:
      "Selen og stoffet varierer efter, hvor intensivt tøjet bruges. Alle modeller fås i størrelserne XS til 4XL (fransk 34 til 64), kan maskinvaskes ved 40 °C og opfylder anbefaling R.47 fra den franske sundhedsmyndighed (HAS).",
    badge: "Mest populær",
    imgAlt: (name) => `${name}-forflytningstøj i brug`,
    vat: "inkl. moms",
    harnessLabel: "Sele",
    fabricLabel: "Stof",
    supportLabel: "Støtte",
    cta: "Bestil COALA",
    models: [
      { audience: "Pårørende", harness: "1 mm", fabric: "50 % bomuld · 50 % polyester", support: "Brugervejledning medfølger" },
      { audience: "Plejepersonale og faste hjælpere", harness: "1 mm, bomuldsforet", fabric: "50 % bomuld · 50 % polyester", support: "Brugervejledning medfølger" },
      { audience: "Plejepersonale", harness: "2 mm, CoolTex®-foret", fabric: "Teknisk CoolTex®-stof", support: "Oplæring og opfølgning" },
    ],
    noteBefore: "Selen vejer ca. 200 g og kan foldes ud på omkring ti sekunder. Hvis du udstyrer en organisation, så ",
    noteLink: "anmod om tilbud",
    noteAfter: " i stedet for at afgive en enkeltbestilling.",
  },

  go: {
    badge: "Kommer snart",
    subtitle: (
      <>
        Vesten, der beskytter dit helbred, så du bedre kan beskytte <em>andre</em>.
      </>
    ),
    priceValue: "Pris efter forespørgsel",
    priceCta: "Forespørg om pris",
    lede:
      "COALA Go er udviklet sammen med og til ambulancepersonale og bygger COALA-systemet ind i en refleksvest: en indvendig sele og udvendige gribehåndtag, der mindsker belastningen af ryggen og begrænser risikoen for skader.",
    photoAlt: "Ambulancemedarbejder iført COALA Go-vesten",
    benefits: [
      { title: "Mindsker belastningen af ryggen", detail: "COALA-systemet overfører kræfterne fra skuldrene til bækkenet og lænden." },
      { title: "Begrænser risikoen for MSB", detail: "Udvendige gribehåndtag giver et bedre greb og mindre spænding." },
      { title: "Støtte og sikkerhed", detail: "Et integreret system – diskret og altid til rådighed under vesten." },
      { title: "Komfort i hverdagen", detail: "Ergonomisk snit, åndbare zoner og mesh-for, der følger dine bevægelser." },
    ],
    specs: [
      { label: "COALA-system", value: "Skjult indvendig sele · gribehåndtag, der kan trækkes ind" },
      { label: "Synlighed", value: "Refleksstriber · 360°" },
      { label: "Lommer", value: "Brystlommer med lynlås · store nederste lommer med lynlås" },
      { label: "Materialer", value: "100 % slidstærk, vandafvisende polyester · åndbart mesh-for" },
      { label: "Farve", value: "Marineblå" },
      { label: "Størrelser", value: "XS til 4XL · lige unisex-snit" },
      { label: "Vedligeholdelse", value: "Kan maskinvaskes ved 60 °C" },
    ],
    usagesTitle: "Til enhver udrykning",
    usages: [
      "Patienthåndtering",
      "Transport på båre",
      "Løft og forflytninger",
      "Akut hjælp i hjemmet",
      "Nødsituationer",
    ],
    note:
      "COALA Go kan endnu ikke købes online. Kontakt os for at høre, hvornår den bliver tilgængelig, og for at få et tilbud tilpasset din tjeneste.",
  },

  compare: {
    eyebrow: "Hvorfor ikke en maskine eller almindeligt arbejdstøj?",
    title: (
      <>
        Forflytninger fortjener
        <br />
        deres eget <em>særlige hjælpemiddel</em>.
      </>
    ),
    lede:
      "Vi har sammenlignet COALA med de to mest udbredte metoder i praksis. Sådan klarer de sig i den virkelige hverdag.",
    coalaSub: "Forflytningstøj",
    machineBrand: "Personløfter",
    machineSub: "Mekanisk løftehjælpemiddel",
    classicBrand: "Almindeligt arbejdstøj",
    classicSub: "Uniform eller stoftøj",
    rows: [
      {
        label: "Forflytningsbevægelse",
        coala: "Den, der får hjælp, deltager aktivt, mens hjælperen guider forflytningen med sin kropsvægt – ret ryg og aktiveret core, uden belastning af skuldre eller arme.",
        machine: "Foroverbøjet ryg og arme, når sejlet lægges på.\nIngen forflytningsbevægelse.",
        classic: "Manuel forflytning uden hjælpemidler.\nByrden bæres med bøjet ryg og trækkende arme.",
      },
      {
        label: "Værdighed",
        coala: "Den, der får hjælp, deltager aktivt, hvilket gavner hjælperens helbred.\nEt mere ligeværdigt forhold mellem hjælper og den, der får hjælp.\nØjenkontakten bevares.",
        machine: "Maskinen gør alt arbejdet under forflytningen.\nIngen menneskelig kontakt.\nAfhængighed af en maskine kan være svær at acceptere.",
        classic: "Menneskelig kontakt, der udsætter plejemedarbejderen for risiko.\nIngen øjenkontakt.",
      },
      {
        label: "Belastning af ryg, skuldre og arme",
        coala: "Slut med at bøje ryggen og med aktiv kraftanstrengelse i armene.\nRet ryg, aktiveret core og frie hænder.",
        machine: "Ingen kraftkrævende bevægelser.\nSejl skal lægges på og tages af, og maskinen skal manøvreres.",
        classic: "Forflytningsbevægelser, kraftanstrengelser og belastning, der giver lændesmerter og MSB i skuldre og arme.",
      },
      {
        label: "Tid pr. forflytning",
        coala: "35 sekunder til at rejse en person op og sætte vedkommende i en stol",
        machine: "3 minutter og 40 sekunder til at rejse en person op og sætte vedkommende i en stol",
        classic: "25 sekunder til at rejse en person op og sætte vedkommende i en stol",
      },
      {
        label: "Design",
        coala: "Patenteret fransk innovation",
        machine: "Designet og produceret globalt",
        classic: "Produceret globalt",
      },
      {
        label: "Pris over 3 år (5 hjælpere)",
        coala: "~1650 € · engangsudgift",
        machine: "~10 000 €",
        classic: "~640 € · forbrugsvarer",
      },
    ],
  },

  specs: {
    eyebrow: "Tekniske specifikationer",
    title: "Alt det, du har brug for – intet overflødigt.",
    items: [
      { label: "Materiale", value: "Teknisk polyester 215 g/m² · forstærket for" },
      { label: "Størrelser", value: "XS · S · M · L · XL · XXL · 3XL · 4XL (fransk 34 til 64)" },
      { label: "Farve", value: "Hvid" },
      { label: "Vask", value: "Maskinvask ved 40 °C · tørretumbling på skånsomt program" },
      { label: "Design", value: "Patenteret fransk innovation · Connect Link" },
    ],
    download: "Download det tekniske datablad (PDF)",
    guideEyebrow: "Størrelsesguide",
    guideTitle: "Sådan vælger du den rigtige størrelse.",
    guideIntro: (
      <>
        COALA bæres af <em>hjælperen eller plejemedarbejderen</em>, så tag mål af den person, der
        skal bære tøjet. Hvis du er mellem to størrelser, så vælg den største.
      </>
    ),
    toggleAria: "Størrelsestabel",
    women: "Kvinder",
    men: "Mænd",
    tableAria: (morpho) => `COALA-størrelsestabel: ${morpho}`,
    colSize: "Størrelse",
    colConfection: "Fransk størrelse",
    colChest: "Bryst",
    colWaist: "Talje",
    point: "Gradering",
    note: "Kropsmål i centimeter.",
  },

  quote: {
    text: "Jeg har passet min mand i fire år. Første gang, jeg brugte COALA til at flytte ham fra sengen til lænestolen, gik det op for mig, at jeg ikke behøvede at blive fysioterapeut. Jeg havde bare brug for et hjælpemiddel, der var udviklet til min egen krop.",
    name: "Hélène, 67 år",
    role: "Pårørende · Nantes (oversat fra fransk)",
  },

  faq: {
    eyebrow: "Spørgsmål om tøjet",
    title: (
      <>
        De spørgsmål,
        <br />
        vi oftest
        <br />
        <em>bliver stillet</em>.
      </>
    ),
    cta: "Se alle spørgsmål",
    items: [
      {
        q: "Er COALA egnet til min nærtstående?",
        a: "COALA bæres af dig som hjælper og egner sig til at hjælpe alle, der har brug for støtte til forflytninger og kan holde i håndtagene – uanset om de er helt eller delvist mobile. Tøjet fås i størrelserne XS til 4XL, så det passer til hjælperen. Ved særlige tilstande (fremskredne tryksår, nylig operation) bør du spørge plejepersonalet til råds.",
      },
      {
        q: "Hvor længe holder tøjet?",
        a: "Ved brug i hjemmet (1 til 2 forflytninger om dagen): 4 til 6 år. Ved professionel brug (10 til 15 forflytninger om dagen): 18 til 24 måneder. Stoffet kan maskinvaskes ved 40 °C og tørretumbles på et skånsomt program.",
      },
      {
        q: "Kan jeg prøve det, før jeg køber?",
        a: "Vi tilbyder ikke gratis udlån – heller ikke til fagfolk. Produktet kan returneres inden for 14 dage, hvis det ikke har været brugt og stadig er som nyt, med forbehold for kontrol ved modtagelsen. Når vi har modtaget din bestilling, kan vi give dig en demonstration via videoopkald på engelsk.",
      },
      {
        q: "Hvordan vasker jeg tøjet?",
        a: "Maskinvask ved 40 °C med almindeligt vaskemiddel, og tørretumbl på et skånsomt program. Brug ikke skyllemiddel (det svækker sømmene). Brug ikke klorblegemiddel.",
      },
    ],
  },

  cross: [
    { eyebrow: "Næste skridt", title: "Hvordan fungerer det i praksis?" },
    { eyebrow: "Skal du udstyre et plejeteam?", title: "Anmod om tilbud" },
    { eyebrow: "Fra praksis", title: "Læs udtalelserne" },
  ],
};

export default copy;

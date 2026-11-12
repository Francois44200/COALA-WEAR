import type { ProductCopy } from "../product";

const copy: ProductCopy = {
  buy: {
    viewLabels: [
      "COALA-forflytningsplagg sett forfra, med fire grepssoner fremme",
      "COALA-forflytningsplagg sett skrått forfra, med fire grepssoner fremme",
      "COALA-forflytningsplagg med håndtakene gjemt bort, sett forfra",
      "Den indre eksoskjelettstrukturen i COALA-forflytningsplagget",
      "COALA-forflytningsplagg brukt av helsepersonell, med grepssonene fremme",
      "COALA med håndtakene gjemt bort, ser ut som et vanlig arbeidsplagg",
      "Nærbilde av en grepssone ved skulderen",
      "Helsepersonell som støtter en pasient iført COALA-forflytningsplagget",
    ],
    refPrefix: "COALA · ref. CL-B137-BLANC-",
    thumbsAria: "Produktbilder",
    eyebrow: "Forflytningsplagg",
    title: (
      <>
        <em>COALA</em>-forflytningsplagget
      </>
    ),
    lede:
      "Et tekstilplagg utviklet for forflytninger. Fire forsterkede grepssoner og en eksoskjelettstruktur som beskytter omsorgspersonen. COALA verken synes eller merkes, men beskytter deg når du trenger det.",
    price: "fra 129 €",
    priceMeta: "inkl. mva.",
    sizeLabel: "Størrelse",
    sizeGuide: "Størrelsesguide ↗",
    sizeAria: "Velg en størrelse",
    colourLabel: "Farge · Hvit",
    colourNote: "COALA finnes foreløpig bare i hvitt.",
    ctaOrder: "Bestill COALA",
    ctaQuote: "Be om tilbud",
    reassuranceAria: "Våre løfter",
    reassurance: [
      "Gratis retur innen 14 dager i hele EU",
      "Patentert fransk innovasjon",
      "Kan maskinvaskes på 40 °C",
    ],
  },

  features: {
    eyebrow: "Utviklet av omsorgspersoner, for omsorgspersoner",
    title: (
      <>
        Fire tekniske valg,
        <br />
        ett eneste <em>formål</em>.
      </>
    ),
    items: [
      {
        tag: "01 · Fire hender i samspill",
        title: "En felles bevegelse: personen holder seg fast",
        body: "COALA brukes av omsorgspersonen, og den som får hjelp, holder i håndtakene. Omsorgspersonen styrer forflytningen med kroppsvekten i stedet for å løfte, slik at bevegelsen blir en felles innsats. Fire grepssoner, med håndtak ved skuldrene, sidene og hoftene.",
        label: "De fire forsterkede grepssonene på COALA-forflytningsplagget",
      },
      {
        tag: "02 · Arbeidsplagg",
        title: "Bare 200 g ekstra, ingen klargjøring",
        body: "COALA tas på som et vanlig arbeidsplagg, på få sekunder. Under forflytningen slipper du belastning på skuldre og korsrygg, mekaniske fester og lang opplæring. Klart til bruk med en gang, uansett hvor du er.",
        label: "COALA-forflytningsplagg med håndtakene gjemt bort, ser ut akkurat som et vanlig arbeidsplagg",
      },
      {
        tag: "03 · Støtte du kan slå av",
        title: "Løsnet på 5 sekunder",
        body: "Når forflytningene er gjort, løsner omsorgspersonen støttesonene og gjemmer håndtakene bort med en gang. Når plagget er løsnet, gir det ingen kompresjon: COALA er umerkelig for den som har det på, og usynlig for andre.",
        label: "Den indre selen i COALA-forflytningsplagget, løsnet på fem sekunder",
      },
      {
        tag: "04 · Allsidig hjelp",
        title: "Hjelper omsorgspersonen uten å erstatte den menneskelige kontakten",
        body: "COALA støtter omsorgspersonens bevegelser uten å endre måten omsorgen gis på. Teknisk polyesterstoff 215 g/m², vaskbart på 40 °C, størrelser fra XS til 4XL.",
        label: "Helsepersonell iført COALA som følger en eldre person bort til rullatoren",
      },
    ],
  },

  range: {
    eyebrow: "Produktutvalget",
    title: (
      <>
        Tre modeller, én og samme <em>bevegelse</em>.
      </>
    ),
    lede:
      "Selen og stoffet varierer etter hvor mye plagget brukes. Alle modellene finnes i størrelse XS til 4XL (fransk 34 til 64), kan maskinvaskes på 40 °C og er i samsvar med anbefaling R.47 fra den franske helsemyndigheten HAS.",
    badge: "Mest populær",
    imgAlt: (name) => `${name}-forflytningsplagg i bruk`,
    vat: "inkl. mva.",
    harnessLabel: "Sele",
    fabricLabel: "Stoff",
    supportLabel: "Oppfølging",
    cta: "Bestill COALA",
    models: [
      { audience: "Pårørende", harness: "1 mm", fabric: "50 % bomull · 50 % polyester", support: "Bruksanvisning følger med" },
      { audience: "Helsepersonell og omsorgspersoner med jevnlig bruk", harness: "1 mm, bomullsfôret", fabric: "50 % bomull · 50 % polyester", support: "Bruksanvisning følger med" },
      { audience: "Helsepersonell", harness: "2 mm, CoolTex®-fôret", fabric: "Teknisk CoolTex®-stoff", support: "Opplæring og oppfølging" },
    ],
    noteBefore: "Selen veier rundt 200 g og kan tas i bruk på omtrent ti sekunder. Skal du utstyre en virksomhet, kan du ",
    noteLink: "be om tilbud",
    noteAfter: " i stedet for å legge inn en enkeltbestilling.",
  },

  go: {
    badge: "Kommer snart",
    subtitle: (
      <>
        Vesten som beskytter helsen din, så du bedre kan beskytte <em>andre</em>.
      </>
    ),
    priceValue: "Pris på forespørsel",
    priceCta: "Be om pris",
    lede:
      "COALA Go er utviklet sammen med og for ambulansepersonell og bygger COALA-systemet inn i en refleksvest: en indre sele og utvendige håndtak som reduserer belastningen på ryggen og begrenser skaderisikoen.",
    photoAlt: "Ambulansearbeider iført COALA Go-vesten",
    benefits: [
      { title: "Mindre belastning på ryggen", detail: "COALA-systemet overfører kreftene fra skuldrene til bekkenet og korsryggen." },
      { title: "Lavere risiko for muskel- og skjelettplager", detail: "Utvendige håndtak for bedre grep og mindre spenning." },
      { title: "Støtte og sikkerhet", detail: "Et integrert system, diskret og alltid tilgjengelig under vesten." },
      { title: "Komfort hver dag", detail: "Ergonomisk snitt, pustende soner og et nettingfôr som følger bevegelsene dine." },
    ],
    specs: [
      { label: "COALA-systemet", value: "Skjult indre sele · uttrekkbare håndtak" },
      { label: "Synlighet", value: "Refleksstriper · 360°" },
      { label: "Lommer", value: "Brystlommer med glidelås · store nedre lommer med glidelås" },
      { label: "Materialer", value: "100 % slitesterk, vannavvisende polyester · pustende nettingfôr" },
      { label: "Farge", value: "Marineblå" },
      { label: "Størrelser", value: "XS til 4XL · rett unisex-snitt" },
      { label: "Vedlikehold", value: "Kan maskinvaskes på 60 °C" },
    ],
    usagesTitle: "For hvert oppdrag",
    usages: [
      "Pasienthåndtering",
      "Båretransport",
      "Løft og forflytninger",
      "Akuttbehandling i hjemmet",
      "Nødsituasjoner",
    ],
    note:
      "COALA Go kan ennå ikke kjøpes på nett. Kontakt oss for å få beskjed når den blir tilgjengelig, og for å få et tilbud tilpasset tjenesten din.",
  },

  compare: {
    eyebrow: "Hvorfor ikke en maskin eller et vanlig arbeidsplagg?",
    title: (
      <>
        Forflytninger fortjener
        <br />
        sitt eget <em>verktøy</em>.
      </>
    ),
    lede:
      "Vi har sammenlignet COALA med de to vanligste løsningene i praksis. Slik står de seg i den virkelige hverdagen.",
    coalaSub: "Forflytningsplagg",
    machineBrand: "Pasientløfter",
    machineSub: "Mekanisk løftehjelpemiddel",
    classicBrand: "Vanlig arbeidsplagg",
    classicSub: "Medisinsk eller i stoff",
    rows: [
      {
        label: "Forflytningsbevegelse",
        coala: "Den som får hjelp, deltar aktivt, mens omsorgspersonen styrer forflytningen med kroppsvekten, med rett rygg og aktivert kjernemuskulatur, uten belastning på skuldre eller armer.",
        machine: "Bøyd rygg og armer når seilet legges på.\nIngen forflytningsbevegelse.",
        classic: "Manuell forflytning uten hjelpemiddel.\nBelastningen bæres med bøyd rygg og trekkende armer.",
      },
      {
        label: "Ivaretakelse av verdighet",
        coala: "Den som får hjelp, deltar aktivt, noe som er bra for omsorgspersonens helse.\nEt mer likeverdig forhold mellom omsorgsperson og den som får omsorg.\nØyekontakten opprettholdes.",
        machine: "Maskinen gjør hele jobben under forflytningen.\nIngen menneskelig kontakt.\nAvhengighet av en maskin kan være vanskelig å akseptere.",
        classic: "Menneskelig kontakt som utsetter helsepersonellet for risiko.\nIngen øyekontakt.",
      },
      {
        label: "Belastning på rygg, skuldre og armer",
        coala: "Ingen bøying av ryggen eller aktiv innsats med armene.\nRett rygg, aktivert kjernemuskulatur og frie hender.",
        machine: "Ingen kraftkrevende bevegelser.\nPålegging og fjerning av seil, manøvrering av maskinen.",
        classic: "Forflytningsbevegelser, innsats og belastning som gir korsryggsmerter og muskel- og skjelettplager i skuldre og armer.",
      },
      {
        label: "Tid per forflytning",
        coala: "35 sekunder for å reise noen opp og sette dem i en stol",
        machine: "3 minutter og 40 sekunder for å reise noen opp og sette dem i en stol",
        classic: "25 sekunder for å reise noen opp og sette dem i en stol",
      },
      {
        label: "Utvikling",
        coala: "Patentert fransk innovasjon",
        machine: "Utviklet og produsert globalt",
        classic: "Produsert globalt",
      },
      {
        label: "Kostnad over 3 år (5 omsorgspersoner)",
        coala: "~1650 € · engangskostnad",
        machine: "~10 000 €",
        classic: "~640 € · forbruksvarer",
      },
    ],
  },

  specs: {
    eyebrow: "Tekniske spesifikasjoner",
    title: "Alt du trenger, ingenting du ikke trenger.",
    items: [
      { label: "Sammensetning", value: "Teknisk polyester 215 g/m² · forsterket fôr" },
      { label: "Tilgjengelige størrelser", value: "XS · S · M · L · XL · XXL · 3XL · 4XL (fransk 34 til 64)" },
      { label: "Farge", value: "Hvit" },
      { label: "Vask", value: "Maskinvask på 40 °C · trommeltørking på skåneprogram" },
      { label: "Utvikling", value: "Patentert fransk innovasjon · Connect Link" },
    ],
    download: "Last ned teknisk datablad (PDF)",
    guideEyebrow: "Størrelsesguide",
    guideTitle: "Slik velger du riktig størrelse.",
    guideIntro: (
      <>
        COALA brukes av <em>omsorgspersonen eller helsepersonellet</em>, så mål den som skal
        ha på plagget. Er du mellom to størrelser, velger du den største.
      </>
    ),
    toggleAria: "Størrelsestabell",
    women: "Dame",
    men: "Herre",
    tableAria: (morpho) => `COALA-størrelsestabell: ${morpho}`,
    colSize: "Størrelse",
    colConfection: "Fransk størrelse",
    colChest: "Bryst",
    colWaist: "Midje",
    point: "Gradering",
    note: "Kroppsmål i centimeter.",
  },

  quote: {
    text: "Jeg har tatt meg av mannen min i fire år. Første gang jeg brukte COALA for å flytte ham fra sengen til lenestolen, skjønte jeg at jeg ikke trengte å bli fysioterapeut. Jeg trengte bare et verktøy laget for min egen kropp.",
    name: "Hélène, 67",
    role: "Pårørende · Nantes (oversatt fra fransk)",
  },

  faq: {
    eyebrow: "Spørsmål om plagget",
    title: (
      <>
        Spørsmålene
        <br />
        vi får
        <br />
        <em>oftest</em>.
      </>
    ),
    cta: "Se alle spørsmål",
    items: [
      {
        q: "Passer COALA for min nærmeste?",
        a: "COALA brukes av deg som omsorgsperson og passer når du hjelper noen som trenger assistanse ved forflytninger og kan holde i håndtakene, enten personen er helt eller delvis mobil. Plagget finnes i størrelse XS til 4XL, tilpasset omsorgspersonen. Ved spesielle tilstander (langt fremskredne trykksår, nylig operasjon) bør du spørre helsepersonellet til råds.",
      },
      {
        q: "Hvor lenge varer et plagg?",
        a: "Ved bruk i hjemmet (1 til 2 forflytninger om dagen): 4 til 6 år. Ved profesjonell bruk (10 til 15 forflytninger om dagen): 18 til 24 måneder. Stoffet kan maskinvaskes på 40 °C og trommeltørkes på skåneprogram.",
      },
      {
        q: "Kan jeg prøve før jeg kjøper?",
        a: "Vi tilbyr ikke gratis utlån, heller ikke til fagfolk. Produktet kan returneres innen 14 dager hvis det ikke er brukt og fortsatt er som nytt, med forbehold om kontroll ved retur. Når bestillingen din er mottatt, kan vi gi deg en demonstrasjon på videosamtale, på engelsk.",
      },
      {
        q: "Hvordan vasker jeg plagget?",
        a: "Maskinvask på 40 °C med vanlig vaskemiddel og trommeltørk på skåneprogram. Ikke bruk tøymykner (det svekker sømmene). Ikke bruk klorblekemiddel.",
      },
    ],
  },

  cross: [
    { eyebrow: "Neste steg", title: "Hvordan fungerer det i praksis?" },
    { eyebrow: "Skal du utstyre et pleieteam?", title: "Be om tilbud" },
    { eyebrow: "Fra praksis", title: "Les erfaringene" },
  ],
};

export default copy;

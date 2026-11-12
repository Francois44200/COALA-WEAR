import type { FamilyCopy } from "../family";

const copy: FamilyCopy = {
  hero: {
    eyebrow: "For pårørende · Utviklet for deg som hjelper en av dine nærmeste",
    title: (
      <>
        Jeg hjelper en av mine nærmeste.<br /><em>COALA hjelper meg.</em>
      </>
    ),
    lede: "Hver dag hjelper du din nærmeste med å flytte seg fra ett sted til et annet. COALA støtter hver forflytning, så belastningen på ryggen din blir mindre, bevegelsen tryggere og verdigheten ivaretatt.",
    ctaOrder: "Bestill COALA",
    ctaAdvice: "Snakk med oss før du kjøper",
    ctaHow: "Se hvordan det fungerer",
    trust: ["Retur innen 14 dager", "Kundeservice med ekte mennesker", "Videoveiledninger følger med"],
    imageAlt: "Pårørende iført COALA-forflytningsplagget under en forflytning",
    cardTop: {
      eyebrow: "Beskytter ryggen din",
      claim: "Slutt på å bøye ryggen for å løfte",
      desc: "du bærer ikke lenger, du støtter",
    },
    cardBottom: { eyebrow: "Hver dag", pills: ["Seng", "Stol", "Bad"] },
  },
  benefits: {
    eyebrow: "Hvorfor COALA?",
    title: (
      <>
        En løsning utviklet<br />for <em>pårørende</em>.
      </>
    ),
    items: [
      { title: "Gjør bevegelsen tryggere", desc: "Forsterkede grep, jevnt fordelte støttepunkter, sklisikkert." },
      { title: "Respekterer personen", desc: "Mykt stoff, verdig i bruk, og din nærmeste beholder klærne på under hele forflytningen." },
      { title: "Beskytter ryggen din", desc: "Slutt på å bøye ryggen for å løfte, slutt på belastning på skuldre og armer." },
      { title: "Fremmer selvstendighet", desc: "Din nærmeste kan delta aktivt i bevegelsen." },
    ],
  },
  steps: {
    eyebrow: "Hvordan fungerer det?",
    title: (
      <>
        Tre enkle trinn<br />for en <em>trygg</em> forflytning.
      </>
    ),
    items: [
      { title: "Ta på", desc: "Du har på deg COALA som et vanlig arbeidsplagg. Det tas på i løpet av sekunder." },
      { title: "Hold i grepssonene", desc: "Din nærmeste holder i de forsterkede håndtakene (skuldre, midje, hofter). Du holder deg lavt, med rett rygg." },
      { title: "Forflytt", desc: "Styr bevegelsen uten å bruke makt. Seng, stol, ut av badet: bevegelsen går jevnt." },
    ],
    noteEyebrow: "Dette endrer COALA",
    changes: [
      ["Rygg", "Slutt på å bøye ryggen for å løfte."],
      ["Armer", "Slutt på belastning på skuldre og armer."],
      ["Sammen", "Din nærmeste deltar: du bærer ikke lenger, du støtter."],
    ],
    guideLink: "Se bruksanvisningen i 7 trinn",
  },
  product: {
    eyebrow: "Produktet",
    title: (
      <>
        Et enkelt plagg,<br /><em>solid</em> og vaskbart.
      </>
    ),
    specsTitle: "Spesifikasjoner",
    specs: [
      "Teknisk polyester, 215 g/m²",
      "4 forsterkede grepssoner",
      "Størrelser fra XS til 4XL",
      "Vaskbart på 40 °C · skånsom tørking",
      "Patentert fransk innovasjon",
    ],
    commitmentsTitle: "Våre løfter",
    commitments: [
      "Retur innen 14 dager på ubrukte produkter",
      "Kundeservice med ekte mennesker",
      "Videoveiledninger følger med",
    ],
  },
  faq: {
    eyebrow: "Spørsmål fra pårørende",
    title: (
      <>
        Det <em>familier</em><br />spør oss om.
      </>
    ),
    cta: "Se alle spørsmål",
    items: [
      {
        q: "Passer COALA for min nærmeste?",
        a: "COALA passer for de fleste som trenger hjelp ved forflytninger og kan delta i det minste delvis i bevegelsen ved å holde i grepene med begge hender. Plagget brukes av deg som omsorgsperson og finnes i størrelse XS til 4XL. Ved spesielle tilstander (langt fremskredne trykksår, nylig operasjon) bør du spørre helsepersonellet til råds.",
      },
      {
        q: "Hvor lenge varer plagget?",
        a: "Ved bruk i hjemmet (1 til 2 forflytninger om dagen): 4 til 6 år. Ved profesjonell bruk (10 til 15 forflytninger om dagen): 18 til 24 måneder. Stoffet kan maskinvaskes på 40 °C og trommeltørkes på skåneprogram.",
      },
      {
        q: "Kan jeg prøve før jeg kjøper?",
        a: "Vi tilbyr ikke gratis utlån. Produktet kan returneres innen 14 dager hvis det ikke er brukt og fortsatt er som nytt, med forbehold om kontroll ved mottak.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Klar til å komme i gang med COALA?",
    title: (
      <>
        Støtt din nærmeste,<br /><em>beskytt ryggen din</em>.
      </>
    ),
    sub: "Retur godtas innen 14 dager hvis produktet ikke er brukt · Trenger du råd? contact@connectlink.fr",
    ctaOrder: "Bestill COALA",
    ctaWrite: "Skriv til oss",
  },
  crossLinks: [
    { eyebrow: "Produktet", title: "Tekniske spesifikasjoner for COALA" },
    { eyebrow: "Veiledning", title: "Bruksanvisning i 7 trinn" },
    { eyebrow: "Spørsmål", title: "Alle spørsmål og svar" },
  ],
};

export default copy;

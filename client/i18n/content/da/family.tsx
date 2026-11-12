import type { FamilyCopy } from "../family";

const copy: FamilyCopy = {
  hero: {
    eyebrow: "Til pårørende · Udviklet til pårørende, der hjælper",
    title: (
      <>
        Jeg hjælper en af mine nærmeste.<br /><em>COALA hjælper mig.</em>
      </>
    ),
    lede: "Hver dag hjælper du din nærtstående med at komme fra ét sted til et andet. COALA støtter hver forflytning, så din ryg aflastes, bevægelsen bliver mere sikker, og værdigheden bevares.",
    ctaOrder: "Bestil COALA",
    ctaAdvice: "Tal med os, før du køber",
    ctaHow: "Se, hvordan det virker",
    trust: ["Returret i 14 dage", "Rigtige mennesker i kundeservice", "Videovejledninger inkluderet"],
    imageAlt: "Pårørende iført COALA-forflytningstøj under en forflytning",
    cardTop: {
      eyebrow: "Beskytter din ryg",
      claim: "Slut med at bøje ryggen for at løfte",
      desc: "du bærer ikke længere – du støtter",
    },
    cardBottom: { eyebrow: "Hver dag", pills: ["Seng", "Stol", "Badeværelse"] },
  },
  benefits: {
    eyebrow: "Hvorfor COALA?",
    title: (
      <>
        En løsning udviklet<br />til <em>pårørende</em>.
      </>
    ),
    items: [
      { title: "Gør bevægelsen mere sikker", desc: "Forstærkede greb, jævnt fordelte støttepunkter, skridsikkert." },
      { title: "Respekterer personen", desc: "Blødt stof, værdigt at bruge, og din nærtstående beholder tøjet på under hele forflytningen." },
      { title: "Beskytter din ryg", desc: "Slut med at bøje ryggen for at løfte og med belastning af skuldre og arme." },
      { title: "Fremmer selvstændighed", desc: "Din nærtstående kan deltage aktivt i bevægelsen." },
    ],
  },
  steps: {
    eyebrow: "Hvordan virker det?",
    title: (
      <>
        Tre enkle trin<br />til en <em>sikker</em> forflytning.
      </>
    ),
    items: [
      { title: "Tag på", desc: "Du bærer COALA som almindeligt arbejdstøj. Det er på i løbet af få sekunder." },
      { title: "Hold i grebszonerne", desc: "Din nærtstående holder i de forstærkede håndtag (skuldre, talje, hofter). Du holder dig lavt med ret ryg." },
      { title: "Forflyt", desc: "Guid bevægelsen uden at tvinge. Seng, stol, ud af badeværelset: Bevægelsen er glidende." },
    ],
    noteEyebrow: "Det ændrer COALA",
    changes: [
      ["Ryg", "Slut med at bøje ryggen for at løfte."],
      ["Arme", "Slut med belastning af skuldre og arme."],
      ["Sammen", "Din nærtstående deltager: Du bærer ikke længere – du støtter."],
    ],
    guideLink: "Se brugervejledningen i 7 trin",
  },
  product: {
    eyebrow: "Produktet",
    title: (
      <>
        Enkelt tøj,<br /><em>slidstærkt</em> og vaskbart.
      </>
    ),
    specsTitle: "Specifikationer",
    specs: [
      "Teknisk polyester, 215 g/m²",
      "4 forstærkede grebszoner",
      "Størrelser XS til 4XL",
      "Kan vaskes ved 40 °C · skånsom tørring",
      "Patenteret fransk innovation",
    ],
    commitmentsTitle: "Vores løfter",
    commitments: [
      "Returret i 14 dage på ubrugte produkter",
      "Rigtige mennesker i kundeservice",
      "Videovejledninger inkluderet",
    ],
  },
  faq: {
    eyebrow: "Pårørendes spørgsmål",
    title: (
      <>
        Det, <em>familier</em><br />spørger os om.
      </>
    ),
    cta: "Se alle spørgsmål",
    items: [
      {
        q: "Er COALA egnet til min nærtstående?",
        a: "COALA egner sig til de fleste, der har brug for hjælp til forflytninger og i det mindste delvist kan deltage i bevægelsen ved at holde i grebene med begge hænder. Tøjet bæres af dig som hjælper og findes i størrelserne XS til 4XL. Ved særlige tilstande (fremskredne tryksår, nylig operation) bør du spørge plejepersonalet til råds.",
      },
      {
        q: "Hvor længe holder tøjet?",
        a: "Ved brug i hjemmet (1 til 2 forflytninger om dagen): 4 til 6 år. Ved professionel brug (10 til 15 forflytninger om dagen): 18 til 24 måneder. Stoffet kan maskinvaskes ved 40 °C og tørretumbles på et skånsomt program.",
      },
      {
        q: "Kan jeg prøve det, før jeg køber?",
        a: "Vi tilbyder ikke gratis udlån. Produktet kan returneres inden for 14 dage, hvis det ikke har været brugt og stadig er som nyt – med forbehold for kontrol ved modtagelsen.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Klar til at komme i gang med COALA?",
    title: (
      <>
        Støt din nærtstående,<br /><em>beskyt din ryg</em>.
      </>
    ),
    sub: "Returnering accepteres inden for 14 dage, hvis produktet ikke har været brugt · Brug for råd? contact@connectlink.fr",
    ctaOrder: "Bestil COALA",
    ctaWrite: "Skriv til os",
  },
  crossLinks: [
    { eyebrow: "Produktet", title: "COALA's tekniske specifikationer" },
    { eyebrow: "Vejledning", title: "Brugervejledning i 7 trin" },
    { eyebrow: "Spørgsmål", title: "Hele FAQ'en" },
  ],
};

export default copy;

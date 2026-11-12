import type { FamilyCopy } from "../family";

const copy: FamilyCopy = {
  hero: {
    eyebrow: "För anhöriga · Utvecklat för anhörigvårdare",
    title: (
      <>
        Jag vårdar en närstående.<br /><em>COALA hjälper mig.</em>
      </>
    ),
    lede: "Varje dag hjälper du din närstående att förflytta sig. COALA stöttar varje förflyttning så att din rygg avlastas, rörelsen blir tryggare och din närståendes värdighet bevaras.",
    ctaOrder: "Beställ COALA",
    ctaAdvice: "Prata med oss innan du köper",
    ctaHow: "Se hur det fungerar",
    trust: ["Retur inom 14 dagar", "Riktiga människor i kundtjänsten", "Instruktionsfilmer ingår"],
    imageAlt: "Anhörigvårdare som bär COALA förflyttningsplagg under en förflyttning",
    cardTop: {
      eyebrow: "Skyddar din rygg",
      claim: "Slipp böja ryggen för att lyfta",
      desc: "du bär inte längre, du stöttar",
    },
    cardBottom: { eyebrow: "Varje dag", pills: ["Säng", "Stol", "Badrum"] },
  },
  benefits: {
    eyebrow: "Varför COALA?",
    title: (
      <>
        En lösning utvecklad<br />för <em>anhörigvårdare</em>.
      </>
    ),
    items: [
      { title: "Gör rörelsen tryggare", desc: "Förstärkta grepp, jämnt fördelade stödpunkter, halkfritt." },
      { title: "Respekterar personen", desc: "Mjukt tyg, värdigt att använda, och din närstående behåller kläderna på under hela förflyttningen." },
      { title: "Skyddar din rygg", desc: "Slipp böja ryggen för att lyfta och slipp belasta axlar och armar." },
      { title: "Främjar självständighet", desc: "Din närstående kan delta aktivt i rörelsen." },
    ],
  },
  steps: {
    eyebrow: "Hur fungerar det?",
    title: (
      <>
        Tre enkla steg<br />för en <em>trygg</em> förflyttning.
      </>
    ),
    items: [
      { title: "Ta på", desc: "Du bär COALA som ett vanligt arbetsplagg. Det är på på några sekunder." },
      { title: "Håll i greppzonerna", desc: "Din närstående håller i de förstärkta handtagen (axlar, midja, höfter). Du står lågt med rak rygg." },
      { title: "Förflytta", desc: "Styr rörelsen utan att ta i. Säng, stol, ut ur badrummet: rörelsen blir mjuk och smidig." },
    ],
    noteEyebrow: "Det här förändrar COALA",
    changes: [
      ["Rygg", "Slipp böja ryggen för att lyfta."],
      ["Armar", "Slipp belasta axlar och armar."],
      ["Tillsammans", "Din närstående deltar: du bär inte längre, du stöttar."],
    ],
    guideLink: "Se bruksanvisningen i 7 steg",
  },
  product: {
    eyebrow: "Produkten",
    title: (
      <>
        Ett enkelt plagg,<br /><em>slitstarkt</em> och tvättbart.
      </>
    ),
    specsTitle: "Specifikationer",
    specs: [
      "Teknisk polyester, 215 g/m²",
      "4 förstärkta greppzoner",
      "Storlekar XS till 4XL",
      "Tvättbart i 40 °C · skonsam torkning",
      "Patenterad fransk innovation",
    ],
    commitmentsTitle: "Våra åtaganden",
    commitments: [
      "Retur inom 14 dagar för oanvända produkter",
      "Riktiga människor i kundtjänsten",
      "Instruktionsfilmer ingår",
    ],
  },
  faq: {
    eyebrow: "Anhörigvårdares frågor",
    title: (
      <>
        Det här undrar<br /><em>anhöriga</em>.
      </>
    ),
    cta: "Se alla frågor",
    items: [
      {
        q: "Passar COALA för min närstående?",
        a: "COALA passar de flesta personer som behöver hjälp vid förflyttningar och kan delta åtminstone delvis i rörelsen genom att hålla i greppen med båda händerna. Plagget bärs av dig som hjälper och finns i storlekarna XS till 4XL. Vid särskilda tillstånd (svåra trycksår, nyligen genomgången operation) bör du rådfråga vårdteamet.",
      },
      {
        q: "Hur länge håller plagget?",
        a: "Vid användning i hemmet (1 till 2 förflyttningar om dagen): 4 till 6 år. Vid yrkesmässig användning (10 till 15 förflyttningar om dagen): 18 till 24 månader. Tyget kan maskintvättas i 40 °C och torktumlas på skonsamt program.",
      },
      {
        q: "Kan jag prova innan jag köper?",
        a: "Vi erbjuder inga kostnadsfria lån. Produkten kan returneras inom 14 dagar om den inte har använts och fortfarande är som ny, efter kontroll vid mottagandet.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Redo att komma i gång med COALA?",
    title: (
      <>
        Stötta din närstående,<br /><em>skydda din rygg</em>.
      </>
    ),
    sub: "Retur inom 14 dagar om produkten inte har använts · Behöver du råd? contact@connectlink.fr",
    ctaOrder: "Beställ COALA",
    ctaWrite: "Skriv till oss",
  },
  crossLinks: [
    { eyebrow: "Produkten", title: "Tekniska specifikationer för COALA" },
    { eyebrow: "Guide", title: "Bruksanvisning i 7 steg" },
    { eyebrow: "Frågor", title: "Alla vanliga frågor" },
  ],
};

export default copy;

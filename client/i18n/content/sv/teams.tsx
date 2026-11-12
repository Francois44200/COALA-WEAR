import type { TeamsCopy } from "../teams";

const copy: TeamsCopy = {
  hero: {
    eyebrow: "För yrkesverksamma · Vård- och omsorgsverksamheter",
    title: (
      <>
        Utrusta dina team<br />med ett förflyttningshjälpmedel<br /><em>utvecklat för<br />verklighetens omvårdnad</em>.
      </>
    ),
    lede: "COALA passar in i det dagliga vårdarbetet: det förebygger belastningsskador, gör förflyttningarna tryggare, minskar den fysiska belastningen och uppmuntrar den som får hjälp att delta aktivt.",
    ctaQuote: "Begär offert",
    ctaDemo: "Prata med vårt team",
    ctaHow: "Se hur det fungerar",
    trust: ["Offert inom 48 timmar", "Utbildning möjlig från 5 utrustade yrkesverksamma", "Samlad leverans till er verksamhet"],
  },
  visual: {
    topEyebrow: "Förebyggande av belastningsskador",
    topClaim: "Sluta böja ryggen för att lyfta",
    topDesc: "patienten deltar, du styr rörelsen",
    botEyebrow: "Utrustade verksamheter",
    pills: ["Hemtjänst", "Vårdboenden", "Hemsjukvård", "Sjukhusvård i hemmet"],
  },
  structures: {
    eyebrow: "Vilka verksamheter är det för?",
    title: (
      <>
        COALA är för team som <em>varje dag</em> stöttar<br />personer med nedsatt rörlighet.
      </>
    ),
    imageAlt: "Ett team av vårdpersonal som bär COALA förflyttningsplagg",
    labels: [
      "Hemtjänst och ideella omsorgsorganisationer",
      "Hemtjänst och hemsjukvård",
      "Vårdboenden och trygghetsboenden",
      "Sjukhus och kliniker",
      "Rehabiliteringscenter",
      "Boenden och stödboenden för personer med funktionsnedsättning",
      "Sjukhusvård i hemmet",
      "Egenföretagande vårdpersonal och yrkesutövare",
    ],
  },
  benefits: {
    eyebrow: "Fördelar för yrkesverksamma",
    title: (
      <>
        Därför kommer dina team<br />att <em>vilja använda det</em>.
      </>
    ),
    items: [
      {
        title: "Förebygger belastningsskador",
        desc: "Minskar den dynamiska belastningen på armar och rygg vid assisterade förflyttningar, den största orsaken till risk för belastningsskador i vårdarbetet.",
      },
      {
        title: "Tryggare hantering",
        desc: "En mer pålitlig kontakt mellan vårdpersonal och patient, med trygga yttre greppzoner.",
      },
      {
        title: "Patientens delaktighet",
        desc: "Den som får hjälp kan delta mycket mer i sin egen rörelse.",
      },
      {
        title: "Lätt att införa",
        desc: "Ett lätt arbetsplagg (+200 g) som kan aktiveras eller avaktiveras på 5 sekunder.",
      },
      {
        title: "Användbar innovation",
        desc: "En praktisk, patenterad lösning utvecklad för verklighetens omvårdnad, inte en pryl.",
      },
      {
        title: "Kompletterande",
        desc: "Fungerar tillsammans med befintliga mekaniska lyfthjälpmedel, utan att ersätta dem.",
      },
    ],
  },
  technique: {
    eyebrow: "Så använder du det",
    title: (
      <>
        En enkel teknik att införa<br />i ert <em>arbetssätt</em>.
      </>
    ),
    steps: [
      "Håll ryggen rak medan du hjälper patienten att luta sig mot dig.",
      "Böj lätt i höfter och knän.",
      "Placera fötterna isär för bättre stabilitet.",
      "Använd utfallssteg framåt och bakåt för att följa med i förflyttningen.",
    ],
    noteEyebrow: "Ett samarbetsinriktat arbetssätt",
    noteBody:
      "COALA förflyttningsplagg stöder ett samarbetsinriktat sätt att förflytta: patienten håller i greppzonerna och deltar aktivt i rörelsen. Ansträngningen delas, värdigheten bevaras och relationen mellan vårdpersonal och patient stärks.",
    noteCta: "Se alla användningsområden",
  },
  deploy: {
    eyebrow: "Införandet steg för steg",
    title: (
      <>
        Så inför vi<br />COALA <em>i er verksamhet</em>.
      </>
    ),
    steps: [
      { title: "Inledande samtal", body: "Ett första samtal för att förstå era behov och er vardag i vården." },
      { title: "Information och frågor", body: "Vi delar produktinformation och svarar på ert teams frågor innan ni bestämmer er." },
      { title: "Val av storlekar", body: "Vi tar fram vilka storlekar ni behöver utifrån ert team." },
      { title: "Offert eller gruppbeställning", body: "Ett kommersiellt förslag anpassat efter er volym och tidsplan." },
      { title: "Stöd vid användning", body: "En videodemonstration på engelska när vi har tagit emot er beställning, samt grundläggande utbildning och användarguider för era team." },
      { title: "Återkoppling från verksamheten", body: "Vi följer upp hur plagget används och anpassar vid behov." },
    ],
  },
  partnerships: {
    eyebrow: "Industriella partnerskap och återförsäljning",
    title: (
      <>
        Vi bygger partnerskap<br />med vårdorganisationer.
      </>
    ),
    body: "Connect Link utvecklar partnerskap med aktörer inom vård- och textilindustrin: återförsäljning, gemensam produktutveckling, industriellt samarbete och varumärkeslicensiering.",
    cta: "Diskutera ett partnerskap",
    imageAlt: "Vårdpersonal som bär COALA förflyttningsplagg",
    captionSub: "Patenterad fransk innovation",
  },
  trust: {
    label: "Vård- och omsorgsverksamheter och partner som litar på oss",
    ariaLabel: "Partner och användarorganisationer",
  },
  faq: {
    eyebrow: "Frågor från yrkesverksamma",
    title: (
      <>
        Det här frågar<br /><em>vårdteamen</em> oss.
      </>
    ),
    cta: "Se alla frågor",
    items: [
      {
        q: "Kan vi boka en demonstration?",
        a: "Ja, via videosamtal på engelska när vi har tagit emot er beställning. Vi presenterar produkten för ert team, visar hur den används och svarar på frågor. Kontakta oss via formuläret så återkommer vi inom 48 arbetstimmar för att boka en tid.",
      },
      {
        q: "Passar COALA för vårdboenden?",
        a: "Ja. COALA används redan på flera vårdboenden. Det uppfyller krav på spårbarhet och hygien (tvättbart i 40 °C, skonsam torkning) och stöder det arbete för att förebygga belastningsskador som leds av vårdboendenas medicinska team.",
      },
      {
        q: "Passar COALA för hemtjänst?",
        a: "Absolut. Det var faktiskt ursprungligen utvecklat för hemtjänsten. Det är lätt (+200 g) och får enkelt plats i väskan hos hemtjänstpersonalen. Utbildningen kan ges via videosamtal eller vid ett teammöte.",
      },
      {
        q: "Kan ni utbilda ett team?",
        a: "Ja. Utbildning blir aktuell från 5 utrustade yrkesverksamma. Den ges av en ergonom eller arbetsterapeut från COALA-nätverket, och utbildningsmaterialet delas med teamet.",
      },
      {
        q: "Erbjuder ni priser för gruppbeställningar?",
        a: "Ja, mängdrabatter finns från 10 enheter. Verksamheter som beställer 50 plagg eller fler får samlad leverans till sin verksamhet, en egen kontaktperson och långsiktigt stöd. Begär en personlig offert.",
      },
      {
        q: "Kan vi bli återförsäljare?",
        a: "Connect Link väljer ut återförsäljare inom vård, medicinteknisk utrustning och textilindustrin. Kontakta oss via partnerskapsformuläret för att presentera er organisation och diskutera villkoren.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Redo att utrusta dina team?",
    title: (
      <>
        Offert inom 48 timmar,<br />videodemonstration<br /><em>när ni har beställt</em>.
      </>
    ),
    sub: "Anpassat stöd · Utbildning ingår · Uppföljning i verksamheten",
    ctaQuote: "Begär offert",
    ctaDemo: "Prata med vårt team",
  },
  crossLinks: [
    { eyebrow: "Produkten i detalj", title: "Fullständig produktsida" },
    { eyebrow: "Har du frågor?", title: "Alla vanliga frågor" },
    { eyebrow: "Återkoppling från verksamheten", title: "Läs omdömena" },
  ],
};

export default copy;

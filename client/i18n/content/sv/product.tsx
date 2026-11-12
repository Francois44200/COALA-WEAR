import type { ProductCopy } from "../product";

const copy: ProductCopy = {
  buy: {
    viewLabels: [
      "COALA förflyttningsplagg framifrån, fyra greppzoner utfällda",
      "COALA förflyttningsplagg i trekvartsvy, fyra greppzoner utfällda",
      "COALA förflyttningsplagg med handtagen instoppade, framifrån",
      "Den inre exoskelettstrukturen i COALA förflyttningsplagg",
      "COALA förflyttningsplagg som bärs av vårdpersonal, greppzonerna utfällda",
      "COALA med handtagen instoppade, ser ut som ett vanligt arbetsplagg",
      "Närbild av en greppzon på axeln",
      "Vårdpersonal som stöttar en patient iklädd COALA förflyttningsplagg",
    ],
    refPrefix: "COALA · art.nr CL-B137-BLANC-",
    thumbsAria: "Produktbilder",
    eyebrow: "Förflyttningsplagg",
    title: (
      <>
        Förflyttningsplagget <em>COALA</em>
      </>
    ),
    lede:
      "Ett textilplagg utvecklat för förflyttningar. Fyra förstärkta greppzoner och en exoskelettstruktur som skyddar den som hjälper. COALA syns inte och märks inte, men skyddar dig när du behöver det.",
    price: "från 129 €",
    priceMeta: "inkl. moms",
    sizeLabel: "Storlek",
    sizeGuide: "Storleksguide ↗",
    sizeAria: "Välj storlek",
    colourLabel: "Färg · Vit",
    colourNote: "COALA finns för närvarande endast i vitt.",
    ctaOrder: "Beställ COALA",
    ctaQuote: "Begär offert",
    reassuranceAria: "Våra åtaganden",
    reassurance: [
      "Fri retur inom 14 dagar i hela EU",
      "Patenterad fransk innovation",
      "Maskintvättbart i 40\u00a0°C",
    ],
  },

  features: {
    eyebrow: "Utvecklat av vårdare, för vårdare",
    title: (
      <>
        Fyra tekniska val,
        <br />
        ett enda <em>syfte</em>.
      </>
    ),
    items: [
      {
        tag: "01 · Fyrhandsgrepp",
        title: "En gemensam rörelse: personen håller i sig",
        body: "COALA bärs av den som hjälper, och personen som får hjälp håller i handtagen. Du styr rörelsen med din kroppsvikt i stället för att lyfta, så att förflyttningen blir en gemensam insats. Fyra greppzoner, med handtag vid axlarna, sidorna och höfterna.",
        label: "De fyra förstärkta greppzonerna på COALA förflyttningsplagg",
      },
      {
        tag: "02 · Arbetskläder",
        title: "Bara 200\u00a0g extra, ingen förberedelsetid",
        body: "COALA tas på som ett vanligt arbetsplagg, på några sekunder. Vid förflyttningen slipper du belasta axlar och ländrygg, ingen mekanisk fastsättning och ingen lång utbildning. Redo direkt, var du än är.",
        label: "COALA förflyttningsplagg med handtagen instoppade, ser ut precis som ett vanligt arbetsplagg",
      },
      {
        tag: "03 · Stöd som går att stänga av",
        title: "Lossat på 5 sekunder",
        body: "När förflyttningarna är klara lossar du stödzonerna och stoppar undan handtagen direkt. När stödet är lossat finns ingen kompression alls: COALA märks inte för den som bär det och syns inte för andra.",
        label: "Den inre selen i COALA förflyttningsplagg, lossad på fem sekunder",
      },
      {
        tag: "04 · Stöd i alla lägen",
        title: "Hjälper dig utan att ersätta den mänskliga kontakten",
        body: "COALA stöttar din rörelse utan att ändra hur du ger vård och omsorg. Tekniskt polyestertyg 215\u00a0g/m², tvättbart i 40\u00a0°C, storlek XS till 4XL.",
        label: "Vårdpersonal iklädd COALA som följer en äldre person till rollatorn",
      },
    ],
  },

  range: {
    eyebrow: "Sortimentet",
    title: (
      <>
        Tre modeller, en och samma <em>rörelse</em>.
      </>
    ),
    lede:
      "Selen och tyget varierar beroende på hur intensivt plagget används. Alla modeller finns i storlek XS till 4XL (franska storlekar 34 till 64), är maskintvättbara i 40\u00a0°C och uppfyller HAS-rekommendation R.47.",
    badge: "Mest populär",
    imgAlt: (name) => `Förflyttningsplagget ${name} på en användare`,
    vat: "inkl. moms",
    harnessLabel: "Sele",
    fabricLabel: "Tyg",
    supportLabel: "Stöd",
    cta: "Beställ COALA",
    models: [
      { audience: "Anhörigvårdare", harness: "1\u00a0mm", fabric: "50\u00a0% bomull · 50\u00a0% polyester", support: "Bruksanvisning ingår" },
      { audience: "Vårdpersonal och vårdare som hjälper regelbundet", harness: "1\u00a0mm, bomullsfodrad", fabric: "50\u00a0% bomull · 50\u00a0% polyester", support: "Bruksanvisning ingår" },
      { audience: "Vårdpersonal", harness: "2\u00a0mm, fodrad med CoolTex®", fabric: "Tekniskt CoolTex®-tyg", support: "Utbildning och stöd" },
    ],
    noteBefore: "Selen väger cirka 200\u00a0g och kan fällas ut på ungefär tio sekunder. Om du utrustar en verksamhet, ",
    noteLink: "begär en offert",
    noteAfter: " i stället för att göra en enskild beställning.",
  },

  go: {
    badge: "Kommer snart",
    subtitle: (
      <>
        Västen som skyddar din hälsa så att du bättre kan skydda <em>andra</em>.
      </>
    ),
    priceValue: "Pris på förfrågan",
    priceCta: "Fråga om pris",
    lede:
      "COALA Go har utvecklats tillsammans med och för ambulanspersonal och bygger in COALA-systemet i en varselväst: en inre sele och yttre greppandtag som minskar belastningen på ryggen och begränsar skaderisken.",
    photoAlt: "Ambulanspersonal iklädd västen COALA Go",
    benefits: [
      { title: "Minskar belastningen på ryggen", detail: "COALA-systemet för över krafterna från axlarna till bäckenet och ländryggen." },
      { title: "Minskar risken för belastningsskador", detail: "Yttre greppandtag för bättre grepp och mindre spänning." },
      { title: "Stöd och säkerhet", detail: "Ett integrerat system, diskret och alltid tillgängligt under västen." },
      { title: "Bekvämt i vardagen", detail: "Ergonomisk passform, ventilerande zoner och ett nätfoder som följer dina rörelser." },
    ],
    specs: [
      { label: "COALA-systemet", value: "Dold inre sele · infällbara greppandtag" },
      { label: "Synlighet", value: "Reflexband · 360°" },
      { label: "Fickor", value: "Bröstfickor med dragkedja · stora nedre fickor med dragkedja" },
      { label: "Material", value: "100\u00a0% slitstark, vattenavvisande polyester · ventilerande nätfoder" },
      { label: "Färg", value: "Marinblå" },
      { label: "Storlekar", value: "XS till 4XL · rak unisexmodell" },
      { label: "Skötsel", value: "Maskintvättbar i 60\u00a0°C" },
    ],
    usagesTitle: "För varje utryckning",
    usages: [
      "Patienthantering",
      "Bårtransport",
      "Lyft och förflyttningar",
      "Akut omhändertagande i hemmet",
      "Nödsituationer",
    ],
    note:
      "COALA Go går ännu inte att köpa online. Kontakta oss så hör vi av oss när den finns tillgänglig och skickar ett förslag anpassat efter din verksamhet.",
  },

  compare: {
    eyebrow: "Varför inte en maskin eller ett vanligt arbetsplagg?",
    title: (
      <>
        Förflyttningar förtjänar
        <br />
        ett eget <em>hjälpmedel</em>.
      </>
    ),
    lede:
      "Vi har jämfört COALA med de två vanligaste arbetssätten i praktiken. Så här står de sig i verklig användning.",
    coalaSub: "Förflyttningsplagg",
    machineBrand: "Personlyft",
    machineSub: "Mekaniskt lyfthjälpmedel",
    classicBrand: "Vanligt arbetsplagg",
    classicSub: "Vårdkläder eller tyg",
    rows: [
      {
        label: "Förflyttningsrörelse",
        coala: "Personen som får hjälp deltar aktivt, medan du styr förflyttningen med din kroppsvikt, med rak rygg och aktiverad bålmuskulatur, utan att belasta axlar eller armar.",
        machine: "Böjd rygg och armar när lyftselen ska sättas på.\nIngen förflyttningsrörelse.",
        classic: "Manuell förflyttning utan hjälpmedel.\nBelastningen bärs med böjd rygg och dragande armar.",
      },
      {
        label: "Värdighet",
        coala: "Personen som får hjälp deltar aktivt, vilket gynnar vårdarens hälsa.\nEn mer jämlik relation mellan vårdaren och personen som får vård.\nÖgonkontakten behålls.",
        machine: "Maskinen gör allt arbete under förflyttningen.\nIngen mänsklig kontakt.\nBeroendet av en maskin kan vara svårt att acceptera.",
        classic: "Mänsklig kontakt som utsätter vårdpersonalen för risker.\nIngen ögonkontakt.",
      },
      {
        label: "Belastning på rygg, axlar och armar",
        coala: "Ingen böjd rygg och ingen aktiv kraftansträngning med armarna.\nRak rygg, aktiverad bålmuskulatur och fria händer.",
        machine: "Inga kraftfulla rörelser.\nAtt sätta på och ta av lyftselen, manövrera maskinen.",
        classic: "Lyft, ansträngning och belastning som orsakar ländryggsbesvär och belastningsskador i axlar och armar.",
      },
      {
        label: "Tid för förflyttning",
        coala: "35 sekunder för att resa upp någon och sätta personen i en stol",
        machine: "3 minuter och 40 sekunder för att resa upp någon och sätta personen i en stol",
        classic: "25 sekunder för att resa upp någon och sätta personen i en stol",
      },
      {
        label: "Utveckling",
        coala: "Patenterad fransk innovation",
        machine: "Utvecklad och tillverkad globalt",
        classic: "Tillverkad globalt",
      },
      {
        label: "Kostnad över 3 år (5 vårdare)",
        coala: "~1650 € · engångskostnad",
        machine: "~10 000 €",
        classic: "~640 € · förbrukningsmaterial",
      },
    ],
  },

  specs: {
    eyebrow: "Tekniska data",
    title: "Allt du behöver, inget du inte behöver.",
    items: [
      { label: "Material", value: "Tekniskt polyester 215\u00a0g/m² · förstärkt foder" },
      { label: "Tillgängliga storlekar", value: "XS · S · M · L · XL · XXL · 3XL · 4XL (franska storlekar 34 till 64)" },
      { label: "Färg", value: "Vit" },
      { label: "Tvätt", value: "Maskintvätt i 40\u00a0°C · torktumling på skonprogram" },
      { label: "Utveckling", value: "Patenterad fransk innovation · Connect Link" },
    ],
    download: "Ladda ner produktbladet (PDF)",
    guideEyebrow: "Storleksguide",
    guideTitle: "Välj rätt storlek.",
    guideIntro: (
      <>
        COALA bärs av <em>anhörigvårdaren eller vårdpersonalen</em>, så mät den person som ska
        bära plagget. Om du ligger mellan två storlekar, välj den större.
      </>
    ),
    toggleAria: "Storlekstabell",
    women: "Dam",
    men: "Herr",
    tableAria: (morpho) => `Storlekstabell för COALA: ${morpho}`,
    colSize: "Storlek",
    colConfection: "Fransk storlek",
    colChest: "Bröst",
    colWaist: "Midja",
    point: "Gradering",
    note: "Kroppsmått i centimeter.",
  },

  quote: {
    text: "Jag har vårdat min man i fyra år. Första gången jag använde COALA för att flytta honom från sängen till fåtöljen insåg jag att jag inte behövde bli fysioterapeut. Jag behövde bara ett hjälpmedel som var utformat för min egen kropp.",
    name: "Hélène, 67",
    role: "Anhörigvårdare · Nantes (översatt från franska)",
  },

  faq: {
    eyebrow: "Frågor om plagget",
    title: (
      <>
        Frågorna
        <br />
        vi får
        <br />
        <em>oftast</em>.
      </>
    ),
    cta: "Se alla frågor",
    items: [
      {
        q: "Passar COALA för min närstående?",
        a: "COALA bärs av dig som hjälper och passar för att hjälpa alla som behöver stöd vid förflyttningar och kan hålla i handtagen, oavsett om personen är helt eller delvis rörlig. Plagget finns i storlek XS till 4XL för att passa den som bär det. Vid särskilda tillstånd (långt framskridna trycksår, nyligen genomgången operation) bör du rådfråga vårdteamet.",
      },
      {
        q: "Hur länge håller ett plagg?",
        a: "Vid användning i hemmet (1 till 2 förflyttningar per dag): 4 till 6 år. Vid yrkesmässig användning (10 till 15 förflyttningar per dag): 18 till 24 månader. Tyget kan maskintvättas i 40\u00a0°C och torktumlas på skonprogram.",
      },
      {
        q: "Kan jag prova innan jag köper?",
        a: "Vi erbjuder inga kostnadsfria lån, inte heller till yrkesverksamma. Produkten kan returneras inom 14 dagar om den inte har använts och är i nyskick, efter kontroll vid returen. När vi har tagit emot din beställning kan vi ge dig en demonstration via videosamtal, på engelska.",
      },
      {
        q: "Hur tvättar jag plagget?",
        a: "Maskintvätta i 40\u00a0°C med vanligt tvättmedel och torktumla på skonprogram. Använd inte sköljmedel (det försvagar sömmarna). Använd inte klorblekmedel.",
      },
    ],
  },

  cross: [
    { eyebrow: "Nästa steg", title: "Hur fungerar det i praktiken?" },
    { eyebrow: "Ska du utrusta ett vårdteam?", title: "Begär offert" },
    { eyebrow: "Från verkligheten", title: "Läs omdömena" },
  ],
};

export default copy;

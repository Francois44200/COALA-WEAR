import type { HowItWorksCopy } from "../howItWorks";

const copy: HowItWorksCopy = {
  breadcrumb: {
    ariaLabel: "Brödsmulor",
    home: "Startsida",
    current: "Så fungerar det",
  },
  hero: {
    eyebrow: "Bruksanvisning",
    title: (
      <>
        Ta på, hjälp,<br /><em>ta av</em>.
      </>
    ),
    lede:
      "COALA aktiveras på några sekunder och avaktiveras lika snabbt. Däremellan deltar personen du hjälper: du lyfter inte längre, du stöttar. Den här guiden bygger på utbildningsmaterialet som används när COALA införs i vårdteam.",
    ctaOrder: "Beställ COALA",
    ctaProduct: "Se produktsidan",
  },
  video: {
    eyebrow: "Videodemonstration",
    title: (
      <>
        COALA-tekniken<br />i <em>verkliga situationer</em>.
      </>
    ),
    iframeTitle: "Demonstration av COALA förflyttningsplagg (på franska)",
    note: "Video på franska",
  },
  steps: {
    eyebrow: "Instruktioner",
    title: (
      <>
        Aktivera och lossa<br />sedan <em>stödet</em>.
      </>
    ),
    lede:
      "Fem steg för att göra dig redo innan du hjälper någon att förflytta sig. Fem steg för att återgå till ett vanligt plagg när förflyttningen är klar.",
    phase1Label: "Fas 1: Ta på",
    phase1: [
      { n: "01", title: "Ta på plagget", body: "COALA tas på som ett vanligt arbetsplagg: ländbältet är öppet och fäst vid plagget med kardborrebanden, och axelremmarna är lösa." },
      { n: "02", title: "Knäpp upp de två nedersta knapparna", body: "De två nedersta knapparna ger åtkomst till ländbältet och axelremmarnas spännare." },
      { n: "03", title: "Dra åt ländbältet", body: "Dra åt bältet och fäst det sedan med den spänning du vill ha." },
      { n: "04", title: "Spänn axelremmarna", body: "Dra i den nedre remmen på axelspännarna tills du når önskad spänning, i stängt läge." },
      { n: "05", title: "Stäng plagget", body: "Knäpp de två sista knapparna. Stödet är aktivt: du är redo att hjälpa." },
    ],
    phase1Alt: "COALA förflyttningsplagg öppet, med ländbältet och axelremmarnas spännare synliga",
    phase1Caption: "Ländbälte och axelremmarnas spännare, stödet aktivt.",
    phase2Label: "Fas 2: Ta av",
    phase2: [
      { n: "01", title: "Knäpp upp de två nedersta knapparna", body: "Den fysiska hjälpen är klar: du kan lossa stödet." },
      { n: "02", title: "Lossa axelspänningen", body: "Lyft spännarna under armarna för att lossa axelremmarna." },
      { n: "03", title: "Öppna ländbältet", body: "Öppna bältet för att släppa all spänning." },
      { n: "04", title: "Stuva undan bältet", body: "Fäst bältets båda ändar igen på insidan av plaggets två framstycken." },
      { n: "05", title: "Knäpp de två nedersta knapparna", body: "COALA blir ett vanligt plagg igen, omärkligt både för dig och för omgivningen." },
    ],
    phase2Alt: "COALA förflyttningsplagg med handtagen instoppade, tillbaka som vanligt plagg",
    phase2Caption: "Stödet lossat: COALA är ett vanligt plagg igen.",
    warning:
      "Kontrollera när du tar på plagget: se till att bältets båda delar går genom handtagen, på plaggets insida.",
  },
  situations: {
    eyebrow: "När det ska användas",
    title: (
      <>
        När COALA<br /><em>hjälper</em> dig.
      </>
    ),
    lede:
      "Identifiera de situationer med fysisk hjälp där COALA minskar belastningen på dina armar och din rygg, och gör det lättare för personen du hjälper att delta.",
    imageAlt: "Vårdpersonal som bär COALA förflyttningsplagg och hjälper en äldre person till rollatorn",
    items: [
      "Förflyttning från sittande till stående",
      "Förflyttning från stol till toalett",
      "Lägesändring i sängen och uppstigning",
      "Assisterad gång",
      "Lägesändring i stolen",
      "Vändning i sängen",
    ],
    profilesTitle: "Vilka patienter passar det för?",
    profilesIntro:
      "Kan patienten förstå instruktioner som uppmanar till samarbete? Tillåter patientens fysiska tillstånd att COALA används? Bedöm varje fall individuellt:",
    profiles: [
      "Förmåga att förstå instruktioner om samarbete",
      "Förmåga att bära sin egen vikt",
      "Vikt",
      "Rörlighet",
      "Balans",
      "Muskeltonus i armarna",
    ],
    profilesNote:
      "Om du är osäker på om COALA passar i en patients situation, rådfråga patientens vårdteam.",
  },
  grips: {
    eyebrow: "Råd för användning",
    title: (
      <>
        Vilka handtag<br />du ska <em>erbjuda</em>.
      </>
    ),
    lede: "Vilka grepp du erbjuder avgör hur stor belastning som hamnar på dina axlar och din rygg.",
    imageAlt: "Närbild av en greppzon på axeln av COALA förflyttningsplagg",
    caption: "Övre greppzon, på axeln.",
    items: [
      { title: "Korsat grepp", detail: "Erbjud ett nedre handtag och det övre handtaget på motsatt sida. Den övre handen kan placeras i rörelseriktningen för att hjälpa till att styra patientens blick." },
      { title: "Båda nedre handtagen", detail: "Om du erbjuder båda nedre handtagen minskar belastningen på dina axlar och din rygg ännu mer." },
      { title: "Aldrig båda övre handtagen", detail: "Erbjud inte båda övre handtagen samtidigt: det belastar dina axlar och din rygg." },
      { title: "Låt inte handtagen hänga ute", detail: "Stoppa undan handtagen mellan användningarna: de kan fastna i något eller gripas oväntat." },
      { title: "Lossa stödet när det inte används", detail: "Lossa bältet och axelremmarna när du inte ger fysisk hjälp, till exempel vid måltidshjälp eller under en paus." },
    ],
  },
  verbal: {
    eyebrow: "Verbal vägledning",
    title: (
      <>
        Orden som<br /><em>engagerar</em> patienten.
      </>
    ),
    lede:
      "Vägled patienten så tydligt som möjligt så att ni rör er tillsammans. Upprepa och formulera om gärna: varje par av vårdare och patient hittar sina egna signaler.",
    imageAlt: "Vårdpersonal som vägleder en patient mot greppzonerna på COALA förflyttningsplagg",
    caption: "Ögonkontakten behålls under hela momentet.",
    evaluationLabel: "Bedöma förmågan att samarbeta",
    evaluation: ["”Kan du ta tag i det här handtaget?”", "”Känner du dig stark?”"],
    sequenceLabel: "Förflyttningens steg",
    sequence: [
      "”Ta tag i de här handtagen”",
      "”Knip ihop händerna ordentligt”",
      "”Håll i hårt. Känner du dig stark?”",
      "”Flytta fötterna så långt bak du kan”",
      "”Luta dig framåt”",
      "”Dra handtagen mot dig och tryck ifrån med benen”",
    ],
  },
  posture: {
    eyebrow: "Vårdarens arbetsställning",
    title: (
      <>
        Stå i en <em>stark</em> position,<br />utan att lyfta.
      </>
    ),
    lede:
      "COALA belastar lederna i dina armar och din rygg mindre, förutsatt att du ställer dig rätt.",
    items: [
      { title: "Rak rygg", detail: "Håll ryggen rak medan du vägleder patienten att flytta fötterna bakåt och luta sig mot dig." },
      { title: "Böjda höfter och knän", detail: "Böj höfterna och knäna lätt för att effektivt stötta patientens rörelse." },
      { title: "Fötterna isär", detail: "Placera fötterna isär för att öka din stabilitet." },
      { title: "Utfall framåt/bakåt", detail: "Placera en fot mellan patientens fötter och använd utfallsrörelser för att följa med i förflyttningen." },
    ],
  },
  care: {
    eyebrow: "Skötsel",
    title: (
      <>
        <em>Tvättråd</em>.
      </>
    ),
    items: [
      "Kulörtvätt i 40 °C.",
      "Stäng bältet, trätt genom handtagen, innan plagget läggs i maskinen.",
      "Välj skonsam torkning eller torkning på låg temperatur.",
    ],
    imageAlt: "COALA förflyttningsplagg ihopvikt, redo för tvätt",
    caption: "Bältet stängt och handtagen instoppade före maskintvätt.",
  },
  deployment: {
    eyebrow: "Införande i din verksamhet",
    title: (
      <>
        Fem nycklar<br />till <em>framgång</em>.
      </>
    ),
    factors: [
      "Erbjud COALA till vårdpersonal som vill prova",
      "Använd rätt vägledande rörelser",
      "Vägled patienterna mot de nedre handtagen",
      "Lossa stödet och stoppa undan handtagen",
      "Lär av vanan att lyfta",
    ],
    staffLabel: "Vårdpersonal (översatt från franska)",
    staffQuotes: [
      "”Mindre trött i slutet av dagen”",
      "”Tryggare, jag har händerna fria”",
      "”Lätt att använda”",
      "”Man vänjer sig snabbt”",
    ],
    patientLabel: "Patienter (översatt från franska)",
    patientQuotes: [
      "”Vi är ansikte mot ansikte, öga mot öga”",
      "”Mer aktivt deltagande”",
      "”Bättre grepp”",
      "”En känsla av trygghet”",
    ],
  },
  cta: {
    title: "Redo att arbeta med COALA?",
    body: "Beställ direkt eller begär en offert för din verksamhet.",
    order: "Beställ COALA",
    quote: "Begär offert",
    cards: [
      { eyebrow: "Plagget i detalj", title: "Hela produktsidan" },
      { eyebrow: "Vem använder det", title: "Omdömen och resultat" },
      { eyebrow: "Frågor", title: "Alla vanliga frågor" },
    ],
  },
};

export default copy;

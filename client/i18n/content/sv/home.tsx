import type { HomeCopy } from "../home";

const copy: HomeCopy = {
  hero: {
    tag: "Textilt förflyttningshjälpmedel · COALA från Connect Link",
    title: (
      <>
        Förflyttningsplagget<br />
        som <em>skyddar</em><br />
        dem som vårdar.
      </>
    ),
    lede: "COALA underlättar vardagens förflyttningar: det minskar belastningen för den som hjälper, ger trygghet åt den som får hjälp och gör omvårdnaden smidigare.",
    ctaFamily: "Jag vårdar en närstående",
    ctaTeams: "Jag utrustar ett vårdteam",
    ctaHow: "Se hur det fungerar",
    trust: ["Patenterad fransk innovation", "Tvättbart och återanvändbart", "Används på vårdboenden och i hemmet"],
    statLabel: "av vårdgivarna i hemmet upplever bättre hälsa och arbetsförhållanden",
    statSource: "ARACT-studie 2026 · n=48 vårdpersonal / n=665 patienter / daglig användning under 12 månader",
  },
  logos: {
    ariaLabel: "Partner och utmärkelser",
    partnersTitle: "Används av och med stöd från",
    awardsTitle: "Utmärkelser och erkännanden",
    awards: [
      "French Tech 2023",
      "Santexpo FHF Award 2026",
      "Vinnare av Silver Eco Festival 2024",
      "Janus-priset, Institut Français du Design 2026",
      "Salon SAP Award 2024",
    ],
  },
  bannerAlt: "COALA förflyttningsplagg i användning",
  problem: {
    eyebrow: "Verkligheten",
    title: (
      <>
        Vardagens förflyttningar <em>tär</em><br />
        på dem som vårdar.
      </>
    ),
    lede: "Lyfta, flytta, resa upp, stötta. Varje dag miljontals upprepade rörelser, ibland smärtsamma och alltid belastande. COALA har utvecklats utifrån den verkligheten.",
    cards: [
      { stat: "94%", label: "av arbetssjukdomarna bland vårdpersonal och anhörigvårdare är belastningsskador", source: "Assurance Maladie (Frankrike) 2025" },
      { stat: "4 min", label: "genomsnittlig tid för en förflyttning från säng till stol med ett mekaniskt lyfthjälpmedel", source: "BRCS-studie 2021" },
      { stat: "×3", label: "beräknad ökning av antalet äldre med omsorgsbehov som bor hemma i Frankrike fram till 2030", source: "IGAS-rapport (Frankrike) 2025" },
    ],
  },
  solution: {
    eyebrow: "Lösningen",
    title: (
      <>
        Ett plagg utvecklat<br />för att <em>stötta</em><br />varje rörelse.
      </>
    ),
    lede: "COALA bärs av den som hjälper. De förstärkta greppzonerna gör att den som får hjälp kan ta ett stadigt grepp med båda händerna och delta aktivt och tryggt i rörelsen: utan att ta i, utan tung utrustning och utan förberedelser.",
    benefits: [
      { title: "Gör varje förflyttning tryggare", body: "Fyra förstärkta greppzoner, jämnt fördelade stödpunkter och handtag som kan rengöras med en desinfektionsservett." },
      { title: "Minskar belastningen för den som hjälper", body: "En fri arbetsställning och en kraft som fördelas över kroppen: mindre belastning, mindre risk, mer delaktighet." },
      { title: "Respekterar personen", body: "Syns inte utifrån, märks inte för den som bär det och uppmuntrar den som får hjälp att delta aktivt." },
      { title: "Kompletterar befintlig utrustning", body: "Det ersätter inte en personlyft. Använd det som komplement vid förflyttningar där personen delvis kan medverka." },
      { title: "Effektivt från första användningen", body: "På på några sekunder. Ingen förberedelsetid, ingen hävarm, inga tillbehör." },
      { title: "Passar i alla miljöer", body: "Hemmet, vårdboendet, sjukhuset, hemtjänsten. Säng, stol, stående, badrum: ett enda hjälpmedel." },
    ],
    ctaOrder: "Beställ COALA",
    ctaDetails: "Se all produktinformation",
  },
  how: {
    eyebrow: "Så fungerar det",
    title: (
      <>
        <em>Ta på.</em> Stötta. Förflytta.
      </>
    ),
    lede: "Tre steg som alla som hjälper, anhöriga som yrkesverksamma, lär sig på några minuter.",
    steps: [
      {
        title: "Ta på",
        body: "Den som hjälper bär COALA som sitt vanliga arbetsplagg. Det går snabbt att ta på och ser ut precis som ett vanligt arbetsplagg när spännbanden är lossade och handtagen instoppade.",
        meta: "< 10 sekunder",
        imageLabel: "01 / Ta på",
      },
      {
        title: "Stötta",
        body: "Den som får hjälp hittar och håller i greppzonerna vid axlarna och höfterna. Låg position, rak rygg, stadigt grepp, utan belastning på rygg eller armar.",
        meta: "Fri arbetsställning för armar och rygg",
        imageLabel: "02 / Stötta",
      },
      {
        title: "Förflytta",
        body: "Rörelsen blir styrd. Personen kan delta aktivt medan den som hjälper stöttar utan att ta i. Säng, stol, stående, ut ur badrummet.",
        meta: "Mjuk och trygg rörelse",
        imageLabel: "03 / Förflytta",
      },
    ],
    video: "Se videodemonstrationen (2 min, på franska)",
  },
  journeys: {
    eyebrow: "För vem",
    title: (
      <>
        En lösning för både anhörigvårdare<br />och <em>yrkesverksamma</em>.
      </>
    ),
    family: {
      kicker: "01 — Anhörigvårdare",
      title: "Jag vårdar en närstående",
      body: "För dig som ger stöd varje dag. Förstå, välj och beställ COALA, och ta del av våra instruktionsfilmer om goda arbetssätt.",
      bullets: ["Rådgivning innan du köper", "Hemleverans, retur inom 14 dagar", "Instruktionsfilmer och kundtjänst med riktiga människor"],
      statLabel: "vårdpersonal och anhörigvårdare utrustade i hemmet",
      ctaPrimary: "Till sidan för anhörigvårdare",
      ctaOrder: "Beställ COALA",
    },
    teams: {
      kicker: "02 — Yrkesverksamma",
      title: "Jag utrustar ett vårdteam",
      body: "Hemtjänst, vårdboenden, sjukhus, verksamheter för personer med funktionsnedsättning. Offerter, videodemonstrationer på engelska och stöd vid införandet, för att minska den fysiska belastningen och förebygga belastningsskador.",
      bullets: ["Videodemonstration på engelska när vi har tagit emot din beställning", "Brodyr och anpassning vid gruppbeställningar", "Stöd vid utbildning och uppföljning av användningen", "Särskild, slitstark modell: COALA Pro"],
      statLabel: "partnerverksamheter utrustade",
      ctaPrimary: "Begär offert",
      ctaDemo: "Boka en demo",
    },
  },
  proof: {
    eyebrow: "Belägg och resultat",
    title: (
      <>
        Utvecklat tillsammans med vårdpersonal.<br /><em>Beprövat</em> av dem som använder det.
      </>
    ),
    quote:
      "Vi använder det vid morgonuppstigningar och förflyttningar från säng till stol. Inom en vecka ville mina undersköterskor inte arbeta utan det, och de boende deltar mer aktivt i rörelsen.",
    quoteAuthor: "Emmanuelle D.",
    quoteRole: "Vårdenhetschef, Nancy (Frankrike) · översatt från franska",
    stats: [
      { val: "95", unit: "%", label: "av användarna fick bättre hälsa och arbetsförhållanden efter ett år med COALA", src: "ARACT Hauts-de-France-studie 2026" },
      { val: "0", unit: "", label: "rapporterade avvikelser vid vården av 665 patienter med COALA", src: "ARACT Hauts-de-France-studie 2026" },
      { val: "84", unit: "%", label: "av kunderna från 2025 beställde igen 2026", src: "COALA-data" },
    ],
    pressTitle: "I pressen (Frankrike)",
  },
  faq: {
    eyebrow: "FAQ",
    title: (
      <>
        Dina frågor,<br /><em>våra svar</em>.
      </>
    ),
    lede: "Raka svar utan överdrivna löften, även på de frågor man ställer till oss efter att ha sett COALA på nätet.",
    cta: "Se alla frågor",
    items: [
      {
        q: "Ersätter COALA en personlyft?",
        a: "Nej. COALA är ett textilt hjälpmedel för assisterade manuella förflyttningar, där personen kan delta åtminstone delvis i rörelsen. När ett mekaniskt lyfthjälpmedel behövs (en person med stort omsorgsbehov eller en förflyttning där medverkan inte är möjlig) är en personlyft fortfarande nödvändig. COALA kompletterar din utrustning, den ersätter den inte.",
      },
      {
        q: "Hur väljer jag rätt storlek?",
        a: "Det finns åtta storlekar från XS till 4XL, som väljs utifrån bärarens bröstmått och längd. En detaljerad storleksguide finns på produktsidan. Om du är osäker ger vårt team dig råd innan du köper, via e-post och helt utan förpliktelser.",
      },
      {
        q: "Går plagget att tvätta?",
        a: "Ja. COALA kan maskintvättas i 40 °C och uppfyller rekommendation r.47 från den franska myndigheten för hälsa och sjukvård (HAS) om hygien för medicinska textilier. Skonsam torkning eller torkning på låg temperatur rekommenderas för att plagget ska förbli bekvämt och diskret att bära.",
      },
      {
        q: "Kan vi boka en demonstration för vår verksamhet?",
        a: "Ja, via videosamtal på engelska när vi har tagit emot din beställning. En representant för COALA presenterar produkten, visar dina team hur den används och svarar på deras frågor. Demonstrationen är kostnadsfri.",
      },
      {
        q: "När är COALA inte rätt lösning?",
        a: "COALA bygger på att den som får hjälp deltar aktivt i förflyttningen, vilket skyddar hälsan hos den som hjälper. Personen måste därför kunna bära en del av sin vikt, ha ett rimligt viktförhållande till den som hjälper och kunna hålla i handtagen med båda händerna.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Redo?",
    title: (
      <>
        Varför inte <em>prova</em><br />COALA själv?
      </>
    ),
    lede: "En närstående att stötta, ett team att utrusta eller bara en fråga innan du bestämmer dig. Vi svarar inom 24 timmar.",
    ctaOrder: "Beställ COALA",
    ctaQuote: "Begär offert",
    ctaAdvice: "Prata med oss innan du köper",
    trust: [
      { strong: "24 h", sub: "genomsnittlig svarstid" },
      { strong: "14\u00a0dagar", sub: "för att returnera din beställning" },
      { strong: "Över 1\u00a0500 anhörigvårdare och vårdpersonal i Frankrike litar på oss", sub: "", wide: true },
    ],
  },
};

export default copy;

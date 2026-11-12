import type { ResultsCopy } from "../results";

const TRANSLATED = " (översatt från franska)";

const copy: ResultsCopy = {
  hero: {
    eyebrow: "Belägg och omdömen",
    title: (
      <>
        Vad de<br />
        som <em>använder det</em><br />
        säger.
      </>
    ),
    lede: "Anhörigvårdare, undersköterskor, chefer för vårdboenden. Verkliga omdömen och siffror som mätts i praktiken.",
    ctaOrder: "Beställ COALA",
    ctaTestimonials: "Läs omdömena",
    imageAlt: "Vårdare som bär COALA förflyttningsplagg under en förflyttning",
  },
  stats: [
    {
      value: "95%",
      label: "upplevde en positiv inverkan på hälsa och arbetsförhållanden",
      source: "ARACT-studie 2026, 48 vårdpersonal",
    },
    {
      value: "65%",
      label: "av patienterna kan använda COALA vid förflyttningar eller lägesändringar i sängen",
      source: "Connect Link-studie 2024, 95 patienter",
    },
    {
      value: "0",
      label: "rapporterade avvikelser sedan november 2024",
      source: "Connect Links kunduppföljning och ARACT-studie 2026",
    },
    {
      value: "665",
      label: "patienter fick hjälp med COALA under ARACT:s effektstudie 2026",
      source: "ARACT-studie 2026",
    },
  ],
  pullQuote: {
    text: "Jag fick höra att det var ett komforthjälpmedel. Det är det inte. Det är ett säkerhetshjälpmedel, både för den som får hjälp och för den som hjälper. Jag har mätt skillnaden.",
    name: "Dr Arnaud V.",
    role: "Samordnande läkare · Ideellt vårdboende · Hauts-de-France" + TRANSLATED,
  },
  testimonials: {
    eyebrow: "Omdömen",
    title: (
      <>
        De har provat det.<br />
        Så här <em>tycker</em> de.
      </>
    ),
    badgePro: "Vårdpersonal",
    badgeFamily: "Anhörigvårdare",
    ratingLabel: (rating) => `${rating} av 5 stjärnor`,
    items: [
      {
        quote: "Jag har vårdat min man i fyra år. Första gången jag använde COALA vid en förflyttning från säng till stol insåg jag att jag inte behövde bli fysioterapeut. Jag behövde bara ett hjälpmedel som var utformat för min egen kropp.",
        name: "Hélène M.",
        role: "Anhörigvårdare" + TRANSLATED,
        location: "Nantes",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Vi utrustade våra 12 undersköterskor med COALA för åtta månader sedan. Sjukfrånvaron har halverats. Det var det enda vi ändrade i våra arbetssätt det året.",
        name: "Isabelle R.",
        role: "Chef för en hemtjänstverksamhet (SAAD)" + TRANSLATED,
        location: "Lyon",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Min mamma är tung och jag gjorde förflyttningarna på egen hand. Jag ville inte flytta henne till ett vårdboende. COALA gav oss två år mer hemma än vi hade vågat hoppas på.",
        name: "Patrick D.",
        role: "Anhörigvårdare, son" + TRANSLATED,
        location: "Bordeaux",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Det är den medföljande utbildningen som gör skillnaden. På 60 minuter förstod mina team tekniken. Vi har inte haft en enda incident vid förflyttningar sedan införandet.",
        name: "Dr Arnaud V.",
        role: "Samordnande läkare, vårdboende" + TRANSLATED,
        location: "Hauts-de-France",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Ärligt talat var jag skeptisk. Ett plagg för det där? Men efter första veckan kan jag inte tänka mig att arbeta utan det. Greppet känns verkligen annorlunda.",
        name: "Sylvie T.",
        role: "Hemtjänstpersonal, ADMR" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Vi har gjort det till en del av vår introduktion. Varje ny medarbetare får sitt plagg första dagen. För vår personal är det en riktig personlig skyddsutrustning.",
        name: "Claire B.",
        role: "Verksamhetschef, hemsjukvård" + TRANSLATED,
        location: "Strasbourg",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Det förändrade min relation till min pappa. Förut gjorde förflyttningarna mig orolig, och honom också. Nu gör vi dem lugnare. Den här lilla detaljen har förändrat mycket.",
        name: "Amina K.",
        role: "Anhörigvårdare, dotter" + TRANSLATED,
        location: "Paris",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Vi har tre enheter i Bretagne och 60 plagg i användning. Återkopplingen från personalen är enhällig. Tekniken är mer precis, och arbetsskadorna kopplade till manuell hantering har i princip försvunnit.",
        name: "François L.",
        role: "Chef för vårdboende, ömsesidigt ägd koncern" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
    ],
  },
  cases: {
    eyebrow: "Fallstudier från verksamheten",
    title: (
      <>
        Resultat som är<br />
        <em>mätta</em>, inte uppskattade.
      </>
    ),
    items: [
      {
        tag: "Vårdgivare · Hemsjukvård",
        title: "10 undersköterskor utbildade, ingen sjukfrånvaro på 18 månader",
        body: "En sjukhuskoncern i norra Frankrike införde COALA i sin hemsjukvård (SSIAD) och sin sjukhusvård i hemmet (HAD) efter ett sex veckor långt test i verksamheten med fyra frivilliga ur vårdpersonalen. Resultat: ingen sjukfrånvaro kopplad till ländryggen efter införandet, jämfört med tre fall under samma period året innan.",
        metrics: [
          { v: "0", l: "sjukskrivningar för belastningsskador och ländryggsbesvär" },
          { v: "18 månader", l: "uppföljning av gruppen" },
          { v: "10", l: "ur vårdpersonalen utrustade och utbildade" },
        ],
      },
      {
        tag: "Anhörigvårdare · Hemmet",
        title: "Två år mer hemma för en familj nära Bordeaux",
        body: "Patrick D. vårdade ensam sin mamma som vägde 87 kg. De dagliga förflyttningarna från säng till stol höll på att bli fysiskt omöjliga. Efter att ha börjat använda COALA och haft ett samtal med Connect Links arbetsterapeut kunde han fortsätta vårda henne hemma, utan att flytta henne till ett vårdboende, i ytterligare 26 månader.",
        metrics: [
          { v: "+26", l: "månader hemma" },
          { v: "1", l: "anhörigvårdare på egen hand" },
          { v: "87 kg", l: "person som får hjälp" },
        ],
      },
    ],
  },
  trust: {
    label: "Används av organisationer som litar på COALA",
    ariaLabel: "Partner och organisationer som använder COALA",
    awardsLabel: "Utmärkelser och erkännanden",
    awardsAriaLabel: "Utmärkelser och erkännanden",
    awards: [
      "Vinnare av Silver Eco Festival 2024",
      "Silver Surfer",
      "Innovation & Prévention (I&P)",
      "French Tech 2023",
      "Santexpo FHF Award 2026",
      "Janus-priset, Institut Français du Design 2026",
      "Salon SAP Award 2024",
    ],
  },
  finalCta: {
    eyebrow: "Redo att prova?",
    title: (
      <>
        14 dagar att bilda<br />
        dig en egen <em>uppfattning</em>.
      </>
    ),
    lede: "Du kan returnera plagget inom 14 dagar, var som helst i Europeiska unionen, om det inte har använts. Demonstration via videosamtal på engelska när vi har tagit emot din beställning.",
    ctaOrder: "Beställ COALA · från 129 €",
    ctaQuote: "Begär offert",
  },
  crossLinks: [
    { eyebrow: "Plagget i detalj", title: "Fullständig produktsida" },
    { eyebrow: "Ska du utrusta ett vårdteam?", title: "Offerter för yrkesverksamma inom 48 timmar" },
    { eyebrow: "Har du frågor?", title: "Alla vanliga frågor" },
  ],
};

export default copy;

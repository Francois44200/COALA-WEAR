import type { FaqCategory } from "@/data/faq";

const data: FaqCategory[] = [
  {
    id: "produit",
    label: "Produkten",
    desc: "Material, hållbarhet, standarder",
    items: [
      {
        q: "Vad är COALA-plagget tillverkat av?",
        a: "Tekniskt polyester (215\u00a0g/m²) med förstärkt foder vid belastningspunkterna. Trippelsömmar på alla fyra greppzoner. Justeringsband av tekniskt vävband.",
      },
      {
        q: "Hur länge håller plagget?",
        a: "Vid användning i hemmet: 4 till 6 år. Vid intensiv yrkesmässig användning: 18 till 24 månader. Tyget kan maskintvättas i 40\u00a0°C och torktumlas på skonprogram.",
      },
      {
        q: "Är COALA en medicinteknisk produkt?",
        a: "Nej. COALA är inte en medicinteknisk produkt enligt EU:s förordning om medicintekniska produkter (EU) 2017/745. Det är ett tekniskt arbetsplagg och en patenterad fransk innovation.",
      },
    ],
  },
  {
    id: "usage",
    label: "Användning och teknik",
    desc: "För vem, hur och hur ofta",
    items: [
      {
        q: "Passar COALA för min närstående?",
        a: "COALA passar de flesta personer som behöver hjälp vid förflyttningar och som kan delta åtminstone delvis i rörelsen genom att hålla i handtagen med båda händerna. Själva plagget bärs av den som hjälper och finns i storlek XS till 4XL, som väljs efter den som bär det. Vid särskilda tillstånd (långt framskridna trycksår, nyligen genomgången operation) bör du rådfråga vårdteamet.",
      },
      {
        q: "Behöver jag utbildning för att använda det?",
        a: "En bruksanvisning följer med varje plagg, och instruktionsfilmer online visar hur du använder det på rätt sätt.\n\nVid beställningar till team erbjuder Connect Link även en särskild utbildning för yrkesverksamma och deras chefer, via videosamtal på engelska när beställningen har tagits emot.",
      },
      {
        q: "Hur många förflyttningar kan man göra per dag?",
        a: "Plagget i sig har ingen begränsning. På den mänskliga sidan: bland 18 vårdare som följdes under 90 dagar var genomsnittet 8 förflyttningar per dag med COALA, utan att några ländryggsbesvär rapporterades.",
      },
      {
        q: "Kan det användas med rullstol?",
        a: "Ja. COALA fungerar lika bra vid förflyttningar från säng till stol, från stol till toalett och från stol till bil. Se vår sida ”Så fungerar det” för de 6 vanligaste situationerna.",
      },
      {
        q: "Behövs det två personer för att använda det?",
        a: "En vårdare räcker för de flesta förflyttningar. För tyngre personer (över 100\u00a0kg) eller förflyttningar från golvet till stol rekommenderas två vårdare.",
      },
    ],
  },
  {
    id: "achat",
    label: "Beställning och leverans",
    desc: "Beställningar, leveranstider, returer",
    items: [
      {
        q: "Hur beställer jag?",
        a: "Via vår webbutik shop.connectlink.fr (kort, Apple Pay eller banköverföring). För beställningar till verksamheter kan du också kontakta vårt team direkt på contact@connectlink.fr.",
      },
      {
        q: "Hur lång är leveranstiden?",
        a: "Leveranstider och fraktkostnader beror på vilket land du bor i och visas i kassan. Du kan följa ditt paket via e-post.",
      },
      {
        q: "Kan jag returnera mitt plagg?",
        a: "Ja, inom 14 dagar från hela Europeiska unionen, förutsatt att produkten inte har använts och är i nyskick. Varje retur kontrolleras före byte eller återbetalning. Av hygienskäl levereras plagget förseglat.",
      },
      {
        q: "Kan jag prova innan jag köper?",
        a: "Vi erbjuder inga kostnadsfria lån, inte heller till yrkesverksamma. Däremot kan produkten returneras inom 14 dagar om den inte har använts och är i nyskick.",
      },
    ],
  },
  {
    id: "pros",
    label: "Yrkesverksamma och verksamheter",
    desc: "Vårdboenden, sjukhus, hemtjänst",
    items: [
      {
        q: "Hur snabbt får jag en offert för verksamheter?",
        a: "Inom 2 arbetsdagar. En person i vårt team för yrkesverksamma ringer upp dig för att förstå din verksamhet och skickar sedan en anpassad offert.",
      },
      {
        q: "Ingår utbildningen verkligen?",
        a: "Utbildningen blir lönsam från 5 utrustade medarbetare och uppåt. Den leds av en ergonom eller arbetsterapeut från COALA-nätverket, via videosamtal på engelska när beställningen har tagits emot, och utbildningsmaterialet skickas till dig.",
      },
      {
        q: "Erbjuder ni villkor för verksamheter med flera enheter?",
        a: "Ja. Volympriser, samlade leveranser och en egen kontaktperson för koncerner, vårdorganisationer och förbund som beställer 100 plagg eller fler.",
      },
      {
        q: "Kan plagget anpassas (logotyp, avdelningsnamn)?",
        a: "Ja, screentryck eller brodyr är möjligt från 25 exemplar. Produktionstid: ytterligare 10 arbetsdagar.",
      },
    ],
  },
  {
    id: "lavage",
    label: "Tvätt och skötsel",
    desc: "Så tvättar, torkar och förvarar du det",
    items: [
      {
        q: "I vilken temperatur ska COALA tvättas?",
        a: "Maskintvätta i 40\u00a0°C på normalprogram med vanligt tvättmedel. Inget sköljmedel (det försvagar sömmarna). Inget klorblekmedel.",
      },
      {
        q: "Kan det torktumlas?",
        a: "Ja, men endast på skonprogram. Helst bör det torka plant eller på galge så att det behåller formen.",
      },
      {
        q: "Behöver det strykas?",
        a: "Det behövs inte. Om du ändå vill stryka, använd medelvärme och stryk aldrig de förstärkta greppzonerna.",
      },
      {
        q: "Hur ska COALA förvaras?",
        a: "Ihopvikt plant på en torr plats. Det individuella förvaringsfodralet (ingår vid beställningar till verksamheter) håller plagget i gott skick, även i en arbetsväska.",
      },
    ],
  },
];

export default data;

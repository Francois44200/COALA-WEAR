import type { FaqCategory } from "@/data/faq";

const data: FaqCategory[] = [
  {
    id: "produit",
    label: "Produktet",
    desc: "Materialer, holdbarhet, standarder",
    items: [
      {
        q: "Hva er COALA-plagget laget av?",
        a: "Teknisk polyester (215 g/m²) med forsterket fôr på belastningspunktene. Trippelsøm på alle de fire grepssonene. Justeringssnorer i teknisk bånd.",
      },
      {
        q: "Hvor lenge varer plagget?",
        a: "Ved bruk i hjemmet: 4 til 6 år. Ved intensiv profesjonell bruk: 18 til 24 måneder. Stoffet kan maskinvaskes på 40 °C og tørkes i tørketrommel på skånsomt program.",
      },
      {
        q: "Er COALA medisinsk utstyr?",
        a: "Nei. COALA er ikke medisinsk utstyr i henhold til EUs forordning om medisinsk utstyr (EU) 2017/745. Det er et teknisk arbeidsplagg og en patentert fransk innovasjon.",
      },
    ],
  },
  {
    id: "usage",
    label: "Bruk og teknikk",
    desc: "Hvem det passer for, hvordan og hvor ofte",
    items: [
      {
        q: "Passer COALA for min nærmeste?",
        a: "COALA passer for de fleste som trenger hjelp til forflytning og som kan delta i bevegelsen i det minste delvis, ved å holde i grepene med begge hender. Selve plagget brukes av den som hjelper, og finnes i størrelse XS til 4XL, valgt etter den som har det på. Ved spesielle tilstander (langt framskredne trykksår, nylig operasjon) bør du spørre helsepersonellet om råd.",
      },
      {
        q: "Trenger jeg opplæring for å bruke det?",
        a: "Hvert plagg leveres med bruksanvisning, og videoveiledninger på nett viser deg hvordan du bruker det riktig.\n\nVed bestillinger til team tilbyr Connect Link også en egen opplæringsøkt for fagfolk og deres ledere, på videosamtale på engelsk når bestillingen er mottatt.",
      },
      {
        q: "Hvor mange forflytninger kan man gjøre per dag?",
        a: "Selve plagget har ingen begrensning. På det menneskelige plan: blant 18 omsorgspersoner som ble fulgt i 90 dager, var gjennomsnittet 8 forflytninger om dagen med COALA, uten at noen rapporterte korsryggsmerter.",
      },
      {
        q: "Kan det brukes med rullestol?",
        a: "Ja. COALA fungerer like godt ved forflytning fra seng til stol, fra stol til toalett og fra stol til bil. Se siden vår «Slik fungerer det» for de 6 vanligste situasjonene.",
      },
      {
        q: "Må man være to for å bruke det?",
        a: "Én omsorgsperson er nok ved de fleste forflytninger. For tyngre personer (over 100 kg) eller forflytning fra gulv til stol anbefales to omsorgspersoner.",
      },
    ],
  },
  {
    id: "achat",
    label: "Bestilling og levering",
    desc: "Bestillinger, leveringstid, retur",
    items: [
      {
        q: "Hvordan bestiller jeg?",
        a: "I nettbutikken vår, shop.connectlink.fr (kort, Apple Pay eller bankoverføring). Ved bestillinger for virksomheter kan du også kontakte teamet vårt direkte på contact@connectlink.fr.",
      },
      {
        q: "Hvor lang er leveringstiden?",
        a: "Leveringstid og fraktkostnader avhenger av landet ditt og vises i kassen. Du kan følge pakken din via e-post.",
      },
      {
        q: "Kan jeg returnere plagget?",
        a: "Ja, innen 14 dager fra hele EU, forutsatt at produktet ikke er brukt og er som nytt. Alle returer kontrolleres før bytte eller refusjon. Av hygieniske hensyn leveres plagget forseglet.",
      },
      {
        q: "Kan jeg prøve det før jeg kjøper?",
        a: "Vi tilbyr ikke gratis utlån, heller ikke til fagfolk. Produktet kan likevel returneres innen 14 dager hvis det ikke er brukt og fortsatt er som nytt.",
      },
    ],
  },
  {
    id: "pros",
    label: "Fagfolk og virksomheter",
    desc: "Sykehjem, sykehus, hjemmetjenester",
    items: [
      {
        q: "Hvor raskt får jeg et tilbud som virksomhet?",
        a: "Innen 2 arbeidsdager. En person fra vårt team for fagkunder ringer deg opp for å forstå arbeidssituasjonen deres, og sender deretter et skreddersydd tilbud.",
      },
      {
        q: "Er opplæring virkelig inkludert?",
        a: "Opplæring lønner seg fra 5 utstyrte fagpersoner og oppover. Den ledes av en ergonom eller ergoterapeut fra COALA-nettverket, på videosamtale på engelsk når bestillingen er mottatt, og opplæringsmateriellet sendes til dere.",
      },
      {
        q: "Har dere egne vilkår for virksomheter med flere lokasjoner?",
        a: "Ja. Volumpriser, samlede leveranser og en egen kontaktperson for konsern, helse- og omsorgsvirksomheter og forbund som bestiller 100 plagg eller flere.",
      },
      {
        q: "Kan plagget tilpasses (logo, navn på avdeling)?",
        a: "Ja, silketrykk eller brodering er mulig fra 25 enheter. Produksjonstid: 10 ekstra arbeidsdager.",
      },
    ],
  },
  {
    id: "lavage",
    label: "Vask og vedlikehold",
    desc: "Slik vasker, tørker og oppbevarer du det",
    items: [
      {
        q: "På hvilken temperatur skal COALA vaskes?",
        a: "Maskinvask på 40 °C på normalprogram med vanlig vaskemiddel. Ikke tøymykner (det svekker sømmene). Ikke klorblekemiddel.",
      },
      {
        q: "Tåler det tørketrommel?",
        a: "Ja, men bare på skånsomt program. Helst bør det tørkes flatt eller på kleshenger for å beholde formen.",
      },
      {
        q: "Hva med stryking?",
        a: "Ikke nødvendig. Hvis du likevel vil stryke, bruk middels varme og stryk aldri de forsterkede grepssonene.",
      },
      {
        q: "Hvordan bør COALA oppbevares?",
        a: "Brettet flatt på et tørt sted. Den individuelle oppbevaringsposen (inkludert ved bestillinger for virksomheter) holder plagget i god stand, også i en arbeidsveske.",
      },
    ],
  },
];

export default data;

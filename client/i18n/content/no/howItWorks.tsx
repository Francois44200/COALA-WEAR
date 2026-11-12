import type { HowItWorksCopy } from "../howItWorks";

const copy: HowItWorksCopy = {
  breadcrumb: {
    ariaLabel: "Brødsmulesti",
    home: "Forside",
    current: "Slik fungerer det",
  },
  hero: {
    eyebrow: "Brukerveiledning",
    title: (
      <>
        Ta på, støtt,<br /><em>ta av</em>.
      </>
    ),
    lede:
      "COALA aktiveres på noen sekunder og deaktiveres like raskt. I mellomtiden deltar personen du hjelper: du løfter ikke lenger, du støtter. Denne veiledningen bygger på opplæringsmateriellet som brukes når COALA innføres i pleieteam.",
    ctaOrder: "Bestill COALA",
    ctaProduct: "Se produktsiden",
  },
  video: {
    eyebrow: "Videodemonstrasjon",
    title: (
      <>
        COALA-teknikken<br />i <em>virkelige situasjoner</em>.
      </>
    ),
    iframeTitle: "Demonstrasjon av COALA-forflytningsplagget (på fransk)",
    note: "Video på fransk",
  },
  steps: {
    eyebrow: "Instruksjoner",
    title: (
      <>
        Aktiver, og løsne deretter<br /><em>støtten</em>.
      </>
    ),
    lede:
      "Fem trinn for å gjøre deg klar før du hjelper noen å forflytte seg. Fem trinn for å gjøre det til et vanlig plagg igjen når forflytningen er ferdig.",
    phase1Label: "Fase 1: Ta på",
    phase1: [
      { n: "01", title: "Ta på plagget", body: "COALA tas på som et vanlig arbeidsplagg: korsryggbeltet er åpent og festet til plagget med borrelåsremsene, og skulderstroppene er løse." },
      { n: "02", title: "Knepp opp de to nederste knappene", body: "De to nederste knappene gir tilgang til korsryggbeltet og strammerne for skulderstroppene." },
      { n: "03", title: "Stram korsryggbeltet", body: "Stram beltet, og fest det med ønsket stramming." },
      { n: "04", title: "Stram skulderstroppene", body: "Trekk i den nederste stroppen på skulderstrammerne til du oppnår ønsket stramming, i lukket stilling." },
      { n: "05", title: "Lukk plagget", body: "Knepp de to siste knappene. Støtten er aktiv: du er klar til å hjelpe." },
    ],
    phase1Alt: "COALA-forflytningsplagget åpent, med korsryggbeltet og strammerne for skulderstroppene synlige",
    phase1Caption: "Korsryggbelte og strammere for skulderstroppene, støtten aktiv.",
    phase2Label: "Fase 2: Ta av",
    phase2: [
      { n: "01", title: "Knepp opp de to nederste knappene", body: "Den fysiske hjelpen er over: du kan løsne støtten." },
      { n: "02", title: "Løsne skulderstrammingen", body: "Løft strammerne under armene for å løsne skulderstroppene." },
      { n: "03", title: "Åpne korsryggbeltet", body: "Åpne beltet for å fjerne all stramming." },
      { n: "04", title: "Legg bort beltet", body: "Fest begge endene av beltet tilbake på innsiden av de to forstykkene på plagget." },
      { n: "05", title: "Knepp de to nederste knappene", body: "COALA blir et vanlig plagg igjen, umerkelig både for deg og for dem rundt deg." },
    ],
    phase2Alt: "COALA-forflytningsplagget med håndtakene gjemt bort, igjen et vanlig plagg",
    phase2Caption: "Støtten løsnet: COALA er et vanlig plagg igjen.",
    warning:
      "Kontroller når du tar det på: sørg for at begge delene av beltet går gjennom håndtakene, på innsiden av plagget.",
  },
  situations: {
    eyebrow: "Når du bruker det",
    title: (
      <>
        Når COALA<br /><em>hjelper</em> deg.
      </>
    ),
    lede:
      "Finn de situasjonene med fysisk hjelp der COALA reduserer belastningen på armer og rygg, og gjør det lettere for personen du hjelper å delta.",
    imageAlt: "Helsepersonell med COALA-forflytningsplagget som hjelper en eldre person mot rullatoren",
    items: [
      "Forflytning fra sittende til stående",
      "Forflytning fra stol til toalett",
      "Reposisjonering i seng og opp av sengen",
      "Assistert gange",
      "Reposisjonering i stol",
      "Snu seg i sengen",
    ],
    profilesTitle: "Hvilke pasienter passer det for?",
    profilesIntro:
      "Kan pasienten forstå instruksjoner om å samarbeide? Tillater den fysiske tilstanden bruk av COALA? Vurder hvert tilfelle individuelt:",
    profiles: [
      "Evne til å forstå veiledning om samarbeid",
      "Evne til å bære egen vekt",
      "Vekt",
      "Bevegelighet",
      "Balanse",
      "Muskelstyrke i armene",
    ],
    profilesNote:
      "Er du usikker på om COALA passer for pasientens situasjon, kan du rådføre deg med pasientens behandlingsteam.",
  },
  grips: {
    eyebrow: "Råd om bruk",
    title: (
      <>
        Hvilke håndtak<br />du skal <em>tilby</em>.
      </>
    ),
    lede: "Grepene du tilbyr, avgjør hvor mye belastning som blir liggende på skuldrene og ryggen din.",
    imageAlt: "Nærbilde av en grepssone på skulderen av COALA-forflytningsplagget",
    caption: "Øvre grepssone, på skulderen.",
    items: [
      { title: "Kryssgrep", detail: "Tilby ett nedre håndtak og det øvre håndtaket på motsatt side. Den øvre hånden kan plasseres i bevegelsesretningen, for å hjelpe med å lede pasientens blikk." },
      { title: "Begge nedre håndtak", detail: "Å tilby begge de nedre håndtakene reduserer belastningen på skuldrene og ryggen din ytterligere." },
      { title: "Aldri begge øvre håndtak", detail: "Ikke tilby begge de øvre håndtakene samtidig: det belaster skuldrene og ryggen din." },
      { title: "Ikke la håndtakene henge ute", detail: "Gjem håndtakene mellom hver bruk: de kan hekte seg fast eller bli grepet uventet." },
      { title: "Løsne støtten når den ikke er i bruk", detail: "Løsne beltet og skulderstroppene når du ikke gir fysisk hjelp, for eksempel ved måltider eller i en pause." },
    ],
  },
  verbal: {
    eyebrow: "Muntlig veiledning",
    title: (
      <>
        Ordene som<br /><em>engasjerer</em> pasienten.
      </>
    ),
    lede:
      "Veiled pasienten så tydelig som mulig, slik at dere beveger dere sammen. Gjenta og omformuler gjerne: hvert par av omsorgsperson og pasient finner sine egne signaler.",
    imageAlt: "Helsepersonell som veileder en pasient mot grepssonene på COALA-forflytningsplagget",
    caption: "Øyekontakten opprettholdes gjennom hele forflytningen.",
    evaluationLabel: "Vurdering av evnen til å samarbeide",
    evaluation: ["«Kan du ta tak i dette håndtaket?»", "«Føler du deg sterk?»"],
    sequenceLabel: "Forflytningsrekkefølge",
    sequence: [
      "«Ta tak i disse håndtakene»",
      "«Lukk hendene godt rundt håndtakene»",
      "«Hold godt fast. Føler du deg sterk?»",
      "«Flytt føttene så langt bak som du kan»",
      "«Len deg fremover»",
      "«Trekk håndtakene mot deg og skyv med beina»",
    ],
  },
  posture: {
    eyebrow: "Omsorgspersonens arbeidsstilling",
    title: (
      <>
        Stå i en <em>sterk</em> stilling,<br />uten å løfte.
      </>
    ),
    lede:
      "COALA belaster leddene i armer og rygg mindre, forutsatt at du plasserer deg riktig.",
    items: [
      { title: "Rett rygg", detail: "Hold ryggen rett mens du veileder pasienten til å flytte føttene bakover og lene seg mot deg." },
      { title: "Bøyde hofter og knær", detail: "Bøy hoftene og knærne lett for å støtte pasientens bevegelse effektivt." },
      { title: "Føttene fra hverandre", detail: "Plasser føttene fra hverandre for å øke stabiliteten." },
      { title: "Utfall fremover / bakover", detail: "Sett én fot mellom pasientens føtter, og bruk utfallsbevegelser for å følge forflytningen." },
    ],
  },
  care: {
    eyebrow: "Vedlikehold",
    title: (
      <>
        <em>Vaskeanvisning</em>.
      </>
    ),
    items: [
      "Bomullsvask på 40 °C.",
      "Fest beltet lukket, tredd gjennom håndtakene, før det legges i maskinen.",
      "Velg et skånsomt tørkeprogram eller lav temperatur.",
    ],
    imageAlt: "COALA-forflytningsplagget brettet sammen, klart til vask",
    caption: "Beltet festet og håndtakene gjemt bort før maskinvask.",
  },
  deployment: {
    eyebrow: "Innføring i virksomheten din",
    title: (
      <>
        De fem nøklene<br />til <em>suksess</em>.
      </>
    ),
    factors: [
      "Tilby COALA til helsepersonell som melder seg frivillig",
      "Ta i bruk de riktige veiledningsbevegelsene",
      "Led pasientene mot de nedre håndtakene",
      "Løsne støtten og gjem håndtakene",
      "Venn deg av med å løfte",
    ],
    staffLabel: "Helsepersonell (oversatt fra fransk)",
    staffQuotes: [
      "«Mindre sliten på slutten av dagen»",
      "«Tryggere, jeg har hendene fri»",
      "«Enkelt å bruke»",
      "«Man venner seg fort til det»",
    ],
    patientLabel: "Pasienter (oversatt fra fransk)",
    patientQuotes: [
      "«Vi står ansikt til ansikt, øye til øye»",
      "«Mer aktiv medvirkning»",
      "«Bedre grep»",
      "«En følelse av trygghet»",
    ],
  },
  cta: {
    title: "Klar til å jobbe med COALA?",
    body: "Bestill direkte, eller be om et tilbud til virksomheten din.",
    order: "Bestill COALA",
    quote: "Be om tilbud",
    cards: [
      { eyebrow: "Plagget i detalj", title: "Fullstendig produktside" },
      { eyebrow: "Hvem bruker det", title: "Erfaringer og resultater" },
      { eyebrow: "Spørsmål", title: "Fullstendig FAQ" },
    ],
  },
};

export default copy;

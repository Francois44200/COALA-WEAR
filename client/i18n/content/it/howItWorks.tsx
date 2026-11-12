import type { HowItWorksCopy } from "../howItWorks";

const copy: HowItWorksCopy = {
  breadcrumb: {
    ariaLabel: "Percorso di navigazione",
    home: "Home",
    current: "Come funziona",
  },
  hero: {
    eyebrow: "Guida all’uso",
    title: (
      <>
        Indossalo, assisti,<br /><em>toglilo</em>.
      </>
    ),
    lede:
      "COALA si attiva in pochi secondi e si disattiva altrettanto rapidamente. Nel frattempo, la persona che aiuti partecipa: non la sollevi più, la accompagni. Questa guida si basa sul materiale formativo utilizzato quando COALA viene introdotto nei team di assistenza.",
    ctaOrder: "Ordina COALA",
    ctaProduct: "Vedi la pagina del prodotto",
  },
  video: {
    eyebrow: "Dimostrazione video",
    title: (
      <>
        La tecnica COALA<br />in <em>situazioni reali</em>.
      </>
    ),
    iframeTitle: "Dimostrazione dell’indumento di trasferimento COALA (in francese)",
    note: "Video in francese",
  },
  steps: {
    eyebrow: "Istruzioni",
    title: (
      <>
        Attiva, poi rilascia<br />il <em>sostegno</em>.
      </>
    ),
    lede:
      "Cinque passaggi per prepararti prima di aiutare qualcuno a spostarsi. Cinque passaggi per tornare a un indumento normale una volta completato il trasferimento.",
    phase1Label: "Fase 1: indossarlo",
    phase1: [
      { n: "01", title: "Indossa l’indumento", body: "COALA si indossa come un normale indumento da lavoro: la cintura lombare è aperta e fissata all’indumento con le sue strisce a strappo, e le bretelle sono allentate." },
      { n: "02", title: "Sbottona i due bottoni in basso", body: "I due bottoni più in basso danno accesso alla cintura lombare e ai tensori delle bretelle." },
      { n: "03", title: "Stringi la cintura lombare", body: "Stringi la cintura, poi chiudila alla tensione desiderata." },
      { n: "04", title: "Tendi le bretelle", body: "Tira la cinghia inferiore dei tensori delle spalle fino a raggiungere la tensione desiderata, in posizione chiusa." },
      { n: "05", title: "Chiudi l’indumento", body: "Abbottona gli ultimi due bottoni. Il sostegno è attivo: sei pronto ad assistere." },
    ],
    phase1Alt: "Indumento di trasferimento COALA aperto, con in vista la cintura lombare e i tensori delle bretelle",
    phase1Caption: "Cintura lombare e tensori delle bretelle, sostegno attivo.",
    phase2Label: "Fase 2: toglierlo",
    phase2: [
      { n: "01", title: "Sbottona i due bottoni in basso", body: "L’assistenza fisica è terminata: puoi rilasciare il sostegno." },
      { n: "02", title: "Rilascia la tensione sulle spalle", body: "Solleva i tensori sotto le braccia per allentare le bretelle." },
      { n: "03", title: "Slaccia la cintura lombare", body: "Apri la cintura per eliminare ogni tensione." },
      { n: "04", title: "Riponi la cintura", body: "Fissa entrambe le estremità della cintura all’interno dei due pannelli anteriori dell’indumento." },
      { n: "05", title: "Abbottona i due bottoni in basso", body: "COALA torna a essere un indumento normale, impercettibile sia per te sia per chi ti sta intorno." },
    ],
    phase2Alt: "Indumento di trasferimento COALA con le maniglie riposte, tornato un indumento normale",
    phase2Caption: "Sostegno rilasciato: COALA torna a essere un indumento normale.",
    warning:
      "Verifica quando lo indossi: assicurati che entrambe le parti della cintura passino attraverso le maniglie, all’interno dell’indumento.",
  },
  situations: {
    eyebrow: "Quando usarlo",
    title: (
      <>
        Quando COALA<br />ti <em>aiuta</em>.
      </>
    ),
    lede:
      "Individua le situazioni di assistenza fisica in cui COALA riduce il carico su braccia e schiena e facilita la partecipazione della persona che aiuti.",
    imageAlt: "Professionista dell’assistenza che indossa l’indumento di trasferimento COALA mentre accompagna una persona anziana verso il suo deambulatore",
    items: [
      "Passaggio da seduto a in piedi",
      "Trasferimento dalla sedia al WC",
      "Riposizionamento a letto e alzata",
      "Deambulazione assistita",
      "Riposizionamento sulla sedia",
      "Rotazione a letto",
    ],
    profilesTitle: "A quali pazienti è adatto?",
    profilesIntro:
      "Il paziente è in grado di comprendere le istruzioni che gli chiedono di collaborare? Le sue condizioni fisiche consentono l’uso di COALA? Valuta ogni caso singolarmente:",
    profiles: [
      "Capacità di comprendere le indicazioni di collaborazione",
      "Qualità del carico sugli arti inferiori",
      "Peso",
      "Mobilità",
      "Equilibrio",
      "Tono muscolare degli arti superiori",
    ],
    profilesNote:
      "Se non sei sicuro che COALA sia adatto alla situazione di un paziente, consulta l’équipe sanitaria che lo segue.",
  },
  grips: {
    eyebrow: "Indicazioni per l’uso",
    title: (
      <>
        Quali maniglie<br /><em>offrire</em>.
      </>
    ),
    lede: "Le prese che offri determinano quanto carico resta sulle tue spalle e sulla tua schiena.",
    imageAlt: "Primo piano di una zona di presa sulla spalla dell’indumento di trasferimento COALA",
    caption: "Zona di presa superiore, sulla spalla.",
    items: [
      { title: "Presa incrociata", detail: "Offri una maniglia inferiore e la maniglia superiore del lato opposto. La mano in alto può essere posizionata nella direzione del movimento, per aiutare a orientare lo sguardo del paziente." },
      { title: "Entrambe le maniglie inferiori", detail: "Offrire entrambe le maniglie inferiori riduce ancora di più il carico su spalle e schiena." },
      { title: "Mai entrambe le maniglie superiori", detail: "Non offrire contemporaneamente entrambe le maniglie superiori: questo sollecita spalle e schiena." },
      { title: "Non lasciare le maniglie fuori", detail: "Riponi le maniglie tra un utilizzo e l’altro: potrebbero impigliarsi o essere afferrate all’improvviso." },
      { title: "Rilascia il sostegno quando non serve", detail: "Allenta cintura e bretelle quando non stai fornendo assistenza fisica, ad esempio durante l’aiuto ai pasti o durante una pausa." },
    ],
  },
  verbal: {
    eyebrow: "Guida verbale",
    title: (
      <>
        Le parole che<br /><em>coinvolgono</em> il paziente.
      </>
    ),
    lede:
      "Guida il paziente nel modo più chiaro possibile per muovervi insieme. Non esitare a ripetere e a riformulare: ogni coppia caregiver-paziente trova i propri punti di riferimento.",
    imageAlt: "Professionista dell’assistenza che guida un paziente verso le zone di presa dell’indumento di trasferimento COALA",
    caption: "Il contatto visivo viene mantenuto durante tutta la manovra.",
    evaluationLabel: "Valutare la capacità di collaborare",
    evaluation: ["«Riesce ad afferrare questa maniglia?»", "«Si sente in forze?»"],
    sequenceLabel: "Sequenza del trasferimento",
    sequence: [
      "«Afferri queste maniglie»",
      "«Stringa forte le mani»",
      "«Si tenga forte. Si sente in forze?»",
      "«Porti indietro i piedi il più possibile»",
      "«Si sporga in avanti»",
      "«Tiri le maniglie verso di sé e spinga con le gambe»",
    ],
  },
  posture: {
    eyebrow: "Postura di chi assiste",
    title: (
      <>
        Mettiti in posizione di <em>forza</em>,<br />senza sollevare.
      </>
    ),
    lede:
      "COALA sollecita meno le articolazioni di braccia e schiena, a condizione che tu ti posizioni correttamente.",
    items: [
      { title: "Schiena dritta", detail: "Mantieni la schiena dritta mentre guidi il paziente a portare indietro i piedi e a sporgersi verso di te." },
      { title: "Anche e ginocchia flesse", detail: "Fletti leggermente anche e ginocchia per accompagnare efficacemente il movimento del paziente." },
      { title: "Piedi divaricati", detail: "Tieni i piedi divaricati per aumentare la tua stabilità." },
      { title: "Affondi avanti / indietro", detail: "Posiziona un piede tra i piedi del paziente e usa movimenti di affondo per accompagnare il trasferimento." },
    ],
  },
  care: {
    eyebrow: "Manutenzione",
    title: (
      <>
        Istruzioni di <em>lavaggio</em>.
      </>
    ),
    items: [
      "Lavaggio cotone a 40 °C.",
      "Chiudi la cintura, infilata nelle maniglie, prima di metterla in lavatrice.",
      "Scegli un ciclo di asciugatura delicato o a bassa temperatura.",
    ],
    imageAlt: "Indumento di trasferimento COALA piegato, pronto per il lavaggio",
    caption: "Cintura chiusa e maniglie riposte prima del lavaggio in lavatrice.",
  },
  deployment: {
    eyebrow: "Introdurlo nella tua struttura",
    title: (
      <>
        Le cinque chiavi<br />del <em>successo</em>.
      </>
    ),
    factors: [
      "Proporre COALA ai professionisti dell’assistenza volontari",
      "Adottare i giusti gesti di guida",
      "Orientare i pazienti verso le maniglie inferiori",
      "Rilasciare il sostegno e riporre le maniglie",
      "Disimparare l’abitudine di sollevare",
    ],
    staffLabel: "Professionisti dell’assistenza (tradotto dal francese)",
    staffQuotes: [
      "«Meno stanca a fine giornata»",
      "«Più sicuro, ho le mani libere»",
      "«Facile da usare»",
      "«Ci si abitua in fretta»",
    ],
    patientLabel: "Pazienti (tradotto dal francese)",
    patientQuotes: [
      "«Siamo faccia a faccia, ci guardiamo negli occhi»",
      "«Partecipazione più attiva»",
      "«Presa migliore»",
      "«Una sensazione di sicurezza»",
    ],
  },
  cta: {
    title: "Pronto a lavorare con COALA?",
    body: "Ordina direttamente oppure richiedi un preventivo per la tua struttura.",
    order: "Ordina COALA",
    quote: "Richiedi un preventivo",
    cards: [
      { eyebrow: "L’indumento nel dettaglio", title: "Pagina completa del prodotto" },
      { eyebrow: "Chi lo usa", title: "Testimonianze e risultati" },
      { eyebrow: "Domande", title: "Tutte le FAQ" },
    ],
  },
};

export default copy;

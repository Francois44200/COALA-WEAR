import type { ProductCopy } from "../product";

const copy: ProductCopy = {
  buy: {
    viewLabels: [
      "Indumento di trasferimento COALA, vista frontale, quattro zone di presa aperte",
      "Indumento di trasferimento COALA, vista di tre quarti, quattro zone di presa aperte",
      "Indumento di trasferimento COALA con le maniglie riposte, vista frontale",
      "Struttura a esoscheletro interna dell’indumento di trasferimento COALA",
      "Indumento di trasferimento COALA indossato da un professionista dell’assistenza, zone di presa aperte",
      "COALA indossato con le maniglie riposte, simile a un normale indumento da lavoro",
      "Primo piano di una zona di presa all’altezza della spalla",
      "Professionista dell’assistenza che sostiene un paziente indossando l’indumento di trasferimento COALA",
    ],
    refPrefix: "COALA · rif. CL-B137-BLANC-",
    thumbsAria: "Viste del prodotto",
    eyebrow: "Indumento di trasferimento",
    title: (
      <>
        L’indumento di trasferimento <em>COALA</em>
      </>
    ),
    lede:
      "Un indumento tessile pensato per i trasferimenti. Quattro zone di presa rinforzate e una struttura a esoscheletro che protegge chi assiste. COALA non si vede e non si sente, ma ti protegge ogni volta che serve.",
    price: "da 129 €",
    priceMeta: "IVA inclusa",
    sizeLabel: "Taglia",
    sizeGuide: "Guida alle taglie ↗",
    sizeAria: "Scegli una taglia",
    colourLabel: "Colore · Bianco",
    colourNote: "COALA è attualmente disponibile solo in bianco.",
    ctaOrder: "Ordina COALA",
    ctaQuote: "Richiedi un preventivo",
    reassuranceAria: "I nostri impegni",
    reassurance: [
      "Reso gratuito entro 14 giorni in tutta l’UE",
      "Innovazione francese brevettata",
      "Lavabile in lavatrice a 40 °C",
    ],
  },

  features: {
    eyebrow: "Progettato da chi assiste, per chi assiste",
    title: (
      <>
        Quattro scelte tecniche,
        <br />
        un unico <em>obiettivo</em>.
      </>
    ),
    items: [
      {
        tag: "01 · Azione a quattro mani",
        title: "Un movimento condiviso: la persona si aggrappa",
        body: "COALA è indossato da chi assiste, mentre la persona aiutata afferra le maniglie. Chi assiste guida la manovra sfruttando il peso del proprio corpo invece di sollevare: il movimento diventa uno sforzo condiviso. Quattro zone di presa, con maniglie all’altezza delle spalle, dei fianchi e delle anche.",
        label: "Le quattro zone di presa rinforzate dell’indumento di trasferimento COALA",
      },
      {
        tag: "02 · Abbigliamento da lavoro",
        title: "Solo 200 g in più, nessun tempo di preparazione",
        body: "COALA si indossa come un normale indumento da lavoro, in pochi secondi. Durante la movimentazione niente più sforzi per spalle e zona lombare, nessun aggancio meccanico e nessuna lunga formazione. Subito pronto, ovunque tu sia.",
        label: "Indumento di trasferimento COALA con le maniglie riposte, identico a un normale indumento da lavoro",
      },
      {
        tag: "03 · Un sostegno che si disattiva",
        title: "Rilasciato in 5 secondi",
        body: "Terminati i trasferimenti, chi assiste allenta le zone di sostegno e ripone subito le maniglie. Una volta rilasciato, non esercita alcuna compressione: COALA è impercettibile per chi lo indossa e invisibile agli altri.",
        label: "Imbracatura interna dell’indumento di trasferimento COALA, rilasciata in cinque secondi",
      },
      {
        tag: "04 · Assistenza a 360°",
        title: "Aiuta chi assiste senza sostituire il contatto umano",
        body: "COALA sostiene il movimento di chi assiste senza cambiare il suo modo di prestare assistenza. Tessuto tecnico in poliestere 215 g/m², lavabile a 40 °C, taglie dalla XS alla 4XL.",
        label: "Professionista dell’assistenza che accompagna una persona anziana al suo deambulatore indossando COALA",
      },
    ],
  },

  range: {
    eyebrow: "La gamma",
    title: (
      <>
        Tre modelli, uno stesso <em>movimento</em>.
      </>
    ),
    lede:
      "Imbracatura e tessuto variano in base all’intensità d’uso. Tutti i modelli sono disponibili dalla XS alla 4XL (taglie francesi dalla 34 alla 64), sono lavabili in lavatrice a 40 °C e compatibili con la raccomandazione HAS R.47.",
    badge: "Il più scelto",
    imgAlt: (name) => `Indumento di trasferimento ${name} indossato`,
    vat: "IVA inclusa",
    harnessLabel: "Imbracatura",
    fabricLabel: "Tessuto",
    supportLabel: "Supporto",
    cta: "Ordina COALA",
    models: [
      { audience: "Caregiver familiari", harness: "1 mm", fabric: "50% cotone · 50% poliestere", support: "Guida all’uso inclusa" },
      { audience: "Professionisti dell’assistenza e caregiver abituali", harness: "1 mm, foderata in cotone", fabric: "50% cotone · 50% poliestere", support: "Guida all’uso inclusa" },
      { audience: "Professionisti dell’assistenza", harness: "2 mm, foderata in CoolTex®", fabric: "Tessuto tecnico CoolTex®", support: "Formazione e affiancamento" },
    ],
    noteBefore: "L’imbracatura pesa circa 200 g e si attiva in una decina di secondi. Se devi equipaggiare una struttura, ",
    noteLink: "richiedi un preventivo",
    noteAfter: " invece di effettuare un ordine individuale.",
  },

  go: {
    badge: "Prossimamente",
    subtitle: (
      <>
        Il gilet che protegge la tua salute, per proteggere meglio gli <em>altri</em>.
      </>
    ),
    priceValue: "Prezzo su richiesta",
    priceCta: "Chiedi il prezzo",
    lede:
      "Sviluppato con e per gli equipaggi delle ambulanze, COALA Go integra il sistema COALA in un gilet ad alta visibilità: un’imbracatura interna e maniglie di presa esterne che riducono il carico sulla schiena e limitano il rischio di infortuni.",
    photoAlt: "Soccorritore che indossa il gilet COALA Go",
    benefits: [
      { title: "Riduce lo sforzo sulla schiena", detail: "Il sistema COALA trasferisce le forze dalle spalle al bacino e alla zona lombare." },
      { title: "Limita il rischio di DMS", detail: "Maniglie di presa esterne per una tenuta migliore e meno tensione." },
      { title: "Sostegno e sicurezza", detail: "Un sistema integrato, discreto e sempre disponibile sotto il gilet." },
      { title: "Comfort quotidiano", detail: "Taglio ergonomico, zone traspiranti e fodera in rete che seguono i tuoi movimenti." },
    ],
    specs: [
      { label: "Sistema COALA", value: "Imbracatura interna nascosta · maniglie di presa retrattili" },
      { label: "Visibilità", value: "Bande retroriflettenti · 360°" },
      { label: "Tasche", value: "Tasche sul petto con zip · ampie tasche inferiori con zip" },
      { label: "Materiali", value: "100% poliestere resistente e idrorepellente · fodera in rete traspirante" },
      { label: "Colore", value: "Blu navy" },
      { label: "Taglie", value: "Dalla XS alla 4XL · taglio dritto unisex" },
      { label: "Manutenzione", value: "Lavabile in lavatrice a 60 °C" },
    ],
    usagesTitle: "Per ogni intervento",
    usages: [
      "Movimentazione dei pazienti",
      "Trasporto in barella",
      "Sollevamenti e trasferimenti",
      "Soccorso a domicilio",
      "Situazioni di emergenza",
    ],
    note:
      "COALA Go non è ancora acquistabile online. Contattaci per sapere quando sarà disponibile e ricevere una proposta su misura per il tuo servizio.",
  },

  compare: {
    eyebrow: "Perché non un ausilio meccanico o una normale divisa da lavoro?",
    title: (
      <>
        I trasferimenti meritano
        <br />
        uno <em>strumento dedicato</em>.
      </>
    ),
    lede:
      "Abbiamo confrontato COALA con le due pratiche più diffuse sul campo. Ecco come si comportano nell’uso reale.",
    coalaSub: "Indumento di trasferimento",
    machineBrand: "Sollevapazienti",
    machineSub: "Ausilio di sollevamento meccanico",
    classicBrand: "Divisa da lavoro classica",
    classicSub: "Sanitaria o in tessuto",
    rows: [
      {
        label: "Movimento di trasferimento",
        coala: "La persona aiutata partecipa attivamente, mentre chi assiste guida il trasferimento con il peso del corpo, schiena dritta e addominali attivati, senza sforzare spalle o braccia.",
        machine: "Schiena e braccia piegate durante il posizionamento delle imbracature.\nNessun gesto di movimentazione.",
        classic: "Trasferimento manuale senza ausili.\nCarico sostenuto con la schiena piegata e le braccia in trazione.",
      },
      {
        label: "Rispetto della dignità",
        coala: "La persona aiutata partecipa attivamente, a vantaggio della salute di chi assiste.\nUna relazione più equilibrata tra chi assiste e chi è assistito.\nIl contatto visivo è mantenuto.",
        machine: "Durante il trasferimento è la macchina a fare tutto.\nNessun contatto umano.\nDipendere da una macchina può essere difficile da accettare.",
        classic: "Un contatto umano che mette a rischio il professionista dell’assistenza.\nNessun contatto visivo.",
      },
      {
        label: "Sforzo su schiena, spalle e braccia",
        coala: "Niente più schiena piegata né sforzo attivo delle braccia.\nSchiena dritta, addominali attivati e mani libere.",
        machine: "Nessun movimento di forza.\nPosizionamento e rimozione delle imbracature, manovra dell’apparecchio.",
        classic: "Gesti di movimentazione, sforzi e tensioni che causano lombalgie e DMS di spalle e braccia.",
      },
      {
        label: "Durata del trasferimento",
        coala: "35 secondi per alzare una persona e farla sedere su una sedia",
        machine: "3 minuti e 40 secondi per alzare una persona e farla sedere su una sedia",
        classic: "25 secondi per alzare una persona e farla sedere su una sedia",
      },
      {
        label: "Progettazione",
        coala: "Innovazione francese brevettata",
        machine: "Progettato e prodotto a livello globale",
        classic: "Prodotta a livello globale",
      },
      {
        label: "Costo su 3 anni (5 operatori)",
        coala: "~1650 € · una tantum",
        machine: "~10 000 €",
        classic: "~640 € · materiali di consumo",
      },
    ],
  },

  specs: {
    eyebrow: "Caratteristiche tecniche",
    title: "Tutto ciò che serve, niente di superfluo.",
    items: [
      { label: "Composizione", value: "Poliestere tecnico 215 g/m² · fodera rinforzata" },
      { label: "Taglie disponibili", value: "XS · S · M · L · XL · XXL · 3XL · 4XL (taglie francesi dalla 34 alla 64)" },
      { label: "Colore", value: "Bianco" },
      { label: "Lavaggio", value: "Lavaggio in lavatrice a 40 °C · asciugatrice a ciclo delicato" },
      { label: "Progettazione", value: "Innovazione francese brevettata · Connect Link" },
    ],
    download: "Scarica la scheda tecnica (PDF)",
    guideEyebrow: "Guida alle taglie",
    guideTitle: "Scegliere la taglia giusta.",
    guideIntro: (
      <>
        COALA è indossato da <em>chi assiste, caregiver o professionista</em>: prendi quindi le misure della
        persona che indosserà l’indumento. Se sei tra due taglie, scegli quella più grande.
      </>
    ),
    toggleAria: "Tabella delle taglie",
    women: "Donna",
    men: "Uomo",
    tableAria: (morpho) => `Tabella delle taglie COALA: ${morpho}`,
    colSize: "Taglia",
    colConfection: "Taglia francese",
    colChest: "Torace",
    colWaist: "Vita",
    point: "Punto",
    note: "Misure del corpo, in centimetri.",
  },

  quote: {
    text: "Assisto mio marito da quattro anni. La prima volta che ho usato COALA per spostarlo dal letto alla poltrona, ho capito che non dovevo diventare una fisioterapista. Mi serviva solo uno strumento pensato per il mio corpo.",
    name: "Hélène, 67 anni",
    role: "Caregiver familiare · Nantes (tradotto dal francese)",
  },

  faq: {
    eyebrow: "Domande sull’indumento",
    title: (
      <>
        Le domande
        <br />
        che ci fanno
        <br />
        <em>più spesso</em>.
      </>
    ),
    cta: "Vedi tutte le domande",
    items: [
      {
        q: "COALA è adatto al mio caro?",
        a: "COALA lo indossi tu, che assisti, ed è adatto ad aiutare chiunque abbia bisogno di assistenza nei trasferimenti e sia in grado di afferrare le maniglie, sia autonomo sia parzialmente autonomo. L’indumento è disponibile dalla XS alla 4XL, in base alla taglia di chi assiste. In caso di condizioni particolari (piaghe da decubito avanzate, intervento chirurgico recente), chiedi consiglio all’équipe sanitaria.",
      },
      {
        q: "Quanto dura un indumento?",
        a: "Con un uso domestico (1-2 trasferimenti al giorno): da 4 a 6 anni. Con un uso professionale (10-15 trasferimenti al giorno): da 18 a 24 mesi. Il tessuto è lavabile in lavatrice a 40 °C e può andare in asciugatrice a ciclo delicato.",
      },
      {
        q: "Posso provarlo prima di acquistarlo?",
        a: "Non offriamo prestiti gratuiti, nemmeno ai professionisti. Il prodotto può essere restituito entro 14 giorni se non è stato indossato ed è ancora come nuovo, previa verifica al momento del reso. Una volta ricevuto l’ordine, possiamo offrirti una dimostrazione in videochiamata, in inglese.",
      },
      {
        q: "Come si lava l’indumento?",
        a: "Lavaggio in lavatrice a 40 °C con un detersivo normale e asciugatrice a ciclo delicato. Non usare ammorbidente (indebolisce le cuciture). Non usare candeggina a base di cloro.",
      },
    ],
  },

  cross: [
    { eyebrow: "Il passo successivo", title: "Come funziona nella pratica?" },
    { eyebrow: "Devi equipaggiare un team di assistenza?", title: "Richiedi un preventivo" },
    { eyebrow: "Dal campo", title: "Leggi le testimonianze" },
  ],
};

export default copy;

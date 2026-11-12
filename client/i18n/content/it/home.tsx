import type { HomeCopy } from "../home";

const copy: HomeCopy = {
  hero: {
    tag: "Ausilio tessile per i trasferimenti · COALA by Connect Link",
    title: (
      <>
        L’indumento di trasferimento<br />
        che <em>protegge</em><br />
        chi si prende cura.
      </>
    ),
    lede: "COALA accompagna i trasferimenti quotidiani: alleggerisce lo sforzo di chi assiste, garantisce la sicurezza delle persone assistite e restituisce fluidità all’assistenza.",
    ctaFamily: "Assisto un mio caro",
    ctaTeams: "Equipaggio un team di assistenza",
    ctaHow: "Scopri come funziona",
    trust: ["Innovazione francese brevettata", "Lavabile e riutilizzabile", "Usato nelle RSA e a domicilio"],
    statLabel: "degli operatori dell’assistenza domiciliare dichiara un miglioramento della salute e delle condizioni di lavoro",
    statSource: "Studio ARACT 2026 · n=48 professionisti dell’assistenza / n=665 pazienti / uso quotidiano per 12 mesi",
  },
  logos: {
    ariaLabel: "Partner e riconoscimenti",
    partnersTitle: "Adottato da e con il sostegno di",
    awardsTitle: "Premi e riconoscimenti",
    awards: [
      "French Tech 2023",
      "Premio Santexpo FHF 2026",
      "Vincitore Silver Eco Festival 2024",
      "Premio Janus, Institut Français du Design 2026",
      "Premio Salon SAP 2024",
    ],
  },
  bannerAlt: "Indumento di trasferimento COALA in uso",
  problem: {
    eyebrow: "La realtà",
    title: (
      <>
        I trasferimenti quotidiani <em>pesano</em><br />
        su chi si prende cura.
      </>
    ),
    lede: "Sollevare, spostare, mettere seduti, sostenere. Ogni giorno milioni di gesti ripetuti, a volte dolorosi e sempre faticosi. COALA è nato proprio da questa realtà.",
    cards: [
      { stat: "94%", label: "delle malattie professionali tra professionisti dell’assistenza e caregiver sono disturbi muscolo-scheletrici (DMS)", source: "Assurance Maladie (Francia) 2025" },
      { stat: "4 min", label: "tempo medio di un trasferimento letto-sedia con un ausilio di sollevamento meccanico", source: "Studio BRCS 2021" },
      { stat: "×3", label: "aumento previsto delle persone anziane non autosufficienti che vivono a domicilio in Francia entro il 2030", source: "Rapporto IGAS (Francia) 2025" },
    ],
  },
  solution: {
    eyebrow: "La soluzione",
    title: (
      <>
        Un indumento pensato<br />per <em>accompagnare</em><br />ogni gesto.
      </>
    ),
    lede: "COALA è indossato da chi assiste. Le sue zone di presa rinforzate permettono alla persona aiutata di afferrarlo saldamente con entrambe le mani e di partecipare in modo attivo e sicuro al movimento: senza forzare, senza attrezzature pesanti, senza preparazione.",
    benefits: [
      { title: "Rende ogni trasferimento più sicuro", body: "Quattro zone di presa rinforzate, punti di appoggio ben distribuiti, maniglie pulibili con una salvietta disinfettante." },
      { title: "Alleggerisce il carico di chi assiste", body: "Una postura libera e uno sforzo distribuito su tutto il corpo: meno fatica, meno rischi, più partecipazione." },
      { title: "Rispetta la persona", body: "Invisibile dall’esterno, impercettibile per chi lo indossa, e incoraggia la persona aiutata a partecipare attivamente." },
      { title: "Completa le attrezzature esistenti", body: "Non sostituisce il sollevapazienti. Si usa insieme ad esso per i trasferimenti in cui la persona può partecipare in parte." },
      { title: "Efficace fin dal primo utilizzo", body: "Si indossa in pochi secondi. Nessun tempo di preparazione, nessun braccio di leva, nessun accessorio." },
      { title: "Adatto a ogni contesto", body: "Casa, RSA, ospedale, servizi di assistenza domiciliare. Letto, sedia, in piedi, bagno: un unico strumento." },
    ],
    ctaOrder: "Ordina COALA",
    ctaDetails: "Vedi tutti i dettagli del prodotto",
  },
  how: {
    eyebrow: "Come funziona",
    title: (
      <>
        <em>Indossa.</em> Sostieni. Trasferisci.
      </>
    ),
    lede: "Tre passaggi, pensati per essere appresi in pochi minuti da qualsiasi caregiver, familiare o professionista.",
    steps: [
      {
        title: "Indossa",
        body: "Chi assiste indossa COALA come il suo abituale indumento da lavoro. Si mette rapidamente e, con i tensori allentati e le maniglie riposte, sembra un normale indumento da lavoro.",
        meta: "< 10 secondi",
        imageLabel: "01 / Indossa",
      },
      {
        title: "Sostieni",
        body: "La persona aiutata individua e afferra le zone di presa all’altezza delle spalle e dei fianchi. Posizione bassa, schiena dritta, presa stabile, senza sforzi per schiena e braccia.",
        meta: "Postura libera per braccia e schiena",
        imageLabel: "02 / Sostieni",
      },
      {
        title: "Trasferisci",
        body: "Il movimento è guidato. La persona può partecipare attivamente mentre chi assiste la sostiene senza forzare. Letto, sedia, in piedi, uscita dal bagno.",
        meta: "Movimento fluido e sicuro",
        imageLabel: "03 / Trasferisci",
      },
    ],
    video: "Guarda la dimostrazione video (2 min, in francese)",
  },
  journeys: {
    eyebrow: "A chi si rivolge",
    title: (
      <>
        Una soluzione per i caregiver familiari<br />e per i <em>professionisti</em>.
      </>
    ),
    family: {
      kicker: "01 — Caregiver familiari",
      title: "Assisto un mio caro",
      body: "Per chi offre sostegno ogni giorno. Capire, scegliere e ordinare COALA, e sfruttare al meglio i nostri tutorial sulle buone pratiche.",
      bullets: ["Consigli prima dell’acquisto", "Consegna a domicilio, reso entro 14 giorni", "Video tutorial e un servizio clienti con persone reali"],
      statLabel: "professionisti dell’assistenza e caregiver equipaggiati a domicilio",
      ctaPrimary: "Scopri la pagina per i caregiver familiari",
      ctaOrder: "Ordina COALA",
    },
    teams: {
      kicker: "02 — Professionisti",
      title: "Equipaggio un team di assistenza",
      body: "Servizi di assistenza domiciliare, RSA, ospedali, servizi per la disabilità. Preventivi, dimostrazioni in videochiamata in inglese e un’introduzione accompagnata, per ridurre lo sforzo fisico e prevenire i DMS.",
      bullets: ["Dimostrazione in videochiamata in inglese al ricevimento dell’ordine", "Ricamo e personalizzazione per ordini di gruppo", "Supporto alla formazione e feedback sull’utilizzo", "Modello dedicato e resistente COALA Pro"],
      statLabel: "strutture partner equipaggiate",
      ctaPrimary: "Richiedi un preventivo",
      ctaDemo: "Organizza una demo",
    },
  },
  proof: {
    eyebrow: "Prove e risultati",
    title: (
      <>
        Progettato con i professionisti dell’assistenza.<br /><em>Approvato</em> da chi lo usa.
      </>
    ),
    quote:
      "Lo usiamo per le alzate mattutine e i trasferimenti letto-sedia. Nel giro di una settimana le mie OSS non volevano più lavorare senza, e i residenti partecipano più attivamente al movimento.",
    quoteAuthor: "Emmanuelle D.",
    quoteRole: "Coordinatrice infermieristica, Nancy (Francia) · tradotto dal francese",
    stats: [
      { val: "95", unit: "%", label: "degli utilizzatori ha visto migliorare la propria salute e le condizioni di lavoro dopo un anno con COALA", src: "Studio ARACT Hauts-de-France 2026" },
      { val: "0", unit: "", label: "eventi avversi segnalati nell’assistenza di 665 pazienti con COALA", src: "Studio ARACT Hauts-de-France 2026" },
      { val: "84", unit: "%", label: "dei clienti del 2025 ha riordinato nel 2026", src: "Dati COALA" },
    ],
    pressTitle: "Dicono di noi (Francia)",
  },
  faq: {
    eyebrow: "FAQ",
    title: (
      <>
        Le tue domande,<br /><em>le nostre risposte</em>.
      </>
    ),
    lede: "Risposte chiare, senza promesse eccessive, anche alle domande che ci vengono poste dopo aver visto COALA online.",
    cta: "Vedi tutte le domande",
    items: [
      {
        q: "COALA sostituisce il sollevapazienti?",
        a: "No. COALA è un ausilio tessile per i trasferimenti manuali assistiti, in cui la persona può partecipare almeno in parte al movimento. Quando è necessario un ausilio di sollevamento meccanico (persona molto dipendente o trasferimento senza alcuna possibilità di partecipazione), il sollevapazienti resta indispensabile. COALA completa le tue attrezzature, non le sostituisce.",
      },
      {
        q: "Come scelgo la taglia giusta?",
        a: "Sono disponibili otto taglie dalla XS alla 4XL, da scegliere in base alla circonferenza del torace e all’altezza di chi lo indossa. Una guida alle taglie dettagliata è disponibile nella pagina del prodotto. In caso di dubbio, il nostro team ti consiglia prima dell’acquisto, via e-mail e senza impegno.",
      },
      {
        q: "L’indumento è lavabile?",
        a: "Sì. COALA è lavabile in lavatrice a 40 °C ed è conforme alla raccomandazione r.47 dell’Autorità sanitaria nazionale francese (HAS) sull’igiene dei tessili medicali. Si consiglia un’asciugatura delicata o a bassa temperatura per mantenere l’indumento confortevole e impercettibile da indossare.",
      },
      {
        q: "Possiamo organizzare una dimostrazione per la nostra struttura?",
        a: "Sì, in videochiamata in inglese una volta ricevuto il vostro ordine. Un referente COALA presenta il prodotto, mostra ai vostri team come utilizzarlo e risponde alle loro domande. La dimostrazione è gratuita.",
      },
      {
        q: "Quando COALA non è la soluzione giusta?",
        a: "COALA si basa sulla partecipazione attiva della persona aiutata al trasferimento, il che protegge la salute di chi assiste. La persona deve quindi poter sostenere parte del proprio peso, avere un rapporto di peso gestibile con chi assiste ed essere in grado di afferrare le maniglie con entrambe le mani.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Pronti?",
    title: (
      <>
        Perché non <em>provare</em><br />COALA di persona?
      </>
    ),
    lede: "Un tuo caro da sostenere, un team da equipaggiare o semplicemente una domanda prima di decidere. Rispondiamo entro 24 ore.",
    ctaOrder: "Ordina COALA",
    ctaQuote: "Richiedi un preventivo",
    ctaAdvice: "Parlaci prima di acquistare",
    trust: [
      { strong: "24 h", sub: "tempo medio di risposta" },
      { strong: "14\u00a0giorni", sub: "per restituire l’ordine" },
      { strong: "Scelto da oltre 1.500 caregiver e professionisti dell’assistenza in Francia", sub: "", wide: true },
    ],
  },
};

export default copy;

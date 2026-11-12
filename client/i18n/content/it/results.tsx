import type { ResultsCopy } from "../results";

const TRANSLATED = " (tradotto dal francese)";

const copy: ResultsCopy = {
  hero: {
    eyebrow: "Dati e testimonianze",
    title: (
      <>
        Cosa dicono<br />
        le persone che <em>lo usano</em><br />
        ogni giorno.
      </>
    ),
    lede: "Caregiver familiari, OSS, direttori di RSA. Testimonianze reali e dati misurati sul campo.",
    ctaOrder: "Ordina COALA",
    ctaTestimonials: "Leggi le testimonianze",
    imageAlt: "Caregiver che indossa l’indumento di trasferimento COALA durante un trasferimento",
  },
  stats: [
    {
      value: "95%",
      label: "ha riscontrato un impatto positivo sulla salute e sulle condizioni di lavoro",
      source: "Studio ARACT 2026, 48 professionisti dell’assistenza",
    },
    {
      value: "65%",
      label: "dei pazienti è idoneo all’uso di COALA per i trasferimenti o il riposizionamento a letto",
      source: "Studio Connect Link 2024, 95 pazienti",
    },
    {
      value: "0",
      label: "eventi avversi segnalati da novembre 2024",
      source: "Monitoraggio clienti Connect Link e studio ARACT 2026",
    },
    {
      value: "665",
      label: "pazienti assistiti con COALA durante lo studio d’impatto ARACT 2026",
      source: "Studio ARACT 2026",
    },
  ],
  pullQuote: {
    text: "Mi era stato presentato come un ausilio per il comfort. Non lo è. È un ausilio per la sicurezza, sia della persona assistita sia del caregiver. Ho misurato la differenza.",
    name: "Dr Arnaud V.",
    role: "Medico coordinatore · RSA senza scopo di lucro · Hauts-de-France" + TRANSLATED,
  },
  testimonials: {
    eyebrow: "Testimonianze",
    title: (
      <>
        Lo hanno provato.<br />
        Ecco cosa ne <em>pensano</em>.
      </>
    ),
    badgePro: "Professionista dell’assistenza",
    badgeFamily: "Caregiver familiare",
    ratingLabel: (rating) => `${rating} ${rating === 1 ? "stella" : "stelle"} su 5`,
    items: [
      {
        quote: "Assisto mio marito da quattro anni. La prima volta che ho usato COALA per un trasferimento letto-sedia, ho capito che non dovevo diventare fisioterapista. Mi serviva solo uno strumento pensato per il mio corpo.",
        name: "Hélène M.",
        role: "Caregiver familiare" + TRANSLATED,
        location: "Nantes",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Otto mesi fa abbiamo dotato di COALA le nostre 12 OSS. Le assenze per malattia si sono dimezzate. È stata l’unica cosa che abbiamo cambiato nelle nostre pratiche quell’anno.",
        name: "Isabelle R.",
        role: "Responsabile di un servizio di assistenza domiciliare (SAAD)" + TRANSLATED,
        location: "Lione",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Mia madre è pesante e facevo i trasferimenti da solo. Non volevo trasferirla in una RSA. COALA ci ha regalato due anni a casa in più di quanto sperassimo.",
        name: "Patrick D.",
        role: "Caregiver familiare, figlio" + TRANSLATED,
        location: "Bordeaux",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "È la formazione inclusa a fare la differenza. In 60 minuti le mie équipe hanno capito la tecnica. Da quando l’abbiamo introdotto non abbiamo avuto un solo incidente durante i trasferimenti.",
        name: "Dr Arnaud V.",
        role: "Medico coordinatore, RSA" + TRANSLATED,
        location: "Hauts-de-France",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Sinceramente, ero scettica. Un indumento per questo? Ma dopo la prima settimana non riesco più a immaginare di lavorare senza. La presa è davvero diversa.",
        name: "Sylvie T.",
        role: "Operatrice di assistenza domiciliare, ADMR" + TRANSLATED,
        location: "Bretagna",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Lo abbiamo integrato nel nostro percorso di inserimento. Ogni nuovo collega riceve il suo indumento il primo giorno. Per i nostri operatori è un vero e proprio dispositivo di protezione individuale.",
        name: "Claire B.",
        role: "Direttrice, servizio di cure infermieristiche domiciliari" + TRANSLATED,
        location: "Strasburgo",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Ha cambiato il mio rapporto con mio padre. Prima i trasferimenti mi mettevano ansia, e anche a lui. Ora li facciamo con più calma. Questo piccolo dettaglio ha cambiato molte cose.",
        name: "Amina K.",
        role: "Caregiver familiare, figlia" + TRANSLATED,
        location: "Parigi",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Abbiamo tre strutture in Bretagna e 60 indumenti in uso. I riscontri dal campo sono unanimi. La tecnica è più precisa e gli infortuni sul lavoro legati alla movimentazione manuale sono praticamente scomparsi.",
        name: "François L.",
        role: "Direttore di RSA, gruppo del settore mutualistico" + TRANSLATED,
        location: "Bretagna",
        type: "pro",
        rating: 5,
      },
    ],
  },
  cases: {
    eyebrow: "Casi studio sul campo",
    title: (
      <>
        Risultati<br />
        <em>misurati</em>, non stimati.
      </>
    ),
    items: [
      {
        tag: "Struttura sanitaria · Cure infermieristiche domiciliari",
        title: "10 OSS formate, nessuna assenza per malattia in 18 mesi",
        body: "Un gruppo ospedaliero del nord della Francia ha introdotto COALA nel proprio servizio di cure infermieristiche domiciliari (SSIAD) e di ospedalizzazione a domicilio (HAD), dopo una sperimentazione sul campo di sei settimane con quattro professionisti dell’assistenza volontari. Risultato: nessuna assenza per malattia legata alla zona lombare dopo l’introduzione, contro tre casi nello stesso periodo dell’anno precedente.",
        metrics: [
          { v: "0", l: "assenze per DMS e lombalgie" },
          { v: "18 mesi", l: "di monitoraggio del gruppo" },
          { v: "10", l: "professionisti dell’assistenza dotati e formati" },
        ],
      },
      {
        tag: "Caregiver familiare · Domicilio",
        title: "Due anni in più a casa per una famiglia vicino a Bordeaux",
        body: "Patrick D. assisteva da solo sua madre di 87 kg. I trasferimenti quotidiani letto-sedia stavano diventando fisicamente impossibili. Dopo l’introduzione di COALA e un colloquio con il terapista occupazionale di Connect Link, ha potuto continuare ad assisterla a casa, senza trasferirla in una RSA, per altri 26 mesi.",
        metrics: [
          { v: "+26", l: "mesi a casa" },
          { v: "1", l: "caregiver da solo" },
          { v: "87 kg", l: "persona assistita" },
        ],
      },
    ],
  },
  trust: {
    label: "Scelto da organizzazioni che si fidano di COALA",
    ariaLabel: "Partner e organizzazioni che utilizzano COALA",
    awardsLabel: "Premi e riconoscimenti",
    awardsAriaLabel: "Premi e riconoscimenti",
    awards: [
      "Vincitore Silver Eco Festival 2024",
      "Silver Surfer",
      "Innovation & Prévention (I&P)",
      "French Tech 2023",
      "Premio Santexpo FHF 2026",
      "Premio Janus, Institut Français du Design 2026",
      "Premio Salon SAP 2024",
    ],
  },
  finalCta: {
    eyebrow: "Pronto a provarlo?",
    title: (
      <>
        14 giorni per farti<br />
        la tua <em>opinione</em>.
      </>
    ),
    lede: "Puoi restituirlo entro 14 giorni, ovunque nell’Unione europea, se l’indumento non è stato indossato. Dimostrazione in videochiamata, in inglese, dopo il ricevimento del tuo ordine.",
    ctaOrder: "Ordina COALA · da 129 €",
    ctaQuote: "Richiedi un preventivo",
  },
  crossLinks: [
    { eyebrow: "L’indumento nel dettaglio", title: "Scheda prodotto completa" },
    { eyebrow: "Devi equipaggiare un’équipe di assistenza?", title: "Preventivi per professionisti entro 48 ore" },
    { eyebrow: "Hai domande?", title: "Tutte le FAQ" },
  ],
};

export default copy;

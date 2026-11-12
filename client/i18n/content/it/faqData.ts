import type { FaqCategory } from "@/data/faq";

const data: FaqCategory[] = [
  {
    id: "produit",
    label: "Il prodotto",
    desc: "Materiali, durata, normative",
    items: [
      {
        q: "Di che materiale è fatto l’indumento COALA?",
        a: "Poliestere tecnico (215 g/m²) con fodera rinforzata nei punti di maggiore sollecitazione. Tripla cucitura su tutte e quattro le zone di presa. Cordini di regolazione in fettuccia tecnica.",
      },
      {
        q: "Quanto dura l’indumento?",
        a: "Con un uso domestico: da 4 a 6 anni. Con un uso professionale intensivo: da 18 a 24 mesi. Il tessuto è lavabile in lavatrice a 40 °C e può andare in asciugatrice a ciclo delicato.",
      },
      {
        q: "COALA è un dispositivo medico?",
        a: "No. COALA non è un dispositivo medico ai sensi del Regolamento europeo sui dispositivi medici (UE) 2017/745. È un indumento da lavoro tecnico e un’innovazione francese brevettata.",
      },
    ],
  },
  {
    id: "usage",
    label: "Uso e tecnica",
    desc: "Per chi è, come e con quale frequenza",
    items: [
      {
        q: "COALA è adatto al mio caro?",
        a: "COALA è adatto alla maggior parte delle persone che hanno bisogno di aiuto nei trasferimenti e possono partecipare almeno in parte al movimento, afferrando le maniglie con entrambe le mani. L’indumento è indossato da chi assiste ed è disponibile dalla XS alla 4XL, da scegliere in base a chi lo indossa. In caso di condizioni particolari (piaghe da decubito avanzate, intervento chirurgico recente), chiedi consiglio all’équipe sanitaria.",
      },
      {
        q: "Serve una formazione per usarlo?",
        a: "Ogni indumento è accompagnato dalle istruzioni per l’uso, e i video tutorial online mostrano come utilizzarlo correttamente.\n\nPer gli ordini destinati a un team, Connect Link offre anche una sessione di formazione dedicata ai professionisti e ai loro responsabili, in videochiamata e in inglese, una volta ricevuto l’ordine.",
      },
      {
        q: "Quanti trasferimenti si possono fare al giorno?",
        a: "L’indumento in sé non ha limiti. Sul piano umano: su 18 operatori seguiti per 90 giorni, la media è stata di 8 trasferimenti al giorno con COALA, senza alcuna lombalgia segnalata.",
      },
      {
        q: "Si può usare con una sedia a rotelle?",
        a: "Sì. COALA funziona altrettanto bene per i trasferimenti letto-sedia, sedia-WC e sedia-auto. Consulta la nostra pagina «Come funziona» per le 6 situazioni più comuni.",
      },
      {
        q: "Servono due persone per usarlo?",
        a: "Per la maggior parte dei trasferimenti basta una sola persona che assiste. Per persone più pesanti (oltre 100 kg) o per i trasferimenti da terra alla sedia, si consigliano due persone.",
      },
    ],
  },
  {
    id: "achat",
    label: "Ordine e consegna",
    desc: "Ordini, tempi di consegna, resi",
    items: [
      {
        q: "Come posso ordinare?",
        a: "Tramite il nostro negozio online, shop.connectlink.fr (carta, Apple Pay o bonifico bancario). Per gli ordini professionali puoi anche contattare direttamente il nostro team all’indirizzo contact@connectlink.fr.",
      },
      {
        q: "Quanto tempo richiede la consegna?",
        a: "I tempi e i costi di spedizione dipendono dal tuo Paese e sono indicati al momento del pagamento. Puoi seguire il tuo pacco via e-mail.",
      },
      {
        q: "Posso restituire l’indumento?",
        a: "Sì, entro 14 giorni da qualsiasi Paese dell’Unione europea, a condizione che il prodotto non sia stato indossato e sia come nuovo. Ogni reso viene verificato prima del cambio o del rimborso. Per motivi igienici, l’indumento ti viene consegnato sigillato.",
      },
      {
        q: "Posso provarlo prima di acquistarlo?",
        a: "Non offriamo prestiti gratuiti, nemmeno ai professionisti. Il prodotto può comunque essere restituito entro 14 giorni se non è stato indossato ed è ancora come nuovo.",
      },
    ],
  },
  {
    id: "pros",
    label: "Professionisti e strutture",
    desc: "RSA, ospedali, servizi di assistenza domiciliare",
    items: [
      {
        q: "In quanto tempo riceverò un preventivo professionale?",
        a: "Entro 2 giorni lavorativi. Un membro del nostro team dedicato ai professionisti ti richiamerà per capire il tuo contesto, poi ti invierà un preventivo su misura.",
      },
      {
        q: "La formazione è davvero inclusa?",
        a: "La formazione diventa conveniente a partire da 5 professionisti equipaggiati. È tenuta da un ergonomo o da un terapista occupazionale della rete COALA, in videochiamata e in inglese, una volta ricevuto l’ordine, e il materiale formativo ti viene inviato.",
      },
      {
        q: "Avete condizioni dedicate alle strutture con più sedi?",
        a: "Sì. Prezzi in base ai volumi, consegne raggruppate e un referente dedicato per gruppi, organizzazioni di assistenza e federazioni che ordinano 100 indumenti o più.",
      },
      {
        q: "L’indumento si può personalizzare (logo, nome del reparto)?",
        a: "Sì, serigrafia o ricamo sono disponibili a partire da 25 pezzi. Tempi di produzione: 10 giorni lavorativi in più.",
      },
    ],
  },
  {
    id: "lavage",
    label: "Lavaggio e manutenzione",
    desc: "Come lavarlo, asciugarlo e conservarlo",
    items: [
      {
        q: "A che temperatura si lava COALA?",
        a: "In lavatrice a 40 °C con un ciclo normale e un detersivo comune. Niente ammorbidente (indebolisce le cuciture). Niente candeggina a base di cloro.",
      },
      {
        q: "Si può mettere in asciugatrice?",
        a: "Sì, solo con un ciclo delicato. L’ideale è farlo asciugare steso in piano o su una gruccia, così mantiene la forma.",
      },
      {
        q: "E per lo stiro?",
        a: "Non è necessario. Se preferisci stirarlo, usa il ferro a temperatura media e non stirare mai le zone di presa rinforzate.",
      },
      {
        q: "Come si conserva COALA?",
        a: "Piegato in piano, in un luogo asciutto. La custodia individuale (inclusa negli ordini professionali) mantiene l’indumento in buone condizioni, anche in una borsa da lavoro.",
      },
    ],
  },
];

export default data;

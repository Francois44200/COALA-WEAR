import type { ProductCopy } from "../product";

const copy: ProductCopy = {
  buy: {
    viewLabels: [
      "Îmbrăcămintea de transfer COALA, vedere din față, cu cele patru zone de prindere desfășurate",
      "Îmbrăcămintea de transfer COALA, vedere din trei sferturi, cu cele patru zone de prindere desfășurate",
      "Îmbrăcămintea de transfer COALA cu mânerele strânse, vedere din față",
      "Structura de exoschelet internă a îmbrăcămintei de transfer COALA",
      "Îmbrăcămintea de transfer COALA purtată de un profesionist în îngrijire, cu zonele de prindere desfășurate",
      "COALA purtată cu mânerele strânse, arătând ca o îmbrăcăminte de lucru standard",
      "Detaliu al unei zone de prindere de la umăr",
      "Profesionist în îngrijire susținând un pacient, purtând îmbrăcămintea de transfer COALA",
    ],
    refPrefix: "COALA · ref. CL-B137-BLANC-",
    thumbsAria: "Imagini ale produsului",
    eyebrow: "Îmbrăcăminte de transfer",
    title: (
      <>
        Îmbrăcămintea de transfer <em>COALA</em>
      </>
    ),
    lede:
      "O îmbrăcăminte textilă concepută pentru transferuri. Patru zone de prindere ranforsate și o structură de exoschelet care îl protejează pe îngrijitor. COALA nu se vede și nu se simte, dar vă protejează ori de câte ori aveți nevoie.",
    price: "de la 129 €",
    priceMeta: "TVA inclus",
    sizeLabel: "Mărime",
    sizeGuide: "Ghidul mărimilor ↗",
    sizeAria: "Alegeți o mărime",
    colourLabel: "Culoare · Alb",
    colourNote: "În prezent, COALA este disponibilă doar în alb.",
    ctaOrder: "Comandă COALA",
    ctaQuote: "Solicită o ofertă",
    reassuranceAria: "Angajamentele noastre",
    reassurance: [
      "Retur gratuit în 14 zile în toată UE",
      "Inovație franceză brevetată",
      "Lavabilă în mașină la 40°C",
    ],
  },

  features: {
    eyebrow: "Concepută de îngrijitori, pentru îngrijitori",
    title: (
      <>
        Patru alegeri tehnice,
        <br />
        un singur <em>scop</em>.
      </>
    ),
    items: [
      {
        tag: "01 · Acțiune în patru mâini",
        title: "O mișcare comună: persoana se ține",
        body: "COALA este purtată de îngrijitor, iar persoana ajutată se ține de mânere. Îngrijitorul ghidează manevra folosindu-și greutatea corpului în loc să ridice, astfel încât mișcarea devine un efort comun. Patru zone de prindere, cu mânere poziționate la umeri, în lateral și la șolduri.",
        label: "Cele patru zone de prindere ranforsate ale îmbrăcămintei de transfer COALA",
      },
      {
        tag: "02 · Îmbrăcăminte de lucru",
        title: "Doar 200 g în plus, fără timp de pregătire",
        body: "COALA se îmbracă precum o îmbrăcăminte de lucru obișnuită, în câteva secunde. În timpul manevrelor, umerii și zona lombară nu mai sunt suprasolicitate, fără fixare mecanică și fără instruire îndelungată. Gata de folosire imediat, oriunde vă aflați.",
        label: "Îmbrăcămintea de transfer COALA cu mânerele strânse, arătând exact ca o îmbrăcăminte de lucru standard",
      },
      {
        tag: "03 · Susținere care se poate dezactiva",
        title: "Eliberată în 5 secunde",
        body: "După transferuri, îngrijitorul eliberează zonele de susținere și strânge instantaneu mânerele. Odată eliberată, nu mai există nicio compresie: COALA este imperceptibilă pentru cel care o poartă și invizibilă pentru ceilalți.",
        label: "Hamul intern al îmbrăcămintei de transfer COALA, eliberat în cinci secunde",
      },
      {
        tag: "04 · Asistență completă",
        title: "Îl asistă pe îngrijitor fără a înlocui contactul uman",
        body: "COALA susține mișcarea îngrijitorului fără a schimba modul în care acesta oferă îngrijirea. Material din poliester tehnic de 215 g/m², lavabil la 40°C, mărimi de la XS la 4XL.",
        label: "Profesionist în îngrijire însoțind o persoană vârstnică spre cadrul de mers, purtând COALA",
      },
    ],
  },

  range: {
    eyebrow: "Gama",
    title: (
      <>
        Trei modele, aceeași <em>mișcare</em>.
      </>
    ),
    lede:
      "Hamul și materialul variază în funcție de intensitatea utilizării. Toate modelele sunt disponibile în mărimi de la XS la 4XL (mărimile franceze 34–64), se pot spăla în mașină la 40°C și sunt compatibile cu recomandarea HAS R.47.",
    badge: "Cel mai popular",
    imgAlt: (name) => `Îmbrăcămintea de transfer ${name} purtată`,
    vat: "TVA inclus",
    harnessLabel: "Ham",
    fabricLabel: "Material",
    supportLabel: "Asistență",
    cta: "Comandă COALA",
    models: [
      { audience: "Îngrijitori din familie", harness: "1 mm", fabric: "50% bumbac · 50% poliester", support: "Ghid de utilizare inclus" },
      { audience: "Profesioniști în îngrijire și îngrijitori cu activitate regulată", harness: "1 mm, căptușit cu bumbac", fabric: "50% bumbac · 50% poliester", support: "Ghid de utilizare inclus" },
      { audience: "Profesioniști în îngrijire", harness: "2 mm, căptușit cu CoolTex®", fabric: "Material tehnic CoolTex®", support: "Instruire și asistență" },
    ],
    noteBefore: "Hamul cântărește aproximativ 200 g și poate fi activat în aproximativ zece secunde. Dacă echipați o organizație, ",
    noteLink: "solicitați o ofertă",
    noteAfter: " în loc să plasați o comandă individuală.",
  },

  go: {
    badge: "În curând",
    subtitle: (
      <>
        Vesta care vă protejează sănătatea, ca să îi puteți proteja mai bine pe <em>ceilalți</em>.
      </>
    ),
    priceValue: "Preț la cerere",
    priceCta: "Solicitați prețul",
    lede:
      "Dezvoltată împreună cu și pentru echipajele de ambulanță, COALA Go integrează sistemul COALA într-o vestă reflectorizantă: un ham intern și mânere de prindere externe care reduc solicitarea spatelui și limitează riscul de accidentare.",
    photoAlt: "Membru al unui echipaj de ambulanță purtând vesta COALA Go",
    benefits: [
      { title: "Reduce solicitarea spatelui", detail: "Sistemul COALA transferă forțele de la umeri spre bazin și zona lombară." },
      { title: "Limitează riscul de TMS", detail: "Mânere de prindere externe pentru o priză mai bună și mai puțină tensiune." },
      { title: "Sprijin și siguranță", detail: "Un sistem integrat, discret și mereu disponibil sub vestă." },
      { title: "Confort zilnic", detail: "Croială ergonomică, zone respirabile și căptușeală din plasă care se mișcă odată cu dumneavoastră." },
    ],
    specs: [
      { label: "Sistemul COALA", value: "Ham intern ascuns · mânere de prindere retractabile" },
      { label: "Vizibilitate", value: "Benzi retroreflectorizante · 360°" },
      { label: "Buzunare", value: "Buzunare la piept cu fermoar · buzunare inferioare mari cu fermoar" },
      { label: "Materiale", value: "100% poliester rezistent și hidrofug · căptușeală respirabilă din plasă" },
      { label: "Culoare", value: "Bleumarin" },
      { label: "Mărimi", value: "XS la 4XL · croială dreaptă unisex" },
      { label: "Întreținere", value: "Lavabilă în mașină la 60°C" },
    ],
    usagesTitle: "Pentru fiecare intervenție",
    usages: [
      "Manipularea pacienților",
      "Transport cu targa",
      "Ridicare și transferuri",
      "Îngrijiri de urgență la domiciliu",
      "Situații de urgență",
    ],
    note:
      "COALA Go nu poate fi încă cumpărată online. Contactați-ne pentru a afla când devine disponibilă și pentru a primi o propunere adaptată serviciului dumneavoastră.",
  },

  compare: {
    eyebrow: "De ce nu un aparat sau o uniformă de lucru standard?",
    title: (
      <>
        Transferurile merită
        <br />
        propriul <em>instrument dedicat</em>.
      </>
    ),
    lede:
      "Am comparat COALA cu cele mai răspândite două practici din teren. Iată cum se compară în utilizarea reală.",
    coalaSub: "Îmbrăcăminte de transfer",
    machineBrand: "Lift pentru pacienți",
    machineSub: "Dispozitiv mecanic de ridicare",
    classicBrand: "Uniformă de lucru standard",
    classicSub: "Medicală sau textilă",
    rows: [
      {
        label: "Mișcarea de transfer",
        coala: "Persoana ajutată participă activ, iar îngrijitorul ghidează transferul folosindu-și greutatea corpului, cu spatele drept și musculatura abdominală activată, fără solicitarea umerilor sau a brațelor.",
        machine: "Aplecarea spatelui și a brațelor la montarea chingilor.\nFără gesturi de manipulare.",
        classic: "Transfer manual neasistat.\nGreutate susținută cu spatele aplecat și brațele trăgând.",
      },
      {
        label: "Păstrarea demnității",
        coala: "Persoana ajutată participă activ, ceea ce protejează sănătatea îngrijitorului.\nO relație mai echilibrată între îngrijitor și persoana îngrijită.\nContactul vizual este menținut.",
        machine: "Aparatul face toată munca în timpul transferului.\nFără contact uman.\nDependența de un aparat poate fi greu de acceptat.",
        classic: "Contact uman care îl expune riscurilor pe profesionistul în îngrijire.\nFără contact vizual.",
      },
      {
        label: "Solicitarea spatelui, umerilor și brațelor",
        coala: "Fără aplecarea spatelui și fără efort activ al brațelor.\nSpatele drept, musculatura abdominală activată și mâinile libere.",
        machine: "Fără mișcări de forță.\nMontarea și scoaterea chingilor, manevrarea aparatului.",
        classic: "Gesturi de manipulare, efort și solicitări care provoacă dureri lombare și TMS ale umerilor și brațelor.",
      },
      {
        label: "Durata transferului",
        coala: "35 de secunde pentru a ridica în picioare o persoană și a o așeza în fotoliu",
        machine: "3 minute și 40 de secunde pentru a ridica în picioare o persoană și a o așeza în fotoliu",
        classic: "25 de secunde pentru a ridica în picioare o persoană și a o așeza în fotoliu",
      },
      {
        label: "Concepție",
        coala: "Inovație franceză brevetată",
        machine: "Concepută și fabricată la nivel global",
        classic: "Fabricată la nivel global",
      },
      {
        label: "Cost pe 3 ani (5 îngrijitori)",
        coala: "~1650 € · o singură dată",
        machine: "~10 000 €",
        classic: "~640 € · consumabile",
      },
    ],
  },

  specs: {
    eyebrow: "Caracteristici tehnice",
    title: "Tot ce aveți nevoie, nimic în plus.",
    items: [
      { label: "Compoziție", value: "Poliester tehnic 215 g/m² · căptușeală ranforsată" },
      { label: "Mărimi disponibile", value: "XS · S · M · L · XL · XXL · 3XL · 4XL (mărimile franceze 34–64)" },
      { label: "Culoare", value: "Alb" },
      { label: "Spălare", value: "Spălare în mașină la 40°C · uscare în uscător la program delicat" },
      { label: "Concepție", value: "Inovație franceză brevetată · Connect Link" },
    ],
    download: "Descărcați fișa tehnică (PDF)",
    guideEyebrow: "Ghidul mărimilor",
    guideTitle: "Alegerea mărimii potrivite.",
    guideIntro: (
      <>
        COALA este purtată de <em>îngrijitor sau de profesionistul în îngrijire</em>, așa că măsurați persoana care
        va purta îmbrăcămintea. Dacă vă aflați între două mărimi, alegeți-o pe cea mai mare.
      </>
    ),
    toggleAria: "Tabelul mărimilor",
    women: "Femei",
    men: "Bărbați",
    tableAria: (morpho) => `Tabelul mărimilor COALA: ${morpho}`,
    colSize: "Mărime",
    colConfection: "Mărime franceză",
    colChest: "Bust",
    colWaist: "Talie",
    point: "Grad",
    note: "Măsurători corporale, în centimetri.",
  },

  quote: {
    text: "Îmi îngrijesc soțul de patru ani. Prima dată când am folosit COALA ca să-l mut din pat în fotoliu, am înțeles că nu trebuie să devin kinetoterapeut. Aveam nevoie doar de un instrument gândit pentru propriul meu corp.",
    name: "Hélène, 67 de ani",
    role: "Îngrijitoare din familie · Nantes (tradus din franceză)",
  },

  faq: {
    eyebrow: "Întrebări despre îmbrăcăminte",
    title: (
      <>
        Întrebările
        <br />
        pe care ni le adresați
        <br />
        <em>cel mai des</em>.
      </>
    ),
    cta: "Vedeți toate întrebările",
    items: [
      {
        q: "Este COALA potrivită pentru persoana mea dragă?",
        a: "COALA este purtată de dumneavoastră, îngrijitorul, și este potrivită pentru a ajuta orice persoană care are nevoie de asistență la transferuri și se poate ține de mânere, fie că este complet sau parțial mobilă. Îmbrăcămintea este disponibilă în mărimi de la XS la 4XL, potrivit taliei îngrijitorului. Pentru afecțiuni specifice (escare avansate, intervenție chirurgicală recentă), cereți sfatul echipei medicale.",
      },
      {
        q: "Cât timp rezistă o îmbrăcăminte?",
        a: "La utilizare la domiciliu (1–2 transferuri pe zi): 4–6 ani. La utilizare profesională (10–15 transferuri pe zi): 18–24 de luni. Materialul se poate spăla în mașină la 40°C și usca în uscător la un program delicat.",
      },
      {
        q: "Pot să o încerc înainte de a o cumpăra?",
        a: "Nu oferim împrumuturi gratuite, nici pentru profesioniști. Produsul poate fi returnat în 14 zile dacă nu a fost purtat și este în stare nouă, sub rezerva verificării la returnare. După primirea comenzii, vă putem face o demonstrație prin apel video, în limba engleză.",
      },
      {
        q: "Cum se spală îmbrăcămintea?",
        a: "Spălare în mașină la 40°C cu detergent obișnuit și uscare în uscător la program delicat. Nu folosiți balsam de rufe (slăbește cusăturile). Nu folosiți înălbitor pe bază de clor.",
      },
    ],
  },

  cross: [
    { eyebrow: "Pasul următor", title: "Cum funcționează în practică?" },
    { eyebrow: "Echipați o echipă de îngrijire?", title: "Solicită o ofertă" },
    { eyebrow: "Din teren", title: "Citiți testimonialele" },
  ],
};

export default copy;

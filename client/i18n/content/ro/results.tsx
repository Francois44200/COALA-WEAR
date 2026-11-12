import type { ResultsCopy } from "../results";

const TRANSLATED = " (tradus din franceză)";

const copy: ResultsCopy = {
  hero: {
    eyebrow: "Dovezi și testimoniale",
    title: (
      <>
        Ce au de spus<br />
        persoanele care <em>o folosesc</em>.
      </>
    ),
    lede: "Îngrijitori din familie, asistenți de îngrijire, directori de cămine pentru vârstnici. Testimoniale reale și cifre măsurate pe teren.",
    ctaOrder: "Comandă COALA",
    ctaTestimonials: "Citiți testimonialele",
    imageAlt: "Îngrijitor purtând îmbrăcămintea de transfer COALA în timpul unui transfer",
  },
  stats: [
    {
      value: "95%",
      label: "au raportat un impact pozitiv asupra sănătății și condițiilor de muncă",
      source: "Studiu ARACT 2026, 48 de profesioniști în îngrijire",
    },
    {
      value: "65%",
      label: "dintre pacienți sunt potriviți pentru COALA la transferuri sau la repoziționarea în pat",
      source: "Studiu Connect Link 2024, 95 de pacienți",
    },
    {
      value: "0",
      label: "evenimente adverse raportate din noiembrie 2024",
      source: "Monitorizarea clienților Connect Link și studiul ARACT 2026",
    },
    {
      value: "665",
      label: "de pacienți asistați cu COALA în timpul studiului de impact ARACT 2026",
      source: "Studiu ARACT 2026",
    },
  ],
  pullQuote: {
    text: "Mi s-a spus că este un ajutor de confort. Nu este. Este un ajutor de siguranță, atât pentru persoana ajutată, cât și pentru îngrijitor. Am măsurat diferența.",
    name: "Dr. Arnaud V.",
    role: "Medic coordonator · Cămin pentru vârstnici non-profit · Hauts-de-France" + TRANSLATED,
  },
  testimonials: {
    eyebrow: "Testimoniale",
    title: (
      <>
        Au încercat-o.<br />
        Iată ce <em>cred</em> ei.
      </>
    ),
    badgePro: "Profesionist în îngrijire",
    badgeFamily: "Îngrijitor din familie",
    ratingLabel: (rating) => `${rating} din 5 stele`,
    items: [
      {
        quote: "Îmi îngrijesc soțul de patru ani. Prima dată când am folosit COALA pentru un transfer din pat în fotoliu, am înțeles că nu trebuie să devin kinetoterapeut. Aveam nevoie doar de un instrument conceput pentru propriul meu corp.",
        name: "Hélène M.",
        role: "Îngrijitor din familie" + TRANSLATED,
        location: "Nantes",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Ne-am echipat cei 12 asistenți de îngrijire cu COALA în urmă cu opt luni. Concediile medicale s-au înjumătățit. A fost singurul lucru pe care l-am schimbat în practicile noastre în acel an.",
        name: "Isabelle R.",
        role: "Manager de serviciu de îngrijire la domiciliu (SAAD)" + TRANSLATED,
        location: "Lyon",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Mama mea este grea, iar eu făceam singur transferurile. Nu voiam să o mut într-un cămin pentru vârstnici. COALA ne-a oferit doi ani în plus acasă față de cât sperasem.",
        name: "Patrick D.",
        role: "Îngrijitor din familie, fiu" + TRANSLATED,
        location: "Bordeaux",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Instruirea inclusă face diferența. În 60 de minute, echipele mele au înțeles tehnica. De când a fost introdusă, nu am avut niciun singur incident la transfer.",
        name: "Dr. Arnaud V.",
        role: "Medic coordonator, cămin pentru vârstnici" + TRANSLATED,
        location: "Hauts-de-France",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Sincer, eram sceptică. O îmbrăcăminte pentru așa ceva? Dar după prima săptămână, nu-mi mai pot imagina să lucrez fără ea. Priza se simte cu adevărat diferit.",
        name: "Sylvie T.",
        role: "Îngrijitoare la domiciliu, ADMR" + TRANSLATED,
        location: "Bretania",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Am integrat-o în procesul nostru de primire a personalului nou. Fiecare angajat nou își primește îmbrăcămintea din prima zi. Pentru îngrijitorii noștri, este un veritabil echipament individual de protecție.",
        name: "Claire B.",
        role: "Director, serviciu de asistență medicală la domiciliu" + TRANSLATED,
        location: "Strasbourg",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Mi-a schimbat relația cu tatăl meu. Înainte, transferurile mă nelinișteau pe mine, și pe el la fel. Acum le facem mai calm. Acest mic detaliu a schimbat o mulțime de lucruri.",
        name: "Amina K.",
        role: "Îngrijitor din familie, fiică" + TRANSLATED,
        location: "Paris",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Avem trei locații în Bretania și 60 de îmbrăcăminți în uz. Feedbackul din teren este unanim. Tehnica este mai precisă, iar accidentele de muncă legate de manipularea manuală au dispărut practic.",
        name: "François L.",
        role: "Director de cămin pentru vârstnici, grup din sectorul mutualist" + TRANSLATED,
        location: "Bretania",
        type: "pro",
        rating: 5,
      },
    ],
  },
  cases: {
    eyebrow: "Studii de caz din teren",
    title: (
      <>
        Rezultate <em>măsurate</em>,<br />
        nu estimate.
      </>
    ),
    items: [
      {
        tag: "Furnizor de îngrijire · Asistență medicală la domiciliu",
        title: "10 asistenți de îngrijire instruiți, nicio zi de concediu medical în 18 luni",
        body: "Un grup spitalicesc din nordul Franței a introdus COALA în serviciul său de asistență medicală la domiciliu (SSIAD) și în serviciul de spitalizare la domiciliu (HAD), după o perioadă de testare pe teren de șase săptămâni cu patru profesioniști în îngrijire voluntari. Rezultat: niciun concediu medical legat de zona lombară după introducere, față de trei cazuri în aceeași perioadă a anului precedent.",
        metrics: [
          { v: "0", l: "concedii medicale pentru TMS și dureri lombare" },
          { v: "18 luni", l: "de monitorizare în cadrul grupului" },
          { v: "10", l: "profesioniști în îngrijire echipați și instruiți" },
        ],
      },
      {
        tag: "Îngrijitor din familie · Domiciliu",
        title: "Doi ani în plus acasă pentru o familie din apropiere de Bordeaux",
        body: "Patrick D. își îngrijea singur mama, care cântărea 87 kg. Transferurile zilnice din pat în fotoliu deveneau imposibil de făcut fizic. După introducerea COALA și o discuție telefonică cu ergoterapeutul Connect Link, a putut continua să o îngrijească acasă, fără a o muta într-un cămin pentru vârstnici, încă 26 de luni.",
        metrics: [
          { v: "+26", l: "de luni acasă" },
          { v: "1", l: "îngrijitor singur" },
          { v: "87 kg", l: "persoana ajutată" },
        ],
      },
    ],
  },
  trust: {
    label: "Folosită de organizații care au încredere în COALA",
    ariaLabel: "Parteneri și organizații care folosesc COALA",
    awardsLabel: "Premii și recunoaștere",
    awardsAriaLabel: "Premii și recunoaștere",
    awards: [
      "Câștigător Silver Eco Festival 2024",
      "Silver Surfer",
      "Innovation & Prévention (I&P)",
      "French Tech 2023",
      "Premiul Santexpo FHF 2026",
      "Premiul Janus, Institut Français du Design 2026",
      "Premiul Salon SAP 2024",
    ],
  },
  finalCta: {
    eyebrow: "Sunteți gata să o încercați?",
    title: (
      <>
        14 zile pentru a vă face<br />
        propria <em>părere</em>.
      </>
    ),
    lede: "O puteți returna în 14 zile, oriunde în Uniunea Europeană, dacă îmbrăcămintea nu a fost purtată. Demonstrație prin apel video, în engleză, după primirea comenzii dumneavoastră.",
    ctaOrder: "Comandă COALA · de la 129 €",
    ctaQuote: "Solicită o ofertă",
  },
  crossLinks: [
    { eyebrow: "Îmbrăcămintea în detaliu", title: "Pagina completă a produsului" },
    { eyebrow: "Echipați o echipă de îngrijire?", title: "Oferte profesionale în 48 de ore" },
    { eyebrow: "Aveți întrebări?", title: "FAQ complet" },
  ],
};

export default copy;

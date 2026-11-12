import type { HowItWorksCopy } from "../howItWorks";

const copy: HowItWorksCopy = {
  breadcrumb: {
    ariaLabel: "Fir de navigare",
    home: "Acasă",
    current: "Cum funcționează",
  },
  hero: {
    eyebrow: "Ghid de utilizare",
    title: (
      <>
        Îmbrăcați, asistați,<br /><em>dezbrăcați</em>.
      </>
    ),
    lede:
      "COALA se activează în câteva secunde și se dezactivează la fel de repede. Între timp, persoana pe care o ajutați participă: nu o mai ridicați, o susțineți. Acest ghid se bazează pe materialele de instruire folosite la implementarea COALA în echipele de îngrijire.",
    ctaOrder: "Comandă COALA",
    ctaProduct: "Vedeți pagina produsului",
  },
  video: {
    eyebrow: "Demonstrație video",
    title: (
      <>
        Tehnica COALA<br />în <em>situații reale</em>.
      </>
    ),
    iframeTitle: "Demonstrația îmbrăcămintei de transfer COALA (în limba franceză)",
    note: "Video în limba franceză",
  },
  steps: {
    eyebrow: "Instrucțiuni",
    title: (
      <>
        Activați, apoi eliberați<br /><em>susținerea</em>.
      </>
    ),
    lede:
      "Cinci pași pentru a vă pregăti înainte de a ajuta pe cineva să se deplaseze. Cinci pași pentru a reveni la o îmbrăcăminte obișnuită după încheierea transferului.",
    phase1Label: "Etapa 1: Îmbrăcarea",
    phase1: [
      { n: "01", title: "Îmbrăcați articolul", body: "COALA se îmbracă precum o îmbrăcăminte de lucru obișnuită: centura lombară este deschisă și prinsă de îmbrăcăminte cu benzile sale cu arici, iar bretelele de umăr sunt relaxate." },
      { n: "02", title: "Descheiați cei doi nasturi de jos", body: "Cei doi nasturi de jos oferă acces la centura lombară și la tensorii bretelelor de umăr." },
      { n: "03", title: "Strângeți centura lombară", body: "Strângeți centura, apoi fixați-o la tensiunea dorită." },
      { n: "04", title: "Tensionați bretelele de umăr", body: "Trageți de cureaua inferioară a tensorilor de umăr până obțineți tensiunea dorită, în poziția închisă." },
      { n: "05", title: "Închideți îmbrăcămintea", body: "Încheiați ultimii doi nasturi. Susținerea este activă: sunteți gata să asistați." },
    ],
    phase1Alt: "Îmbrăcămintea de transfer COALA deschisă, cu centura lombară și tensorii bretelelor de umăr la vedere",
    phase1Caption: "Centura lombară și tensorii bretelelor de umăr, susținere activă.",
    phase2Label: "Etapa 2: Dezbrăcarea",
    phase2: [
      { n: "01", title: "Descheiați cei doi nasturi de jos", body: "Asistența fizică s-a încheiat: puteți elibera susținerea." },
      { n: "02", title: "Eliberați tensiunea de la umeri", body: "Ridicați tensorii de sub brațe pentru a relaxa bretelele de umăr." },
      { n: "03", title: "Desfaceți centura lombară", body: "Deschideți centura pentru a elimina orice tensiune." },
      { n: "04", title: "Strângeți centura", body: "Prindeți ambele capete ale centurii la loc, în interiorul celor două părți din față ale îmbrăcămintei." },
      { n: "05", title: "Încheiați cei doi nasturi de jos", body: "COALA redevine o îmbrăcăminte obișnuită, imperceptibilă atât pentru dumneavoastră, cât și pentru cei din jur." },
    ],
    phase2Alt: "Îmbrăcămintea de transfer COALA cu mânerele strânse, revenită la o îmbrăcăminte obișnuită",
    phase2Caption: "Susținere eliberată: COALA este din nou o îmbrăcăminte obișnuită.",
    warning:
      "Verificare la îmbrăcare: asigurați-vă că ambele părți ale centurii trec prin mânere, pe interiorul îmbrăcămintei.",
  },
  situations: {
    eyebrow: "Când se folosește",
    title: (
      <>
        Când vă<br /><em>ajută</em> COALA.
      </>
    ),
    lede:
      "Identificați situațiile de asistență fizică în care COALA reduce solicitarea brațelor și a spatelui și îi ușurează participarea persoanei pe care o ajutați.",
    imageAlt: "Profesionist în îngrijire purtând îmbrăcămintea de transfer COALA, ajutând o persoană vârstnică să ajungă la cadrul de mers",
    items: [
      "Transfer din șezut în picioare",
      "Transfer de pe fotoliu pe toaletă",
      "Repoziționare în pat și ridicare",
      "Mers asistat",
      "Repoziționare în fotoliu",
      "Întoarcere în pat",
    ],
    profilesTitle: "Pentru ce pacienți este potrivită?",
    profilesIntro:
      "Poate pacientul să înțeleagă instrucțiunile prin care i se cere să coopereze? Starea sa fizică permite utilizarea COALA? Evaluați fiecare caz în parte:",
    profiles: [
      "Capacitatea de a înțelege indicațiile de cooperare",
      "Calitatea sprijinului pe picioare",
      "Greutatea",
      "Mobilitatea",
      "Echilibrul",
      "Tonusul muscular al membrelor superioare",
    ],
    profilesNote:
      "Dacă nu sunteți sigur că COALA este potrivită pentru situația unui pacient, consultați echipa medicală a acestuia.",
  },
  grips: {
    eyebrow: "Recomandări de utilizare",
    title: (
      <>
        Ce mânere<br />să <em>oferiți</em>.
      </>
    ),
    lede: "Mânerele pe care le oferiți determină cât de multă solicitare rămâne pe umerii și pe spatele dumneavoastră.",
    imageAlt: "Detaliu al unei zone de prindere de pe umărul îmbrăcămintei de transfer COALA",
    caption: "Zona de prindere superioară, pe umăr.",
    items: [
      { title: "Prindere încrucișată", detail: "Oferiți un mâner inferior și mânerul superior de pe partea opusă. Mâna de sus poate fi poziționată în direcția mișcării, pentru a ajuta la orientarea privirii pacientului." },
      { title: "Ambele mânere inferioare", detail: "Oferirea ambelor mânere inferioare reduce și mai mult solicitarea umerilor și a spatelui." },
      { title: "Niciodată ambele mânere superioare", detail: "Nu oferiți ambele mânere superioare în același timp: acest lucru vă suprasolicită umerii și spatele." },
      { title: "Nu lăsați mânerele la vedere", detail: "Strângeți mânerele între utilizări: s-ar putea agăța de ceva sau ar putea fi apucate pe neașteptate." },
      { title: "Eliberați susținerea când nu o folosiți", detail: "Relaxați centura și bretelele de umăr atunci când nu oferiți asistență fizică, de exemplu când ajutați la masă sau în pauză." },
    ],
  },
  verbal: {
    eyebrow: "Ghidare verbală",
    title: (
      <>
        Cuvintele care<br /><em>implică</em> pacientul.
      </>
    ),
    lede:
      "Ghidați pacientul cât mai clar posibil, astfel încât să vă mișcați împreună. Nu ezitați să repetați și să reformulați: fiecare pereche îngrijitor–pacient își găsește propriile repere.",
    imageAlt: "Profesionist în îngrijire ghidând un pacient spre zonele de prindere ale îmbrăcămintei de transfer COALA",
    caption: "Contactul vizual este menținut pe tot parcursul manevrei.",
    evaluationLabel: "Evaluarea capacității de cooperare",
    evaluation: ["„Puteți apuca acest mâner?”", "„Vă simțiți puternic?”"],
    sequenceLabel: "Secvența transferului",
    sequence: [
      "„Apucați aceste mânere”",
      "„Strângeți bine mâinile”",
      "„Țineți-vă bine. Vă simțiți puternic?”",
      "„Trageți picioarele cât mai în spate”",
      "„Aplecați-vă în față”",
      "„Trageți mânerele spre dumneavoastră și împingeți cu picioarele”",
    ],
  },
  posture: {
    eyebrow: "Postura îngrijitorului",
    title: (
      <>
        Adoptați o poziție de <em>forță</em>,<br />fără să ridicați.
      </>
    ),
    lede:
      "COALA solicită mai puțin articulațiile brațelor și ale spatelui, cu condiția să vă poziționați corect.",
    items: [
      { title: "Spatele drept", detail: "Păstrați spatele drept în timp ce îndrumați pacientul să-și tragă picioarele în spate și să se aplece spre dumneavoastră." },
      { title: "Șoldurile și genunchii flectați", detail: "Flectați ușor șoldurile și genunchii pentru a susține eficient mișcarea pacientului." },
      { title: "Picioarele depărtate", detail: "Depărtați picioarele pentru a vă crește stabilitatea." },
      { title: "Fandări înainte / înapoi", detail: "Așezați un picior între picioarele pacientului și folosiți mișcări de fandare pentru a însoți transferul." },
    ],
  },
  care: {
    eyebrow: "Întreținere",
    title: (
      <>
        <em>Instrucțiuni</em> de spălare.
      </>
    ),
    items: [
      "Spălare la program pentru bumbac, la 40 °C.",
      "Închideți centura, trecută prin mânere, înainte de a pune îmbrăcămintea în mașină.",
      "Alegeți un program de uscare delicat sau la temperatură joasă.",
    ],
    imageAlt: "Îmbrăcămintea de transfer COALA împăturită, pregătită pentru spălare",
    caption: "Centura închisă și mânerele strânse înainte de spălarea în mașină.",
  },
  deployment: {
    eyebrow: "Implementarea în organizația dumneavoastră",
    title: (
      <>
        Cele cinci chei<br />ale <em>succesului</em>.
      </>
    ),
    factors: [
      "Oferiți COALA profesioniștilor în îngrijire voluntari",
      "Adoptați gesturile de ghidare potrivite",
      "Îndrumați pacienții spre mânerele inferioare",
      "Eliberați susținerea și strângeți mânerele",
      "Renunțați la obiceiul de a ridica",
    ],
    staffLabel: "Profesioniști în îngrijire (tradus din franceză)",
    staffQuotes: [
      "„Mai puțin obosit la sfârșitul zilei”",
      "„Mai sigur, îmi păstrez mâinile libere”",
      "„Ușor de folosit”",
      "„Te obișnuiești repede”",
    ],
    patientLabel: "Pacienți (tradus din franceză)",
    patientQuotes: [
      "„Suntem față în față, privindu-ne în ochi”",
      "„Participare mai activă”",
      "„Prindere mai bună”",
      "„Un sentiment de siguranță”",
    ],
  },
  cta: {
    title: "Sunteți gata să lucrați cu COALA?",
    body: "Comandați direct sau solicitați o ofertă pentru organizația dumneavoastră.",
    order: "Comandă COALA",
    quote: "Solicită o ofertă",
    cards: [
      { eyebrow: "Îmbrăcămintea în detaliu", title: "Pagina completă a produsului" },
      { eyebrow: "Cine o folosește", title: "Testimoniale și rezultate" },
      { eyebrow: "Întrebări", title: "Toate întrebările frecvente" },
    ],
  },
};

export default copy;

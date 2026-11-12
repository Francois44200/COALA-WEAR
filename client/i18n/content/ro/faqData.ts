import type { FaqCategory } from "@/data/faq";

const data: FaqCategory[] = [
  {
    id: "produit",
    label: "Produsul",
    desc: "Materiale, durabilitate, standarde",
    items: [
      {
        q: "Din ce este realizată îmbrăcămintea COALA?",
        a: "Din poliester tehnic (215 g/m²), cu căptușeală ranforsată în punctele de solicitare. Cusături triple pe toate cele patru zone de prindere. Șnururi de reglare realizate din chingă tehnică.",
      },
      {
        q: "Cât timp rezistă îmbrăcămintea?",
        a: "La utilizare la domiciliu: între 4 și 6 ani. La utilizare profesională intensivă: între 18 și 24 de luni. Materialul se poate spăla în mașină la 40°C și usca în uscător la un program delicat.",
      },
      {
        q: "Este COALA un dispozitiv medical?",
        a: "Nu. COALA nu este un dispozitiv medical în sensul Regulamentului european privind dispozitivele medicale (UE) 2017/745. Este o îmbrăcăminte tehnică de lucru și o inovație franceză brevetată.",
      },
    ],
  },
  {
    id: "usage",
    label: "Utilizare și tehnică",
    desc: "Pentru cine este, cum și cât de des se folosește",
    items: [
      {
        q: "Este COALA potrivită pentru persoana mea dragă?",
        a: "COALA este potrivită pentru majoritatea persoanelor care au nevoie de ajutor la transferuri și pot participa cel puțin parțial la mișcare, ținându-se de mânere cu ambele mâini. Îmbrăcămintea este purtată de îngrijitor și este disponibilă în mărimile XS–4XL, alese în funcție de cel care o poartă. În cazul unor afecțiuni specifice (escare avansate, intervenție chirurgicală recentă), cereți sfatul echipei medicale.",
      },
      {
        q: "Am nevoie de instruire pentru a o folosi?",
        a: "Fiecare articol este însoțit de instrucțiuni de utilizare, iar tutorialele video online vă arată cum să îl folosiți corect.\n\nPentru comenzile destinate echipelor, Connect Link oferă și o sesiune de instruire dedicată profesioniștilor și coordonatorilor acestora, prin apel video în limba engleză, după primirea comenzii.",
      },
      {
        q: "Câte transferuri se pot face pe zi?",
        a: "Îmbrăcămintea în sine nu are nicio limită. În ceea ce privește oamenii: dintre 18 îngrijitori urmăriți timp de 90 de zile, media a fost de 8 transferuri pe zi cu COALA, fără dureri lombare raportate.",
      },
      {
        q: "Se poate folosi împreună cu un scaun cu rotile?",
        a: "Da. COALA funcționează la fel de bine pentru transferurile pat–scaun, scaun–toaletă și scaun–mașină. Consultați pagina „Cum funcționează” pentru cele 6 situații cele mai frecvente.",
      },
      {
        q: "Este nevoie de două persoane pentru a o folosi?",
        a: "Un singur îngrijitor este suficient pentru majoritatea transferurilor. Pentru persoanele mai grele (peste 100 kg) sau pentru transferurile de pe podea pe scaun, se recomandă doi îngrijitori.",
      },
    ],
  },
  {
    id: "achat",
    label: "Comandă și livrare",
    desc: "Comenzi, termene de livrare, retururi",
    items: [
      {
        q: "Cum comand?",
        a: "Prin magazinul nostru online, shop.connectlink.fr (card, Apple Pay sau transfer bancar). Pentru comenzile profesionale, puteți contacta direct echipa noastră la contact@connectlink.fr.",
      },
      {
        q: "Cât durează livrarea?",
        a: "Termenele de livrare și costurile de transport depind de țara dumneavoastră și sunt afișate la finalizarea comenzii. Vă puteți urmări coletul prin e-mail.",
      },
      {
        q: "Pot returna îmbrăcămintea?",
        a: "Da, în termen de 14 zile, din orice țară a Uniunii Europene, cu condiția ca produsul să nu fi fost purtat și să fie ca nou. Fiecare retur este verificat înainte de schimb sau rambursare. Din motive de igienă, îmbrăcămintea vă este livrată sigilată.",
      },
      {
        q: "O pot încerca înainte de a o cumpăra?",
        a: "Nu oferim împrumuturi gratuite, nici profesioniștilor. Totuși, produsul poate fi returnat în termen de 14 zile dacă nu a fost purtat și este încă ca nou.",
      },
    ],
  },
  {
    id: "pros",
    label: "Profesioniști și organizații",
    desc: "Cămine pentru vârstnici, spitale, servicii de îngrijire la domiciliu",
    items: [
      {
        q: "În cât timp primesc o ofertă pentru profesioniști?",
        a: "În termen de 2 zile lucrătoare. Un membru al echipei noastre pentru profesioniști vă va suna pentru a înțelege contextul dumneavoastră, apoi vă va trimite o ofertă personalizată.",
      },
      {
        q: "Este instruirea chiar inclusă?",
        a: "Instruirea devine utilă începând de la 5 profesioniști echipați. Este susținută de un ergonom sau de un terapeut ocupațional din rețeaua COALA, prin apel video în limba engleză, după primirea comenzii, iar materialele de instruire vă sunt trimise.",
      },
      {
        q: "Oferiți condiții speciale pentru organizațiile cu mai multe locații?",
        a: "Da. Prețuri în funcție de volum, livrări grupate și o persoană de contact dedicată pentru grupuri, organizații de îngrijire și federații care comandă 100 de articole sau mai multe.",
      },
      {
        q: "Poate fi personalizată îmbrăcămintea (logo, numele secției)?",
        a: "Da, serigrafia sau broderia sunt disponibile începând de la 25 de bucăți. Timp de producție: încă 10 zile lucrătoare.",
      },
    ],
  },
  {
    id: "lavage",
    label: "Spălare și întreținere",
    desc: "Cum se spală, se usucă și se păstrează",
    items: [
      {
        q: "La ce temperatură se spală COALA?",
        a: "În mașină, la 40°C, la un program normal, cu detergent obișnuit. Fără balsam de rufe (slăbește cusăturile). Fără înălbitor pe bază de clor.",
      },
      {
        q: "Se poate usca în uscător?",
        a: "Da, doar la un program delicat. Ideal este să o uscați întinsă pe o suprafață plană sau pe umeraș, pentru a-și păstra forma.",
      },
      {
        q: "Trebuie călcată?",
        a: "Nu este necesar. Dacă preferați să o călcați, folosiți o temperatură medie a fierului și nu călcați niciodată zonele de prindere ranforsate.",
      },
      {
        q: "Cum se păstrează COALA?",
        a: "Împăturită, pe o suprafață plană, într-un loc uscat. Husa individuală de transport (inclusă în comenzile profesionale) menține îmbrăcămintea în stare bună, chiar și într-o geantă de lucru.",
      },
    ],
  },
];

export default data;

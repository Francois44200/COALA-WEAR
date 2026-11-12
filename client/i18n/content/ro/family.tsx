import type { FamilyCopy } from "../family";

const copy: FamilyCopy = {
  hero: {
    eyebrow: "Parcursul îngrijitorului · Gândit pentru îngrijitorii din familie",
    title: (
      <>
        Îngrijesc o persoană dragă.<br /><em>COALA mă ajută.</em>
      </>
    ),
    lede: "În fiecare zi, vă ajutați persoana dragă să se deplaseze dintr-un loc în altul. COALA susține fiecare transfer pentru a vă cruța spatele, a face mișcarea mai sigură și a-i păstra demnitatea.",
    ctaOrder: "Comandă COALA",
    ctaAdvice: "Vorbiți cu noi înainte de a cumpăra",
    ctaHow: "Vedeți cum funcționează",
    trust: ["Retur în 14 zile", "Oameni reali la serviciul clienți", "Tutoriale video incluse"],
    imageAlt: "Îngrijitor din familie purtând îmbrăcămintea de transfer COALA în timpul unui transfer",
    cardTop: {
      eyebrow: "Vă protejează spatele",
      claim: "Nu mai ridicați cu spatele aplecat",
      desc: "nu o mai cărați, o susțineți",
    },
    cardBottom: { eyebrow: "În fiecare zi", pills: ["Pat", "Fotoliu", "Baie"] },
  },
  benefits: {
    eyebrow: "De ce COALA?",
    title: (
      <>
        O soluție gândită<br />pentru <em>îngrijitorii din familie</em>.
      </>
    ),
    items: [
      { title: "Face mișcarea mai sigură", desc: "Mânere ranforsate, puncte de sprijin repartizate uniform, antiderapant." },
      { title: "Respectă persoana", desc: "Material moale, utilizare demnă, iar persoana dragă rămâne îmbrăcată pe tot parcursul transferului." },
      { title: "Vă protejează spatele", desc: "Nu mai ridicați cu spatele aplecat, nu mai suprasolicitați umerii și brațele." },
      { title: "Sprijină autonomia", desc: "Persoana dragă poate participa activ la mișcare." },
    ],
  },
  steps: {
    eyebrow: "Cum funcționează?",
    title: (
      <>
        Trei pași simpli<br />pentru un transfer <em>sigur</em>.
      </>
    ),
    items: [
      { title: "Îmbrăcați", desc: "Purtați COALA ca pe o îmbrăcăminte de lucru obișnuită. Se îmbracă în câteva secunde." },
      { title: "Prinderea mânerelor", desc: "Persoana dragă se ține de mânerele ranforsate (umeri, talie, șolduri). Dumneavoastră rămâneți jos, cu spatele drept." },
      { title: "Transferați", desc: "Ghidați mișcarea fără să forțați. Pat, fotoliu, ieșirea din baie: mișcarea este fluidă." },
    ],
    noteEyebrow: "Ce schimbă COALA",
    changes: [
      ["Spatele", "Nu mai ridicați cu spatele aplecat."],
      ["Brațele", "Nu mai suprasolicitați umerii și brațele."],
      ["Împreună", "Persoana dragă participă: nu o mai cărați, o susțineți."],
    ],
    guideLink: "Vedeți ghidul de utilizare în 7 pași",
  },
  product: {
    eyebrow: "Produsul",
    title: (
      <>
        O îmbrăcăminte simplă,<br /><em>rezistentă</em> și lavabilă.
      </>
    ),
    specsTitle: "Caracteristici",
    specs: [
      "Poliester tehnic, 215 g/m²",
      "4 zone de prindere ranforsate",
      "Mărimi de la XS la 4XL",
      "Lavabilă la 40°C · uscare delicată",
      "Inovație franceză brevetată",
    ],
    commitmentsTitle: "Angajamentele noastre",
    commitments: [
      "Retur în 14 zile pentru produsele nepurtate",
      "Oameni reali la serviciul clienți",
      "Tutoriale video incluse",
    ],
  },
  faq: {
    eyebrow: "Întrebările îngrijitorilor",
    title: (
      <>
        Ce ne întreabă<br /><em>familiile</em>.
      </>
    ),
    cta: "Vedeți toate întrebările",
    items: [
      {
        q: "Este COALA potrivită pentru persoana mea dragă?",
        a: "COALA este potrivită pentru majoritatea persoanelor care au nevoie de ajutor la transferuri și pot participa cel puțin parțial la mișcare, ținându-se de mânere cu ambele mâini. Îmbrăcămintea este purtată de dumneavoastră, îngrijitorul, și este disponibilă în mărimi de la XS la 4XL. Pentru afecțiuni specifice (escare avansate, intervenție chirurgicală recentă), cereți sfatul echipei medicale.",
      },
      {
        q: "Cât timp rezistă îmbrăcămintea?",
        a: "La utilizare la domiciliu (1–2 transferuri pe zi): 4–6 ani. La utilizare profesională (10–15 transferuri pe zi): 18–24 de luni. Materialul se poate spăla în mașină la 40°C și usca în uscător la un program delicat.",
      },
      {
        q: "Pot să o încerc înainte de a o cumpăra?",
        a: "Nu oferim împrumuturi gratuite. Produsul poate fi returnat în 14 zile dacă nu a fost purtat și este ca nou, sub rezerva verificării la primire.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Sunteți gata să începeți cu COALA?",
    title: (
      <>
        Susțineți-vă persoana dragă,<br /><em>protejați-vă spatele</em>.
      </>
    ),
    sub: "Retur acceptat în 14 zile dacă produsul nu a fost purtat · Aveți nevoie de un sfat? contact@connectlink.fr",
    ctaOrder: "Comandă COALA",
    ctaWrite: "Scrieți-ne",
  },
  crossLinks: [
    { eyebrow: "Produsul", title: "Caracteristicile tehnice COALA" },
    { eyebrow: "Ghid", title: "Ghid de utilizare în 7 pași" },
    { eyebrow: "Întrebări", title: "Toate întrebările frecvente" },
  ],
};

export default copy;

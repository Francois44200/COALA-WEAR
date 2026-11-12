import type { HowItWorksCopy } from "../howItWorks";

const copy: HowItWorksCopy = {
  breadcrumb: {
    ariaLabel: "Morzsamenü",
    home: "Főoldal",
    current: "Hogyan működik",
  },
  hero: {
    eyebrow: "Használati útmutató",
    title: (
      <>
        Felvétel, segítség,<br /><em>levétel</em>.
      </>
    ),
    lede:
      "A COALA néhány másodperc alatt aktiválható, és ugyanilyen gyorsan kikapcsolható. A kettő között a segített személy közreműködik: Ön már nem emeli, hanem támogatja őt. Ez az útmutató azon a képzési anyagon alapul, amelyet a COALA ápolói csapatoknál történő bevezetésekor használunk.",
    ctaOrder: "COALA rendelése",
    ctaProduct: "Tovább a termékoldalra",
  },
  video: {
    eyebrow: "Videós bemutató",
    title: (
      <>
        A COALA-technika<br /><em>valós helyzetekben</em>.
      </>
    ),
    iframeTitle: "A COALA transzferruha bemutatója (francia nyelven)",
    note: "Francia nyelvű videó",
  },
  steps: {
    eyebrow: "Útmutató",
    title: (
      <>
        A <em>tartás</em> aktiválása,<br />majd kioldása.
      </>
    ),
    lede:
      "Öt lépés a felkészüléshez, mielőtt segít valakinek a mozgásban. Öt lépés ahhoz, hogy az áthelyezés után ismét hagyományos ruhát viseljen.",
    phase1Label: "1. fázis: Felvétel",
    phase1: [
      { n: "01", title: "Vegye fel a ruhát", body: "A COALA úgy vehető fel, mint egy hagyományos munkaruha: a deréköv nyitva van, tépőzárral a ruhához rögzítve, a vállpántok lazák." },
      { n: "02", title: "Gombolja ki a két alsó gombot", body: "A két legalsó gomb alatt érhető el a deréköv és a vállpántfeszítők." },
      { n: "03", title: "Húzza meg a derékövet", body: "Húzza meg az övet, majd rögzítse a kívánt feszességgel." },
      { n: "04", title: "Feszítse meg a vállpántokat", body: "Húzza a vállfeszítők alsó pántját, amíg el nem éri a kívánt feszességet, zárt helyzetben." },
      { n: "05", title: "Gombolja be a ruhát", body: "Gombolja be az utolsó két gombot. A tartás aktív: készen áll a segítségnyújtásra." },
    ],
    phase1Alt: "Kigombolt COALA transzferruha, látható a deréköv és a vállpántfeszítők",
    phase1Caption: "Deréköv és vállpántfeszítők, aktív tartás.",
    phase2Label: "2. fázis: Levétel",
    phase2: [
      { n: "01", title: "Gombolja ki a két alsó gombot", body: "A fizikai segítségnyújtás véget ért: kioldhatja a tartást." },
      { n: "02", title: "Lazítsa meg a vállak feszességét", body: "Emelje meg a hóna alatti feszítőket a vállpántok meglazításához." },
      { n: "03", title: "Oldja ki a derékövet", body: "Nyissa ki az övet, hogy megszűnjön minden feszesség." },
      { n: "04", title: "Tegye el az övet", body: "Rögzítse az öv két végét a ruha két elülső részének belső oldalán." },
      { n: "05", title: "Gombolja be a két alsó gombot", body: "A COALA ismét hagyományos ruhává válik, észrevétlenül az Ön és környezete számára is." },
    ],
    phase2Alt: "COALA transzferruha elrejtett fogantyúkkal, ismét hagyományos ruhaként",
    phase2Caption: "Kioldott tartás: a COALA ismét hagyományos ruha.",
    warning:
      "Ellenőrizze felvételkor: az öv mindkét része a ruha belső oldalán, a fogantyúkon keresztül haladjon át.",
  },
  situations: {
    eyebrow: "Mikor használja",
    title: (
      <>
        Amikor a COALA<br /><em>segít</em> Önnek.
      </>
    ),
    lede:
      "Ismerje fel azokat a fizikai segítségnyújtási helyzeteket, amelyekben a COALA csökkenti karja és háta terhelését, és megkönnyíti a segített személy közreműködését.",
    imageAlt: "Ápolási szakember a COALA transzferruhában, aki egy idős személyt segít a járókeretéhez",
    items: [
      "Ülésből állásba segítés",
      "Áthelyezés székről WC-re",
      "Igazítás az ágyban és felkelés",
      "Segített járás",
      "Igazítás a széken",
      "Fordítás az ágyban",
    ],
    profilesTitle: "Mely betegeknél alkalmazható?",
    profilesIntro:
      "Megérti a beteg az együttműködésre kérő utasításokat? Fizikai állapota lehetővé teszi a COALA használatát? Minden esetet egyénileg mérjen fel:",
    profiles: [
      "Az együttműködést kérő utasítások megértésének képessége",
      "A terhelhetőség mértéke",
      "Testsúly",
      "Mozgásképesség",
      "Egyensúly",
      "A felső végtagok izomtónusa",
    ],
    profilesNote:
      "Ha nem biztos abban, hogy a COALA megfelelő-e a beteg helyzetéhez, kérje ki a beteg ápolócsapatának véleményét.",
  },
  grips: {
    eyebrow: "Használati tanácsok",
    title: (
      <>
        Mely fogantyúkat<br /><em>kínálja fel</em>.
      </>
    ),
    lede: "A felkínált fogási pontoktól függ, mekkora terhelés marad a vállán és a hátán.",
    imageAlt: "Közeli kép a COALA transzferruha vállán lévő fogási zónáról",
    caption: "Felső fogási zóna, a vállon.",
    items: [
      { title: "Keresztfogás", detail: "Kínáljon fel egy alsó fogantyút és a másik oldali felső fogantyút. A felső kéz a mozgás irányába helyezhető, hogy segítse a beteg tekintetének irányítását." },
      { title: "Mindkét alsó fogantyú", detail: "Ha mindkét alsó fogantyút felkínálja, a vállát és a hátát érő terhelés még tovább csökken." },
      { title: "Soha ne mindkét felső fogantyút", detail: "Ne kínálja fel egyszerre mindkét felső fogantyút: ez megterheli a vállát és a hátát." },
      { title: "Ne hagyja kint a fogantyúkat", detail: "Használatok között rejtse el a fogantyúkat: beakadhatnak valamibe, vagy váratlanul megragadhatják őket." },
      { title: "Használaton kívül oldja ki a tartást", detail: "Lazítsa meg az övet és a vállpántokat, amikor nem nyújt fizikai segítséget, például étkezésnél vagy szünetben." },
    ],
  },
  verbal: {
    eyebrow: "Szóbeli irányítás",
    title: (
      <>
        Szavak, amelyek<br /><em>bevonják</em> a beteget.
      </>
    ),
    lede:
      "Irányítsa a beteget a lehető legvilágosabban, hogy együtt mozogjanak. Nyugodtan ismételje meg és fogalmazza át mondandóját: minden gondozó–beteg páros megtalálja a saját jelzéseit.",
    imageAlt: "Ápolási szakember a COALA transzferruha fogási zónái felé irányít egy beteget",
    caption: "A szemkontaktus a mozdulat teljes ideje alatt megmarad.",
    evaluationLabel: "Az együttműködési képesség felmérése",
    evaluation: ["„Meg tudja fogni ezt a fogantyút?”", "„Erősnek érzi magát?”"],
    sequenceLabel: "Az áthelyezés lépései",
    sequence: [
      "„Fogja meg ezeket a fogantyúkat”",
      "„Szorítsa erősen a kezét”",
      "„Kapaszkodjon erősen. Erősnek érzi magát?”",
      "„Húzza hátra a lábát, amennyire csak tudja”",
      "„Dőljön előre”",
      "„Húzza maga felé a fogantyúkat, és nyomja meg magát a lábával”",
    ],
  },
  posture: {
    eyebrow: "A gondozó testtartása",
    title: (
      <>
        Álljon <em>erős</em> testhelyzetben,<br />emelés nélkül.
      </>
    ),
    lede:
      "A COALA kevésbé terheli karja és háta ízületeit, feltéve, hogy megfelelően helyezkedik el.",
    items: [
      { title: "Egyenes hát", detail: "Tartsa egyenesen a hátát, miközben arra irányítja a beteget, hogy húzza hátra a lábát, és dőljön Ön felé." },
      { title: "Hajlított csípő és térd", detail: "Hajlítsa be kissé a csípőjét és a térdét, hogy hatékonyan támogassa a beteg mozdulatát." },
      { title: "Terpeszállás", detail: "Helyezze lábait egymástól távolabb a stabilitás növelése érdekében." },
      { title: "Előre- és hátralépő kitörés", detail: "Helyezze egyik lábát a beteg lábai közé, és kitörő mozdulatokkal kísérje az áthelyezést." },
    ],
  },
  care: {
    eyebrow: "Ápolás",
    title: (
      <>
        Mosási <em>útmutató</em>.
      </>
    ),
    items: [
      "Pamut program 40 °C-on.",
      "Mosógépbe helyezés előtt zárja be az övet a fogantyúkon átfűzve.",
      "Válasszon kíméletes vagy alacsony hőmérsékletű szárítóprogramot.",
    ],
    imageAlt: "Összehajtott COALA transzferruha, mosásra előkészítve",
    caption: "Gépi mosás előtt az öv bezárva, a fogantyúk elrejtve.",
  },
  deployment: {
    eyebrow: "Bevezetés az intézményében",
    title: (
      <>
        A <em>siker</em><br />öt kulcsa.
      </>
    ),
    factors: [
      "Kínálja fel a COALA-t önként jelentkező ápolási szakembereknek",
      "Sajátítsák el a megfelelő irányító mozdulatokat",
      "Irányítsák a betegeket az alsó fogantyúk felé",
      "Oldják ki a tartást, és rejtsék el a fogantyúkat",
      "Szokjanak le az emelésről",
    ],
    staffLabel: "Ápolási szakemberek (franciából fordítva)",
    staffQuotes: [
      "„Kevésbé vagyok fáradt a nap végén”",
      "„Biztonságosabb, szabadon marad a kezem”",
      "„Könnyen használható”",
      "„Gyorsan meg lehet szokni”",
    ],
    patientLabel: "Betegek (franciából fordítva)",
    patientQuotes: [
      "„Szemtől szemben vagyunk egymással”",
      "„Aktívabb részvétel”",
      "„Jobb fogás”",
      "„Biztonságérzet”",
    ],
  },
  cta: {
    title: "Készen áll a COALA használatára?",
    body: "Rendeljen közvetlenül, vagy kérjen árajánlatot intézménye számára.",
    order: "COALA rendelése",
    quote: "Árajánlatkérés",
    cards: [
      { eyebrow: "A ruha részletesen", title: "Teljes termékoldal" },
      { eyebrow: "Kik használják", title: "Vélemények és eredmények" },
      { eyebrow: "Kérdések", title: "Teljes GYIK" },
    ],
  },
};

export default copy;

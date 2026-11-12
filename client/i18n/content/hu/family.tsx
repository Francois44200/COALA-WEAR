import type { FamilyCopy } from "../family";

const copy: FamilyCopy = {
  hero: {
    eyebrow: "Gondozói útvonal · Gondozó hozzátartozóknak tervezve",
    title: (
      <>
        Szerettemet gondozom.<br /><em>A COALA segít nekem.</em>
      </>
    ),
    lede: "Ön nap mint nap segíti szerettét, hogy egyik helyről a másikra jusson. A COALA minden áthelyezést támogat: kíméli a hátát, biztonságosabbá teszi a mozdulatot, és megőrzi szerette méltóságát.",
    ctaOrder: "COALA rendelése",
    ctaAdvice: "Beszéljen velünk vásárlás előtt",
    ctaHow: "Nézze meg, hogyan működik",
    trust: ["14 napos visszaküldés", "Valódi emberek az ügyfélszolgálaton", "Oktatóvideókkal"],
    imageAlt: "Gondozó hozzátartozó a COALA transzferruhában egy áthelyezés közben",
    cardTop: {
      eyebrow: "Védi a hátát",
      claim: "Nem kell többé hajlított háttal emelnie",
      desc: "már nem cipeli, hanem támogatja szerettét",
    },
    cardBottom: { eyebrow: "Mindennap", pills: ["Ágy", "Szék", "Fürdőszoba"] },
  },
  benefits: {
    eyebrow: "Miért a COALA?",
    title: (
      <>
        Megoldás, amelyet<br /><em>gondozó hozzátartozóknak</em> terveztünk.
      </>
    ),
    items: [
      { title: "Biztonságosabbá teszi a mozdulatot", desc: "Megerősített fogantyúk, egyenletesen elosztott támaszpontok, csúszásmentes." },
      { title: "Tiszteletben tartja a személyt", desc: "Puha anyag, méltóságteljes használat, és szerette az áthelyezés alatt végig felöltözve marad." },
      { title: "Védi a hátát", desc: "Nem kell többé hajlított háttal emelnie, nincs többé megterhelés a vállán és a karján." },
      { title: "Támogatja az önállóságot", desc: "Szerette aktívan részt vehet a mozdulatban." },
    ],
  },
  steps: {
    eyebrow: "Hogyan működik?",
    title: (
      <>
        Három egyszerű lépés<br />a <em>biztonságos</em> áthelyezésért.
      </>
    ),
    items: [
      { title: "Felvétel", desc: "Úgy viseli a COALA-t, mint egy hagyományos munkaruhát. Néhány másodperc alatt felveszi." },
      { title: "A fogási zónák megfogása", desc: "Szerette megfogja a megerősített fogantyúkat (váll, derék, csípő). Ön alacsony helyzetben marad, egyenes háttal." },
      { title: "Áthelyezés", desc: "Erőltetés nélkül irányítja a mozdulatot. Ágy, szék, kiszállás a fürdőkádból: a mozdulat gördülékeny." },
    ],
    noteEyebrow: "Amit a COALA megváltoztat",
    changes: [
      ["Hát", "Nem kell többé hajlított háttal emelnie."],
      ["Karok", "Nincs többé megterhelés a vállán és a karján."],
      ["Együtt", "Szerette részt vesz a mozdulatban: már nem cipeli, hanem támogatja."],
    ],
    guideLink: "A 7 lépéses használati útmutató",
  },
  product: {
    eyebrow: "A termék",
    title: (
      <>
        Egyszerű ruha,<br /><em>erős</em> és mosható.
      </>
    ),
    specsTitle: "Műszaki jellemzők",
    specs: [
      "Műszaki poliészter, 215 g/m²",
      "4 megerősített fogási zóna",
      "Méretek: XS–4XL",
      "Mosható 40 °C-on · kíméletes szárítás",
      "Szabadalmaztatott francia innováció",
    ],
    commitmentsTitle: "Vállalásaink",
    commitments: [
      "14 napos visszaküldés viseletlen termékekre",
      "Valódi emberek az ügyfélszolgálaton",
      "Oktatóvideókkal",
    ],
  },
  faq: {
    eyebrow: "A gondozók kérdései",
    title: (
      <>
        Amit a <em>családok</em><br />kérdeznek tőlünk.
      </>
    ),
    cta: "Az összes kérdés",
    items: [
      {
        q: "Megfelelő a COALA a szerettem számára?",
        a: "A COALA a legtöbb olyan személynél használható, akinek segítségre van szüksége az áthelyezéshez, és legalább részben részt tud venni a mozdulatban, két kézzel kapaszkodva a fogantyúkba. A ruhát Ön, a gondozó viseli, XS-től 4XL-ig terjedő méretekben kapható. Különleges állapotok esetén (előrehaladott felfekvés, nemrégiben végzett műtét) kérje az ápolócsapat tanácsát.",
      },
      {
        q: "Meddig tart a ruha?",
        a: "Otthoni használat mellett (napi 1–2 áthelyezés): 4–6 év. Professzionális használat mellett (napi 10–15 áthelyezés): 18–24 hónap. Az anyag gépben mosható 40 °C-on, és kíméletes programon szárítógépben szárítható.",
      },
      {
        q: "Kipróbálhatom vásárlás előtt?",
        a: "Ingyenes kölcsönzést nem kínálunk. A termék 14 napon belül visszaküldhető, ha nem viselték, és újszerű állapotban van, a beérkezéskor végzett ellenőrzés függvényében.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Készen áll a COALA használatára?",
    title: (
      <>
        Támogassa szerettét,<br /><em>védje a hátát</em>.
      </>
    ),
    sub: "Visszaküldés 14 napon belül, ha a terméket nem viselték · Tanácsra van szüksége? contact@connectlink.fr",
    ctaOrder: "COALA rendelése",
    ctaWrite: "Írjon nekünk",
  },
  crossLinks: [
    { eyebrow: "A termék", title: "A COALA műszaki jellemzői" },
    { eyebrow: "Útmutató", title: "7 lépéses használati útmutató" },
    { eyebrow: "Kérdések", title: "Teljes GYIK" },
  ],
};

export default copy;

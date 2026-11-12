import type { HomeCopy } from "../home";

const copy: HomeCopy = {
  hero: {
    tag: "Textil áthelyezési segédeszköz · COALA a Connect Linktől",
    title: (
      <>
        A transzferruha,<br />
        amely <em>védi</em><br />
        a gondoskodókat.
      </>
    ),
    lede: "A COALA a mindennapi áthelyezéseket segíti: csökkenti a gondozók terhelését, biztonságban tartja a segített személyt, és gördülékenyebbé teszi az ápolást.",
    ctaFamily: "Szerettemet gondozom",
    ctaTeams: "Ápolói csapatot szerelek fel",
    ctaHow: "Nézze meg, hogyan működik",
    trust: ["Szabadalmaztatott francia innováció", "Mosható és újrahasználható", "Idősotthonokban és otthoni környezetben használják"],
    statLabel: "az otthoni gondozók közül jobb egészségi állapotról és munkakörülményekről számol be",
    statSource: "ARACT-tanulmány, 2026 · n=48 ápolási szakember / n=665 beteg / 12 hónapos napi használat",
  },
  logos: {
    ariaLabel: "Partnerek és díjak",
    partnersTitle: "Partnereink és támogatóink",
    awardsTitle: "Díjak és elismerések",
    awards: [
      "French Tech 2023",
      "Santexpo FHF díj 2026",
      "Silver Eco Festival 2024 díjazottja",
      "Janus-díj, Institut Français du Design 2026",
      "Salon SAP díj 2024",
    ],
  },
  bannerAlt: "A COALA transzferruha használat közben",
  problem: {
    eyebrow: "A valóság",
    title: (
      <>
        A mindennapi áthelyezések <em>terhet</em><br />
        rónak a gondoskodókra.
      </>
    ),
    lede: "Emelés, mozgatás, felültetés, megtartás. Naponta milliónyi ismétlődő mozdulat, olykor fájdalmasan, mindig megterhelés alatt. A COALA ebből a valóságból született.",
    cards: [
      { stat: "94%", label: "az ápolási szakemberek és gondozók foglalkozási megbetegedései közül mozgásszervi megbetegedés (MSD)", source: "Assurance Maladie (Franciaország), 2025" },
      { stat: "4 perc", label: "egy ágy–szék áthelyezés átlagos ideje mechanikus emelőeszközzel", source: "BRCS-tanulmány, 2021" },
      { stat: "×3", label: "ennyivel nő várhatóan az otthon élő, gondozásra szoruló idősek száma Franciaországban 2030-ig", source: "IGAS-jelentés (Franciaország), 2025" },
    ],
  },
  solution: {
    eyebrow: "A megoldás",
    title: (
      <>
        Egy ruha, amely<br /><em>támogat</em><br />minden mozdulatot.
      </>
    ),
    lede: "A COALA-t a gondozó viseli. Megerősített fogási zónái lehetővé teszik, hogy a segített személy két kézzel, biztosan kapaszkodjon, és aktívan, biztonságosan vegyen részt a mozdulatban: erőltetés, nehéz eszközök és előkészületek nélkül.",
    benefits: [
      { title: "Biztonságosabbá tesz minden áthelyezést", body: "Négy megerősített fogási zóna, egyenletesen elosztott támaszpontok, fertőtlenítő kendővel tisztítható fogantyúk." },
      { title: "Csökkenti a gondozó terhelését", body: "Kényelmes testtartás, a testen elosztott erőkifejtés: kevesebb megterhelés, kisebb kockázat, több aktív részvétel." },
      { title: "Tiszteletben tartja a személyt", body: "Kívülről nem feltűnő, viselője számára észrevétlen, és arra ösztönzi a segített személyt, hogy aktívan részt vegyen." },
      { title: "Kiegészíti a meglévő eszközöket", body: "Nem helyettesíti a betegemelőt. Azzal együtt használható olyan áthelyezéseknél, amelyekben a személy részben közre tud működni." },
      { title: "Már az első használattól hatékony", body: "Másodpercek alatt felvehető. Nincs előkészítési idő, nincs emelőkar, nincsenek kiegészítők." },
      { title: "Minden környezetbe illik", body: "Otthon, idősotthon, kórház, otthoni ápolási szolgálat. Ágy, szék, felállás, fürdőszoba: egyetlen eszköz." },
    ],
    ctaOrder: "COALA rendelése",
    ctaDetails: "A termék összes részlete",
  },
  how: {
    eyebrow: "Hogyan működik",
    title: (
      <>
        <em>Felvétel.</em> Megtartás. Áthelyezés.
      </>
    ),
    lede: "Három lépés, amelyet bármely gondozó – hozzátartozó vagy szakember – percek alatt elsajátít.",
    steps: [
      {
        title: "Felvétel",
        body: "A gondozó úgy viseli a COALA-t, mint megszokott munkaruháját. Gyorsan felvehető, és ha a feszítők ki vannak engedve, a fogantyúk pedig elrejtve, pontosan olyan, mint egy hagyományos munkaruha.",
        meta: "< 10 másodperc",
        imageLabel: "01 / Felvétel",
      },
      {
        title: "Megtartás",
        body: "A segített személy megkeresi és megfogja a vállaknál és csípőnél lévő fogási zónákat. Alacsony helyzet, egyenes hát, stabil fogás, a hát és a karok megterhelése nélkül.",
        meta: "Kényelmes testtartás a karoknak és a hátnak",
        imageLabel: "02 / Megtartás",
      },
      {
        title: "Áthelyezés",
        body: "A mozdulat irányított. A személy aktívan részt vehet benne, a gondozó pedig erőltetés nélkül támogatja. Ágy, szék, felállás, kiszállás a fürdőkádból.",
        meta: "Gördülékeny, biztonságos mozdulat",
        imageLabel: "03 / Áthelyezés",
      },
    ],
    video: "Nézze meg a videós bemutatót (2 perc, francia nyelven)",
  },
  journeys: {
    eyebrow: "Kinek szól",
    title: (
      <>
        Megoldás gondozó hozzátartozóknak<br />és <em>szakembereknek</em> egyaránt.
      </>
    ),
    family: {
      kicker: "01 — Gondozó hozzátartozók",
      title: "Szerettemet gondozom",
      body: "Azoknak, akik nap mint nap segítenek. Ismerje meg, válassza ki és rendelje meg a COALA-t, és használja ki bevált gyakorlatokat bemutató oktatóvideóinkat.",
      bullets: ["Tanácsadás vásárlás előtt", "Házhozszállítás, 14 napon belüli visszaküldés", "Oktatóvideók és valódi, emberi ügyfélszolgálat"],
      statLabel: "ápolási szakember és gondozó használja otthoni környezetben",
      ctaPrimary: "Tovább a gondozó hozzátartozóknak szóló oldalra",
      ctaOrder: "COALA rendelése",
    },
    teams: {
      kicker: "02 — Szakemberek",
      title: "Ápolói csapatot szerelek fel",
      body: "Otthoni ápolási szolgálatok, idősotthonok, kórházak, fogyatékossággal élőket ellátó szolgálatok. Árajánlat, angol nyelvű videós bemutató és kísért bevezetés a fizikai megterhelés csökkentése és a mozgásszervi megbetegedések megelőzése érdekében.",
      bullets: ["Angol nyelvű videós bemutató a megrendelés beérkezése után", "Hímzés és egyedi kialakítás csoportos rendeléseknél", "Képzési támogatás és visszajelzések a használatról", "Külön erre a célra készült, tartós COALA Pro modell"],
      statLabel: "partnerintézmény használja",
      ctaPrimary: "Árajánlatkérés",
      ctaDemo: "Bemutató egyeztetése",
    },
  },
  proof: {
    eyebrow: "Bizonyítékok és eredmények",
    title: (
      <>
        Ápolási szakemberekkel együtt fejlesztve.<br />Használói <em>igazolják</em>.
      </>
    ),
    quote:
      "Reggeli felkeltéshez és ágy–szék áthelyezéshez használjuk. Egy héten belül az ápolási asszisztenseim már nem akartak nélküle dolgozni, a lakók pedig aktívabban vesznek részt a mozdulatban.",
    quoteAuthor: "Emmanuelle D.",
    quoteRole: "Vezető ápoló, Nancy (Franciaország) · franciából fordítva",
    stats: [
      { val: "95", unit: "%", label: "a felhasználók közül egészségi állapota és munkakörülményei javulását tapasztalta egy év COALA-használat után", src: "ARACT Hauts-de-France tanulmány, 2026" },
      { val: "0", unit: "", label: "nemkívánatos esemény 665 beteg COALA-val történő ellátása során", src: "ARACT Hauts-de-France tanulmány, 2026" },
      { val: "84", unit: "%", label: "a 2025-ös ügyfelek közül 2026-ban is rendelt", src: "COALA-adatok" },
    ],
    pressTitle: "A sajtóban (Franciaország)",
  },
  faq: {
    eyebrow: "GYIK",
    title: (
      <>
        Az Ön kérdései,<br /><em>a mi válaszaink</em>.
      </>
    ),
    lede: "Egyenes válaszok, túlzó ígéretek nélkül – azokra a kérdésekre is, amelyeket a COALA online megtekintése után tesznek fel nekünk.",
    cta: "Az összes kérdés",
    items: [
      {
        q: "Helyettesíti a COALA a betegemelőt?",
        a: "Nem. A COALA textil segédeszköz az asszisztált kézi áthelyezésekhez, amelyekben a személy legalább részben részt tud venni a mozdulatban. Ha mechanikus emelőeszközre van szükség (nagymértékben gondozásra szoruló személy vagy olyan áthelyezés, amelyben nincs lehetőség közreműködésre), a betegemelő továbbra is nélkülözhetetlen. A COALA kiegészíti eszközeit, nem helyettesíti őket.",
      },
      {
        q: "Hogyan válasszam ki a megfelelő méretet?",
        a: "Nyolc méret közül választhat XS-től 4XL-ig, a viselő mellbősége és testmagassága alapján. Részletes mérettáblázat a termékoldalon érhető el. Ha bizonytalan, csapatunk vásárlás előtt e-mailben, kötelezettség nélkül tanácsot ad.",
      },
      {
        q: "Mosható a ruha?",
        a: "Igen. A COALA gépben mosható 40 °C-on, és megfelel a francia Nemzeti Egészségügyi Hatóság (HAS) orvosi textíliák higiéniájára vonatkozó r.47-es ajánlásának. Kíméletes vagy alacsony hőmérsékletű szárítás ajánlott, hogy a ruha kényelmes és viselés közben észrevétlen maradjon.",
      },
      {
        q: "Kérhetünk bemutatót intézményünk számára?",
        a: "Igen, videohívásban, angol nyelven, a megrendelés beérkezése után. A COALA munkatársa bemutatja a terméket, megmutatja csapatainak a használatát, és válaszol kérdéseikre. A bemutató ingyenes.",
      },
      {
        q: "Mikor nem a COALA a megfelelő megoldás?",
        a: "A COALA arra épül, hogy a segített személy aktívan részt vesz az áthelyezésben, ami védi a gondozó egészségét. A személynek ezért képesnek kell lennie testsúlya egy részét megtartani, a gondozóhoz képest kezelhető testsúlyúnak kell lennie, és két kézzel meg kell tudnia fogni a fogantyúkat.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Készen áll?",
    title: (
      <>
        Miért ne <em>próbálná ki</em><br />Ön is a COALA-t?
      </>
    ),
    lede: "Egy szerette, akit segít, egy csapat, amelyet felszerelne, vagy csak egy kérdés a döntés előtt. 24 órán belül válaszolunk.",
    ctaOrder: "COALA rendelése",
    ctaQuote: "Árajánlatkérés",
    ctaAdvice: "Beszéljen velünk vásárlás előtt",
    trust: [
      { strong: "24 óra", sub: "átlagos válaszidő" },
      { strong: "14\u00a0nap", sub: "a rendelés visszaküldésére" },
      { strong: "Több mint 1500 gondozó és ápolási szakember bízik benne Franciaországban", sub: "", wide: true },
    ],
  },
};

export default copy;

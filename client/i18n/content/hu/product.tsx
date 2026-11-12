import type { ProductCopy } from "../product";

const copy: ProductCopy = {
  buy: {
    viewLabels: [
      "COALA transzferruha elölnézetből, négy kihajtott fogási zónával",
      "COALA transzferruha háromnegyedes nézetből, négy kihajtott fogási zónával",
      "COALA transzferruha elrejtett fogantyúkkal, elölnézetből",
      "A COALA transzferruha belső exoskeleton-szerkezete",
      "Ápolási szakember által viselt COALA transzferruha, kihajtott fogási zónákkal",
      "Elrejtett fogantyúkkal viselt COALA, amely hagyományos munkaruhának tűnik",
      "Közeli kép a váll fogási zónájáról",
      "COALA transzferruhát viselő ápolási szakember beteget támogat",
    ],
    refPrefix: "COALA · cikkszám CL-B137-BLANC-",
    thumbsAria: "Termékképek",
    eyebrow: "Transzferruha",
    title: (
      <>
        A <em>COALA</em> transzferruha
      </>
    ),
    lede:
      "Áthelyezésekhez tervezett textil ruhadarab. Négy megerősített fogási zóna és egy exoskeleton-szerkezet, amely védi a gondozót. A COALA nem látszik és nem érezhető, mégis megvédi Önt, amikor szüksége van rá.",
    price: "129 €-tól",
    priceMeta: "áfával",
    sizeLabel: "Méret",
    sizeGuide: "Mérettáblázat ↗",
    sizeAria: "Válasszon méretet",
    colourLabel: "Szín · Fehér",
    colourNote: "A COALA jelenleg csak fehér színben kapható.",
    ctaOrder: "COALA rendelése",
    ctaQuote: "Árajánlatkérés",
    reassuranceAria: "Vállalásaink",
    reassurance: [
      "Ingyenes visszaküldés 14 napon belül az EU egész területén",
      "Szabadalmaztatott francia innováció",
      "Gépben mosható 40 °C-on",
    ],
  },

  features: {
    eyebrow: "Gondozók tervezték, gondozóknak",
    title: (
      <>
        Négy műszaki megoldás,
        <br />
        egyetlen <em>cél</em>.
      </>
    ),
    items: [
      {
        tag: "01 · Négykezes mozdulat",
        title: "Közös mozdulat: a személy kapaszkodik",
        body: "A COALA-t a gondozó viseli, a segített személy pedig a fogantyúkat fogja. A gondozó emelés helyett testsúlyával irányítja a mozdulatot, így az áthelyezés közös erőfeszítéssé válik. Négy fogási zóna, a fogantyúk a vállaknál, az oldalakon és a csípőnél helyezkednek el.",
        label: "A COALA transzferruha négy megerősített fogási zónája",
      },
      {
        tag: "02 · Munkaruha",
        title: "Mindössze 200 g többletsúly, előkészítési idő nélkül",
        body: "A COALA néhány másodperc alatt felvehető, akár egy hagyományos munkaruha. Mozgatás közben nem terheli többé a vállat és a derekat, nincs mechanikus rögzítés és nincs hosszadalmas képzés. Azonnal használható, bárhol is legyen.",
        label: "COALA transzferruha elrejtett fogantyúkkal, pontosan olyan, mint egy hagyományos munkaruha",
      },
      {
        tag: "03 · Kikapcsolható tartás",
        title: "5 másodperc alatt kioldható",
        body: "Az áthelyezések után a gondozó kioldja a tartózónákat, és azonnal elrejti a fogantyúkat. Kioldott állapotban semmilyen szorítást nem fejt ki: a COALA viselője számára észrevétlen, mások számára láthatatlan.",
        label: "A COALA transzferruha belső hevederzete, öt másodperc alatt kioldható",
      },
      {
        tag: "04 · Átfogó segítség",
        title: "Segíti a gondozót, de nem helyettesíti az emberi érintést",
        body: "A COALA támogatja a gondozó mozdulatát anélkül, hogy megváltoztatná az ápolás módját. Műszaki poliészter szövet, 215 g/m², 40 °C-on mosható, XS-től 4XL-ig terjedő méretekben.",
        label: "COALA-t viselő ápolási szakember idős embert kísér a járókeretéhez",
      },
    ],
  },

  range: {
    eyebrow: "A termékcsalád",
    title: (
      <>
        Három modell, ugyanaz a <em>mozdulat</em>.
      </>
    ),
    lede:
      "A hevederzet és a szövet a használat intenzitásától függően változik. Minden modell XS-től 4XL-ig (francia 34–64-es méret) kapható, gépben mosható 40 °C-on, és megfelel a HAS R.47-es ajánlásának.",
    badge: "A legnépszerűbb",
    imgAlt: (name) => `${name} transzferruha viselés közben`,
    vat: "áfával",
    harnessLabel: "Hevederzet",
    fabricLabel: "Szövet",
    supportLabel: "Támogatás",
    cta: "COALA rendelése",
    models: [
      { audience: "Gondozó hozzátartozók", harness: "1 mm", fabric: "50% pamut · 50% poliészter", support: "Használati útmutatóval" },
      { audience: "Ápolási szakemberek és rendszeresen gondozók", harness: "1 mm, pamut béléssel", fabric: "50% pamut · 50% poliészter", support: "Használati útmutatóval" },
      { audience: "Ápolási szakemberek", harness: "2 mm, CoolTex® béléssel", fabric: "CoolTex® műszaki szövet", support: "Képzés és támogatás" },
    ],
    noteBefore: "A hevederzet körülbelül 200 g, és nagyjából tíz másodperc alatt aktiválható. Ha intézményt szerel fel, ",
    noteLink: "kérjen árajánlatot",
    noteAfter: " egyéni rendelés helyett.",
  },

  go: {
    badge: "Hamarosan",
    subtitle: (
      <>
        A mellény, amely az Ön egészségét védi, hogy Ön jobban védhesse <em>másokét</em>.
      </>
    ),
    priceValue: "Ár kérésre",
    priceCta: "Ajánlatot kérek",
    lede:
      "A mentőszolgálatok munkatársaival és számukra fejlesztett COALA Go jól láthatósági mellénybe építi a COALA rendszert: belső hevederzet és külső fogantyúk csökkentik a hát terhelését és mérséklik a sérülések kockázatát.",
    photoAlt: "COALA Go mellényt viselő mentőszolgálati munkatárs",
    benefits: [
      { title: "Csökkenti a hát terhelését", detail: "A COALA rendszer az erőket a vállakról a medencére és a derékra vezeti át." },
      { title: "Mérsékli az MSD-k kockázatát", detail: "Külső fogantyúk a biztosabb fogásért és a kisebb feszülésért." },
      { title: "Támogatás és biztonság", detail: "Beépített, diszkrét rendszer, amely a mellény alatt mindig kéznél van." },
      { title: "Kényelem minden nap", detail: "Ergonomikus szabás, szellőző zónák és hálós bélés, amelyek együtt mozognak Önnel." },
    ],
    specs: [
      { label: "COALA rendszer", value: "Rejtett belső hevederzet · behúzható fogantyúk" },
      { label: "Láthatóság", value: "Fényvisszaverő csíkok · 360°" },
      { label: "Zsebek", value: "Cipzáras mellzsebek · nagy, cipzáras alsó zsebek" },
      { label: "Anyagok", value: "100% strapabíró, víztaszító poliészter · szellőző hálós bélés" },
      { label: "Szín", value: "Sötétkék" },
      { label: "Méretek", value: "XS-től 4XL-ig · egyenes, uniszex szabás" },
      { label: "Ápolás", value: "Gépben mosható 60 °C-on" },
    ],
    usagesTitle: "Minden riasztáshoz",
    usages: [
      "Betegmozgatás",
      "Hordágyas szállítás",
      "Emelés és áthelyezés",
      "Sürgősségi ellátás otthon",
      "Vészhelyzetek",
    ],
    note:
      "A COALA Go online még nem vásárolható meg. Vegye fel velünk a kapcsolatot, hogy értesítsük, amikor elérhetővé válik, és szolgálata igényeihez igazított ajánlatot küldjünk.",
  },

  compare: {
    eyebrow: "Miért ne egy gép vagy egy hagyományos munkaruha?",
    title: (
      <>
        Az áthelyezés
        <br />
        <em>saját eszközt</em> érdemel.
      </>
    ),
    lede:
      "Összehasonlítottuk a COALA-t a gyakorlatban leggyakrabban alkalmazott két megoldással. Így teljesítenek a valós használat során.",
    coalaSub: "Transzferruha",
    machineBrand: "Betegemelő",
    machineSub: "Mechanikus emelőeszköz",
    classicBrand: "Hagyományos munkaruha",
    classicSub: "Egészségügyi vagy textil",
    rows: [
      {
        label: "Az áthelyező mozdulat",
        coala: "A segített személy aktívan részt vesz, a gondozó pedig testsúlyával irányítja az áthelyezést egyenes háttal, megfeszített törzsizmokkal, a vállak és karok megterhelése nélkül.",
        machine: "Hát- és karhajlítás az emelőhevederek felhelyezésekor.\nNincs kézi mozgatás.",
        classic: "Segédeszköz nélküli kézi áthelyezés.\nTeheremelés hajlított háttal és húzó karokkal.",
      },
      {
        label: "A méltóság megőrzése",
        coala: "A segített személy aktívan részt vesz, ami a gondozó egészségének is jót tesz.\nKiegyensúlyozottabb kapcsolat a gondozó és a gondozott között.\nA szemkontaktus megmarad.",
        machine: "Az áthelyezés során a gép végzi az egész munkát.\nNincs emberi kapcsolat.\nA géptől való függést nehéz lehet elfogadni.",
        classic: "Emberi kapcsolat, amely kockázatnak teszi ki az ápolási szakembert.\nNincs szemkontaktus.",
      },
      {
        label: "A hát, a vállak és a karok terhelése",
        coala: "Nincs többé háthajlítás és aktív karerő.\nEgyenes hát, megfeszített törzsizmok, szabad kezek.",
        machine: "Nincs erőkifejtést igénylő mozdulat.\nAz emelőhevederek fel- és levétele, a gép mozgatása.",
        classic: "Mozgatások, erőkifejtés és megterhelés, amelyek derékfájást, valamint a váll és a kar mozgásszervi megbetegedéseit okozzák.",
      },
      {
        label: "Az áthelyezés időtartama",
        coala: "35 másodperc felállítani valakit és leültetni egy székbe",
        machine: "3 perc 40 másodperc felállítani valakit és leültetni egy székbe",
        classic: "25 másodperc felállítani valakit és leültetni egy székbe",
      },
      {
        label: "Tervezés",
        coala: "Szabadalmaztatott francia innováció",
        machine: "Világszerte tervezik és gyártják",
        classic: "Világszerte gyártják",
      },
      {
        label: "Költség 3 év alatt (5 gondozó)",
        coala: "~1650 € · egyszeri",
        machine: "~10 000 €",
        classic: "~640 € · fogyóeszközök",
      },
    ],
  },

  specs: {
    eyebrow: "Műszaki jellemzők",
    title: "Minden, amire szüksége van, és semmi felesleges.",
    items: [
      { label: "Összetétel", value: "Műszaki poliészter 215 g/m² · megerősített bélés" },
      { label: "Elérhető méretek", value: "XS · S · M · L · XL · XXL · 3XL · 4XL (francia 34–64-es méret)" },
      { label: "Szín", value: "Fehér" },
      { label: "Mosás", value: "Gépi mosás 40 °C-on · szárítógépben kíméletes programon" },
      { label: "Tervezés", value: "Szabadalmaztatott francia innováció · Connect Link" },
    ],
    download: "A műszaki adatlap letöltése (PDF)",
    guideEyebrow: "Mérettáblázat",
    guideTitle: "A megfelelő méret kiválasztása.",
    guideIntro: (
      <>
        A COALA-t <em>a gondozó vagy az ápolási szakember</em> viseli, ezért annak a méreteit vegye
        fel, aki a ruhát hordani fogja. Ha két méret között van, válassza a nagyobbat.
      </>
    ),
    toggleAria: "Mérettáblázat",
    women: "Nők",
    men: "Férfiak",
    tableAria: (morpho) => `COALA mérettáblázat: ${morpho}`,
    colSize: "Méret",
    colConfection: "Francia méret",
    colChest: "Mellbőség",
    colWaist: "Derékbőség",
    point: "Fokozat",
    note: "Testméretek, centiméterben.",
  },

  quote: {
    text: "Négy éve gondozom a férjemet. Amikor először használtam a COALA-t, hogy az ágyból a fotelba segítsem, rájöttem, hogy nem kell gyógytornásszá válnom. Csak egy olyan eszközre volt szükségem, amelyet a saját testemhez terveztek.",
    name: "Hélène, 67 éves",
    role: "Gondozó hozzátartozó · Nantes (franciából fordítva)",
  },

  faq: {
    eyebrow: "Kérdések a ruháról",
    title: (
      <>
        A kérdések,
        <br />
        amelyeket
        <br />
        <em>leggyakrabban</em> feltesznek nekünk.
      </>
    ),
    cta: "Az összes kérdés",
    items: [
      {
        q: "Megfelelő a COALA a szerettem számára?",
        a: "A COALA-t Ön, a gondozó viseli, és bárkinek a segítésére alkalmas, akinek segítségre van szüksége az áthelyezésekhez, és meg tudja fogni a fogantyúkat, akár teljesen, akár részben mozgásképes. A ruha XS-től 4XL-ig kapható, a gondozó méretéhez igazodva. Különleges állapotok esetén (előrehaladott felfekvés, friss műtét) kérje az ápolócsapat tanácsát.",
      },
      {
        q: "Meddig tart egy ruha?",
        a: "Otthoni használat mellett (napi 1–2 áthelyezés): 4–6 év. Szakmai használat mellett (napi 10–15 áthelyezés): 18–24 hónap. A szövet gépben mosható 40 °C-on, és szárítógépben kíméletes programon szárítható.",
      },
      {
        q: "Kipróbálhatom vásárlás előtt?",
        a: "Ingyenes kölcsönzést nem kínálunk, szakemberek számára sem. A termék 14 napon belül visszaküldhető, ha nem viselték és új állapotú, a visszaérkezéskor történő ellenőrzés függvényében. A megrendelés beérkezése után videohívásban, angol nyelven bemutatót tartunk Önnek.",
      },
      {
        q: "Hogyan mossam a ruhát?",
        a: "Gépi mosás 40 °C-on hagyományos mosószerrel, majd szárítás szárítógépben kíméletes programon. Ne használjon öblítőt (gyengíti a varrásokat). Ne használjon klóros fehérítőt.",
      },
    ],
  },

  cross: [
    { eyebrow: "Következő lépés", title: "Hogyan működik a gyakorlatban?" },
    { eyebrow: "Ápolói csapatot szerel fel?", title: "Árajánlatkérés" },
    { eyebrow: "A gyakorlatból", title: "Olvassa el a véleményeket" },
  ],
};

export default copy;

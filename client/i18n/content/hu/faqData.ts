import type { FaqCategory } from "@/data/faq";

const data: FaqCategory[] = [
  {
    id: "produit",
    label: "A termék",
    desc: "Anyagok, élettartam, szabványok",
    items: [
      {
        q: "Milyen anyagból készül a COALA ruha?",
        a: "Műszaki poliészterből (215 g/m²), a terhelt pontokon megerősített béléssel. Mind a négy fogási zóna hármas varrással készül. Az állítózsinórok műszaki hevederszalagból vannak.",
      },
      {
        q: "Meddig tart a ruha?",
        a: "Otthoni használat mellett: 4–6 év. Intenzív szakmai használat mellett: 18–24 hónap. A szövet gépben mosható 40 °C-on, és szárítógépben kíméletes programon szárítható.",
      },
      {
        q: "Orvostechnikai eszköz a COALA?",
        a: "Nem. A COALA nem minősül orvostechnikai eszköznek az orvostechnikai eszközökről szóló (EU) 2017/745 európai rendelet értelmében. Műszaki munkaruha és szabadalmaztatott francia innováció.",
      },
    ],
  },
  {
    id: "usage",
    label: "Használat és technika",
    desc: "Kinek szól, hogyan és milyen gyakran",
    items: [
      {
        q: "Megfelelő a COALA a szerettem számára?",
        a: "A COALA a legtöbb olyan személy számára alkalmas, akinek segítségre van szüksége az áthelyezésekhez, és legalább részben részt tud venni a mozdulatban, két kézzel kapaszkodva a fogantyúkba. Magát a ruhát a gondozó viseli; XS-től 4XL-ig kapható, a viselő méretéhez igazodva. Különleges állapotok esetén (előrehaladott felfekvés, friss műtét) kérje az ápolócsapat tanácsát.",
      },
      {
        q: "Szükséges képzés a használatához?",
        a: "Minden ruhához használati útmutató jár, az online oktatóvideók pedig megmutatják a helyes használatot.\n\nCsapatrendelések esetén a Connect Link külön képzést is kínál a szakemberek és vezetőik számára, videohívásban, angol nyelven, a megrendelés beérkezése után.",
      },
      {
        q: "Hány áthelyezés végezhető naponta?",
        a: "Magának a ruhának nincs korlátja. Emberi oldalról: 18, 90 napon át követett gondozó körében átlagosan napi 8 áthelyezést végeztek a COALA-val, derékfájásról pedig senki nem számolt be.",
      },
      {
        q: "Használható kerekesszékkel?",
        a: "Igen. A COALA ugyanolyan jól működik ágy–szék, szék–WC és szék–autó áthelyezéseknél. A 6 leggyakoribb helyzetet a „Hogyan működik” oldalunkon mutatjuk be.",
      },
      {
        q: "Két ember kell a használatához?",
        a: "A legtöbb áthelyezéshez elegendő egy gondozó. Nehezebb személyeknél (100 kg felett) vagy padlóról székbe történő áthelyezéskor két gondozó ajánlott.",
      },
    ],
  },
  {
    id: "achat",
    label: "Rendelés és szállítás",
    desc: "Rendelések, szállítási idők, visszaküldés",
    items: [
      {
        q: "Hogyan rendelhetek?",
        a: "Online áruházunkban, a shop.connectlink.fr oldalon (bankkártyával, Apple Pay-jel vagy átutalással). Szakmai rendelés esetén közvetlenül is felveheti a kapcsolatot csapatunkkal a contact@connectlink.fr címen.",
      },
      {
        q: "Mennyi a szállítási idő?",
        a: "A szállítási idő és a szállítási költség az Ön országától függ, és a pénztárban jelenik meg. Csomagját e-mailben követheti.",
      },
      {
        q: "Visszaküldhetem a ruhát?",
        a: "Igen, 14 napon belül az Európai Unió bármely országából, feltéve, hogy a terméket nem viselték és új állapotú. Csere vagy visszatérítés előtt minden visszaküldött terméket ellenőrzünk. Higiéniai okokból a ruhát lezárt csomagolásban szállítjuk.",
      },
      {
        q: "Kipróbálhatom vásárlás előtt?",
        a: "Ingyenes kölcsönzést nem kínálunk, szakemberek számára sem. A termék azonban 14 napon belül visszaküldhető, ha nem viselték és új állapotú.",
      },
    ],
  },
  {
    id: "pros",
    label: "Szakemberek és intézmények",
    desc: "Idősotthonok, kórházak, otthoni ápolási szolgálatok",
    items: [
      {
        q: "Milyen gyorsan kapok szakmai árajánlatot?",
        a: "2 munkanapon belül. Szakmai csapatunk egyik munkatársa visszahívja Önt, hogy megismerje a körülményeiket, majd testreszabott árajánlatot küld.",
      },
      {
        q: "Valóban benne van a képzés?",
        a: "A képzés 5 felszerelt szakembertől kezdve érdemes. Vezetője a COALA-hálózat ergonómusa vagy ergoterapeutája, videohívásban, angol nyelven tartja a megrendelés beérkezése után, a képzési anyagokat pedig elküldjük Önnek.",
      },
      {
        q: "Kínálnak feltételeket több telephelyes intézményeknek?",
        a: "Igen. Mennyiségi árak, összevont szállítás és dedikált kapcsolattartó azoknak a csoportoknak, ápolási szervezeteknek és szövetségeknek, amelyek legalább 100 ruhát rendelnek.",
      },
      {
        q: "Testre szabható a ruha (logó, osztály neve)?",
        a: "Igen, szitanyomás vagy hímzés 25 darabtól kérhető. Gyártási idő: további 10 munkanap.",
      },
    ],
  },
  {
    id: "lavage",
    label: "Mosás és ápolás",
    desc: "Mosás, szárítás és tárolás",
    items: [
      {
        q: "Hány fokon kell mosni a COALA-t?",
        a: "Gépi mosás 40 °C-on, normál programon, hagyományos mosószerrel. Öblítő nélkül (gyengíti a varrásokat). Klóros fehérítő nélkül.",
      },
      {
        q: "Mehet szárítógépbe?",
        a: "Igen, de csak kíméletes programon. Ideális esetben fektetve vagy vállfán szárítsa, hogy megtartsa formáját.",
      },
      {
        q: "És a vasalás?",
        a: "Nem szükséges. Ha mégis vasalná, közepes hőfokon tegye, és soha ne vasalja a megerősített fogási zónákat.",
      },
      {
        q: "Hogyan kell tárolni a COALA-t?",
        a: "Laposra hajtva, száraz helyen. Az egyedi tárolótok (szakmai rendelésekhez jár) jó állapotban tartja a ruhát, akár munkatáskában is.",
      },
    ],
  },
];

export default data;

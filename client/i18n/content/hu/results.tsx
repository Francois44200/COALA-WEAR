import type { ResultsCopy } from "../results";

const TRANSLATED = " (franciából fordítva)";

const copy: ResultsCopy = {
  hero: {
    eyebrow: "Bizonyítékok és vélemények",
    title: (
      <>
        Ezt mondják<br />
        azok, akik<br />
        <em>használják</em>.
      </>
    ),
    lede: "Gondozó hozzátartozók, ápolási asszisztensek, idősotthon-vezetők. Valódi vélemények és a gyakorlatban mért adatok.",
    ctaOrder: "COALA rendelése",
    ctaTestimonials: "Olvassa el a véleményeket",
    imageAlt: "A COALA transzferruhát viselő gondozó áthelyezés közben",
  },
  stats: [
    {
      value: "95%",
      label: "pozitív hatásról számolt be egészségi állapotára és munkakörülményeire",
      source: "ARACT-tanulmány, 2026, 48 ápolási szakember",
    },
    {
      value: "65%",
      label: "a betegek közül alkalmas a COALA használatára áthelyezéshez vagy ágyban történő igazításhoz",
      source: "Connect Link-tanulmány, 2024, 95 beteg",
    },
    {
      value: "0",
      label: "bejelentett nemkívánatos esemény 2024 novembere óta",
      source: "Connect Link ügyfélkövetés és ARACT-tanulmány, 2026",
    },
    {
      value: "665",
      label: "beteg kapott segítséget a COALA-val az ARACT 2026-os hatásvizsgálata során",
      source: "ARACT-tanulmány, 2026",
    },
  ],
  pullQuote: {
    text: "Azt mondták, kényelmi segédeszköz. Nem az. Biztonsági eszköz – a segített személy és a gondozó számára egyaránt. Megmértem a különbséget.",
    name: "Dr. Arnaud V.",
    role: "Koordináló orvos · Nonprofit idősotthon · Hauts-de-France" + TRANSLATED,
  },
  testimonials: {
    eyebrow: "Vélemények",
    title: (
      <>
        Kipróbálták.<br />
        Íme, mit <em>gondolnak</em>.
      </>
    ),
    badgePro: "Ápolási szakember",
    badgeFamily: "Gondozó hozzátartozó",
    ratingLabel: (rating) => `${rating} csillag az 5-ből`,
    items: [
      {
        quote: "Négy éve gondozom a férjemet. Amikor először használtam a COALA-t egy ágy–szék áthelyezéshez, rájöttem, hogy nem kell gyógytornásszá válnom. Csak egy olyan eszközre volt szükségem, amelyet a saját testemhez terveztek.",
        name: "Hélène M.",
        role: "Gondozó hozzátartozó" + TRANSLATED,
        location: "Nantes",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Nyolc hónapja szereltük fel COALA-val 12 ápolási asszisztensünket. A betegszabadságok száma a felére csökkent. Abban az évben ez volt az egyetlen dolog, amin változtattunk a gyakorlatunkban.",
        name: "Isabelle R.",
        role: "Otthoni gondozási szolgálat (SAAD) vezetője" + TRANSLATED,
        location: "Lyon",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Az édesanyám nehéz, és egyedül végeztem az áthelyezéseket. Nem akartam idősotthonba költöztetni. A COALA-nak köszönhetően két évvel tovább maradhattunk otthon, mint reméltük.",
        name: "Patrick D.",
        role: "Gondozó hozzátartozó, fia" + TRANSLATED,
        location: "Bordeaux",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "A benne foglalt képzés jelenti a különbséget. 60 perc alatt a csapataim megértették a technikát. A bevezetés óta egyetlen áthelyezési incidensünk sem volt.",
        name: "Dr. Arnaud V.",
        role: "Koordináló orvos, idősotthon" + TRANSLATED,
        location: "Hauts-de-France",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Őszintén szólva szkeptikus voltam. Egy ruha erre? De az első hét után már el sem tudom képzelni a munkát nélküle. A fogás valóban egészen más.",
        name: "Sylvie T.",
        role: "Otthoni gondozó, ADMR" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Beépítettük a betanítási folyamatunkba. Minden új munkatárs az első napon megkapja a saját ruháját. Gondozóink számára ez valódi egyéni védőeszköz.",
        name: "Claire B.",
        role: "Otthoni szakápolási szolgálat igazgatója" + TRANSLATED,
        location: "Strasbourg",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Megváltoztatta a kapcsolatomat az apámmal. Korábban az áthelyezések szorongással töltöttek el, és őt is. Most nyugodtabban csináljuk. Ez az apróság nagyon sok mindenen változtatott.",
        name: "Amina K.",
        role: "Gondozó hozzátartozó, lánya" + TRANSLATED,
        location: "Párizs",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Három telephelyünk van Bretagne-ban, és 60 ruha van használatban. A munkatársak visszajelzései egyöntetűek. A technika pontosabb, a kézi betegmozgatással összefüggő munkahelyi balesetek pedig gyakorlatilag megszűntek.",
        name: "François L.",
        role: "Idősotthon-igazgató, kölcsönös biztosítói csoport" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
    ],
  },
  cases: {
    eyebrow: "Esettanulmányok a gyakorlatból",
    title: (
      <>
        Eredmények, amelyeket<br />
        <em>mértünk</em>, nem becsültünk.
      </>
    ),
    items: [
      {
        tag: "Ellátó intézmény · Otthoni szakápolás",
        title: "10 képzett ápolási asszisztens, 18 hónapja egyetlen betegszabadság sem",
        body: "Egy észak-franciaországi kórházcsoport egy hathetes, négy önkéntes ápolási szakemberrel végzett gyakorlati próba után bevezette a COALA-t otthoni szakápolási szolgálatánál (SSIAD) és otthoni kórházi ellátásánál (HAD). Eredmény: a bevezetés után egyetlen derékfájással összefüggő betegszabadság sem volt, szemben az előző év azonos időszakában regisztrált három esettel.",
        metrics: [
          { v: "0", l: "MSD és derékfájás miatti betegszabadság" },
          { v: "18 hónap", l: "követés a csoportnál" },
          { v: "10", l: "felszerelt és képzett ápolási szakember" },
        ],
      },
      {
        tag: "Gondozó hozzátartozó · Otthon",
        title: "Két évvel több otthon egy Bordeaux környéki családnak",
        body: "Patrick D. egyedül gondozta 87 kg-os édesanyját. A napi ágy–szék áthelyezések fizikailag szinte lehetetlenné váltak. A COALA bevezetése és a Connect Link ergoterapeutájával folytatott beszélgetés után további 26 hónapig gondozhatta őt otthon, anélkül hogy idősotthonba kellett volna költöztetnie.",
        metrics: [
          { v: "+26", l: "hónap otthon" },
          { v: "1", l: "egyedül gondozó hozzátartozó" },
          { v: "87 kg", l: "a segített személy" },
        ],
      },
    ],
  },
  trust: {
    label: "A COALA-ban megbízó szervezetek használják",
    ariaLabel: "A COALA-t használó partnerek és szervezetek",
    awardsLabel: "Díjak és elismerések",
    awardsAriaLabel: "Díjak és elismerések",
    awards: [
      "Silver Eco Festival 2024 díjazottja",
      "Silver Surfer",
      "Innovation & Prévention (I&P)",
      "French Tech 2023",
      "Santexpo FHF díj 2026",
      "Janus-díj, Institut Français du Design 2026",
      "Salon SAP díj 2024",
    ],
  },
  finalCta: {
    eyebrow: "Kipróbálná?",
    title: (
      <>
        14 nap, hogy<br />
        saját maga <em>döntsön</em>.
      </>
    ),
    lede: "Ha a ruhát nem viselte, 14 napon belül visszaküldheti az Európai Unió bármely országából. Videohívásos bemutató angol nyelven, a megrendelés beérkezése után.",
    ctaOrder: "COALA rendelése · 129 €-tól",
    ctaQuote: "Árajánlatkérés",
  },
  crossLinks: [
    { eyebrow: "A ruha részletesen", title: "Teljes termékoldal" },
    { eyebrow: "Ápolói csapatot szerelne fel?", title: "Szakmai árajánlat 48 órán belül" },
    { eyebrow: "Kérdése van?", title: "Teljes GYIK" },
  ],
};

export default copy;

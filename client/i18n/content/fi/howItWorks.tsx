import type { HowItWorksCopy } from "../howItWorks";

const copy: HowItWorksCopy = {
  breadcrumb: {
    ariaLabel: "Murupolku",
    home: "Etusivu",
    current: "Näin se toimii",
  },
  hero: {
    eyebrow: "Käyttöopas",
    title: (
      <>
        Pue, avusta,<br /><em>riisu</em>.
      </>
    ),
    lede:
      "COALA otetaan käyttöön muutamassa sekunnissa ja vapautetaan yhtä nopeasti. Siinä välissä autettava henkilö osallistuu: et enää nosta häntä, vaan tuet häntä. Tämä opas perustuu koulutusmateriaaliin, jota käytetään, kun COALA otetaan käyttöön hoitotiimeissä.",
    ctaOrder: "Tilaa COALA",
    ctaProduct: "Katso tuotesivu",
  },
  video: {
    eyebrow: "Esittelyvideo",
    title: (
      <>
        COALA-tekniikka<br /><em>todellisissa tilanteissa</em>.
      </>
    ),
    iframeTitle: "COALA-siirtovaatteen esittely (ranskaksi)",
    note: "Video ranskaksi",
  },
  steps: {
    eyebrow: "Ohjeet",
    title: (
      <>
        Aktivoi tuki<br />ja <em>vapauta</em> se.
      </>
    ),
    lede:
      "Viisi vaihetta valmistautumiseen ennen kuin autat jotakuta liikkumaan. Viisi vaihetta, joilla vaate palaa tavalliseksi siirron jälkeen.",
    phase1Label: "Vaihe 1: Pukeminen",
    phase1: [
      { n: "01", title: "Pue vaate", body: "COALA puetaan kuten tavallinen työvaate: lannevyö on auki ja kiinnitetty vaatteeseen tarranauhoillaan, ja olkahihnat ovat löysällä." },
      { n: "02", title: "Avaa kaksi alinta nappia", body: "Kahden alimman napin kautta pääset käsiksi lannevyöhön ja olkahihnojen kiristimiin." },
      { n: "03", title: "Kiristä lannevyö", body: "Kiristä vyö ja kiinnitä se haluamaasi kireyteen." },
      { n: "04", title: "Kiristä olkahihnat", body: "Vedä olkakiristimien alempaa hihnaa, kunnes saavutat haluamasi kireyden, ja jätä kiristin suljettuun asentoon." },
      { n: "05", title: "Sulje vaate", body: "Kiinnitä kaksi viimeistä nappia. Tuki on aktiivinen: olet valmis avustamaan." },
    ],
    phase1Alt: "Avattu COALA-siirtovaate, jossa näkyvät lannevyö ja olkahihnojen kiristimet",
    phase1Caption: "Lannevyö ja olkahihnojen kiristimet, tuki aktiivinen.",
    phase2Label: "Vaihe 2: Riisuminen",
    phase2: [
      { n: "01", title: "Avaa kaksi alinta nappia", body: "Fyysinen avustaminen on päättynyt: voit vapauttaa tuen." },
      { n: "02", title: "Löysää olkahihnat", body: "Nosta kainaloiden alla olevia kiristimiä löysätäksesi olkahihnat." },
      { n: "03", title: "Avaa lannevyö", body: "Avaa vyö, jotta kaikki kireys poistuu." },
      { n: "04", title: "Kiinnitä vyö paikalleen", body: "Kiinnitä vyön molemmat päät takaisin vaatteen kahden etukappaleen sisäpuolelle." },
      { n: "05", title: "Kiinnitä kaksi alinta nappia", body: "COALA on taas tavallinen vaate, huomaamaton sekä sinulle että ympärilläsi oleville." },
    ],
    phase2Alt: "COALA-siirtovaate kahvat piilotettuina, palautettuna tavalliseksi vaatteeksi",
    phase2Caption: "Tuki vapautettu: COALA on taas tavallinen vaate.",
    warning:
      "Tarkista pukiessasi: varmista, että vyön molemmat osat kulkevat kahvojen läpi vaatteen sisäpuolella.",
  },
  situations: {
    eyebrow: "Milloin käyttää",
    title: (
      <>
        Milloin COALA<br /><em>auttaa</em> sinua.
      </>
    ),
    lede:
      "Tunnista fyysisen avustamisen tilanteet, joissa COALA vähentää käsivarsiisi ja selkääsi kohdistuvaa kuormaa ja helpottaa autettavan henkilön osallistumista.",
    imageAlt: "Hoitoalan ammattilainen käyttää COALA-siirtovaatetta ja auttaa ikääntynyttä henkilöä rollaattorinsa luo",
    items: [
      "Istumasta seisomaan -siirto",
      "Siirto tuolista WC-istuimelle",
      "Asennon korjaus sängyssä ja ylösnousu",
      "Avustettu kävely",
      "Asennon korjaus tuolissa",
      "Kääntäminen sängyssä",
    ],
    profilesTitle: "Kenelle potilaille se sopii?",
    profilesIntro:
      "Ymmärtääkö potilas ohjeet, joissa häntä pyydetään yhteistyöhön? Salliiko hänen fyysinen kuntonsa COALAn käytön? Arvioi jokainen tilanne yksilöllisesti:",
    profiles: [
      "Kyky ymmärtää yhteistyötä edellyttävää ohjausta",
      "Varauksen laatu",
      "Paino",
      "Liikkuvuus",
      "Tasapaino",
      "Yläraajojen lihasvoima",
    ],
    profilesNote:
      "Jos et ole varma, sopiiko COALA potilaan tilanteeseen, kysy neuvoa potilaan hoitotiimiltä.",
  },
  grips: {
    eyebrow: "Käyttöohjeita",
    title: (
      <>
        Mitä kahvoja<br /><em>tarjota</em>.
      </>
    ),
    lede: "Tarjoamasi otteet ratkaisevat, kuinka paljon kuormaa jää hartioillesi ja selällesi.",
    imageAlt: "Lähikuva COALA-siirtovaatteen olkapään otealueesta",
    caption: "Ylempi otealue olkapäällä.",
    items: [
      { title: "Ristiote", detail: "Tarjoa yksi alempi kahva ja vastakkaisen puolen ylempi kahva. Ylempi käsi voidaan sijoittaa liikkeen suuntaan, jotta se auttaa ohjaamaan potilaan katsetta." },
      { title: "Molemmat alemmat kahvat", detail: "Molempien alempien kahvojen tarjoaminen vähentää hartioihisi ja selkääsi kohdistuvaa kuormaa entisestään." },
      { title: "Ei koskaan molempia ylempiä kahvoja", detail: "Älä tarjoa molempia ylempiä kahvoja samanaikaisesti: se rasittaa hartioitasi ja selkääsi." },
      { title: "Älä jätä kahvoja esiin", detail: "Piilota kahvat käyttökertojen välillä: ne voivat tarttua johonkin tai joku voi tarttua niihin yllättäen." },
      { title: "Vapauta tuki, kun et käytä sitä", detail: "Löysää vyö ja olkahihnat, kun et avusta fyysisesti, esimerkiksi ruokailussa avustaessa tai tauon aikana." },
    ],
  },
  verbal: {
    eyebrow: "Sanallinen ohjaus",
    title: (
      <>
        Sanat, jotka<br /><em>aktivoivat</em> potilaan.
      </>
    ),
    lede:
      "Ohjaa potilasta mahdollisimman selkeästi, jotta liikutte yhdessä. Toista ja muotoile sanottavasi uudelleen tarpeen mukaan: jokainen hoitajan ja potilaan pari löytää omat vihjeensä.",
    imageAlt: "Hoitoalan ammattilainen ohjaa potilasta COALA-siirtovaatteen otealueille",
    caption: "Katsekontakti säilyy koko siirron ajan.",
    evaluationLabel: "Yhteistyökyvyn arviointi",
    evaluation: ["”Pystytkö tarttumaan tähän kahvaan?”", "”Tunnetko itsesi vahvaksi?”"],
    sequenceLabel: "Siirron vaiheet",
    sequence: [
      "”Tartu näihin kahvoihin”",
      "”Purista kädet tiukasti kiinni”",
      "”Pidä tiukasti kiinni. Tunnetko itsesi vahvaksi?”",
      "”Siirrä jalkojasi taaksepäin niin pitkälle kuin pystyt”",
      "”Nojaa eteenpäin”",
      "”Vedä kahvoja itseäsi kohti ja työnnä jaloillasi”",
    ],
  },
  posture: {
    eyebrow: "Hoitajan työasento",
    title: (
      <>
        Seiso <em>voimakkaassa</em> asennossa<br />nostamatta.
      </>
    ),
    lede:
      "COALA rasittaa käsivarsiesi ja selkäsi niveliä vähemmän, kunhan asetut oikeaan asentoon.",
    items: [
      { title: "Suora selkä", detail: "Pidä selkä suorana, kun ohjaat potilasta siirtämään jalkojaan taaksepäin ja nojaamaan sinua kohti." },
      { title: "Lonkat ja polvet koukussa", detail: "Koukista lonkkia ja polvia hieman, jotta tuet potilaan liikettä tehokkaasti." },
      { title: "Jalat haara-asennossa", detail: "Aseta jalat erilleen lisätäksesi vakauttasi." },
      { title: "Askel eteen / taakse", detail: "Aseta toinen jalka potilaan jalkojen väliin ja myötäile siirtoa askeltamalla eteen ja taakse." },
    ],
  },
  care: {
    eyebrow: "Hoito",
    title: (
      <>
        <em>Pesuohjeet</em>.
      </>
    ),
    items: [
      "Puuvillapesu 40 °C:ssa.",
      "Kiinnitä vyö suljettuna ja kahvojen läpi pujotettuna ennen kuin laitat vaatteen koneeseen.",
      "Valitse hellävarainen tai matalan lämpötilan kuivausohjelma.",
    ],
    imageAlt: "Taiteltu COALA-siirtovaate valmiina pesuun",
    caption: "Vyö kiinnitetty ja kahvat piilotettu ennen konepesua.",
  },
  deployment: {
    eyebrow: "Käyttöönotto organisaatiossasi",
    title: (
      <>
        Viisi avainta<br /><em>onnistumiseen</em>.
      </>
    ),
    factors: [
      "Tarjoa COALAa vapaaehtoisille hoitoalan ammattilaisille",
      "Omaksu oikeat ohjausliikkeet",
      "Ohjaa potilaat alemmille kahvoille",
      "Vapauta tuki ja piilota kahvat",
      "Opettele pois nostamisen tavasta",
    ],
    staffLabel: "Hoitoalan ammattilaiset (käännetty ranskasta)",
    staffQuotes: [
      "”Vähemmän väsynyt päivän päätteeksi”",
      "”Turvallisempaa, kädet jäävät vapaiksi”",
      "”Helppo käyttää”",
      "”Siihen tottuu nopeasti”",
    ],
    patientLabel: "Potilaat (käännetty ranskasta)",
    patientQuotes: [
      "”Olemme kasvokkain, katse katseessa”",
      "”Aktiivisempaa osallistumista”",
      "”Parempi ote”",
      "”Turvallisuuden tunne”",
    ],
  },
  cta: {
    title: "Valmis työskentelemään COALAn kanssa?",
    body: "Tilaa suoraan tai pyydä tarjous organisaatiollesi.",
    order: "Tilaa COALA",
    quote: "Pyydä tarjous",
    cards: [
      { eyebrow: "Vaate tarkemmin", title: "Koko tuotesivu" },
      { eyebrow: "Kuka sitä käyttää", title: "Kokemukset ja tulokset" },
      { eyebrow: "Kysymykset", title: "Kaikki usein kysytyt kysymykset" },
    ],
  },
};

export default copy;

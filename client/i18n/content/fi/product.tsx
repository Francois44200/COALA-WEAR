import type { ProductCopy } from "../product";

const copy: ProductCopy = {
  buy: {
    viewLabels: [
      "COALA-siirtovaate edestä, neljä otealuetta esillä",
      "COALA-siirtovaate kolmen neljäsosan kulmasta, neljä otealuetta esillä",
      "COALA-siirtovaate edestä, kahvat piilotettuina",
      "COALA-siirtovaatteen sisäinen eksoskeletonirakenne",
      "Hoitoalan ammattilainen COALA-siirtovaate yllään, otealueet esillä",
      "COALA yllä kahvat piilotettuina – näyttää tavalliselta työvaatteelta",
      "Lähikuva olkapään otealueesta",
      "Hoitoalan ammattilainen tukee potilasta COALA-siirtovaate yllään",
    ],
    refPrefix: "COALA · tuotenro CL-B137-BLANC-",
    thumbsAria: "Tuotekuvat",
    eyebrow: "Siirtovaate",
    title: (
      <>
        <em>COALA</em>-siirtovaate
      </>
    ),
    lede:
      "Siirtoja varten suunniteltu tekstiilivaate. Neljä vahvistettua otealuetta ja eksoskeletonirakenne, joka suojaa hoitajaa. COALA ei näy eikä tunnu, mutta suojaa sinua aina, kun tarvitset sitä.",
    price: "alkaen 129 €",
    priceMeta: "sis. ALV",
    sizeLabel: "Koko",
    sizeGuide: "Kokotaulukko ↗",
    sizeAria: "Valitse koko",
    colourLabel: "Väri · Valkoinen",
    colourNote: "COALA on toistaiseksi saatavana vain valkoisena.",
    ctaOrder: "Tilaa COALA",
    ctaQuote: "Pyydä tarjous",
    reassuranceAria: "Lupauksemme",
    reassurance: [
      "Maksuton palautus 14 päivän sisällä koko EU:n alueelta",
      "Patentoitu ranskalainen innovaatio",
      "Konepestävä 40 °C:ssa",
    ],
  },

  features: {
    eyebrow: "Hoitajien suunnittelema, hoitajille",
    title: (
      <>
        Neljä teknistä ratkaisua,
        <br />
        yksi ainoa <em>tavoite</em>.
      </>
    ),
    items: [
      {
        tag: "01 · Neljän käden liike",
        title: "Yhteinen liike: henkilö pitää kiinni",
        body: "COALAa käyttää hoitaja, ja autettava henkilö pitää kiinni kahvoista. Hoitaja ohjaa liikettä kehonsa painolla nostamisen sijaan, joten siirrosta tulee yhteinen ponnistus. Neljä otealuetta, kahvat hartioilla, kyljillä ja lantiolla.",
        label: "COALA-siirtovaatteen neljä vahvistettua otealuetta",
      },
      {
        tag: "02 · Työvaate",
        title: "Vain 200 g lisäpainoa, ei valmisteluaikaa",
        body: "COALA puetaan kuin tavallinen työvaate, muutamassa sekunnissa. Siirron aikana hartiat ja alaselkä eivät enää kuormitu, eikä tarvita mekaanisia kiinnityksiä tai pitkää koulutusta. Valmis heti, missä tahansa oletkin.",
        label: "COALA-siirtovaate kahvat piilotettuina – näyttää aivan tavalliselta työvaatteelta",
      },
      {
        tag: "03 · Tuki, jonka voi kytkeä pois",
        title: "Löysätty 5 sekunnissa",
        body: "Kun siirrot on tehty, hoitaja löysää tukialueet ja piilottaa otteet saman tien. Löysättynä COALA ei purista lainkaan: käyttäjä ei tunne sitä, eivätkä muut näe sitä.",
        label: "COALA-siirtovaatteen sisäinen valjasrakenne, löysätty viidessä sekunnissa",
      },
      {
        tag: "04 · Monipuolinen apu",
        title: "Auttaa hoitajaa korvaamatta inhimillistä kosketusta",
        body: "COALA tukee hoitajan liikettä muuttamatta tapaa, jolla hän antaa hoitoa. Teknistä polyesterikangasta 215 g/m², pestävä 40 °C:ssa, koot XS–4XL.",
        label: "Hoitoalan ammattilainen saattaa ikääntyneen henkilön rollaattorin luo COALA yllään",
      },
    ],
  },

  range: {
    eyebrow: "Mallisto",
    title: (
      <>
        Kolme mallia, yksi ja sama <em>liike</em>.
      </>
    ),
    lede:
      "Valjaat ja kangas vaihtelevat käytön intensiteetin mukaan. Kaikkia malleja on saatavana kokoina XS–4XL (ranskalaiset koot 34–64), ne ovat konepestäviä 40 °C:ssa ja täyttävät HAS-suosituksen R.47.",
    badge: "Suosituin",
    imgAlt: (name) => `${name} -siirtovaate käytössä`,
    vat: "sis. ALV",
    harnessLabel: "Valjaat",
    fabricLabel: "Kangas",
    supportLabel: "Tuki",
    cta: "Tilaa COALA",
    models: [
      { audience: "Omaishoitajat", harness: "1 mm", fabric: "50 % puuvillaa · 50 % polyesteriä", support: "Käyttöohje mukana" },
      { audience: "Hoitoalan ammattilaiset ja säännöllisesti avustavat", harness: "1 mm, puuvillavuori", fabric: "50 % puuvillaa · 50 % polyesteriä", support: "Käyttöohje mukana" },
      { audience: "Hoitoalan ammattilaiset", harness: "2 mm, CoolTex®-vuori", fabric: "Teknistä CoolTex®-kangasta", support: "Koulutus ja tuki" },
    ],
    noteBefore: "Valjaat painavat noin 200 g, ja ne saa käyttöön noin kymmenessä sekunnissa. Jos varustat organisaatiota, ",
    noteLink: "pyydä tarjous",
    noteAfter: " yksittäisen tilauksen sijaan.",
  },

  go: {
    badge: "Tulossa pian",
    subtitle: (
      <>
        Liivi, joka suojaa terveyttäsi, jotta voit suojata paremmin <em>muita</em>.
      </>
    ),
    priceValue: "Hinta pyynnöstä",
    priceCta: "Kysy hintaa",
    lede:
      "Ensihoitajien kanssa ja heitä varten kehitetty COALA Go tuo COALA-järjestelmän huomioliiviin: sisäiset valjaat ja ulkoiset otekahvat keventävät selän kuormitusta ja vähentävät loukkaantumisriskiä.",
    photoAlt: "Ensihoitaja COALA Go -liivi yllään",
    benefits: [
      { title: "Keventää selän kuormitusta", detail: "COALA-järjestelmä siirtää voimat hartioilta lantiolle ja alaselälle." },
      { title: "Vähentää TULE-sairauksien riskiä", detail: "Ulkoiset otekahvat paremman otteen ja vähäisemmän jännityksen takaamiseksi." },
      { title: "Tukea ja turvallisuutta", detail: "Integroitu järjestelmä, huomaamaton ja aina käytettävissä liivin alla." },
      { title: "Mukavuutta joka päivä", detail: "Ergonominen leikkaus, hengittävät alueet ja verkkovuori, jotka liikkuvat mukanasi." },
    ],
    specs: [
      { label: "COALA-järjestelmä", value: "Piilotetut sisäiset valjaat · sisäänvedettävät otekahvat" },
      { label: "Näkyvyys", value: "Heijastinnauhat · 360°" },
      { label: "Taskut", value: "Vetoketjulliset rintataskut · suuret vetoketjulliset alataskut" },
      { label: "Materiaalit", value: "100 % kestävää, vettähylkivää polyesteriä · hengittävä verkkovuori" },
      { label: "Väri", value: "Laivastonsininen" },
      { label: "Koot", value: "XS–4XL · suora unisex-malli" },
      { label: "Hoito", value: "Konepestävä 60 °C:ssa" },
    ],
    usagesTitle: "Jokaiseen tehtävään",
    usages: [
      "Potilaan käsittely",
      "Paarikuljetus",
      "Nostot ja siirrot",
      "Ensihoito kotona",
      "Hätätilanteet",
    ],
    note:
      "COALA Go ei ole vielä ostettavissa verkossa. Ota meihin yhteyttä, niin kerromme, kun se tulee saataville, ja lähetämme palvelullesi räätälöidyn tarjouksen.",
  },

  compare: {
    eyebrow: "Miksei kone tai tavallinen työtakki?",
    title: (
      <>
        Siirrot ansaitsevat
        <br />
        oman <em>erityisvälineensä</em>.
      </>
    ),
    lede:
      "Vertasimme COALAa kahteen kentällä yleisimpään käytäntöön. Näin ne pärjäävät todellisessa käytössä.",
    coalaSub: "Siirtovaate",
    machineBrand: "Potilasnostin",
    machineSub: "Mekaaninen nostoapuväline",
    classicBrand: "Tavallinen työtakki",
    classicSub: "Hoitoalan tai kankainen",
    rows: [
      {
        label: "Siirtoliike",
        coala: "Autettava henkilö osallistuu aktiivisesti, ja hoitaja ohjaa siirtoa kehonsa painolla selkä suorana ja keskivartalo aktiivisena, ilman hartioiden tai käsivarsien rasitusta.",
        machine: "Selkä ja käsivarret koukussa nostoliinoja asetettaessa.\nEi käsin tehtävää siirtoliikettä.",
        classic: "Avustamaton käsin tehtävä siirto.\nKuorma kannetaan selkä taivutettuna ja käsivarsilla vetäen.",
      },
      {
        label: "Arvokkuuden säilyttäminen",
        coala: "Autettava henkilö osallistuu aktiivisesti, mikä hyödyttää hoitajan terveyttä.\nTasapainoisempi suhde hoitajan ja hoidettavan välillä.\nKatsekontakti säilyy.",
        machine: "Kone tekee siirrossa kaiken työn.\nEi inhimillistä kontaktia.\nRiippuvuutta koneesta voi olla vaikea hyväksyä.",
        classic: "Inhimillinen kontakti, joka altistaa hoitoalan ammattilaisen riskeille.\nEi katsekontaktia.",
      },
      {
        label: "Selän, hartioiden ja käsivarsien kuormitus",
        coala: "Ei enää selän taivuttamista eikä käsivarsien aktiivista ponnistelua.\nSelkä suorana, keskivartalo aktiivisena ja kädet vapaina.",
        machine: "Ei voimaa vaativia liikkeitä.\nNostoliinojen asettaminen ja poistaminen, koneen käsittely.",
        classic: "Käsittelyliikkeet, ponnistelu ja rasitus, jotka aiheuttavat alaselkäkipua sekä hartioiden ja käsivarsien TULE-sairauksia.",
      },
      {
        label: "Siirron kesto",
        coala: "35 sekuntia henkilön nostamiseen seisomaan ja istuttamiseen tuoliin",
        machine: "3 minuuttia 40 sekuntia henkilön nostamiseen seisomaan ja istuttamiseen tuoliin",
        classic: "25 sekuntia henkilön nostamiseen seisomaan ja istuttamiseen tuoliin",
      },
      {
        label: "Suunnittelu",
        coala: "Patentoitu ranskalainen innovaatio",
        machine: "Suunniteltu ja valmistettu maailmanlaajuisesti",
        classic: "Valmistettu maailmanlaajuisesti",
      },
      {
        label: "Kustannus 3 vuodessa (5 hoitajaa)",
        coala: "~1650 € · kertahankinta",
        machine: "~10 000 €",
        classic: "~640 € · kulutustarvikkeet",
      },
    ],
  },

  specs: {
    eyebrow: "Tekniset tiedot",
    title: "Kaikki tarpeellinen, ei mitään turhaa.",
    items: [
      { label: "Materiaali", value: "Teknistä polyesteriä 215 g/m² · vahvistettu vuori" },
      { label: "Saatavilla olevat koot", value: "XS · S · M · L · XL · XXL · 3XL · 4XL (ranskalaiset koot 34–64)" },
      { label: "Väri", value: "Valkoinen" },
      { label: "Pesu", value: "Konepesu 40 °C:ssa · rumpukuivaus hellävaraisella ohjelmalla" },
      { label: "Suunnittelu", value: "Patentoitu ranskalainen innovaatio · Connect Link" },
    ],
    download: "Lataa tekninen tuoteseloste (PDF)",
    guideEyebrow: "Kokotaulukko",
    guideTitle: "Oikean koon valinta.",
    guideIntro: (
      <>
        COALAa käyttää <em>hoitaja tai hoitoalan ammattilainen</em>, joten mittaa henkilö, joka
        käyttää vaatetta. Jos olet kahden koon välissä, valitse suurempi.
      </>
    ),
    toggleAria: "Kokotaulukko",
    women: "Naiset",
    men: "Miehet",
    tableAria: (morpho) => `COALA-kokotaulukko: ${morpho}`,
    colSize: "Koko",
    colConfection: "Ranskalainen koko",
    colChest: "Rinta",
    colWaist: "Vyötärö",
    point: "Kokoluokka",
    note: "Vartalon mitat senttimetreinä.",
  },

  quote: {
    text: "Olen hoitanut miestäni neljä vuotta. Kun käytin COALAa ensimmäisen kerran siirtääkseni hänet sängystä nojatuoliin, tajusin, ettei minun tarvitse ryhtyä fysioterapeutiksi. Tarvitsin vain välineen, joka on suunniteltu omalle keholleni.",
    name: "Hélène, 67",
    role: "Omaishoitaja · Nantes (käännetty ranskasta)",
  },

  faq: {
    eyebrow: "Kysymyksiä vaatteesta",
    title: (
      <>
        Kysymykset,
        <br />
        joita meiltä kysytään
        <br />
        <em>useimmin</em>.
      </>
    ),
    cta: "Katso kaikki kysymykset",
    items: [
      {
        q: "Sopiiko COALA läheiselleni?",
        a: "COALAa käytät sinä, hoitaja, ja se sopii kenen tahansa avustamiseen, joka tarvitsee apua siirroissa ja pystyy pitämään kiinni kahvoista, liikkui hän sitten itsenäisesti tai osittain. Vaatetta on saatavana kokoina XS–4XL hoitajan mukaan. Erityistilanteissa (pitkälle edenneet painehaavat, äskettäinen leikkaus) kysy neuvoa hoitotiimiltä.",
      },
      {
        q: "Kuinka kauan vaate kestää?",
        a: "Kotikäytössä (1–2 siirtoa päivässä): 4–6 vuotta. Ammattikäytössä (10–15 siirtoa päivässä): 18–24 kuukautta. Kangas on konepestävä 40 °C:ssa ja voidaan kuivata rumpukuivaimessa hellävaraisella ohjelmalla.",
      },
      {
        q: "Voinko kokeilla ennen ostamista?",
        a: "Emme tarjoa maksuttomia lainoja, emme myöskään ammattilaisille. Tuotteen voi palauttaa 14 päivän sisällä, jos sitä ei ole käytetty ja se on edelleen uudenveroinen; palautukset tarkastetaan. Kun tilauksesi on vastaanotettu, voimme esitellä tuotteen videopuheluna englanniksi.",
      },
      {
        q: "Miten vaate pestään?",
        a: "Konepesu 40 °C:ssa tavallisella pesuaineella ja rumpukuivaus hellävaraisella ohjelmalla. Älä käytä huuhteluainetta (se heikentää saumoja). Älä käytä klooripohjaista valkaisuainetta.",
      },
    ],
  },

  cross: [
    { eyebrow: "Seuraava vaihe", title: "Miten se toimii käytännössä?" },
    { eyebrow: "Varustatko hoitotiimiä?", title: "Pyydä tarjous" },
    { eyebrow: "Kentältä", title: "Lue kokemuksia" },
  ],
};

export default copy;

import type { HomeCopy } from "../home";

const copy: HomeCopy = {
  hero: {
    tag: "Tekstiilinen siirtoapuväline · COALA by Connect Link",
    title: (
      <>
        Siirtovaate,<br />
        joka <em>suojaa</em><br />
        hoitajaa.
      </>
    ),
    lede: "COALA tukee päivittäisiä siirtoja: se keventää hoitajan kuormitusta, pitää autettavan henkilön turvassa ja tuo hoitoon sujuvuutta.",
    ctaFamily: "Hoidan läheistäni",
    ctaTeams: "Varustan hoitotiimin",
    ctaHow: "Katso, miten se toimii",
    trust: ["Patentoitu ranskalainen innovaatio", "Pestävä ja uudelleenkäytettävä", "Käytössä hoivakodeissa ja kotona"],
    statLabel: "kotihoidon hoitajista kertoo terveytensä ja työolojensa parantuneen",
    statSource: "ARACT-tutkimus 2026 · n=48 hoitoalan ammattilaista / n=665 potilasta / päivittäinen käyttö 12 kuukauden ajan",
  },
  logos: {
    ariaLabel: "Kumppanit ja palkinnot",
    partnersTitle: "Käytössä ja tukemassa",
    awardsTitle: "Palkinnot ja tunnustukset",
    awards: [
      "French Tech 2023",
      "Santexpo FHF Award 2026",
      "Silver Eco Festival 2024 -voittaja",
      "Janus Award, Institut Français du Design 2026",
      "Salon SAP Award 2024",
    ],
  },
  bannerAlt: "COALA-siirtovaate käytössä",
  problem: {
    eyebrow: "Todellisuus",
    title: (
      <>
        Päivittäiset siirrot <em>kuormittavat</em><br />
        hoitajia.
      </>
    ),
    lede: "Nostamista, siirtämistä, istumaan auttamista, tukemista. Joka päivä miljoonia toistuvia liikkeitä, joskus kivuliaita ja aina kuormittavia. COALA on suunniteltu tämän todellisuuden pohjalta.",
    cards: [
      { stat: "94%", label: "hoitoalan ammattilaisten ja hoitajien ammattitaudeista on tuki- ja liikuntaelinsairauksia (TULE-sairauksia)", source: "Assurance Maladie (Ranska) 2025" },
      { stat: "4 min", label: "on sängystä tuoliin -siirron keskimääräinen kesto mekaanisella nostoapuvälineellä", source: "BRCS-tutkimus 2021" },
      { stat: "×3", label: "ennustettu kasvu kotona asuvien, apua tarvitsevien ikääntyneiden määrässä Ranskassa vuoteen 2030 mennessä", source: "IGAS-raportti (Ranska) 2025" },
    ],
  },
  solution: {
    eyebrow: "Ratkaisu",
    title: (
      <>
        Vaate, joka on suunniteltu<br /><em>tukemaan</em><br />jokaista liikettä.
      </>
    ),
    lede: "COALAa käyttää hoitaja. Vahvistettujen otealueiden ansiosta autettava henkilö saa tukevan otteen molemmin käsin ja voi osallistua liikkeeseen aktiivisesti ja turvallisesti: ei väkisin vääntämistä, ei raskaita laitteita, ei valmisteluja.",
    benefits: [
      { title: "Tekee jokaisesta siirrosta turvallisemman", body: "Neljä vahvistettua otealuetta, tasaisesti jakautuneet tukipisteet ja kahvat, jotka voi puhdistaa desinfiointiliinalla." },
      { title: "Keventää hoitajan kuormaa", body: "Vapaa työasento ja koko kehoon jakautuva voima: vähemmän rasitusta, vähemmän riskiä, enemmän osallistumista." },
      { title: "Kunnioittaa ihmistä", body: "Huomaamaton ulospäin ja käyttäjälle tuntumaton, ja se kannustaa autettavaa henkilöä osallistumaan aktiivisesti." },
      { title: "Täydentää nykyisiä apuvälineitä", body: "Se ei korvaa potilasnostinta. Käytä sitä nostimen rinnalla siirroissa, joissa henkilö pystyy osittain osallistumaan." },
      { title: "Tehokas ensimmäisestä käyttökerrasta", body: "Puettu sekunneissa. Ei valmisteluaikaa, ei vipuvartta, ei lisävarusteita." },
      { title: "Sopii kaikkiin ympäristöihin", body: "Koti, hoivakoti, sairaala, kotihoito. Sänky, tuoli, seisominen, kylpyhuone: yksi ainoa väline." },
    ],
    ctaOrder: "Tilaa COALA",
    ctaDetails: "Katso tuotteen kaikki tiedot",
  },
  how: {
    eyebrow: "Näin se toimii",
    title: (
      <>
        <em>Pue.</em> Tue. Siirrä.
      </>
    ),
    lede: "Kolme vaihetta, jotka kuka tahansa hoitaja, omainen tai ammattilainen, oppii muutamassa minuutissa.",
    steps: [
      {
        title: "Pue",
        body: "Hoitaja pukee COALAn ylleen kuten tavallisen työvaatteensa. Se puetaan nopeasti, ja kun kiristimet on löysätty ja kahvat piilotettu, se näyttää aivan tavalliselta työvaatteelta.",
        meta: "< 10 sekuntia",
        imageLabel: "01 / Pue",
      },
      {
        title: "Tue",
        body: "Autettava henkilö löytää otealueet hartioilta ja lantiolta ja tarttuu niihin. Matala asento, suora selkä, vakaa ote – ilman selän tai käsivarsien rasitusta.",
        meta: "Vapaa asento käsivarsille ja selälle",
        imageLabel: "02 / Tue",
      },
      {
        title: "Siirrä",
        body: "Liike on ohjattu. Henkilö voi osallistua aktiivisesti, ja hoitaja tukee väkisin vääntämättä. Sänky, tuoli, seisominen, kylpyhuoneesta poistuminen.",
        meta: "Sujuva ja turvallinen liike",
        imageLabel: "03 / Siirrä",
      },
    ],
    video: "Katso esittelyvideo (2 min, ranskaksi)",
  },
  journeys: {
    eyebrow: "Kenelle",
    title: (
      <>
        Ratkaisu niin omaishoitajille<br />kuin <em>ammattilaisillekin</em>.
      </>
    ),
    family: {
      kicker: "01 — Omaishoitajat",
      title: "Hoidan läheistäni",
      body: "Niille, jotka tukevat läheistään joka päivä. Tutustu, valitse ja tilaa COALA, ja hyödynnä hyviä käytäntöjä esittelevät opetusvideomme.",
      bullets: ["Neuvontaa ennen ostoa", "Kotiinkuljetus, palautus 14 päivän sisällä", "Opetusvideot ja oikeiden ihmisten asiakaspalvelu"],
      statLabel: "hoitoalan ammattilaista ja omaishoitajaa varustettu kotona",
      ctaPrimary: "Tutustu omaishoitajien sivuun",
      ctaOrder: "Tilaa COALA",
    },
    teams: {
      kicker: "02 — Ammattilaiset",
      title: "Varustan hoitotiimin",
      body: "Kotihoito, hoivakodit, sairaalat, vammaispalvelut. Tarjoukset, videoesittelyt englanniksi ja tuettu käyttöönotto fyysisen kuormituksen vähentämiseksi ja TULE-sairauksien ehkäisemiseksi.",
      bullets: ["Videoesittely englanniksi, kun tilauksesi on vastaanotettu", "Brodeeraus ja räätälöinti ryhmätilauksiin", "Koulutustuki ja käyttöpalaute", "Erillinen, kestävä COALA Pro -malli"],
      statLabel: "kumppaniorganisaatiota varustettu",
      ctaPrimary: "Pyydä tarjous",
      ctaDemo: "Sovi esittely",
    },
  },
  proof: {
    eyebrow: "Näyttö ja tulokset",
    title: (
      <>
        Suunniteltu yhdessä hoitoalan ammattilaisten kanssa.<br />Käyttäjien <em>todistama</em>.
      </>
    ),
    quote:
      "Käytämme sitä aamuisin ylösnousuissa ja sängystä tuoliin -siirroissa. Viikossa hoitajani eivät enää halunneet työskennellä ilman sitä, ja asukkaat osallistuvat liikkeeseen aktiivisemmin.",
    quoteAuthor: "Emmanuelle D.",
    quoteRole: "Osastonhoitaja, Nancy (Ranska) · käännetty ranskasta",
    stats: [
      { val: "95", unit: "%", label: "käyttäjistä koki terveytensä ja työolojensa parantuneen vuoden COALA-käytön jälkeen", src: "ARACT Hauts-de-France -tutkimus 2026" },
      { val: "0", unit: "", label: "haittatapahtumaa raportoitu 665 potilaan hoidossa COALAn kanssa", src: "ARACT Hauts-de-France -tutkimus 2026" },
      { val: "84", unit: "%", label: "vuoden 2025 asiakkaista tilasi uudelleen vuonna 2026", src: "COALA-tiedot" },
    ],
    pressTitle: "Mediassa (Ranska)",
  },
  faq: {
    eyebrow: "UKK",
    title: (
      <>
        Sinun kysymyksesi,<br /><em>meidän vastauksemme</em>.
      </>
    ),
    lede: "Suoria vastauksia ilman liioittelua – myös kysymyksiin, joita meiltä kysytään, kun COALA on nähty verkossa.",
    cta: "Katso kaikki kysymykset",
    items: [
      {
        q: "Korvaako COALA potilasnostimen?",
        a: "Ei. COALA on tekstiilinen apuväline avustettuihin käsin tehtäviin siirtoihin, joissa henkilö pystyy osallistumaan liikkeeseen ainakin osittain. Kun tarvitaan mekaanista nostoapuvälinettä (paljon apua tarvitseva henkilö tai siirto, johon ei voi osallistua), potilasnostin on edelleen välttämätön. COALA täydentää apuvälineitäsi, se ei korvaa niitä.",
      },
      {
        q: "Miten valitsen oikean koon?",
        a: "Kokoja on kahdeksan, XS:stä 4XL:ään, ja koko valitaan käyttäjän rinnanympäryksen ja pituuden mukaan. Yksityiskohtainen kokotaulukko löytyy tuotesivulta. Jos olet epävarma, tiimimme neuvoo sinua ennen ostoa sähköpostitse ja sitoumuksetta.",
      },
      {
        q: "Voiko vaatteen pestä?",
        a: "Kyllä. COALA on konepestävä 40 °C:ssa ja täyttää Ranskan kansallisen terveysviranomaisen (HAS) suosituksen r.47 hoitotekstiilien hygieniasta. Hellävarainen tai matalan lämpötilan kuivaus on suositeltavaa, jotta vaate pysyy mukavana ja huomaamattomana käyttää.",
      },
      {
        q: "Voimmeko sopia esittelyn organisaatiollemme?",
        a: "Kyllä, videopuheluna englanniksi, kun tilauksesi on vastaanotettu. COALAn edustaja esittelee tuotteen, näyttää tiimeillesi, miten sitä käytetään, ja vastaa heidän kysymyksiinsä. Esittely on maksuton.",
      },
      {
        q: "Milloin COALA ei ole oikea ratkaisu?",
        a: "COALA perustuu siihen, että autettava henkilö osallistuu siirtoon aktiivisesti, mikä suojaa hoitajan terveyttä. Henkilön on siksi pystyttävä kantamaan osa painostaan, painosuhteen hoitajaan on oltava toimiva ja hänen on pystyttävä pitämään kahvoista kiinni molemmin käsin.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Valmis?",
    title: (
      <>
        Mikset <em>kokeilisi</em><br />COALAa itse?
      </>
    ),
    lede: "Läheinen tuettavana, tiimi varustettavana tai vain kysymys ennen päätöstä. Vastaamme 24 tunnin kuluessa.",
    ctaOrder: "Tilaa COALA",
    ctaQuote: "Pyydä tarjous",
    ctaAdvice: "Keskustele kanssamme ennen ostoa",
    trust: [
      { strong: "24 h", sub: "keskimääräinen vastausaika" },
      { strong: "14\u00a0päivää", sub: "aikaa palauttaa tilaus" },
      { strong: "Yli 1 500 hoitajan ja hoitoalan ammattilaisen luottama Ranskassa", sub: "", wide: true },
    ],
  },
};

export default copy;

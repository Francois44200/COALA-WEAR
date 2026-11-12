import type { ResultsCopy } from "../results";

const TRANSLATED = " (käännetty ranskasta)";

const copy: ResultsCopy = {
  hero: {
    eyebrow: "Näyttöä ja kokemuksia",
    title: (
      <>
        Mitä sanovat ne,<br />
        jotka <em>käyttävät sitä</em><br />
        päivittäin.
      </>
    ),
    lede: "Omaishoitajat, lähihoitajat, hoivakotien johtajat. Aitoja kokemuksia ja kentällä mitattuja lukuja.",
    ctaOrder: "Tilaa COALA",
    ctaTestimonials: "Lue kokemukset",
    imageAlt: "Hoitaja käyttää COALA-siirtovaatetta siirron aikana",
  },
  stats: [
    {
      value: "95%",
      label: "koki myönteisen vaikutuksen terveyteen ja työoloihin",
      source: "ARACT-tutkimus 2026, 48 hoitoalan ammattilaista",
    },
    {
      value: "65%",
      label: "potilaista soveltuu COALAn käyttöön siirroissa tai sängyssä asennon vaihtamisessa",
      source: "Connect Link -tutkimus 2024, 95 potilasta",
    },
    {
      value: "0",
      label: "haittatapahtumaa raportoitu marraskuun 2024 jälkeen",
      source: "Connect Linkin asiakasseuranta ja ARACT-tutkimus 2026",
    },
    {
      value: "665",
      label: "potilasta avustettiin COALAn avulla ARACT 2026 -vaikuttavuustutkimuksen aikana",
      source: "ARACT-tutkimus 2026",
    },
  ],
  pullQuote: {
    text: "Minulle sanottiin, että se on mukavuutta lisäävä apuväline. Ei se ole. Se on turvallisuusväline sekä avustettavalle että hoitajalle. Olen mitannut eron.",
    name: "Tri Arnaud V.",
    role: "Vastaava lääkäri · Voittoa tavoittelematon hoivakoti · Hauts-de-France" + TRANSLATED,
  },
  testimonials: {
    eyebrow: "Kokemuksia",
    title: (
      <>
        He kokeilivat sitä.<br />
        Tätä he <em>ajattelevat</em>.
      </>
    ),
    badgePro: "Hoitoalan ammattilainen",
    badgeFamily: "Omaishoitaja",
    ratingLabel: (rating) => `${rating} ${rating === 1 ? "tähti" : "tähteä"} viidestä`,
    items: [
      {
        quote: "Olen hoitanut miestäni neljä vuotta. Kun käytin COALAa ensimmäisen kerran siirrossa sängystä tuoliin, tajusin, ettei minun tarvitse ryhtyä fysioterapeutiksi. Tarvitsin vain välineen, joka on suunniteltu omalle keholleni.",
        name: "Hélène M.",
        role: "Omaishoitaja" + TRANSLATED,
        location: "Nantes",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Varustimme 12 lähihoitajaamme COALAlla kahdeksan kuukautta sitten. Sairauspoissaolot ovat puolittuneet. Se oli ainoa asia, jonka muutimme käytännöissämme sinä vuonna.",
        name: "Isabelle R.",
        role: "Kotihoitopalvelun esihenkilö (SAAD)" + TRANSLATED,
        location: "Lyon",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Äitini on painava, ja tein siirrot yksin. En halunnut muuttaa häntä hoivakotiin. COALA antoi meille kaksi vuotta enemmän kotona kuin olimme uskaltaneet toivoa.",
        name: "Patrick D.",
        role: "Omaishoitaja, poika" + TRANSLATED,
        location: "Bordeaux",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Mukana tuleva koulutus ratkaisee. Tiimini ymmärsivät tekniikan 60 minuutissa. Käyttöönoton jälkeen meillä ei ole ollut yhtäkään siirtoihin liittyvää vaaratilannetta.",
        name: "Tri Arnaud V.",
        role: "Vastaava lääkäri, hoivakoti" + TRANSLATED,
        location: "Hauts-de-France",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Rehellisesti sanottuna olin skeptinen. Vaate siihen tarkoitukseen? Mutta ensimmäisen viikon jälkeen en voi kuvitella työskenteleväni ilman sitä. Ote tuntuu todella erilaiselta.",
        name: "Sylvie T.",
        role: "Kotihoitaja, ADMR" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Olemme ottaneet sen osaksi perehdytystämme. Jokainen uusi työntekijä saa oman vaatteensa ensimmäisenä päivänä. Hoitajillemme se on todellinen henkilönsuojain.",
        name: "Claire B.",
        role: "Johtaja, kotisairaanhoitopalvelu" + TRANSLATED,
        location: "Strasbourg",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Se muutti suhdettani isääni. Ennen siirrot jännittivät minua, ja häntäkin. Nyt teemme ne rauhallisemmin. Tämä pieni yksityiskohta on muuttanut paljon.",
        name: "Amina K.",
        role: "Omaishoitaja, tytär" + TRANSLATED,
        location: "Pariisi",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Meillä on kolme toimipistettä Bretagnessa ja 60 vaatetta käytössä. Palaute kentältä on yksimielistä. Tekniikka on tarkempaa, ja käsin tehtäviin siirtoihin liittyvät työtapaturmat ovat käytännössä loppuneet.",
        name: "François L.",
        role: "Hoivakodin johtaja, keskinäinen hoivakonserni" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
    ],
  },
  cases: {
    eyebrow: "Tapaustutkimuksia kentältä",
    title: (
      <>
        Tuloksia, jotka on<br />
        <em>mitattu</em>, ei arvioitu.
      </>
    ),
    items: [
      {
        tag: "Hoitopalvelu · Kotisairaanhoito",
        title: "10 lähihoitajaa koulutettu, ei sairauspoissaoloja 18 kuukauteen",
        body: "Pohjois-ranskalainen sairaalaryhmä otti COALAn käyttöön kotisairaanhoidossaan (SSIAD) ja kotisairaalassaan (HAD) kuuden viikon kenttäkokeilun jälkeen, johon osallistui neljä vapaaehtoista hoitoalan ammattilaista. Tulos: käyttöönoton jälkeen ei yhtään alaselkävaivoista johtuvaa sairauspoissaoloa, kun edellisenä vuonna samalla ajanjaksolla tapauksia oli kolme.",
        metrics: [
          { v: "0", l: "TULE- ja alaselkäperäistä sairauspoissaoloa" },
          { v: "18 kk", l: "seurantaa ryhmässä" },
          { v: "10", l: "hoitoalan ammattilaista varustettu ja koulutettu" },
        ],
      },
      {
        tag: "Omaishoitaja · Koti",
        title: "Kaksi vuotta lisää kotona perheelle Bordeaux’n lähellä",
        body: "Patrick D. hoiti 87-kiloista äitiään yksin. Päivittäiset siirrot sängystä tuoliin olivat käymässä fyysisesti mahdottomiksi. Kun COALA otettiin käyttöön ja hän keskusteli Connect Linkin toimintaterapeutin kanssa, hän pystyi jatkamaan äitinsä hoitamista kotona ilman muuttoa hoivakotiin vielä 26 kuukauden ajan.",
        metrics: [
          { v: "+26", l: "kuukautta kotona" },
          { v: "1", l: "omaishoitaja yksin" },
          { v: "87 kg", l: "avustettava henkilö" },
        ],
      },
    ],
  },
  trust: {
    label: "Käytössä organisaatioissa, jotka luottavat COALAan",
    ariaLabel: "COALAa käyttävät kumppanit ja organisaatiot",
    awardsLabel: "Palkinnot ja tunnustukset",
    awardsAriaLabel: "Palkinnot ja tunnustukset",
    awards: [
      "Silver Eco Festival 2024 -voittaja",
      "Silver Surfer",
      "Innovation & Prévention (I&P)",
      "French Tech 2023",
      "Santexpo FHF Award 2026",
      "Janus-palkinto, Institut Français du Design 2026",
      "Salon SAP Award 2024",
    ],
  },
  finalCta: {
    eyebrow: "Valmis kokeilemaan?",
    title: (
      <>
        14 päivää aikaa<br />
        tehdä oma <em>päätöksesi</em>.
      </>
    ),
    lede: "Voit palauttaa vaatteen 14 päivän sisällä missä tahansa Euroopan unionin maassa, jos sitä ei ole käytetty. Esittely videopuheluna englanniksi, kun tilauksesi on vastaanotettu.",
    ctaOrder: "Tilaa COALA · alkaen 129 €",
    ctaQuote: "Pyydä tarjous",
  },
  crossLinks: [
    { eyebrow: "Vaate tarkemmin", title: "Koko tuotesivu" },
    { eyebrow: "Varustatko hoitotiimiä?", title: "Ammattilaistarjoukset 48 tunnin sisällä" },
    { eyebrow: "Kysyttävää?", title: "Kaikki usein kysytyt kysymykset" },
  ],
};

export default copy;

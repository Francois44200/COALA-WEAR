import type { TeamsCopy } from "../teams";

const copy: TeamsCopy = {
  hero: {
    eyebrow: "Ammattilaisille · Hoiva- ja hoito-organisaatiot",
    title: (
      <>
        Varusta tiimisi<br />siirtoapuvälineellä, joka on<br /><em>suunniteltu<br />todelliseen hoitotyöhön</em>.
      </>
    ),
    lede: "COALA sopii arjen hoitotyöhön: se ehkäisee tuki- ja liikuntaelinsairauksia (TULE-sairauksia), tekee siirroista turvallisempia, vähentää fyysistä kuormitusta ja kannustaa avustettavaa osallistumaan aktiivisesti.",
    ctaQuote: "Pyydä tarjous",
    ctaDemo: "Keskustele tiimimme kanssa",
    ctaHow: "Katso, miten se toimii",
    trust: ["Tarjous 48 tunnin sisällä", "Koulutus saatavilla, kun varusteltuna on vähintään 5 ammattilaista", "Yhteistoimitus toimipisteeseesi"],
  },
  visual: {
    topEyebrow: "TULE-sairauksien ehkäisy",
    topClaim: "Ei enää selän taivuttamista nostaessa",
    topDesc: "potilas osallistuu, sinä ohjaat liikettä",
    botEyebrow: "Varustetut organisaatiot",
    pills: ["Kotihoito", "Hoivakodit", "Kotisairaanhoito", "Kotisairaala"],
  },
  structures: {
    eyebrow: "Kenelle se on tarkoitettu?",
    title: (
      <>
        COALA on tiimeille, jotka tukevat<br />liikuntarajoitteisia ihmisiä <em>joka päivä</em>.
      </>
    ),
    imageAlt: "Hoitoalan ammattilaisten tiimi COALA-siirtovaatteissa",
    labels: [
      "Kotihoitopalvelut ja järjestöt",
      "Kotihoito- ja kotisairaanhoitopalvelut",
      "Hoivakodit ja palveluasumisen yksiköt",
      "Sairaalat ja klinikat",
      "Kuntoutuskeskukset",
      "Vammaisten henkilöiden asumis- ja tukipalvelut",
      "Kotisairaalapalvelut",
      "Itsenäiset hoitoalan ammattilaiset ja ammatinharjoittajat",
    ],
  },
  benefits: {
    eyebrow: "Hyödyt ammattilaisille",
    title: (
      <>
        Miksi tiimisi<br /><em>ottavat sen omakseen</em>.
      </>
    ),
    items: [
      {
        title: "TULE-sairauksien ehkäisy",
        desc: "Vähentää käsiin ja selkään kohdistuvaa dynaamista kuormitusta avustetuissa siirroissa, jotka ovat hoitotyön suurin TULE-riskin lähde.",
      },
      {
        title: "Turvallisempi siirtäminen",
        desc: "Luotettavampi yhteys hoitoalan ammattilaisen ja potilaan välillä sekä turvallisuuden tunnetta lisäävät ulkoiset kahvat.",
      },
      {
        title: "Potilaan osallistuminen",
        desc: "Avustettava voi osallistua omaan liikkumiseensa paljon aiempaa enemmän.",
      },
      {
        title: "Helppo ottaa käyttöön",
        desc: "Kevyt työvaate (+200 g), jonka voi aktivoida tai poistaa käytöstä 5 sekunnissa.",
      },
      {
        title: "Hyödyllinen innovaatio",
        desc: "Käytännöllinen, patentoitu ratkaisu, joka on suunniteltu todelliseen hoitotyöhön – ei mikään kikka.",
      },
      {
        title: "Täydentävä",
        desc: "Toimii nykyisten mekaanisten nostoapuvälineiden rinnalla korvaamatta niitä.",
      },
    ],
  },
  technique: {
    eyebrow: "Käyttö",
    title: (
      <>
        Yksinkertainen tekniikka, jonka voi ottaa<br />osaksi <em>työkäytäntöjä</em>.
      </>
    ),
    steps: [
      "Pidä selkä suorana ja ohjaa potilasta nojaamaan itseäsi kohti.",
      "Koukista lonkkia ja polvia hieman.",
      "Aseta jalat erilleen, jotta asento on vakaampi.",
      "Tue siirtoa painonsiirroilla eteen ja taakse käyntiasennossa.",
    ],
    noteEyebrow: "Yhteistyöhön perustuva lähestymistapa",
    noteBody:
      "COALA-siirtovaate tukee yhteistyöhön perustuvaa siirtotapaa: potilas pitää kiinni kahvoista ja osallistuu aktiivisesti liikkeeseen. Kuormitus jakautuu, ihmisarvo säilyy ja hoitoalan ammattilaisen ja potilaan välinen suhde vahvistuu.",
    noteCta: "Katso kaikki käyttötilanteet",
  },
  deploy: {
    eyebrow: "Käyttöönottoprosessi",
    title: (
      <>
        Näin otamme COALAn<br />käyttöön <em>organisaatiossasi</em>.
      </>
    ),
    steps: [
      { title: "Alkukeskustelu", body: "Ensimmäinen keskustelu, jossa kartoitamme tarpeenne ja arjen hoitoympäristönne." },
      { title: "Tietoa ja kysymyksiä", body: "Kerromme tuotteesta tarkemmin ja vastaamme tiiminne kysymyksiin ennen päätöstä." },
      { title: "Kokojen valinta", body: "Selvitämme tiiminne perusteella, mitä kokoja tarvitsette." },
      { title: "Tarjous tai ryhmätilaus", body: "Kaupallinen ehdotus, joka on räätälöity määränne ja aikataulunne mukaan." },
      { title: "Tuki käytössä", body: "Videoesittely englanniksi, kun tilauksenne on vastaanotettu, sekä alkukoulutus ja käyttöoppaat tiimeillenne." },
      { title: "Palaute kentältä", body: "Seuraamme vaatteen käyttöä ja teemme tarvittaessa muutoksia." },
    ],
  },
  partnerships: {
    eyebrow: "Teollisuuskumppanuudet ja jälleenmyynti",
    title: (
      <>
        Rakennamme kumppanuuksia<br />terveydenhuollon organisaatioiden kanssa.
      </>
    ),
    body: "Connect Link kehittää kumppanuuksia terveydenhuollon ja tekstiiliteollisuuden toimijoiden kanssa: jälleenmyynti, yhteinen tuotekehitys, teollinen yhteistyö ja brändilisensointi.",
    cta: "Keskustele kumppanuudesta",
    imageAlt: "Hoitoalan ammattilainen COALA-siirtovaatteessa",
    captionSub: "Patentoitu ranskalainen innovaatio",
  },
  trust: {
    label: "Hoito-organisaatioiden ja kumppaneiden luottama",
    ariaLabel: "Kumppanit ja käyttäjäorganisaatiot",
  },
  faq: {
    eyebrow: "Ammattilaisten kysymyksiä",
    title: (
      <>
        Mitä kentän<br /><em>hoitotiimit</em> kysyvät meiltä.
      </>
    ),
    cta: "Katso kaikki kysymykset",
    items: [
      {
        q: "Voimmeko sopia esittelystä?",
        a: "Kyllä, videopuheluna englanniksi, kun tilauksenne on vastaanotettu. Esittelemme tuotteen tiimillenne, näytämme, miten sitä käytetään, ja vastaamme kysymyksiin. Ota yhteyttä lomakkeella, niin palaamme asiaan 48 arkituntiin mennessä sopiaksemme ajan.",
      },
      {
        q: "Sopiiko COALA hoivakoteihin?",
        a: "Kyllä. COALA on jo käytössä useissa hoivakodeissa. Se täyttää jäljitettävyys- ja hygieniavaatimukset (pestävissä 40 °C:ssa, hellävarainen kuivaus) ja tukee hoivakotien lääkäritiimien johtamia TULE-sairauksien ehkäisyohjelmia.",
      },
      {
        q: "Sopiiko COALA kotihoitopalveluihin?",
        a: "Ehdottomasti. Se suunniteltiin alun perin juuri kotihoitoon. Kevyenä (+200 g) se mahtuu helposti kotihoitajan laukkuun. Koulutus voidaan järjestää videopuheluna tai tiimipalaverin yhteydessä.",
      },
      {
        q: "Voitteko kouluttaa tiimin?",
        a: "Kyllä. Koulutus kannattaa, kun varusteltuna on vähintään 5 ammattilaista. Sen pitää COALA-verkoston ergonomi tai toimintaterapeutti, ja koulutusmateriaalit jaetaan tiimille.",
      },
      {
        q: "Tarjoatteko hinnoittelua ryhmätilauksille?",
        a: "Kyllä, määräalennuksia on saatavilla 10 kappaleesta alkaen. Vähintään 50 vaatetta tilaavat organisaatiot saavat yhteistoimituksen toimipisteeseensä, oman yhteyshenkilön ja pitkäaikaista tukea. Pyydä räätälöity tarjous.",
      },
      {
        q: "Voimmeko ryhtyä jälleenmyyjäksi?",
        a: "Connect Link valitsee jälleenmyyntikumppaneita terveydenhuollon, hoitotarvikkeiden ja tekstiiliteollisuuden aloilta. Ota yhteyttä kumppanuuslomakkeella, esittele organisaatiosi ja keskustellaan ehdoista.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Valmis varustamaan tiimisi?",
    title: (
      <>
        Tarjous 48 tunnin sisällä,<br />videoesittely<br /><em>kun tilaat</em>.
      </>
    ),
    sub: "Räätälöity tuki · Koulutus sisältyy · Seuranta kentällä",
    ctaQuote: "Pyydä tarjous",
    ctaDemo: "Keskustele tiimimme kanssa",
  },
  crossLinks: [
    { eyebrow: "Tuote tarkemmin", title: "Koko tuotesivu" },
    { eyebrow: "Kysyttävää?", title: "Kaikki usein kysytyt kysymykset" },
    { eyebrow: "Palaute kentältä", title: "Lue kokemukset" },
  ],
};

export default copy;

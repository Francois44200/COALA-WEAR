import type { FamilyCopy } from "../family";

const copy: FamilyCopy = {
  hero: {
    eyebrow: "Omaishoitajan polku · Suunniteltu omaishoitajille",
    title: (
      <>
        Hoidan läheistäni.<br /><em>COALA auttaa minua.</em>
      </>
    ),
    lede: "Autat läheistäsi siirtymään paikasta toiseen joka päivä. COALA tukee jokaista siirtoa: se keventää selkääsi kohdistuvaa kuormitusta, tekee liikkeestä turvallisemman ja säilyttää läheisesi arvokkuuden.",
    ctaOrder: "Tilaa COALA",
    ctaAdvice: "Keskustele kanssamme ennen ostoa",
    ctaHow: "Katso, miten se toimii",
    trust: ["Palautus 14 päivän sisällä", "Oikeat ihmiset asiakaspalvelussa", "Opetusvideot mukana"],
    imageAlt: "Omaishoitaja käyttää COALA-siirtovaatetta siirron aikana",
    cardTop: {
      eyebrow: "Suojaa selkääsi",
      claim: "Ei enää selän taivuttamista nostaessa",
      desc: "et enää kanna läheistäsi, vaan tuet häntä",
    },
    cardBottom: { eyebrow: "Joka päivä", pills: ["Sänky", "Tuoli", "Kylpyhuone"] },
  },
  benefits: {
    eyebrow: "Miksi COALA?",
    title: (
      <>
        Ratkaisu, joka on suunniteltu<br /><em>omaishoitajille</em>.
      </>
    ),
    items: [
      { title: "Tekee liikkeestä turvallisemman", desc: "Vahvistetut otteet, tasaisesti jakautuneet tukipisteet, liukumaton." },
      { title: "Kunnioittaa ihmistä", desc: "Pehmeä kangas, arvokas käyttää, ja läheiselläsi pysyvät vaatteet päällä koko siirron ajan." },
      { title: "Suojaa selkääsi", desc: "Ei enää selän taivuttamista nostaessa, ei enää hartioiden ja käsivarsien rasitusta." },
      { title: "Tukee omatoimisuutta", desc: "Läheisesi voi osallistua liikkeeseen aktiivisesti." },
    ],
  },
  steps: {
    eyebrow: "Miten se toimii?",
    title: (
      <>
        Kolme yksinkertaista vaihetta<br /><em>turvalliseen</em> siirtoon.
      </>
    ),
    items: [
      { title: "Pue", desc: "Puet COALAn yllesi kuten tavallisen työvaatteen. Se on päällä muutamassa sekunnissa." },
      { title: "Tartu otealueisiin", desc: "Läheisesi pitää kiinni vahvistetuista kahvoista (hartiat, vyötärö, lantio). Sinä pysyt matalana selkä suorana." },
      { title: "Siirrä", desc: "Ohjaa liikettä väkisin vääntämättä. Sänky, tuoli, kylpyhuoneesta poistuminen: liike on sujuva." },
    ],
    noteEyebrow: "Mitä COALA muuttaa",
    changes: [
      ["Selkä", "Ei enää selän taivuttamista nostaessa."],
      ["Käsivarret", "Ei enää hartioiden ja käsivarsien rasitusta."],
      ["Yhdessä", "Läheisesi osallistuu: et enää kanna häntä, vaan tuet häntä."],
    ],
    guideLink: "Katso 7-vaiheinen käyttöopas",
  },
  product: {
    eyebrow: "Tuote",
    title: (
      <>
        Yksinkertainen vaate,<br /><em>kestävä</em> ja pestävä.
      </>
    ),
    specsTitle: "Tekniset tiedot",
    specs: [
      "Teknistä polyesteriä, 215 g/m²",
      "4 vahvistettua otealuetta",
      "Koot XS–4XL",
      "Pestävä 40 °C:ssa · hellävarainen kuivaus",
      "Patentoitu ranskalainen innovaatio",
    ],
    commitmentsTitle: "Sitoumuksemme",
    commitments: [
      "Käyttämättömien tuotteiden palautus 14 päivän sisällä",
      "Oikeat ihmiset asiakaspalvelussa",
      "Opetusvideot mukana",
    ],
  },
  faq: {
    eyebrow: "Omaishoitajien kysymyksiä",
    title: (
      <>
        Mitä <em>perheet</em><br />kysyvät meiltä.
      </>
    ),
    cta: "Katso kaikki kysymykset",
    items: [
      {
        q: "Sopiiko COALA läheiselleni?",
        a: "COALA sopii useimmille henkilöille, jotka tarvitsevat apua siirroissa ja pystyvät osallistumaan liikkeeseen ainakin osittain pitämällä otteista kiinni molemmin käsin. Vaatetta käytät sinä, hoitaja, ja sitä on saatavana koissa XS–4XL. Erityistilanteissa (pitkälle edenneet painehaavat, äskettäinen leikkaus) kysy neuvoa hoitotiimiltä.",
      },
      {
        q: "Kuinka kauan vaate kestää?",
        a: "Kotikäytössä (1–2 siirtoa päivässä): 4–6 vuotta. Ammattikäytössä (10–15 siirtoa päivässä): 18–24 kuukautta. Kangas on konepestävä 40 °C:ssa ja sen voi kuivata kuivausrummussa hellävaraisella ohjelmalla.",
      },
      {
        q: "Voinko kokeilla ennen ostoa?",
        a: "Emme tarjoa maksuttomia lainoja. Tuotteen voi palauttaa 14 päivän sisällä, jos sitä ei ole käytetty ja se on edelleen uudenveroinen. Kunto tarkistetaan vastaanotettaessa.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Valmis aloittamaan COALAn kanssa?",
    title: (
      <>
        Tue läheistäsi,<br /><em>suojaa selkääsi</em>.
      </>
    ),
    sub: "Palautukset hyväksytään 14 päivän sisällä, jos tuotetta ei ole käytetty · Tarvitsetko neuvoa? contact@connectlink.fr",
    ctaOrder: "Tilaa COALA",
    ctaWrite: "Kirjoita meille",
  },
  crossLinks: [
    { eyebrow: "Tuote", title: "COALAn tekniset tiedot" },
    { eyebrow: "Opas", title: "7-vaiheinen käyttöopas" },
    { eyebrow: "Kysymykset", title: "Kaikki usein kysytyt kysymykset" },
  ],
};

export default copy;

import type { FaqCategory } from "@/data/faq";

const data: FaqCategory[] = [
  {
    id: "produit",
    label: "Tuote",
    desc: "Materiaalit, kestävyys, standardit",
    items: [
      {
        q: "Mistä COALA-vaate on valmistettu?",
        a: "Teknisestä polyesteristä (215 g/m²), ja rasituskohdissa on vahvistettu vuori. Kaikissa neljässä otealueessa on kolminkertaiset tikkaukset. Säätönauhat on valmistettu teknisestä nauhasta.",
      },
      {
        q: "Kuinka kauan vaate kestää?",
        a: "Kotikäytössä: 4–6 vuotta. Intensiivisessä ammattikäytössä: 18–24 kuukautta. Kangas on konepestävä 40 °C:ssa ja voidaan kuivata rumpukuivaimessa hellävaraisella ohjelmalla.",
      },
      {
        q: "Onko COALA lääkinnällinen laite?",
        a: "Ei. COALA ei ole lääkinnällinen laite EU:n lääkinnällisiä laitteita koskevan asetuksen (EU) 2017/745 tarkoittamassa merkityksessä. Se on tekninen työvaate ja patentoitu ranskalainen innovaatio.",
      },
    ],
  },
  {
    id: "usage",
    label: "Käyttö ja tekniikka",
    desc: "Kenelle, miten ja kuinka usein",
    items: [
      {
        q: "Sopiiko COALA läheiselleni?",
        a: "COALA sopii useimmille henkilöille, jotka tarvitsevat apua siirroissa ja pystyvät osallistumaan liikkeeseen ainakin osittain pitämällä otteista kiinni molemmin käsin. Itse vaatetta käyttää hoitaja, ja sitä on saatavana kokoina XS–4XL käyttäjän mukaan valittuna. Erityistilanteissa (pitkälle edenneet painehaavat, äskettäinen leikkaus) kysy neuvoa hoitotiimiltä.",
      },
      {
        q: "Tarvitaanko käyttöön koulutusta?",
        a: "Jokaisen vaatteen mukana tulee käyttöohje, ja verkossa olevat opetusvideot näyttävät, miten sitä käytetään oikein.\n\nTiimitilauksiin Connect Link tarjoaa lisäksi erillisen koulutuksen ammattilaisille ja heidän esihenkilöilleen videopuheluna englanniksi, kun tilaus on vastaanotettu.",
      },
      {
        q: "Montako siirtoa päivässä voi tehdä?",
        a: "Vaatteella itsellään ei ole rajaa. Ihmisen näkökulmasta: 90 päivän ajan seuratuilla 18 hoitajalla keskiarvo oli 8 siirtoa päivässä COALAn kanssa, eikä alaselkäkipua raportoitu.",
      },
      {
        q: "Voiko sitä käyttää pyörätuolin kanssa?",
        a: "Kyllä. COALA toimii yhtä hyvin sängystä tuoliin, tuolista WC-istuimelle ja tuolista autoon tehtävissä siirroissa. Katso ”Näin se toimii” -sivulta 6 yleisintä tilannetta.",
      },
      {
        q: "Tarvitaanko käyttöön kaksi henkilöä?",
        a: "Useimpiin siirtoihin riittää yksi hoitaja. Painavampien henkilöiden (yli 100 kg) kohdalla tai lattialta tuoliin tehtävissä siirroissa suositellaan kahta hoitajaa.",
      },
    ],
  },
  {
    id: "achat",
    label: "Tilaus ja toimitus",
    desc: "Tilaukset, toimitusajat, palautukset",
    items: [
      {
        q: "Miten tilaan?",
        a: "Verkkokaupastamme shop.connectlink.fr (kortti, Apple Pay tai tilisiirto). Ammattilaistilauksissa voit myös ottaa yhteyttä tiimiimme suoraan osoitteeseen contact@connectlink.fr.",
      },
      {
        q: "Kuinka kauan toimitus kestää?",
        a: "Toimitusajat ja toimituskulut riippuvat maastasi, ja ne näytetään kassalla. Voit seurata pakettiasi sähköpostitse.",
      },
      {
        q: "Voinko palauttaa vaatteen?",
        a: "Kyllä, 14 päivän sisällä mistä tahansa Euroopan unionin maasta, kunhan tuotetta ei ole käytetty ja se on uudenveroinen. Jokainen palautus tarkastetaan ennen vaihtoa tai hyvitystä. Hygieniasyistä vaate toimitetaan sinulle sinetöitynä.",
      },
      {
        q: "Voinko kokeilla ennen ostamista?",
        a: "Emme tarjoa maksuttomia lainoja, emme myöskään ammattilaisille. Tuotteen voi kuitenkin palauttaa 14 päivän sisällä, jos sitä ei ole käytetty ja se on edelleen uudenveroinen.",
      },
    ],
  },
  {
    id: "pros",
    label: "Ammattilaiset ja organisaatiot",
    desc: "Hoivakodit, sairaalat, kotihoidon palvelut",
    items: [
      {
        q: "Kuinka nopeasti saan ammattilaistarjouksen?",
        a: "2 arkipäivän kuluessa. Ammattilaistiimimme jäsen soittaa sinulle tutustuakseen toimintaympäristöösi ja lähettää sitten räätälöidyn tarjouksen.",
      },
      {
        q: "Sisältyykö koulutus todella hintaan?",
        a: "Koulutus kannattaa, kun varustettuja ammattilaisia on vähintään 5. Sen pitää COALA-verkoston ergonomi tai toimintaterapeutti videopuheluna englanniksi, kun tilaus on vastaanotettu, ja koulutusmateriaalit lähetetään sinulle.",
      },
      {
        q: "Tarjoatteko ehtoja usean toimipisteen organisaatioille?",
        a: "Kyllä. Määräalennukset, yhdistetyt toimitukset ja oma yhteyshenkilö konserneille, hoiva-alan organisaatioille ja liitoille, jotka tilaavat vähintään 100 vaatetta.",
      },
      {
        q: "Voiko vaatteen räätälöidä (logo, osaston nimi)?",
        a: "Kyllä, silkkipaino tai brodeeraus on mahdollinen 25 kappaleesta alkaen. Valmistusaika: 10 arkipäivää lisää.",
      },
    ],
  },
  {
    id: "lavage",
    label: "Pesu ja hoito",
    desc: "Miten se pestään, kuivataan ja säilytetään",
    items: [
      {
        q: "Missä lämpötilassa COALA pestään?",
        a: "Konepesu 40 °C:ssa normaalilla ohjelmalla ja tavallisella pesuaineella. Ei huuhteluainetta (se heikentää saumoja). Ei klooripohjaista valkaisuainetta.",
      },
      {
        q: "Voiko sen kuivata rumpukuivaimessa?",
        a: "Kyllä, mutta vain hellävaraisella ohjelmalla. Mieluiten kuivaa se tasaisella alustalla tai henkarissa, jotta se säilyttää muotonsa.",
      },
      {
        q: "Entä silittäminen?",
        a: "Ei tarpeen. Jos haluat silittää, käytä keskilämpöistä silitysrautaa äläkä koskaan silitä vahvistettuja otealueita.",
      },
      {
        q: "Miten COALA säilytetään?",
        a: "Tasaisesti taiteltuna kuivassa paikassa. Henkilökohtainen kantolaukku (sisältyy ammattilaistilauksiin) pitää vaatteen hyvässä kunnossa myös työlaukussa.",
      },
    ],
  },
];

export default data;

import type { AboutCopy } from "../about";

const copy: AboutCopy = {
  eyebrow: "Yritys",
  title: (
    <>
      Tietoa<br />
      <em>Connect Linkistä</em>.
    </>
  ),
  lede: (
    <>
      Connect Link suunnittelee <strong>COALA</strong>-siirtovaatteen, patentoidun ranskalaisen innovaation, jota
      käyttävät omaishoitajat ja hoitoalan ammattilaiset. Tehtävämme on vähentää kaatumisten sekä tuki- ja
      liikuntaelinsairauksien (TULE-sairauksien) riskiä päivittäisissä siirroissa.
    </>
  ),
  commitmentTitle: "Sitoumuksemme",
  commitments: [
    { title: "Patentoitu ranskalainen innovaatio", body: "Connect Linkin suunnittelema ja patentoima" },
    { title: "Laadunvarmistettu", body: "Tarkka laadunvalvonta jokaiselle erälle" },
    { title: "Kaikille", body: "Sopii niin omaishoitajille kuin ammattimaisille hoivaorganisaatioillekin" },
    { title: "Tehokas", body: "Omaishoitajien ja hoitoalan ammattilaisten testaama ja hyväksymä" },
  ],
  ctaContact: "Ota yhteyttä",
  ctaHome: "Takaisin etusivulle →",
};

export default copy;

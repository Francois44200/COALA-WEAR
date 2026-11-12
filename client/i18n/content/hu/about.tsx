import type { AboutCopy } from "../about";

const copy: AboutCopy = {
  eyebrow: "A vállalat",
  title: (
    <>
      Bemutatkozik a<br />
      <em>Connect Link</em>.
    </>
  ),
  lede: (
    <>
      A Connect Link fejleszti a <strong>COALA</strong>-t, ezt a szabadalmaztatott francia innovációt: egy
      transzferruhát, amelyet gondozó hozzátartozók és ápolási szakemberek viselnek. Küldetésünk, hogy csökkentsük az
      elesések és a mozgásszervi megbetegedések (MSD) kockázatát a mindennapi áthelyezések során.
    </>
  ),
  commitmentTitle: "Vállalásunk",
  commitments: [
    { title: "Szabadalmaztatott francia innováció", body: "A Connect Link tervezte és szabadalmaztatta" },
    { title: "Ellenőrzött minőség", body: "Szigorú minőség-ellenőrzés minden gyártási tételnél" },
    { title: "Mindenkinek", body: "Gondozó hozzátartozóknak és professzionális ápolási intézményeknek egyaránt" },
    { title: "Hatékony", body: "Gondozók és ápolási szakemberek tesztelték és hagyták jóvá" },
  ],
  ctaContact: "Kapcsolatfelvétel",
  ctaHome: "Vissza a főoldalra →",
};

export default copy;

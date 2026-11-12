import type { AboutCopy } from "../about";

const copy: AboutCopy = {
  eyebrow: "Compania",
  title: (
    <>
      Despre<br />
      <em>Connect Link</em>.
    </>
  ),
  lede: (
    <>
      Connect Link concepe <strong>COALA</strong>, o inovație franceză brevetată: o îmbrăcăminte de transfer purtată de
      îngrijitorii din familie și de profesioniștii în îngrijire. Misiunea noastră este să reducem riscul de cădere și de
      tulburări musculo-scheletice (TMS) în timpul transferurilor de zi cu zi.
    </>
  ),
  commitmentTitle: "Angajamentul nostru",
  commitments: [
    { title: "Inovație franceză brevetată", body: "Concepută și brevetată de Connect Link" },
    { title: "Calitate verificată", body: "Control strict al calității pentru fiecare lot" },
    { title: "Pentru toți", body: "Potrivită atât pentru îngrijitorii din familie, cât și pentru organizațiile profesionale de îngrijire" },
    { title: "Eficientă", body: "Testată și apreciată de îngrijitori și de profesioniștii în îngrijire" },
  ],
  ctaContact: "Contactați-ne",
  ctaHome: "Înapoi la pagina principală →",
};

export default copy;

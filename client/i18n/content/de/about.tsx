import type { AboutCopy } from "../about";

const copy: AboutCopy = {
  eyebrow: "Das Unternehmen",
  title: (
    <>
      Über<br />
      <em>Connect Link</em>.
    </>
  ),
  lede: (
    <>
      Connect Link entwickelt <strong>COALA</strong>, eine patentierte französische Innovation: eine Transferkleidung, die
      von pflegenden Angehörigen und Pflegekräften getragen wird. Unser Ziel ist es, das Risiko von Stürzen und
      Muskel-Skelett-Erkrankungen (MSE) bei alltäglichen Transfers zu verringern.
    </>
  ),
  commitmentTitle: "Unser Versprechen",
  commitments: [
    { title: "Patentierte französische Innovation", body: "Entwickelt und patentiert von Connect Link" },
    { title: "Geprüfte Qualität", body: "Strenge Qualitätskontrolle bei jeder Charge" },
    { title: "Für alle", body: "Geeignet für pflegende Angehörige ebenso wie für professionelle Pflegeeinrichtungen" },
    { title: "Wirksam", body: "Getestet und bewährt bei pflegenden Angehörigen und Pflegekräften" },
  ],
  ctaContact: "Kontakt aufnehmen",
  ctaHome: "Zurück zur Startseite →",
};

export default copy;

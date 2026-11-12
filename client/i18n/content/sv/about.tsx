import type { AboutCopy } from "../about";

const copy: AboutCopy = {
  eyebrow: "Företaget",
  title: (
    <>
      Om<br />
      <em>Connect Link</em>.
    </>
  ),
  lede: (
    <>
      Connect Link utvecklar <strong>COALA</strong>, en patenterad fransk innovation: ett förflyttningsplagg som bärs av
      anhörigvårdare och vårdpersonal. Vårt uppdrag är att minska risken för fall och belastningsskador vid vardagens
      förflyttningar.
    </>
  ),
  commitmentTitle: "Vårt åtagande",
  commitments: [
    { title: "Patenterad fransk innovation", body: "Utvecklat och patenterat av Connect Link" },
    { title: "Kvalitetskontrollerat", body: "Noggrann kvalitetskontroll av varje tillverkningsparti" },
    { title: "För alla", body: "Passar både anhörigvårdare och professionella vård- och omsorgsverksamheter" },
    { title: "Effektivt", body: "Testat och godkänt av anhörigvårdare och vårdpersonal" },
  ],
  ctaContact: "Kontakta oss",
  ctaHome: "Tillbaka till startsidan →",
};

export default copy;

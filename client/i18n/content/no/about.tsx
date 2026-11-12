import type { AboutCopy } from "../about";

const copy: AboutCopy = {
  eyebrow: "Selskapet",
  title: (
    <>
      Om<br />
      <em>Connect Link</em>.
    </>
  ),
  lede: (
    <>
      Connect Link utvikler <strong>COALA</strong>, en patentert fransk innovasjon: et forflytningsplagg som brukes av
      pårørende og helsepersonell. Vårt mål er å redusere risikoen for fall og muskel- og skjelettplager ved daglige forflytninger.
    </>
  ),
  commitmentTitle: "Vårt løfte",
  commitments: [
    { title: "Patentert fransk innovasjon", body: "Utviklet og patentert av Connect Link" },
    { title: "Kvalitetskontrollert", body: "Streng kvalitetskontroll av hvert parti" },
    { title: "For alle", body: "Egnet både for pårørende og for profesjonelle helse- og omsorgstjenester" },
    { title: "Effektivt", body: "Testet og godkjent av pårørende og helsepersonell" },
  ],
  ctaContact: "Kontakt oss",
  ctaHome: "Tilbake til forsiden →",
};

export default copy;

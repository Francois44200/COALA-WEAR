import type { AboutCopy } from "../about";

const copy: AboutCopy = {
  eyebrow: "Het bedrijf",
  title: (
    <>
      Over<br />
      <em>Connect Link</em>.
    </>
  ),
  lede: (
    <>
      Connect Link ontwerpt <strong>COALA</strong>, een gepatenteerde Franse innovatie: transferkleding die wordt
      gedragen door mantelzorgers en zorgprofessionals. Onze missie is het risico op vallen en op aandoeningen aan het
      bewegingsapparaat bij dagelijkse transfers te verminderen.
    </>
  ),
  commitmentTitle: "Onze belofte",
  commitments: [
    { title: "Gepatenteerde Franse innovatie", body: "Ontworpen en gepatenteerd door Connect Link" },
    { title: "Gecontroleerde kwaliteit", body: "Strenge kwaliteitscontrole op elke productiepartij" },
    { title: "Voor iedereen", body: "Geschikt voor zowel mantelzorgers als professionele zorgorganisaties" },
    { title: "Doeltreffend", body: "Getest en goedgekeurd door mantelzorgers en zorgprofessionals" },
  ],
  ctaContact: "Neem contact met ons op",
  ctaHome: "Terug naar home →",
};

export default copy;

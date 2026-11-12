import type { AboutCopy } from "../about";

const copy: AboutCopy = {
  eyebrow: "Virksomheden",
  title: (
    <>
      Om<br />
      <em>Connect Link</em>.
    </>
  ),
  lede: (
    <>
      Connect Link udvikler <strong>COALA</strong>, en patenteret fransk innovation: forflytningstøj, der bæres af
      pårørende og plejepersonale. Vores mission er at mindske risikoen for fald og muskel- og skeletbesvær (MSB) ved de
      daglige forflytninger.
    </>
  ),
  commitmentTitle: "Vores løfte",
  commitments: [
    { title: "Patenteret fransk innovation", body: "Udviklet og patenteret af Connect Link" },
    { title: "Kvalitetskontrolleret", body: "Streng kvalitetskontrol af hver eneste produktion" },
    { title: "Til alle", body: "Velegnet til både pårørende og professionelle plejeorganisationer" },
    { title: "Effektivt", body: "Testet og godkendt af pårørende og plejepersonale" },
  ],
  ctaContact: "Kontakt os",
  ctaHome: "Tilbage til forsiden →",
};

export default copy;

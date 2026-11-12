import type { AboutCopy } from "../about";

const copy: AboutCopy = {
  eyebrow: "L’azienda",
  title: (
    <>
      Chi è<br />
      <em>Connect Link</em>.
    </>
  ),
  lede: (
    <>
      Connect Link progetta <strong>COALA</strong>, un’innovazione francese brevettata: un indumento di trasferimento
      indossato da caregiver familiari e professionisti dell’assistenza. La nostra missione è ridurre il rischio di
      cadute e di disturbi muscolo-scheletrici (DMS) durante i trasferimenti quotidiani.
    </>
  ),
  commitmentTitle: "Il nostro impegno",
  commitments: [
    { title: "Innovazione francese brevettata", body: "Progettato e brevettato da Connect Link" },
    { title: "Qualità controllata", body: "Rigoroso controllo qualità su ogni lotto" },
    { title: "Per tutti", body: "Adatto sia ai caregiver familiari sia alle strutture di assistenza professionali" },
    { title: "Efficace", body: "Testato e approvato da caregiver e professionisti dell’assistenza" },
  ],
  ctaContact: "Contattaci",
  ctaHome: "Torna alla home →",
};

export default copy;

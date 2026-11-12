import type { AboutCopy } from "../about";

const copy: AboutCopy = {
  eyebrow: "A empresa",
  title: (
    <>
      Sobre a<br />
      <em>Connect Link</em>.
    </>
  ),
  lede: (
    <>
      A Connect Link concebe o <strong>COALA</strong>, uma inovação francesa patenteada: uma peça de vestuário de
      transferência usada por cuidadores familiares e profissionais de cuidados. A nossa missão é reduzir o risco de
      quedas e de lesões músculo-esqueléticas (LME) nas transferências do dia a dia.
    </>
  ),
  commitmentTitle: "O nosso compromisso",
  commitments: [
    { title: "Inovação francesa patenteada", body: "Concebida e patenteada pela Connect Link" },
    { title: "Qualidade controlada", body: "Controlo de qualidade rigoroso em cada lote" },
    { title: "Para todos", body: "Adequado tanto para cuidadores familiares como para organizações profissionais de cuidados" },
    { title: "Eficaz", body: "Testado e aprovado por cuidadores e profissionais de cuidados" },
  ],
  ctaContact: "Contacte-nos",
  ctaHome: "Voltar ao início →",
};

export default copy;

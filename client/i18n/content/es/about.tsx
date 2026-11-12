import type { AboutCopy } from "../about";

const copy: AboutCopy = {
  eyebrow: "La empresa",
  title: (
    <>
      Sobre<br />
      <em>Connect Link</em>.
    </>
  ),
  lede: (
    <>
      Connect Link diseña <strong>COALA</strong>, una innovación francesa patentada: una prenda de transferencia que llevan
      los cuidadores familiares y los profesionales sociosanitarios. Nuestra misión es reducir el riesgo de caídas y de
      trastornos musculoesqueléticos (TME) en las transferencias del día a día.
    </>
  ),
  commitmentTitle: "Nuestro compromiso",
  commitments: [
    { title: "Innovación francesa patentada", body: "Diseñada y patentada por Connect Link" },
    { title: "Calidad controlada", body: "Control de calidad riguroso en cada lote" },
    { title: "Para todos", body: "Pensada tanto para cuidadores familiares como para organizaciones profesionales de cuidados" },
    { title: "Eficaz", body: "Probada y aprobada por cuidadores familiares y profesionales sociosanitarios" },
  ],
  ctaContact: "Contáctanos",
  ctaHome: "Volver al inicio →",
};

export default copy;

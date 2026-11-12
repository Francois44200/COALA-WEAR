import type { FamilyCopy } from "../family";

const copy: FamilyCopy = {
  hero: {
    eyebrow: "Recorrido del cuidador · Pensado para cuidadores familiares",
    title: (
      <>
        Cuido a un ser querido.<br /><em>COALA me ayuda.</em>
      </>
    ),
    lede: "Cada día ayudas a tu ser querido a desplazarse de un lugar a otro. COALA acompaña cada transferencia para aliviar el esfuerzo de tu espalda, hacer el movimiento más seguro y preservar su dignidad.",
    ctaOrder: "Pedir COALA",
    ctaAdvice: "Habla con nosotros antes de comprar",
    ctaHow: "Ver cómo funciona",
    trust: ["Devoluciones en 14 días", "Atención al cliente por personas reales", "Tutoriales en vídeo incluidos"],
    imageAlt: "Cuidador familiar con la prenda de transferencia COALA durante una transferencia",
    cardTop: {
      eyebrow: "Protege tu espalda",
      claim: "Se acabó doblar la espalda para levantar",
      desc: "ya no lo cargas, lo acompañas",
    },
    cardBottom: { eyebrow: "Cada día", pills: ["Cama", "Silla", "Baño"] },
  },
  benefits: {
    eyebrow: "¿Por qué COALA?",
    title: (
      <>
        Una solución pensada<br />para <em>cuidadores familiares</em>.
      </>
    ),
    items: [
      { title: "Hace el movimiento más seguro", desc: "Agarres reforzados, puntos de apoyo bien repartidos, antideslizante." },
      { title: "Respeta a la persona", desc: "Tejido suave, uso digno y tu ser querido permanece vestido durante toda la transferencia." },
      { title: "Protege tu espalda", desc: "Se acabó doblar la espalda para levantar y forzar los hombros y los brazos." },
      { title: "Favorece la autonomía", desc: "Tu ser querido puede participar activamente en el movimiento." },
    ],
  },
  steps: {
    eyebrow: "¿Cómo funciona?",
    title: (
      <>
        Tres pasos sencillos<br />para una transferencia <em>segura</em>.
      </>
    ),
    items: [
      { title: "Ponértela", desc: "Llevas COALA como una prenda de trabajo normal. Te la pones en cuestión de segundos." },
      { title: "Sujetar las zonas de agarre", desc: "Tu ser querido se sujeta a las asas reforzadas (hombros, cintura, caderas). Tú te mantienes bajo, con la espalda recta." },
      { title: "Transferir", desc: "Guía el movimiento sin forzar. Cama, silla, salida del baño: el movimiento es fluido." },
    ],
    noteEyebrow: "Lo que cambia COALA",
    changes: [
      ["Espalda", "Se acabó doblar la espalda para levantar."],
      ["Brazos", "Se acabó forzar los hombros y los brazos."],
      ["Juntos", "Tu ser querido participa: ya no lo cargas, lo acompañas."],
    ],
    guideLink: "Ver la guía de uso en 7 pasos",
  },
  product: {
    eyebrow: "El producto",
    title: (
      <>
        Una prenda sencilla,<br /><em>resistente</em> y lavable.
      </>
    ),
    specsTitle: "Características",
    specs: [
      "Poliéster técnico, 215 g/m²",
      "4 zonas de agarre reforzadas",
      "Tallas de la XS a la 4XL",
      "Lavable a 40 °C · secado suave",
      "Innovación francesa patentada",
    ],
    commitmentsTitle: "Nuestros compromisos",
    commitments: [
      "Devoluciones en 14 días de productos sin usar",
      "Atención al cliente por personas reales",
      "Tutoriales en vídeo incluidos",
    ],
  },
  faq: {
    eyebrow: "Preguntas de los cuidadores",
    title: (
      <>
        Lo que nos preguntan<br />las <em>familias</em>.
      </>
    ),
    cta: "Ver todas las preguntas",
    items: [
      {
        q: "¿Es COALA adecuada para mi ser querido?",
        a: "COALA es adecuada para la mayoría de las personas que necesitan ayuda en las transferencias y pueden participar, al menos en parte, en el movimiento, sujetándose a los agarres con ambas manos. La prenda la llevas tú, el cuidador, y está disponible en tallas de la XS a la 4XL. Ante situaciones concretas (úlceras por presión avanzadas, cirugía reciente), pide consejo al equipo sanitario.",
      },
      {
        q: "¿Cuánto dura la prenda?",
        a: "Con un uso doméstico (de 1 a 2 transferencias al día): de 4 a 6 años. Con un uso profesional (de 10 a 15 transferencias al día): de 18 a 24 meses. El tejido se puede lavar a máquina a 40 °C y secar en secadora con un programa suave.",
      },
      {
        q: "¿Puedo probarla antes de comprarla?",
        a: "No ofrecemos préstamos gratuitos. El producto se puede devolver en un plazo de 14 días si no se ha usado y sigue como nuevo, previa comprobación a su recepción.",
      },
    ],
  },
  finalCta: {
    eyebrow: "¿Listo para empezar con COALA?",
    title: (
      <>
        Acompaña a tu ser querido,<br /><em>protege tu espalda</em>.
      </>
    ),
    sub: "Devoluciones aceptadas en 14 días si el producto no se ha usado · ¿Necesitas consejo? contact@connectlink.fr",
    ctaOrder: "Pedir COALA",
    ctaWrite: "Escríbenos",
  },
  crossLinks: [
    { eyebrow: "El producto", title: "Características técnicas de COALA" },
    { eyebrow: "Guía", title: "Guía de uso en 7 pasos" },
    { eyebrow: "Preguntas", title: "Todas las preguntas frecuentes" },
  ],
};

export default copy;

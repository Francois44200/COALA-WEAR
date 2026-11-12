import type { HowItWorksCopy } from "../howItWorks";

const copy: HowItWorksCopy = {
  breadcrumb: {
    ariaLabel: "Ruta de navegación",
    home: "Inicio",
    current: "Cómo funciona",
  },
  hero: {
    eyebrow: "Guía de uso",
    title: (
      <>
        Póntela, ayuda,<br /><em>quítatela</em>.
      </>
    ),
    lede:
      "COALA se activa en unos segundos y se desactiva con la misma rapidez. Entre medias, la persona a la que ayudas participa: ya no la levantas, la acompañas. Esta guía se basa en el material de formación que se utiliza al implantar COALA en los equipos de cuidados.",
    ctaOrder: "Pedir COALA",
    ctaProduct: "Ver la página del producto",
  },
  video: {
    eyebrow: "Demostración en vídeo",
    title: (
      <>
        La técnica COALA<br />en <em>situaciones reales</em>.
      </>
    ),
    iframeTitle: "Demostración de la prenda de transferencia COALA (en francés)",
    note: "Vídeo en francés",
  },
  steps: {
    eyebrow: "Instrucciones",
    title: (
      <>
        Activa y después libera<br />la <em>sujeción</em>.
      </>
    ),
    lede:
      "Cinco pasos para prepararte antes de ayudar a alguien a moverse. Cinco pasos para volver a tener una prenda normal una vez terminada la transferencia.",
    phase1Label: "Fase 1: Ponérsela",
    phase1: [
      { n: "01", title: "Ponte la prenda", body: "COALA se pone como una prenda de trabajo normal: el cinturón lumbar está abierto y sujeto a la prenda con sus tiras de velcro, y las hombreras están sueltas." },
      { n: "02", title: "Desabrocha los dos botones inferiores", body: "Los dos botones de abajo dan acceso al cinturón lumbar y a los tensores de las hombreras." },
      { n: "03", title: "Ajusta el cinturón lumbar", body: "Aprieta el cinturón y abróchalo con la tensión que quieras." },
      { n: "04", title: "Tensa las hombreras", body: "Tira de la correa inferior de los tensores de hombro hasta conseguir la tensión que quieras, en posición cerrada." },
      { n: "05", title: "Cierra la prenda", body: "Abrocha los dos últimos botones. La sujeción está activa: ya puedes ayudar." },
    ],
    phase1Alt: "Prenda de transferencia COALA abierta, con el cinturón lumbar y los tensores de las hombreras a la vista",
    phase1Caption: "Cinturón lumbar y tensores de las hombreras, sujeción activa.",
    phase2Label: "Fase 2: Quitársela",
    phase2: [
      { n: "01", title: "Desabrocha los dos botones inferiores", body: "La ayuda física ha terminado: puedes liberar la sujeción." },
      { n: "02", title: "Libera la tensión de los hombros", body: "Levanta los tensores situados bajo los brazos para aflojar las hombreras." },
      { n: "03", title: "Desabrocha el cinturón lumbar", body: "Abre el cinturón para eliminar toda la tensión." },
      { n: "04", title: "Guarda el cinturón", body: "Vuelve a sujetar los dos extremos del cinturón en el interior de los dos delanteros de la prenda." },
      { n: "05", title: "Abrocha los dos botones inferiores", body: "COALA vuelve a ser una prenda normal, imperceptible tanto para ti como para quienes te rodean." },
    ],
    phase2Alt: "Prenda de transferencia COALA con las asas recogidas, de nuevo como una prenda normal",
    phase2Caption: "Sujeción liberada: COALA vuelve a ser una prenda normal.",
    warning:
      "Comprobación al ponértela: asegúrate de que las dos partes del cinturón pasan por las asas, por el interior de la prenda.",
  },
  situations: {
    eyebrow: "Cuándo usarla",
    title: (
      <>
        Cuándo COALA<br />te <em>ayuda</em>.
      </>
    ),
    lede:
      "Identifica las situaciones de ayuda física en las que COALA reduce la carga sobre tus brazos y tu espalda y facilita que la persona a la que ayudas participe.",
    imageAlt: "Profesional sociosanitario con la prenda de transferencia COALA ayudando a una persona mayor a llegar a su andador",
    items: [
      "Transferencia de sentado a de pie",
      "Transferencia de la silla al inodoro",
      "Recolocación en la cama y levantarse",
      "Marcha asistida",
      "Recolocación en la silla",
      "Cambios posturales en la cama",
    ],
    profilesTitle: "¿Para qué pacientes es adecuada?",
    profilesIntro:
      "¿Puede el paciente entender instrucciones que le pidan colaborar? ¿Permite su estado físico utilizar COALA? Valora cada caso de forma individual:",
    profiles: [
      "Capacidad para entender indicaciones de colaboración",
      "Calidad del apoyo en carga",
      "Peso",
      "Movilidad",
      "Equilibrio",
      "Tono muscular de los miembros superiores",
    ],
    profilesNote:
      "Si no tienes claro si COALA es adecuada para la situación de un paciente, consulta a su equipo sanitario.",
  },
  grips: {
    eyebrow: "Indicaciones de uso",
    title: (
      <>
        Qué asas<br /><em>ofrecer</em>.
      </>
    ),
    lede: "Los agarres que ofreces determinan cuánta carga recae sobre tus hombros y tu espalda.",
    imageAlt: "Primer plano de una zona de agarre en el hombro de la prenda de transferencia COALA",
    caption: "Zona de agarre superior, en el hombro.",
    items: [
      { title: "Agarre cruzado", detail: "Ofrece un asa inferior y el asa superior del lado contrario. La mano de arriba puede colocarse en la dirección del movimiento para ayudar a orientar la mirada del paciente." },
      { title: "Las dos asas inferiores", detail: "Ofrecer las dos asas inferiores reduce todavía más la carga sobre tus hombros y tu espalda." },
      { title: "Nunca las dos asas superiores", detail: "No ofrezcas las dos asas superiores a la vez: esto fuerza tus hombros y tu espalda." },
      { title: "No dejes las asas fuera", detail: "Recoge las asas entre usos: podrían engancharse en algo o alguien podría agarrarlas de forma inesperada." },
      { title: "Libera la sujeción cuando no la uses", detail: "Afloja el cinturón y las hombreras cuando no estés prestando ayuda física, por ejemplo al ayudar en las comidas o durante un descanso." },
    ],
  },
  verbal: {
    eyebrow: "Indicaciones verbales",
    title: (
      <>
        Las palabras que<br /><em>implican</em> al paciente.
      </>
    ),
    lede:
      "Guía al paciente con la mayor claridad posible para que os mováis juntos. No dudes en repetir y reformular: cada pareja de cuidador y paciente encuentra sus propias señales.",
    imageAlt: "Profesional sociosanitario guiando a un paciente hacia las zonas de agarre de la prenda de transferencia COALA",
    caption: "El contacto visual se mantiene durante toda la maniobra.",
    evaluationLabel: "Valorar la capacidad de colaborar",
    evaluation: ["«¿Puedes agarrar esta asa?»", "«¿Te sientes con fuerza?»"],
    sequenceLabel: "Secuencia de transferencia",
    sequence: [
      "«Agarra estas asas»",
      "«Cierra bien las manos»",
      "«Sujétate fuerte. ¿Te sientes con fuerza?»",
      "«Echa los pies hacia atrás todo lo que puedas»",
      "«Inclínate hacia delante»",
      "«Tira de las asas hacia ti y empuja con las piernas»",
    ],
  },
  posture: {
    eyebrow: "Postura del cuidador",
    title: (
      <>
        Colócate en posición de <em>fuerza</em>,<br />sin levantar.
      </>
    ),
    lede:
      "COALA fuerza menos las articulaciones de tus brazos y tu espalda, siempre que te coloques correctamente.",
    items: [
      { title: "Espalda recta", detail: "Mantén la espalda recta mientras guías al paciente para que eche los pies hacia atrás y se incline hacia ti." },
      { title: "Caderas y rodillas flexionadas", detail: "Flexiona ligeramente las caderas y las rodillas para acompañar con eficacia el movimiento del paciente." },
      { title: "Pies separados", detail: "Separa los pies para ganar estabilidad." },
      { title: "Desplazamientos hacia delante / hacia atrás", detail: "Coloca un pie entre los pies del paciente y haz movimientos de zancada para acompañar la transferencia." },
    ],
  },
  care: {
    eyebrow: "Cuidado",
    title: (
      <>
        Instrucciones de <em>lavado</em>.
      </>
    ),
    items: [
      "Lavado de algodón a 40 °C.",
      "Abrocha el cinturón cerrado, pasado por las asas, antes de meterla en la lavadora.",
      "Elige un programa de secado delicado o a baja temperatura.",
    ],
    imageAlt: "Prenda de transferencia COALA doblada, lista para lavar",
    caption: "Cinturón abrochado y asas recogidas antes del lavado a máquina.",
  },
  deployment: {
    eyebrow: "Implantarla en tu organización",
    title: (
      <>
        Las cinco claves<br />del <em>éxito</em>.
      </>
    ),
    factors: [
      "Ofrecer COALA a profesionales sociosanitarios voluntarios",
      "Adoptar los gestos de guía adecuados",
      "Orientar a los pacientes hacia las asas inferiores",
      "Liberar la sujeción y recoger las asas",
      "Desaprender el hábito de levantar",
    ],
    staffLabel: "Profesionales sociosanitarios (traducido del francés)",
    staffQuotes: [
      "«Menos cansancio al final del día»",
      "«Más seguro, tengo las manos libres»",
      "«Fácil de usar»",
      "«Te acostumbras enseguida»",
    ],
    patientLabel: "Pacientes (traducido del francés)",
    patientQuotes: [
      "«Estamos cara a cara, mirándonos a los ojos»",
      "«Participación más activa»",
      "«Mejor agarre»",
      "«Sensación de seguridad»",
    ],
  },
  cta: {
    title: "¿Listo para trabajar con COALA?",
    body: "Haz tu pedido directamente o solicita un presupuesto para tu organización.",
    order: "Pedir COALA",
    quote: "Solicitar presupuesto",
    cards: [
      { eyebrow: "La prenda en detalle", title: "Página completa del producto" },
      { eyebrow: "Quién la usa", title: "Testimonios y resultados" },
      { eyebrow: "Preguntas", title: "Todas las preguntas frecuentes" },
    ],
  },
};

export default copy;

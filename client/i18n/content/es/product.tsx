import type { ProductCopy } from "../product";

const copy: ProductCopy = {
  buy: {
    viewLabels: [
      "Prenda de transferencia COALA, vista frontal, cuatro zonas de agarre desplegadas",
      "Prenda de transferencia COALA, vista de tres cuartos, cuatro zonas de agarre desplegadas",
      "Prenda de transferencia COALA con las asas recogidas, vista frontal",
      "Estructura de exoesqueleto interna de la prenda de transferencia COALA",
      "Prenda de transferencia COALA llevada por un profesional sociosanitario, zonas de agarre desplegadas",
      "COALA con las asas recogidas, con el aspecto de una prenda de trabajo normal",
      "Primer plano de una zona de agarre en el hombro",
      "Profesional sociosanitario sosteniendo a un paciente mientras lleva la prenda de transferencia COALA",
    ],
    refPrefix: "COALA · ref. CL-B137-BLANC-",
    thumbsAria: "Vistas del producto",
    eyebrow: "Prenda de transferencia",
    title: (
      <>
        La prenda de transferencia <em>COALA</em>
      </>
    ),
    lede:
      "Una prenda textil diseñada para las transferencias. Cuatro zonas de agarre reforzadas y una estructura de exoesqueleto que protege al cuidador. COALA no se ve ni se nota, pero te protege siempre que lo necesitas.",
    price: "desde 129 €",
    priceMeta: "IVA incluido",
    sizeLabel: "Talla",
    sizeGuide: "Guía de tallas ↗",
    sizeAria: "Elige una talla",
    colourLabel: "Color · Blanco",
    colourNote: "De momento, COALA solo está disponible en blanco.",
    ctaOrder: "Pedir COALA",
    ctaQuote: "Solicitar presupuesto",
    reassuranceAria: "Nuestros compromisos",
    reassurance: [
      "Devoluciones gratuitas en 14 días en toda la UE",
      "Innovación francesa patentada",
      "Lavable a máquina a 40 °C",
    ],
  },

  features: {
    eyebrow: "Diseñada por cuidadores, para cuidadores",
    title: (
      <>
        Cuatro decisiones técnicas,
        <br />
        un único <em>objetivo</em>.
      </>
    ),
    items: [
      {
        tag: "01 · Acción a cuatro manos",
        title: "Un movimiento compartido: la persona se sujeta",
        body: "COALA la lleva el cuidador y la persona ayudada se sujeta a las asas. El cuidador guía la maniobra con el peso de su cuerpo en lugar de levantar, de modo que el movimiento se convierte en un esfuerzo compartido. Cuatro zonas de agarre, con asas situadas en los hombros, los costados y las caderas.",
        label: "Las cuatro zonas de agarre reforzadas de la prenda de transferencia COALA",
      },
      {
        tag: "02 · Ropa de trabajo",
        title: "Solo 200 g más, sin tiempo de preparación",
        body: "COALA se pone como una prenda de trabajo normal, en pocos segundos. Durante la movilización, se acabó forzar los hombros y la zona lumbar, sin cierres mecánicos ni largas formaciones. Lista al instante, estés donde estés.",
        label: "Prenda de transferencia COALA con las asas recogidas, con el mismo aspecto que una prenda de trabajo normal",
      },
      {
        tag: "03 · Un soporte que se desactiva",
        title: "Se suelta en 5 segundos",
        body: "Una vez terminadas las transferencias, el cuidador suelta las zonas de soporte y recoge los agarres al instante. Una vez suelta, no hay ninguna compresión: COALA es imperceptible para quien la lleva e invisible para los demás.",
        label: "Arnés interno de la prenda de transferencia COALA, que se suelta en cinco segundos",
      },
      {
        tag: "04 · Ayuda integral",
        title: "Ayuda al cuidador sin sustituir el contacto humano",
        body: "COALA acompaña el movimiento del cuidador sin cambiar su forma de cuidar. Tejido técnico de poliéster de 215 g/m², lavable a 40 °C, tallas de la XS a la 4XL.",
        label: "Profesional sociosanitario acompañando a una persona mayor hasta su andador mientras lleva COALA",
      },
    ],
  },

  range: {
    eyebrow: "La gama",
    title: (
      <>
        Tres modelos, un mismo <em>movimiento</em>.
      </>
    ),
    lede:
      "El arnés y el tejido varían según la intensidad de uso de la prenda. Todos los modelos están disponibles en tallas de la XS a la 4XL (34 a 64 en tallaje francés), se lavan a máquina a 40 °C y son compatibles con la recomendación R.47 de la HAS.",
    badge: "El más elegido",
    imgAlt: (name) => `Prenda de transferencia ${name} puesta`,
    vat: "IVA incluido",
    harnessLabel: "Arnés",
    fabricLabel: "Tejido",
    supportLabel: "Acompañamiento",
    cta: "Pedir COALA",
    models: [
      { audience: "Cuidadores familiares", harness: "1 mm", fabric: "50 % algodón · 50 % poliéster", support: "Guía de uso incluida" },
      { audience: "Profesionales sociosanitarios y cuidadores habituales", harness: "1 mm, forrado de algodón", fabric: "50 % algodón · 50 % poliéster", support: "Guía de uso incluida" },
      { audience: "Profesionales sociosanitarios", harness: "2 mm, forrado de CoolTex®", fabric: "Tejido técnico CoolTex®", support: "Formación y acompañamiento" },
    ],
    noteBefore: "El arnés pesa unos 200 g y se despliega en unos diez segundos. Si vas a equipar a una organización, ",
    noteLink: "solicita un presupuesto",
    noteAfter: " en lugar de hacer un pedido individual.",
  },

  go: {
    badge: "Próximamente",
    subtitle: (
      <>
        El chaleco que protege tu salud para que puedas proteger mejor a los <em>demás</em>.
      </>
    ),
    priceValue: "Precio a consultar",
    priceCta: "Consultar precio",
    lede:
      "Desarrollado con y para los equipos de ambulancias, COALA Go integra el sistema COALA en un chaleco de alta visibilidad: un arnés interno y asas de agarre externas que reducen la carga sobre la espalda y limitan el riesgo de lesiones.",
    photoAlt: "Técnico de ambulancia con el chaleco COALA Go",
    benefits: [
      { title: "Reduce el esfuerzo de la espalda", detail: "El sistema COALA transfiere las fuerzas de los hombros a la pelvis y la zona lumbar." },
      { title: "Limita el riesgo de TME", detail: "Asas de agarre externas para una mejor sujeción y menos tensión." },
      { title: "Apoyo y seguridad", detail: "Un sistema integrado, discreto y siempre disponible bajo el chaleco." },
      { title: "Comodidad diaria", detail: "Corte ergonómico, zonas transpirables y forro de malla que se mueven contigo." },
    ],
    specs: [
      { label: "Sistema COALA", value: "Arnés interno oculto · asas de agarre retráctiles" },
      { label: "Visibilidad", value: "Bandas retrorreflectantes · 360°" },
      { label: "Bolsillos", value: "Bolsillos de pecho con cremallera · grandes bolsillos inferiores con cremallera" },
      { label: "Materiales", value: "100 % poliéster resistente e hidrófugo · forro de malla transpirable" },
      { label: "Color", value: "Azul marino" },
      { label: "Tallas", value: "De la XS a la 4XL · corte recto unisex" },
      { label: "Cuidados", value: "Lavable a máquina a 60 °C" },
    ],
    usagesTitle: "Para cada intervención",
    usages: [
      "Movilización de pacientes",
      "Traslado en camilla",
      "Levantamientos y transferencias",
      "Atención de urgencia a domicilio",
      "Situaciones de emergencia",
    ],
    note:
      "COALA Go todavía no se puede comprar en línea. Contacta con nosotros para saber cuándo estará disponible y recibir una propuesta adaptada a tu servicio.",
  },

  compare: {
    eyebrow: "¿Por qué no una máquina o una prenda de trabajo convencional?",
    title: (
      <>
        Las transferencias merecen
        <br />
        su propia <em>herramienta específica</em>.
      </>
    ),
    lede:
      "Hemos comparado COALA con las dos prácticas más habituales sobre el terreno. Así se comportan en el uso real.",
    coalaSub: "Prenda de transferencia",
    machineBrand: "Grúa de traslado",
    machineSub: "Ayuda mecánica para la movilización",
    classicBrand: "Prenda de trabajo convencional",
    classicSub: "Sanitaria o de tela",
    rows: [
      {
        label: "Movimiento de transferencia",
        coala: "La persona ayudada participa activamente, mientras el cuidador guía la transferencia con el peso de su cuerpo, la espalda recta y el abdomen activado, sin forzar los hombros ni los brazos.",
        machine: "Flexión de la espalda y los brazos al colocar los arneses.\nSin gesto de movilización.",
        classic: "Transferencia manual sin ayuda.\nCarga soportada con la espalda flexionada y tirando con los brazos.",
      },
      {
        label: "Preservar la dignidad",
        coala: "La persona ayudada participa activamente, lo que beneficia la salud del cuidador.\nUna relación más equilibrada entre el cuidador y la persona cuidada.\nSe mantiene el contacto visual.",
        machine: "La máquina hace todo el trabajo durante la transferencia.\nSin contacto humano.\nDepender de una máquina puede ser difícil de aceptar.",
        classic: "Un contacto humano que pone en riesgo al profesional sociosanitario.\nSin contacto visual.",
      },
      {
        label: "Esfuerzo de la espalda, los hombros y los brazos",
        coala: "Se acabó flexionar la espalda o hacer fuerza con los brazos.\nEspalda recta, abdomen activado y manos libres.",
        machine: "Sin movimientos de fuerza.\nColocar y retirar los arneses, maniobrar la máquina.",
        classic: "Gestos de movilización, esfuerzos y tensiones que provocan lumbalgias y TME de hombros y brazos.",
      },
      {
        label: "Tiempo de transferencia",
        coala: "35 segundos para incorporar a una persona y sentarla en una silla",
        machine: "3 minutos y 40 segundos para incorporar a una persona y sentarla en una silla",
        classic: "25 segundos para incorporar a una persona y sentarla en una silla",
      },
      {
        label: "Diseño",
        coala: "Innovación francesa patentada",
        machine: "Diseñada y fabricada a escala mundial",
        classic: "Fabricada a escala mundial",
      },
      {
        label: "Coste en 3 años (5 cuidadores)",
        coala: "~1650 € · pago único",
        machine: "~10 000 €",
        classic: "~640 € · consumibles",
      },
    ],
  },

  specs: {
    eyebrow: "Características técnicas",
    title: "Todo lo que necesitas, nada que te sobre.",
    items: [
      { label: "Composición", value: "Poliéster técnico de 215 g/m² · forro reforzado" },
      { label: "Tallas disponibles", value: "XS · S · M · L · XL · XXL · 3XL · 4XL (34 a 64 en tallaje francés)" },
      { label: "Color", value: "Blanco" },
      { label: "Lavado", value: "Lavado a máquina a 40 °C · secadora en ciclo delicado" },
      { label: "Diseño", value: "Innovación francesa patentada · Connect Link" },
    ],
    download: "Descargar la ficha técnica (PDF)",
    guideEyebrow: "Guía de tallas",
    guideTitle: "Elegir la talla adecuada.",
    guideIntro: (
      <>
        COALA la lleva <em>el cuidador o el profesional sociosanitario</em>, así que mide a la persona
        que vaya a llevar la prenda. Si estás entre dos tallas, elige la más grande.
      </>
    ),
    toggleAria: "Tabla de tallas",
    women: "Mujer",
    men: "Hombre",
    tableAria: (morpho) => `Tabla de tallas de COALA: ${morpho}`,
    colSize: "Talla",
    colConfection: "Talla francesa",
    colChest: "Pecho",
    colWaist: "Cintura",
    point: "Grado",
    note: "Medidas corporales, en centímetros.",
  },

  quote: {
    text: "Llevo cuatro años cuidando de mi marido. La primera vez que usé COALA para pasarlo de la cama al sillón, me di cuenta de que no necesitaba convertirme en fisioterapeuta. Solo necesitaba una herramienta pensada para mi propio cuerpo.",
    name: "Hélène, 67 años",
    role: "Cuidadora familiar · Nantes (traducido del francés)",
  },

  faq: {
    eyebrow: "Preguntas sobre la prenda",
    title: (
      <>
        Las preguntas
        <br />
        que nos hacen
        <br />
        <em>más a menudo</em>.
      </>
    ),
    cta: "Ver todas las preguntas",
    items: [
      {
        q: "¿COALA es adecuada para mi ser querido?",
        a: "COALA la llevas tú, el cuidador, y sirve para ayudar a cualquier persona que necesite asistencia en las transferencias y pueda sujetar las asas, tanto si tiene plena movilidad como si la tiene reducida. La prenda está disponible en tallas de la XS a la 4XL para adaptarse al cuidador. En casos específicos (úlceras por presión avanzadas, cirugía reciente), pide consejo al equipo sanitario.",
      },
      {
        q: "¿Cuánto dura una prenda?",
        a: "En uso doméstico (1 o 2 transferencias al día): de 4 a 6 años. En uso profesional (de 10 a 15 transferencias al día): de 18 a 24 meses. El tejido se puede lavar a máquina a 40 °C y secar en secadora en ciclo delicado.",
      },
      {
        q: "¿Puedo probarla antes de comprarla?",
        a: "No ofrecemos préstamos gratuitos, tampoco a profesionales. El producto se puede devolver en un plazo de 14 días si no se ha usado y sigue como nuevo, previa revisión a su recepción. Una vez recibido tu pedido, podemos hacerte una demostración por videollamada, en inglés.",
      },
      {
        q: "¿Cómo lavo la prenda?",
        a: "Lavado a máquina a 40 °C con detergente normal y secadora en ciclo delicado. No uses suavizante (debilita las costuras). No uses lejía.",
      },
    ],
  },

  cross: [
    { eyebrow: "Siguiente paso", title: "¿Cómo funciona en la práctica?" },
    { eyebrow: "¿Vas a equipar a un equipo de cuidados?", title: "Solicitar presupuesto" },
    { eyebrow: "Desde el terreno", title: "Leer los testimonios" },
  ],
};

export default copy;

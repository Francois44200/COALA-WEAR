import type { ResultsCopy } from "../results";

const TRANSLATED = " (traducido del francés)";

const copy: ResultsCopy = {
  hero: {
    eyebrow: "Pruebas y testimonios",
    title: (
      <>
        Lo que opinan<br />
        quienes <em>la usan</em><br />
        a diario.
      </>
    ),
    lede: "Cuidadores familiares, auxiliares de enfermería, directores de residencias. Testimonios reales y cifras medidas sobre el terreno.",
    ctaOrder: "Pedir COALA",
    ctaTestimonials: "Leer los testimonios",
    imageAlt: "Cuidador con la prenda de transferencia COALA durante una transferencia",
  },
  stats: [
    {
      value: "95%",
      label: "afirma que tiene un impacto positivo en su salud y sus condiciones de trabajo",
      source: "Estudio ARACT 2026, 48 profesionales sociosanitarios",
    },
    {
      value: "65%",
      label: "de los pacientes son aptos para usar COALA en transferencias o cambios de posición en la cama",
      source: "Estudio Connect Link 2024, 95 pacientes",
    },
    {
      value: "0",
      label: "incidentes adversos notificados desde noviembre de 2024",
      source: "Seguimiento de clientes de Connect Link y estudio ARACT 2026",
    },
    {
      value: "665",
      label: "pacientes acompañados con COALA durante el estudio de impacto ARACT 2026",
      source: "Estudio ARACT 2026",
    },
  ],
  pullQuote: {
    text: "Me dijeron que era una ayuda para la comodidad. No lo es. Es una ayuda para la seguridad, tanto de la persona ayudada como del cuidador. He medido la diferencia.",
    name: "Dr. Arnaud V.",
    role: "Médico coordinador · Residencia sin ánimo de lucro · Hauts-de-France" + TRANSLATED,
  },
  testimonials: {
    eyebrow: "Testimonios",
    title: (
      <>
        La han probado.<br />
        Esto es lo que <em>opinan</em>.
      </>
    ),
    badgePro: "Profesional sociosanitario",
    badgeFamily: "Cuidador familiar",
    ratingLabel: (rating) => `${rating} de 5 ${rating === 1 ? "estrella" : "estrellas"}`,
    items: [
      {
        quote: "Llevo cuatro años cuidando de mi marido. La primera vez que usé COALA para pasarlo de la cama a la silla, me di cuenta de que no necesitaba convertirme en fisioterapeuta. Solo necesitaba una herramienta pensada para mi propio cuerpo.",
        name: "Hélène M.",
        role: "Cuidadora familiar" + TRANSLATED,
        location: "Nantes",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Equipamos a nuestras 12 auxiliares con COALA hace ocho meses. Las bajas laborales se han reducido a la mitad. Fue lo único que cambiamos en nuestras prácticas ese año.",
        name: "Isabelle R.",
        role: "Responsable de un servicio de ayuda a domicilio (SAAD)" + TRANSLATED,
        location: "Lyon",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Mi madre pesa mucho y yo hacía las transferencias solo. No quería ingresarla en una residencia. COALA nos dio dos años más en casa de los que esperábamos.",
        name: "Patrick D.",
        role: "Cuidador familiar, hijo" + TRANSLATED,
        location: "Burdeos",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "La formación incluida es lo que marca la diferencia. En 60 minutos, mis equipos entendieron la técnica. No hemos tenido ni un solo incidente en las transferencias desde su implantación.",
        name: "Dr. Arnaud V.",
        role: "Médico coordinador, residencia" + TRANSLATED,
        location: "Hauts-de-France",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Sinceramente, era escéptica. ¿Una prenda para eso? Pero después de la primera semana, no me imagino trabajar sin ella. El agarre se nota de verdad distinto.",
        name: "Sylvie T.",
        role: "Auxiliar de ayuda a domicilio, ADMR" + TRANSLATED,
        location: "Bretaña",
        type: "pro",
        rating: 5,
      },
      {
        quote: "La hemos incorporado a nuestro proceso de acogida. Cada nueva incorporación recibe su prenda el primer día. Para nuestras auxiliares, es un auténtico equipo de protección individual.",
        name: "Claire B.",
        role: "Directora, servicio de enfermería a domicilio" + TRANSLATED,
        location: "Estrasburgo",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Ha cambiado mi relación con mi padre. Antes, las transferencias me generaban ansiedad, y a él también. Ahora las hacemos con más calma. Este pequeño detalle ha cambiado muchas cosas.",
        name: "Amina K.",
        role: "Cuidadora familiar, hija" + TRANSLATED,
        location: "París",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Tenemos tres centros en Bretaña y 60 prendas en uso. Las opiniones del personal son unánimes. La técnica es más precisa y los accidentes laborales relacionados con la movilización manual prácticamente han desaparecido.",
        name: "François L.",
        role: "Director de residencia, grupo mutualista" + TRANSLATED,
        location: "Bretaña",
        type: "pro",
        rating: 5,
      },
    ],
  },
  cases: {
    eyebrow: "Casos prácticos sobre el terreno",
    title: (
      <>
        Resultados<br />
        <em>medidos</em>, no estimados.
      </>
    ),
    items: [
      {
        tag: "Proveedor de cuidados · Enfermería a domicilio",
        title: "10 auxiliares de enfermería formadas, ninguna baja en 18 meses",
        body: "Un grupo hospitalario del norte de Francia implantó COALA en su servicio de enfermería a domicilio (SSIAD) y en su servicio de hospitalización a domicilio (HAD) tras una prueba de campo de seis semanas con cuatro profesionales sociosanitarios voluntarios. Resultado: ninguna baja por problemas lumbares tras la implantación, frente a tres casos en el mismo periodo del año anterior.",
        metrics: [
          { v: "0", l: "bajas por TME y problemas lumbares" },
          { v: "18 meses", l: "de seguimiento en el grupo" },
          { v: "10", l: "profesionales sociosanitarios equipados y formados" },
        ],
      },
      {
        tag: "Cuidador familiar · Domicilio",
        title: "Dos años más en casa para una familia cerca de Burdeos",
        body: "Patrick D. cuidaba solo de su madre, de 87 kg. Las transferencias diarias de la cama a la silla se estaban volviendo físicamente imposibles. Tras empezar a usar COALA y hablar por teléfono con la terapeuta ocupacional de Connect Link, pudo seguir cuidándola en casa, sin ingresarla en una residencia, durante 26 meses más.",
        metrics: [
          { v: "+26", l: "meses en casa" },
          { v: "1", l: "cuidador, solo" },
          { v: "87 kg", l: "persona ayudada" },
        ],
      },
    ],
  },
  trust: {
    label: "Utilizada por organizaciones que confían en COALA",
    ariaLabel: "Socios y organizaciones que utilizan COALA",
    awardsLabel: "Premios y reconocimientos",
    awardsAriaLabel: "Premios y reconocimientos",
    awards: [
      "Ganador del Silver Eco Festival 2024",
      "Silver Surfer",
      "Innovation & Prévention (I&P)",
      "French Tech 2023",
      "Premio Santexpo FHF 2026",
      "Premio Janus, Institut Français du Design 2026",
      "Premio Salon SAP 2024",
    ],
  },
  finalCta: {
    eyebrow: "¿Quieres probarla?",
    title: (
      <>
        14 días para<br />
        <em>decidirte</em>.
      </>
    ),
    lede: "Puedes devolverla en un plazo de 14 días, desde cualquier país de la Unión Europea, si la prenda no se ha usado. Demostración por videollamada, en inglés, una vez recibido tu pedido.",
    ctaOrder: "Pedir COALA · desde 129 €",
    ctaQuote: "Solicitar presupuesto",
  },
  crossLinks: [
    { eyebrow: "La prenda en detalle", title: "Página completa del producto" },
    { eyebrow: "¿Vas a equipar a un equipo de cuidados?", title: "Presupuestos profesionales en 48 horas" },
    { eyebrow: "¿Tienes preguntas?", title: "Todas las preguntas frecuentes" },
  ],
};

export default copy;

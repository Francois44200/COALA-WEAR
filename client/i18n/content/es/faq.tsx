import type { FaqPageCopy } from "../faq";

const copy: FaqPageCopy = {
  hero: {
    eyebrow: "Centro de ayuda",
    title: (
      <>
        Cada pregunta,<br />una <em>respuesta</em> clara.
      </>
    ),
    lede: "Busca por palabra clave, explora por temas o escríbenos directamente si no encuentras lo que buscas.",
    cta: "Ver las categorías",
    meta: ["Cuidadores familiares", "Profesionales y organizaciones", "Actualizado cada mes"],
  },
  search: {
    placeholder: (total) => `Buscar entre ${total} preguntas…`,
    ariaLabel: "Buscar en las preguntas frecuentes",
    clear: "Borrar la búsqueda",
    results: (count) => `${count} resultado${count !== 1 ? "s" : ""}`,
    showAll: "ver todo",
    summary: (categories, total) =>
      `${categories} categoría${categories !== 1 ? "s" : ""} · ${total} pregunta${total !== 1 ? "s" : ""} en total`,
  },
  toc: {
    ariaLabel: "Categorías",
    label: "Categorías",
    helpTag: "¿Sin respuesta?",
    helpLink: "Escribe a nuestro equipo",
  },
  questionCount: (count) => `${count} pregunta${count !== 1 ? "s" : ""}`,
  empty: {
    title: (query) => <>No hay respuestas para «{query}».</>,
    body: "Prueba a reformular tu búsqueda o escríbenos directamente.",
    cta: "Escríbenos",
  },
  crossLinks: [
    { eyebrow: "¿Sigues sin encontrarlo?", title: "Escribe al equipo de COALA" },
    { eyebrow: "¿Vas a equipar a un equipo de cuidados?", title: "Presupuestos profesionales en 48 horas" },
    { eyebrow: "El producto en detalle", title: "Ver la ficha completa del producto" },
  ],
};

export default copy;

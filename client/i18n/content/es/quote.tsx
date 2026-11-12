import { Link } from "@/i18n/Link";
import type { QuoteCopy } from "../quote";

const copy: QuoteCopy = {
  eyebrow: "Profesionales y organizaciones",
  title: (
    <>
      Solicita un presupuesto<br />para tus <em>equipos</em>.
    </>
  ),
  lede: "Rellena el formulario y nuestro equipo te enviará un presupuesto a medida en un plazo de 48 horas laborables.",
  success: "Gracias, tu solicitud de presupuesto se ha enviado. Te responderemos en un plazo de 48 horas laborables.",
  honeypot: "No rellenar",
  errorsOne: "Hay un campo que corregir.",
  errorsMany: (n) => `Hay ${n} campos que corregir.`,
  labels: {
    societe: "Nombre de la organización",
    contact: "Persona de contacto",
    email: "Correo electrónico",
    adresse: "Dirección de la organización",
    quantite: "Cantidad necesaria",
    date: "Fecha de entrega deseada",
    infos: "Información adicional",
  },
  messages: {
    societe: "Introduce el nombre de tu organización.",
    contact: "Introduce el nombre de la persona de contacto.",
    email: "Introduce una dirección de correo electrónico válida.",
    adresse: "Introduce la dirección de tu organización.",
    quantite: "Introduce una cantidad mínima de 1.",
    date: "Introduce una fecha de entrega futura.",
    rgpd: "Acepta el uso de tus datos para que podamos responderte.",
  },
  consent: (
    <>
      Acepto que mis datos se utilicen para responder a mi solicitud. Consulta la{" "}
      <Link page="privacy">política de privacidad</Link>.
    </>
  ),
  sendError: "No se ha podido enviar. Inténtalo de nuevo o escríbenos a",
  sending: "Enviando…",
  send: "Enviar",
  required: "* Campos obligatorios",
};

export default copy;

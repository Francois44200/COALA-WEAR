import { Link } from "@/i18n/Link";
import type { ContactCopy } from "../contact";

const copy: ContactCopy = {
  eyebrow: "Escríbenos",
  title: (
    <>
      <em>Contacto</em>.
    </>
  ),
  lede: "¿Tienes alguna pregunta sobre COALA o necesitas un presupuesto? Escríbenos y nuestro equipo te responderá enseguida. Una vez recibido tu pedido, también podemos organizar una demostración por videollamada, en inglés.",
  emailLabel: "Correo electrónico",
  addressLabel: "Dirección",
  success: "Gracias, tu mensaje se ha enviado. Te responderemos en breve.",
  honeypot: "No rellenar",
  errorsOne: "Hay un campo que corregir.",
  errorsMany: (n) => `Hay ${n} campos que corregir.`,
  labels: {
    nom: "Apellidos",
    prenom: "Nombre",
    email: "Correo electrónico",
    telephone: "Teléfono",
    profil: "Eres",
    objet: "Asunto",
    message: "Mensaje",
  },
  profils: [
    { value: "Particulier", label: "Un particular" },
    { value: "Professionnel", label: "Un profesional" },
    { value: "Presse", label: "Prensa" },
    { value: "Autre", label: "Otro" },
  ],
  messages: {
    nom: "Introduce tus apellidos.",
    prenom: "Introduce tu nombre.",
    email: "Introduce una dirección de correo electrónico válida.",
    profil: "Selecciona tu perfil.",
    objet: "Introduce el asunto de tu mensaje.",
    message: "Escribe tu mensaje.",
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

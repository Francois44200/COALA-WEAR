import type { ContactCopy } from "../contact";
import { Link } from "@/i18n/Link";

const copy: ContactCopy = {
  eyebrow: "Kontakt",
  title: (
    <>
      Schreiben Sie <em>uns</em>.
    </>
  ),
  lede: "Sie haben eine Frage zu COALA oder benötigen ein Angebot? Schreiben Sie uns – unser Team meldet sich schnell bei Ihnen. Nach Eingang Ihrer Bestellung können wir Ihnen außerdem eine Vorführung per Videoanruf auf Englisch anbieten.",
  emailLabel: "E-Mail",
  addressLabel: "Adresse",
  success: "Vielen Dank, Ihre Nachricht wurde gesendet. Wir melden uns in Kürze bei Ihnen.",
  honeypot: "Bitte nicht ausfüllen",
  errorsOne: "Ein Feld muss korrigiert werden.",
  errorsMany: (n) => `${n} Felder müssen korrigiert werden.`,
  labels: {
    nom: "Nachname",
    prenom: "Vorname",
    email: "E-Mail",
    telephone: "Telefon",
    profil: "Sie sind",
    objet: "Betreff",
    message: "Nachricht",
  },
  profils: [
    { value: "Particulier", label: "Privatperson" },
    { value: "Professionnel", label: "Fachkraft / Unternehmen" },
    { value: "Presse", label: "Presse" },
    { value: "Autre", label: "Sonstiges" },
  ],
  messages: {
    nom: "Bitte geben Sie Ihren Nachnamen ein.",
    prenom: "Bitte geben Sie Ihren Vornamen ein.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    profil: "Bitte wählen Sie Ihr Profil aus.",
    objet: "Bitte geben Sie den Betreff Ihrer Nachricht ein.",
    message: "Bitte schreiben Sie Ihre Nachricht.",
    rgpd: "Bitte stimmen Sie der Verwendung Ihrer Daten zu, damit wir Ihnen antworten können.",
  },
  consent: (
    <>
      Ich bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. Siehe{" "}
      <Link page="privacy">Datenschutzerklärung</Link>.
    </>
  ),
  sendError: "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie uns an",
  sending: "Wird gesendet …",
  send: "Senden",
  required: "* Pflichtfelder",
};

export default copy;

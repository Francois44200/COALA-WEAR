import type { QuoteCopy } from "../quote";
import { Link } from "@/i18n/Link";

const copy: QuoteCopy = {
  eyebrow: "Fachkräfte & Einrichtungen",
  title: (
    <>
      Angebot anfordern<br />für Ihre <em>Teams</em>.
    </>
  ),
  lede: "Füllen Sie das Formular aus – unser Team sendet Ihnen innerhalb von 48 Arbeitsstunden ein individuelles Angebot.",
  success: "Vielen Dank, Ihre Angebotsanfrage wurde gesendet. Wir antworten Ihnen innerhalb von 48 Arbeitsstunden.",
  honeypot: "Bitte nicht ausfüllen",
  errorsOne: "Ein Feld muss korrigiert werden.",
  errorsMany: (n) => `${n} Felder müssen korrigiert werden.`,
  labels: {
    societe: "Name der Einrichtung",
    contact: "Ansprechpartner/in",
    email: "E-Mail",
    adresse: "Adresse der Einrichtung",
    quantite: "Benötigte Menge",
    date: "Gewünschtes Lieferdatum",
    infos: "Weitere Informationen",
  },
  messages: {
    societe: "Bitte geben Sie den Namen Ihrer Einrichtung ein.",
    contact: "Bitte geben Sie den Namen der Ansprechperson ein.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    adresse: "Bitte geben Sie die Adresse Ihrer Einrichtung ein.",
    quantite: "Bitte geben Sie eine Menge von mindestens 1 ein.",
    date: "Bitte geben Sie ein Lieferdatum in der Zukunft ein.",
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

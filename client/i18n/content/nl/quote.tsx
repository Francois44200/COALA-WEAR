import type { QuoteCopy } from "../quote";
import { Link } from "@/i18n/Link";

const copy: QuoteCopy = {
  eyebrow: "Professionals & organisaties",
  title: (
    <>
      Vraag een offerte aan<br />voor uw <em>teams</em>.
    </>
  ),
  lede: "Vul het formulier in en ons team stuurt u binnen 48 werkuren een offerte op maat.",
  success: "Dank u wel, uw offerteaanvraag is verzonden. We antwoorden binnen 48 werkuren.",
  honeypot: "Niet invullen",
  errorsOne: "Eén veld moet worden gecorrigeerd.",
  errorsMany: (n) => `${n} velden moeten worden gecorrigeerd.`,
  labels: {
    societe: "Naam van de organisatie",
    contact: "Naam contactpersoon",
    email: "E-mail",
    adresse: "Adres van de organisatie",
    quantite: "Gewenst aantal",
    date: "Gewenste leverdatum",
    infos: "Aanvullende informatie",
  },
  messages: {
    societe: "Vul de naam van uw organisatie in.",
    contact: "Vul de naam van de contactpersoon in.",
    email: "Vul een geldig e-mailadres in.",
    adresse: "Vul het adres van uw organisatie in.",
    quantite: "Vul een aantal van minimaal 1 in.",
    date: "Vul een leverdatum in de toekomst in.",
    rgpd: "Geef toestemming voor het gebruik van uw gegevens, zodat we u kunnen antwoorden.",
  },
  consent: (
    <>
      Ik ga ermee akkoord dat mijn gegevens worden gebruikt om mijn aanvraag te beantwoorden. Zie het{" "}
      <Link page="privacy">privacybeleid</Link>.
    </>
  ),
  sendError: "Verzenden mislukt. Probeer het opnieuw of mail ons via",
  sending: "Bezig met verzenden…",
  send: "Verzenden",
  required: "* Verplichte velden",
};

export default copy;

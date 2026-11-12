import type { ContactCopy } from "../contact";
import { Link } from "@/i18n/Link";

const copy: ContactCopy = {
  eyebrow: "Contact",
  title: (
    <>
      Neem contact met <em>ons</em> op.
    </>
  ),
  lede: "Heeft u een vraag over COALA of wilt u een offerte? Schrijf ons en ons team neemt snel contact met u op. Zodra uw bestelling is ontvangen, kunnen we ook een demonstratie per videogesprek organiseren, in het Engels.",
  emailLabel: "E-mail",
  addressLabel: "Adres",
  success: "Dank u wel, uw bericht is verzonden. We nemen zo snel mogelijk contact met u op.",
  honeypot: "Niet invullen",
  errorsOne: "Eén veld moet worden gecorrigeerd.",
  errorsMany: (n) => `${n} velden moeten worden gecorrigeerd.`,
  labels: {
    nom: "Achternaam",
    prenom: "Voornaam",
    email: "E-mail",
    telephone: "Telefoon",
    profil: "U bent",
    objet: "Onderwerp",
    message: "Bericht",
  },
  profils: [
    { value: "Particulier", label: "Particulier" },
    { value: "Professionnel", label: "Professional" },
    { value: "Presse", label: "Pers" },
    { value: "Autre", label: "Anders" },
  ],
  messages: {
    nom: "Vul uw achternaam in.",
    prenom: "Vul uw voornaam in.",
    email: "Vul een geldig e-mailadres in.",
    profil: "Kies uw profiel.",
    objet: "Vul het onderwerp van uw bericht in.",
    message: "Schrijf uw bericht.",
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

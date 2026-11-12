import type { ContactCopy } from "../contact";
import { Link } from "@/i18n/Link";

const copy: ContactCopy = {
  eyebrow: "Hör av dig",
  title: (
    <>
      Kontakta <em>oss</em>.
    </>
  ),
  lede: "Har du en fråga om COALA eller behöver du en offert? Skriv till oss så återkommer vårt team snabbt. När vi har tagit emot din beställning kan vi också ordna en demonstration via videosamtal, på engelska.",
  emailLabel: "E-post",
  addressLabel: "Adress",
  success: "Tack, ditt meddelande har skickats. Vi återkommer till dig inom kort.",
  honeypot: "Fyll inte i",
  errorsOne: "Ett fält behöver rättas.",
  errorsMany: (n) => `${n} fält behöver rättas.`,
  labels: {
    nom: "Efternamn",
    prenom: "Förnamn",
    email: "E-post",
    telephone: "Telefon",
    profil: "Du är",
    objet: "Ämne",
    message: "Meddelande",
  },
  profils: [
    { value: "Particulier", label: "Privatperson" },
    { value: "Professionnel", label: "Yrkesverksam" },
    { value: "Presse", label: "Press" },
    { value: "Autre", label: "Annat" },
  ],
  messages: {
    nom: "Ange ditt efternamn.",
    prenom: "Ange ditt förnamn.",
    email: "Ange en giltig e-postadress.",
    profil: "Välj din profil.",
    objet: "Ange ämnet för ditt meddelande.",
    message: "Skriv ditt meddelande.",
    rgpd: "Godkänn att vi använder dina uppgifter så att vi kan svara dig.",
  },
  consent: (
    <>
      Jag godkänner att mina uppgifter används för att besvara min förfrågan. Läs vår{" "}
      <Link page="privacy">integritetspolicy</Link>.
    </>
  ),
  sendError: "Det gick inte att skicka. Försök igen eller mejla oss på",
  sending: "Skickar…",
  send: "Skicka",
  required: "* Obligatoriska fält",
};

export default copy;

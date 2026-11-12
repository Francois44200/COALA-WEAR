import { Link } from "@/i18n/Link";
import type { ContactCopy } from "../contact";

const copy: ContactCopy = {
  eyebrow: "Ta kontakt",
  title: (
    <>
      Kontakt <em>oss</em>.
    </>
  ),
  lede: "Har du spørsmål om COALA eller trenger du et tilbud? Skriv til oss, så svarer teamet vårt raskt. Når bestillingen din er mottatt, kan vi også avtale en demonstrasjon på videosamtale, på engelsk.",
  emailLabel: "E-post",
  addressLabel: "Adresse",
  success: "Takk, meldingen din er sendt. Vi tar kontakt med deg snart.",
  honeypot: "Ikke fyll ut",
  errorsOne: "Ett felt må rettes.",
  errorsMany: (n) => (n === 1 ? "Ett felt må rettes." : `${n} felt må rettes.`),
  labels: {
    nom: "Etternavn",
    prenom: "Fornavn",
    email: "E-post",
    telephone: "Telefon",
    profil: "Du er",
    objet: "Emne",
    message: "Melding",
  },
  profils: [
    { value: "Particulier", label: "Privatperson" },
    { value: "Professionnel", label: "Fagperson / virksomhet" },
    { value: "Presse", label: "Presse" },
    { value: "Autre", label: "Annet" },
  ],
  messages: {
    nom: "Skriv inn etternavnet ditt.",
    prenom: "Skriv inn fornavnet ditt.",
    email: "Skriv inn en gyldig e-postadresse.",
    profil: "Velg profilen din.",
    objet: "Skriv inn emnet for meldingen din.",
    message: "Skriv meldingen din.",
    rgpd: "Du må samtykke til bruk av opplysningene dine slik at vi kan svare deg.",
  },
  consent: (
    <>
      Jeg samtykker i at opplysningene mine brukes til å besvare henvendelsen min. Se{" "}
      <Link page="privacy">personvernerklæringen</Link>.
    </>
  ),
  sendError: "Sendingen mislyktes. Prøv igjen eller send oss en e-post på",
  sending: "Sender …",
  send: "Send",
  required: "* Obligatoriske felt",
};

export default copy;

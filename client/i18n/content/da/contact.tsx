import type { ContactCopy } from "../contact";
import { Link } from "@/i18n/Link";

const copy: ContactCopy = {
  eyebrow: "Kontakt",
  title: (
    <>
      Kontakt <em>os</em>.
    </>
  ),
  lede: "Har du et spørgsmål om COALA, eller har du brug for et tilbud? Skriv til os, så vender vores team hurtigt tilbage. Når vi har modtaget din bestilling, kan vi også arrangere en demonstration via videoopkald på engelsk.",
  emailLabel: "E-mail",
  addressLabel: "Adresse",
  success: "Tak, din besked er sendt. Vi vender tilbage til dig snarest.",
  honeypot: "Udfyld ikke dette felt",
  errorsOne: "Ét felt skal rettes.",
  errorsMany: (n) => `${n} felter skal rettes.`,
  labels: {
    nom: "Efternavn",
    prenom: "Fornavn",
    email: "E-mail",
    telephone: "Telefon",
    profil: "Du er",
    objet: "Emne",
    message: "Besked",
  },
  profils: [
    { value: "Particulier", label: "Privatperson" },
    { value: "Professionnel", label: "Fagperson" },
    { value: "Presse", label: "Presse" },
    { value: "Autre", label: "Andet" },
  ],
  messages: {
    nom: "Indtast dit efternavn.",
    prenom: "Indtast dit fornavn.",
    email: "Indtast en gyldig e-mailadresse.",
    profil: "Vælg din profil.",
    objet: "Indtast emnet for din besked.",
    message: "Skriv din besked.",
    rgpd: "Giv samtykke til brugen af dine data, så vi kan svare dig.",
  },
  consent: (
    <>
      Jeg giver samtykke til, at mine data bruges til at besvare min henvendelse. Se{" "}
      <Link page="privacy">privatlivspolitikken</Link>.
    </>
  ),
  sendError: "Afsendelsen mislykkedes. Prøv igen, eller skriv til os på",
  sending: "Sender …",
  send: "Send",
  required: "* Obligatoriske felter",
};

export default copy;

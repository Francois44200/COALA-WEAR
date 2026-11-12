import type { QuoteCopy } from "../quote";
import { Link } from "@/i18n/Link";

const copy: QuoteCopy = {
  eyebrow: "Fagfolk og organisationer",
  title: (
    <>
      Anmod om tilbud<br />til dine <em>teams</em>.
    </>
  ),
  lede: "Udfyld formularen, så sender vores team dig et skræddersyet tilbud inden for 48 arbejdstimer.",
  success: "Tak, din anmodning om tilbud er sendt. Vi svarer inden for 48 arbejdstimer.",
  honeypot: "Udfyld ikke dette felt",
  errorsOne: "Ét felt skal rettes.",
  errorsMany: (n) => `${n} felter skal rettes.`,
  labels: {
    societe: "Organisationens navn",
    contact: "Kontaktperson",
    email: "E-mail",
    adresse: "Organisationens adresse",
    quantite: "Ønsket antal",
    date: "Ønsket leveringsdato",
    infos: "Yderligere oplysninger",
  },
  messages: {
    societe: "Indtast navnet på din organisation.",
    contact: "Indtast kontaktpersonens navn.",
    email: "Indtast en gyldig e-mailadresse.",
    adresse: "Indtast din organisations adresse.",
    quantite: "Indtast et antal på mindst 1.",
    date: "Indtast en leveringsdato i fremtiden.",
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

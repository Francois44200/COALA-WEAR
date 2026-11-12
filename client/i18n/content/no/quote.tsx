import { Link } from "@/i18n/Link";
import type { QuoteCopy } from "../quote";

const copy: QuoteCopy = {
  eyebrow: "Fagfolk og virksomheter",
  title: (
    <>
      Be om tilbud<br />for dine <em>team</em>.
    </>
  ),
  lede: "Fyll ut skjemaet, så sender teamet vårt deg et skreddersydd tilbud innen 48 arbeidstimer.",
  success: "Takk, tilbudsforespørselen din er sendt. Vi svarer innen 48 arbeidstimer.",
  honeypot: "Ikke fyll ut",
  errorsOne: "Ett felt må rettes.",
  errorsMany: (n) => (n === 1 ? "Ett felt må rettes." : `${n} felt må rettes.`),
  labels: {
    societe: "Navn på virksomheten",
    contact: "Kontaktperson",
    email: "E-post",
    adresse: "Virksomhetens adresse",
    quantite: "Ønsket antall",
    date: "Ønsket leveringsdato",
    infos: "Tilleggsinformasjon",
  },
  messages: {
    societe: "Skriv inn navnet på virksomheten.",
    contact: "Skriv inn navnet på kontaktpersonen.",
    email: "Skriv inn en gyldig e-postadresse.",
    adresse: "Skriv inn adressen til virksomheten.",
    quantite: "Skriv inn et antall på minst 1.",
    date: "Skriv inn en leveringsdato fram i tid.",
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

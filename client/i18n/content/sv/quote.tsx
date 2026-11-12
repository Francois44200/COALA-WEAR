import type { QuoteCopy } from "../quote";
import { Link } from "@/i18n/Link";

const copy: QuoteCopy = {
  eyebrow: "Yrkesverksamma och verksamheter",
  title: (
    <>
      Begär offert<br />för dina <em>team</em>.
    </>
  ),
  lede: "Fyll i formuläret så svarar vårt team med en skräddarsydd offert inom 48 arbetstimmar.",
  success: "Tack, din offertförfrågan har skickats. Vi svarar inom 48 arbetstimmar.",
  honeypot: "Fyll inte i",
  errorsOne: "Ett fält behöver rättas.",
  errorsMany: (n) => `${n} fält behöver rättas.`,
  labels: {
    societe: "Verksamhetens namn",
    contact: "Kontaktperson",
    email: "E-post",
    adresse: "Verksamhetens adress",
    quantite: "Önskat antal",
    date: "Önskat leveransdatum",
    infos: "Övrig information",
  },
  messages: {
    societe: "Ange namnet på din verksamhet.",
    contact: "Ange kontaktpersonens namn.",
    email: "Ange en giltig e-postadress.",
    adresse: "Ange verksamhetens adress.",
    quantite: "Ange ett antal på minst 1.",
    date: "Ange ett leveransdatum framåt i tiden.",
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

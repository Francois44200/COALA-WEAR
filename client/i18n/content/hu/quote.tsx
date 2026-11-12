import { Link } from "@/i18n/Link";
import type { QuoteCopy } from "../quote";

const copy: QuoteCopy = {
  eyebrow: "Szakemberek és intézmények",
  title: (
    <>
      Kérjen árajánlatot<br /><em>csapatai</em> számára.
    </>
  ),
  lede: "Töltse ki az űrlapot, és csapatunk 48 munkaórán belül személyre szabott árajánlatot küld.",
  success: "Köszönjük, árajánlatkérését elküldtük. 48 munkaórán belül válaszolunk.",
  honeypot: "Ne töltse ki",
  errorsOne: "Egy mezőt javítani kell.",
  errorsMany: (n) => `${n} mezőt javítani kell.`,
  labels: {
    societe: "Intézmény neve",
    contact: "Kapcsolattartó neve",
    email: "E-mail",
    adresse: "Intézmény címe",
    quantite: "Kívánt mennyiség",
    date: "Kívánt szállítási dátum",
    infos: "További információk",
  },
  messages: {
    societe: "Kérjük, adja meg intézménye nevét.",
    contact: "Kérjük, adja meg a kapcsolattartó nevét.",
    email: "Kérjük, adjon meg egy érvényes e-mail-címet.",
    adresse: "Kérjük, adja meg intézménye címét.",
    quantite: "Kérjük, legalább 1 darabot adjon meg.",
    date: "Kérjük, jövőbeli szállítási dátumot adjon meg.",
    rgpd: "Kérjük, járuljon hozzá adatai kezeléséhez, hogy válaszolni tudjunk Önnek.",
  },
  consent: (
    <>
      Hozzájárulok, hogy adataimat a megkeresésem megválaszolásához felhasználják. Lásd az{" "}
      <Link page="privacy">adatvédelmi tájékoztatót</Link>.
    </>
  ),
  sendError: "A küldés nem sikerült. Kérjük, próbálja újra, vagy írjon nekünk e-mailt ide:",
  sending: "Küldés…",
  send: "Küldés",
  required: "* Kötelező mezők",
};

export default copy;

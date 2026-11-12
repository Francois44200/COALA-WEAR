import { Link } from "@/i18n/Link";
import type { ContactCopy } from "../contact";

const copy: ContactCopy = {
  eyebrow: "Lépjen kapcsolatba velünk",
  title: (
    <>
      Írjon <em>nekünk</em>.
    </>
  ),
  lede: "Kérdése van a COALA-val kapcsolatban, vagy árajánlatra van szüksége? Írjon nekünk, csapatunk hamarosan válaszol. Megrendelése beérkezése után videohívásban, angol nyelven bemutatót is tartunk.",
  emailLabel: "E-mail",
  addressLabel: "Cím",
  success: "Köszönjük, üzenetét elküldtük. Hamarosan válaszolunk.",
  honeypot: "Ne töltse ki",
  errorsOne: "Egy mezőt javítani kell.",
  errorsMany: (n) => `${n} mezőt javítani kell.`,
  labels: {
    nom: "Vezetéknév",
    prenom: "Keresztnév",
    email: "E-mail",
    telephone: "Telefonszám",
    profil: "Ön",
    objet: "Tárgy",
    message: "Üzenet",
  },
  profils: [
    { value: "Particulier", label: "Magánszemély" },
    { value: "Professionnel", label: "Szakember" },
    { value: "Presse", label: "Sajtó" },
    { value: "Autre", label: "Egyéb" },
  ],
  messages: {
    nom: "Kérjük, adja meg vezetéknevét.",
    prenom: "Kérjük, adja meg keresztnevét.",
    email: "Kérjük, adjon meg egy érvényes e-mail-címet.",
    profil: "Kérjük, válassza ki, kit képvisel.",
    objet: "Kérjük, adja meg üzenete tárgyát.",
    message: "Kérjük, írja meg üzenetét.",
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

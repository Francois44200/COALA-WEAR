import type { ContactCopy } from "../contact";
import { Link } from "@/i18n/Link";

const copy: ContactCopy = {
  eyebrow: "Ota yhteyttä",
  title: (
    <>
      Ota <em>yhteyttä</em>.
    </>
  ),
  lede: "Onko sinulla kysyttävää COALAsta tai tarvitsetko tarjouksen? Kirjoita meille, niin tiimimme vastaa sinulle nopeasti. Kun tilauksesi on vastaanotettu, voimme myös järjestää esittelyn videopuheluna englanniksi.",
  emailLabel: "Sähköposti",
  addressLabel: "Osoite",
  success: "Kiitos, viestisi on lähetetty. Vastaamme sinulle pian.",
  honeypot: "Älä täytä tätä kenttää",
  errorsOne: "Yksi kenttä on korjattava.",
  errorsMany: (n) => (n === 1 ? "Yksi kenttä on korjattava." : `${n} kenttää on korjattava.`),
  labels: {
    nom: "Sukunimi",
    prenom: "Etunimi",
    email: "Sähköposti",
    telephone: "Puhelin",
    profil: "Olet",
    objet: "Aihe",
    message: "Viesti",
  },
  profils: [
    { value: "Particulier", label: "Yksityishenkilö" },
    { value: "Professionnel", label: "Ammattilainen" },
    { value: "Presse", label: "Media" },
    { value: "Autre", label: "Muu" },
  ],
  messages: {
    nom: "Anna sukunimesi.",
    prenom: "Anna etunimesi.",
    email: "Anna kelvollinen sähköpostiosoite.",
    profil: "Valitse profiilisi.",
    objet: "Kirjoita viestisi aihe.",
    message: "Kirjoita viestisi.",
    rgpd: "Hyväksy tietojesi käyttö, jotta voimme vastata sinulle.",
  },
  consent: (
    <>
      Hyväksyn, että tietojani käytetään pyyntööni vastaamiseen. Lue lisää{" "}
      <Link page="privacy">tietosuojaselosteesta</Link>.
    </>
  ),
  sendError: "Lähetys epäonnistui. Yritä uudelleen tai lähetä meille sähköpostia osoitteeseen",
  sending: "Lähetetään…",
  send: "Lähetä",
  required: "* Pakolliset kentät",
};

export default copy;

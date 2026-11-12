import type { QuoteCopy } from "../quote";
import { Link } from "@/i18n/Link";

const copy: QuoteCopy = {
  eyebrow: "Ammattilaiset ja organisaatiot",
  title: (
    <>
      Pyydä tarjous<br /><em>tiimeillesi</em>.
    </>
  ),
  lede: "Täytä lomake, niin tiimimme lähettää sinulle räätälöidyn tarjouksen 48 työtunnin kuluessa.",
  success: "Kiitos, tarjouspyyntösi on lähetetty. Vastaamme 48 työtunnin kuluessa.",
  honeypot: "Älä täytä tätä kenttää",
  errorsOne: "Yksi kenttä on korjattava.",
  errorsMany: (n) => (n === 1 ? "Yksi kenttä on korjattava." : `${n} kenttää on korjattava.`),
  labels: {
    societe: "Organisaation nimi",
    contact: "Yhteyshenkilön nimi",
    email: "Sähköposti",
    adresse: "Organisaation osoite",
    quantite: "Tarvittava määrä",
    date: "Toivottu toimituspäivä",
    infos: "Lisätietoja",
  },
  messages: {
    societe: "Anna organisaatiosi nimi.",
    contact: "Anna yhteyshenkilön nimi.",
    email: "Anna kelvollinen sähköpostiosoite.",
    adresse: "Anna organisaatiosi osoite.",
    quantite: "Anna määrä, joka on vähintään 1.",
    date: "Anna tuleva toimituspäivä.",
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

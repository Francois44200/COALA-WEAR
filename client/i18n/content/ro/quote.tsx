import type { QuoteCopy } from "../quote";
import { Link } from "@/i18n/Link";

const plural = (n: number, one: string, many: string) =>
  n === 1 ? `1 ${one}` : n === 0 || (n % 100 >= 1 && n % 100 <= 19) ? `${n} ${many}` : `${n} de ${many}`;

const copy: QuoteCopy = {
  eyebrow: "Profesioniști și organizații",
  title: (
    <>
      Solicitați o ofertă<br />pentru <em>echipele</em> dumneavoastră.
    </>
  ),
  lede: "Completați formularul, iar echipa noastră vă va trimite o ofertă personalizată în maximum 48 de ore lucrătoare.",
  success: "Vă mulțumim, solicitarea de ofertă a fost trimisă. Vă vom răspunde în maximum 48 de ore lucrătoare.",
  honeypot: "Nu completați",
  errorsOne: "Un câmp trebuie corectat.",
  errorsMany: (n) => `${plural(n, "câmp", "câmpuri")} trebuie corectate.`,
  labels: {
    societe: "Numele organizației",
    contact: "Persoana de contact",
    email: "E-mail",
    adresse: "Adresa organizației",
    quantite: "Cantitatea dorită",
    date: "Data de livrare dorită",
    infos: "Informații suplimentare",
  },
  messages: {
    societe: "Vă rugăm să introduceți numele organizației.",
    contact: "Vă rugăm să introduceți numele persoanei de contact.",
    email: "Vă rugăm să introduceți o adresă de e-mail validă.",
    adresse: "Vă rugăm să introduceți adresa organizației.",
    quantite: "Vă rugăm să introduceți o cantitate de cel puțin 1.",
    date: "Vă rugăm să introduceți o dată de livrare în viitor.",
    rgpd: "Vă rugăm să vă dați acordul pentru utilizarea datelor, astfel încât să vă putem răspunde.",
  },
  consent: (
    <>
      Sunt de acord ca datele mele să fie utilizate pentru a răspunde solicitării mele. Consultați{" "}
      <Link page="privacy">politica de confidențialitate</Link>.
    </>
  ),
  sendError: "Trimiterea a eșuat. Vă rugăm să încercați din nou sau să ne scrieți la",
  sending: "Se trimite…",
  send: "Trimiteți",
  required: "* Câmpuri obligatorii",
};

export default copy;

import type { ContactCopy } from "../contact";
import { Link } from "@/i18n/Link";

const plural = (n: number, one: string, many: string) =>
  n === 1 ? `1 ${one}` : n === 0 || (n % 100 >= 1 && n % 100 <= 19) ? `${n} ${many}` : `${n} de ${many}`;

const copy: ContactCopy = {
  eyebrow: "Luați legătura cu noi",
  title: (
    <>
      Contactați-<em>ne</em>.
    </>
  ),
  lede: "Aveți o întrebare despre COALA sau aveți nevoie de o ofertă? Scrieți-ne, iar echipa noastră vă va răspunde rapid. După primirea comenzii, putem organiza și o demonstrație prin apel video, în limba engleză.",
  emailLabel: "E-mail",
  addressLabel: "Adresă",
  success: "Vă mulțumim, mesajul dumneavoastră a fost trimis. Vă vom răspunde în curând.",
  honeypot: "Nu completați",
  errorsOne: "Un câmp trebuie corectat.",
  errorsMany: (n) => `${plural(n, "câmp", "câmpuri")} trebuie corectate.`,
  labels: {
    nom: "Nume",
    prenom: "Prenume",
    email: "E-mail",
    telephone: "Telefon",
    profil: "Sunteți",
    objet: "Subiect",
    message: "Mesaj",
  },
  profils: [
    { value: "Particulier", label: "Persoană fizică" },
    { value: "Professionnel", label: "Profesionist" },
    { value: "Presse", label: "Presă" },
    { value: "Autre", label: "Altceva" },
  ],
  messages: {
    nom: "Vă rugăm să introduceți numele.",
    prenom: "Vă rugăm să introduceți prenumele.",
    email: "Vă rugăm să introduceți o adresă de e-mail validă.",
    profil: "Vă rugăm să selectați profilul dumneavoastră.",
    objet: "Vă rugăm să introduceți subiectul mesajului.",
    message: "Vă rugăm să scrieți mesajul.",
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

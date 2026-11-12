import { Link } from "@/i18n/Link";
import type { ContactCopy } from "../contact";

const plural = (n: number, one: string, few: string, many: string) => {
  if (n === 1) return one;
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
};

const copy: ContactCopy = {
  eyebrow: "Kontakt",
  title: (
    <>
      Skontaktujcie się <em>z nami</em>.
    </>
  ),
  lede: "Macie pytanie o COALA lub potrzebujecie oferty? Napiszcie do nas – nasz zespół szybko odpowie. Po otrzymaniu zamówienia możemy również zorganizować demonstrację w formie wideorozmowy, w języku angielskim.",
  emailLabel: "E-mail",
  addressLabel: "Adres",
  success: "Dziękujemy, wiadomość została wysłana. Wkrótce się odezwiemy.",
  honeypot: "Nie wypełniać",
  errorsOne: "Jedno pole wymaga poprawienia.",
  errorsMany: (n) => `${n} ${plural(n, "pole wymaga", "pola wymagają", "pól wymaga")} poprawienia.`,
  labels: {
    nom: "Nazwisko",
    prenom: "Imię",
    email: "E-mail",
    telephone: "Telefon",
    profil: "Kim jesteście?",
    objet: "Temat",
    message: "Wiadomość",
  },
  profils: [
    { value: "Particulier", label: "Osoba prywatna" },
    { value: "Professionnel", label: "Profesjonalista" },
    { value: "Presse", label: "Prasa" },
    { value: "Autre", label: "Inne" },
  ],
  messages: {
    nom: "Proszę podać nazwisko.",
    prenom: "Proszę podać imię.",
    email: "Proszę podać prawidłowy adres e-mail.",
    profil: "Proszę wybrać profil.",
    objet: "Proszę podać temat wiadomości.",
    message: "Proszę wpisać wiadomość.",
    rgpd: "Aby umożliwić nam odpowiedź, prosimy o zgodę na wykorzystanie danych.",
  },
  consent: (
    <>
      Wyrażam zgodę na wykorzystanie moich danych w celu udzielenia odpowiedzi na moje zapytanie. Więcej informacji
      w <Link page="privacy">polityce prywatności</Link>.
    </>
  ),
  sendError: "Wysyłanie nie powiodło się. Prosimy spróbować ponownie lub napisać na adres",
  sending: "Wysyłanie…",
  send: "Wyślij",
  required: "* Pola obowiązkowe",
};

export default copy;

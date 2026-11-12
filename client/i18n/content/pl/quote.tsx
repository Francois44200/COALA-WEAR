import { Link } from "@/i18n/Link";
import type { QuoteCopy } from "../quote";

const plural = (n: number, one: string, few: string, many: string) => {
  if (n === 1) return one;
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
};

const copy: QuoteCopy = {
  eyebrow: "Profesjonaliści i placówki",
  title: (
    <>
      Zapytaj o ofertę<br />dla swoich <em>zespołów</em>.
    </>
  ),
  lede: "Wystarczy wypełnić formularz – nasz zespół prześle indywidualną ofertę w ciągu 48 godzin roboczych.",
  success: "Dziękujemy, zapytanie ofertowe zostało wysłane. Odpowiemy w ciągu 48 godzin roboczych.",
  honeypot: "Nie wypełniać",
  errorsOne: "Jedno pole wymaga poprawienia.",
  errorsMany: (n) => `${n} ${plural(n, "pole wymaga", "pola wymagają", "pól wymaga")} poprawienia.`,
  labels: {
    societe: "Nazwa placówki/organizacji",
    contact: "Osoba kontaktowa",
    email: "E-mail",
    adresse: "Adres placówki/organizacji",
    quantite: "Potrzebna liczba sztuk",
    date: "Preferowany termin dostawy",
    infos: "Dodatkowe informacje",
  },
  messages: {
    societe: "Proszę podać nazwę placówki lub organizacji.",
    contact: "Proszę podać imię i nazwisko osoby kontaktowej.",
    email: "Proszę podać prawidłowy adres e-mail.",
    adresse: "Proszę podać adres placówki lub organizacji.",
    quantite: "Proszę podać liczbę sztuk (co najmniej 1).",
    date: "Proszę podać przyszłą datę dostawy.",
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

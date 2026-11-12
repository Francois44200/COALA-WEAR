import type { QuoteCopy } from "../quote";
import { Link } from "@/i18n/Link";

const copy: QuoteCopy = {
  eyebrow: "Professionisti e strutture",
  title: (
    <>
      Richieda un preventivo<br />per i Suoi <em>team</em>.
    </>
  ),
  lede: "Compili il modulo e il nostro team Le invierà un preventivo su misura entro 48 ore lavorative.",
  success: "Grazie, la Sua richiesta di preventivo è stata inviata. Le risponderemo entro 48 ore lavorative.",
  honeypot: "Non compilare",
  errorsOne: "Un campo deve essere corretto.",
  errorsMany: (n) => (n === 1 ? "Un campo deve essere corretto." : `${n} campi devono essere corretti.`),
  labels: {
    societe: "Nome della struttura",
    contact: "Nome del referente",
    email: "E-mail",
    adresse: "Indirizzo della struttura",
    quantite: "Quantità richiesta",
    date: "Data di consegna desiderata",
    infos: "Informazioni aggiuntive",
  },
  messages: {
    societe: "Inserisca il nome della Sua struttura.",
    contact: "Inserisca il nome del referente.",
    email: "Inserisca un indirizzo e-mail valido.",
    adresse: "Inserisca l’indirizzo della Sua struttura.",
    quantite: "Inserisca una quantità pari ad almeno 1.",
    date: "Inserisca una data di consegna futura.",
    rgpd: "Acconsenta all’utilizzo dei Suoi dati affinché possiamo risponderLe.",
  },
  consent: (
    <>
      Acconsento all’utilizzo dei miei dati per rispondere alla mia richiesta. Si veda l’
      <Link page="privacy">informativa sulla privacy</Link>.
    </>
  ),
  sendError: "Invio non riuscito. Riprovi oppure ci scriva all’indirizzo",
  sending: "Invio in corso…",
  send: "Invia",
  required: "* Campi obbligatori",
};

export default copy;

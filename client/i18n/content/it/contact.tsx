import type { ContactCopy } from "../contact";
import { Link } from "@/i18n/Link";

const copy: ContactCopy = {
  eyebrow: "Mettiamoci in contatto",
  title: (
    <>
      <em>Contattaci</em>.
    </>
  ),
  lede: "Ha una domanda su COALA o desidera un preventivo? Ci scriva e il nostro team Le risponderà rapidamente. Una volta ricevuto l’ordine, possiamo anche organizzare una dimostrazione in videochiamata, in inglese.",
  emailLabel: "E-mail",
  addressLabel: "Indirizzo",
  success: "Grazie, il Suo messaggio è stato inviato. Le risponderemo al più presto.",
  honeypot: "Non compilare",
  errorsOne: "Un campo deve essere corretto.",
  errorsMany: (n) => (n === 1 ? "Un campo deve essere corretto." : `${n} campi devono essere corretti.`),
  labels: {
    nom: "Cognome",
    prenom: "Nome",
    email: "E-mail",
    telephone: "Telefono",
    profil: "Lei è",
    objet: "Oggetto",
    message: "Messaggio",
  },
  profils: [
    { value: "Particulier", label: "Un privato" },
    { value: "Professionnel", label: "Un professionista" },
    { value: "Presse", label: "Stampa" },
    { value: "Autre", label: "Altro" },
  ],
  messages: {
    nom: "Inserisca il Suo cognome.",
    prenom: "Inserisca il Suo nome.",
    email: "Inserisca un indirizzo e-mail valido.",
    profil: "Selezioni il Suo profilo.",
    objet: "Inserisca l’oggetto del messaggio.",
    message: "Scriva il Suo messaggio.",
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

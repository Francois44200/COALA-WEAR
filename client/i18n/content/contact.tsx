import { collect } from "../collect";
import type { ReactNode } from "react";
import { Link } from "@/i18n/Link";

export type ContactField = "nom" | "prenom" | "email" | "profil" | "objet" | "message" | "rgpd";

export type ContactCopy = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  emailLabel: string;
  addressLabel: string;
  success: string;
  honeypot: string;
  errorsOne: string;
  errorsMany: (n: number) => string;
  labels: {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    profil: string;
    objet: string;
    message: string;
  };
  /** `value` is what Netlify stores; kept stable across locales. `label` is displayed. */
  profils: { value: string; label: string }[];
  messages: Record<ContactField, string>;
  consent: ReactNode;
  sendError: string;
  sending: string;
  send: string;
  required: string;
};

const en: ContactCopy = {
  eyebrow: "Get in touch",
  title: (
    <>
      Contact <em>us</em>.
    </>
  ),
  // TODO-EN: adapted. The French mentions "a quote or a demonstration"; demonstrations are by video call, in English, once the order has been received.
  lede: "Have a question about COALA or need a quote? Write to us and our team will get back to you quickly. Once your order has been received, we can also arrange a demonstration by video call, in English.",
  emailLabel: "Email",
  addressLabel: "Address",
  success: "Thank you, your message has been sent. We will get back to you shortly.",
  honeypot: "Do not fill in",
  errorsOne: "One field needs correcting.",
  errorsMany: (n) => `${n} fields need correcting.`,
  labels: {
    nom: "Surname",
    prenom: "First name",
    email: "Email",
    telephone: "Phone",
    profil: "You are",
    objet: "Subject",
    message: "Message",
  },
  // TODO-EN: submitted values kept in French so the French team sees consistent data in Netlify; only labels are translated.
  profils: [
    { value: "Particulier", label: "An individual" },
    { value: "Professionnel", label: "A professional" },
    { value: "Presse", label: "Press" },
    { value: "Autre", label: "Other" },
  ],
  messages: {
    nom: "Please enter your surname.",
    prenom: "Please enter your first name.",
    email: "Please enter a valid email address.",
    profil: "Please select your profile.",
    objet: "Please enter the subject of your message.",
    message: "Please write your message.",
    rgpd: "Please agree to the use of your data so that we can reply to you.",
  },
  consent: (
    <>
      I agree that my data may be used to respond to my request. See the{" "}
      <Link page="privacy">privacy policy</Link>.
    </>
  ),
  sendError: "Sending failed. Please try again or email us at",
  sending: "Sending…",
  send: "Send",
  required: "* Required fields",
};

export const CONTACT = {
  ...collect<ContactCopy>(import.meta.glob("./*/contact.tsx", { eager: true, import: "default" })),
  en,
};

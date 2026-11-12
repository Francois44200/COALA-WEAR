import { collect } from "../collect";
import type { ReactNode } from "react";
import { Link } from "@/i18n/Link";

export type QuoteField = "societe" | "contact" | "email" | "adresse" | "quantite" | "date" | "rgpd";

export type QuoteCopy = {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  success: string;
  honeypot: string;
  errorsOne: string;
  errorsMany: (n: number) => string;
  labels: Record<Exclude<QuoteField, "rgpd">, string> & { infos: string };
  messages: Record<QuoteField, string>;
  consent: ReactNode;
  sendError: string;
  sending: string;
  send: string;
  required: string;
};

const en: QuoteCopy = {
  eyebrow: "Professionals & organisations",
  title: (
    <>
      Request a quote<br />for your <em>teams</em>.
    </>
  ),
  lede: "Fill in the form and our team will reply with a tailored quote within 48 working hours.",
  success: "Thank you, your quote request has been sent. We will reply within 48 working hours.",
  honeypot: "Do not fill in",
  errorsOne: "One field needs correcting.",
  errorsMany: (n) => `${n} fields need correcting.`,
  labels: {
    // TODO-EN: "société" rendered as "organisation" to cover care homes and home care services, not only companies.
    societe: "Organisation name",
    contact: "Contact name",
    email: "Email",
    adresse: "Organisation address",
    quantite: "Quantity required",
    date: "Preferred delivery date",
    infos: "Additional information",
  },
  messages: {
    societe: "Please enter the name of your organisation.",
    contact: "Please enter the contact name.",
    email: "Please enter a valid email address.",
    adresse: "Please enter your organisation's address.",
    quantite: "Please enter a quantity of at least 1.",
    date: "Please enter a delivery date in the future.",
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

export const QUOTE = {
  ...collect<QuoteCopy>(import.meta.glob("./*/quote.tsx", { eager: true, import: "default" })),
  en,
};

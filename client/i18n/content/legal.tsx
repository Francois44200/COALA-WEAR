import { collect } from "../collect";
import type { ReactNode } from "react";

export type LegalCopy = {
  title: string;
  intro: ReactNode;
  publisherHeading: string;
  legalForm: string;
  registeredOffice: string;
  premises: string;
  registration: string;
  vat: string;
  director: string;
  directorRole: string;
  emailLabel: string;
  hostHeading: string;
  hostText: string;
  ipHeading: string;
  ipText: string;
};

const en: LegalCopy = {
  title: "Legal notice",
  // TODO-EN: added sentence (website name + applicable French law, LCEN) as requested for the international site.
  intro: (
    <>
      The website <strong>coalawear.com</strong> is published by Connect Link SAS, a company governed by French law. This
      legal notice is provided in accordance with French Law No. 2004-575 of 21 June 2004 on confidence in the digital
      economy (LCEN).
    </>
  ),
  publisherHeading: "Publisher",
  legalForm: "Simplified joint-stock company (SAS) under French law",
  registeredOffice: "Registered office",
  premises: "Premises",
  registration: "Registered with the Nantes Trade and Companies Register (RCS) under number",
  vat: "EU VAT number",
  director: "Publication director",
  directorRole: "President",
  emailLabel: "Email",
  hostHeading: "Hosting",
  hostText: "This website is hosted by",
  ipHeading: "Intellectual property",
  ipText:
    "All content on this website (text, images, trademarks) is the property of Connect Link. Any reproduction is prohibited without prior written permission.",
};

export const LEGAL = {
  ...collect<LegalCopy>(import.meta.glob("./*/legal.tsx", { eager: true, import: "default" })),
  en,
};

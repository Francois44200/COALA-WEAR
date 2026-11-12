import type { Locale } from "../locales";

export type NavCopy = {
  product: string;
  howItWorks: string;
  teams: string;
  results: string;
  faq: string;
  quote: string;
  order: string;
  by: string;
  mainNav: string;
  home: string;
  language: string;
};

export const NAV: Record<Exclude<Locale, "fr">, NavCopy> = {
  en: { product: "Our products", howItWorks: "How it works", teams: "For professionals", results: "Testimonials", faq: "FAQ", quote: "Request a quote", order: "Order COALA", by: "by Connect Link", mainNav: "Main navigation", home: "COALA – Home", language: "Language" },
  de: { product: "Unsere Produkte", howItWorks: "So funktioniert es", teams: "Für Profis", results: "Erfahrungen", faq: "FAQ", quote: "Angebot anfordern", order: "COALA bestellen", by: "von Connect Link", mainNav: "Hauptnavigation", home: "COALA – Startseite", language: "Sprache" },
  es: { product: "Nuestros productos", howItWorks: "Cómo funciona", teams: "Para profesionales", results: "Testimonios", faq: "FAQ", quote: "Solicitar presupuesto", order: "Pedir COALA", by: "por Connect Link", mainNav: "Navegación principal", home: "COALA – Inicio", language: "Idioma" },
  it: { product: "I nostri prodotti", howItWorks: "Come funziona", teams: "Per i professionisti", results: "Testimonianze", faq: "FAQ", quote: "Richiedi un preventivo", order: "Ordina COALA", by: "di Connect Link", mainNav: "Navigazione principale", home: "COALA – Home", language: "Lingua" },
  nl: { product: "Onze producten", howItWorks: "Hoe het werkt", teams: "Voor professionals", results: "Ervaringen", faq: "FAQ", quote: "Offerte aanvragen", order: "COALA bestellen", by: "door Connect Link", mainNav: "Hoofdnavigatie", home: "COALA – Home", language: "Taal" },
  pt: { product: "Os nossos produtos", howItWorks: "Como funciona", teams: "Para profissionais", results: "Testemunhos", faq: "FAQ", quote: "Pedir orçamento", order: "Encomendar COALA", by: "por Connect Link", mainNav: "Navegação principal", home: "COALA – Início", language: "Idioma" },
  pl: { product: "Nasze produkty", howItWorks: "Jak to działa", teams: "Dla profesjonalistów", results: "Opinie", faq: "FAQ", quote: "Zapytaj o ofertę", order: "Zamów COALA", by: "od Connect Link", mainNav: "Nawigacja główna", home: "COALA – Strona główna", language: "Język" },
  da: { product: "Vores produkter", howItWorks: "Sådan virker det", teams: "Til fagfolk", results: "Udtalelser", faq: "FAQ", quote: "Anmod om tilbud", order: "Bestil COALA", by: "fra Connect Link", mainNav: "Hovednavigation", home: "COALA – Forside", language: "Sprog" },
  fi: { product: "Tuotteemme", howItWorks: "Näin se toimii", teams: "Ammattilaisille", results: "Kokemuksia", faq: "UKK", quote: "Pyydä tarjous", order: "Tilaa COALA", by: "Connect Linkiltä", mainNav: "Päävalikko", home: "COALA – Etusivu", language: "Kieli" },
  no: { product: "Våre produkter", howItWorks: "Slik fungerer det", teams: "For fagfolk", results: "Erfaringer", faq: "FAQ", quote: "Be om tilbud", order: "Bestill COALA", by: "fra Connect Link", mainNav: "Hovednavigasjon", home: "COALA – Forside", language: "Språk" },
  sv: { product: "Våra produkter", howItWorks: "Så fungerar det", teams: "För yrkesverksamma", results: "Omdömen", faq: "FAQ", quote: "Begär offert", order: "Beställ COALA", by: "från Connect Link", mainNav: "Huvudnavigering", home: "COALA – Startsida", language: "Språk" },
  hu: { product: "Termékeink", howItWorks: "Hogyan működik", teams: "Szakembereknek", results: "Vélemények", faq: "GYIK", quote: "Árajánlatkérés", order: "COALA rendelése", by: "a Connect Linktől", mainNav: "Főmenü", home: "COALA – Főoldal", language: "Nyelv" },
  ro: { product: "Produsele noastre", howItWorks: "Cum funcționează", teams: "Pentru profesioniști", results: "Testimoniale", faq: "FAQ", quote: "Solicită o ofertă", order: "Comandă COALA", by: "de Connect Link", mainNav: "Navigație principală", home: "COALA – Acasă", language: "Limbă" },
  el: { product: "Τα προϊόντα μας", howItWorks: "Πώς λειτουργεί", teams: "Για επαγγελματίες", results: "Μαρτυρίες", faq: "FAQ", quote: "Ζητήστε προσφορά", order: "Παραγγελία COALA", by: "από την Connect Link", mainNav: "Κύρια πλοήγηση", home: "COALA – Αρχική", language: "Γλώσσα" },
};

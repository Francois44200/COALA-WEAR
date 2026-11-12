import { LOCALES, DEFAULT_LOCALE, FR_SITE_URL, isHostedLocale, type Locale } from "./locales";

export const SITE_URL = "https://coalawear.com";

export const PAGE_KEYS = [
  "home",
  "product",
  "family",
  "teams",
  "howItWorks",
  "results",
  "explained",
  "faq",
  "about",
  "contact",
  "quote",
  "legal",
  "privacy",
] as const;

export type PageKey = (typeof PAGE_KEYS)[number];

type Slugs = Record<Exclude<PageKey, "home">, string>;

// Slugs are ASCII-only (diacritics stripped, Greek transliterated).
export const SLUGS: Record<Locale, Slugs> = {
  en: {
    product: "coala-transfer-garment", family: "family-caregivers", teams: "care-teams", howItWorks: "how-it-works",
    results: "results-and-recognition", explained: "coala-explained", faq: "faq", about: "about", contact: "contact",
    quote: "request-a-quote", legal: "legal-notice", privacy: "privacy-policy",
  },
  fr: {
    product: "la-blouse-coala", family: "j-aide-un-proche", teams: "j-equipe-une-equipe", howItWorks: "comment-ca-marche",
    results: "preuves-resultats", explained: "questions-sur-coala", faq: "faq", about: "a-propos", contact: "contact",
    quote: "devis", legal: "mentions-legales", privacy: "politique-confidentialite",
  },
  de: {
    product: "coala-transferkleidung", family: "pflegende-angehoerige", teams: "pflegeteams", howItWorks: "so-funktioniert-es",
    results: "ergebnisse-und-auszeichnungen", explained: "coala-erklaert", faq: "faq", about: "ueber-uns", contact: "kontakt",
    quote: "angebot-anfordern", legal: "impressum", privacy: "datenschutz",
  },
  es: {
    product: "prenda-de-transferencia-coala", family: "cuidadores-familiares", teams: "equipos-de-cuidado", howItWorks: "como-funciona",
    results: "resultados-y-reconocimientos", explained: "coala-explicado", faq: "preguntas-frecuentes", about: "sobre-nosotros", contact: "contacto",
    quote: "solicitar-presupuesto", legal: "aviso-legal", privacy: "politica-de-privacidad",
  },
  it: {
    product: "indumento-di-trasferimento-coala", family: "caregiver-familiari", teams: "team-di-assistenza", howItWorks: "come-funziona",
    results: "risultati-e-riconoscimenti", explained: "coala-spiegato", faq: "domande-frequenti", about: "chi-siamo", contact: "contatti",
    quote: "richiedi-preventivo", legal: "note-legali", privacy: "informativa-privacy",
  },
  nl: {
    product: "coala-transferkleding", family: "mantelzorgers", teams: "zorgteams", howItWorks: "hoe-het-werkt",
    results: "resultaten-en-erkenning", explained: "coala-uitgelegd", faq: "veelgestelde-vragen", about: "over-ons", contact: "contact",
    quote: "offerte-aanvragen", legal: "juridische-informatie", privacy: "privacybeleid",
  },
  pt: {
    product: "vestuario-de-transferencia-coala", family: "cuidadores-familiares", teams: "equipas-de-cuidados", howItWorks: "como-funciona",
    results: "resultados-e-reconhecimento", explained: "coala-explicado", faq: "perguntas-frequentes", about: "sobre-nos", contact: "contacto",
    quote: "pedir-orcamento", legal: "aviso-legal", privacy: "politica-de-privacidade",
  },
  pl: {
    product: "odziez-transferowa-coala", family: "opiekunowie-rodzinni", teams: "zespoly-opieki", howItWorks: "jak-to-dziala",
    results: "wyniki-i-wyroznienia", explained: "coala-wyjasnienie", faq: "faq", about: "o-nas", contact: "kontakt",
    quote: "zapytanie-ofertowe", legal: "nota-prawna", privacy: "polityka-prywatnosci",
  },
  da: {
    product: "coala-forflytningstoej", family: "paaroerende", teams: "plejeteams", howItWorks: "saadan-virker-det",
    results: "resultater-og-anerkendelse", explained: "coala-forklaret", faq: "faq", about: "om-os", contact: "kontakt",
    quote: "anmod-om-tilbud", legal: "juridisk-information", privacy: "privatlivspolitik",
  },
  fi: {
    product: "coala-siirtovaate", family: "omaishoitajat", teams: "hoitotiimit", howItWorks: "nain-se-toimii",
    results: "tulokset-ja-tunnustukset", explained: "coala-selitettyna", faq: "ukk", about: "meista", contact: "yhteystiedot",
    quote: "pyyda-tarjous", legal: "oikeudelliset-tiedot", privacy: "tietosuojaseloste",
  },
  no: {
    product: "coala-forflytningsplagg", family: "parorende", teams: "pleieteam", howItWorks: "slik-fungerer-det",
    results: "resultater-og-anerkjennelse", explained: "coala-forklart", faq: "faq", about: "om-oss", contact: "kontakt",
    quote: "be-om-tilbud", legal: "juridisk-informasjon", privacy: "personvern",
  },
  sv: {
    product: "coala-forflyttningsplagg", family: "anhorigvardare", teams: "vardteam", howItWorks: "sa-fungerar-det",
    results: "resultat-och-utmarkelser", explained: "coala-forklarat", faq: "vanliga-fragor", about: "om-oss", contact: "kontakt",
    quote: "begar-offert", legal: "juridisk-information", privacy: "integritetspolicy",
  },
  hu: {
    product: "coala-transzferruha", family: "csaladi-gondozok", teams: "apolocsapatok", howItWorks: "hogyan-mukodik",
    results: "eredmenyek-es-elismeresek", explained: "a-coala-reszletesen", faq: "gyik", about: "rolunk", contact: "kapcsolat",
    quote: "arajanlatkeres", legal: "jogi-nyilatkozat", privacy: "adatvedelem",
  },
  ro: {
    product: "imbracaminte-de-transfer-coala", family: "ingrijitori-familiali", teams: "echipe-de-ingrijire", howItWorks: "cum-functioneaza",
    results: "rezultate-si-distinctii", explained: "coala-explicat", faq: "intrebari-frecvente", about: "despre-noi", contact: "contact",
    quote: "solicita-oferta", legal: "informatii-legale", privacy: "politica-de-confidentialitate",
  },
  el: {
    product: "coala-endyma-metaforas", family: "frontistes-oikogeneias", teams: "omades-frontidas", howItWorks: "pos-leitourgei",
    results: "apotelesmata-kai-diakriseis", explained: "coala-analytika", faq: "syxnes-erotiseis", about: "schetika-me-emas", contact: "epikoinonia",
    quote: "aitima-prosforas", legal: "nomiki-simeiosi", privacy: "politiki-aporritou",
  },
};

/** Pages with hreflang alternates and a sitemap entry. */
export const INDEXABLE_PAGES: PageKey[] = PAGE_KEYS.filter((k) => k !== "legal" && k !== "privacy");

export function pathFor(page: PageKey, locale: Locale): string {
  return page === "home" ? `/${locale}/` : `/${locale}/${SLUGS[locale][page]}`;
}

export function urlFor(page: PageKey, locale: Locale): string {
  if (locale === "fr") return FR_SITE_URL + (page === "home" ? "/" : `/${SLUGS.fr[page]}`);
  return SITE_URL + pathFor(page, locale);
}

export function localeFromPath(pathname: string): Locale {
  const first = pathname.split("/")[1];
  return isHostedLocale(first) ? first : DEFAULT_LOCALE;
}

export function alternatesFor(page: PageKey) {
  return [
    ...LOCALES.map((locale) => ({ hreflang: locale, href: urlFor(page, locale) })),
    { hreflang: "x-default", href: urlFor(page, DEFAULT_LOCALE) },
  ];
}

export const LOCALES = ["en", "fr", "de", "es", "it", "nl", "pt", "pl", "da", "fi", "no", "sv", "hu", "ro", "el"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

// French is served by the original site, not by coalawear.com.
export const FR_SITE_URL = "https://blousecoala.fr";

export const HOSTED_LOCALES = LOCALES.filter((l) => l !== "fr");

export const isHostedLocale = (value: string | undefined | null): value is Locale =>
  !!value && value !== "fr" && (LOCALES as readonly string[]).includes(value);

export const LOCALE_COOKIE = "coala_lang";

type LocaleInfo = {
  /** Native name shown in the language switcher. */
  name: string;
  /** Value for <html lang>. */
  htmlLang: string;
  ogLocale: string;
};

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  en: { name: "English", htmlLang: "en-GB", ogLocale: "en_GB" },
  fr: { name: "Français", htmlLang: "fr-FR", ogLocale: "fr_FR" },
  de: { name: "Deutsch", htmlLang: "de-DE", ogLocale: "de_DE" },
  es: { name: "Español", htmlLang: "es-ES", ogLocale: "es_ES" },
  it: { name: "Italiano", htmlLang: "it-IT", ogLocale: "it_IT" },
  nl: { name: "Nederlands", htmlLang: "nl-NL", ogLocale: "nl_NL" },
  pt: { name: "Português", htmlLang: "pt-PT", ogLocale: "pt_PT" },
  pl: { name: "Polski", htmlLang: "pl-PL", ogLocale: "pl_PL" },
  da: { name: "Dansk", htmlLang: "da-DK", ogLocale: "da_DK" },
  fi: { name: "Suomi", htmlLang: "fi-FI", ogLocale: "fi_FI" },
  no: { name: "Norsk", htmlLang: "nb-NO", ogLocale: "nb_NO" },
  sv: { name: "Svenska", htmlLang: "sv-SE", ogLocale: "sv_SE" },
  hu: { name: "Magyar", htmlLang: "hu-HU", ogLocale: "hu_HU" },
  ro: { name: "Română", htmlLang: "ro-RO", ogLocale: "ro_RO" },
  el: { name: "Ελληνικά", htmlLang: "el-GR", ogLocale: "el_GR" },
};

export const isLocale = (value: string | undefined | null): value is Locale =>
  !!value && (LOCALES as readonly string[]).includes(value);

const COUNTRY_LOCALES: Record<string, Locale[]> = {
  GB: ["en"], IE: ["en"], MT: ["en"],
  FR: ["fr"], MC: ["fr"], LU: ["fr", "de"], BE: ["nl", "fr", "de"], CH: ["de", "fr", "it"],
  DE: ["de"], AT: ["de"], LI: ["de"],
  ES: ["es"], AD: ["es"],
  IT: ["it"], SM: ["it"], VA: ["it"],
  NL: ["nl"],
  PT: ["pt"],
  PL: ["pl"],
  DK: ["da"], GL: ["da"], FO: ["da"],
  FI: ["fi", "sv"],
  NO: ["no"],
  SE: ["sv"],
  HU: ["hu"],
  RO: ["ro"], MD: ["ro"],
  GR: ["el"], CY: ["el"],
};

const BROWSER_ALIASES: Record<string, Locale> = { nb: "no", nn: "no" };

function parseAcceptLanguage(header: string | null | undefined): Locale[] {
  if (!header) return [];
  return header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { base: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .map(({ base }) => BROWSER_ALIASES[base] ?? base)
    .filter(isLocale);
}

/** Saved choice > country (IP) > browser language > English. */
export function detectLocale(opts: {
  saved?: string | null;
  country?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  if (isLocale(opts.saved)) return opts.saved;
  const browser = parseAcceptLanguage(opts.acceptLanguage);
  const countryLocales = opts.country ? COUNTRY_LOCALES[opts.country.toUpperCase()] : undefined;
  if (countryLocales) {
    return browser.find((l) => countryLocales.includes(l)) ?? countryLocales[0];
  }
  return browser[0] ?? DEFAULT_LOCALE;
}

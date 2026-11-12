import { useLocale } from "./LocaleContext";
import type { Locale } from "./locales";

/** Returns the copy for the current locale, falling back to English until a translation exists. */
export function useCopy<T>(dict: Partial<Record<Locale, T>> & { en: T }): T {
  const { locale } = useLocale();
  return dict[locale] ?? dict.en;
}

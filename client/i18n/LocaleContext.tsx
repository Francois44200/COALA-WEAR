import { createContext, useContext, type ReactNode } from "react";
import { DEFAULT_LOCALE, type Locale } from "./locales";
import type { PageKey } from "./routes";

type LocaleState = { locale: Locale; page: PageKey | null };

const LocaleContext = createContext<LocaleState>({ locale: DEFAULT_LOCALE, page: null });

export function LocaleProvider({ locale, page, children }: LocaleState & { children: ReactNode }) {
  return <LocaleContext.Provider value={{ locale, page }}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);

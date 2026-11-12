import type { Locale } from "./locales";

type Modules = Record<string, unknown>;

/** Turns an eager import.meta.glob result ("./de/home.tsx" -> default export) into { de: ... }. */
export function collect<T>(modules: Modules): Partial<Record<Locale, T>> {
  const out: Partial<Record<Locale, T>> = {};
  for (const [path, mod] of Object.entries(modules)) {
    const locale = path.split("/").slice(-2)[0] as Locale;
    out[locale] = mod as T;
  }
  return out;
}

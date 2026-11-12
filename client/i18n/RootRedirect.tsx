import { Navigate } from "react-router-dom";
import { FR_SITE_URL, LOCALE_COOKIE, detectLocale } from "./locales";
import { pathFor } from "./routes";

// In production the Netlify edge function answers "/" first (with IP country); this is the browser-only fallback.
export function RootRedirect() {
  const saved = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]*)`))?.[1];
  const locale = detectLocale({ saved, acceptLanguage: navigator.languages.join(",") });
  if (locale === "fr") {
    window.location.replace(FR_SITE_URL + "/");
    return null;
  }
  return <Navigate to={pathFor("home", locale)} replace />;
}

export function rememberLocale(locale: string) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

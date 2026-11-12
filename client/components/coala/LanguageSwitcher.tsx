import { Link } from "react-router-dom";
import { Check, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "@/i18n/LocaleContext";
import { LOCALES, LOCALE_INFO } from "@/i18n/locales";
import { pathFor, urlFor } from "@/i18n/routes";
import { rememberLocale } from "@/i18n/RootRedirect";
import { useCopy } from "@/i18n/useCopy";
import { NAV } from "@/i18n/content/nav";

export function LanguageSwitcher() {
  const { locale, page } = useLocale();
  const t = useCopy(NAV);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="c-lang" aria-label={`${t.language}: ${LOCALE_INFO[locale].name}`}>
        <Globe size={16} strokeWidth={1.6} aria-hidden="true" />
        <span>{locale.toUpperCase()}</span>
        <ChevronDown size={14} strokeWidth={1.8} aria-hidden="true" className="c-lang__chevron" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="c-lang__menu">
        {LOCALES.map((l) => {
          const label = (
            <>
              <span className="c-lang__code">{l.toUpperCase()}</span>
              <span className="c-lang__name">{LOCALE_INFO[l].name}</span>
              {l === locale && <Check size={14} aria-hidden="true" className="c-lang__check" />}
            </>
          );
          const common = {
            hrefLang: l,
            lang: LOCALE_INFO[l].htmlLang,
            "aria-current": l === locale ? ("true" as const) : undefined,
            onClick: () => rememberLocale(l),
          };
          return (
            <DropdownMenuItem key={l} asChild className="c-lang__item">
              {l === "fr" ? (
                <a href={urlFor(page ?? "home", l)} {...common}>{label}</a>
              ) : (
                <Link to={pathFor(page ?? "home", l)} {...common}>{label}</Link>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

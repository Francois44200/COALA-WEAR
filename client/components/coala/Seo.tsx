import { Helmet } from "react-helmet-async";
import { DEFAULT_OG_IMAGE, NOINDEX_PAGES, jsonLdFor, metaFor } from "@/seo/pages";
import { useLocale } from "@/i18n/LocaleContext";
import { LOCALES, LOCALE_INFO } from "@/i18n/locales";
import { INDEXABLE_PAGES, alternatesFor, urlFor, type PageKey } from "@/i18n/routes";

export function Seo({ page }: { page: PageKey }) {
  const { locale } = useLocale();
  const { title, description } = metaFor(page, locale);
  const url = urlFor(page, locale);
  const hasAlternates = INDEXABLE_PAGES.includes(page);

  return (
    <Helmet htmlAttributes={{ lang: LOCALE_INFO[locale].htmlLang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {NOINDEX_PAGES.includes(page) && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={url} />
      {hasAlternates &&
        alternatesFor(page).map((alt) => (
          <link key={alt.hreflang} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
        ))}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="COALA" />
      <meta property="og:locale" content={LOCALE_INFO[locale].ogLocale} />
      {hasAlternates &&
        LOCALES.filter((l) => l !== locale).map((l) => (
          <meta key={l} property="og:locale:alternate" content={LOCALE_INFO[l].ogLocale} />
        ))}
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(jsonLdFor(page, locale))}</script>
    </Helmet>
  );
}

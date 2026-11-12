import { renderToString } from "react-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { Seo } from "@/components/coala/Seo";
import { LocaleProvider } from "@/i18n/LocaleContext";
import { FR_SITE_URL, HOSTED_LOCALES, type Locale } from "@/i18n/locales";
import { INDEXABLE_PAGES, PAGE_KEYS, alternatesFor, pathFor, urlFor, type PageKey } from "@/i18n/routes";

const PRIVACY_POLICY_URL = "https://shop.connectlink.fr/policies/privacy-policy";

export const entries = HOSTED_LOCALES.flatMap((locale) =>
  PAGE_KEYS.filter((page) => page !== "privacy").map((page) => ({ locale, page, path: pathFor(page, locale) })),
);

export function renderHead(page: PageKey, locale: Locale) {
  const context: { helmet?: HelmetServerState } = {};
  renderToString(
    <HelmetProvider context={context}>
      <LocaleProvider locale={locale} page={page}>
        <Seo page={page} />
      </LocaleProvider>
    </HelmetProvider>,
  );
  const h = context.helmet!;
  return {
    head: [h.title, h.meta, h.link, h.script].map((part) => part.toString()).filter(Boolean).join("\n    "),
    htmlAttributes: h.htmlAttributes.toString(),
  };
}

export function sitemapXml(): string {
  const urls = INDEXABLE_PAGES.flatMap((page) =>
    HOSTED_LOCALES.map((locale) => {
      const links = alternatesFor(page)
        .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`)
        .join("\n");
      return `  <url>\n    <loc>${urlFor(page, locale)}</loc>\n${links}\n  </url>`;
    }),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
}

export function netlifyRedirects(): string {
  const privacy = HOSTED_LOCALES.map((locale) => `${pathFor("privacy", locale)}  ${PRIVACY_POLICY_URL}  301!`);
  // French slugs are identical on blousecoala.fr.
  return [...privacy, `/fr/*  ${FR_SITE_URL}/:splat  301!`].join("\n") + "\n";
}

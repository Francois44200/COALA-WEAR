import { DEFAULT_LOCALE, FR_SITE_URL, LOCALE_COOKIE, detectLocale } from "../../client/i18n/locales.ts";

// Crawlers always get the x-default (English) version so every language stays indexable.
const BOT_UA = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|pinterest|whatsapp|telegram|lighthouse|preview/i;

export default (request: Request, context: { cookies: { get(name: string): string | undefined }; geo?: { country?: { code?: string } } }) => {
  const isBot = BOT_UA.test(request.headers.get("user-agent") ?? "");
  const locale = isBot
    ? DEFAULT_LOCALE
    : detectLocale({
        saved: context.cookies.get(LOCALE_COOKIE),
        country: context.geo?.country?.code,
        acceptLanguage: request.headers.get("accept-language"),
      });

  const { search } = new URL(request.url);
  return new Response(null, {
    status: 302,
    headers: {
      Location: locale === "fr" ? `${FR_SITE_URL}/${search}` : `/${locale}/${search}`,
      "Cache-Control": "private, no-store",
      Vary: "Accept-Language, Cookie",
    },
  });
};

export const config = { path: "/" };

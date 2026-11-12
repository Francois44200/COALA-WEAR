import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "@/i18n/Link";
import { Helmet } from "react-helmet-async";
import { NavBar } from "@/components/coala/NavBar";
import { Footer } from "@/components/coala/Footer";
import { useLocale } from "@/i18n/LocaleContext";
import { LOCALE_INFO } from "@/i18n/locales";
import { useCopy } from "@/i18n/useCopy";
import { NOT_FOUND } from "@/i18n/content/notFound";

const NotFound = () => {
  const location = useLocation();
  const { locale } = useLocale();
  const t = useCopy(NOT_FOUND);

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="coala-page">
      <Helmet htmlAttributes={{ lang: LOCALE_INFO[locale].htmlLang }}>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <NavBar />
      <main>
        <section className="c-section-pad-lg" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
          <div className="c-container">
            <div style={{ maxWidth: "560px" }}>
              <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
              <h1 className="c-h1" style={{ marginTop: 16 }}>{t.title}</h1>
              <p className="c-lede" style={{ marginTop: 20 }}>
                {t.ledeBefore} <code style={{ fontFamily: "ui-monospace, monospace", fontSize: "0.9em", background: "var(--bg-elev)", padding: "2px 6px", borderRadius: "4px" }}>{location.pathname}</code> {t.ledeAfter}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "40px", alignItems: "center" }}>
                <Link page="home" className="c-btn c-btn--primary c-btn--lg">
                  {t.home}
                </Link>
                <Link page="faq" className="c-btn c-btn--secondary">
                  {t.faq}
                </Link>
                <Link page="contact" className="c-btn c-btn--ghost">
                  {t.contact}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

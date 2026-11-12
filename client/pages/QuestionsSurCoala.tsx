import { Seo } from "@/components/coala/Seo";
import { Link } from "@/i18n/Link";
import { NavBar } from "@/components/coala/NavBar";
import { Footer } from "@/components/coala/Footer";
import { useCopy } from "@/i18n/useCopy";
import { EXPLAINED } from "@/i18n/content/explained";

export default function QuestionsSurCoala() {
  const t = useCopy(EXPLAINED);
  return (
    <div className="coala-page">
      <Seo page="explained" />
      <NavBar />
      <main>
        {/* TODO: real content for this page: objections, limits, comparisons, honesty */}
        <section className="c-section-pad-lg">
          <div className="c-container">
            <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
            <h1 className="c-h-display" style={{ marginTop: 16, maxWidth: "18ch" }}>{t.title}</h1>
            <p className="c-lede" style={{ marginTop: 24, maxWidth: "52ch" }}>{t.lede}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "40px", alignItems: "center" }}>
              <Link page="faq" className="c-btn c-btn--primary">
                {t.ctaFaq}
              </Link>
              <Link page="home" className="c-btn c-btn--ghost">
                {t.ctaHome}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

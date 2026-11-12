import { Seo } from "@/components/coala/Seo";
import { Link } from "@/i18n/Link";
import { NavBar } from "@/components/coala/NavBar";
import { Footer } from "@/components/coala/Footer";
import { useCopy } from "@/i18n/useCopy";
import { ABOUT } from "@/i18n/content/about";

export default function APropos() {
  const t = useCopy(ABOUT);
  return (
    <div className="coala-page">
      <Seo page="about" />
      <NavBar />
      <main>
        {/* TODO: real content for this page: history, team, values, partners, press */}
        <section className="c-section-pad-lg">
          <div className="c-container">
            <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
            <h1 className="c-h-display" style={{ marginTop: 16, maxWidth: "18ch" }}>{t.title}</h1>
            <p className="c-lede" style={{ marginTop: 24, maxWidth: "52ch" }}>{t.lede}</p>
            <div style={{
              marginTop: "40px", padding: "32px", background: "var(--bg-2)",
              borderRadius: "var(--r-lg)", border: "1px solid var(--hair)",
            }}>
              <h2 style={{ fontSize: "18px", fontWeight: 600, color: "var(--ink)", marginBottom: "12px" }}>{t.commitmentTitle}</h2>
              <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--ink-2)", fontSize: "15px", lineHeight: "1.65" }}>
                {t.commitments.map((c, i) => (
                  <li key={i} style={i < t.commitments.length - 1 ? { marginBottom: "8px" } : undefined}>
                    <strong>{c.title}</strong>: {c.body}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "40px", alignItems: "center" }}>
              <Link page="contact" className="c-btn c-btn--primary">
                {t.ctaContact}
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

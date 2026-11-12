import { useEffect } from "react";
import { Seo } from "@/components/coala/Seo";
import { Link } from "@/i18n/Link";
import { NavBar } from "@/components/coala/NavBar";
import { Footer } from "@/components/coala/Footer";
import { useCopy } from "@/i18n/useCopy";
import { RESULTS } from "@/i18n/content/results";

/* ── Icons ── */
const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const QuoteIcon = () => (
  <svg width="28" height="22" viewBox="0 0 32 24" fill="currentColor" aria-hidden="true">
    <path d="M0 24V13C0 5.8 4.5 1 11 0v4C8 5 6 7.5 6 11h5v13H0zm17 0V13c0-7.2 4.5-12 11-13v4c-3 1-5 3.5-5 7h5v13H17z" />
  </svg>
);
const CartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 4h2l2.5 12.5a2 2 0 0 0 2 1.5h7.5a2 2 0 0 0 2-1.6L21 8H6" />
    <circle cx="9" cy="21" r="1.4" /><circle cx="18" cy="21" r="1.4" />
  </svg>
);

/* ── Reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".c-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("c-reveal--in"); }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}


/* ── Data (copy lives in @/i18n/content/results) ── */
const HERO_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2F513dfe4a239f4e3b9fd44a59bbeb753f";
const TRUST_LOGOS = ["ADMR", "Adiaph", "Croix-Rouge française", "Synerpa", "Fehap", "AD-PA"];
const CROSSLINK_PAGES = ["product", "quote", "faq"] as const;

/* ── Hero ── */
function Hero() {
  const t = useCopy(RESULTS).hero;
  return (
    <section className="pr-hero">
      <div className="c-container">
        <div className="pr-hero-grid">
          <div className="pr-hero-inner c-reveal">
            <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
            <h1 className="c-h-display pr-hero-title">{t.title}</h1>
            <p className="c-lede pr-hero-lede">{t.lede}</p>
            <div className="pr-hero-ctas">
              <a
                href="https://shop.connectlink.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="c-btn c-btn--primary c-btn--lg"
              >
                <CartIcon /> {t.ctaOrder}
              </a>
              <a href="#testimonials" className="c-btn c-btn--ghost">
                {t.ctaTestimonials} <ArrowIcon className="c-arr" />
              </a>
            </div>
          </div>

          <div className="pr-hero-media c-reveal" style={{ transitionDelay: "120ms" }}>
            <img src={HERO_IMAGE} alt={t.imageAlt} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Stats bar ── */
function Stats() {
  const stats = useCopy(RESULTS).stats;
  return (
    <section className="pr-stats">
      <div className="c-container">
        <div className="pr-stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="pr-stat c-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="pr-stat-value">{s.value}</div>
              <div className="pr-stat-label">{s.label}</div>
              <div className="pr-stat-source">{s.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pull quote ── */
function PullQuote() {
  const t = useCopy(RESULTS).pullQuote;
  return (
    <section className="pr-pull c-section-pad">
      <div className="c-container">
        <figure className="pr-pull-figure c-reveal">
          <QuoteIcon />
          <blockquote className="pr-pull-text">{t.text}</blockquote>
          <figcaption>
            <div className="pr-pull-name">{t.name}</div>
            <div className="pr-pull-role">{t.role}</div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ── Testimonials grid ── */
function TestimonialsGrid() {
  const t = useCopy(RESULTS).testimonials;
  return (
    <section className="c-section-pad-lg" id="testimonials">
      <div className="c-container">
        <div className="c-reveal" style={{ maxWidth: "640px", marginBottom: "56px" }}>
          <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1" style={{ marginTop: 16 }}>{t.title}</h2>
        </div>
        <div className="pr-testi-grid">
          {t.items.map((item, i) => (
            <article key={i} className="pr-testi-card c-reveal" style={{ transitionDelay: `${Math.floor(i / 3) * 80}ms` }}>
              <div className="pr-testi-type">
                <span className={`pr-testi-badge${item.type === "pro" ? " pr-testi-badge--pro" : ""}`}>
                  {item.type === "pro" ? t.badgePro : t.badgeFamily}
                </span>
                <span className="pr-testi-stars" aria-label={t.ratingLabel(item.rating)}>
                  {Array.from({ length: item.rating }).map((_, j) => <StarIcon key={j} />)}
                </span>
              </div>
              <blockquote className="pr-testi-quote">
                <QuoteIcon />
                <p>{item.quote}</p>
              </blockquote>
              <footer className="pr-testi-footer">
                <div className="pr-testi-name">{item.name}</div>
                <div className="pr-testi-meta">{item.role} · {item.location}</div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Case studies ── */
function CaseStudies() {
  const t = useCopy(RESULTS).cases;
  return (
    <section className="c-section-pad-lg pr-cases">
      <div className="c-container">
        <div className="c-reveal" style={{ maxWidth: "640px", marginBottom: "56px" }}>
          <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1" style={{ marginTop: 16 }}>{t.title}</h2>
        </div>
        <div className="pr-cases-grid">
          {t.items.map((c, i) => (
            <article key={i} className="pr-case-card c-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="pr-case-tag">{c.tag}</div>
              <h3 className="c-h3 pr-case-title">{c.title}</h3>
              <p className="pr-case-body">{c.body}</p>
              <div className="pr-case-metrics">
                {c.metrics.map((m, j) => (
                  <div key={j} className="pr-case-metric">
                    <div className="pr-case-metric-value">{m.v}</div>
                    <div className="pr-case-metric-label">{m.l}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Trust logos + awards ── */
function TrustBar() {
  const t = useCopy(RESULTS).trust;
  return (
    <section className="pr-trust">
      <div className="c-container">
        <div className="c-reveal">
          <p className="pr-trust-label">{t.label}</p>
          <div className="pr-trust-logos" aria-label={t.ariaLabel}>
            {TRUST_LOGOS.map((l) => (
              <div key={l} className="pr-trust-logo" aria-label={l}>
                <span>{l}</span>
              </div>
            ))}
          </div>
          <p className="pr-trust-label" style={{ marginTop: 40 }}>{t.awardsLabel}</p>
          <ul className="pr-trust-logos" aria-label={t.awardsAriaLabel} role="list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {t.awards.map((name) => (
              <li key={name} className="pr-trust-logo" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--ink-2)" }}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ── */
function FinalCta() {
  const t = useCopy(RESULTS).finalCta;
  return (
    <section className="pr-final-cta c-section-pad">
      <div className="c-container">
        <div className="pr-final-cta-inner c-reveal">
          <p className="c-eyebrow" style={{ justifyContent: "center" }}>
            <span className="c-dot" />{t.eyebrow}
          </p>
          <h2 className="c-h1 pr-final-cta-title">{t.title}</h2>
          <p className="c-lede pr-final-cta-lede">{t.lede}</p>
          <div className="pr-final-cta-btns">
            <a
              href="https://shop.connectlink.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="c-btn c-btn--primary c-btn--lg"
            >
              <CartIcon /> {t.ctaOrder}
            </a>
            <Link page="quote" className="c-btn c-btn--secondary c-btn--lg">
              {t.ctaQuote}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CrossLink ── */
function CrossLink() {
  const items = useCopy(RESULTS).crossLinks;
  return (
    <section className="fp-crosslink">
      <div className="fp-crosslink-grid">
        {items.map((item, i) => (
          <Link key={i} page={CROSSLINK_PAGES[i]} className="fp-crosslink-card c-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <div>
              <div className="fp-crosslink-eyebrow">{item.eyebrow}</div>
              <div className="fp-crosslink-title">{item.title}</div>
            </div>
            <div className="fp-crosslink-arrow" aria-hidden="true">
              <ArrowIcon className="c-arr" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ── Page root ── */
export default function PreuvesResultats() {
  useReveal();

  return (
    <div className="coala-page">
      <Seo page="results" />

      <NavBar />
      <main>
        <Hero />
        <Stats />
        <PullQuote />
        <TestimonialsGrid />
        <CaseStudies />
        <TrustBar />
        <FinalCta />
        <CrossLink />
      </main>
      <Footer />
    </div>
  );
}

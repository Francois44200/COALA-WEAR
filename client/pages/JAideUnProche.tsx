import { useState, useEffect } from "react";
import { Seo } from "@/components/coala/Seo";
import { Link } from "@/i18n/Link";
import { NavBar } from "@/components/coala/NavBar";
import { Footer } from "@/components/coala/Footer";
import { FAMILY } from "@/i18n/content/family";
import { useCopy } from "@/i18n/useCopy";

const SHOP_URL = "https://shop.connectlink.fr";

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const CartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 4h2l2.5 12.5a2 2 0 0 0 2 1.5h7.5a2 2 0 0 0 2-1.6L21 8H6" />
    <circle cx="9" cy="21" r="1.4" /><circle cx="18" cy="21" r="1.4" />
  </svg>
);
const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
);
const MinusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14" /></svg>
);
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" /></svg>
);
const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
);
const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21C12 21 3 14 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 13-9 13z" /></svg>
);
const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.2" /><circle cx="17" cy="9" r="2.6" /><path d="M3 20c1-3 3-4.5 6-4.5s5 1.5 6 4.5M15 20c.5-2 2-3 3.5-3s2.5 1 3 3" /></svg>
);
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg>
);

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

function Hero() {
  const t = useCopy(FAMILY).hero;
  return (
    <section className="je-hero">
      <div className="c-container">
        <div className="je-hero-grid">
          <div className="c-reveal">
            <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
            <h1 className="c-h-display je-hero-title">
              {t.title}
            </h1>
            <p className="c-lede je-hero-lede">
              {t.lede}
            </p>
            <div className="je-hero-ctas">
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="c-btn c-btn--primary c-btn--lg">
                <CartIcon /> {t.ctaOrder}
              </a>
              <Link page="contact" className="c-btn c-btn--secondary c-btn--lg">
                {t.ctaAdvice}
              </Link>
              <Link page="howItWorks" className="c-btn c-btn--ghost">
                {t.ctaHow} <ArrowIcon className="c-arr" />
              </Link>
            </div>
            <div className="je-hero-trust">
              <span>{t.trust[0]}</span>
              <span className="je-sep">·</span>
              <span>{t.trust[1]}</span>
              <span className="je-sep">·</span>
              <span>{t.trust[2]}</span>
            </div>
          </div>

          <div className="c-reveal je-hero-visual-wrap" style={{ transitionDelay: "120ms" }}>
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const t = useCopy(FAMILY).hero;
  return (
    <div className="je-visual">
      <div className="je-visual-stage">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2F513dfe4a239f4e3b9fd44a59bbeb753f"
          alt={t.imageAlt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="je-visual-card je-visual-card--top" aria-hidden="true">
          <div className="je-visual-card-eyebrow">{t.cardTop.eyebrow}</div>
          <div className="je-visual-card-claim">{t.cardTop.claim}</div>
          <div className="je-visual-card-desc">{t.cardTop.desc}</div>
        </div>
        <div className="je-visual-card je-visual-card--bot" aria-hidden="true">
          <div className="je-visual-card-eyebrow">{t.cardBottom.eyebrow}</div>
          <div style={{ display: "flex", gap: "8px", marginTop: "10px", flexWrap: "wrap" }}>
            {t.cardBottom.pills.map((p) => (
              <span key={p} className="je-visual-pill">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const BENEFIT_ICONS = [<ShieldIcon key="shield" />, <LeafIcon key="leaf" />, <HeartIcon key="heart" />, <UsersIcon key="users" />];

function Benefits() {
  const t = useCopy(FAMILY).benefits;
  return (
    <section className="c-section-pad-lg je-benefits">
      <div className="c-container">
        <div className="c-reveal" style={{ maxWidth: "640px", marginBottom: "56px" }}>
          <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1" style={{ marginTop: 16 }}>
            {t.title}
          </h2>
        </div>
        <div className="je-benefits-grid je-benefits-grid--2">
          {t.items.map((b, i) => (
            <article key={b.title} className="je-benefit-card c-reveal" style={{ transitionDelay: `${(i % 2) * 80}ms` }}>
              <span className="je-benefit-icon">{BENEFIT_ICONS[i]}</span>
              <h3 className="c-h3 je-benefit-title">{b.title}</h3>
              <p className="je-benefit-desc">{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const t = useCopy(FAMILY).steps;
  return (
    <section className="c-section-pad je-technique">
      <div className="c-container">
        <div className="je-technique-grid">
          <div className="c-reveal">
            <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
            <h2 className="c-h1" style={{ marginTop: 16 }}>
              {t.title}
            </h2>
            <ol className="je-steps-list">
              {t.items.map((s, i) => (
                <li key={s.title} className="je-step">
                  <span className="je-step-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className="je-step-text"><strong style={{ color: "var(--ink)", fontWeight: 500 }}>{s.title}.</strong> {s.desc}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="c-reveal je-technique-note" style={{ transitionDelay: "120ms" }}>
            <div className="je-technique-note-inner">
              <p className="je-technique-note-eyebrow">{t.noteEyebrow}</p>
              <ul className="je-steps-list" style={{ marginTop: 0 }}>
                {t.changes.map(([k, v]) => (
                  <li key={k} className="je-step">
                    <span className="je-step-num">{k}</span>
                    <span className="je-step-text">{v}</span>
                  </li>
                ))}
              </ul>
              <Link page="howItWorks" className="c-btn c-btn--ghost" style={{ marginTop: "24px" }}>
                {t.guideLink} <ArrowIcon className="c-arr" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Product() {
  const t = useCopy(FAMILY).product;
  return (
    <section className="c-section-pad-lg je-benefits">
      <div className="c-container">
        <div className="c-reveal" style={{ maxWidth: "640px", marginBottom: "56px" }}>
          <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1" style={{ marginTop: 16 }}>
            {t.title}
          </h2>
        </div>
        <div className="je-fam-product-grid">
          {[
            { title: t.specsTitle, items: t.specs },
            { title: t.commitmentsTitle, items: t.commitments },
          ].map((col, i) => (
            <article key={col.title} className="je-benefit-card c-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <h3 className="c-h3 je-benefit-title">{col.title}</h3>
              <ul className="je-fam-list">
                {col.items.map((item) => (
                  <li key={item}><span className="je-benefit-icon" style={{ margin: 0 }}><CheckIcon /></span>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const t = useCopy(FAMILY).faq;
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <section className="c-section-pad-lg je-faq" id="faq">
      <div className="c-container">
        <div className="je-faq-grid">
          <div className="c-reveal je-faq-header">
            <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
            <h2 className="c-h1" style={{ marginTop: 16 }}>
              {t.title}
            </h2>
            <Link page="faq" className="c-btn c-btn--ghost" style={{ marginTop: "24px" }}>
              {t.cta} <ArrowIcon className="c-arr" />
            </Link>
          </div>
          <div className="je-faq-list c-reveal" style={{ transitionDelay: "100ms" }}>
            {t.items.map((item, i) => {
              const isOpen = openIdx === i;
              const btnId = `ja-faq-btn-${i}`;
              const panelId = `ja-faq-panel-${i}`;
              return (
                <div key={item.q} className="fq-item">
                  <button id={btnId} className="fq-item-btn" aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggle(i)}>
                    <span>{item.q}</span>
                    <span className={`fq-item-icon${isOpen ? " fq-item-icon--open" : ""}`}>
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>
                  <div id={panelId} role="region" aria-labelledby={btnId} className={`fq-item-answer${isOpen ? " fq-item-answer--open" : ""}`}>
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const t = useCopy(FAMILY).finalCta;
  return (
    <section className="je-final-cta">
      <div className="c-container">
        <div className="je-final-cta-inner c-reveal">
          <p className="c-eyebrow je-final-cta-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1 je-final-cta-title">
            {t.title}
          </h2>
          <p className="je-final-cta-sub">
            {t.sub}
          </p>
          <div className="je-final-cta-btns">
            <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="c-btn c-btn--accent c-btn--lg">
              <CartIcon /> {t.ctaOrder}
            </a>
            <Link page="contact" className="c-btn je-btn-outline c-btn--lg">
              {t.ctaWrite}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CrossLink() {
  const t = useCopy(FAMILY).crossLinks;
  const pages = ["product", "howItWorks", "faq"] as const;
  const items = pages.map((page, i) => ({ ...t[i], page }));
  return (
    <section className="fp-crosslink">
      <div className="fp-crosslink-grid">
        {items.map((item, i) => (
          <Link key={item.page} page={item.page} className="fp-crosslink-card c-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
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

export default function JAideUnProche() {
  useReveal();

  return (
    <div className="coala-page">
      <Seo page="family" />
      <NavBar />
      <main>
        <Hero />
        <Benefits />
        <Steps />
        <Product />
        <Faq />
        <FinalCta />
        <CrossLink />
      </main>
      <Footer />
    </div>
  );
}

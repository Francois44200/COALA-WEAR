import { useState, useEffect } from "react";
import { Seo } from "@/components/coala/Seo";
import { Link } from "@/i18n/Link";
import { NavBar } from "@/components/coala/NavBar";
import { Footer } from "@/components/coala/Footer";
import { useCopy } from "@/i18n/useCopy";
import { TEAMS } from "@/i18n/content/teams";

/* ── Icons (stroke 1.5, rounded caps) ── */
const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
);
const MinusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14" /></svg>
);
const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12l9-9 9 9M5 10v9a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-9" /></svg>
);
const BuildingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" /></svg>
);
const HospitalIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="15" rx="2" /><path d="M12 10v6M9 13h6M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" /></svg>
);
const HeartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21C12 21 3 14 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 13-9 13z" /></svg>
);
const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.2" /><circle cx="17" cy="9" r="2.6" /><path d="M3 20c1-3 3-4.5 6-4.5s5 1.5 6 4.5M15 20c.5-2 2-3 3.5-3s2.5 1 3 3" /></svg>
);
const WheelchairIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="1.5" /><path d="M9 9h6l1.5 6H8L9 9zM8 15a5 5 0 1 0 9 2" /></svg>
);
const ActivityIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
);
const StethoscopeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 6.5C4.5 4.57 6.07 3 8 3s3.5 1.57 3.5 3.5V13a4.5 4.5 0 0 0 9 0v-1.5" /><circle cx="20" cy="10" r="1.5" /></svg>
);
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" /></svg>
);
const HandIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8a6 6 0 0 0 6 6h2c2.76 0 5-2.24 5-5v-3a2 2 0 0 0-2-2h-1" /></svg>
);
const LightbulbIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 6l-.7.5V18H9v-2.5l-.7-.5A7 7 0 0 1 12 2z" /></svg>
);
const PuzzleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.5a2 2 0 0 0 0-5M14.5 3.5a2 2 0 0 0-5 0M3.5 14.5a2 2 0 0 0 0-5M14.5 20.5a2 2 0 0 0-5 0" /><rect x="7" y="7" width="10" height="10" rx="1" /></svg>
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

/* ── Sections ── */

/* 1. Hero */
function Hero() {
  const t = useCopy(TEAMS).hero;
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
              <Link page="quote" className="c-btn c-btn--primary c-btn--lg">
                {t.ctaQuote}
              </Link>
              <Link page="contact" search="?type=demo" className="c-btn c-btn--secondary c-btn--lg">
                {t.ctaDemo}
              </Link>
              <Link page="howItWorks" className="c-btn c-btn--ghost">
                {t.ctaHow} <ArrowIcon className="c-arr" />
              </Link>
            </div>
            <div className="je-hero-trust">
              {/* TODO-EN: validate with Connect Link */}
              <span>{t.trust[0]}</span>
              <span className="je-sep">·</span>
              <span>{t.trust[1]}</span>
              <span className="je-sep">·</span>
              {/* TODO-EN: validate with Connect Link */}
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
  const t = useCopy(TEAMS).visual;
  return (
    <div className="je-visual">
      <div className="je-visual-stage" aria-hidden="true">
        <svg viewBox="0 0 400 460" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ display: "block", position: "absolute", inset: 0 }}>
          <defs>
            <linearGradient id="jvGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#173B66" stopOpacity="0.96" />
              <stop offset="100%" stopColor="#0F2747" stopOpacity="1" />
            </linearGradient>
            <radialGradient id="jvHalo" cx="30%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#C97A52" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0F2747" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="460" fill="url(#jvGrad)" />
          <image
            href="https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2F01b497e6c5b14ea095fe4b1e4cc1eb3e?format=webp&width=800"
            x="0"
            y="0"
            width="400"
            height="460"
            preserveAspectRatio="xMidYMid slice"
          />
          <rect width="400" height="460" fill="url(#jvHalo)" />
          {/* Decorative grid lines */}
          <line x1="0" y1="115" x2="400" y2="115" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="0" y1="230" x2="400" y2="230" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="0" y1="345" x2="400" y2="345" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="100" y1="0" x2="100" y2="460" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="460" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="300" y1="0" x2="300" y2="460" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </svg>

        {/* Floating stat card */}
        <div className="je-visual-card je-visual-card--top">
          <div className="je-visual-card-eyebrow">{t.topEyebrow}</div>
          <div className="je-visual-card-claim">{t.topClaim}</div>
          <div className="je-visual-card-desc">{t.topDesc}</div>
        </div>

        <div className="je-visual-card je-visual-card--bot">
          <div className="je-visual-card-eyebrow">{t.botEyebrow}</div>
          <div style={{ display: "flex", gap: "8px", marginTop: "10px", flexWrap: "wrap" }}>
            {t.pills.map((p) => (
              <span key={p} className="je-visual-pill">{p}</span>
            ))}
          </div>
        </div>

        <div className="je-visual-ref">COALA · Connect Link · France</div>
      </div>
    </div>
  );
}

/* 2. Which organisations */
const STRUCTURE_ICONS = [
  <HomeIcon />,
  <UsersIcon />,
  <BuildingIcon />,
  <HospitalIcon />,
  <ActivityIcon />,
  <WheelchairIcon />,
  <HeartIcon />,
  <StethoscopeIcon />,
];

function Structures() {
  const t = useCopy(TEAMS).structures;
  return (
    <section className="c-section-pad je-structures">
      <div className="c-container">
        <div className="je-struct-intro">
          <div className="c-reveal">
            <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
            <h2 className="c-h1" style={{ marginTop: 16 }}>
              {t.title}
            </h2>
          </div>
          <div className="je-struct-media c-reveal" style={{ transitionDelay: "120ms" }}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2F1bc224f743604b689637e6eeadd9b29c?format=webp&width=900"
              alt={t.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="je-struct-grid">
          {t.labels.map((label, i) => (
            <div key={i} className="je-struct-card c-reveal" style={{ transitionDelay: `${Math.floor(i / 4) * 60}ms` }}>
              <span className="je-struct-icon">{STRUCTURE_ICONS[i]}</span>
              <span className="je-struct-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 3. Benefits for professionals */
const BENEFIT_ICONS = [
  <ShieldIcon />,
  <HandIcon />,
  <UsersIcon />,
  <ActivityIcon />,
  <LightbulbIcon />,
  <PuzzleIcon />,
];

function Benefits() {
  const t = useCopy(TEAMS).benefits;
  return (
    <section className="c-section-pad-lg je-benefits">
      <div className="c-container">
        <div className="c-reveal" style={{ maxWidth: "640px", marginBottom: "56px" }}>
          <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1" style={{ marginTop: 16 }}>
            {t.title}
          </h2>
        </div>
        <div className="je-benefits-grid">
          {t.items.map((b, i) => (
            <article key={i} className="je-benefit-card c-reveal" style={{ transitionDelay: `${Math.floor(i / 3) * 80}ms` }}>
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

/* 4. How to use it */
function Technique() {
  const t = useCopy(TEAMS).technique;
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
              {t.steps.map((step, i) => (
                <li key={i} className="je-step">
                  <span className="je-step-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className="je-step-text">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="c-reveal je-technique-note" style={{ transitionDelay: "120ms" }}>
            <div className="je-technique-note-inner">
              <p className="je-technique-note-eyebrow">{t.noteEyebrow}</p>
              <p className="je-technique-note-body">
                {t.noteBody}
              </p>
              <Link page="howItWorks" className="c-btn c-btn--ghost" style={{ marginTop: "24px" }}>
                {t.noteCta} <ArrowIcon className="c-arr" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 5. Roll-out process */
function DeployProcess() {
  const t = useCopy(TEAMS).deploy;
  return (
    <section className="c-section-pad-lg je-deploy">
      <div className="c-container">
        <div className="c-reveal" style={{ maxWidth: "640px", marginBottom: "56px" }}>
          <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1" style={{ marginTop: 16 }}>
            {t.title}
          </h2>
        </div>
        <div className="je-deploy-grid">
          {t.steps.map((s, i) => (
            <div key={i} className="je-deploy-step c-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="je-deploy-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="je-deploy-connector" aria-hidden="true" />
              <h3 className="je-deploy-title">{s.title}</h3>
              <p className="je-deploy-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. Partnerships */
function Partnerships() {
  const t = useCopy(TEAMS).partnerships;
  return (
    <section className="c-section-pad je-partnerships">
      <div className="c-container">
        <div className="je-partnerships-inner c-reveal">
          <div>
            <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
            <h2 className="c-h2" style={{ marginTop: 14 }}>
              {t.title}
            </h2>
            <p className="je-partnerships-body">
              {t.body}
            </p>
            <Link page="contact" search="?type=partenariat" className="c-btn c-btn--ghost" style={{ marginTop: "24px" }}>
              {t.cta} <ArrowIcon className="c-arr" />
            </Link>
          </div>
          <figure className="je-partnerships-photo">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2Fd1dd2c2d8a03430bab49fb03cf043215?format=webp&width=800"
              alt={t.imageAlt}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="je-partnerships-caption">
              <span className="je-partnerships-caption-title">COALA</span>
              <span className="je-partnerships-caption-sub">{t.captionSub}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* 7. Proof & trust: logo placeholders (proper nouns, not translated) */
const TRUST_LOGOS = [
  "VYV3 PaysLoire", "ADMR", "Groupe AHNAC", "French Tech",
  "Silver Surfer", "Innovation & Prévention", "Silver Eco Festival",
  "AG2R La Mondiale", "BPI France", "Métropole Européenne de Lille",
  "Euramaterials",
];

function TrustSection() {
  const t = useCopy(TEAMS).trust;
  return (
    <section className="je-trust">
      <div className="c-container">
        <div className="c-reveal">
          <p className="je-trust-label">{t.label}</p>
          <div className="je-trust-logos" aria-label={t.ariaLabel}>
            {TRUST_LOGOS.map((name) => (
              <div key={name} className="je-trust-logo" aria-label={name}>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 8. FAQ for professionals */
function FaqPros() {
  const t = useCopy(TEAMS).faq;
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <section className="c-section-pad-lg je-faq">
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
              const btnId = `je-faq-btn-${i}`;
              const panelId = `je-faq-panel-${i}`;
              return (
                <div key={i} className="fq-item">
                  <button
                    id={btnId}
                    className="fq-item-btn"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                  >
                    <span>{item.q}</span>
                    <span className={`fq-item-icon${isOpen ? " fq-item-icon--open" : ""}`}>
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`fq-item-answer${isOpen ? " fq-item-answer--open" : ""}`}
                  >
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

/* 9. Final CTA */
function FinalCta() {
  const t = useCopy(TEAMS).finalCta;
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
            <Link page="quote" className="c-btn c-btn--accent c-btn--lg">
              {t.ctaQuote}
            </Link>
            <Link page="contact" search="?type=demo" className="c-btn je-btn-outline c-btn--lg">
              {t.ctaDemo}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CrossLink ── */
const CROSSLINK_PAGES = ["product", "faq", "results"] as const;

function CrossLink() {
  const copy = useCopy(TEAMS).crossLinks;
  const items = CROSSLINK_PAGES.map((page, i) => ({ ...copy[i], page }));
  return (
    <section className="fp-crosslink">
      <div className="fp-crosslink-grid">
        {items.map((item, i) => (
          <Link key={i} page={item.page} className="fp-crosslink-card c-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
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
export default function JEquipeUneEquipe() {
  useReveal();

  return (
    <div className="coala-page">
      <Seo page="teams" />

      <NavBar />
      <main>
        <Hero />
        <Structures />
        <Benefits />
        <Technique />
        <DeployProcess />
        <Partnerships />
        <TrustSection />
        <FaqPros />
        <FinalCta />
        <CrossLink />
      </main>
      <Footer />
    </div>
  );
}

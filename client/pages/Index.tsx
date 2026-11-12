import { useState, useEffect } from "react";
import { Seo } from "@/components/coala/Seo";
import { Link } from "@/i18n/Link";
import { NavBar } from "@/components/coala/NavBar";
import { Footer } from "@/components/coala/Footer";
import { useCopy } from "@/i18n/useCopy";
import { HOME } from "@/i18n/content/home";

/* ============================================================
   Icons
   ============================================================ */
const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
);
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" /><path d="M9 12.5l2 2 4-4" />
  </svg>
);
const WeightIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 7h14l-1.5 12.5a2 2 0 0 1-2 1.5h-7a2 2 0 0 1-2-1.5L5 7z" /><path d="M9 7V5a3 3 0 1 1 6 0v2" />
  </svg>
);
const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 4c0 8-5 14-13 14H4v-3C4 7 10 4 18 4h2zM4 21c4-9 11-13 16-15" />
  </svg>
);
const CartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 4h2l2.5 12.5a2 2 0 0 0 2 1.5h7.5a2 2 0 0 0 2-1.6L21 8H6" />
    <circle cx="9" cy="21" r="1.4" /><circle cx="18" cy="21" r="1.4" />
  </svg>
);
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12.5l5 5L20 6" />
  </svg>
);
const QuoteIcon = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor" aria-hidden="true">
    <path d="M0 24V13C0 5.8 4.5 1 11 0v4C8 5 6 7.5 6 11h5v13H0zm17 0V13c0-7.2 4.5-12 11-13v4c-3 1-5 3.5-5 7h5v13H17z" />
  </svg>
);
const UserIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
  </svg>
);
const TeamIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="8" r="3.2" /><circle cx="17" cy="9" r="2.6" />
    <path d="M3 20c1-3 3-4.5 6-4.5s5 1.5 6 4.5M15 20c.5-2 2-3 3.5-3s2.5 1 3 3" />
  </svg>
);

/* ============================================================
   Reveal on scroll
   ============================================================ */
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

/* ============================================================
   Hero Visual
   ============================================================ */
function HeroVisual() {
  const t = useCopy(HOME).hero;
  return (
    <div style={{ position: "relative", aspectRatio: "5/6", width: "100%" }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 0, overflow: "hidden", boxShadow: "0 24px 56px -28px rgba(15,39,71,0.32), 0 2px 6px rgba(15,39,71,0.06)", backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2F3db594d5efc34d709b60baa2c75efe10)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>

        {/* Floating card — bottom right */}
        <div style={{ position: "absolute", bottom: "6%", right: "4%", background: "rgba(251,247,238,0.96)", backdropFilter: "blur(8px)", border: "1px solid rgba(15,39,71,0.08)", borderRadius: 14, padding: "14px 16px", boxShadow: "0 12px 32px -16px rgba(0,0,0,0.4)", minWidth: 240 }}>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 44, fontWeight: 500, letterSpacing: "-0.03em", color: "#0D1F36", lineHeight: 1 }}>
            95<span style={{ fontSize: 22, color: "#C97A52" }}>%</span>
          </div>
          <div style={{ marginTop: 8, fontSize: 12.5, color: "#2A3B53", lineHeight: 1.35 }}>{t.statLabel}</div>
          <div style={{ marginTop: 8, fontSize: 11, color: "#6B7891", fontStyle: "italic" }}>{t.statSource}</div>
        </div>

        {/* Reference */}
        <div style={{ position: "absolute", top: 20, right: 22, fontSize: 11, letterSpacing: "0.14em", color: "rgba(251,247,238,0.55)", textTransform: "uppercase" }}>
          COALA · ref. CL-B137
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Solution Visual — annotated technical diagram
   ============================================================ */
function SolutionVisual() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ position: "relative", background: "var(--bg-elev)", backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2Feb04f1d723b64f49bc6ed25c988cf50a)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", border: "1px solid rgba(211,184,114,1)", borderRadius: 20, padding: 32, aspectRatio: "4/5", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, rgba(13,31,54,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,31,54,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(70% 70% at 50% 50%, #000 60%, transparent 100%)", WebkitMaskImage: "radial-gradient(70% 70% at 50% 50%, #000 60%, transparent 100%)" }} />
        <span style={{ position: "absolute", top: 16, left: 20, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)" }}>01</span>
        <span style={{ position: "absolute", top: 16, right: 20, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)" }}>HP COALA - M</span>

      </div>
    </div>
  );
}

/* ============================================================
   Step Images
   ============================================================ */
const stepImages = [
  "https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2F0a03b36aafd94e879a675579ed372b0d",
  "https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2Fbc9ace64599c4ec3bb75db9bf60439cf",
  "https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2F3a46e9d90cd840f0a0631429d562624c",
];

function StepIllu({ n, label }: { n: number; label: string }) {
  return (
    <img
      src={stepImages[n]}
      alt={label}
      loading="lazy"
      decoding="async"
      style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
    />
  );
}

/* ============================================================
   Page Sections
   ============================================================ */
function Hero() {
  const t = useCopy(HOME).hero;
  return (
    <section style={{ padding: "48px 0 96px", position: "relative", isolation: "isolate" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: "-120px -10% auto -10%", height: 540, background: "radial-gradient(60% 70% at 78% 20%, rgba(220,234,255,0.7) 0%, transparent 60%), radial-gradient(50% 60% at 10% 40%, rgba(244,221,205,0.6) 0%, transparent 60%)", zIndex: -1, pointerEvents: "none" }} />
      <div className="c-container">
        <div className="c-reveal home-hero-grid">
          {/* Text */}
          <div>
            <div className="c-tag">
              <span className="c-dot" />
              {t.tag}
            </div>
            <h1 className="c-h-display" style={{ marginTop: 28 }}>
              {t.title}
            </h1>
            <p className="c-lede" style={{ marginTop: 28 }}>
              {t.lede}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 40, alignItems: "center" }}>
              <Link page="family" className="c-btn c-btn--primary c-btn--lg">
                <UserIcon /> {t.ctaFamily}
              </Link>
              <Link page="teams" className="c-btn c-btn--secondary c-btn--lg">
                <TeamIcon /> {t.ctaTeams}
              </Link>
              <Link page="howItWorks" className="c-btn c-btn--ghost">
                <PlayIcon /> {t.ctaHow} <ArrowIcon className="c-arr" />
              </Link>
            </div>

            <div style={{ marginTop: 36, fontSize: 13.5, color: "var(--muted)", display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              {t.trust.map((item, i) => (
                <span key={item} style={{ display: "contents" }}>
                  {i > 0 && <span style={{ opacity: 0.5 }}>·</span>}
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="c-reveal" style={{ transitionDelay: "120ms" }}>
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogosBar() {
  const partners = ["Eurasanté", "VYV³", "ADMR", "AG2R La Mondiale", "BPI France", "Métropole Européenne de Lille", "Groupe AHNAC", "Euramaterials"];
  const t = useCopy(HOME).logos;
  return (
    <section aria-label={t.ariaLabel} style={{ padding: "24px 0 56px" }}>
      <div className="c-container c-reveal">
        <div style={{ borderTop: "1px solid var(--hair)", borderBottom: "1px solid var(--hair)", padding: "28px 0" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center", marginBottom: 16 }}>{t.partnersTitle}</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0", alignItems: "center" }} role="list">
            {partners.map((name) => (
              <li key={name} style={{ padding: "8px 20px", color: "var(--ink-2)", fontSize: 14, fontWeight: 500, borderRight: "1px solid var(--hair)" }}>{name}</li>
            ))}
          </ul>
          <p style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center", marginBottom: 16 }}>{t.awardsTitle}</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0", alignItems: "center" }} role="list">
            {t.awards.map((name) => (
              <li key={name} style={{ padding: "8px 20px", borderRight: "1px solid var(--hair)", color: "var(--ink-2)", fontSize: 14, fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 16 }}>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ImageBanner() {
  const t = useCopy(HOME);
  return (
    <section style={{ padding: "0 0 56px" }}>
      <div
        role="img"
        aria-label={t.bannerAlt}
        className="c-reveal"
        style={{
          minHeight: 400,
          backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2Fe02adac6e7ff4327994fcd0a0243efaa)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
    </section>
  );
}

function Problem() {
  const t = useCopy(HOME).problem;
  const cards = t.cards;
  return (
    <section className="c-section-pad" id="probleme">
      <div className="c-container">
        <div className="c-reveal" style={{ maxWidth: 780 }}>
          <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1" style={{ marginTop: 14 }}>
            {t.title}
          </h2>
          <p className="c-lede" style={{ marginTop: 20 }}>
            {t.lede}
          </p>
        </div>

        <div className="home-problem-grid" style={{ marginTop: 64, borderTop: "1px solid var(--hair)", borderBottom: "1px solid var(--hair)" }}>
          {cards.map((c, i) => (
            <div key={i} className="c-reveal" style={{ padding: "40px 32px 36px", borderRight: i < cards.length - 1 ? "1px solid var(--hair)" : "none", transitionDelay: `${i * 80}ms` }}>
              <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(64px,7vw,88px)", lineHeight: 1, color: "var(--ink)", letterSpacing: "-0.02em", overflow: "hidden" }}>{c.stat}</div>
              <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.45, color: "var(--ink-2)", maxWidth: "32ch" }}>{c.label}</p>
              <p style={{ marginTop: 16, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--muted)" }}>{c.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const LinkIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const ZapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const LayersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

function Solution() {
  const t = useCopy(HOME).solution;
  const icons = [<ShieldIcon />, <WeightIcon />, <LeafIcon />, <LinkIcon />, <ZapIcon />, <LayersIcon />];
  const benefits = t.benefits.map((b, i) => ({ ...b, icon: icons[i] }));
  return (
    <section className="c-section-pad-lg" id="produit" style={{ background: "var(--bg-elev)" }}>
      <div className="c-container">
        <div className="home-solution-grid">
          <div className="c-reveal">
            <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
            <h2 className="c-h1" style={{ marginTop: 14 }}>
              {t.title}
            </h2>
            <p className="c-lede" style={{ marginTop: 24 }}>
              {t.lede}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "36px 0 0", display: "flex", flexDirection: "column", gap: 22 }} role="list">
              {benefits.map((b, i) => (
                <li key={i} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 18, alignItems: "start" }}>
                  <span style={{ color: "var(--navy)", marginTop: 2 }}>{b.icon}</span>
                  <div>
                    <strong style={{ display: "block", fontSize: 17, fontWeight: 500, color: "var(--ink)", marginBottom: 4 }}>{b.title}</strong>
                    <span style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.5 }}>{b.body}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="https://shop.connectlink.fr" target="_blank" rel="noopener noreferrer" className="c-btn c-btn--primary">
                <CartIcon /> {t.ctaOrder}
              </a>
              <Link page="product" className="c-btn c-btn--ghost">
                {t.ctaDetails} <ArrowIcon className="c-arr" />
              </Link>
            </div>
          </div>
          <div className="c-reveal" style={{ transitionDelay: "140ms" }}>
            <SolutionVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const t = useCopy(HOME).how;
  const steps = t.steps.map((step, i) => ({ ...step, n: String(i + 1).padStart(2, "0") }));
  return (
    <section className="c-section-pad-lg" id="fonctionnement">
      <div className="c-container">
        <div className="c-reveal" style={{ maxWidth: 720 }}>
          <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1" style={{ marginTop: 14 }}>{t.title}</h2>
          <p className="c-lede" style={{ marginTop: 20, maxWidth: "52ch" }}>
            {t.lede}
          </p>
        </div>

        <ol style={{ listStyle: "none", padding: 0, margin: "64px 0 0", display: "flex", flexDirection: "column" }}>
          {steps.map((s, i) => (
            <li key={s.n} className="c-reveal home-step-grid" style={{ padding: "40px 0", borderTop: "1px solid var(--hair)", alignItems: "center", transitionDelay: `${i * 100}ms` }}>
              <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(44px,5vw,64px)", color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.n}</div>
              <div>
                <h3 className="c-h3">{s.title}</h3>
                <p style={{ marginTop: 10, color: "var(--ink-2)", fontSize: 16.5, lineHeight: 1.5, maxWidth: "52ch" }}>{s.body}</p>
                <span style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--accent)", flexShrink: 0, display: "inline-block" }} />
                  {s.meta}
                </span>
              </div>
              <div className="home-step-illu" style={{ aspectRatio: "4/3", borderRadius: 14, background: "linear-gradient(180deg,var(--navy) 0%,#0A1B2F 100%)", overflow: "hidden" }}>
                <StepIllu n={i} label={s.imageLabel} />
              </div>
            </li>
          ))}
        </ol>
        <div style={{ borderBottom: "1px solid var(--hair)" }} />

        <a
          className="c-reveal"
          href="https://www.youtube.com/watch?v=l8cmaHFffg0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: 56, padding: "16px 20px", background: "var(--ink)", color: "var(--bg)", borderRadius: 999, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, textDecoration: "none" }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 20, minWidth: 0 }}>
            <img
              src="https://img.youtube.com/vi/l8cmaHFffg0/mqdefault.jpg"
              alt=""
              loading="lazy"
              decoding="async"
              style={{ width: 96, height: 56, objectFit: "cover", borderRadius: 999, flexShrink: 0 }}
            />
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22 }}>{t.video}</span>
          </span>
          <span aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 999, background: "var(--accent)", color: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <PlayIcon />
          </span>
        </a>
      </div>
    </section>
  );
}

function Parcours() {
  const t = useCopy(HOME).journeys;
  const aidantsBullets = t.family.bullets;
  const prosBullets = t.teams.bullets;

  return (
    <section className="c-section-pad-lg" id="parcours">
      <div className="c-container">
        <div className="c-reveal" style={{ maxWidth: 720 }}>
          <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1" style={{ marginTop: 14 }}>
            {t.title}
          </h2>
        </div>

        <div className="home-parcours-grid" style={{ marginTop: 64 }}>
          {/* Aidants card — light */}
          <article id="aidants" className="c-reveal" style={{ padding: 40, borderRadius: 22, background: "linear-gradient(180deg,#FBF7EE 0%,#F5F0E6 100%)", border: "1px solid var(--hair)", display: "flex", flexDirection: "column", minHeight: 560 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <span style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>{t.family.kicker}</span>
              <ArrowIcon />
            </div>
            <h3 className="c-h2" style={{ marginBottom: 16 }}>{t.family.title}</h3>
            <p style={{ color: "var(--ink-2)", fontSize: 16, lineHeight: 1.5, maxWidth: "42ch" }}>
              {t.family.body}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0", display: "flex", flexDirection: "column", gap: 12 }} role="list">
              {aidantsBullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14.5, color: "var(--ink-2)" }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "auto", paddingTop: 28, borderTop: "1px solid var(--hair)", display: "flex", alignItems: "baseline", gap: 16 }}>
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 42, letterSpacing: "-0.02em", lineHeight: 1, color: "var(--ink)", whiteSpace: "nowrap" }}>1500+</span>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>{t.family.statLabel}</span>
            </div>
            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link page="family" className="c-btn c-btn--primary">
                {t.family.ctaPrimary} <ArrowIcon />
              </Link>
              <a href="https://shop.connectlink.fr" target="_blank" rel="noopener noreferrer" className="c-btn c-btn--ghost">
                {t.family.ctaOrder} <ArrowIcon className="c-arr" />
              </a>
            </div>
          </article>

          {/* Pros card — dark */}
          <article id="pros" className="c-reveal" style={{ padding: 40, borderRadius: 22, background: "linear-gradient(180deg,#0F2747 0%,#0A1B2F 100%)", display: "flex", flexDirection: "column", minHeight: 560, transitionDelay: "80ms" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <span style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,240,230,0.6)" }}>{t.teams.kicker}</span>
              <span style={{ color: "#F5F0E6" }}><ArrowIcon /></span>
            </div>
            <h3 className="c-h2" style={{ marginBottom: 16, color: "#F5F0E6" }}>{t.teams.title}</h3>
            <p style={{ color: "rgba(245,240,230,0.85)", fontSize: 16, lineHeight: 1.5, maxWidth: "42ch" }}>
              {t.teams.body}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0", display: "flex", flexDirection: "column", gap: 12 }} role="list">
              {prosBullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14.5, color: "rgba(245,240,230,0.9)" }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "auto", paddingTop: 28, borderTop: "1px solid rgba(245,240,230,0.18)", display: "flex", alignItems: "baseline", gap: 16 }}>
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 42, letterSpacing: "-0.02em", lineHeight: 1, color: "#F5F0E6", whiteSpace: "nowrap" }}>200+</span>
              <span style={{ fontSize: 13, color: "rgba(245,240,230,0.65)" }}>{t.teams.statLabel}</span>
            </div>
            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link page="quote" className="c-btn c-btn--accent">
                {t.teams.ctaPrimary} <ArrowIcon />
              </Link>
              <Link page="contact" search="?type=demo" className="c-btn c-btn--ghost" style={{ color: "#F5F0E6" }}>
                {t.teams.ctaDemo} <ArrowIcon className="c-arr" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Preuves() {
  const t = useCopy(HOME).proof;
  const stats = t.stats;
  return (
    <section className="c-section-pad-lg" id="preuves">
      <div className="c-container">
        <div className="c-reveal" style={{ maxWidth: 720 }}>
          <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1" style={{ marginTop: 14 }}>
            {t.title}
          </h2>
        </div>

        <div className="home-preuves-grid" style={{ marginTop: 64 }}>
          {/* Quote */}
          <article className="c-reveal" style={{ background: "var(--surface)", border: "1px solid var(--hair)", borderRadius: 22, padding: 48, display: "flex", flexDirection: "column" }}>
            <span style={{ color: "var(--accent)", opacity: 0.5, marginBottom: 24, display: "block" }}><QuoteIcon /></span>
            <blockquote style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(22px,2vw,30px)", lineHeight: 1.25, color: "var(--ink)", margin: 0, letterSpacing: "-0.005em" }}>
              {t.quote}
            </blockquote>
            <footer style={{ marginTop: "auto", paddingTop: 36, display: "flex", alignItems: "center", gap: 16 }}>
              <div aria-hidden="true" style={{ width: 48, height: 48, borderRadius: 999, background: "var(--navy)", color: "#F5F0E6", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 500, fontSize: 14, letterSpacing: "0.04em", flexShrink: 0 }}>ED</div>
              <div>
                <div style={{ fontWeight: 500, color: "var(--ink)", fontSize: 15 }}>{t.quoteAuthor}</div>
                <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 2 }}>{t.quoteRole}</div>
              </div>
            </footer>
          </article>

          {/* Stats */}
          <div className="c-reveal" style={{ display: "grid", gridTemplateRows: "repeat(3,1fr)", gap: 1, background: "var(--hair)", border: "1px solid var(--hair)", borderRadius: 22, overflow: "hidden", transitionDelay: "120ms" }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: "var(--surface)", padding: "28px 32px", display: "grid", gridTemplateColumns: "140px 1fr", gap: 24, alignItems: "center" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(40px,3.5vw,60px)", letterSpacing: "-0.02em", lineHeight: 1, color: "var(--ink)" }}>
                  {s.val}{s.unit && <span style={{ fontSize: "0.5em", color: "var(--accent)", marginLeft: 2 }}>{s.unit}</span>}
                </div>
                <div>
                  <div style={{ fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.4, whiteSpace: "pre-line" }}>{s.label}</div>
                  <div style={{ marginTop: 8, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>{s.src}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press */}
        <div className="c-reveal" style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid var(--hair)", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", flexShrink: 0 }}>{t.pressTitle}</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, color: "var(--ink-2)" }}>
            {[
              { name: "La Tribune", href: "https://www.youtube.com/watch?v=8uEgNJhQlwQ" },
              { name: "L'Essentiel de l'Éco" },
              { name: "M6" },
              { name: "France 3" },
              { name: "L'achat Logistisque" },
              { name: "L'entretien textile" },
            ].map((p) =>
              p.href ? (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                  {p.name}
                </a>
              ) : (
                <span key={p.name}>{p.name}</span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeFAQ() {
  const t = useCopy(HOME).faq;
  const items = t.items;
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="c-section-pad-lg" id="faq" style={{ background: "var(--bg-elev)" }}>
      <div className="c-container">
        <div className="home-faq-grid">
          <aside className="c-reveal" style={{ position: "sticky", top: 100 }}>
            <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
            <h2 className="c-h1" style={{ marginTop: 14 }}>
              {t.title}
            </h2>
            <p className="c-lede" style={{ marginTop: 20 }}>
              {t.lede}
            </p>
            <Link page="faq" className="c-btn c-btn--ghost" style={{ marginTop: 24 }}>
              {t.cta} <ArrowIcon className="c-arr" />
            </Link>
          </aside>

          <div className="c-reveal" style={{ borderTop: "1px solid var(--hair)", transitionDelay: "120ms" }}>
            {items.map((it, i) => (
              <details
                key={i}
                open={openIdx === i}
                onToggle={(e) => { if ((e.target as HTMLDetailsElement).open) setOpenIdx(i); }}
                style={{ borderBottom: "1px solid var(--hair)" }}
              >
                <summary style={{ padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, listStyle: "none", cursor: "pointer", userSelect: "none" }}>
                  <span style={{ fontSize: 18, fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.01em" }}>{it.q}</span>
                  <span style={{ width: 28, height: 28, border: "1px solid var(--hair)", borderRadius: 999, display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: openIdx === i ? "var(--ink)" : "transparent", color: openIdx === i ? "#F5F0E6" : "var(--ink)", fontSize: 18, lineHeight: 1, transition: "background .2s, color .2s", fontWeight: 300 }}>
                    {openIdx === i ? "−" : "+"}
                  </span>
                </summary>
                <div style={{ paddingBottom: 28, fontSize: 16, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: "64ch" }}>{it.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  const t = useCopy(HOME).finalCta;
  return (
    <section className="c-section-pad-lg" id="commander">
      <div className="c-container">
        <div className="c-reveal" style={{ position: "relative", borderRadius: 26, overflow: "hidden", padding: "96px 80px", isolation: "isolate" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: -1, background: "radial-gradient(70% 90% at 80% 20%, rgba(45,107,224,0.4) 0%, transparent 60%), radial-gradient(70% 90% at 10% 90%, rgba(201,122,82,0.25) 0%, transparent 60%), linear-gradient(135deg,#0F2747 0%,#0A1B2F 100%)" }} />
          <div style={{ maxWidth: 760 }}>
            <p className="c-eyebrow" style={{ color: "rgba(245,240,230,0.7)" }}><span className="c-dot" />{t.eyebrow}</p>
            <h2 className="c-h-display" style={{ color: "#F5F0E6", marginTop: 24, maxWidth: "18ch" }}>
              {t.title}
            </h2>
            <p className="c-lede" style={{ marginTop: 24, color: "rgba(245,240,230,0.78)", maxWidth: "48ch" }}>
              {t.lede}
            </p>
            <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              <a href="https://shop.connectlink.fr" target="_blank" rel="noopener noreferrer" className="c-btn c-btn--accent c-btn--lg">
                <CartIcon /> {t.ctaOrder}
              </a>
              <Link page="quote" className="c-btn c-btn--lg" style={{ background: "rgba(255,255,255,0.08)", color: "#F5F0E6", border: "1px solid rgba(255,255,255,0.18)" }}>
                {t.ctaQuote} <ArrowIcon />
              </Link>
              <Link page="contact" className="c-btn c-btn--ghost" style={{ color: "rgba(245,240,230,0.85)" }}>
                {t.ctaAdvice} <ArrowIcon className="c-arr" />
              </Link>
            </div>
            <div className="home-trust-grid" style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(245,240,230,0.18)" }}>
              {t.trust.map((t, i) => (
                <div key={i} className={t.wide ? "home-trust-grid__wide" : undefined}>
                  <strong style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: t.wide ? 22 : 32, fontWeight: 400, color: "#F5F0E6", display: "block", letterSpacing: "-0.01em", lineHeight: t.wide ? 1.25 : undefined, textWrap: t.wide ? "balance" : undefined }}>{t.strong}</strong>
                  <span style={{ marginTop: 6, display: "block", fontSize: 13, color: "rgba(245,240,230,0.65)" }}>{t.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Home page
   ============================================================ */
export default function Index() {
  useReveal();

  return (
    <div className="coala-page">
      <Seo page="home" />

      <NavBar />
      <main>
        <Hero />
        <LogosBar />
        <ImageBanner />
        <Problem />
        <Solution />
        <HowItWorks />
        <Parcours />
        <Preuves />
        <HomeFAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}

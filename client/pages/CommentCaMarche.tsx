import { useEffect } from "react";
import { Seo } from "@/components/coala/Seo";
import { Link } from "@/i18n/Link";
import { NavBar } from "@/components/coala/NavBar";
import { Footer } from "@/components/coala/Footer";
import { useCopy } from "@/i18n/useCopy";
import { HOW_IT_WORKS } from "@/i18n/content/howItWorks";

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

const VIDEO_ID = "l8cmaHFffg0";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12.5l5 5L20 6" />
  </svg>
);
const AlertIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

/* ── Section pictograms ── */
const pictoProps = {
  width: 22, height: 22, viewBox: "0 0 24 24", fill: "none",
  stroke: "currentColor", strokeWidth: 1.5,
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const SpineIcon = () => (
  <svg {...pictoProps}><path d="M12 3v18" /><path d="M9 5h6M8.5 9h7M8.5 13h7M9 17h6" /></svg>
);
const KneeIcon = () => (
  <svg {...pictoProps}><path d="M8 3v6a4 4 0 0 0 4 4 4 4 0 0 1 4 4v4" /><circle cx="12" cy="13" r="1.4" /></svg>
);
const FeetIcon = () => (
  <svg {...pictoProps}><path d="M6 21v-4a3 3 0 0 1 3-3V7a2 2 0 1 0-4 0v3" /><path d="M18 21v-4a3 3 0 0 0-3-3V7a2 2 0 1 1 4 0v3" /></svg>
);
const LungeIcon = () => (
  <svg {...pictoProps}><circle cx="12" cy="4.5" r="2" /><path d="M12 7v5M12 12l-5 9M12 12l5 9M7 10h10" /></svg>
);
const WashIcon = () => (
  <svg {...pictoProps}><rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="12" cy="13" r="4" /><path d="M8 7h.01M11 7h.01" /></svg>
);
const BeltIcon = () => (
  <svg {...pictoProps}><path d="M3 9h18v6H3z" /><path d="M9 9v6M15 9v6" /></svg>
);
const DryIcon = () => (
  <svg {...pictoProps}><path d="M12 3s5 5.2 5 9a5 5 0 0 1-10 0c0-3.8 5-9 5-9z" /></svg>
);
const StarIcon = () => (
  <svg {...pictoProps} width={18} height={18}><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" /></svg>
);

const SHOP_IMG = "https://cdn.shopify.com/s/files/1/0928/2342/1309/files";

function SectionMedia({ src, alt, ratio = "3 / 4" }: { src: string; alt: string; ratio?: string }) {
  return (
    <div className="ccm-media" style={{ aspectRatio: ratio }}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}

/* ── Grip guidance: true = recommended, false = warning (order matches copy) ── */
const GRIP_OK = [true, true, false, false, false];

/* ── Caregiver posture icons (order matches copy) ── */
const POSTURE_ICONS = [<SpineIcon />, <KneeIcon />, <FeetIcon />, <LungeIcon />];

/* ── Care icons (order matches copy) ── */
const CARE_ICONS = [<WashIcon />, <BeltIcon />, <DryIcon />];

/* ── Related page links (order matches copy) ── */
const CARD_PAGES = ["product", "results", "faq"] as const;

function StepList({ steps, accent }: { steps: { n: string; title: string; body: string }[]; accent: string }) {
  return (
    <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {steps.map((s, i) => (
        <li key={s.n} className="c-reveal" style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: "24px 32px", padding: "28px 0", borderTop: "1px solid var(--hair)", alignItems: "start", transitionDelay: `${i * 60}ms` }}>
          <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(32px,3.5vw,46px)", lineHeight: 1, color: accent, letterSpacing: "-0.02em" }}>{s.n}</div>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 500, color: "var(--ink)", margin: 0, letterSpacing: "-0.01em" }}>{s.title}</h3>
            <p style={{ marginTop: 10, fontSize: 16, color: "var(--ink-2)", lineHeight: 1.55, maxWidth: "60ch" }}>{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function CommentCaMarche() {
  useReveal();
  const t = useCopy(HOW_IT_WORKS);

  return (
    <div className="coala-page">
      <Seo page="howItWorks" />

      <NavBar />
      <main>

        {/* ── Hero ── */}
        <section style={{ padding: "48px 0 72px", position: "relative", isolation: "isolate" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 60% at 80% 10%, rgba(220,234,255,0.55) 0%, transparent 70%)", zIndex: -1 }} />
          <div className="c-container">
            <nav aria-label={t.breadcrumb.ariaLabel} style={{ fontSize: 13, color: "var(--muted)", marginBottom: 24, display: "flex", gap: 6, alignItems: "center" }}>
              <Link page="home" style={{ color: "var(--muted)", textDecoration: "none" }}>{t.breadcrumb.home}</Link>
              <span>/</span>
              <span>{t.breadcrumb.current}</span>
            </nav>
            <p className="c-eyebrow"><span className="c-dot" />{t.hero.eyebrow}</p>
            <h1 className="c-h-display" style={{ marginTop: 16, maxWidth: "20ch" }}>
              {t.hero.title}
            </h1>
            <p className="c-lede" style={{ marginTop: 24, maxWidth: "56ch" }}>
              {t.hero.lede}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}>
              <a href="https://shop.connectlink.fr" target="_blank" rel="noopener noreferrer" className="c-btn c-btn--primary">
                {t.hero.ctaOrder}
              </a>
              <Link page="product" className="c-btn c-btn--ghost">
                {t.hero.ctaProduct} <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Video ── */}
        <section className="c-section-pad" style={{ background: "var(--navy)" }}>
          <div className="c-container">
            <div className="c-reveal" style={{ maxWidth: 760 }}>
              <p className="c-eyebrow" style={{ color: "rgba(245,240,230,0.7)" }}><span className="c-dot" />{t.video.eyebrow}</p>
              <h2 className="c-h1" style={{ color: "#F5F0E6", marginTop: 14 }}>
                {t.video.title}
              </h2>
            </div>
            <div className="c-reveal" style={{ marginTop: 40, borderRadius: 18, overflow: "hidden", maxWidth: 840, aspectRatio: "16/9", background: "#0A1B2F" }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
                title={t.video.iframeTitle}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: "block", width: "100%", height: "100%", border: 0 }}
              />
            </div>
            <p style={{ marginTop: 14, fontSize: 13, color: "rgba(245,240,230,0.6)" }}>{t.video.note}</p>
          </div>
        </section>

        {/* ── Putting on / taking off ── */}
        <section className="c-section-pad-lg" id="etapes">
          <div className="c-container">
            <div className="c-reveal" style={{ maxWidth: 720 }}>
              <p className="c-eyebrow"><span className="c-dot" />{t.steps.eyebrow}</p>
              <h2 className="c-h1" style={{ marginTop: 14 }}>
                {t.steps.title}
              </h2>
              <p className="c-lede" style={{ marginTop: 20, maxWidth: "52ch" }}>
                {t.steps.lede}
              </p>
            </div>

            <div className="ccm-steps-grid" style={{ marginTop: 56 }}>
              <div>
                <p style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 16, fontWeight: 500 }}>{t.steps.phase1Label}</p>
                <StepList steps={t.steps.phase1} accent="var(--accent)" />
              </div>
              <div className="ccm-steps-media c-reveal">
                <SectionMedia
                  src={`${SHOP_IMG}/COALAouverteharnais.png?v=1770111585&width=700`}
                  alt={t.steps.phase1Alt}
                />
                <p className="ccm-media-caption">{t.steps.phase1Caption}</p>
              </div>
            </div>

            <div className="ccm-steps-grid" style={{ marginTop: 48 }}>
              <div>
                <p style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 16, fontWeight: 500 }}>{t.steps.phase2Label}</p>
                <StepList steps={t.steps.phase2} accent="var(--navy)" />
                <div style={{ borderBottom: "1px solid var(--hair)" }} />
              </div>
              <div className="ccm-steps-media c-reveal">
                <SectionMedia
                  src={`${SHOP_IMG}/Coalasanspoignee.png?v=1769697464&width=700`}
                  alt={t.steps.phase2Alt}
                />
                <p className="ccm-media-caption">{t.steps.phase2Caption}</p>
              </div>
            </div>

            <div className="c-reveal" style={{ marginTop: 32, padding: "20px 24px", background: "var(--bg-elev)", border: "1px solid var(--hair)", borderRadius: "var(--r-lg)", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ color: "#C97A52", flexShrink: 0, marginTop: 1 }}><AlertIcon /></span>
              <p style={{ margin: 0, fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>
                {t.steps.warning}
              </p>
            </div>
          </div>
        </section>

        {/* ── Use cases ── */}
        <section className="c-section-pad-lg" style={{ background: "var(--bg-elev)" }} id="situations">
          <div className="c-container">
            <div className="ccm-intro-grid">
              <div className="c-reveal">
                <p className="c-eyebrow"><span className="c-dot" />{t.situations.eyebrow}</p>
                <h2 className="c-h1" style={{ marginTop: 14 }}>
                  {t.situations.title}
                </h2>
                <p className="c-lede" style={{ marginTop: 20, maxWidth: "52ch" }}>
                  {t.situations.lede}
                </p>
              </div>
              <div className="ccm-intro-media c-reveal" style={{ transitionDelay: "120ms" }}>
                <img
                  src="https://cdn.shopify.com/s/files/1/0928/2342/1309/files/Transfert_-_mise_au_dehambulateur_sans_prise.png?v=1770111585&width=700"
                  alt={t.situations.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="c-reveal" style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
              {t.situations.items.map((s) => (
                <div key={s} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px 20px", background: "var(--bg)", border: "1px solid var(--hair)", borderRadius: "var(--r-lg)" }}>
                  <span style={{ color: "#2F7A52", flexShrink: 0, marginTop: 1 }}><CheckIcon /></span>
                  <span style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.45 }}>{s}</span>
                </div>
              ))}
            </div>

            <div className="c-reveal" style={{ marginTop: 48, padding: "32px", background: "var(--bg)", border: "1px solid var(--hair)", borderRadius: "var(--r-lg)" }}>
              <h3 style={{ fontSize: 19, fontWeight: 500, color: "var(--ink)", margin: 0 }}>{t.situations.profilesTitle}</h3>
              <p style={{ marginTop: 10, fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55, maxWidth: "68ch" }}>
                {t.situations.profilesIntro}
              </p>
              <ul style={{ margin: "20px 0 0", padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 10 }}>
                {t.situations.profiles.map((p) => (
                  <li key={p} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14.5, color: "var(--ink-2)" }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
                    {p}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 20, fontSize: 13, color: "var(--muted)", maxWidth: "72ch" }}>
                {t.situations.profilesNote}
              </p>
            </div>
          </div>
        </section>

        {/* ── Grip guidance ── */}
        <section className="c-section-pad-lg" id="reperes">
          <div className="c-container">
            <div className="ccm-intro-grid">
              <div className="c-reveal">
                <p className="c-eyebrow"><span className="c-dot" />{t.grips.eyebrow}</p>
                <h2 className="c-h1" style={{ marginTop: 14 }}>
                  {t.grips.title}
                </h2>
                <p className="c-lede" style={{ marginTop: 20, maxWidth: "52ch" }}>
                  {t.grips.lede}
                </p>
              </div>
              <div className="c-reveal" style={{ transitionDelay: "120ms" }}>
                <SectionMedia
                  src={`${SHOP_IMG}/ChatGPT_Image_26_dec._2025_19_00_17.png?v=1770111585&width=700`}
                  alt={t.grips.imageAlt}
                />
                <p className="ccm-media-caption">{t.grips.caption}</p>
              </div>
            </div>
            <div className="c-reveal" style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
              {t.grips.items.map((r, i) => ({ ...r, ok: GRIP_OK[i] })).map((r) => (
                <div key={r.title} style={{ padding: "26px 28px", background: "var(--bg-elev)", border: "1px solid var(--hair)", borderRadius: "var(--r-lg)" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ color: r.ok ? "#2F7A52" : "#C97A52", flexShrink: 0, display: "inline-flex" }}>
                      {r.ok ? <CheckIcon /> : <AlertIcon />}
                    </span>
                    <strong style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)" }}>{r.title}</strong>
                  </div>
                  <p style={{ margin: "10px 0 0", fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>{r.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Verbal guidance ── */}
        <section className="c-section-pad-lg" style={{ background: "var(--bg-elev)" }} id="script-verbal">
          <div className="c-container">
            <div className="ccm-intro-grid">
              <div>
                <p className="c-eyebrow c-reveal"><span className="c-dot" />{t.verbal.eyebrow}</p>
                <h2 className="c-h1 c-reveal" style={{ marginTop: 14 }}>
                  {t.verbal.title}
                </h2>
                <p className="c-lede c-reveal" style={{ marginTop: 20, maxWidth: "52ch" }}>
                  {t.verbal.lede}
                </p>
              </div>
              <div className="c-reveal" style={{ transitionDelay: "120ms" }}>
                <SectionMedia
                  src={`${SHOP_IMG}/ChatGPT_Image_5_dec._2025_10_53_22_c6c4330d-01e7-4274-9293-d4bb24e11d1b.png?v=1770111585&width=800`}
                  alt={t.verbal.imageAlt}
                  ratio="4 / 3"
                />
                <p className="ccm-media-caption">{t.verbal.caption}</p>
              </div>
            </div>

            <div className="c-reveal" style={{ marginTop: 40, maxWidth: 720 }}>
              <p style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 14, fontWeight: 500 }}>{t.verbal.evaluationLabel}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {t.verbal.evaluation.map((p) => (
                  <span key={p} style={{ padding: "12px 18px", background: "var(--bg)", border: "1px solid var(--hair)", borderRadius: 999, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 15.5, color: "var(--ink)" }}>{p}</span>
                ))}
              </div>
            </div>

            <div className="c-reveal" style={{ marginTop: 40, maxWidth: 720 }}>
              <p style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 14, fontWeight: 500 }}>{t.verbal.sequenceLabel}</p>
              <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {t.verbal.sequence.map((phrase, i) => (
                  <li key={phrase} style={{ padding: "18px 24px", background: "var(--bg)", border: "1px solid var(--hair)", borderRadius: "var(--r-lg)", display: "grid", gridTemplateColumns: "40px 1fr", gap: 18, alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 24, color: "var(--accent)", lineHeight: 1 }}>{i + 1}</span>
                    <span style={{ fontSize: 16.5, color: "var(--ink)", lineHeight: 1.5, fontFamily: "var(--font-serif)", fontStyle: "italic" }}>{phrase}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── Caregiver posture ── */}
        <section className="c-section-pad-lg" id="posture">
          <div className="c-container">
            <div className="c-reveal" style={{ maxWidth: 720 }}>
              <p className="c-eyebrow"><span className="c-dot" />{t.posture.eyebrow}</p>
              <h2 className="c-h1" style={{ marginTop: 14 }}>
                {t.posture.title}
              </h2>
              <p className="c-lede" style={{ marginTop: 20, maxWidth: "52ch" }}>
                {t.posture.lede}
              </p>
            </div>
            <div className="c-reveal" style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {t.posture.items.map((item, i) => ({ ...item, icon: POSTURE_ICONS[i] })).map((item) => (
                <div key={item.title} style={{ padding: "28px", background: "var(--bg-elev)", border: "1px solid var(--hair)", borderRadius: "var(--r-lg)" }}>
                  <span className="ccm-picto">{item.icon}</span>
                  <strong style={{ display: "block", fontSize: 17, fontWeight: 600, color: "var(--ink)", margin: "16px 0 10px" }}>{item.title}</strong>
                  <p style={{ margin: 0, fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Care ── */}
        <section className="c-section-pad-lg" style={{ background: "var(--bg-elev)" }} id="entretien">
          <div className="c-container">
            <div className="ccm-intro-grid">
              <div className="c-reveal">
                <p className="c-eyebrow"><span className="c-dot" />{t.care.eyebrow}</p>
                <h2 className="c-h1" style={{ marginTop: 14 }}>
                  {t.care.title}
                </h2>
                <ul style={{ marginTop: 40, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {t.care.items.map((text, i) => ({ text, icon: CARE_ICONS[i] })).map((e) => (
                    <li key={e.text} style={{ display: "flex", gap: 16, alignItems: "center", padding: "18px 22px", background: "var(--bg)", border: "1px solid var(--hair)", borderRadius: "var(--r-lg)" }}>
                      <span className="ccm-picto ccm-picto--sm">{e.icon}</span>
                      <span style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.5 }}>{e.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="c-reveal" style={{ transitionDelay: "120ms" }}>
                <SectionMedia
                  src={`${SHOP_IMG}/Packshotplie.png?v=1770111585&width=700`}
                  alt={t.care.imageAlt}
                />
                <p className="ccm-media-caption">{t.care.caption}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Deployment ── */}
        <section className="c-section-pad-lg" id="deploiement">
          <div className="c-container">
            <div className="c-reveal" style={{ maxWidth: 720 }}>
              <p className="c-eyebrow"><span className="c-dot" />{t.deployment.eyebrow}</p>
              <h2 className="c-h1" style={{ marginTop: 14 }}>
                {t.deployment.title}
              </h2>
            </div>
            <ol className="c-reveal" style={{ marginTop: 48, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              {t.deployment.factors.map((f, i) => (
                <li key={f} style={{ padding: "28px 24px", background: "var(--bg-elev)", border: "1px solid var(--hair)", borderRadius: "var(--r-lg)" }}>
                  <span aria-hidden="true" style={{ display: "flex", gap: 2, color: "var(--accent)", marginBottom: 14 }}>
                    {Array.from({ length: i + 1 }, (_, k) => <StarIcon key={k} />)}
                  </span>
                  <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 30, color: "var(--accent)", lineHeight: 1 }}>{`0${i + 1}`}</span>
                  <p style={{ margin: "14px 0 0", fontSize: 16, color: "var(--ink)", lineHeight: 1.45 }}>{f}</p>
                </li>
              ))}
            </ol>

            <div className="c-reveal" style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: 16 }}>
              <div style={{ padding: "32px", background: "var(--navy)", borderRadius: "var(--r-lg)" }}>
                <p style={{ margin: 0, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,240,230,0.6)" }}>{t.deployment.staffLabel}</p>
                <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {t.deployment.staffQuotes.map((v) => (
                    <li key={v} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 16.5, color: "#F5F0E6", lineHeight: 1.45 }}>{v}</li>
                  ))}
                </ul>
              </div>
              <div style={{ padding: "32px", background: "var(--bg-elev)", border: "1px solid var(--hair)", borderRadius: "var(--r-lg)" }}>
                <p style={{ margin: 0, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)" }}>{t.deployment.patientLabel}</p>
                <ul style={{ margin: "18px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {t.deployment.patientQuotes.map((v) => (
                    <li key={v} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 16.5, color: "var(--ink)", lineHeight: 1.45 }}>{v}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="c-section-pad-lg">
          <div className="c-container">
            <div className="c-reveal" style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between", alignItems: "center", padding: "48px", background: "var(--navy)", borderRadius: 22 }}>
              <div style={{ maxWidth: "44ch" }}>
                <h2 style={{ color: "#F5F0E6", margin: 0, fontSize: "clamp(24px,3vw,36px)", fontFamily: "var(--font-serif)", fontStyle: "italic", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                  {t.cta.title}
                </h2>
                <p style={{ color: "rgba(245,240,230,0.75)", marginTop: 14, fontSize: 16, lineHeight: 1.5 }}>
                  {t.cta.body}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href="https://shop.connectlink.fr" target="_blank" rel="noopener noreferrer" className="c-btn c-btn--accent c-btn--lg">
                  {t.cta.order}
                </a>
                <Link page="quote" className="c-btn c-btn--lg" style={{ background: "rgba(255,255,255,0.1)", color: "#F5F0E6", border: "1px solid rgba(255,255,255,0.2)" }}>
                  {t.cta.quote}
                </Link>
              </div>
            </div>

            <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 1, background: "var(--hair)", border: "1px solid var(--hair)", borderRadius: "var(--r-lg)", overflow: "hidden" }}>
              {t.cta.cards.map((c, i) => ({ ...c, page: CARD_PAGES[i] })).map((c) => (
                <Link key={c.page} page={c.page} style={{ display: "flex", flexDirection: "column", gap: 6, padding: "28px 32px", background: "var(--bg)", textDecoration: "none" }}>
                  <span style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>{c.eyebrow}</span>
                  <span style={{ fontSize: 18, fontWeight: 500, color: "var(--ink)" }}>{c.title} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

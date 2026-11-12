import { useState, useEffect } from "react";
import { Seo } from "@/components/coala/Seo";
import { Link } from "@/i18n/Link";
import { NavBar } from "@/components/coala/NavBar";
import { Footer } from "@/components/coala/Footer";
import { useCopy } from "@/i18n/useCopy";
import { PRODUCT } from "@/i18n/content/product";

/* ── Icons ── */
const CartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 4h2l2.5 12.5a2 2 0 0 0 2 1.5h7.5a2 2 0 0 0 2-1.6L21 8H6" />
    <circle cx="9" cy="21" r="1.4" /><circle cx="18" cy="21" r="1.4" />
  </svg>
);

const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12.5l5 5L20 6" />
  </svg>
);

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const MinusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <path d="M5 12h14" />
  </svg>
);

const QuoteIcon = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor" aria-hidden="true">
    <path d="M0 24V13C0 5.8 4.5 1 11 0v4C8 5 6 7.5 6 11h5v13H0zm17 0V13c0-7.2 4.5-12 11-13v4c-3 1-5 3.5-5 7h5v13H17z" />
  </svg>
);

const SHOP_IMG = "https://cdn.shopify.com/s/files/1/0928/2342/1309/files";

/* ── Product image ── */
function ProductImg({
  src,
  alt,
  ratio = "4 / 5",
  width = 900,
  fit = "cover",
}: { src: string; alt: string; ratio?: string; width?: number; fit?: "cover" | "contain" }) {
  return (
    <div style={{
      aspectRatio: ratio,
      width: "100%",
      borderRadius: "var(--r-lg)",
      overflow: "hidden",
      background: "#FBF7EE",
    }}>
      <img
        src={`${src}&width=${width}`}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ display: "block", width: "100%", height: "100%", objectFit: fit, objectPosition: "center" }}
      />
    </div>
  );
}

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

/* ============================================================
   ProductBuy — gallery + purchase panel
   ============================================================ */
const VIEW_SRCS = [
  `${SHOP_IMG}/Coala4poignees.png?v=1769697464`,
  `${SHOP_IMG}/Coala4poignees3_4.png?v=1770111585`,
  `${SHOP_IMG}/Coalasanspoignee.png?v=1769697464`,
  `${SHOP_IMG}/COALAouverteharnais.png?v=1770111585`,
  `${SHOP_IMG}/EgerieCoalaHome.png?v=1767281893`,
  `${SHOP_IMG}/EgerieHomesanspoignee.png?v=1767281893`,
  `${SHOP_IMG}/ChatGPT_Image_26_dec._2025_19_00_17.png?v=1770111585`,
  `${SHOP_IMG}/ChatGPT_Image_5_dec._2025_10_53_22_c6c4330d-01e7-4274-9293-d4bb24e11d1b.png?v=1770111585`,
];

function ProductBuy() {
  const t = useCopy(PRODUCT).buy;
  const views = VIEW_SRCS.map((src, i) => ({ src, label: t.viewLabels[i] }));
  const [active, setActive] = useState(0);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
  const [size, setSize] = useState("M");

  return (
    <section className="c-section-pad fp-buy" id="acheter">
      <div className="c-container">
        <div className="fp-buy-grid">
          {/* Gallery */}
          <div className="fp-gallery c-reveal">
            <div style={{ position: "relative" }}>
              <ProductImg src={views[active].src} alt={views[active].label} ratio="4 / 5" width={1100} />
              <div className="fp-gallery-id">
                {t.refPrefix}{size}
              </div>
            </div>
            <div className="fp-thumbs" role="group" aria-label={t.thumbsAria}>
              {views.map((v, i) => (
                <button
                  key={i}
                  className={`fp-thumb${i === active ? " fp-thumb--active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={v.label}
                  aria-pressed={i === active}
                >
                  <ProductImg src={v.src} alt="" ratio="1 / 1" width={260} />
                </button>
              ))}
            </div>
          </div>

          {/* Info panel */}
          <div className="fp-info c-reveal" style={{ transitionDelay: "120ms" }}>
            <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
            <h1 className="c-h1" style={{ marginTop: 14 }}>{t.title}</h1>
            <p className="c-lede" style={{ marginTop: 20 }}>
              {t.lede}
            </p>

            <div className="fp-price">
              <span className="fp-price-amount">{t.price}</span>
              <span className="fp-price-meta">{t.priceMeta}</span>
            </div>

            <div className="fp-selectors">
              {/* Size */}
              <div className="fp-selector-row">
                <div className="fp-selector-label">
                  <span>{t.sizeLabel}</span>
                  <a href="#guide" className="fp-selector-help">{t.sizeGuide}</a>
                </div>
                <div className="fp-size-grid" role="group" aria-label={t.sizeAria}>
                  {sizes.map((s) => (
                    <button
                      key={s}
                      className={`fp-size-btn${s === size ? " fp-size-btn--active" : ""}`}
                      onClick={() => setSize(s)}
                      aria-pressed={s === size}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div className="fp-selector-row">
                <div className="fp-selector-label">
                  <span>{t.colourLabel}</span>
                </div>
                <p className="fp-color-note">
                  {t.colourNote}
                </p>
              </div>
            </div>

            <div className="fp-ctas">
              <a
                href="https://shop.connectlink.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="c-btn c-btn--primary c-btn--lg fp-cta-primary"
              >
                <CartIcon /> {t.ctaOrder}
              </a>
              <Link page="quote" className="c-btn c-btn--secondary c-btn--lg">
                {t.ctaQuote}
              </Link>
            </div>

            <ul className="fp-reassurance" aria-label={t.reassuranceAria}>
              {t.reassurance.map((r) => (
                <li key={r}><CheckIcon /> {r}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FeatureGrid — 4 technical innovations
   ============================================================ */
const FEATURE_MEDIA = [
  { src: `${SHOP_IMG}/Coala4poignees.png?v=1769697464`, fit: "contain" as const },
  { src: `${SHOP_IMG}/Coalasanspoignee.png?v=1769697464`, fit: "contain" as const },
  { src: `${SHOP_IMG}/COALAouverteharnais.png?v=1770111585`, fit: "contain" as const },
  { src: `${SHOP_IMG}/Transfert_-_mise_au_dehambulateur_sans_prise.png?v=1770111585`, fit: "cover" as const },
];

function FeatureGrid() {
  const t = useCopy(PRODUCT).features;
  const features = FEATURE_MEDIA.map((m, i) => ({ ...m, ...t.items[i] }));

  return (
    <section className="c-section-pad-lg fp-features" id="features">
      <div className="c-container">
        <div className="c-reveal" style={{ maxWidth: "760px" }}>
          <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1" style={{ marginTop: 18, maxWidth: "22ch" }}>
            {t.title}
          </h2>
        </div>

        <div className="fp-features-grid">
          {features.map((f, i) => (
            <article key={i} className="fp-feat c-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <ProductImg src={f.src} alt={f.label} ratio="4 / 5" width={800} fit={f.fit} />
              <div>
                <p className="fp-feat-tag">{f.tag}</p>
                <h3 className="c-h3 fp-feat-title">{f.title}</h3>
                <p className="fp-feat-text">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ProductRange — the 3 models in the range
   ============================================================ */
const RANGE = [
  {
    name: "COALA Home",
    price: "129 €",
    href: "https://shop.connectlink.fr/products/coala-home",
    img: `${SHOP_IMG}/EgerieCoalaHome.png?v=1767281893`,
    featured: false,
  },
  {
    name: "COALA Home+",
    price: "149 €",
    href: "https://shop.connectlink.fr/products/coala-home-plus",
    img: `${SHOP_IMG}/EgerieHomePlus.png?v=1767281100`,
    featured: true,
  },
  {
    name: "COALA Pro",
    price: "199 €",
    href: "https://shop.connectlink.fr/products/coala-pro",
    img: `${SHOP_IMG}/EgerieCOALAPro.png?v=1769699275`,
    featured: false,
  },
];

function ProductRange() {
  const t = useCopy(PRODUCT).range;
  const range = RANGE.map((p, i) => ({ ...p, ...t.models[i] }));
  return (
    <section className="c-section-pad-lg" id="gamme">
      <div className="c-container">
        <div className="c-reveal" style={{ maxWidth: "760px" }}>
          <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1" style={{ marginTop: 18 }}>
            {t.title}
          </h2>
          <p className="c-lede" style={{ marginTop: 24 }}>
            {t.lede}
          </p>
        </div>

        <div className="fp-range-grid">
          {range.map((p, i) => (
            <article
              key={p.name}
              className={`fp-range-card c-reveal${p.featured ? " fp-range-card--featured" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p.featured && <span className="fp-range-badge">{t.badge}</span>}
              <div className="fp-range-media">
                <img
                  src={`${p.img}&width=600`}
                  alt={t.imgAlt(p.name)}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="fp-range-name">{p.name}</h3>
              <p className="fp-range-for">{p.audience}</p>
              <p className="fp-range-price">{p.price}<span>{t.vat}</span></p>

              <dl className="fp-range-specs">
                <div>
                  <dt>{t.harnessLabel}</dt>
                  <dd>{p.harness}</dd>
                </div>
                <div>
                  <dt>{t.fabricLabel}</dt>
                  <dd>{p.fabric}</dd>
                </div>
                <div>
                  <dt>{t.supportLabel}</dt>
                  <dd>{p.support}</dd>
                </div>
              </dl>

              <div className="fp-range-cta">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`c-btn ${p.featured ? "c-btn--primary" : "c-btn--secondary"}`}
                >
                  <CartIcon /> {t.cta}
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="fp-range-note">
          {t.noteBefore}<Link page="quote">{t.noteLink}</Link>{t.noteAfter}
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   ProductGo — COALA Go, the vest for emergency services
   ============================================================ */
const GO_LOGO = "/brand/coala-go-logo.png";
const GO_PHOTO = "https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2F1823418be48b425d9d9a58c3de412db6?format=webp&width=900";

function ProductGo() {
  const t = useCopy(PRODUCT).go;
  return (
    <section className="c-section-pad-lg fp-go" id="coala-go">
      <div className="c-container">
        <div className="fp-go-card c-reveal">
          <div className="fp-go-band">
            <h2 className="fp-go-heading">
              <img className="fp-go-logo" src={GO_LOGO} alt="COALA Go" />
            </h2>
            <span className="fp-go-badge">{t.badge}</span>
          </div>

          <div className="fp-go-body">
            <div className="fp-go-top">
              <div className="fp-go-intro">
                <div className="fp-go-head">
                  <h3 className="c-h2 fp-go-sub">{t.subtitle}</h3>
                  <div className="fp-go-price">
                    <span className="fp-go-price-value">{t.priceValue}</span>
                    <Link page="quote" className="c-btn c-btn--accent">
                      {t.priceCta} <ArrowIcon className="c-arr" />
                    </Link>
                  </div>
                </div>

                <p className="fp-go-lede">
                  {t.lede}
                </p>
              </div>

              <div className="fp-go-media">
                <img src={GO_PHOTO} alt={t.photoAlt} loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="fp-go-grid">
              {t.benefits.map((b) => (
                <div key={b.title} className="fp-go-benefit">
                  <strong>{b.title}</strong>
                  <p>{b.detail}</p>
                </div>
              ))}
            </div>

            <div className="fp-go-bottom">
              <dl className="fp-go-specs">
                {t.specs.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="fp-go-usages">
                <p className="fp-go-usages-title">{t.usagesTitle}</p>
                <ul>
                  {t.usages.map((u) => (
                    <li key={u}><CheckIcon /> {u}</li>
                  ))}
                </ul>
                <p className="fp-go-note">
                  {t.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CompareTable — COALA vs alternatives
   ============================================================ */
function CompareTable() {
  const t = useCopy(PRODUCT).compare;
  const rows = t.rows;

  const lines = (value: string) =>
    value.split("\n").map((line, i) => (
      <span key={i} className="fp-compare-line">{line}</span>
    ));

  return (
    <section className="c-section-pad-lg" id="comparatif">
      <div className="c-container">
        <div className="c-reveal" style={{ maxWidth: "760px" }}>
          <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
          <h2 className="c-h1" style={{ marginTop: 18 }}>
            {t.title}
          </h2>
          <p className="c-lede" style={{ marginTop: 24 }}>
            {t.lede}
          </p>
        </div>

        <div className="fp-compare-table c-reveal" style={{ marginTop: 48 }}>
          <div className="fp-compare-row fp-compare-head" role="row">
            <div className="fp-compare-cell fp-compare-cell--label" role="columnheader" />
            <div className="fp-compare-cell fp-compare-cell--coala" role="columnheader">
              <div className="fp-compare-brand fp-compare-brand--accent">COALA</div>
              <div className="fp-compare-sub">{t.coalaSub}</div>
            </div>
            <div className="fp-compare-cell" role="columnheader">
              <div className="fp-compare-brand">{t.machineBrand}</div>
              <div className="fp-compare-sub">{t.machineSub}</div>
            </div>
            <div className="fp-compare-cell" role="columnheader">
              <div className="fp-compare-brand">{t.classicBrand}</div>
              <div className="fp-compare-sub">{t.classicSub}</div>
            </div>
          </div>
          {rows.map((row, i) => (
            <div key={i} className="fp-compare-row" role="row">
              <div className="fp-compare-cell fp-compare-cell--label" role="rowheader">{row.label}</div>
              <div className="fp-compare-cell fp-compare-cell--coala" role="cell">{lines(row.coala)}</div>
              <div className="fp-compare-cell" role="cell">{lines(row.machine)}</div>
              <div className="fp-compare-cell" role="cell">{lines(row.classic)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TechSpecs — specs list + size guide
   ============================================================ */
function TechSpecs() {
  const t = useCopy(PRODUCT).specs;
  const specs = t.items;

  const sizeRows = {
    femme: [
      { size: "XS",  point: "0", confection: "34/36", poitrine: "80–84 cm",   tour: "60–64 cm" },
      { size: "S",   point: "1", confection: "38/40", poitrine: "88–92 cm",   tour: "68–72 cm" },
      { size: "M",   point: "2", confection: "42/44", poitrine: "96–100 cm",  tour: "76–80 cm" },
      { size: "L",   point: "3", confection: "46/48", poitrine: "104–108 cm", tour: "84–88 cm" },
      { size: "XL",  point: "4", confection: "50/52", poitrine: "112–116 cm", tour: "92–96 cm" },
      { size: "XXL", point: "5", confection: "54/56", poitrine: "120–124 cm", tour: "100–104 cm" },
      { size: "3XL", point: "6", confection: "58/60", poitrine: "128–132 cm", tour: "108–112 cm" },
      { size: "4XL", point: "7", confection: "62/64", poitrine: "136–140 cm", tour: "116–120 cm" },
    ],
    homme: [
      { size: "XS",  point: "0", confection: "34/36", poitrine: "70–80 cm",   tour: "68–72 cm" },
      { size: "S",   point: "1", confection: "38/40", poitrine: "84–88 cm",   tour: "76–80 cm" },
      { size: "M",   point: "2", confection: "42/44", poitrine: "92–96 cm",   tour: "84–88 cm" },
      { size: "L",   point: "3", confection: "46/48", poitrine: "100–104 cm", tour: "92–96 cm" },
      { size: "XL",  point: "4", confection: "50/52", poitrine: "108–112 cm", tour: "100–104 cm" },
      { size: "XXL", point: "5", confection: "54/56", poitrine: "116–120 cm", tour: "108–112 cm" },
      { size: "3XL", point: "6", confection: "58/60", poitrine: "124–128 cm", tour: "116–120 cm" },
      { size: "4XL", point: "7", confection: "62/64", poitrine: "132–136 cm", tour: "124–128 cm" },
    ],
  };
  const [morpho, setMorpho] = useState<"femme" | "homme">("femme");

  return (
    <section className="c-section-pad-lg fp-specs-section" id="specs">
      <div className="c-container">
        <div className="fp-specs-grid">
          <div className="c-reveal">
            <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
            <h2 className="c-h2" style={{ marginTop: 14 }}>{t.title}</h2>
            <dl className="fp-specs-list">
              {specs.map((s, i) => (
                <div key={i} className="fp-specs-item">
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
            <a href="#" className="c-btn c-btn--ghost" style={{ marginTop: 24 }}>
              {t.download} <ArrowIcon className="c-arr" />
            </a>
          </div>

          <div className="c-reveal" id="guide" style={{ transitionDelay: "120ms" }}>
            <p className="c-eyebrow"><span className="c-dot" />{t.guideEyebrow}</p>
            <h2 className="c-h2" style={{ marginTop: 14 }}>{t.guideTitle}</h2>
            <p className="fp-size-intro">
              {t.guideIntro}
            </p>
            <div className="fp-size-toggle" role="group" aria-label={t.toggleAria}>
              {(["femme", "homme"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  className={`fp-size-toggle-btn${morpho === m ? " is-active" : ""}`}
                  aria-pressed={morpho === m}
                  onClick={() => setMorpho(m)}
                >
                  {m === "femme" ? t.women : t.men}
                </button>
              ))}
            </div>
            <div className="fp-size-table" style={{ marginTop: 20 }} role="table" aria-label={t.tableAria(morpho === "femme" ? t.women : t.men)}>
              <div className="fp-size-thead" role="row">
                <div role="columnheader">{t.colSize}</div>
                <div role="columnheader">{t.colConfection}</div>
                <div role="columnheader">{t.colChest}</div>
                <div className="fp-size-col-hide" role="columnheader">{t.colWaist}</div>
              </div>
              {sizeRows[morpho].map((r) => (
                <div key={r.size} className="fp-size-row" role="row">
                  <div role="cell">
                    <span className="fp-size-tag">{r.size}</span>
                    <span className="fp-size-point">{t.point} {r.point}</span>
                  </div>
                  <div role="cell">{r.confection}</div>
                  <div role="cell">{r.poitrine}</div>
                  <div className="fp-size-col-hide" role="cell">{r.tour}</div>
                </div>
              ))}
            </div>
            <p className="fp-size-note">{t.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PullQuote — testimonial
   ============================================================ */
function PullQuote() {
  const t = useCopy(PRODUCT).quote;
  return (
    <section className="fp-pull c-section-pad">
      <div className="c-container">
        <figure className="fp-pull-figure c-reveal">
          <QuoteIcon />
          <blockquote className="fp-pull-text">
            {t.text}
          </blockquote>
          <figcaption>
            <div className="fp-pull-name">{t.name}</div>
            <div className="fp-pull-role">{t.role}</div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ============================================================
   ProductFAQ — accordion items
   ============================================================ */
function ProductFAQ() {
  const t = useCopy(PRODUCT).faq;
  const items = t.items;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="c-section-pad-lg" id="faq">
      <div className="c-container">
        <div className="fp-faq-grid">
          <div className="fp-faq-header c-reveal">
            <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
            <h2 className="c-h1" style={{ marginTop: 18 }}>
              {t.title}
            </h2>
            <Link page="faq" className="c-btn c-btn--ghost" style={{ marginTop: 24 }}>
              {t.cta} <ArrowIcon className="c-arr" />
            </Link>
          </div>

          <div className="fp-faq-list c-reveal" style={{ transitionDelay: "120ms" }}>
            {items.map((item, i) => (
              <div key={i} className="fp-faq-item">
                <button
                  className="fp-faq-summary"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                >
                  <span>{item.q}</span>
                  <span className={`fp-faq-icon${openIdx === i ? " fp-faq-icon--open" : ""}`}>
                    {openIdx === i ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
                {openIdx === i && (
                  <p className="fp-faq-answer">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CrossLink — navigation cards to other pages
   ============================================================ */
const CROSS_PAGES = ["howItWorks", "quote", "results"] as const;

function CrossLink() {
  const t = useCopy(PRODUCT).cross;
  const items = CROSS_PAGES.map((page, i) => ({ page, ...t[i] }));

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

/* ============================================================
   Page root
   ============================================================ */
export default function LaBlouseCoala() {
  useReveal();

  return (
    <div className="coala-page">
      <Seo page="product" />

      <NavBar />
      <main>
        <ProductBuy />
        <ProductRange />
        <ProductGo />
        <FeatureGrid />
        <CompareTable />
        <TechSpecs />
        <PullQuote />
        <ProductFAQ />
        <CrossLink />
      </main>
      <Footer />
    </div>
  );
}

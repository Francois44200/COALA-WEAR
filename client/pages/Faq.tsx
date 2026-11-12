import { useState, useMemo, useEffect, useRef, useId } from "react";
import { Seo } from "@/components/coala/Seo";
import { Link } from "@/i18n/Link";
import { NavBar } from "@/components/coala/NavBar";
import { Footer } from "@/components/coala/Footer";
import { FAQ } from "@/data/faq";
import { FAQ_PAGE } from "@/i18n/content/faq";
import { useCopy } from "@/i18n/useCopy";

/* ── Icons ── */
const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
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


/* ── Accordion item ── */
function AccordionItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `${id}-panel`;
  const btnId = `${id}-btn`;
  const answerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="fq-item">
      <button
        id={btnId}
        className="fq-item-btn"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{question}</span>
        <span className={`fq-item-icon${isOpen ? " fq-item-icon--open" : ""}`}>
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`fq-item-answer${isOpen ? " fq-item-answer--open" : ""}`}
        ref={answerRef}
      >
        {answer.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}

/* ── Hero ── */
function FaqHero() {
  const t = useCopy(FAQ_PAGE).hero;
  return (
    <section className="fq-hero">
      <div className="c-container">
        <div className="fq-hero-inner c-reveal">
          <p className="c-eyebrow" style={{ justifyContent: "center" }}>
            <span className="c-dot" />{t.eyebrow}
          </p>
          <h1 className="c-h1 fq-hero-title">
            {t.title}
          </h1>
          <p className="c-lede fq-hero-lede">
            {t.lede}
          </p>
          <div className="fq-hero-ctas">
            <a href="#categories" className="c-btn c-btn--ghost">
              {t.cta} <ArrowIcon className="c-arr" />
            </a>
          </div>
          <div className="fq-hero-meta">
            <span>{t.meta[0]}</span>
            <span className="fq-sep">·</span>
            <span>{t.meta[1]}</span>
            <span className="fq-sep">·</span>
            <span>{t.meta[2]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Main FAQ content ── */
function FaqContent() {
  const t = useCopy(FAQ_PAGE);
  const FAQ_DATA = useCopy(FAQ);
  const TOTAL_QUESTIONS = FAQ_DATA.reduce((acc, cat) => acc + cat.items.length, 0);
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return FAQ_DATA;
    const q = query.toLowerCase();
    return FAQ_DATA.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (it) => it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [query, FAQ_DATA]);

  const filteredCount = filtered.reduce((acc, cat) => acc + cat.items.length, 0);

  const toggleItem = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="categories" className="fq-section">
      <div className="c-container">
        {/* Search */}
        <div className="fq-search-wrap c-reveal">
          <div className="fq-search-row">
            <div className="fq-search-box">
              <span className="fq-search-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
                </svg>
              </span>
              <input
                ref={searchRef}
                type="search"
                className="fq-search-input"
                placeholder={t.search.placeholder(TOTAL_QUESTIONS)}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label={t.search.ariaLabel}
              />
              {query && (
                <button
                  className="fq-search-clear"
                  onClick={() => { setQuery(""); searchRef.current?.focus(); }}
                  aria-label={t.search.clear}
                >
                  ×
                </button>
              )}
            </div>
            <div className="fq-search-meta">
              {query ? (
                <>
                  {t.search.results(filteredCount)} ·{" "}
                  <button className="fq-link" onClick={() => setQuery("")}>{t.search.showAll}</button>
                </>
              ) : (
                <>{t.search.summary(FAQ_DATA.length, TOTAL_QUESTIONS)}</>
              )}
            </div>
          </div>
        </div>

        {/* Grid: TOC + content */}
        <div className="fq-grid">
          {/* Sidebar TOC */}
          <aside className="fq-toc c-reveal" aria-label={t.toc.ariaLabel}>
            <div className="fq-toc-label">{t.toc.label}</div>
            <nav>
              {FAQ_DATA.map((cat) => (
                <a
                  key={cat.id}
                  href={`#cat-${cat.id}`}
                  className="fq-toc-link"
                >
                  <span>{cat.label}</span>
                  <span className="fq-toc-count">{cat.items.length}</span>
                </a>
              ))}
            </nav>
            <div className="fq-toc-help">
              <div className="fq-toc-help-tag">{t.toc.helpTag}</div>
              <Link page="contact" className="fq-toc-help-link">
                {t.toc.helpLink} <ArrowIcon className="c-arr" />
              </Link>
            </div>
          </aside>

          {/* Categories */}
          <div className="fq-cats">
            {filtered.map((cat) => (
              <section key={cat.id} id={`cat-${cat.id}`} className="fq-cat">
                <header className="fq-cat-head">
                  <p className="fq-cat-tag">{cat.label}</p>
                  <h2 className="c-h2">{cat.desc}</h2>
                  <p className="fq-cat-meta">
                    {t.questionCount(cat.items.length)}
                  </p>
                </header>
                <div className="fq-list" role="list">
                  {cat.items.map((item, i) => {
                    const id = `${cat.id}-${i}`;
                    return (
                      <div key={id} role="listitem">
                        <AccordionItem
                          id={id}
                          question={item.q}
                          answer={item.a}
                          isOpen={openId === id}
                          onToggle={() => toggleItem(id)}
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}

            {filtered.length === 0 && (
              <div className="fq-empty" role="status">
                <div className="fq-empty-icon" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
                <h3 className="c-h3" style={{ marginTop: 16 }}>
                  {t.empty.title(query)}
                </h3>
                <p style={{ marginTop: 8, color: "var(--ink-2)" }}>
                  {t.empty.body}
                </p>
                <Link page="contact" className="c-btn c-btn--secondary" style={{ marginTop: 24 }}>
                  {t.empty.cta} <ArrowIcon className="c-arr" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CrossLink ── */
function CrossLink() {
  const t = useCopy(FAQ_PAGE);
  const pages = ["contact", "quote", "product"] as const;
  const items = pages.map((page, i) => ({ ...t.crossLinks[i], page }));

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
export default function Faq() {
  useReveal();

  return (
    <div className="coala-page">
      <Seo page="faq" />

      <NavBar />
      <main>
        <FaqHero />
        <FaqContent />
        <CrossLink />
      </main>
      <Footer />
    </div>
  );
}

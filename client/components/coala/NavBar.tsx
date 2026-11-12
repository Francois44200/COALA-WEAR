import { useState, useEffect } from "react";
import { Link } from "@/i18n/Link";
import type { PageKey } from "@/i18n/routes";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useCopy } from "@/i18n/useCopy";
import { NAV, type NavCopy } from "@/i18n/content/nav";

const CartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 4h2l2.5 12.5a2 2 0 0 0 2 1.5h7.5a2 2 0 0 0 2-1.6L21 8H6" />
    <circle cx="9" cy="21" r="1.4" /><circle cx="18" cy="21" r="1.4" />
  </svg>
);

const NAV_LINKS: (PageKey & keyof NavCopy)[] = ["product", "howItWorks", "teams", "results", "faq"];

export function NavBar() {
  const t = useCopy(NAV);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`c-nav${scrolled ? " c-nav--scrolled" : ""}`} aria-label={t.mainNav}>
      <div className="c-nav__inner c-container">
        <div className="c-nav__left">
          <Link page="home" className="c-logo" aria-label={t.home}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2Fb05481afa26c4be590a522f19604a999?format=webp&width=800&height=1200"
              alt="COALA"
              className="c-logo__img"
            />
          </Link>
          <span className="c-nav__by">{t.by}</span>
        </div>
        <ul className="c-nav__links" role="list">
          {NAV_LINKS.map((page) => (
            <li key={page}>
              <Link page={page}>{t[page]}</Link>
            </li>
          ))}
        </ul>
        <div className="c-nav__cta">
          <LanguageSwitcher />
          <Link page="quote" className="c-btn c-btn--ghost c-btn--sm">
            {t.quote}
          </Link>
          <a
            href="https://shop.connectlink.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="c-btn c-btn--primary c-btn--sm"
          >
            <CartIcon /> {t.order}
          </a>
        </div>
      </div>
    </nav>
  );
}

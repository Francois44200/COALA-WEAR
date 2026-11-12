import { Link } from "@/i18n/Link";
import { useCopy } from "@/i18n/useCopy";
import { FOOTER } from "@/i18n/content/footer";

const FlagIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 21V4M4 5h12l-2 4 2 4H4" />
  </svg>
);

export function Footer() {
  const t = useCopy(FOOTER);
  return (
    <footer className="c-footer">
      <div className="c-container">
        <div className="c-footer__top">
          <div>
            <Link page="home" className="c-logo" aria-label={t.homeAria}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2Fb05481afa26c4be590a522f19604a999?format=webp&width=800&height=1200"
                alt={t.logoAlt}
                className="c-logo__img c-logo__img--footer"
              />
            </Link>
            <p className="c-footer__tag">
              {t.tagline}
            </p>
            <p className="c-footer__by">
              {t.byPrefix}{" "}
              <Link page="about">Connect Link</Link>.
            </p>
          </div>

          <div className="c-footer__cols">
            <div className="c-footer__col">
              <h4>{t.productHeading}</h4>
              <Link page="product">{t.product}</Link>
              <Link page="howItWorks">{t.howItWorks}</Link>
              <Link page="results">{t.results}</Link>
              <Link page="faq">{t.faq}</Link>
            </div>
            <div className="c-footer__col">
              <h4>{t.journeysHeading}</h4>
              <Link page="family">{t.family}</Link>
              <Link page="teams">{t.teams}</Link>
              <Link page="quote">{t.quote}</Link>
            </div>
            <div className="c-footer__col">
              <h4>{t.companyHeading}</h4>
              <Link page="about">{t.about}</Link>
              <Link page="contact">{t.contact}</Link>
            </div>
            <div className="c-footer__col">
              <h4>{t.followHeading}</h4>
              <a href="https://www.linkedin.com/company/connect-link-blouse-coala" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.youtube.com/@ConnectLink-COALA" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://www.instagram.com/coala_connectlink/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>

        <div className="c-footer__bottom">
          <div className="c-footer__legal">
            <span>© 2025 Connect Link · COALA®&nbsp;</span>
            <Link page="legal">{t.legal}</Link>
            <a href="https://shop.connectlink.fr/policies/privacy-policy" target="_blank" rel="noopener noreferrer">{t.privacy}</a>
            <a href="https://shop.connectlink.fr/policies/terms-of-sale" target="_blank" rel="noopener noreferrer">{t.terms}</a>
          </div>
          <div className="c-footer__flag">
            <FlagIcon /> {t.patented}
          </div>
        </div>
      </div>
    </footer>
  );
}

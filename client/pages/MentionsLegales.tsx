import { Seo } from "@/components/coala/Seo";
import { NavBar } from "@/components/coala/NavBar";
import { Footer } from "@/components/coala/Footer";
import { useCopy } from "@/i18n/useCopy";
import { LEGAL } from "@/i18n/content/legal";

export default function MentionsLegales() {
  const t = useCopy(LEGAL);
  return (
    <div className="coala-page">
      <Seo page="legal" />
      <NavBar />
      <main>
        {/* TODO-EN: share capital and host postal address still missing (not in the public registry data used). */}
        <section className="c-section-pad-lg">
          <div className="c-container" style={{ maxWidth: "760px" }}>
            <h1 className="c-h1">{t.title}</h1>
            <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "32px", color: "var(--ink-2)", fontSize: "15px", lineHeight: "1.65" }}>
              <p>{t.intro}</p>
              <div>
                <h2 style={{ fontSize: "17px", fontWeight: 500, color: "var(--ink)", marginBottom: "12px" }}>{t.publisherHeading}</h2>
                <p>
                  <strong>Connect Link SAS</strong> · {t.legalForm}<br />
                  {t.registeredOffice}: 1 rue Étienne Destranges, 44200 Nantes, France<br />
                  {t.premises}: Bio-incubateur Eurasanté, 70 rue du Docteur Yersin, 59120 Loos, France<br />
                  {t.registration} 913 632 683 (SIRET 913 632 683 00029)<br />
                  {t.vat}: FR04913632683<br />
                  {t.director}: François-Rémi Roche, {t.directorRole}<br />
                  {t.emailLabel}: <a href="mailto:contact@connectlink.fr" style={{ color: "var(--accent)", textDecoration: "none" }}>contact@connectlink.fr</a>
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: "17px", fontWeight: 500, color: "var(--ink)", marginBottom: "12px" }}>{t.hostHeading}</h2>
                <p>
                  {t.hostText} <strong>Netlify</strong><br />
                  <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>www.netlify.com</a>
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: "17px", fontWeight: 500, color: "var(--ink)", marginBottom: "12px" }}>{t.ipHeading}</h2>
                <p>{t.ipText}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { useState, type FormEvent } from "react";
import { Seo } from "@/components/coala/Seo";
import { useLocale } from "@/i18n/LocaleContext";
import { NavBar } from "@/components/coala/NavBar";
import { Footer } from "@/components/coala/Footer";
import { useCopy } from "@/i18n/useCopy";
import { CONTACT } from "@/i18n/content/contact";

type Status = "idle" | "sending" | "sent" | "error";
type FieldName = "nom" | "prenom" | "email" | "profil" | "objet" | "message" | "rgpd";

function validate(form: HTMLFormElement, MESSAGES: Record<FieldName, string>): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  const fd = new FormData(form);
  (["nom", "prenom", "objet", "message"] as const).forEach((k) => {
    if (!String(fd.get(k) ?? "").trim()) errors[k] = MESSAGES[k];
  });
  const email = form.elements.namedItem("email") as HTMLInputElement;
  if (!email.value.trim() || !email.validity.valid) errors.email = MESSAGES.email;
  if (!fd.get("profil")) errors.profil = MESSAGES.profil;
  if (!fd.get("rgpd")) errors.rgpd = MESSAGES.rgpd;
  return errors;
}

export default function Contact() {
  const { locale } = useLocale();
  const t = useCopy(CONTACT);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});

  const invalid = (k: FieldName) => (errors[k] ? true : undefined);
  const describedBy = (k: FieldName) => (errors[k] ? `ct-err-${k}` : undefined);
  const errorText = (k: FieldName) =>
    errors[k] ? <span id={`ct-err-${k}`} className="ct-field-error">{errors[k]}</span> : null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form, t.messages);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      const el = form.querySelector<HTMLElement>(`[name="${first}"]`);
      el?.focus();
      return;
    }

    setStatus("sending");
    try {
      const formData = new FormData(form);
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const errorCount = Object.keys(errors).length;

  return (
    <div className="coala-page">
      <Seo page="contact" />
      <NavBar />
      <main>
        <section className="c-section-pad-lg">
          <div className="c-container dv-grid">
            <div>
              <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
              <h1 className="c-h-display ct-title">
                {t.title}
              </h1>
              <p className="c-lede ct-lede">
                {t.lede}
              </p>
              <div className="ct-coords">
                <div>
                  <p className="ct-coords-label">{t.emailLabel}</p>
                  <a href="mailto:contact@connectlink.fr" className="ct-coords-link">contact@connectlink.fr</a>
                </div>
                <div>
                  <p className="ct-coords-label">{t.addressLabel}</p>
                  <p className="ct-coords-text">
                    70 rue du Docteur Yersin<br />
                    Bio-incubateur Eurasanté<br />
                    59120 Loos · France
                  </p>
                </div>
              </div>
            </div>

            {status === "sent" ? (
              <div className="dv-form dv-success" role="status">
                <h2 className="c-h3">{t.success}</h2>
              </div>
            ) : (
              <form
                className="dv-form"
                name="contact-intl"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                noValidate
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact-intl" />
                <input type="hidden" name="langue" value={locale} />
                <label className="ct-honey" aria-hidden="true">
                  {t.honeypot}
                  <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>

                {errorCount > 0 && (
                  <p className="dv-error" role="alert">
                    {errorCount === 1 ? t.errorsOne : t.errorsMany(errorCount)}
                  </p>
                )}

                <div className="dv-row">
                  <div className="dv-field">
                    <label htmlFor="ct-nom">{t.labels.nom} <em>*</em></label>
                    <input id="ct-nom" type="text" name="nom" required autoComplete="family-name"
                      aria-invalid={invalid("nom")} aria-describedby={describedBy("nom")} />
                    {errorText("nom")}
                  </div>
                  <div className="dv-field">
                    <label htmlFor="ct-prenom">{t.labels.prenom} <em>*</em></label>
                    <input id="ct-prenom" type="text" name="prenom" required autoComplete="given-name"
                      aria-invalid={invalid("prenom")} aria-describedby={describedBy("prenom")} />
                    {errorText("prenom")}
                  </div>
                </div>

                <div className="dv-row">
                  <div className="dv-field">
                    <label htmlFor="ct-email">{t.labels.email} <em>*</em></label>
                    <input id="ct-email" type="email" name="email" required autoComplete="email"
                      aria-invalid={invalid("email")} aria-describedby={describedBy("email")} />
                    {errorText("email")}
                  </div>
                  <div className="dv-field">
                    <label htmlFor="ct-telephone">{t.labels.telephone}</label>
                    <input id="ct-telephone" type="tel" name="telephone" autoComplete="tel" />
                  </div>
                </div>

                <fieldset className="ct-fieldset" aria-invalid={invalid("profil")} aria-describedby={describedBy("profil")}>
                  <legend>{t.labels.profil} <em>*</em></legend>
                  <div className="ct-radios">
                    {t.profils.map((p) => (
                      <label key={p.value} className="ct-radio">
                        <input type="radio" name="profil" value={p.value} required />
                        <span>{p.label}</span>
                      </label>
                    ))}
                  </div>
                  {errorText("profil")}
                </fieldset>

                <div className="dv-field">
                  <label htmlFor="ct-objet">{t.labels.objet} <em>*</em></label>
                  <input id="ct-objet" type="text" name="objet" required
                    aria-invalid={invalid("objet")} aria-describedby={describedBy("objet")} />
                  {errorText("objet")}
                </div>

                <div className="dv-field">
                  <label htmlFor="ct-message">{t.labels.message} <em>*</em></label>
                  <textarea id="ct-message" name="message" rows={6} required
                    aria-invalid={invalid("message")} aria-describedby={describedBy("message")} />
                  {errorText("message")}
                </div>

                <div className="ct-consent">
                  <input id="ct-rgpd" type="checkbox" name="rgpd" required
                    aria-invalid={invalid("rgpd")} aria-describedby={describedBy("rgpd")} />
                  <label htmlFor="ct-rgpd">
                    {t.consent} <em>*</em>
                  </label>
                  {errorText("rgpd")}
                </div>

                {status === "error" && (
                  <p className="dv-error" role="alert">
                    {t.sendError}{" "}
                    <a href="mailto:contact@connectlink.fr">contact@connectlink.fr</a>
                  </p>
                )}

                <div className="dv-actions">
                  <button type="submit" className="c-btn c-btn--primary c-btn--lg" disabled={status === "sending"}>
                    {status === "sending" ? t.sending : t.send}
                  </button>
                  <span className="dv-required">{t.required}</span>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

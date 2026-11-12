import { useState, type FormEvent } from "react";
import { Seo } from "@/components/coala/Seo";
import { useLocale } from "@/i18n/LocaleContext";
import { NavBar } from "@/components/coala/NavBar";
import { Footer } from "@/components/coala/Footer";
import { useCopy } from "@/i18n/useCopy";
import { QUOTE } from "@/i18n/content/quote";

type Status = "idle" | "sending" | "sent" | "error";
type FieldName = "societe" | "contact" | "email" | "adresse" | "quantite" | "date" | "rgpd";

function validate(form: HTMLFormElement, MESSAGES: Record<FieldName, string>): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  (Object.keys(MESSAGES) as FieldName[]).forEach((k) => {
    const el = form.elements.namedItem(k) as HTMLInputElement;
    const empty = el.type === "checkbox" ? !el.checked : !el.value.trim();
    if (empty || !el.validity.valid) errors[k] = MESSAGES[k];
  });
  return errors;
}

export default function Devis() {
  const { locale } = useLocale();
  const t = useCopy(QUOTE);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const today = new Date().toISOString().slice(0, 10);

  const invalid = (k: FieldName) => (errors[k] ? true : undefined);
  const describedBy = (k: FieldName) => (errors[k] ? `dv-err-${k}` : undefined);
  const errorText = (k: FieldName) =>
    errors[k] ? <span id={`dv-err-${k}`} className="ct-field-error">{errors[k]}</span> : null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(form, t.messages);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
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
      <Seo page="quote" />
      <NavBar />
      <main>
        <section className="c-section-pad-lg">
          <div className="c-container dv-grid">
            <div>
              <p className="c-eyebrow"><span className="c-dot" />{t.eyebrow}</p>
              <h1 className="c-h-display dv-title">
                {t.title}
              </h1>
              <p className="c-lede ct-lede">
                {t.lede}
              </p>
            </div>

            {status === "sent" ? (
              <div className="dv-form dv-success" role="status">
                <h2 className="c-h3">{t.success}</h2>
              </div>
            ) : (
              <form
                className="dv-form"
                name="devis-intl"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                noValidate
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="devis-intl" />
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

                <div className="dv-field">
                  <label htmlFor="dv-societe">{t.labels.societe} <em>*</em></label>
                  <input id="dv-societe" type="text" name="societe" required autoComplete="organization"
                    aria-invalid={invalid("societe")} aria-describedby={describedBy("societe")} />
                  {errorText("societe")}
                </div>
                <div className="dv-field">
                  <label htmlFor="dv-contact">{t.labels.contact} <em>*</em></label>
                  <input id="dv-contact" type="text" name="contact" required autoComplete="name"
                    aria-invalid={invalid("contact")} aria-describedby={describedBy("contact")} />
                  {errorText("contact")}
                </div>
                <div className="dv-field">
                  <label htmlFor="dv-email">{t.labels.email} <em>*</em></label>
                  <input id="dv-email" type="email" name="email" required autoComplete="email"
                    aria-invalid={invalid("email")} aria-describedby={describedBy("email")} />
                  {errorText("email")}
                </div>
                <div className="dv-field">
                  <label htmlFor="dv-adresse">{t.labels.adresse} <em>*</em></label>
                  <input id="dv-adresse" type="text" name="adresse" required autoComplete="street-address"
                    aria-invalid={invalid("adresse")} aria-describedby={describedBy("adresse")} />
                  {errorText("adresse")}
                </div>
                <div className="dv-row">
                  <div className="dv-field">
                    <label htmlFor="dv-quantite">{t.labels.quantite} <em>*</em></label>
                    <input id="dv-quantite" type="number" name="quantite" required min={1} inputMode="numeric"
                      aria-invalid={invalid("quantite")} aria-describedby={describedBy("quantite")} />
                    {errorText("quantite")}
                  </div>
                  <div className="dv-field">
                    <label htmlFor="dv-date">{t.labels.date} <em>*</em></label>
                    <input id="dv-date" type="date" name="date" required min={today}
                      aria-invalid={invalid("date")} aria-describedby={describedBy("date")} />
                    {errorText("date")}
                  </div>
                </div>
                <div className="dv-field">
                  <label htmlFor="dv-infos">{t.labels.infos}</label>
                  <textarea id="dv-infos" name="infos" rows={6} />
                </div>

                <div className="ct-consent">
                  <input id="dv-rgpd" type="checkbox" name="rgpd" required
                    aria-invalid={invalid("rgpd")} aria-describedby={describedBy("rgpd")} />
                  <label htmlFor="dv-rgpd">
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

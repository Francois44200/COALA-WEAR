import type { ResultsCopy } from "../results";

const TRANSLATED = " (aus dem Französischen übersetzt)";

const copy: ResultsCopy = {
  hero: {
    eyebrow: "Nachweise & Erfahrungen",
    title: (
      <>
        Was die Menschen,<br />
        die es <em>nutzen</em>,<br />
        dazu sagen.
      </>
    ),
    lede: "Pflegende Angehörige, Pflegehilfskräfte, Pflegeheimleitungen. Echte Erfahrungsberichte und im Praxisalltag gemessene Zahlen.",
    ctaOrder: "COALA bestellen",
    ctaTestimonials: "Erfahrungsberichte lesen",
    imageAlt: "Pflegende Person trägt die COALA-Transferkleidung bei einem Transfer",
  },
  stats: [
    {
      value: "95%",
      label: "berichteten von positiven Auswirkungen auf Gesundheit und Arbeitsbedingungen",
      source: "ARACT-Studie 2026, 48 Pflegekräfte",
    },
    {
      value: "65%",
      label: "der Patienten eignen sich für COALA bei Transfers oder beim Umlagern im Bett",
      source: "Connect-Link-Studie 2024, 95 Patienten",
    },
    {
      value: "0",
      label: "unerwünschte Ereignisse seit November 2024 gemeldet",
      source: "Kundenbetreuung von Connect Link und ARACT-Studie 2026",
    },
    {
      value: "665",
      label: "Patienten wurden während der ARACT-Wirkungsstudie 2026 mit COALA unterstützt",
      source: "ARACT-Studie 2026",
    },
  ],
  pullQuote: {
    text: "Man hat mir gesagt, es sei eine Komforthilfe. Das ist es nicht. Es ist eine Sicherheitshilfe – für die unterstützte Person ebenso wie für die pflegende. Ich habe den Unterschied gemessen.",
    name: "Dr. Arnaud V.",
    role: "Koordinierender Arzt · Gemeinnütziges Pflegeheim · Hauts-de-France" + TRANSLATED,
  },
  testimonials: {
    eyebrow: "Erfahrungsberichte",
    title: (
      <>
        Sie haben es ausprobiert.<br />
        Das <em>denken</em> sie darüber.
      </>
    ),
    badgePro: "Pflegefachkraft",
    badgeFamily: "Pflegende Angehörige",
    ratingLabel: (rating) => `${rating} von 5 Sternen`,
    items: [
      {
        quote: "Ich pflege meinen Mann seit vier Jahren. Als ich COALA zum ersten Mal für einen Transfer vom Bett in den Stuhl benutzt habe, wurde mir klar: Ich muss keine Physiotherapeutin werden. Ich brauchte nur ein Hilfsmittel, das für meinen eigenen Körper gemacht ist.",
        name: "Hélène M.",
        role: "Pflegende Angehörige" + TRANSLATED,
        location: "Nantes",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Wir haben unsere 12 Pflegehilfskräfte vor acht Monaten mit COALA ausgestattet. Die Krankheitstage haben sich halbiert. Es war das Einzige, was wir in diesem Jahr an unseren Abläufen geändert haben.",
        name: "Isabelle R.",
        role: "Leiterin eines ambulanten Pflegedienstes (SAAD)" + TRANSLATED,
        location: "Lyon",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Meine Mutter ist schwer, und ich habe die Transfers allein gemacht. Ich wollte sie nicht in ein Pflegeheim geben. Mit COALA hatten wir zwei Jahre mehr zu Hause, als wir zu hoffen gewagt hatten.",
        name: "Patrick D.",
        role: "Pflegender Angehöriger, Sohn" + TRANSLATED,
        location: "Bordeaux",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Die inbegriffene Schulung macht den Unterschied. In 60 Minuten hatten meine Teams die Technik verstanden. Seit der Einführung hatten wir keinen einzigen Zwischenfall bei einem Transfer.",
        name: "Dr. Arnaud V.",
        role: "Koordinierender Arzt, Pflegeheim" + TRANSLATED,
        location: "Hauts-de-France",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Ehrlich gesagt war ich skeptisch. Ein Kleidungsstück dafür? Aber nach der ersten Woche kann ich mir die Arbeit ohne nicht mehr vorstellen. Der Halt fühlt sich wirklich anders an.",
        name: "Sylvie T.",
        role: "Mitarbeiterin in der ambulanten Pflege, ADMR" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Wir haben es in unseren Einarbeitungsprozess aufgenommen. Jede neue Mitarbeiterin und jeder neue Mitarbeiter erhält das Kleidungsstück am ersten Tag. Für unsere Pflegekräfte ist es eine echte persönliche Schutzausrüstung.",
        name: "Claire B.",
        role: "Leiterin eines ambulanten Pflegedienstes" + TRANSLATED,
        location: "Straßburg",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Es hat die Beziehung zu meinem Vater verändert. Früher machten mir die Transfers Angst – und ihm auch. Heute gehen wir sie ruhiger an. Dieses kleine Detail hat vieles verändert.",
        name: "Amina K.",
        role: "Pflegende Angehörige, Tochter" + TRANSLATED,
        location: "Paris",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Wir haben drei Standorte in der Bretagne und 60 Kleidungsstücke im Einsatz. Die Rückmeldungen aus der Praxis sind einhellig: Die Technik ist präziser, und Arbeitsunfälle im Zusammenhang mit manuellem Heben und Tragen sind praktisch verschwunden.",
        name: "François L.",
        role: "Pflegeheimleiter, Gruppe auf Gegenseitigkeit" + TRANSLATED,
        location: "Bretagne",
        type: "pro",
        rating: 5,
      },
    ],
  },
  cases: {
    eyebrow: "Fallstudien aus der Praxis",
    title: (
      <>
        Ergebnisse, die<br />
        <em>gemessen</em> und nicht geschätzt sind.
      </>
    ),
    items: [
      {
        tag: "Pflegeanbieter · Ambulante Pflege",
        title: "10 Pflegehilfskräfte geschult, keine Krankheitstage in 18 Monaten",
        body: "Ein Klinikverbund in Nordfrankreich führte COALA in seinem ambulanten Pflegedienst (SSIAD) und seinem Dienst für Krankenhausbehandlung zu Hause (HAD) ein – nach einer sechswöchigen Praxiserprobung mit vier freiwilligen Pflegefachkräften. Ergebnis: keine Krankheitstage wegen Rückenbeschwerden nach der Einführung, gegenüber drei Fällen im gleichen Zeitraum des Vorjahres.",
        metrics: [
          { v: "0", l: "Krankheitstage wegen MSE und Rückenbeschwerden" },
          { v: "18 Monate", l: "Begleitung der Gruppe" },
          { v: "10", l: "Pflegefachkräfte ausgestattet und geschult" },
        ],
      },
      {
        tag: "Pflegende Angehörige · Zu Hause",
        title: "Zwei Jahre mehr zu Hause für eine Familie bei Bordeaux",
        body: "Patrick D. pflegte seine 87 kg schwere Mutter allein. Die täglichen Transfers vom Bett in den Stuhl wurden körperlich unmöglich. Nach der Einführung von COALA und einem Gespräch mit der Ergotherapeutin von Connect Link konnte er sie weitere 26 Monate zu Hause pflegen, ohne dass sie in ein Pflegeheim ziehen musste.",
        metrics: [
          { v: "+26", l: "Monate zu Hause" },
          { v: "1", l: "pflegender Angehöriger allein" },
          { v: "87 kg", l: "unterstützte Person" },
        ],
      },
    ],
  },
  trust: {
    label: "Im Einsatz bei Organisationen, die COALA vertrauen",
    ariaLabel: "Partner und Organisationen, die COALA nutzen",
    awardsLabel: "Auszeichnungen & Anerkennung",
    awardsAriaLabel: "Auszeichnungen und Anerkennung",
    awards: [
      "Gewinner Silver Eco Festival 2024",
      "Silver Surfer",
      "Innovation & Prévention (I&P)",
      "French Tech 2023",
      "Santexpo FHF Award 2026",
      "Janus-Preis, Institut Français du Design 2026",
      "Salon SAP Award 2024",
    ],
  },
  finalCta: {
    eyebrow: "Bereit, es auszuprobieren?",
    title: (
      <>
        14 Tage, um sich<br />
        selbst ein <em>Bild</em> zu machen.
      </>
    ),
    lede: "Sie können das Kleidungsstück innerhalb von 14 Tagen überall in der Europäischen Union zurückgeben, sofern es nicht getragen wurde. Vorführung per Videoanruf auf Englisch, nachdem Ihre Bestellung eingegangen ist.",
    ctaOrder: "COALA bestellen · ab 129 €",
    ctaQuote: "Angebot anfordern",
  },
  crossLinks: [
    { eyebrow: "Das Kleidungsstück im Detail", title: "Zur vollständigen Produktseite" },
    { eyebrow: "Sie statten ein Pflegeteam aus?", title: "Angebote für Fachkräfte innerhalb von 48 Stunden" },
    { eyebrow: "Noch Fragen?", title: "Zur vollständigen FAQ" },
  ],
};

export default copy;

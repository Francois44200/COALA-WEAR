import type { FamilyCopy } from "../family";

const copy: FamilyCopy = {
  hero: {
    eyebrow: "Für pflegende Angehörige · Entwickelt für die Pflege zu Hause",
    title: (
      <>
        Ich pflege einen Angehörigen.<br /><em>COALA hilft mir.</em>
      </>
    ),
    lede: "Jeden Tag helfen Sie Ihrem Angehörigen, sich von einem Ort zum anderen zu bewegen. COALA unterstützt jeden Transfer: Es entlastet Ihren Rücken, macht die Bewegung sicherer und wahrt die Würde Ihres Angehörigen.",
    ctaOrder: "COALA bestellen",
    ctaAdvice: "Sprechen Sie vor dem Kauf mit uns",
    ctaHow: "So funktioniert es",
    trust: ["Rückgabe innerhalb von 14 Tagen", "Echte Menschen im Kundenservice", "Video-Anleitungen inklusive"],
    imageAlt: "Pflegende Angehörige trägt die COALA-Transferkleidung während eines Transfers",
    cardTop: {
      eyebrow: "Schont Ihren Rücken",
      claim: "Kein Bücken mehr zum Anheben",
      desc: "Sie tragen nicht mehr, Sie stützen",
    },
    cardBottom: { eyebrow: "Jeden Tag", pills: ["Bett", "Stuhl", "Badezimmer"] },
  },
  benefits: {
    eyebrow: "Warum COALA?",
    title: (
      <>
        Eine Lösung, entwickelt<br />für <em>pflegende Angehörige</em>.
      </>
    ),
    items: [
      { title: "Macht die Bewegung sicherer", desc: "Verstärkte Griffe, gleichmäßig verteilte Haltepunkte, rutschfest." },
      { title: "Respektiert den Menschen", desc: "Weicher Stoff, würdevoll in der Anwendung – und Ihr Angehöriger bleibt während des gesamten Transfers bekleidet." },
      { title: "Schont Ihren Rücken", desc: "Kein Bücken mehr zum Anheben, keine Belastung mehr für Schultern und Arme." },
      { title: "Fördert die Selbstständigkeit", desc: "Ihr Angehöriger kann sich aktiv an der Bewegung beteiligen." },
    ],
  },
  steps: {
    eyebrow: "Wie funktioniert es?",
    title: (
      <>
        Drei einfache Schritte<br />für einen <em>sicheren</em> Transfer.
      </>
    ),
    items: [
      { title: "Anziehen", desc: "Sie tragen COALA wie normale Arbeitskleidung. In wenigen Sekunden angezogen." },
      { title: "Griffzonen greifen", desc: "Ihr Angehöriger hält sich an den verstärkten Griffen fest (Schultern, Taille, Hüften). Sie bleiben in tiefer Position, mit geradem Rücken." },
      { title: "Transferieren", desc: "Führen Sie die Bewegung ohne Kraftaufwand. Bett, Stuhl, Verlassen des Badezimmers: Die Bewegung verläuft fließend." },
    ],
    noteEyebrow: "Was COALA verändert",
    changes: [
      ["Rücken", "Kein Bücken mehr zum Anheben."],
      ["Arme", "Keine Belastung mehr für Schultern und Arme."],
      ["Gemeinsam", "Ihr Angehöriger wirkt mit: Sie tragen nicht mehr, Sie stützen."],
    ],
    guideLink: "Zur Anleitung in 7 Schritten",
  },
  product: {
    eyebrow: "Das Produkt",
    title: (
      <>
        Ein einfaches Kleidungsstück,<br /><em>robust</em> und waschbar.
      </>
    ),
    specsTitle: "Technische Daten",
    specs: [
      "Technisches Polyester, 215 g/m²",
      "4 verstärkte Griffzonen",
      "Größen XS bis 4XL",
      "Waschbar bei 40 °C · schonend trocknen",
      "Patentierte französische Innovation",
    ],
    commitmentsTitle: "Unsere Zusagen",
    commitments: [
      "Rückgabe ungetragener Produkte innerhalb von 14 Tagen",
      "Echte Menschen im Kundenservice",
      "Video-Anleitungen inklusive",
    ],
  },
  faq: {
    eyebrow: "Fragen von pflegenden Angehörigen",
    title: (
      <>
        Was <em>Familien</em><br />uns fragen.
      </>
    ),
    cta: "Alle Fragen ansehen",
    items: [
      {
        q: "Ist COALA für meinen Angehörigen geeignet?",
        a: "COALA eignet sich für die meisten Menschen, die bei Transfers Hilfe benötigen und zumindest teilweise an der Bewegung mitwirken können, indem sie die Griffe mit beiden Händen halten. Das Kleidungsstück wird von Ihnen als pflegender Person getragen und ist in den Größen XS bis 4XL erhältlich. Bei besonderen Erkrankungen (fortgeschrittener Dekubitus, kürzlich erfolgte Operation) fragen Sie bitte das Pflegeteam um Rat.",
      },
      {
        q: "Wie lange hält das Kleidungsstück?",
        a: "Bei Nutzung zu Hause (1 bis 2 Transfers pro Tag): 4 bis 6 Jahre. Bei professioneller Nutzung (10 bis 15 Transfers pro Tag): 18 bis 24 Monate. Der Stoff ist bei 40 °C maschinenwaschbar und kann im Schonprogramm im Trockner getrocknet werden.",
      },
      {
        q: "Kann ich es vor dem Kauf ausprobieren?",
        a: "Wir bieten keine kostenlose Leihstellung an. Das Produkt kann innerhalb von 14 Tagen zurückgegeben werden, sofern es nicht getragen wurde und sich in neuwertigem Zustand befindet – vorbehaltlich einer Prüfung bei Eingang.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Bereit, mit COALA zu starten?",
    title: (
      <>
        Unterstützen Sie Ihren Angehörigen,<br /><em>schonen Sie Ihren Rücken</em>.
      </>
    ),
    sub: "Rückgabe innerhalb von 14 Tagen, sofern das Produkt nicht getragen wurde · Brauchen Sie Rat? contact@connectlink.fr",
    ctaOrder: "COALA bestellen",
    ctaWrite: "Schreiben Sie uns",
  },
  crossLinks: [
    { eyebrow: "Das Produkt", title: "Technische Daten von COALA" },
    { eyebrow: "Anleitung", title: "Anleitung in 7 Schritten" },
    { eyebrow: "Fragen", title: "Alle FAQ" },
  ],
};

export default copy;

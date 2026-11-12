import type { HowItWorksCopy } from "../howItWorks";

const copy: HowItWorksCopy = {
  breadcrumb: {
    ariaLabel: "Brotkrümelnavigation",
    home: "Startseite",
    current: "So funktioniert es",
  },
  hero: {
    eyebrow: "Gebrauchsanleitung",
    title: (
      <>
        Anziehen, unterstützen,<br /><em>ausziehen</em>.
      </>
    ),
    lede:
      "COALA ist in wenigen Sekunden einsatzbereit und ebenso schnell wieder deaktiviert. Dazwischen wirkt die Person, der Sie helfen, mit: Sie heben sie nicht mehr an, Sie stützen sie. Diese Anleitung basiert auf den Schulungsunterlagen, die bei der Einführung von COALA in Pflegeteams verwendet werden.",
    ctaOrder: "COALA bestellen",
    ctaProduct: "Zur Produktseite",
  },
  video: {
    eyebrow: "Videovorführung",
    title: (
      <>
        Die COALA-Technik<br />in <em>realen Situationen</em>.
      </>
    ),
    iframeTitle: "Vorführung der COALA-Transferkleidung (auf Französisch)",
    note: "Video auf Französisch",
  },
  steps: {
    eyebrow: "Anleitung",
    title: (
      <>
        Die <em>Stützfunktion</em> aktivieren<br />und wieder lösen.
      </>
    ),
    lede:
      "Fünf Schritte zur Vorbereitung, bevor Sie jemandem beim Bewegen helfen. Fünf Schritte, um nach dem Transfer wieder zu einem normalen Kleidungsstück zurückzukehren.",
    phase1Label: "Phase 1: Anziehen",
    phase1: [
      { n: "01", title: "Kleidungsstück anziehen", body: "COALA wird wie normale Arbeitskleidung angezogen: Der Lendengurt ist geöffnet und mit seinen Klettstreifen am Kleidungsstück befestigt, die Schultergurte sind locker." },
      { n: "02", title: "Die beiden unteren Knöpfe öffnen", body: "Über die beiden untersten Knöpfe gelangen Sie an den Lendengurt und die Spanner der Schultergurte." },
      { n: "03", title: "Lendengurt festziehen", body: "Ziehen Sie den Gurt fest und schließen Sie ihn mit der gewünschten Spannung." },
      { n: "04", title: "Schultergurte spannen", body: "Ziehen Sie am unteren Band der Schulterspanner, bis die gewünschte Spannung erreicht ist, in geschlossener Position." },
      { n: "05", title: "Kleidungsstück schließen", body: "Schließen Sie die beiden letzten Knöpfe. Die Stützfunktion ist aktiv: Sie können nun unterstützen." },
    ],
    phase1Alt: "Geöffnete COALA-Transferkleidung mit Lendengurt und Spannern der Schultergurte",
    phase1Caption: "Lendengurt und Spanner der Schultergurte, Stützfunktion aktiv.",
    phase2Label: "Phase 2: Ausziehen",
    phase2: [
      { n: "01", title: "Die beiden unteren Knöpfe öffnen", body: "Die körperliche Unterstützung ist beendet: Sie können die Stützfunktion lösen." },
      { n: "02", title: "Schulterspannung lösen", body: "Heben Sie die Spanner unter Ihren Armen an, um die Schultergurte zu lockern." },
      { n: "03", title: "Lendengurt öffnen", body: "Öffnen Sie den Gurt, um jegliche Spannung zu lösen." },
      { n: "04", title: "Gurt verstauen", body: "Befestigen Sie beide Enden des Gurts wieder innen an den beiden Vorderteilen des Kleidungsstücks." },
      { n: "05", title: "Die beiden unteren Knöpfe schließen", body: "COALA wird wieder zu einem normalen Kleidungsstück – unauffällig für Sie und Ihr Umfeld." },
    ],
    phase2Alt: "COALA-Transferkleidung mit verstauten Griffen, wieder ein normales Kleidungsstück",
    phase2Caption: "Stützfunktion gelöst: COALA ist wieder ein normales Kleidungsstück.",
    warning:
      "Kontrolle beim Anziehen: Achten Sie darauf, dass beide Teile des Gurts innen im Kleidungsstück durch die Griffe geführt sind.",
  },
  situations: {
    eyebrow: "Wann es hilft",
    title: (
      <>
        Wann COALA<br />Ihnen <em>hilft</em>.
      </>
    ),
    lede:
      "Erkennen Sie die Situationen körperlicher Unterstützung, in denen COALA Ihre Arme und Ihren Rücken entlastet und der unterstützten Person die Mitwirkung erleichtert.",
    imageAlt: "Pflegekraft in COALA-Transferkleidung hilft einer älteren Person zu ihrem Rollator",
    items: [
      "Transfer vom Sitzen in den Stand",
      "Transfer vom Stuhl auf die Toilette",
      "Umlagern im Bett und Aufstehen",
      "Begleitetes Gehen",
      "Umsetzen im Stuhl",
      "Drehen im Bett",
    ],
    profilesTitle: "Für welche Patienten ist es geeignet?",
    profilesIntro:
      "Kann der Patient Anweisungen zur Mitwirkung verstehen? Lässt sein körperlicher Zustand den Einsatz von COALA zu? Beurteilen Sie jeden Fall individuell:",
    profiles: [
      "Fähigkeit, Anleitungen zur Mitwirkung zu verstehen",
      "Belastbarkeit beim Stehen",
      "Gewicht",
      "Mobilität",
      "Gleichgewicht",
      "Muskeltonus der oberen Extremitäten",
    ],
    profilesNote:
      "Wenn Sie unsicher sind, ob COALA für die Situation eines Patienten geeignet ist, wenden Sie sich an sein Pflegeteam.",
  },
  grips: {
    eyebrow: "Hinweise zur Anwendung",
    title: (
      <>
        Welche Griffe<br />Sie <em>anbieten</em>.
      </>
    ),
    lede: "Die Griffe, die Sie anbieten, bestimmen, wie viel Last auf Ihren Schultern und Ihrem Rücken bleibt.",
    imageAlt: "Nahaufnahme einer Griffzone an der Schulter der COALA-Transferkleidung",
    caption: "Obere Griffzone an der Schulter.",
    items: [
      { title: "Überkreuzter Griff", detail: "Bieten Sie einen unteren Griff und den oberen Griff der Gegenseite an. Die obere Hand kann in Bewegungsrichtung platziert werden, um den Blick des Patienten zu lenken." },
      { title: "Beide unteren Griffe", detail: "Wenn Sie beide unteren Griffe anbieten, werden Ihre Schultern und Ihr Rücken noch stärker entlastet." },
      { title: "Nie beide oberen Griffe", detail: "Bieten Sie nicht beide oberen Griffe gleichzeitig an: Das belastet Ihre Schultern und Ihren Rücken." },
      { title: "Griffe nicht heraushängen lassen", detail: "Verstauen Sie die Griffe zwischen den Einsätzen: Sie könnten hängen bleiben oder unerwartet ergriffen werden." },
      { title: "Stützfunktion bei Nichtgebrauch lösen", detail: "Lockern Sie Gurt und Schultergurte, wenn Sie keine körperliche Unterstützung leisten, zum Beispiel bei der Hilfe beim Essen oder in einer Pause." },
    ],
  },
  verbal: {
    eyebrow: "Verbale Anleitung",
    title: (
      <>
        Die Worte, die<br />den Patienten <em>einbeziehen</em>.
      </>
    ),
    lede:
      "Leiten Sie den Patienten so klar wie möglich an, damit Sie sich gemeinsam bewegen. Wiederholen und umformulieren Sie ruhig: Jedes Paar aus pflegender Person und Patient findet seine eigenen Signale.",
    imageAlt: "Pflegekraft führt einen Patienten zu den Griffzonen der COALA-Transferkleidung",
    caption: "Der Blickkontakt bleibt während des gesamten Bewegungsablaufs bestehen.",
    evaluationLabel: "Fähigkeit zur Mitwirkung beurteilen",
    evaluation: ["„Können Sie diesen Griff fassen?“", "„Fühlen Sie sich kräftig?“"],
    sequenceLabel: "Ablauf des Transfers",
    sequence: [
      "„Fassen Sie diese Griffe“",
      "„Schließen Sie die Hände fest“",
      "„Halten Sie sich gut fest. Fühlen Sie sich kräftig?“",
      "„Stellen Sie die Füße so weit wie möglich zurück“",
      "„Beugen Sie sich nach vorn“",
      "„Ziehen Sie die Griffe zu sich und drücken Sie sich mit den Beinen hoch“",
    ],
  },
  posture: {
    eyebrow: "Haltung der pflegenden Person",
    title: (
      <>
        Eine <em>kraftvolle</em> Position einnehmen,<br />ohne zu heben.
      </>
    ),
    lede:
      "COALA belastet die Gelenke Ihrer Arme und Ihres Rückens weniger – vorausgesetzt, Sie positionieren sich richtig.",
    items: [
      { title: "Gerader Rücken", detail: "Halten Sie den Rücken gerade, während Sie den Patienten anleiten, die Füße zurückzustellen und sich zu Ihnen zu neigen." },
      { title: "Hüften und Knie gebeugt", detail: "Beugen Sie Hüften und Knie leicht, um die Bewegung des Patienten wirksam zu unterstützen." },
      { title: "Füße auseinander", detail: "Stellen Sie die Füße auseinander, um Ihre Stabilität zu erhöhen." },
      { title: "Ausfallschritte vor / zurück", detail: "Stellen Sie einen Fuß zwischen die Füße des Patienten und begleiten Sie den Transfer mit Ausfallschritten." },
    ],
  },
  care: {
    eyebrow: "Pflege",
    title: (
      <>
        <em>Pflegehinweise</em>.
      </>
    ),
    items: [
      "Baumwollwäsche bei 40 °C.",
      "Gurt vor dem Waschen durch die Griffe führen und geschlossen befestigen.",
      "Ein Schonprogramm oder einen Trockengang bei niedriger Temperatur wählen.",
    ],
    imageAlt: "Zusammengefaltete COALA-Transferkleidung, bereit zum Waschen",
    caption: "Gurt geschlossen und Griffe verstaut vor der Maschinenwäsche.",
  },
  deployment: {
    eyebrow: "Einführung in Ihrer Einrichtung",
    title: (
      <>
        Die fünf Schlüssel<br />zum <em>Erfolg</em>.
      </>
    ),
    factors: [
      "COALA freiwilligen Pflegekräften anbieten",
      "Die richtigen Führungsbewegungen anwenden",
      "Patienten zu den unteren Griffen führen",
      "Stützfunktion lösen und Griffe verstauen",
      "Die Gewohnheit des Hebens ablegen",
    ],
    staffLabel: "Pflegekräfte (aus dem Französischen übersetzt)",
    staffQuotes: [
      "„Am Ende des Tages weniger müde“",
      "„Sicherer, ich habe die Hände frei“",
      "„Einfach anzuwenden“",
      "„Man gewöhnt sich schnell daran“",
    ],
    patientLabel: "Patienten (aus dem Französischen übersetzt)",
    patientQuotes: [
      "„Wir sind uns zugewandt, auf Augenhöhe“",
      "„Aktivere Mitwirkung“",
      "„Besserer Halt“",
      "„Ein Gefühl von Sicherheit“",
    ],
  },
  cta: {
    title: "Bereit, mit COALA zu arbeiten?",
    body: "Bestellen Sie direkt oder fordern Sie ein Angebot für Ihre Einrichtung an.",
    order: "COALA bestellen",
    quote: "Angebot anfordern",
    cards: [
      { eyebrow: "Das Kleidungsstück im Detail", title: "Vollständige Produktseite" },
      { eyebrow: "Wer es nutzt", title: "Erfahrungen & Ergebnisse" },
      { eyebrow: "Fragen", title: "Alle FAQ" },
    ],
  },
};

export default copy;

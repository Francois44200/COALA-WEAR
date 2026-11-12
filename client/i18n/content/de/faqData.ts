import type { FaqCategory } from "@/data/faq";

const data: FaqCategory[] = [
  {
    id: "produit",
    label: "Das Produkt",
    desc: "Materialien, Haltbarkeit, Normen",
    items: [
      {
        q: "Woraus besteht das COALA-Kleidungsstück?",
        a: "Aus technischem Polyester (215 g/m²) mit verstärktem Futter an den beanspruchten Stellen. Dreifachnähte an allen vier Griffzonen. Verstellkordeln aus technischem Gurtband.",
      },
      {
        q: "Wie lange hält das Kleidungsstück?",
        a: "Bei häuslicher Nutzung: 4 bis 6 Jahre. Bei intensiver beruflicher Nutzung: 18 bis 24 Monate. Der Stoff ist bei 40 °C maschinenwaschbar und trocknergeeignet (Schonprogramm).",
      },
      {
        q: "Ist COALA ein Medizinprodukt?",
        a: "Nein. COALA ist kein Medizinprodukt im Sinne der europäischen Medizinprodukteverordnung (EU) 2017/745. Es handelt sich um technische Arbeitskleidung und eine patentierte französische Innovation.",
      },
    ],
  },
  {
    id: "usage",
    label: "Anwendung & Technik",
    desc: "Für wen, wie und wie oft",
    items: [
      {
        q: "Ist COALA für meinen Angehörigen geeignet?",
        a: "COALA eignet sich für die meisten Menschen, die beim Transfer Hilfe benötigen und zumindest teilweise an der Bewegung mitwirken können, indem sie die Griffe mit beiden Händen halten. Das Kleidungsstück selbst wird von der pflegenden Person getragen und ist in den Größen XS bis 4XL erhältlich, passend für die tragende Person. Bei besonderen Erkrankungen (fortgeschrittene Druckgeschwüre, kürzlich erfolgte Operation) fragen Sie bitte das Pflegeteam um Rat.",
      },
      {
        q: "Brauche ich eine Schulung, um es zu nutzen?",
        a: "Jedem Kleidungsstück liegt eine Gebrauchsanleitung bei, und Online-Video-Anleitungen zeigen Ihnen die richtige Anwendung.\n\nBei Teambestellungen bietet Connect Link außerdem eine eigene Schulung für Fachkräfte und ihre Leitungskräfte an – per Videoanruf auf Englisch, nachdem die Bestellung eingegangen ist.",
      },
      {
        q: "Wie viele Transfers sind pro Tag möglich?",
        a: "Das Kleidungsstück selbst kennt keine Grenze. Auf menschlicher Seite: Bei 18 Pflegekräften, die über 90 Tage begleitet wurden, lag der Durchschnitt bei 8 Transfers pro Tag mit COALA – ohne gemeldete Rückenschmerzen.",
      },
      {
        q: "Lässt es sich mit einem Rollstuhl verwenden?",
        a: "Ja. COALA eignet sich ebenso gut für Transfers vom Bett in den Stuhl, vom Stuhl auf die Toilette und vom Stuhl ins Auto. Auf unserer Seite „So funktioniert es“ finden Sie die 6 häufigsten Situationen.",
      },
      {
        q: "Braucht man zwei Personen für die Anwendung?",
        a: "Für die meisten Transfers genügt eine pflegende Person. Bei schwereren Personen (über 100 kg) oder bei Transfers vom Boden in den Stuhl werden zwei Pflegende empfohlen.",
      },
    ],
  },
  {
    id: "achat",
    label: "Bestellung & Lieferung",
    desc: "Bestellungen, Lieferzeiten, Rücksendungen",
    items: [
      {
        q: "Wie bestelle ich?",
        a: "Über unseren Onlineshop shop.connectlink.fr (Karte, Apple Pay oder Banküberweisung). Für Bestellungen von Fachkräften und Einrichtungen können Sie sich auch direkt an unser Team unter contact@connectlink.fr wenden.",
      },
      {
        q: "Wie lange dauert die Lieferung?",
        a: "Lieferzeiten und Versandkosten hängen von Ihrem Land ab und werden beim Bezahlvorgang angezeigt. Ihr Paket können Sie per E-Mail verfolgen.",
      },
      {
        q: "Kann ich mein Kleidungsstück zurückgeben?",
        a: "Ja, innerhalb von 14 Tagen aus der gesamten Europäischen Union, sofern das Produkt nicht getragen wurde und neuwertig ist. Jede Rücksendung wird vor Umtausch oder Erstattung geprüft. Aus Hygienegründen wird Ihnen das Kleidungsstück versiegelt geliefert.",
      },
      {
        q: "Kann ich es vor dem Kauf ausprobieren?",
        a: "Wir bieten keine kostenlose Leihstellung an, auch nicht für Fachkräfte. Das Produkt kann jedoch innerhalb von 14 Tagen zurückgegeben werden, sofern es nicht getragen wurde und neuwertig ist.",
      },
    ],
  },
  {
    id: "pros",
    label: "Fachkräfte & Einrichtungen",
    desc: "Pflegeheime, Krankenhäuser, ambulante Pflegedienste",
    items: [
      {
        q: "Wie schnell erhalte ich ein Angebot für Fachkräfte?",
        a: "Innerhalb von 2 Werktagen. Ein Mitglied unseres Teams für Fachkunden ruft Sie zurück, um Ihr Umfeld kennenzulernen, und schickt Ihnen dann ein individuelles Angebot.",
      },
      {
        q: "Ist die Schulung wirklich inbegriffen?",
        a: "Eine Schulung lohnt sich ab 5 ausgestatteten Fachkräften. Sie wird von einer Ergonomin bzw. einem Ergonomen oder einer Ergotherapeutin bzw. einem Ergotherapeuten aus dem COALA-Netzwerk geleitet – per Videoanruf auf Englisch, nachdem die Bestellung eingegangen ist. Die Schulungsunterlagen erhalten Sie zugeschickt.",
      },
      {
        q: "Bieten Sie Konditionen für Einrichtungen mit mehreren Standorten an?",
        a: "Ja. Mengenrabatte, gebündelte Lieferungen und eine feste Ansprechperson für Gruppen, Pflegeorganisationen und Verbände, die 100 Kleidungsstücke oder mehr bestellen.",
      },
      {
        q: "Kann das Kleidungsstück personalisiert werden (Logo, Name der Abteilung)?",
        a: "Ja, Siebdruck oder Bestickung ist ab 25 Stück möglich. Produktionszeit: zusätzlich 10 Werktage.",
      },
    ],
  },
  {
    id: "lavage",
    label: "Waschen & Pflege",
    desc: "Waschen, Trocknen und Aufbewahren",
    items: [
      {
        q: "Bei welcher Temperatur sollte COALA gewaschen werden?",
        a: "Maschinenwäsche bei 40 °C im Normalprogramm mit normalem Waschmittel. Kein Weichspüler (er schwächt die Nähte). Kein Chlorbleichmittel.",
      },
      {
        q: "Darf es in den Trockner?",
        a: "Ja, aber nur im Schonprogramm. Idealerweise liegend oder auf einem Bügel trocknen, damit es seine Form behält.",
      },
      {
        q: "Und das Bügeln?",
        a: "Nicht nötig. Wenn Sie es dennoch bügeln möchten, verwenden Sie mittlere Temperatur und bügeln Sie niemals die verstärkten Griffzonen.",
      },
      {
        q: "Wie sollte COALA aufbewahrt werden?",
        a: "Flach gefaltet an einem trockenen Ort. Die Einzeltasche (bei Bestellungen von Fachkräften inbegriffen) hält das Kleidungsstück in gutem Zustand – auch in der Arbeitstasche.",
      },
    ],
  },
];

export default data;

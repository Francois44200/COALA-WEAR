import type { HowItWorksCopy } from "../howItWorks";

const copy: HowItWorksCopy = {
  breadcrumb: {
    ariaLabel: "Kruimelpad",
    home: "Home",
    current: "Hoe het werkt",
  },
  hero: {
    eyebrow: "Gebruikershandleiding",
    title: (
      <>
        Aantrekken, ondersteunen,<br /><em>uittrekken</em>.
      </>
    ),
    lede:
      "COALA is in enkele seconden geactiveerd en net zo snel weer gedeactiveerd. Daartussen werkt de persoon die u helpt actief mee: u tilt niet meer, u ondersteunt. Deze handleiding is gebaseerd op het trainingsmateriaal dat wordt gebruikt bij de invoering van COALA in zorgteams.",
    ctaOrder: "COALA bestellen",
    ctaProduct: "Bekijk de productpagina",
  },
  video: {
    eyebrow: "Videodemonstratie",
    title: (
      <>
        De COALA-techniek<br />in <em>echte situaties</em>.
      </>
    ),
    iframeTitle: "Demonstratie van de COALA-transferkleding (in het Frans)",
    note: "Video in het Frans",
  },
  steps: {
    eyebrow: "Instructies",
    title: (
      <>
        Activeer de <em>ondersteuning</em>,<br />en maak haar daarna weer los.
      </>
    ),
    lede:
      "Vijf stappen om u voor te bereiden voordat u iemand helpt bewegen. Vijf stappen om weer een gewoon kledingstuk te hebben zodra de transfer klaar is.",
    phase1Label: "Fase 1: Aantrekken",
    phase1: [
      { n: "01", title: "Trek het kledingstuk aan", body: "COALA trekt u aan als gewone werkkleding: de lendengordel is open en met de klittenbandstroken aan het kledingstuk bevestigd, en de schouderbanden zitten los." },
      { n: "02", title: "Maak de twee onderste knopen los", body: "Via de twee onderste knopen komt u bij de lendengordel en de spanners van de schouderbanden." },
      { n: "03", title: "Trek de lendengordel aan", body: "Trek de gordel aan en maak hem vast op de gewenste spanning." },
      { n: "04", title: "Span de schouderbanden", body: "Trek aan de onderste band van de schouderspanners tot u de gewenste spanning bereikt, in gesloten stand." },
      { n: "05", title: "Sluit het kledingstuk", body: "Doe de laatste twee knopen dicht. De ondersteuning is actief: u bent klaar om te helpen." },
    ],
    phase1Alt: "Geopende COALA-transferkleding met de lendengordel en de spanners van de schouderbanden",
    phase1Caption: "Lendengordel en spanners van de schouderbanden, ondersteuning actief.",
    phase2Label: "Fase 2: Uittrekken",
    phase2: [
      { n: "01", title: "Maak de twee onderste knopen los", body: "De fysieke hulp is voorbij: u kunt de ondersteuning losmaken." },
      { n: "02", title: "Haal de spanning van de schouders", body: "Til de spanners onder uw armen op om de schouderbanden losser te maken." },
      { n: "03", title: "Maak de lendengordel los", body: "Open de gordel om alle spanning weg te nemen." },
      { n: "04", title: "Berg de gordel op", body: "Maak beide uiteinden van de gordel weer vast aan de binnenkant van de twee voorpanden van het kledingstuk." },
      { n: "05", title: "Doe de twee onderste knopen dicht", body: "COALA is weer een gewoon kledingstuk, onopvallend voor uzelf en voor de mensen om u heen." },
    ],
    phase2Alt: "COALA-transferkleding met weggestopte handgrepen, weer een gewoon kledingstuk",
    phase2Caption: "Ondersteuning losgemaakt: COALA is weer een gewoon kledingstuk.",
    warning:
      "Controleer bij het aantrekken: zorg dat beide delen van de gordel door de handgrepen lopen, aan de binnenkant van het kledingstuk.",
  },
  situations: {
    eyebrow: "Wanneer gebruikt u het",
    title: (
      <>
        Wanneer COALA<br />u <em>helpt</em>.
      </>
    ),
    lede:
      "Herken de situaties van fysieke hulp waarin COALA de belasting van uw armen en rug vermindert en het de persoon die u helpt makkelijker maakt om mee te werken.",
    imageAlt: "Zorgprofessional in COALA-transferkleding die een oudere persoon naar de rollator helpt",
    items: [
      "Transfer van zit naar stand",
      "Transfer van stoel naar toilet",
      "Herpositioneren in bed en opstaan",
      "Begeleid lopen",
      "Herpositioneren in een stoel",
      "Draaien in bed",
    ],
    profilesTitle: "Voor welke patiënten is het geschikt?",
    profilesIntro:
      "Kan de patiënt instructies begrijpen waarin om meewerking wordt gevraagd? Laat de lichamelijke conditie het gebruik van COALA toe? Beoordeel elke situatie afzonderlijk:",
    profiles: [
      "Vermogen om aanwijzingen voor meewerking te begrijpen",
      "Kwaliteit van de gewichtsdraging",
      "Gewicht",
      "Mobiliteit",
      "Evenwicht",
      "Spierkracht van de armen",
    ],
    profilesNote:
      "Twijfelt u of COALA geschikt is voor de situatie van een patiënt? Overleg dan met het zorgteam van de patiënt.",
  },
  grips: {
    eyebrow: "Aanwijzingen voor gebruik",
    title: (
      <>
        Welke handgrepen<br />u <em>aanbiedt</em>.
      </>
    ),
    lede: "De handgrepen die u aanbiedt, bepalen hoeveel belasting er op uw schouders en rug blijft.",
    imageAlt: "Close-up van een grijpzone op de schouder van de COALA-transferkleding",
    caption: "Bovenste grijpzone, op de schouder.",
    items: [
      { title: "Gekruiste grip", detail: "Bied één onderste handgreep aan en de bovenste handgreep aan de andere kant. De bovenste hand kan in de bewegingsrichting worden geplaatst, om de blik van de patiënt te helpen sturen." },
      { title: "Beide onderste handgrepen", detail: "Door beide onderste handgrepen aan te bieden, vermindert u de belasting van uw schouders en rug nog verder." },
      { title: "Nooit beide bovenste handgrepen", detail: "Bied niet tegelijk beide bovenste handgrepen aan: dat belast uw schouders en rug." },
      { title: "Laat de handgrepen niet uithangen", detail: "Stop de handgrepen weg tussen het gebruik door: ze kunnen ergens achter blijven haken of onverwacht worden vastgepakt." },
      { title: "Maak de ondersteuning los als u die niet gebruikt", detail: "Maak de gordel en de schouderbanden losser wanneer u geen fysieke hulp biedt, bijvoorbeeld bij hulp bij de maaltijd of tijdens een pauze." },
    ],
  },
  verbal: {
    eyebrow: "Verbale begeleiding",
    title: (
      <>
        De woorden die<br />de patiënt <em>betrekken</em>.
      </>
    ),
    lede:
      "Begeleid de patiënt zo duidelijk mogelijk, zodat u samen beweegt. Herhaal en formuleer gerust anders: elk duo van zorgverlener en patiënt vindt zijn eigen signalen.",
    imageAlt: "Zorgprofessional die een patiënt naar de grijpzones van de COALA-transferkleding begeleidt",
    caption: "Het oogcontact blijft tijdens de hele handeling behouden.",
    evaluationLabel: "Het vermogen om mee te werken beoordelen",
    evaluation: ["‘Kunt u deze handgreep vastpakken?’", "‘Voelt u zich sterk?’"],
    sequenceLabel: "Volgorde van de transfer",
    sequence: [
      "‘Pak deze handgrepen vast’",
      "‘Knijp uw handen stevig dicht’",
      "‘Houd stevig vast. Voelt u zich sterk?’",
      "‘Zet uw voeten zo ver mogelijk naar achteren’",
      "‘Leun naar voren’",
      "‘Trek de handgrepen naar u toe en duw met uw benen’",
    ],
  },
  posture: {
    eyebrow: "Houding van de zorgverlener",
    title: (
      <>
        Neem een <em>krachtige</em> houding aan,<br />zonder te tillen.
      </>
    ),
    lede:
      "COALA belast de gewrichten van uw armen en rug minder, op voorwaarde dat u zich goed positioneert.",
    items: [
      { title: "Rechte rug", detail: "Houd uw rug recht terwijl u de patiënt begeleidt om de voeten naar achteren te zetten en naar u toe te leunen." },
      { title: "Heupen en knieën gebogen", detail: "Buig uw heupen en knieën licht om de beweging van de patiënt goed te ondersteunen." },
      { title: "Voeten uit elkaar", detail: "Zet uw voeten uit elkaar om stabieler te staan." },
      { title: "Uitvalspassen naar voren / achteren", detail: "Zet één voet tussen de voeten van de patiënt en begeleid de transfer met uitvalspassen." },
    ],
  },
  care: {
    eyebrow: "Onderhoud",
    title: (
      <>
        <em>Wasvoorschriften</em>.
      </>
    ),
    items: [
      "Katoenprogramma op 40 °C.",
      "Maak de gordel dicht, door de handgrepen geregen, voordat u het kledingstuk in de machine doet.",
      "Kies een programma voor voorzichtig drogen of drogen op lage temperatuur.",
    ],
    imageAlt: "Opgevouwen COALA-transferkleding, klaar om gewassen te worden",
    caption: "Gordel dicht en handgrepen weggestopt voor het wassen in de machine.",
  },
  deployment: {
    eyebrow: "Invoering in uw organisatie",
    title: (
      <>
        De vijf sleutels<br />tot <em>succes</em>.
      </>
    ),
    factors: [
      "Bied COALA aan vrijwillige zorgprofessionals aan",
      "Pas de juiste begeleidende bewegingen toe",
      "Begeleid patiënten naar de onderste handgrepen",
      "Maak de ondersteuning los en stop de handgrepen weg",
      "Leer de gewoonte van tillen af",
    ],
    staffLabel: "Zorgprofessionals (vertaald uit het Frans)",
    staffQuotes: [
      "‘Minder moe aan het eind van de dag’",
      "‘Veiliger, ik houd mijn handen vrij’",
      "‘Makkelijk te gebruiken’",
      "‘Je went er snel aan’",
    ],
    patientLabel: "Patiënten (vertaald uit het Frans)",
    patientQuotes: [
      "‘We staan oog in oog met elkaar’",
      "‘Actiever meewerken’",
      "‘Betere grip’",
      "‘Een gevoel van veiligheid’",
    ],
  },
  cta: {
    title: "Klaar om met COALA aan de slag te gaan?",
    body: "Bestel direct, of vraag een offerte aan voor uw organisatie.",
    order: "COALA bestellen",
    quote: "Offerte aanvragen",
    cards: [
      { eyebrow: "Het kledingstuk in detail", title: "Volledige productpagina" },
      { eyebrow: "Wie het gebruikt", title: "Ervaringen & resultaten" },
      { eyebrow: "Vragen", title: "Volledige FAQ" },
    ],
  },
};

export default copy;

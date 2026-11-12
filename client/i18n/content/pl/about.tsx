import type { AboutCopy } from "../about";

const copy: AboutCopy = {
  eyebrow: "Firma",
  title: (
    <>
      O firmie<br />
      <em>Connect Link</em>.
    </>
  ),
  lede: (
    <>
      Connect Link projektuje <strong>COALA</strong> – opatentowaną francuską innowację: odzież transferową noszoną przez
      opiekunów rodzinnych i opiekunów zawodowych. Naszą misją jest zmniejszenie ryzyka upadków i zaburzeń
      mięśniowo-szkieletowych (MSD) podczas codziennych transferów.
    </>
  ),
  commitmentTitle: "Nasze zobowiązania",
  commitments: [
    { title: "Opatentowana francuska innowacja", body: "Zaprojektowana i opatentowana przez Connect Link" },
    { title: "Sprawdzona jakość", body: "Rygorystyczna kontrola jakości każdej partii" },
    { title: "Dla wszystkich", body: "Odpowiednia zarówno dla opiekunów rodzinnych, jak i dla profesjonalnych placówek opieki" },
    { title: "Skuteczna", body: "Przetestowana i doceniona przez opiekunów rodzinnych i opiekunów zawodowych" },
  ],
  ctaContact: "Kontakt",
  ctaHome: "Powrót do strony głównej →",
};

export default copy;

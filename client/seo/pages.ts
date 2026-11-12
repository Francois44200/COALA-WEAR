import { FAQ } from "@/data/faq";
import { collect } from "@/i18n/collect";
import type { SeoCopy } from "@/i18n/content/seoTypes";
import { HOSTED_LOCALES, LOCALE_INFO, type Locale } from "@/i18n/locales";
import { SITE_URL, urlFor, type PageKey } from "@/i18n/routes";

export const DEFAULT_OG_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets%2F33a0e32dc3d5463190cd2187a5e32ffb%2F3db594d5efc34d709b60baa2c75efe10?format=jpeg&width=1200";

const ORGANIZATION_LOGO = "https://shop.connectlink.fr/cdn/shop/files/Logo_COALA_carre.png";

const PRODUCT_IMAGE =
  "https://cdn.shopify.com/s/files/1/0928/2342/1309/files/Coala4poignees.png?v=1769697464&width=1200";

export const NOINDEX_PAGES: PageKey[] = ["legal", "privacy"];

type Meta = { title: string; description: string };

// Locales without their own entry fall back to English, then French.
const META: Record<PageKey, Partial<Record<Locale, Meta>>> = {
  home: {
    en: {
      title: "COALA – Transfer garment for caregivers and care teams",
      description:
        "COALA makes everyday transfers easier, reduces physical strain on caregivers and helps keep people with reduced mobility safe. Patented French innovation.",
    },
    fr: {
      title: "Blouse COALA – La blouse de transfert pour aidants et soignants",
      description:
        "COALA facilite les transferts du quotidien, réduit les efforts physiques et aide à sécuriser l'accompagnement des personnes dépendantes.",
    },
  },
  product: {
    en: {
      title: "COALA transfer garment for caregivers | Connect Link",
      description:
        "COALA is a textile transfer garment worn by caregivers, with four grip areas and an exoskeleton that protects your back. From 129 €, sizes XS to 4XL.",
    },
    fr: {
      title: "La blouse COALA – Aide textile au transfert",
      description:
        "Découvrez la blouse COALA : principe, bénéfices, mode d'emploi et caractéristiques d'une aide au transfert légère, pensée pour le terrain.",
    },
  },
  family: {
    en: {
      title: "I care for a loved one | COALA transfer garment",
      description:
        "Caring for a loved one every day? COALA, worn by you, makes transfers more stable and less effortful, protecting your back and their dignity.",
    },
    fr: {
      title: "J'aide un proche – Blouse COALA pour les aidants",
      description:
        "Vous aidez un proche au quotidien ? COALA vous aide à accompagner les transferts avec plus de stabilité et moins d'effort.",
    },
  },
  teams: {
    en: {
      title: "COALA for care teams | Transfer garment for professionals",
      description:
        "Equip your care team with COALA, the transfer garment that helps prevent MSDs, makes transfers safer and encourages patient participation.",
    },
    fr: {
      title: "J'équipe une équipe – COALA pour les professionnels",
      description:
        "Prévention des TMS et sécurité des transferts : équipez vos équipes avec COALA. Devis, démonstration et commande groupée.",
    },
  },
  howItWorks: {
    en: {
      title: "How COALA works: transfer garment user guide",
      description:
        "Step-by-step guide to putting on and taking off the COALA transfer garment, plus handle grips, verbal cues, caregiver posture and washing instructions.",
    },
    fr: {
      title: "Comment ça marche – Utiliser la blouse COALA",
      description:
        "S'équiper, accompagner, se déséquiper : le mode d'emploi de la blouse COALA en quelques étapes simples, avec vidéo.",
    },
  },
  results: {
    en: {
      title: "COALA results and awards: feedback from the field",
      description:
        "Testimonials, field results, awards and partners for COALA, the transfer garment worn by family caregivers and care professionals.",
    },
    fr: {
      title: "Preuves et résultats – Retours terrain sur COALA",
      description:
        "Retours d'expérience, prix, partenaires et articles de presse autour de la blouse de transfert COALA.",
    },
  },
  explained: {
    en: {
      title: "COALA explained: what the garment does and does not do",
      description:
        "COALA is not a patient hoist. What the transfer garment does, its limits and the situations it suits, explained simply.",
    },
    fr: {
      title: "COALA, concrètement : ce que la blouse fait et ne fait pas",
      description:
        "COALA n'est pas un lève-personne. Ce que la blouse permet, ses limites et les situations où elle est adaptée, expliqués simplement.",
    },
  },
  faq: {
    en: {
      title: "FAQ: COALA transfer garment questions answered",
      description:
        "Sizing, washing, use and team orders: clear answers about the COALA transfer garment for family caregivers and care professionals.",
    },
    fr: {
      title: "FAQ – Questions fréquentes sur la blouse COALA",
      description:
        "Taille, entretien, usage, commande pour une structure : toutes les réponses sur la blouse de transfert COALA.",
    },
  },
  about: {
    en: {
      title: "About Connect Link, the company behind COALA",
      description:
        "Connect Link, founded in 2022 at Eurasanté (Loos, France), designs the COALA transfer garment to reduce the risks linked to transfers.",
    },
    fr: {
      title: "À propos – Connect Link, créateur de la blouse COALA",
      description:
        "Connect Link, créée en 2022 et basée à Eurasanté (Loos), conçoit la blouse COALA pour prévenir les risques liés aux transferts.",
    },
  },
  contact: {
    en: {
      title: "Contact us | COALA transfer garment",
      description:
        "Questions about the COALA transfer garment? Contact the Connect Link team, whether you are a family caregiver or a care professional.",
    },
    fr: {
      title: "Contact – Blouse COALA",
      description:
        "Une question sur la blouse COALA ? Contactez l'équipe Connect Link, particuliers comme professionnels.",
    },
  },
  quote: {
    en: {
      title: "Request a quote | COALA transfer garment for care teams",
      description:
        "Care homes, home care services, healthcare facilities: request a quote to equip your teams with the COALA transfer garment.",
    },
    fr: {
      title: "Demander un devis – Blouse COALA pour les structures",
      description:
        "EHPAD, services à domicile, établissements de soin : demandez un devis pour équiper vos équipes avec la blouse COALA.",
    },
  },
  legal: {
    en: {
      title: "Legal notice | COALA",
      description:
        "Legal notice for coalawear.com, published by Connect Link SAS (Nantes, France). Hosted by Netlify.",
    },
    fr: {
      title: "Mentions légales – Blouse COALA",
      description: "Mentions légales du site coalawear.com, édité par Connect Link.",
    },
  },
  privacy: {
    en: {
      title: "Privacy policy | COALA",
      description:
        "Privacy policy for coalawear.com, published by Connect Link SAS (Nantes, France).",
    },
    fr: {
      title: "Politique de confidentialité – Blouse COALA",
      description: "Politique de confidentialité du site coalawear.com, édité par Connect Link.",
    },
  },
};

const SEO = collect<SeoCopy>(import.meta.glob("../i18n/content/*/seo.ts", { eager: true, import: "default" }));

export const metaFor = (page: PageKey, locale: Locale): Meta =>
  SEO[locale]?.meta[page] ?? META[page][locale] ?? META[page].en ?? META[page].fr;

const PRODUCT_NAME: Partial<Record<Locale, string>> = {
  en: "COALA transfer garment",
  fr: "Blouse de transfert COALA",
};

const ORG_ID = "https://blousecoala.fr/#organization";
const WEBSITE_ID = SITE_URL + "/#website";

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Connect Link",
  url: "https://blousecoala.fr/",
  logo: ORGANIZATION_LOGO,
  email: "contact@connectlink.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "70 rue du Docteur Yersin",
    postalCode: "59120",
    addressLocality: "Loos",
    addressCountry: "FR",
  },
  sameAs: [
    SITE_URL + "/",
    "https://www.youtube.com/@ConnectLink-COALA",
    "https://www.linkedin.com/company/connect-link-blouse-coala",
    "https://www.instagram.com/coala_connectlink/",
  ],
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL + "/",
  name: "COALA",
  publisher: { "@id": ORG_ID },
  inLanguage: HOSTED_LOCALES.map((l) => LOCALE_INFO[l].htmlLang),
};

export function jsonLdFor(page: PageKey, locale: Locale) {
  const url = urlFor(page, locale);
  const meta = metaFor(page, locale);
  const inLanguage = LOCALE_INFO[locale].htmlLang;

  const graph: Record<string, unknown>[] = [
    organization,
    website,
    {
      "@type": "WebPage",
      "@id": url + "#webpage",
      url,
      name: meta.title,
      description: meta.description,
      inLanguage,
      isPartOf: { "@id": WEBSITE_ID },
      publisher: { "@id": ORG_ID },
    },
  ];

  if (page === "product") {
    // TODO-EN: no "offers" until the shop's international shipping is confirmed.
    graph.push({
      "@type": "Product",
      "@id": url + "#product",
      name: SEO[locale]?.productName ?? PRODUCT_NAME[locale] ?? PRODUCT_NAME.en,
      brand: { "@type": "Brand", name: "COALA" },
      description: meta.description,
      image: PRODUCT_IMAGE,
      url,
      manufacturer: { "@id": ORG_ID },
    });
  }

  if (page === "faq") {
    graph.push({
      "@type": "FAQPage",
      "@id": url + "#faq",
      inLanguage,
      mainEntity: (FAQ[locale] ?? FAQ.en).flatMap((cat) =>
        cat.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      ),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

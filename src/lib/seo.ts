import { localePath, t, type Locale } from "@/i18n";
import { contentUpdated } from "@/lib/site";

/** JSON-LD for the landing page: the product, its offers and the FAQ. Every value comes from the dictionary. */
export function landingJsonLd(locale: Locale, site: URL | undefined): Record<string, unknown>[] {
  const dict = t(locale);
  const base = site ?? new URL("https://druyn.com");
  const url = new URL(localePath(locale, "/"), base).href;

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": new URL("/#software", base).href,
    name: "Druyn",
    url,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Project management",
    operatingSystem: "Web",
    inLanguage: dict.htmlLang,
    description: dict.site.description,
    screenshot: new URL(`/og-${locale}.png`, base).href,
    image: new URL(`/og-${locale}.png`, base).href,
    dateModified: contentUpdated,
    featureList: dict.audience.features.map((f) => f.title),
    publisher: { "@id": new URL("/#organization", base).href },
    offers: dict.pricing.plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price,
      priceCurrency: "CHF",
      description: `${plan.qty}${plan.unit ? ` ${plan.unit}` : ""}`.trim(),
      availability: "https://schema.org/LimitedAvailability",
    })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.audience.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return [software, faq];
}

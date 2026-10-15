import { de, type Dictionary } from "./de";
import { en } from "./en";

export type Locale = "de" | "en";
export const locales: readonly Locale[] = ["de", "en"];
export const defaultLocale: Locale = "de";

const dictionaries: Record<Locale, Dictionary> = { de, en };

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Path for a route in a locale: de is unprefixed, every other locale is prefixed. */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  if (locale === defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}

/** The same route in the other locale, for the language switch and hreflang. */
export function alternates(path: string): Record<Locale, string> {
  return { de: localePath("de", path), en: localePath("en", path) };
}

export const appUrl = "https://app.druyn.com";
export const contactEmail = "druynapp@gmail.com";

export function mailto(subject: string): string {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
}

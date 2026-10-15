/**
 * Site-wide facts that are not copy.
 * Bump `contentUpdated` (ISO date) whenever page content changes: it is shown in every
 * title block, written to JSON-LD dateModified and to the sitemap lastmod, so the three
 * never disagree.
 */
export const contentPublished = "2026-10-15";
export const contentUpdated = "2026-10-15";

export function formatDate(iso: string, locale: "de" | "en"): string {
  const [y, m, d] = iso.split("-");
  return locale === "de" ? `${d}.${m}.${y}` : `${y}-${m}-${d}`;
}

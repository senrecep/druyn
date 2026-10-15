import { t } from "@/i18n";
import { contentUpdated } from "@/lib/site";

// Agentic Resource Discovery (ARD) manifest. Lists only resources that exist.
// Served at /ai-catalog.json and /.well-known/ai-catalog.json.
export function aiCatalogResponse(site: URL | undefined): Response {
  const base = site ?? new URL("https://druyn.com");
  const host = base.hostname;
  const url = (path: string) => new URL(path, base).href;
  const de = t("de");
  const en = t("en");
  const catalog = {
    specVersion: "1.0",
    host: { displayName: "Druyn", identifier: host, url: base.href },
    updatedAt: contentUpdated,
    entries: [
      {
        identifier: `urn:ai:${host}:knowledge:llms-txt`,
        displayName: "Druyn knowledge index (llms.txt)",
        type: "text/plain",
        url: url("/llms.txt"),
        description: "Plain-text summary of what Druyn does, who it is for, pricing in CHF and the links to every public page, formatted for AI agents.",
      },
      {
        identifier: `urn:ai:${host}:website:home-de`,
        displayName: de.site.title,
        type: "text/html",
        url: url("/"),
        description: de.site.description,
      },
      {
        identifier: `urn:ai:${host}:website:home-en`,
        displayName: en.site.title,
        type: "text/html",
        url: url("/en"),
        description: en.site.description,
      },
      {
        identifier: `urn:ai:${host}:website:sitemap`,
        displayName: "Druyn sitemap",
        type: "application/xml",
        url: url("/sitemap-index.xml"),
        description: "XML sitemap of all indexable pages of the Druyn website with last-modified dates.",
      },
      {
        identifier: `urn:ai:${host}:application:app`,
        displayName: "Druyn application",
        type: "text/html",
        url: "https://app.druyn.com/",
        description: "The Druyn web application for project planning with a deterministic time forecast. Access by invitation during the lighthouse phase.",
      },
    ],
  };
  return new Response(JSON.stringify(catalog, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

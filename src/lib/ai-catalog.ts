import { t } from "@/i18n";
import { contentUpdated } from "@/lib/site";

/**
 * Agentic Resource Discovery (ARD) manifest, spec 1.0
 * (schema: ards-project/ard-spec, spec/schemas/ai-catalog.schema.json).
 * Lists only resources that exist. Served at /.well-known/ai-catalog.json and /ai-catalog.json,
 * and announced with <link rel="ai-catalog"> in every page head.
 */
export function aiCatalogResponse(site: URL | undefined): Response {
  const base = site ?? new URL("https://druyn.com");
  const url = (path: string) => new URL(path, base).href;
  const de = t("de");
  const en = t("en");
  const updatedAt = `${contentUpdated}T00:00:00Z`;

  const catalog = {
    specVersion: "1.0",
    host: {
      displayName: "Druyn",
      identifier: base.hostname,
      documentationUrl: url("/llms.txt"),
      logoUrl: url("/favicon.svg"),
    },
    entries: [
      {
        identifier: "urn:air:druyn:knowledge:llms-txt",
        displayName: "Druyn knowledge index (llms.txt)",
        type: "text/markdown",
        url: url("/llms.txt"),
        description:
          "Plain-text summary of what Druyn does, who it is for, pricing in CHF and links to every public page, formatted for AI agents.",
        tags: ["project-management", "forecast", "switzerland", "llms-txt"],
        representativeQueries: [
          "What is Druyn and what does it do?",
          "How does Druyn compute its time forecast?",
          "What does Druyn cost?",
        ],
        updatedAt,
      },
      {
        identifier: "urn:air:druyn:website:home-de",
        displayName: de.site.title,
        type: "text/html",
        url: url("/"),
        description: de.site.description,
        tags: ["website", "de-CH"],
        representativeQueries: [
          "Projektplanung mit automatischer Zeitprognose",
          "Wie funktioniert Druyn?",
          "Was kostet Druyn?",
        ],
        updatedAt,
      },
      {
        identifier: "urn:air:druyn:website:home-en",
        displayName: en.site.title,
        type: "text/html",
        url: url("/en"),
        description: en.site.description,
        tags: ["website", "en"],
        representativeQueries: [
          "project planning software with a deterministic time forecast",
          "How does Druyn work?",
          "Druyn pricing",
        ],
        updatedAt,
      },
      {
        identifier: "urn:air:druyn:website:sitemap",
        displayName: "Druyn sitemap",
        type: "application/xml",
        url: url("/sitemap-index.xml"),
        description: "XML sitemap of all indexable pages of the Druyn website with last-modified dates.",
        tags: ["sitemap"],
        representativeQueries: ["Which pages does druyn.com have?", "Druyn website sitemap"],
        updatedAt,
      },
      {
        identifier: "urn:air:druyn:application:web-app",
        displayName: "Druyn application",
        type: "text/html",
        url: "https://app.druyn.com/",
        description:
          "The Druyn web application for project planning with a deterministic time forecast. Access by invitation during the lighthouse phase.",
        tags: ["application", "login"],
        representativeQueries: ["Log in to Druyn", "Druyn app"],
        version: "0.9.0",
        updatedAt,
      },
    ],
  };

  return new Response(JSON.stringify(catalog, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

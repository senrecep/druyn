import type { APIRoute } from "astro";

// Search and answer-engine crawlers are welcome; the sitemap follows the deployed host.
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://druyn.com");
  const body = ["User-agent: *", "Allow: /", "", `Sitemap: ${new URL("/sitemap-index.xml", base).href}`, ""].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { contentUpdated } from "./src/lib/site";

// SITE_URL lets the same build serve the preview domain and production.
const site = process.env.SITE_URL ?? "https://druyn.com";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "never",
  build: { format: "file", inlineStylesheets: "always" },
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "de", locales: { de: "de-CH", en: "en" } },
      // Auth screens are noindex design previews for app.druyn.com.
      filter: (page) => !/\/(login|signup|forgot-password)$/.test(page),
      serialize: (item) => ({ ...item, lastmod: contentUpdated }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Keep scripts as external files: the CSP in public/_headers allows no inline scripts.
    build: { assetsInlineLimit: 0 },
  },
});

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// SITE_URL lets the same build serve the preview domain and production.
const site = process.env.SITE_URL ?? "https://druyn.com";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "never",
  build: { format: "file" },
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "de", locales: { de: "de-CH", en: "en" } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});

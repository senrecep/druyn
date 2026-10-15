# druyn.com

Marketing site for [Druyn](https://druyn.com), the project-planning app with a deterministic time forecast. Static site, German first (`/`), English at `/en`, deployed to Cloudflare Pages.

## Stack

- [Astro 7](https://astro.build) (static output, built-in i18n routing, `astro:assets` image optimisation, sitemap)
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite` (theme tokens live in `src/styles/global.css`)
- TypeScript (strict), [Bun](https://bun.sh) as package manager and script runner
- Self-hosted fonts: Archivo Variable (width axis) and B612 Mono via Fontsource
- No analytics, no cookies, no client framework; one small script (`src/scripts/sheets.ts`) draws the line work and drives the pinned title block

## Getting started

```sh
bun install
bun run dev        # http://localhost:4321
bun run build      # static output in dist/
bun run preview    # serve dist/ locally
bun run check      # TypeScript + Astro diagnostics
```

Node 22+ works too (`npm install`, `npm run build`), but the scripts assume Bun.

## Project layout

```
src/
  i18n/            de.ts is the source of truth; en.ts must satisfy its type
  layouts/Base.astro   <head>, SEO meta, hreflang, Open Graph, JSON-LD
  components/      Sheet, Plankopf (title block), DimensionChain, Stamp, drawings, Landing, AuthPage, LegalPage
  pages/           index, login, signup, forgot-password, impressum, datenschutz (+ en/ mirrors)
  lib/seo.ts       SoftwareApplication + FAQ JSON-LD built from the dictionary
  styles/global.css  Tailwind theme, fonts, browser-surface styling, draw animation
public/            favicon, OG images, robots.txt, llms.txt, Cloudflare _headers and _redirects
scripts/           screenshot.ts (CDP full-page captures), generate-og.sh (OG images)
reference/         content and screenshots pulled from the previous site and the app (not deployed)
```

## Editing content

All copy lives in `src/i18n/de.ts` (German, Swiss spelling: "ss", never "ß") and `src/i18n/en.ts`. Adding a key to `de.ts` without adding it to `en.ts` fails `bun run check`. Prices, the testimonial and the demo numbers in the cover drawing come from these files too.

The auth pages (`/login`, `/signup`, `/forgot-password`) are design deliverables for `app.druyn.com`. They are real HTML forms that post to the app with the app's field names (`user_email`, `user_password`); they are `noindex`.

`/impressum` and `/datenschutz` contain labelled placeholders (red boxes) that Druyn must replace with the final legal text.

## Deploying to Cloudflare Pages

One-time setup:

1. Create the Pages project (first deploy creates it): `bunx wrangler login`, then `bun run deploy`.
2. In the Cloudflare dashboard, Pages → druyn → Custom domains, add `druyn.com` and `www.druyn.com`. The zone must be on Cloudflare; add a redirect rule for `www` → apex.
3. Set the build environment variable `SITE_URL` only if the site is served from a different host than `https://druyn.com` (it controls canonical URLs, hreflang and the sitemap).
4. Cloudflare's default Node is too old for Astro 7; `.node-version` pins Node 24 and the Git-integrated project also sets `NODE_VERSION=24`.

Every later release:

```sh
bun run deploy           # production (main)
bun run deploy:preview   # preview branch deployment
```

Git integration (current setup): the GitHub repository is connected in Cloudflare Pages with build command `bun run build` and output directory `dist`; every push to `main` deploys to production, every other branch gets a preview URL.

`public/_headers` ships a strict Content-Security-Policy and long cache lifetimes for hashed assets; `public/_redirects` carries legacy paths.

### GitHub Pages fallback

The output is plain static files, so `dist/` can also be published with GitHub Pages (upload `dist/` with `actions/upload-pages-artifact`). Headers and redirects from `public/_headers` and `public/_redirects` are Cloudflare-only.

## Regenerating assets

```sh
bun scripts/screenshot.ts http://localhost:4321/ shot.png 1440 900   # full page
sh scripts/generate-og.sh                                             # public/og-de.png, public/og-en.png
```

Both need a local Chromium (`CHROMIUM=/path/to/chrome` overrides the binary).

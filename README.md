# druyn.com

Marketing site for [Druyn](https://druyn.com), the project-planning app with a deterministic time forecast. Static site, German first (`/`), English at `/en`. It deploys to Cloudflare Pages or GitHub Pages; both are set up below.

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

The site is deployed by Cloudflare Pages from this GitHub repository. Every push to `main` builds and publishes production; every other branch gets its own preview URL. Nothing runs on your machine.

### Connect the repository (one time)

1. Cloudflare dashboard: Workers & Pages, then Create application, then Pages, then "Import an existing Git repository".
2. Choose GitHub and authorise the Cloudflare Workers and Pages app for this repository. If the repository is not in the list, open github.com/settings/installations, pick the Cloudflare app, and add the repository under "Repository access".
3. Project settings:
   - Production branch: `main`
   - Framework preset: Astro (or none)
   - Build command: `bun run build`
   - Build output directory: `dist`
4. Environment variables (both Production and Preview):
   - `NODE_VERSION` = `24`. Cloudflare's default Node is older than Astro 7 requires. The repository also carries a `.node-version` file with the same value.
   - `SITE_URL` = the public origin the build is served from, for example `https://druyn.com`. It sets canonical URLs, hreflang, the sitemap, Open Graph image URLs and robots.txt. Leave it unset only if the site really runs at `https://druyn.com`.
5. Save and deploy. The first build takes about two minutes; later builds start automatically on every push.

### Custom domain

1. Pages project, Custom domains, "Set up a custom domain", enter `druyn.com` and again for `www.druyn.com`. The zone must be on Cloudflare; Pages creates the DNS records and the certificate.
2. Add a redirect rule on the zone so `www.druyn.com` sends visitors to `https://druyn.com`.
3. Set `SITE_URL` to `https://druyn.com` (or remove it) and trigger one redeploy so canonical URLs and the sitemap point at the final domain.

### Things that bite

- Do not add a `wrangler.toml` or `wrangler.jsonc` to the repository. When one exists, Pages reads build settings from it and ignores the environment variables set in the dashboard.
- `public/_headers` ships a strict Content-Security-Policy with no inline scripts. Astro is configured (`vite.build.assetsInlineLimit: 0`) to keep scripts as files; keep it that way or the page script is blocked.
- `public/_redirects` carries legacy paths. `dist/404.html` gives unknown URLs a real 404 status.

### Manual deploy without Git (alternative)

`bunx wrangler login`, then `bun run deploy` uploads `dist/` directly to a Pages project named `druyn`. A project created this way cannot be switched to Git integration later, so prefer the Git setup above.

## Deploying to GitHub Pages

The repository ships a workflow (`.github/workflows/github-pages.yml`) that builds with Bun and publishes `dist/` to GitHub Pages on every push to `main`. It is switched off until you opt in, so it never fails builds on a repository that uses Cloudflare.

1. Repository Settings, Pages: set "Source" to "GitHub Actions".
2. Repository Settings, Secrets and variables, Actions, Variables: add `GITHUB_PAGES` = `true`. Add `SITE_URL` = `https://druyn.com` (the public origin) so canonical URLs, hreflang, the sitemap and robots.txt point at the right host.
3. Push to `main` or run the "GitHub Pages" workflow by hand. The deployment URL appears in the workflow summary.
4. Custom domain: Settings, Pages, "Custom domain", enter `druyn.com`; GitHub tells you which DNS records to create (A records for the apex, a CNAME for `www`). Keep "Enforce HTTPS" on.

Differences from Cloudflare Pages:

- The site must be served from a domain root (`https://druyn.com`), not from a sub-path such as `username.github.io/druyn`. Links, the manifest and the service worker use root-relative URLs.
- `public/_headers` and `public/_redirects` are Cloudflare features. On GitHub Pages there is no Content-Security-Policy header and no legacy-path redirects; everything else (404 page, PWA, sitemap, icons) works the same.
- Builds run on GitHub's runners, so the Node version pin and the Cloudflare environment variables are not used; the workflow installs Bun itself.

## Progressive web app

`public/manifest.webmanifest` (icons in `public/icons/`, generated from `public/favicon.svg`) and `public/sw.js` make the site installable and give it an offline fallback (`/offline`). Hashed assets are cached first, pages network-first. Bump `VERSION` in `sw.js` when the offline page or the precache list changes.

## Regenerating assets

```sh
bun scripts/screenshot.ts http://localhost:4321/ shot.png 1440 900   # full page
sh scripts/generate-og.sh                                             # public/og-de.png, public/og-en.png
```

Both need a local Chromium (`CHROMIUM=/path/to/chrome` overrides the binary).

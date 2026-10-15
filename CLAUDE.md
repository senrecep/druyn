# druyn.com agent instructions

Static marketing site for Druyn (project planning with a deterministic forecast). Astro 7 + Tailwind 4 + TypeScript, Bun. Deploys to Cloudflare Pages (Git integration) or GitHub Pages (workflow in `.github/workflows`); the output must stay plain static files that work on both. Read `README.md` for commands and layout, `PRODUCT.md` for product truth, and `DESIGN.md` for the visual system before changing UI.

## Rules

- Copy is data. Every user-visible string lives in `src/i18n/de.ts` (source) and `src/i18n/en.ts`. Never hardcode text in components. German uses Swiss spelling ("ss", no "ß"). `bun run check` must pass; a missing English key is a type error.
- Never invent claims. No customer logos, user counts, benchmarks, certifications or extra testimonials. Prices and the demo numbers come from the dictionaries and must match the app.
- Keep it static. No client framework, no analytics, no cookies. The only script is `src/scripts/sheets.ts`; the page must work with it removed and with `prefers-reduced-motion`.
- Stay in the visual world. The site is a drawing set: bordered sheets, a title block (Plankopf), dimension chains, one red stamp per sheet as the primary action, mono labels, self-drawing line work. Reuse the components in `src/components` instead of adding generic cards, gradients or icon tiles.
- SEO/GEO is part of every page. Each page passes `title`, `description` and `path` to `Base.astro`; hreflang, canonical, Open Graph and JSON-LD come from there. Keep `public/llms.txt` in sync when positioning or pricing changes. Bump `contentUpdated` in `src/lib/site.ts` whenever content changes: it feeds the visible date in the title block, `dateModified` and the sitemap `lastmod`. Headings name the product ("Druyn Funktionen", not "Funktionen"); meta descriptions stay under 160 characters; the first paragraph after the H1 names Druyn.
- Code, comments, commits and docs are in English. Commit messages follow conventional commits (`feat:`, `fix:`, `docs:`, `chore:`).

## Commands

```sh
bun install
bun run dev
bun run build && bun run preview
bun run check
bun run deploy            # Cloudflare Pages direct upload (Git integration deploys on push)
bun scripts/screenshot.ts <url> <out.png> [w] [h] [--viewport]
sh scripts/generate-og.sh
```

## Verify before you finish

1. `bun run build` and `bun run check` pass.
2. Capture `/` at 1440 and 390 wide with `scripts/screenshot.ts` and look at both; nothing overflows, every sheet's drawing and screenshot renders.
3. Both locales render (`/` and `/en`) and the language switch links resolve.

# Druyn reference inventory (pulled 2026-10-15 from druyn.com + app.druyn.com)

## Product
- **Druyn**: project management SaaS for visual project planning + automatic, deterministic time forecast. Swiss (Ennetmoos, NW), German-language, CHF pricing. English version "coming soon".
- Tagline: "Projektplanung muss keine Raketenwissenschaft sein." Loop: **Planung -> Ausführung -> Prognose**.
- Positioning: closes the loop between plan and reality. Hierarchical process diagrams (phases -> tasks), book hours directly on tasks, forecast respects dependencies, deadlines, team capacity. "Druyn ersetzt keine Menschen" / "keine Black-Box-KI": deterministic optimisation + collective team intelligence. Gamification statt Micromanaging / Overengineering.
- Audience: Projektleiter (multi-project), Ingenieure & Entwickler, kleine Teams. Testimonial: Silvan M., Holzbauingenieur (timber construction engineer). Demo data is construction/engineering (Holzfussbrücke Naturpark, Architekt/Planner/Bauingenieur/Betonbauer/Holzbauer).
- Status: **Leuchtturmphase** (lighthouse phase), exclusive/invite-only access. CTA = "Interesse anmelden" (mailto druynapp@gmail.com). App version 0.9.0.
- Features (4): Intuitiv & visuell · Automatische Planung · Team Koordination · Wissen aufbauen (templates, create projects from offers/task lists, CSV import).
- App capabilities seen in shell: Planung (configurator, process diagram), Ausführung (calendar with hour booking, notes), Prognose (Gantt + "Freie Kapazitäten" per role), Ressourcen (hours/week, efficiency, multiplier), Absenzen, templates, CSV/table import, demo project, roles Betrachter/Editor/Administrator, export/import drafts, billing (CH/DE/AT/LI).
- Pricing: 0 CHF / 3 Monate trial · Einzelbenutzer 5 CHF pro Benutzer/Monat (app: 2 Benutzer · 15 Ressourcen) · Team 30 CHF / Monat max 15 Mitglieder (app: "Kleines Team" 15 Benutzer · 15 Ressourcen).
- Legal: Druyn, Murmattstrasse 9, 6372 Ennetmoos, Schweiz. © 2026.

## Public pages that exist today
- druyn.com/ (single landing)  -> `druyn.com/index.html`, text in `druyn.com/content.md`
- app.druyn.com/login, /signup (invite link request), /forgot-password -> `app.druyn.com/*.html`
- No impressum/datenschutz/pricing pages exist (all SPA fallback). Need: Impressum, Datenschutz, AGB for CH.

## Brand assets
- `druyn.com/images/icon.svg` logo: Y-shaped orange/brown trunk + green rounded blocks as leaves (tree of task blocks). 16x16 viewBox, Inkscape export.
- `druyn.com/images/hero.svg` current hero: night-sky gradient #020617 -> #0B1B5A -> #4C1D95 -> #EC4899 with stars/nebula (rocket-science metaphor).
- Accent `--druyn-accent: #8dd35f` (green). Buttons Bulma primary teal #00d1b2. Navbar dark #2f343f-ish. Login pages: Bulma warm greys (`--bulma-scheme-h:35; s:10%`), card on dark.
- Product screenshots (real UI, keep as proof): `planning.png` 1730x479 (process diagram, breadcrumb), `executing.png` 1714x1081 (week calendar + task list), `predicting.png` 2373x663 (Gantt + free capacity %). UI palette pastel: rose #e8a0b0, green #b5d5b5, purple #bdb0d8, yellow, blue; warm grey #E4E1DE background.
- Screenshots of current site: `screenshots/`.

## Current stack
Static HTML + Bulma 1.0.4 CDN + 1KB CSS + 15-line tab JS, GitHub Pages (druyn.com, www -> apex 301). No analytics, no sitemap/robots, no fonts.

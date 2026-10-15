# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (latest 5.x) + Tailwind CSS (latest 4.x), static output. Deployed to Cloudflare Pages; the repo must ship the deploy scripts and commands so the Druyn team can set it up themselves. Preview domain for now: druyn.senrecep.com; production domain: druyn.com (www redirects to apex). Must also stay deployable on GitHub Pages (pure static output, no server runtime).

## Users

1. **Project leads** who plan and coordinate several projects at once and need a realistic timeline without rebuilding the plan every time reality drifts.
2. **Engineers and developers** (the confirmed proof is a timber-construction engineer; demo data is architecture and civil/timber construction) who need structured sequences and clear priorities.
3. **Small teams** that work on shared projects and want to stay in sync without micromanagement.

They work in German-speaking Switzerland (CH, also DE/AT/LI billing). They evaluate on a laptop at a desk, mostly during a workday. Access is currently invite-only ("Leuchtturmphase").

## Product Purpose

Druyn is a web app for visual project planning with an automatic, deterministic time forecast. Users plan hierarchically (phases down to tasks) as a process diagram, estimate effort, set deadlines and assign resources, then book worked hours directly on tasks. The forecast continuously re-plans around progress, dependencies, deadlines and team capacity. The landing site exists to explain this clearly, build trust, and convert interested planners into early-access requests (and later, sign-ups).

## Positioning

"Schliesse den Kreis zwischen Planung und Realität." Classic tools produce rigid plans that stop meaning anything once something changes; Druyn keeps plan and reality in one loop: **Planung → Ausführung → Prognose**. The forecast is a deterministic optimisation algorithm combined with the team's collective intelligence. Explicitly: Druyn does not replace people and is not a black-box AI. Minimalist, "Gamification statt Micromanaging / Overengineering".

## Operating Context

- Three app views: **Planung** (hierarchical process diagram with breadcrumbs; task cards with assigned roles and booked/planned hours), **Ausführung** (week calendar where hours are booked on tasks; task list with progress bars; notes), **Prognose** (Gantt by role with milestones, plus "Freie Kapazitäten" per role per week in %).
- Resources have hours per week, efficiency %, multiplier; absences; roles Betrachter / Editor / Administrator.
- Templates: reuse proven project structures; create projects from offers or task lists; CSV / table import with column mapping; export/import drafts; demo project.
- Pricing (confirmed on current site, CHF): free 90-day trial · Einzelbenutzer 5 CHF per user / month · Team 30 CHF / month (max 15 members). App shows "2 Benutzer · 15 Ressourcen" and "15 Benutzer · 15 Ressourcen" respectively.
- App at app.druyn.com (login, signup = request a personal registration link, forgot password). Version 0.9.0.
- Company: Druyn, Murmattstrasse 9, 6372 Ennetmoos, Schweiz. Contact: druynapp@gmail.com.

## Capabilities and Constraints

- Languages: German (primary, Swiss spelling: "ss" not "ß") at `/`, English at `/en` with hreflang. English copy is a translation of the German truth; the Druyn team reviews it.
- Public surfaces in scope: landing page, login, signup (invite-link request), forgot-password, Impressum, Datenschutz. The auth pages are design deliverables for app.druyn.com, built as static pages in this site.
- Strong SEO and GEO (AI answer engines): per-page metadata, Open Graph, JSON-LD (SoftwareApplication, Organization, FAQ), sitemap, robots, llms.txt, fast static output.
- Undecided: whether the CTA stays an email (mailto) or becomes a form; English pricing display; legal texts (Impressum/Datenschutz content must come from Druyn, placeholders are labelled).
- Do not invent: customer logos, numbers of users, benchmarks, certifications, additional testimonials.

## Brand Commitments

- Name: **Druyn** (capital D). Logo: a tree with a Y-shaped orange/brown trunk and green rounded blocks as leaves (`reference/druyn.com/images/icon.svg`); the blocks echo task cards in a hierarchy.
- Existing accent green `#8dd35f`; product UI uses a warm grey ground (`#E4E1DE`) with pastel rose / green / purple / yellow / blue task colours. These are product truth (screenshots), not a mandated site palette.
- Voice: direct, informal "du", plain German, no hype, engineering honesty ("keine Black-Box-KI").

## Evidence on Hand

- Real product screenshots: `reference/druyn.com/images/planning.png`, `executing.png`, `predicting.png` (German UI, construction demo project "9257 Holzfussbrücke Naturpark").
- One testimonial: Silvan M., Holzbauingenieur (quote in `reference/druyn.com/content.md`).
- Full current copy: `reference/druyn.com/content.md`; current auth pages: `reference/app.druyn.com/*.html`; screenshots of current site: `reference/screenshots/`.
- No customer logos, no case studies, no press, no usage numbers. Do not fabricate.

## Product Principles

1. Show the loop, don't describe it: the plan-execute-forecast cycle is the product; the site should make it visible.
2. Honesty over hype: deterministic, explainable, "no black-box AI"; every claim on the page must be true today.
3. Calm competence for people who coordinate many things at once; the site should feel like relief, not pressure.
4. Swiss precision: concise copy, exact numbers, CHF, no filler.
5. Fast and light: static, minimal JS, excellent Core Web Vitals; this is itself a proof of the product's "no overengineering" stance.

# Surface brief: druyn.com landing (src/pages/index.astro, /en/index.astro)

Mode: Persuade. Related surfaces in the same world: login, signup, forgot-password (Operate, auth designs for app.druyn.com), impressum, datenschutz (Read).

Audience: Swiss project leads, engineers (timber/civil/architecture), small teams; evaluated on a laptop at a desk by daylight → light sheets, one dark-blue cover.
Job: understand what Druyn does, trust the forecast, request early access.
Action: "Interesse anmelden" (mailto until a form exists) + "Anmelden" / "Registrieren (mit Einladung)" to app.druyn.com.
Proof: three real product screenshots (planning, executing, predicting), one testimonial (Silvan M., Holzbauingenieur), real demo project numbers (9257 Holzfussbrücke Naturpark). No logos, no user counts; nothing invented.
Constraints: German primary (Swiss "ss"), English at /en; static Astro + Tailwind; Cloudflare Pages; no personal names of the site builders anywhere in code or docs.

## Direction contract

THESIS: The site is a shop-drawing set (Plansatz). Every section is a numbered, bordered sheet with a title block pinned in the corner, and the Planung → Ausführung → Prognose loop is drawn as the engineering drawing it is, with real demo numbers as dimensions. It refuses the category arrangement: centred headline, browser-framed screenshot, three equal cards.

OWN-WORLD: Blueprint blue (#1D3E8C) cover sheets with white line work own the hero, the pricing sheet and the closing sheet (about a third of the scroll). Drafting-white (#FFFFFF) sheets with hairline near-black (#141414) ink and a bordered zone grid (letters A–D down the edge, numbers across) carry the content sheets. Dimension red (#D7261E) is reserved for measured figures and the single primary action, drawn as an approval stamp. Chalk-line blue (#2B5FD9) marks interactive text. Spruce (#DDB97A) appears only inside plates. Type: Archivo variable (width axis: condensed for display, normal for body) and B612 Mono for dimension figures, labels and the title block. Components: Sheet (frame + zone letters), Plankopf (title-block grid), DimensionChain (measured rule with end ticks and a figure), Stamp (primary action), Detail callout (screenshot window with leader line and "Detail A" label), RevisionTable (lists as revision rows). State is a mark, not a hue: drawn check for done, folded flag for "today".

STORY: The visitor understands that Druyn draws a project as a hierarchical plan, lets the team book real hours on it, and recalculates a forecast that respects dependencies, deadlines and capacity. They believe it is deterministic, explainable and made with engineering honesty (no black-box AI). They request early access, or log in if invited.

FIRST VIEWPORT: 1440×900, matching .impeccable/decision/assigned.html. Full-bleed blueprint cover with a 24px white border frame and zone letters. Row 1: drawing header as navigation (DRUYN · WERKPLAN left; Planung, Ausführung, Prognose, Preise, Anmelden right) in mono caps. Left 45%: headline at ~84px condensed Archivo on a dimension chain labelled "1 PLANSATZ · 6 BLATT", 20px sub-copy, red stamp "Interesse anmelden" plus an underlined mono link "So funktioniert Druyn". Right 40%: an SVG line drawing of the real demo project (Projektstart, Standortanalyse, Nutzungskonzept → Vorprojekt → Behördeneingabe) with progress bars and hour figures, red dimension chains "12/12 h" and "KW 30 – KW 41"; the lines draw themselves on load. Bottom-right: the Plankopf (560px) with Projekt, Blatt 1/6, Massstab 1:1, Phase Leuchtturm, Freigabe "3 Monate 0 CHF", Stand 2026 · v0.9. The primary action is the stamp, left, above the fold on every width.

FORM: Werkplan, the Swiss timber shop-drawing set; candidate 6 of 7 on the ordered grounded list; seed key a18c6fe7; code-led build (no image generation in this harness).

SIGNATURE INTERACTION AND MOTION GRAMMAR: The Plankopf is pinned and scroll-driven: as sheets turn, it counts "Blatt 2/6 … 6/6" and names the current sheet, acting as navigation. Every sheet's line work draws itself once on reveal (stroke-dashoffset, exponential ease-out, ~900ms) and dimension figures count up; nothing fades or slides. Reduced motion renders everything static.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved
- CTA remains mailto until Druyn decides on a form.
- Impressum/Datenschutz legal text: labelled placeholders until Druyn supplies the texts.
- English pricing copy: same CHF figures, translated labels; Druyn reviews the translation.

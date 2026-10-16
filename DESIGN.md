---
name: Druyn Werkplan
description: "The druyn.com site as a numbered drawing set built from the Druyn app's own materials: warm neutral canvas, off-white panel sheets, one slate cover, teal for the single action, red only for measured figures."
colors:
  canvas: "#d4d0cc"
  sheet: "#f5f7f5"
  elevated: "#ffffff"
  product-ground: "#e4e1de"
  blueprint: "#2e333d"
  blueprint-deep: "#272c37"
  ink: "#1c1a19"
  ink-soft: "#595450"
  line: "#c2beb9"
  line-soft: "#e4e1de"
  action: "#00d1b2"
  action-pressed: "#00cdac"
  dimension: "#d2042d"
  dimension-on-slate: "#ff6b7a"
  chalk: "#2563eb"
  sage: "#a3c4a5"
  sage-soft: "#d5ddd3"
  task-rose: "#e2a6af"
  done-green: "#3cb371"
  white-ink: "#ffffff"
  white-ink-soft: "#b7bfc9"
typography:
  display:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.125rem, 6vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.02em"
    fontVariation: "wdth 78"
  headline:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.02em"
    fontVariation: "wdth 78"
  title:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "wdth 100"
  lead:
    fontFamily: "ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  body:
    fontFamily: "ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
    fontFeature: "tnum"
  label:
    fontFamily: "B612 Mono, DejaVu Sans Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.1em"
  figure:
    fontFamily: "B612 Mono, DejaVu Sans Mono, ui-monospace, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "tnum"
  figure-display:
    fontFamily: "B612 Mono, DejaVu Sans Mono, ui-monospace, monospace"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "tnum"
rounded:
  none: "0px"
  sm: "4px"
  md: "6px"
  bubble: "9999px"
spacing:
  frame: "24px"
  sheet-pad: "clamp(1.25rem, 4vw, 3.75rem)"
  cell: "8px 12px"
  row: "20px"
  block: "40px"
  section: "64px"
  section-md: "96px"
components:
  stamp-fill:
    backgroundColor: "{colors.action}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 28px"
    height: "56px"
  stamp-fill-hover:
    backgroundColor: "{colors.action-pressed}"
    textColor: "{colors.ink}"
  stamp-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 28px"
    height: "56px"
  stamp-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white-ink}"
  stamp-outline-white:
    backgroundColor: "transparent"
    textColor: "{colors.white-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 28px"
    height: "56px"
  stamp-outline-white-hover:
    backgroundColor: "{colors.white-ink}"
    textColor: "{colors.blueprint}"
  nav-login:
    backgroundColor: "{colors.action}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  nav-login-hover:
    backgroundColor: "{colors.action-pressed}"
    textColor: "{colors.ink}"
  nav-login-white:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  nav-login-white-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white-ink}"
  field:
    backgroundColor: "{colors.elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.figure}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "48px"
  sheet-white:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.sheet-pad}"
  sheet-slate:
    backgroundColor: "{colors.blueprint}"
    textColor: "{colors.white-ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.sheet-pad}"
  panel:
    backgroundColor: "{colors.elevated}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  panel-header:
    backgroundColor: "{colors.product-ground}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "10px 12px"
  plankopf-strip:
    backgroundColor: "{colors.elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "10px 12px"
    width: "416px"
---

# Design System: Druyn Werkplan

## Overview

**Creative North Star: "The Werkplan"**

The site is a numbered drawing set built from the Druyn app's own materials. Every section is still a numbered sheet with zone letters down the edge and zone numbers across the top, and a title block (the Plankopf) sits in the corner of the cover. The product's loop, Planung, Ausführung, Prognose, is drawn as the engineering drawing it is, with real demo hours and calendar weeks set as dimensions. What changed in the second revision is the material: every colour, radius and shadow now comes from the app's own theme, so druyn.com and the app read as one product.

Three grounds carry the world. A warm neutral canvas shows in the gaps between sheets. Off-white sheets float on it like app panels, with white elevated panels (title block, tables, notes, fields) set inside them. One dark slate surface, the app's login ground, opens the set, holds the pricing parts list, and closes it. The single action on any sheet is the app's teal button with dark text. Red appears only where a draughtsperson would ink it: measured figures, deviation chains and errors. Sage is declared for progress and capacity. Density is high but calm: mono caps labels at eleven pixels, hairline rules, tables instead of cards, revision rows instead of feature tiles.

Motion is the act of drawing. Line work draws itself once on reveal, labels ink in afterwards, and the pinned title block counts sheets as the reader scrolls. Nothing fades, slides or bounces. Under reduced motion the whole set is simply already drawn.

**Key Characteristics:**
- Numbered sheets with zone marks (A to D, 1 to 6) on every section, drawn as app panels: hairline border, 6px radius, one soft shadow
- Three grounds: warm canvas between sheets, off-white sheets with white panels inside, and one slate surface for cover, pricing and close
- Teal for the one action per sheet; red reserved for measured figures, deviation and errors
- Archivo condensed (width 78) for headlines, system sans for reading copy, B612 Mono for every label, figure and title-block cell
- 4 to 6px radii, 1px hairline borders, diffuse low-offset shadows from the app, no gradients
- Lists are tables, revision rows and dimension chains, never cards

## Colors

The app's palette, used with the app's restraint: warm neutrals for ground and surfaces, one slate, one teal action, one red for what is measured, one blue for what is interactive.

### Primary
- **Action Teal** (`{colors.action}`): the fill of the one stamp per sheet and of the login button in the cover navigation, always with Ink text. Also the text-selection colour on slate sheets.
- **Action Pressed** (`{colors.action-pressed}`): the stamp and login button under hover.

### Secondary
- **Dimension Red** (`{colors.dimension}`): measured figures and dimension chains inside the drawings on off-white sheets, the deviation chain, the skip link block, and the form error note. It is the ink of things that must be checked, and the app's own negative and milestone red.
- **Dimension on Slate** (`{colors.dimension-on-slate}`): the same red lightened for legibility where the cover drawing sets its hour total, calendar-week chain and the "heute" flag on the slate ground.

### Tertiary
- **Chalk Blue** (`{colors.chalk}`): everything interactive that is not a button: text selection and the caret, the global focus ring on off-white sheets, the field focus border and ring, and text links on auth and legal pages. It is the app's selected and link blue. Never a fill.
- **Sage / Sage Soft** (`{colors.sage}`, `{colors.sage-soft}`): declared from the app for progress and capacity fills. No shipped surface consumes them yet; see the drawing colours below.

### Neutral
- **Canvas** (`{colors.canvas}`): the page body. It shows only in the 24px gaps between sheets, so sheets read as panels floating on the app's base canvas.
- **Sheet** (`{colors.sheet}`): the off-white ground of content sheets, the app's surface colour.
- **Elevated** (`{colors.elevated}`): white panels set on a sheet: the title block, the pinned strip, the feature table, the notes box, fields, the detail bubble, and the mobile menu.
- **Product Ground** (`{colors.product-ground}`): the app's header-strip fill. Used for the title-block header row, the brand cell of the pinned strip, table header rows, the notes box header, and the mat around every screenshot.
- **Slate** (`{colors.blueprint}`): the ground of the cover, pricing and closing sheets, the mobile menu on those sheets, and the browser theme colour. The token keeps its old name in code.
- **Slate Deep** (`{colors.blueprint-deep}`): the border of slate sheets only.
- **Ink** (`{colors.ink}`): text, rules, SVG strokes and the stamp label on off-white and on teal. Opacity steps (0.8, 0.75, 0.7, 0.6, 0.5, 0.4) make zone marks, title-block keys, figure indices, captions and placeholders.
- **Ink Soft** (`{colors.ink-soft}`): reading paragraphs on off-white sheets, table header text, and the border of outline stamps, the detail bubble and the white-sheet login and menu buttons.
- **Line** (`{colors.line}`): every hairline on off-white: sheet border, panel borders, table and list dividers, title-block cell rules, field borders, the screenshot window, and the task-card strokes in the cover drawing.
- **Line Soft** (`{colors.line-soft}`): the scrollbar track only. Same value as Product Ground.
- **White Ink** (`{colors.white-ink}`): text, rules and strokes on slate. Opacity steps (0.85, 0.7, 0.6, 0.4, 0.3) make nav links, outline borders, pricing rules, the footer rule and the slate menu border.
- **White Ink Soft** (`{colors.white-ink-soft}`): reading paragraphs and the footer address on slate, and the hover colour of underlined white links.
- **Task Rose** (`{colors.task-rose}`): the header strip and progress fill of the task cards in the cover drawing. It is the demo project's own task colour in the app, not a system accent.
- **Done Green** (`{colors.done-green}`): the drawn check on a completed task card and in the loop ring.

### Named Rules
**The Three Grounds Rule.** A surface is canvas, off-white sheet, white panel, or slate. Panels sit on sheets and sheets sit on canvas; there is no tint, no gradient, and no panel of any other colour.

**The One Stamp Rule.** Each sheet carries at most one teal-filled stamp. Every other action on that sheet is an outline stamp, a bordered mono link, or an underlined mono label.

**The Red Is Measured Rule.** Red marks a measured figure, a deviation, or an error. It is never an action, an emphasis, a heading or decoration; the action is teal, the interactive state is chalk blue.

**The Opacity Not Grey Rule.** Secondary text on a sheet is the sheet's own ink at reduced opacity, or Ink Soft for reading copy. No further greys.

## Typography

**Display Font:** Archivo Variable, width axis (with Helvetica Neue, Arial)
**Body Font:** system sans: ui-sans-serif, system-ui, Segoe UI, Roboto (with Helvetica Neue, Arial)
**Label/Mono Font:** B612 Mono 400 and 700 (with DejaVu Sans Mono, ui-monospace)

**Character:** Condensed Archivo at width 78 gives headlines the tight, upright cut of a stencil title; Archivo at full width and weight 650 carries row titles and the quote. Reading copy is the operating system's sans, the same face the app renders in, so the site inherits the app's per-OS variance on purpose. B612 Mono, a cockpit-instrument face, does every label, figure and title-block cell with tabular numerals on by default across the whole body.

### Hierarchy
- **Display** (700, width 78, `clamp(2.125rem, 6vw, 6rem)`, line-height 0.96, tracking -0.02em): the cover headline only, capped at 9.5em wide, balanced and hyphenated.
- **Headline** (700, width 78, `clamp(2.25rem, 4.4vw, 3.75rem)`, line-height 0.96): sheet headings on off-white and slate sheets. The closing sheet uses `clamp(2.5rem, 5.6vw, 5rem)` capped at 16ch; the FAQ heading and form page titles step down to `clamp(1.75rem, 3vw, 2.5rem)` and `clamp(2rem, 4vw, 3rem)`.
- **Title** (650, width 100, 1.375rem, line-height 1.05, tracking -0.015em): row titles in revision tables, audience list, FAQ questions, legal subheadings. Detail titles 1.75rem / 2.25rem at md; pricing plan names 1.5rem / 1.875rem at md; the testimonial `clamp(1.5rem, 3vw, 2.5rem)` at line-height 1.15.
- **Lead** (400, system sans, 1.125rem, line-height 1.625): the first paragraph under a sheet heading, capped at 60ch on off-white, 52ch on slate. The cover lead is 1.125rem / 1.25rem at md / 1.375rem at 3xl with line-height 1.5.
- **Body** (400, system sans, 1.0625rem, line-height 1.625): all other reading copy, in Ink Soft or White Ink Soft, 48ch to 62ch.
- **Label** (400, mono, 0.6875rem, tracking 0.1em, uppercase, line-height 1.2): zone marks, title-block keys, table headers, dimension-chain captions, nav links, captions under details, secondary links. The stamp uses the label grammar at 0.8125rem bold with 0.12em tracking.
- **Figure** (mono, tabular): any number set in a line of text, title-block values, revision letters and positions, field text, the notes box. The pricing price is the figure at `clamp(2.5rem, 5vw, 4.5rem)` bold.
- **Strong** (650) inside body copy.

### Named Rules
**The Mono Is Metadata Rule.** Anything a draughtsperson would letter by hand on a plan, labels, dimensions, sheet numbers, revision letters, the title block, the navigation, is set in B612 Mono. Reading copy is never mono; mono is never used for a paragraph longer than a note.

**The Width Axis Rule.** Headlines use Archivo's width axis at 78, titles at 100. Weight does not substitute for width; a heading is condensed, not simply heavier.

**The System Body Rule.** Reading copy is the system sans, never Archivo. Archivo appears only in display and title grammar, so the site keeps a voice while the paragraphs match the app.

## Layout

The page body is the warm canvas. Each sheet is a section with a 24px margin on all sides (the frame token), so adjacent sheets are separated by a 24px canvas gap and the first sheet shows a 24px canvas frame around the cover. The sheet is a panel: 1px Line border (Slate Deep on slate sheets), 6px radius, the panel shadow. Zone letters A to D sit in a 20px column down the left edge, zone numbers 1 to 6 in a 20px row across the top, both only from md and at 70% opacity in the sheet's ink. The cover and the auth/legal sheets fill the viewport minus the frame (`100svh - 48px`); the closing sheet is at least 70svh.

Sheet padding is the sheet-pad token, `clamp(1.25rem, 4vw, 3.75rem)`, plus 12px horizontal and 8px top from md to clear the zone marks. Inside a sheet the rhythm is: heading, then lead at 24px to 28px, then blocks at 40px, with a dimension chain as the section rule at 64px (96px from md). Two-column sheet grids use asymmetric fractions (11/9, 3/2, 2/3, 5/7) with 64px column gaps and 40px row gaps, collapsing to one column under lg.

Responsive rules observed in the build:
- Under lg the main navigation collapses into a bordered "Menü" disclosure that opens a 256px panel with a 6px radius and the lifted shadow, in Elevated on off-white sheets and in Slate on slate sheets.
- The title block (Plankopf) is a 3-column grid from sm and a 2-column grid under sm; its header row spans all columns.
- The Detail side layout (text left 5fr, screenshot right 7fr, 40px gap) applies from lg; otherwise text stacks above the screenshot.
- The pinned title-block strip is full-width and bottom-fixed under md; from md it is a 416px block pinned 24px from the bottom-right corner, inside the frame.
- Tables drop their third column under md and fold its content under the title cell.
- Above 1800px the root font size steps to 17.5px and sheet padding to 4.5rem; above 2300px to 19.5px and 5.5rem, so every rem measure scales with the screen. The cover drawing's max width steps 30rem, 23rem at lg, 30rem at 1400px, 36rem at 1800px, 42rem at 2300px.

## Elevation & Depth

Depth is the app's: a hybrid of tonal layering and soft, low-offset shadows. Canvas, sheet and white panel are three lightness steps of one warm neutral, and every panel also carries a hairline border, so layering reads even without the shadow. Shadows are diffuse and small, never hard or offset. Lines still do the drawing work inside a sheet: a leader from a bubble to its title, a dimension chain, a mat behind a screenshot.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 1px 4px rgba(0,0,0,0.08)`): every sheet and the title block.
- **Lifted** (`box-shadow: 0 4px 12px rgba(0,0,0,0.15)`): the pinned strip and the open mobile menu, the two surfaces that float over a sheet.
- **Button** (`box-shadow: 0 2px 5px rgba(0,0,0,0.1)`): the teal fill stamp only.
- **Focus ring** (`box-shadow: 0 0 0 2px rgba(37,99,235,0.25)`): the field under focus, with the Chalk border.

### Named Rules
**The App Shadow Rule.** A shadow is one of the four above, taken from the app. Nothing invents a fifth, and nothing uses a hard offset or a coloured bloom.

**The Border Plus Shadow Rule.** A panel is never shadow alone: it has a 1px Line border first, and the panel shadow second.

## Shapes

Corners are gently rounded in two steps: 4px for everything set on a sheet (stamp, login button, title block and strip, fields, tables, notes box, screenshot window, menu toggle), 6px for the sheet itself and the mobile menu panel. Borders are 1px hairlines everywhere: sheet frame, panels, cells, rules, fields and outline stamps. The one circle in the system is the Detail bubble, a 48px white ring with an Ink Soft border holding the detail letter. SVG line work uses a 1.5px stroke with square caps and `currentColor`, so drawings inherit the sheet's ink. Task cards in the cover drawing are 5px-radius white rectangles with a Line stroke, a Task Rose header strip and a 3px-radius progress bar, matching the app's cards. Dimension chains are a 20px-tall rule with 1px end ticks and the caption set into the line. State is a mark or a fill from the app, not a new hue: a green check on a completed node, a red folded flag for "heute", a plus that rotates 45° on an open FAQ row.

## Components

### Buttons (Stamp)
The primary action is the app's button: a 4px-radius teal block of mono caps with dark text.
- **Shape:** 4px radius, minimum height 56px, horizontal padding 28px, mono 0.8125rem bold, 0.12em tracking, uppercase, no inner hairline.
- **Fill:** Action Teal on Ink with the button shadow; hover shifts to Action Pressed and lifts 2px under motion-safe; active returns to rest. One per sheet. Also the form submit.
- **Outline:** 1px Ink Soft border, Ink text; hover inverts to Ink on white. For off-white sheets.
- **Outline White:** 1px White at 70% border, white text; hover inverts to white on Slate. For slate sheets.
- **Focus:** the global 2px outline offset 3px, Chalk on off-white sheets, white on slate sheets.
- **Secondary link:** the companion action beside a stamp is a label in the sheet's ink with a 1px bottom border and 4px padding, hover shifts to the soft ink. On the cover it carries a trailing "↓".

### Sheet
- **Frame:** 24px margin all round, 1px Line border (Slate Deep on slate), 6px radius, panel shadow. No inner frame line.
- **Zone marks:** A to D down the left (20px column), 1 to 6 across the top (20px row), label grammar at 70% opacity, md and up only, aria-hidden.
- **Tones:** white (Sheet, Ink) and blue (Slate, White Ink); slate sheets swap selection to teal and focus to white. The tone names stay "white" and "blue" in code.
- **Internal padding:** the sheet-pad token, extended from md to clear the zone marks.

### Plankopf (title block)
- **Block:** an app toolbar panel: Elevated ground, 1px Line border, 4px radius, panel shadow, mono 0.6875rem. A Product Ground header row with "DRUYN" at 0.9375rem bold 0.08em tracking and the loop tagline at 85%; six white cells (Projekt, Blatt, Massstab, Phase, Freigabe, Stand) each with a label key at 75% and a figure value, 8px by 12px padding, 1px Line cell rules. Three columns from sm, two under sm. The same light panel sits on slate and on off-white sheets.
- **Strip:** the pinned one-line version: three cells (DRUYN bold on Product Ground, "Blatt n/6" with a live figure, current sheet name truncated), Elevated ground, 1px Line top border full-width under md, bordered all round with a 4px radius and 416px wide from md, pinned 24px from the bottom-right, lifted shadow. Hidden on the cover; slides in over 420ms with the draw ease and 320ms opacity as sheet 2 enters; static under reduced motion.

### DimensionChain
- A 20px-tall presentational rule: 1px end ticks, 1px line each side, the caption in label grammar set into the gap. Tones: ink, white, dimension. Used as the hero's "1 PLANSATZ · 6 BLATT" chain, as the section rule between sheet halves, and for the detail range A to C.

### Detail (callout)
- **Header:** a 48px Elevated ring (1px Ink Soft) with the letter in mono bold, a 40px Ink leader line, then the title in Title grammar at 1.75rem (2.25rem at md).
- **Window:** a 1px Line border with a 4px radius and 6px (8px at md) of Product Ground mat around a responsive webp screenshot; in the stack layout a 16px vertical leader drops from the heading into the window's top edge.
- **Caption:** label "DETAIL A · note" at 60%, then body copy at 62ch (48ch in the side layout).
- **Layouts:** stack (default) and side (5fr text, 7fr window from lg).

### Tables and lists
- **Revision table (features):** an Elevated panel with a 1px Line border and 4px radius; a Product Ground header row in label grammar and Ink Soft; 1px Line row dividers; a figure letter cell at 60%; titles in Title grammar; descriptions in Ink Soft.
- **Parts list (pricing, on slate):** no panel; a 1px white-at-40% top rule, a label header row at 85% over a white-at-60% rule, white-at-60% dividers, the price as the display figure.
- **Numbered list (audience):** 1px Line dividers with top and bottom rules, a figure index at 50%, 20px row padding, 40px index column.
- **Note box:** an Elevated panel, 1px Line border, 4px radius, a Product Ground label header with a bottom rule, mono 0.9375rem rows with Line dividers and a figure index at 50%.
- **FAQ:** native disclosure rows with 1px Line bottom rules, Title grammar question, a figure "+" that rotates 45° when open, 20px row padding.

### Inputs / Fields
- **Style:** a label in label grammar, optional right-aligned mono link in Chalk Blue, then a 48px field with 1px Line border, 4px radius, Elevated ground, mono 0.9375rem, placeholder at 40% ink, 12px horizontal padding, Chalk caret. This matches the app's inputs.
- **Focus:** border turns Chalk and the focus-ring shadow appears; the global outline is suppressed on the field itself.
- **Error:** a 1px Dimension Red bordered note in mono 0.875rem red, role alert, square-cornered.
- **Submit:** the fill stamp at full width.

### Navigation
- **Style:** the app navbar on the cover. Left: the tree mark at 28px and "DRUYN · WERKPLAN" in mono 0.875rem bold 0.14em tracking (the suffix hides under sm). Right from lg: four anchor links plus the language switch in label grammar at 85% white (80% ink on off-white), hover to 100% and underline; then "ANMELDEN" as a 4px-radius block, teal with Ink text on slate (hover Action Pressed), 1px Ink Soft outline on off-white (hover inverts to Ink).
- **Mobile:** under lg a bordered 4px-radius "MENÜ" summary (white at 70% on slate, Ink Soft on off-white) opens a 256px, 6px-radius panel with the lifted shadow: Elevated with a Line border on off-white, Slate with a white-at-30% border on slate; links stacked with 8px vertical padding.
- **Skip link:** a Dimension Red label block fixed top-left, white text, revealed on focus.

### Line drawings (signature)
Inline SVGs with `data-draw`, 1.5px `currentColor` strokes, square caps, mono text. Paths marked `.draw` take their length from script and draw over 1100ms with the draw ease, staggered 60ms per path; text and fills marked `.fill-in` ink in over 500ms, 700ms after their path. Each drawing draws once when 25% visible. The cover drawing (LoopDrawing) draws the demo project as app task cards: white bodies with a Line stroke, Task Rose header strip, Ink title, Ink Soft project line, a Line-stroked progress bar with a Task Rose fill, hours as a figure, a Done Green check on the finished card; dependency lines in white; the hour total, calendar-week chain and "heute" flag in Dimension on Slate. The plan-versus-reality drawing (sheet 2) is Ink with a Dimension Red deviation chain; the loop ring is Ink with a Done Green check. Without the script, or under reduced motion, every path is simply visible.

## Do's and Don'ts

### Do:
- **Do** put every new section inside a Sheet with its zone marks and give it a number and a name so the pinned strip can count it.
- **Do** keep one teal-filled stamp per sheet and draw every other action as an outline stamp or an underlined mono label.
- **Do** set labels, figures, table headers, title-block cells and navigation in B612 Mono at 0.6875rem with 0.1em tracking, uppercase.
- **Do** use headings at Archivo width 78, titles at width 100, and reading copy in the system sans.
- **Do** make secondary text the sheet's own ink at reduced opacity, and reading copy Ink Soft.
- **Do** build any panel on a sheet as Elevated with a 1px Line border and a 4px radius, and give its header row the Product Ground fill.
- **Do** draw new diagrams as inline SVG with `currentColor` 1.5px strokes, `data-draw` on the root and `.draw` / `.fill-in` on the parts, so they inherit the draw-on-reveal grammar and the reduced-motion fallback.
- **Do** present a set of items as a revision table, a numbered list with hairline rules, or a dimension-chained pair of columns.
- **Do** keep the screenshot mat at Product Ground inside a 1px Line, 4px-radius window.

### Don't:
- **Don't** add tiles, pills or panels of any colour other than Elevated, Product Ground or the sheet's own ground; the sheet is the container and the panel is its only child surface.
- **Don't** use gradients, tints or any colour outside the app's tokens; the only colours not in the theme are the demo task's rose and the drawn green check, and they stay inside the drawings.
- **Don't** add icon tiles, glyph icons or illustrative imagery; the only mark is the Druyn tree in the header, and the only pictures are the three product screenshots.
- **Don't** signal state with a new hue; use a drawn mark (check, flag, rotated plus) or the app's own state colour (Chalk for focus and selection, red for error).
- **Don't** use red for actions, emphasis, headings or decoration; it belongs to measured figures, deviation and errors. The action is teal.
- **Don't** round a corner beyond 6px except the 48px detail bubble, and don't use a shadow outside the four app shadows.
- **Don't** fade or slide content into view; the only motion is line work drawing itself, labels inking in, and the strip sliding into its corner.
- **Don't** set reading copy in mono or Archivo, or stretch it beyond 62ch.

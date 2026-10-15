---
name: Druyn Werkplan
description: "The druyn.com site as a Swiss shop-drawing set: numbered bordered sheets, blueprint covers, hairline ink, dimension red for figures and the one approval stamp."
colors:
  blueprint: "#1d3e8c"
  blueprint-deep: "#16307a"
  sheet: "#ffffff"
  ink: "#141414"
  ink-soft: "#4a4a4a"
  line: "#b9b9b9"
  line-soft: "#e3e3e3"
  dimension: "#d7261e"
  dimension-pressed: "#c21f17"
  chalk: "#2b5fd9"
  white-ink: "#ffffff"
  white-ink-soft: "#c9d3ec"
  product-ground: "#e4e1de"
typography:
  display:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.125rem, 6vw, 5.25rem)"
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
  body:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
    fontFeature: "tnum"
  lead:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
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
  bubble: "9999px"
spacing:
  frame: "24px"
  sheet-pad: "clamp(1.25rem, 4vw, 3.75rem)"
  cell: "12px 8px"
  row: "20px"
  block: "40px"
  section: "64px"
  section-md: "96px"
components:
  stamp-fill:
    backgroundColor: "{colors.dimension}"
    textColor: "{colors.white-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 28px"
    height: "56px"
  stamp-fill-hover:
    backgroundColor: "{colors.dimension-pressed}"
    textColor: "{colors.white-ink}"
  stamp-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 28px"
    height: "56px"
  stamp-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white-ink}"
  stamp-outline-white:
    backgroundColor: "transparent"
    textColor: "{colors.white-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 28px"
    height: "56px"
  stamp-outline-white-hover:
    backgroundColor: "{colors.white-ink}"
    textColor: "{colors.blueprint}"
  nav-login:
    backgroundColor: "transparent"
    textColor: "{colors.white-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  nav-login-hover:
    backgroundColor: "{colors.white-ink}"
    textColor: "{colors.blueprint}"
  field:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.figure}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "48px"
  sheet-white:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sheet-pad}"
  sheet-blue:
    backgroundColor: "{colors.blueprint}"
    textColor: "{colors.white-ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sheet-pad}"
  plankopf-strip:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 12px"
    width: "416px"
---

# Design System: Druyn Werkplan

## Overview

**Creative North Star: "The Werkplan"**

The site is a Swiss timber shop-drawing set. Every section is a numbered, bordered sheet with zone letters down the edge and zone numbers across the top, and a title block (the Plankopf) sits in the corner of the cover. The product's loop, Planung, Ausführung, Prognose, is drawn as the engineering drawing it is, with real demo hours and calendar weeks set as dimensions. Nothing is decorated; everything is drawn.

Two materials carry the whole world. Blueprint-blue cover sheets with white line work open the set, hold the pricing parts list, and close it. Drafting-white sheets with near-black hairline ink carry the content between them. Red appears only where a draughtsperson would ink it: measured figures, deviation chains, and the single approval stamp that is the page's one primary action. Density is high but calm: mono caps labels at eleven pixels, hairline rules, tables instead of cards, revision rows instead of feature tiles.

Motion is the act of drawing. Line work draws itself once on reveal, labels ink in afterwards, and the pinned title block counts sheets as the reader scrolls. Nothing fades, slides or bounces. Under reduced motion the whole set is simply already drawn.

**Key Characteristics:**
- Bordered sheets with a double frame line and zone marks (A to D, 1 to 6) on every section
- Two grounds only: blueprint blue with white ink, or white with near-black ink
- Dimension red reserved for figures and the one stamp per sheet
- Archivo condensed (width 78) for display, Archivo normal for body, B612 Mono for every label, figure and title-block cell
- Square corners, hairline borders, no shadows on surfaces, no gradients
- Lists are tables, revision rows and dimension chains, never cards

## Colors

A drafting palette: one blue ground, one white ground, one ink, one red, and a chalk blue for live links.

### Primary
- **Blueprint Blue** (`{colors.blueprint}`): the ground of the cover, pricing and closing sheets and of the page body behind every sheet, so the sheet frame gaps read as blue. Also the browser theme colour.
- **Blueprint Deep** (`{colors.blueprint-deep}`): declared as the darker step of the blue ground. Reserved for a future pressed or layered blue state; not consumed by any current surface.

### Secondary
- **Dimension Red** (`{colors.dimension}`): measured figures and dimension chains inside drawings, the approval stamp, text selection, the caret, the focus ring on white sheets, the skip link, form error text and the legal placeholder boxes. It is the ink of things that must be checked.
- **Dimension Pressed** (`{colors.dimension-pressed}`): the stamp under hover only.

### Tertiary
- **Chalk Blue** (`{colors.chalk}`): interactive text on white sheets (auth cross-links, mailto links in legal pages). Never a fill, never on blue sheets.

### Neutral
- **Sheet White** (`{colors.sheet}`): the white sheet ground and the field background.
- **Ink** (`{colors.ink}`): all text, borders, rules and SVG strokes on white sheets. Opacity steps (0.7, 0.6, 0.5, 0.4, 0.3) make secondary labels, zone marks and inner frames; there is no separate grey for them.
- **Ink Soft** (`{colors.ink-soft}`): body paragraphs on white sheets, so headings in full ink sit ahead of them.
- **Line / Line Soft** (`{colors.line}`, `{colors.line-soft}`): declared hairline greys; the only consumer today is the scrollbar track.
- **White Ink** (`{colors.white-ink}`): all text, borders and strokes on blue sheets. Opacity steps (0.85, 0.8, 0.7, 0.6, 0.5) make its secondary tones.
- **White Ink Soft** (`{colors.white-ink-soft}`): body paragraphs and footer address on blue sheets, and the hover colour of underlined white links.
- **Product Ground** (`{colors.product-ground}`): the warm grey mat inside the Detail screenshot window only. It is the product UI's own ground and must not leak onto the sheet.

### Named Rules
**The Two Grounds Rule.** A surface is either blueprint blue with white ink or sheet white with near-black ink. There is no third ground, no tint, no gradient, and no panel of a different colour set on a sheet.

**The One Stamp Rule.** Each sheet carries at most one red-filled stamp. Every other action on that sheet is an outline stamp, a bordered mono link, or an underlined mono label.

**The Red Is Measured Rule.** Red marks a measured figure, a deviation, a focus, an error or the approval stamp. It is never used for emphasis, headings, icons or decoration.

**The Opacity Not Grey Rule.** Secondary text on a sheet is the sheet's own ink at reduced opacity, never a third grey.

## Typography

**Display Font:** Archivo Variable, width axis (with Helvetica Neue, Arial)
**Body Font:** Archivo Variable at normal width (with Helvetica Neue, Arial)
**Label/Mono Font:** B612 Mono 400 and 700 (with DejaVu Sans Mono, ui-monospace)

**Character:** Condensed Archivo at width 78 gives headlines the tight, upright cut of a stencil title; the same family at full width carries the reading copy so the pairing never argues with itself. B612 Mono, a cockpit-instrument face, does every label, figure and title-block cell with tabular numerals on by default across the whole body.

### Hierarchy
- **Display** (700, width 78, `clamp(2.125rem, 6vw, 5.25rem)`, line-height 0.96, tracking -0.02em): the cover headline only, balanced and hyphenated.
- **Headline** (700, width 78, `clamp(2.25rem, 4.4vw, 3.75rem)`, line-height 0.96): sheet headings on white and blue content sheets. The closing sheet uses `clamp(2.5rem, 5.6vw, 5rem)` capped at 16ch; the FAQ heading and form page titles step down to `clamp(1.75rem, 3vw, 2.5rem)` and `clamp(2rem, 4vw, 3rem)`.
- **Title** (650, width 100, 1.375rem, line-height 1.05, tracking -0.015em): row titles in revision tables, audience list, FAQ questions, legal subheadings. Detail titles 1.75rem / 2.25rem at md; pricing plan names 1.5rem / 1.875rem at md; the testimonial `clamp(1.5rem, 3vw, 2.5rem)` at line-height 1.15.
- **Lead** (400, 1.125rem, line-height 1.625): the first paragraph under a sheet heading, capped at 60ch on white, 52ch on blue. The cover lead steps to 1.25rem at md.
- **Body** (400, 1.0625rem, line-height 1.625): all other reading copy, in Ink Soft or White Ink Soft, 48ch to 62ch.
- **Label** (400, mono, 0.6875rem, tracking 0.1em, uppercase, line-height 1.2): zone marks, title-block keys, table headers, dimension-chain captions, nav links, eyebrow-position captions under details, secondary links. The stamp uses the label grammar at 0.8125rem bold with 0.12em tracking.
- **Figure** (mono, tabular): any number set in a line of text, title-block values, revision letters and positions. The pricing price is the figure at `clamp(2.5rem, 5vw, 4.5rem)` bold.
- **Strong** (650) inside body copy.

### Named Rules
**The Mono Is Metadata Rule.** Anything a draughtsperson would letter by hand on a plan, labels, dimensions, sheet numbers, revision letters, the title block, the navigation, is set in B612 Mono. Reading copy is never mono; mono is never used for a paragraph longer than a note.

**The Width Axis Rule.** Headlines use Archivo's width axis at 78, titles and body at 100. Weight does not substitute for width; a heading is condensed, not simply heavier.

## Layout

The page body is blueprint blue. Each sheet is a section with a 24px margin on all sides (the frame token), so adjacent sheets are separated by a 24px blue gap and the first sheet shows a 24px blue frame around the cover. The sheet has a 2px outer border and a second 1px inner border inset 8px, in the sheet's ink at 100% and 40% (white at 100% and 50% on blue). Zone letters A to D sit in a 20px column down the left edge, zone numbers 1 to 6 in a 20px row across the top, both only from md and at 70% opacity. The cover and the auth/legal sheets fill the viewport minus the frame (`100svh - 48px`); the closing sheet is at least 70svh.

Sheet padding is the sheet-pad token, `clamp(1.25rem, 4vw, 3.75rem)`, plus 12px horizontal and 8px top from md to clear the zone marks. Inside a sheet the rhythm is: heading, then lead at 24px to 28px, then blocks at 40px, with a dimension chain as the section rule at 64px (96px from md). Two-column sheet grids use asymmetric fractions (11/9, 3/2, 2/3, 5/7) with 64px column gaps and 40px row gaps, collapsing to one column under lg.

Responsive rules observed in the build:
- Under lg the main navigation collapses into a bordered "Menü" disclosure that opens a 256px panel in the sheet's own ground and 2px border.
- The title block (Plankopf) is a 3-column grid from sm and a 2-column grid under sm; its header row spans all columns.
- The Detail side layout (text left 5fr, screenshot right 7fr, 40px gap) applies from lg; otherwise text stacks above the screenshot.
- The pinned title-block strip is full-width and bottom-fixed under md; from md it is a 416px block pinned 24px from the bottom-right corner, inside the frame.
- Tables drop their third column under md and fold its content under the title cell.

## Elevation & Depth

The world is flat. Depth is drawn, not lit: a double frame line, a hairline border, a leader line from a bubble to its title, a mat behind a screenshot. Surfaces never carry a shadow. Two exceptions are the world's own devices and stay as recorded: the red stamp sits on a soft red bloom (`0 8px 24px -12px rgba(215,38,30,0.9)`) so it reads as freshly inked, and the pinned title-block strip casts a faint upward shade (`0 -10px 30px -20px rgba(0,0,0,0.5)`) so it separates from the sheet it floats over. Both are diffuse and large-blur; there are no hard offset shadows anywhere.

### Named Rules
**The Drawn Depth Rule.** If something needs to read as in front of something else, draw a line around it or a leader to it. Shadows are reserved for the stamp and the pinned strip.

## Shapes

Everything is square-cornered (0px). Borders are hairlines: 1px for cells, rules, fields and the screenshot window; 1.5px for the title block and the detail bubble; 2px for the sheet frame, the outline stamp, table top and bottom rules, the footer rule and the menu panel. The one circle in the system is the Detail bubble, a 48px ring holding the detail letter. SVG line work uses a 1.5px stroke with square caps and `currentColor`, so drawings inherit the sheet's ink. Dimension chains are a 20px-tall rule with 1px end ticks and the caption set into the line. Progress is a bordered bar with a filled portion, in the drawing's own ink. State is a mark, not a hue: a drawn check on a completed node, a red folded flag for "heute" on the drawing, a plus that rotates 45° on an open FAQ row.

## Components

### Buttons (Stamp)
The primary action is an approval stamp: a block of mono caps with a second hairline inked 4px inside the edge at 55% opacity.
- **Shape:** square (0px), minimum height 56px, horizontal padding 28px, mono 0.8125rem bold, 0.12em tracking, uppercase.
- **Fill:** Dimension Red on White Ink with the red bloom shadow; hover darkens to Dimension Pressed and lifts 2px under motion-safe; active returns to rest. One per sheet.
- **Outline:** 2px Ink border, Ink text; hover inverts to Ink on white. For white sheets.
- **Outline White:** 2px White border, white text; hover inverts to white on Blueprint. For blue sheets.
- **Focus:** the global 2px outline offset 3px, red on white sheets, white on blue sheets.
- **Secondary link:** the companion action beside a stamp is a label in the sheet's ink with a 1px bottom border and 4px padding, hover shifts to the soft ink. On the cover it carries a trailing "↓".

### Sheet
- **Frame:** 24px margin all round, 2px border in the sheet's ink, inner 1px border inset 8px at reduced opacity.
- **Zone marks:** A to D down the left (20px column), 1 to 6 across the top (20px row), label grammar at 70% opacity, md and up only, aria-hidden.
- **Tones:** white (Sheet White, Ink) and blue (Blueprint, White Ink); blue sheets swap selection and focus colours to white.
- **Internal padding:** the sheet-pad token, extended from md to clear the zone marks.

### Plankopf (title block)
- **Block:** a 1.5px-bordered grid, mono 0.6875rem; a header row with "DRUYN" at 0.9375rem bold 0.08em tracking and the loop tagline at 85%; six cells (Projekt, Blatt, Massstab, Phase, Freigabe, Stand) each with a label key at 60% and a figure value, 12px by 8px padding, cell borders at 60% white or 50% ink. Three columns from sm, two under sm.
- **Strip:** the pinned one-line version: three cells (DRUYN bold, "Blatt n/6" with a live figure, current sheet name truncated), 2px top border full-width under md, 2px all round and 416px wide from md, pinned 24px from the bottom-right. Hidden on the cover; slides in over 420ms with the draw ease and 320ms opacity as sheet 2 enters; static under reduced motion.

### DimensionChain
- A 20px-tall presentational rule: 1px end ticks, 1px line each side, the caption in label grammar set into the gap. Tones: ink, white, dimension. Used as the hero's "1 PLANSATZ · 6 BLATT" chain, as the section rule between sheet halves, and for the detail range A to C.

### Detail (callout)
- **Header:** a 48px ring (1.5px Ink) with the letter in mono bold, a 40px leader line, then the title in Title grammar at 1.75rem (2.25rem at md).
- **Window:** a 1px Ink border with 6px (8px at md) of Product Ground mat around a responsive webp screenshot; in the stack layout a 16px vertical leader drops from the heading into the window's top edge.
- **Caption:** label "DETAIL A · note" at 60%, then body copy at 62ch (48ch in the side layout).
- **Layouts:** stack (default) and side (5fr text, 7fr window from lg).

### Tables and lists
- **Revision table:** 2px top and bottom rules, 1px row dividers in full ink, a label header row at 70%, a figure letter or position cell at 60% to 70%, titles in Title grammar, descriptions in soft ink. On blue the same with white rules at 60%.
- **Numbered list:** 1px ink dividers with top and bottom rules, a figure index at 50%, 20px row padding, 40px index column.
- **Note box:** a 1px Ink border, a label header cell with a bottom rule, mono 0.9375rem rows with 30% dividers.
- **FAQ:** native disclosure rows with 1px bottom rules, Title grammar question, a figure "+" that rotates 45° when open, 20px row padding.

### Inputs / Fields
- **Style:** a label in label grammar, optional right-aligned mono link in Chalk Blue, then a 48px field with 1px Ink border, Sheet White ground, mono 0.9375rem, placeholder at 40% ink, 12px horizontal padding.
- **Focus:** border thickens to 2px Dimension Red; the global outline is suppressed on the field itself.
- **Error:** a 1px Dimension Red bordered note in mono 0.875rem red, role alert.
- **Submit:** the fill stamp.

### Navigation
- **Style:** a drawing header. Left: the tree mark at 28px and "DRUYN · WERKPLAN" in mono 0.875rem bold 0.14em tracking (the suffix hides under sm). Right from lg: four anchor links plus the language switch in label grammar at 85% (80% ink on white), hover to 100% and underline; then "ANMELDEN" as a 1px-bordered label block (white at 70% / ink), hover inverts.
- **Mobile:** under lg a bordered "MENÜ" summary opens a 256px panel, 2px border in the sheet's ground, links stacked with 8px vertical padding.
- **Skip link:** a red label block fixed top-left, revealed on focus.

### Line drawings (signature)
Inline SVGs with `data-draw`, 1.5px `currentColor` strokes, square caps, mono text. Paths marked `.draw` take their length from script and draw over 1100ms with the draw ease, staggered 60ms per path; text and fills marked `.fill-in` ink in over 500ms, 700ms after their path. Each drawing draws once when 25% visible. Red dimension chains inside drawings use Dimension Red as an explicit stroke. The three built drawings are the demo-project plan (cover), the plan-versus-reality deviation (sheet 2) and the closed loop ring (sheet 2). Without the script, or under reduced motion, every path is simply visible.

## Do's and Don'ts

### Do:
- **Do** put every new section inside a Sheet with its zone marks and give it a number and a name so the pinned strip can count it.
- **Do** keep one red-filled stamp per sheet and draw every other action as an outline stamp or an underlined mono label.
- **Do** set labels, figures, table headers, title-block cells and navigation in B612 Mono at 0.6875rem with 0.1em tracking, uppercase.
- **Do** use headings at Archivo width 78 and body at width 100; the width axis, not weight, separates them.
- **Do** make secondary text the sheet's own ink at reduced opacity.
- **Do** draw new diagrams as inline SVG with `currentColor` 1.5px strokes, `data-draw` on the root and `.draw` / `.fill-in` on the parts, so they inherit the draw-on-reveal grammar and the reduced-motion fallback.
- **Do** present a set of items as a revision table, a numbered list with hairline rules, or a dimension-chained pair of columns.
- **Do** keep the screenshot mat at Product Ground and the window at a 1px Ink border; it is the only place the product's own colours appear.

### Don't:
- **Don't** add cards, tiles, pills or panels of a third ground colour on a sheet; the sheet is the container.
- **Don't** use gradients, tints or any colour between Blueprint and White, or between Sheet White and Ink.
- **Don't** add icon tiles, glyph icons or illustrative imagery; the only mark is the Druyn tree in the header, and the only pictures are the three product screenshots.
- **Don't** signal state with a hue; use a drawn mark (check, flag, rotated plus, thickened border).
- **Don't** use red for emphasis, headings or decoration; it belongs to measured figures, the stamp, focus, caret, selection and errors.
- **Don't** round corners except the 48px detail bubble, and don't put a shadow on any surface other than the stamp's bloom and the pinned strip's shade.
- **Don't** fade or slide content into view; the only motion is line work drawing itself, labels inking in, and the strip sliding into its corner.
- **Don't** set reading copy in mono or stretch it beyond 62ch.

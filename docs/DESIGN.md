---
name: Arjay Sitoy
description: Signal Plate — a matte cobalt routing sheet and warm paper index.
colors:
  cobalt: "#192bad"
  panel: "#152691"
  signal: "#ffab82"
  paper: "#f5f2e9"
  ink: "#1b2444"
  muted: "#4d5570"
  light-ink: "#e0e5ff"
  dark-line: "#8594ea"
  paper-line: "#b9becd"
  target: "#e7eaff"
typography:
  display:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "clamp(4.75rem, 11.65vw, 10.6rem)"
    fontWeight: 850
    lineHeight: 0.91
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "clamp(2.55rem, 6.3vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-.057em"
  title:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)"
    fontWeight: 750
    lineHeight: 1.06
    letterSpacing: "-.04em"
  body:
    fontFamily: "system-ui, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.55
  label:
    fontFamily: "system-ui, sans-serif"
    fontSize: ".9375rem"
    fontWeight: 700
rounded:
  square: "0px"
  terminal: "50%"
spacing:
  gutter: "clamp(1.25rem, 5.55vw, 5rem)"
  gap: "1rem"
  column-gap: "2rem"
components:
  masthead:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
  route-link:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
    padding: ".75rem 1rem .75rem 1.125rem"
  route-link-highlight:
    backgroundColor: "{colors.panel}"
  project-group-target:
    backgroundColor: "{colors.target}"
  project-pin-target:
    backgroundColor: "{colors.signal}"
    rounded: "{rounded.terminal}"
    size: ".45rem"
  repository-row:
    textColor: "{colors.ink}"
    padding: "1.45rem 0"
  repository-mark:
    textColor: "{colors.cobalt}"
    rounded: "{rounded.square}"
    size: "2.75rem"
  repository-mark-highlight:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
  index-link:
    textColor: "{colors.cobalt}"
  schematic-plate:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.light-ink}"
    rounded: "{rounded.square}"
---

# Design System: Arjay Sitoy

## Overview

**Creative North Star: "Signal Plate"**

Signal Plate looks like a printed routing diagram: matte cobalt, peach terminals, and hairline rules. Flat fields and an original vector monogram carry the identity.

The warm paper index is the quieter counterpart. Oversized Chivo sets the hierarchy; system text and ruled rows make the links easy to scan. A pale blue tint and a ringed peach terminal show where a topic link landed.

**Key Characteristics:**

- Matte cobalt and warm paper, with peach used as a signal.
- Heavy Chivo paired with compact, readable system text.
- Square frames, thin rules, round terminals, and inline SVG.

Source: the code-first build's [stylesheet](../site/assets/site.css), [homepage](../site/index.njk), and [shared layout](../site/_includes/base.njk), checked against the desktop and mobile captures in `.impeccable/review/`. Page strategy and composition stay in the [profile surface brief](profile-surface.md).

## Colors

### Primary

- **Routing Cobalt** (`cobalt`): structural bands, headings and links on paper, and the filled state of the repository arrow.
- **Plate Blue** (`panel`): darker inset field for the monogram frame and highlighted topic links.
- **Signal Peach** (`signal`): the name's period, terminals, route arrows, parts of the monogram, text selection, and the outlined pin at a topic destination.

### Neutral

- **Warm Paper** (`paper`): light background and main lettering on cobalt.
- **Deep Ink** (`ink`) and **Muted Ink** (`muted`): titles and default body text, then supporting copy on paper.
- **Pale Ink** (`light-ink`): supporting copy and captions on blue.
- **Blue Keyline** (`dark-line`) and **Paper Keyline** (`paper-line`): one-pixel structural rules on their respective grounds, not text colors.
- **Target Tint** (`target`): pale blue field behind the project group named by the URL fragment.

**The Peach Signal Rule.** Use peach for terminals, directional marks, and identity accents. In the paper index, standalone links stay cobalt; only the targeted group's pin turns peach, with a cobalt outline.

The sidecar's tonal ramps are preview swatches, not additional site colors.

## Typography

Chivo is self-hosted as a Latin WOFF2 variable font (normal, `600–900`, `font-display: swap`) under the [SIL Open Font License](../site/assets/chivo-OFL.txt). It falls back to the system sans, which is also the body and label face.

- **Display:** identity heading (`850`, `.91` line height, `-.035em` tracking). On narrow screens use `clamp(4.6rem, 16vw, 7.25rem)`.
- **Headline:** major section or standalone page heading (`800`, `.98` line height, `-.057em` tracking).
- **Title:** repository name (`750`, `1.06` line height, `-.04em` tracking).
- **Body:** `1rem` with `1.55` line height; repository descriptions stop at `61ch`. The larger introduction uses `clamp(1.05rem, 1.6vw, 1.4rem)`, `1.52` line height, and a `39ch` measure.
- **Label:** small system text in normal case. Topic headings use `700`, route labels `650`, and plate captions `.8125rem`.

**The Chivo for Hierarchy Rule.** Reserve Chivo for the wordmark and headings; use system text for copy, navigation, and captions.

## Layout

- Align masthead, content, and footer to an `80rem` maximum inner width with fluid gutters on both sides. Full-width color bands sit behind that shell.
- Use aligned columns and ruled rows on wide screens. At `54rem` and below, stack an index heading and its supporting copy. At `44rem` and below, stack paired content, routes, and project-group labels without changing reading order; the schematic plate caps at `25rem`. At `24rem` and below, tighten masthead gaps and link type rather than hiding navigation.

## Elevation & Depth

**The Flat Plate Rule.** No shadows. Separate surfaces with a change of ground, a keyline, or space; show interaction with a fill, underline, or outline rather than lift.

## Shapes

Keep panels and arrow frames square. Use one-pixel dividers to join or subdivide regions, and reserve circles for small terminal marks. Grids and registration crosses belong inside the schematic artwork rather than behind body text.

## Components

- **Masthead:** pin-and-name home link, plain navigation with a one-pixel baseline, and underlines on hover. The wordmark and navigation links are at least `2.75rem` tall; the home link exposes `aria-current="page"` on the homepage.
- **Route links:** a shared cobalt strip split by keylines. Each full-width anchor points to a real section; its peach terminal and arrow are decorative. Hover and keyboard focus fill the row with Plate Blue; hover alone shifts the arrow `.2rem` over `.28s`. Reduced motion removes the transition and shift.
- **Project group:** the target state (`:target`) gives the whole group a pale blue tint and a cobalt top rule. Its normally cobalt pin turns peach, with a `1px` cobalt outline offset by `2px`. The state persists while the URL fragment points to the group, independent of hover and focus.
- **Repository row:** a single anchor covers the title, description, and `2.75rem` square arrow frame. Hover or focus underlines the title and reverses the frame from cobalt on paper to paper on cobalt. Use the underlined cobalt text link for standalone index actions.
- **Schematic plate:** an original inline SVG monogram inside a darker ruled frame, with a grid, traces, and terminal dots. The mark is decorative and hidden from assistive technology; the name is text and the handle is a visible figure caption.

## Do's and Don'ts

- **Do** use native links and fragment targets so navigation and content work without JavaScript.
- **Do** keep the skip link, meaningful headings, visible text labels, and the `2px` current-color focus outline with `4px` offset.
- **Do** keep decorative arrows and marks out of the accessibility tree.
- **Don't** add shadows or round the structural frames.
- **Don't** ship raster artwork; keep the schematic mark and icons as vectors.

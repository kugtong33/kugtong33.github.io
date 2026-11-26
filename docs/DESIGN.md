---
name: Arjay Sitoy
description: Source Tree — a spruce-dark README and a ruled index of public repositories.
colors:
  ground: "#0e1a17"
  rail: "#12211c"
  pane: "#172923"
  line: "#385047"
  text: "#e6ede6"
  muted: "#afc4b7"
  accent: "#a7e3af"
  target: "#244236"
  target-line: "#75a78b"
typography:
  display:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 6.55vw, 5.875rem)"
    fontWeight: 780
    lineHeight: 1
    letterSpacing: "-.035em"
  display-compact:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "clamp(2.85rem, 10.25vw, 4.625rem)"
    fontWeight: 780
    lineHeight: 1
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Chivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.2vw, 2rem)"
    fontWeight: 740
    lineHeight: 1.15
    letterSpacing: "-.035em"
  subtitle:
    fontFamily: "system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.53vw, 1.375rem)"
    lineHeight: 1.47
  title:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: "clamp(.95rem, 1.2vw, 1.0625rem)"
    fontWeight: 650
    lineHeight: 1.38
  body:
    fontFamily: "system-ui, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.55
  description:
    fontFamily: "system-ui, sans-serif"
    fontSize: ".9375rem"
    lineHeight: 1.55
  label:
    fontFamily: "system-ui, sans-serif"
    fontSize: ".875rem"
    lineHeight: 1.55
  annotation:
    fontFamily: "system-ui, sans-serif"
    fontSize: ".8125rem"
    lineHeight: 1.55
  path-annotation:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: ".8125rem"
    lineHeight: 1.45
  breadcrumb:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: ".875rem"
    lineHeight: 1.4
  wordmark:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: ".9375rem"
    fontWeight: 650
    lineHeight: 1.4
  wordmark-compact:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
    fontSize: ".875rem"
    fontWeight: 650
    lineHeight: 1.4
spacing:
  edge-gutter: "clamp(1.25rem, 2.5vw, 2.25rem)"
  readme-gutter: "clamp(1.25rem, 4.6vw, 4.125rem)"
  rail-gutter: "clamp(.75rem, 1.55vw, 1.375rem)"
  icon-link-gap: ".5rem"
  action-height: "2.75rem"
components:
  masthead:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.text}"
  tree-rail:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.text}"
    width: "clamp(12rem, 21vw, 18.25rem)"
  tree-link-highlight:
    backgroundColor: "{colors.pane}"
    textColor: "{colors.accent}"
  breadcrumb:
    textColor: "{colors.muted}"
    typography: "{typography.breadcrumb}"
  topic-nav:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
  repository-row:
    textColor: "{colors.text}"
    padding: ".8rem .75rem"
  repository-row-highlight:
    backgroundColor: "{colors.pane}"
  repository-row-target:
    backgroundColor: "{colors.target}"
  index-link:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
  skip-link:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ground}"
    padding: ".65rem 1rem"
---

# Design System: Arjay Sitoy

## Overview

**Creative North Star: "Source Tree"**

Source Tree feels like opening a well-kept repository: a quiet README pane, a directory drawn with thin rules, and real project names where you expect to find them. The repository metaphor helps people find the work; it doesn't imitate an editor or a terminal.

A bold name and plain reading copy keep the profile personal. Monospace picks out paths and identifiers. Flat spruce-black surfaces leave mint for links, small icons, and keyboard focus; a separate tint shows where a fragment link landed.

**Key Characteristics:**

- Spruce-black ground, softly separated surfaces, and mint for actions.
- Chivo headings, system-sans reading copy, and monospace paths.
- Square, ruled rows with native links and persistent fragment states.

Eleventy renders the [home README and index](../site/index.njk) and the [404 recovery page](../site/404.njk) through the same [base layout](../site/_includes/base.njk). The base loads the [stylesheet](../site/assets/site.css), which owns the tokens and responsive states. Both pages use the shared [SVG icon macros](../site/_includes/icons.njk). The homepage uses [site](../site/_data/site.json) and [profile](../site/_data/profile.json) data for identity and context, and one [projects data set](../site/_data/projects.json) for the desktop tree, mobile topics, and repository rows. `docs/design.json` is a documentation sidecar, not a build input.

Visual evidence: full-page desktop (`1440 × 1007`) and mobile (`390 × 1171`) captures at `.impeccable/review/source-tree/desktop.png` and `.impeccable/review/source-tree/mobile.png`. Page strategy and composition decisions stay in the [profile surface brief](profile-surface.md).

## Colors

### Primary

- **Mint Signal** (`accent`): links, the branch/folder/arrow strokes, the current breadcrumb, keyboard focus, targeted repository names, and the selection fill. Selected text switches to the ground color.

### Neutral

- **Spruce Ground** (`ground`): page, masthead, and reading pane.
- **Directory Green** (`rail`): desktop tree and footer; **Pane Green** (`pane`): quiet default and interactive highlights.
- **Spruce Keyline** (`line`): structural dividers, indentation guides, and the border on highlighted tree links; not a text color.
- **Pale Spruce Text** (`text`): headings and primary text; **Soft Sage Text** (`muted`): bio, descriptions, paths, and annotations.
- **Target Green** (`target`) and **Sage Target Keyline** (`target-line`): the persistent destination fill and inset outline, distinct from transient hover and focus.

**The Mint Signal Rule.** Use the brightest color for things people can follow or need to locate. Keep paragraphs neutral; use the stronger tinted panel and its own keyline to show where a local jump landed.

## Typography

Chivo is self-hosted as a Latin WOFF2 variable face (normal, weights `600–900`, `font-display: swap`) under the [SIL Open Font License](../site/assets/chivo-OFL.txt). It falls back to system sans. System sans carries reading copy, and a native monospace stack carries handles, paths, and repository names.

- **Display:** the profile name and 404 title (`780`, line height `1`, tracking `-.035em`). Wide screens use `clamp(3.25rem, 6.55vw, 5.875rem)`; at `52rem` and below, use `clamp(2.85rem, 10.25vw, 4.625rem)`.
- **Section heading:** “Selected projects” uses Chivo (`740`, line height `1.15`, tracking `-.035em`) at `clamp(1.5rem, 2.2vw, 2rem)`.
- **Subtitle:** the profile bio uses `clamp(1.0625rem, 1.53vw, 1.375rem)`, line height `1.47`, and a `58ch` maximum measure.
- **Repository heading:** use monospace (`650`, line height `1.38`) at `clamp(.95rem, 1.2vw, 1.0625rem)` and allow long names to wrap anywhere.
- **Body and descriptions:** default reading copy is `1rem` with line height `1.55`. Repository descriptions use `.9375rem`, drop to `.875rem` at `52rem` and below, and cap at `66ch`. The 404 explanation uses normal body size and caps at `45ch`.
- **Labels and annotations:** `.875rem` for compact system text (navigation, standalone actions, footer, and compact descriptions) and for the monospace breadcrumb (line height `1.4`); `.8125rem` for muted repository topic labels and tree-path annotations (tree paths use line height `1.45`). The monospace handle uses `650` at `.9375rem`, stepping to `.875rem` at `24rem` and below.

**The Paths Are Not Paragraphs Rule.** Use monospace for identifiers, Chivo for page and section headings, and system sans for reading. The `.8125rem` and `.875rem` tiers are intentional annotation and compact text roles, not defaults for long-form reading or substitutes for link target size.

## Layout

- Masthead, workspace, and footer align to a centered `100rem` maximum frame. Header and footer use `clamp(1.25rem, 2.5vw, 2.25rem)` side gutters; the reading pane uses `clamp(1.25rem, 4.6vw, 4.125rem)`. The `4.0625rem` masthead height includes its baseline rule.
- The wide workspace pairs a `clamp(12rem, 21vw, 18.25rem)` tree with a fluid reading pane. The tree has `2.125rem` block padding and fluid inner gutters (`clamp(.75rem, 1.55vw, 1.375rem)`). The README has `1.875rem` top padding and `clamp(3rem, 6vw, 5rem)` bottom padding. The recovery page uses the same reading gutter with `clamp(4rem, 12vw, 10rem)` block padding.
- Repository rows place a `1rem` folder, fluid copy, a `7.5–10rem` topic column, and a `1rem` arrow in one grid. At `68rem` and below, the topic moves beneath the copy and the icons align to the first line area.
- At `52rem` and below, the tree gives way to a wrapping topic nav after the bio; the content stays in order. The masthead drops to `3.75rem`, and the README top padding to `1rem`. Topic links use a fluid column gap (`clamp(.625rem, 3vw, 1.4rem)`). At `24rem` and below, the wordmark tightens and the repositories action wraps beneath the section heading.

## Elevation & Depth

**The Flat Workspace Rule.** No shadows. Separate regions with tone, space, or a one-pixel keyline. Show interaction with a fill, underline, or outline rather than lift.

## Shapes

Structural surfaces and rows are square, with one-pixel block rules and a vertical guide for nested tree paths. Small inline SVGs use simple strokes: a branch, folders, and directional arrows. Keep the geometry in those marks, not in ornamental frames or backgrounds.

## Components

- **Masthead and footer:** the branch-and-handle wordmark is a home link with an explicit accessible name and `aria-current="page"` on home. The GitHub profile, repositories index, recovery, and back-to-top actions are labeled text links with direction-appropriate SVG arrows. The wordmark underlines on hover; standalone links thicken their underline to `2px`. These links, tree links, and mobile topic links have a `2.75rem` minimum block size.
- **Directory tree and breadcrumb:** the tree uses nested lists of native links: `#readme`, `#projects`, and one fragment per repository slug. README receives the quiet pane highlight unless the projects section or one of its descendants is targeted; this is a visual default, not an announced current tree item. Tree hover and focus use the same pane fill and keyline. The separate breadcrumb links to the site source repository and marks `README.md` as the current page; its slash is decorative.
- **Mobile topic nav:** use wrapping, underlined links between one-pixel rules, each pointing to its project group. The same group data supplies the labels and row annotations; no script or separate mobile data is needed.
- **Repository row:** a single anchor opens the actual repository. Its accessible name comes from the visible repository name and summary. The topic annotation repeats the group's label visually and is hidden from assistive technology. Keep group headings visually hidden but available in the heading hierarchy. The first row uses Pane Green at rest when no fragment inside the index is targeted. Hover or focus gives any row that fill with a mint, underlined name. On hover only, the arrow shifts `(.12rem, -.12rem)` over `.22s` with `cubic-bezier(.2, 1, .3, 1)`. Reduced motion removes both transition and shift.
- **Fragment destinations:** a repository slug highlights just that row; a topic fragment highlights every row in its group. Both use Target Green, a `1px` Sage Target Keyline inset by `1px`, and a mint title. A fragment inside the index clears the default first-row tint. `#projects` clears the tree's default README highlight but does not mark a repository or group as the destination. The target style persists independently of pointer or keyboard state.
- **Focus and skip link:** anchors use a `2px` Mint Signal `:focus-visible` outline with a `4px` offset; tree links use `0` offset and repository rows use an inset `-3px` offset. Keyboard focus on a targeted row replaces its destination outline with the mint focus outline while retaining the target fill. The focus-only skip link jumps to `main` (`tabindex="-1"`); main itself has no outline. Root scroll padding keeps `1.125rem` of space above fragment arrivals.
- **404 recovery:** reuse the shared shell, display scale, and labeled arrow link. Offer a real path back to the profile and a direct link to `/#projects`, without a separate error palette.

## Do's and Don'ts

- **Do** use native anchors and meaningful fragment targets so navigation and content work without JavaScript.
- **Do** preserve the skip link, heading hierarchy, visible link labels, and distinct keyboard-focus outlines.
- **Do** keep decorative branch, folder, and arrow SVGs out of the accessibility tree.
- **Don't** add shadows, round the structural frames, or turn repository rows into detached cards.
- **Don't** add fake controls or terminal chrome. Use inline vector marks alongside text rather than raster decoration or glyphs standing in for icons.

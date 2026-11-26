# Repository review and rollout

## Baseline

- Public user site: `kugtong33/kugtong33.github.io`, default branch `master`.
- The 2015 Jekyll starter was replaced in February 2024. Its history is retained
  in Git; none of the starter pages represented an active editorial archive.
- The last Hugo setup had `hugo.toml`, a draft “Hello World!” post, and an
  archetype, but no theme, HTML layouts, or homepage. Tracked `public/` files
  contained only generated RSS and sitemap XML. There was no CI workflow.
- GitHub Pages used branch publishing from `master:/`. Its build API reported
  `built` for `249ed04`, but `https://kugtong33.github.io/` returned 404.
  The build status reflected the publisher, not whether there was a homepage.
- The Pages environment already permits deployments from `master`.

Hugo can serve this site with written templates and a build pipeline. There
was little working Hugo implementation to retain. The owner chose Eleventy
for a small, explicit static build with a future home for Markdown essays.
The generated site is an artifact, not source; Pages publishes only `_site/`.

## Source map

| Path | Responsibility |
| --- | --- |
| `site/index.njk` | Public profile and selected projects |
| `site/_data/` | Hand-reviewed profile, project, and site facts |
| `site/_includes/` | Shared page layout |
| `site/assets/` | Site-owned CSS, images, and fonts |
| `site/404.njk` | Custom not-found page |
| `eleventy.config.js` | Eleventy input, output, and asset copying |
| `test/` | Generated output checks |
| `.github/workflows/pages.yml` | Install, test, build, and Pages deployment |
| `docs/` | Product context, design decisions, sourcing, and maintenance |

## Delivery and follow-up

1. Replace the nonworking scaffold with a profile, curated public projects,
   and a reusable layout. Preserve the archived source in Git history.
2. Verify a clean build, mobile and desktop rendering, keyboard navigation,
   anchors, assets, and 404 behavior.
3. Switch Pages to GitHub Actions, deploy from `master`, and check the public
   URL and representative assets directly.
4. Add work pages only when the owner supplies publishable work facts.
5. Add a writing index and Markdown articles once there is a first real
   piece. Do not publish empty sections or revive the draft placeholder.

## Validation

- The Node 24 build tests the generated homepage and 404, local paths
  and assets, fragment targets, and the four public project links.
- The browser pass covered widths from 320px to 1440px, keyboard skip
  navigation, topic anchors, and navigation with JavaScript disabled.
- Impeccable reviewed the full desktop and phone captures. Its follow-up
  confirmed both fixes: clearer display lettering and a visible topic
  highlight after following a link.
- Automated axe checks found no WCAG A/AA violations at the two
  captured widths; that does not replace a manual accessibility audit.
- `actionlint` validated the Pages workflow.

## Source Tree redesign

The owner selected a repository-inspired layout after comparing two concepts.
The redesign keeps the profile identity, four projects, Eleventy build, and
Pages deployment. It preserves the published topic fragments and adds a
direct fragment for each repository row.

Validation covered the new layout at eight widths from 320px to 1440px,
including both sides of the navigation breakpoint. All four repository rows
fit in the 1440×900 first viewport. Keyboard jump and focus behavior,
existing links without JavaScript, and the 404 recovery link were exercised.
Automated accessibility checks found no WCAG A/AA violations at the tested
desktop and phone sizes. The independent Impeccable finish review returned
`ship` with no material fixes.

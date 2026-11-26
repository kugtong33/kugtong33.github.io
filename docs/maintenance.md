# Maintaining the site

## Local development

Use Node 24 (`nvm install` and `nvm use`). Run `npm ci` then `npm run dev`;
Eleventy prints the preview URL. `npm run build` creates `_site/`. Run
`npm test` before pushing; it builds the site and checks the homepage,
repository links, internal paths, fragment targets, and the 404 page.

## Updating content

- Edit `site/_data/profile.json` for the profile and bio.
- Edit `site/_data/projects.json` to update the public project list. Keep
  group IDs stable so existing links still work.
- Add future work and writing under `site/` as Markdown or Nunjucks pages
  using `layout: base.njk`; add navigation only after a section has real
  content. Verify new pages and destinations in `test/site.test.js` when
  expanding the checked artifact and route list.
- Repository research and planning stay in `docs/`, outside Eleventy’s
  published input directory.

## GitHub Pages

Keep **Settings → Pages → Source** on **GitHub Actions**. The `GitHub Pages`
workflow tests pull requests and publishes after a passing push to `master`.
It can also be run manually from `master`. Only the deploy job receives
Pages and OIDC write permissions.

After release, open the HTTPS homepage and confirm that the latest profile
copy and assets are present. A random nonexistent URL should return HTTP
404 with the custom error page. If deployment fails, check the workflow
logs, the Pages source, and the `github-pages` environment branch policy.
The default branch and deployment branch are both `master`.

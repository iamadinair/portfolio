# Aditya Sunil Nair - Portfolio

Personal portfolio site, built with [Astro](https://astro.build). Single scrolling
page styled as a "career ledger", a nod to a product career built on metrics and
experiments rather than a generic template.

## Structure

All content lives in `src/data/*.js` as plain arrays/objects, so you can update
your experience, skills, or metrics without touching any layout or styling code.

```
src/
  data/
    profile.js        → name, tagline, summary, contact links, "at a glance" stats
    ledger.js          → hero metrics strip (the delta/percentage cards)
    roles.js           → career history (one object per role)
    capabilities.js    → the 6 capability cards
    skills.js          → toolkit chips, grouped by category
    education.js       → degrees + certifications
  layouts/
    Layout.astro       → shared <head>, nav, fonts, scroll-reveal script
  pages/
    index.astro         → assembles everything above into the page
  styles/
    global.css          → all styling (colors, type, layout)
public/
  Aditya_Nair_Resume.pdf → linked from the Contact section
```

To edit content: open the relevant file in `src/data/`, change the text, save.
No HTML knowledge needed for most edits, `**bold**` in bullet/paragraph strings
renders as bold text.

## Local development

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Build

```bash
npm run build
```

Outputs a fully static site to `dist/`. `npm run preview` serves that build
locally so you can sanity-check it before deploying.

## Deploying

See `DEPLOY.md` for step-by-step Cloudflare Pages instructions (including a
custom domain).

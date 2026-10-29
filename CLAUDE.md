# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Trazo Vivo's marketing/portfolio website — a Gatsby v4 + TypeScript site. It's mostly static
marketing pages plus a large gallery of individual case-study ("project") pages, with Spanish
(default) and English content via i18n.

## Commands

```
npm run develop     # gatsby develop -H 0.0.0.0 — local dev server on http://localhost:8000
npm run build        # gatsby build — production build
npm run serve         # gatsby serve — serve the production build locally
npm run clean          # gatsby clean — wipe .cache/ and public/ (use if you see stale GraphQL/type errors)
npm run typecheck       # tsc --noEmit
```

There is no lint script and no test suite configured in this repo.

## Architecture

### Routing = file-based pages

Gatsby generates routes from `src/pages/**`. Case-study pages live under `src/pages/projects/*.tsx`,
one file per project, plus a handful of top-level pages (`index.tsx`, `contacto.tsx`, `personal.tsx`,
`quienes_somos.tsx`, `valores.tsx` and `src/pages/valores/*.tsx`).

### Project page pattern

Every file in `src/pages/projects/` follows the same shape (see `coconat.tsx` as a canonical example):

1. Import images directly from `src/images/<project-slug>/` (webpack/Gatsby handles these via the
   module declarations in `custom.d.ts`).
2. Wrap content in `<Layout color="...">` (`src/components/layout/Layout.tsx`), which renders the
   `Header` and animates page transitions with `framer-motion`.
3. Compose the body from the building blocks exported by `src/components/projects/index.tsx`:
   `FullImage`, `HeadTitle`, `TextContainer`, `Paragraph`, `NextProject`, `AllProject`, `BigText`,
   `ImageBand`, `TwoImagesSpace(Ani)`, `PhoneCarousel`, `MultiCarousel`.
4. All copy goes through `<Trans>key</Trans>` (from `gatsby-plugin-react-i18next` /
   `react-i18next`) with the key defined in `locales/{en,es}/projects.json` — never hardcode
   paragraph copy inline in the page component.
5. End with `<NextProject slug="<this-slug>" />` (next project comes from `src/data/projects.ts`), `<AllProject link="/#projects" />`, and
   `<Footer className="..." />`.
6. Export `Head` using `SEO` (`src/components/layout/SEO.tsx`) for per-page meta/OG tags.
7. Include the standard `locales: allLocale` GraphQL query at the bottom — required by
   `gatsby-plugin-react-i18next` for translations to hydrate on that page.

To add a new project page:

1. Create `src/pages/projects/<slug>.tsx` following the pattern above, with its images in
   `src/images/<slug>/`. Use `<NextProject slug="<slug>" />` (order comes from the registry) and
   `<BulletList title="common.tasks" items={[...keys]} />` for the "Tareas / Objetivos" lists.
2. Add the texts to both `locales/es/projects.json` and `locales/en/projects.json`. Reuse the
   `common.*` keys (e.g. `common.tasks`, `common.goals`) instead of repeating shared strings.
3. Add an entry **at the top** of the `projects` array in `src/data/projects.ts` (slug, title,
   text, img). That feeds the homepage grid and the "next project" order — don't edit the
   previous project's `NextProject`.
4. Run `npm run i18n:check` (es/en parity, undefined and unused keys).

### i18n

Configured via `gatsby-plugin-react-i18next` in `gatsby-config.ts`: languages `en`/`es`, default
`es`, translations sourced from `locales/<lang>/*.json` (one namespace file per page area:
`index`, `contacto`, `personal`, `projects`, `testimonios`, `valores`). Use `<Trans>` for
translated copy; the key-as-default-text convention is only used for short static strings —
longer copy uses `namespace.tN` style keys (e.g. `coconat.t1`, `hivos.t0`) defined in the JSON files. Strings shared by several projects
(e.g. "Tareas:") live under `common.*` in `projects.json`.

### Global state

`src/context/AppContext.tsx` provides a small app-wide context (`menuOpen`, `hoverReel`) mounted
in `gatsby-browser.tsx` via `wrapRootElement`, which also wraps the tree in `framer-motion`'s
`AnimatePresence` for route-change transitions.

### Styling

Tailwind (`tailwind.config.js`) + SCSS (`src/styles/global.scss`, imported once in
`gatsby-browser.tsx`) via `gatsby-plugin-postcss` / `gatsby-plugin-sass`. Brand colors are
`tvpink`, `tvpurple`, `tvyellow` in the Tailwind theme.

### Images

`src/images/` is gitignored (large binary asset directory) but required locally to build —
each project's images live in their own subfolder (`src/images/<slug>/`) and are imported as
plain modules (typed via `custom.d.ts`), not run through `gatsby-plugin-image`/GraphQL sharp
queries, despite those plugins being installed.

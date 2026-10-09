# AGENTS.md — Essara FinanceTracker

## Stack & Entrypoints
- React 19 + TypeScript + Vite 6 + Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- Entry: `src/main.tsx` → `src/App.tsx`
- Path alias `@` maps to repo root (not `src/`)
- Static assets go in `public/` (served at the base path): `robots.txt`, `sitemap.xsl`, `og-image.png`, icons, `site.webmanifest`

## Dev Commands
| Command | What it does |
|---------|--------------|
| `npm run dev` | Vite dev server on port 3000 |
| `npm run build` | Client build + SSR build + `scripts/build-static-seo.mjs` (prerender + PSEO) into `dist/` |
| `npm run seo:check` | Validate `content/pseo/**/*.json` without building |
| `npm run preview` | Preview production build |
| `npm run lint` | `tsc --noEmit` (typecheck only) |
| `npm run clean` | `rm -rf dist` |

There are **no tests** in this repo. Verification = `npm run lint && npm run build` (the build fails on invalid PSEO content).

## Build / Deploy Notes
- `vite.config.ts` sets `base: '/Essara-FinanceTracker/'` — output is intended for GitHub Pages at that subpath.
- `process.env.GEMINI_API_KEY` is injected from `.env` at build time. A `.env.example` exists; copy it to `.env` and add a key if AI features are needed.
- HMR can be disabled via `DISABLE_HMR=true` (used in AI Studio to prevent flicker during agent edits). Do not remove that server config.

## Styling Conventions
- Tailwind v4 with `@theme` block in `src/index.css`.
- Custom component class: `.liquid-glass` (glassmorphism panel). Use it for cards/navbars instead of inventing new glass styles.
- Font: `Instrument Serif` for serif italic accents; default sans stack for body.
- Dark theme only (`bg-black text-white`).

## SEO / Content
- `content/FACTS.md` is the source of truth for every claim about Essara (checked against the Play listing and essara.space). Never add ratings, review counts, certifications or features not listed there.
- `index.html` holds one JSON-LD `@graph` (WebSite, Organization, MobileApplication, WebPage), Open Graph/Twitter tags and the Google site verification meta. Canonical is self-referencing (`https://kutral.github.io/Essara-FinanceTracker/`).
- The home page is prerendered at build time (`src/entry-server.tsx` → `dist/index.html`, hydrated by `src/main.tsx`) so crawlers and AI agents that skip JavaScript see the content. Keep components SSR-safe (no `window` access during render).
- Home FAQ: edit `content/home-faq.json`; it feeds both the visible `HomeFAQ` section and the injected FAQPage schema.
- Programmatic SEO: one JSON file per page in `content/pseo/<cluster>/<slug>.json` (clusters: `upi-autopay`, `cancel-subscriptions`, `learn`, `for`; see `CLUSTERS` in `scripts/build-static-seo.mjs`). The build renders each to static HTML with Article/HowTo/FAQPage/BreadcrumbList schema, plus hub pages, `sitemap.xml`, `llms.txt`, `llms-full.txt` and `404.html`. Do not hand-edit a sitemap — it is generated.
- `content/llms-header.md` is the top of the generated `llms.txt`. `public/robots.txt` is hand-maintained.
- App Play Store link: `https://play.google.com/store/apps/details?id=space.essara.app`

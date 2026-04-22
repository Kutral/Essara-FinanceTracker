# AGENTS.md — Essara FinanceTracker

## Stack & Entrypoints
- React 19 + TypeScript + Vite 6 + Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- Entry: `src/main.tsx` → `src/App.tsx`
- Path alias `@` maps to repo root (not `src/`)
- Static assets go in `public/` (served at root); currently holds `sitemap.xml`, `robots.txt`

## Dev Commands
| Command | What it does |
|---------|--------------|
| `npm run dev` | Vite dev server on port 3000 |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | `tsc --noEmit` (typecheck only) |
| `npm run clean` | `rm -rf dist` |

There are **no tests** in this repo. Verification = `npm run lint && npm run build`.

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
- `index.html` contains extensive JSON-LD structured data, Open Graph, Twitter Cards, and Google site verification meta. Keep it in sync when changing page topics.
- `public/sitemap.xml` and `public/robots.txt` are manually maintained; update them if URLs or sections change.
- App Play Store link: `https://play.google.com/store/apps/details?id=space.essara.app`

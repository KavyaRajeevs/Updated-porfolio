# Kavya R — Portfolio

React portfolio built from Google Stitch designs, with a unified footer, FaceSketcher project, and deploy-ready Vite build.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Output is in `dist/`.

## Deploy

### Vercel

1. Push this repo to GitHub.
2. Import the project on [vercel.com](https://vercel.com).
3. Framework preset: **Vite** (build: `npm run build`, output: `dist`).
4. `vercel.json` handles client-side routing.

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. `public/_redirects` handles SPA routing.

### GitHub Pages

Set `base` in `vite.config.ts` to your repo name, then use a GitHub Actions workflow or `gh-pages` to publish `dist/`.

## Pages

| Route | Page |
|-------|------|
| `/` | Home (hero, stats, contact) |
| `/projects` | Projects (BrightMinds, FaceSketcher, College Store) |
| `/experience` | Experience & skills |
| `/about` | About |

## Customize

- **Social links:** `src/data/links.ts`
- **Projects:** `src/data/projects.ts`
- **Footer:** `src/components/Footer.tsx` (shared on every page)

## Stitch assets

Original Stitch HTML exports live in `stitch-assets/` for reference.

# Design Adda Studio

Marketing website for Design Adda Studio — built with React + Vite.

## Run locally

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (or run `vercel` from inside it with the Vercel CLI).
2. Import the repo in Vercel — it auto-detects Vite. Framework preset: **Vite**, build command `npm run build`, output directory `dist`.
3. Deploy.

## Editing

- All copy and section content lives in `src/App.jsx`.
- Colors, spacing and type live in `src/index.css` as CSS variables at the top of the file.
- WhatsApp number and CTA link are set once near the top of `src/App.jsx` (`WHATSAPP`, `PHONE`).

# Mark Paul Nkulila — Portfolio (v2)

A one-page developer portfolio for **Mark Paul Nkulila**, Frontend Engineer · Full-Stack & Mobile
Developer. Rebuilt in **Angular 22** with a **Gen X Soft Club** aesthetic — a minimalist, cool/earthy
offshoot of Y2K Futurism — in a warm *Dusty Terracotta* palette with frosted-glass surfaces, soft
gradient blobs, film grain, and a persisted light/dark theme.

> v1 (an IDE-themed single-page résumé) is preserved under [`legacy-v1/`](./legacy-v1/index.html).

## Stack

- **Angular 22** — standalone components, signals, native control flow (`@if`/`@for`), no NgModules, no SSR
- **Tailwind CSS v4** (CSS-first `@theme`) with semantic tokens that swap on `.dark`
- **Fonts:** Space Grotesk (display) · Hanken Grotesk (body) · JetBrains Mono (mono accents)
- Scroll-reveal via a small `IntersectionObserver` directive — fully `prefers-reduced-motion` aware
- Inline SVG icons (Lucide / Simple Icons) — no emoji
- Hosting: **Firebase Hosting** (project `mark-cv-7186b`)

## Project structure

```
src/
  index.html                 # head: meta/OG, fonts, pre-paint theme script
  styles.css                 # Tailwind import, dark variant, Dusty Terracotta tokens, base/effects
  app/
    app.ts / app.html        # shell: ambient blobs + grain + sections
    core/theme.service.ts     # signal theme, localStorage + prefers-color-scheme, toggles .dark
    shared/
      icon.ts                # inline-SVG icon component
      reveal.directive.ts    # [reveal] scroll-reveal (reduced-motion safe)
    data/resume.ts           # single typed source of truth for all content
    sections/                # nav · hero · about · skills · experience · references · contact
```

All résumé content lives in **`src/app/data/resume.ts`** — edit there to update text.

## Develop

```bash
npm install
npm start        # ng serve → http://localhost:4200
```

## Build

```bash
npm run build    # → dist/mark-cv/browser
```

## Deploy (Firebase Hosting)

```bash
npm run build
firebase deploy --only hosting
```

`firebase.json` serves `dist/mark-cv/browser` with an SPA rewrite to `index.html`.

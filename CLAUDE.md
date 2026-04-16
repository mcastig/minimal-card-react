# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server with HMR
npm run build        # Type-check and build for production (tsc -b && vite build)
npm run lint         # Run ESLint
npm run preview      # Preview production build
npm test             # Run tests (single pass)
npm run test:watch   # Run tests in watch mode
```

## Architecture

Minimal React + TypeScript + Vite blog card. The entire app lives in `src/`:

- `main.tsx` — entry point, mounts `<App />` into `#root`
- `App.tsx` — root component, renders `<Card />` with hardcoded default content
- `App.css` — reserved for app-level overrides (currently empty)
- `index.css` — global reset, CSS custom properties (colors, typography tokens, radii, shadows)
- `components/Card.tsx` — card component, all content injected via props
- `components/Card.css` — component-scoped styles (layout, typography, animation, responsive)
- `assets/` — static images (Cactus.jpg, Cactus@2x.jpg, SVGs)

## Testing

Vitest + React Testing Library. Setup file: `src/test/setup.ts` (imports `@testing-library/jest-dom`).

- `src/test/App.test.tsx` — integration smoke test
- `src/test/Card.test.tsx` — unit tests for the Card component (props, classes, image attributes)

## Typography

All text uses **Sora** (Google Fonts). Tokens defined in `index.css`:

| Token | Size | Element |
|---|---|---|
| `--text-title` | 18px / 1.125rem | `.card__title` |
| `--text-body` | 14px / 0.875rem | `.card__description` |
| `--text-small` | 12px / 0.75rem | `.card__author` |
| `--text-tag` | 10px / 0.625rem | `.card__tag` |

## Card props

```ts
interface CardProps {
  image: string
  imageSrcSet?: string
  imageAlt: string
  tag: string
  title: string
  description: string
  author: string
}
```

## Deployment

Hosted on GitHub Pages at **https://mcastig.github.io/minimal-card-react/**

- CI/CD via `.github/workflows/deploy.yml` (GitHub Actions)
- Triggers automatically on push to `main`, or manually via `workflow_dispatch`
- Build output (`dist/`) is uploaded as a Pages artifact and deployed in a separate job
- `vite.config.ts` sets `base: '/minimal-card-react/'` for correct asset paths on the subdirectory URL

To trigger a manual deploy:
```bash
gh workflow run deploy.yml
```

## Stack

React 19, TypeScript 6, Vite 8, ESLint 9 with `typescript-eslint` and `eslint-plugin-react-hooks`, Vitest 4, React Testing Library 16.

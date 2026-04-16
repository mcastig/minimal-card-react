# Minimal Card — React

A minimal, production-quality blog card component built with React, TypeScript, and Vite. Focuses on clean typography, subtle animation, and a well-structured component model.

**Live:** https://mcastig.github.io/minimal-card-react/

---

## Overview

The project renders a single article card featuring an image, category tag, title, description, and author. It serves as a self-contained reference for component architecture, typography tokens, and testing setup in a Vite-based React project.

---

## Tech stack

| Layer | Technology |
|---|---|
| UI | React 19 |
| Language | TypeScript 6 |
| Bundler | Vite 8 |
| Font | Sora (Google Fonts) |
| Testing | Vitest + React Testing Library |
| Linting | ESLint 9 + typescript-eslint |

---

## Typography

All text uses the **Sora** typeface. Four sizes are defined as CSS custom properties in `src/index.css`:

| Token | Size | Usage |
|---|---|---|
| `--text-title` | 18px / 1.125rem | Card title |
| `--text-body` | 14px / 0.875rem | Description |
| `--text-small` | 12px / 0.75rem | Author |
| `--text-tag` | 10px / 0.625rem | Category tag |

---

## Project structure

```
src/
├── components/
│   ├── Card.tsx          # Card component (accepts all content as props)
│   └── Card.css          # Component-scoped styles
├── test/
│   ├── setup.ts          # jest-dom matchers
│   ├── App.test.tsx      # Integration smoke test
│   └── Card.test.tsx     # Component unit tests
├── assets/               # Images (Cactus.jpg, Cactus@2x.jpg, SVGs)
├── App.tsx               # Root — renders <Card /> with default content
├── App.css               # Reserved for app-level overrides
├── main.tsx              # Entry point
└── index.css             # Global reset, CSS variables (colors, typography, radii)
```

---

## Card props

```ts
interface CardProps {
  image: string        // src for the card image
  imageSrcSet?: string // optional srcSet (e.g. "img.jpg 1x, img@2x.jpg 2x")
  imageAlt: string
  tag: string
  title: string
  description: string
  author: string
}
```

---

## Commands

```bash
npm run dev          # Start dev server with HMR
npm run build        # Type-check and build for production
npm run preview      # Preview the production build
npm run lint         # Run ESLint
npm test             # Run tests (single pass)
npm run test:watch   # Run tests in watch mode
```

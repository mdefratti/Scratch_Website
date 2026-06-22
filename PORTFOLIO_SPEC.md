# Portfolio Website — Specification

## Overview

A single-page scrolling personal portfolio built with **Next.js** (static export), deployed to **GitHub Pages**. Goal: showcase side projects front-and-center while giving recruiters and collaborators a complete picture of experience and skills.

---

## Design System

### Visual Style
Minimal & Clean — generous whitespace, crisp typography, one accent color.

| Token | Value |
|---|---|
| Background | `#ffffff` |
| Surface (cards) | `#f9fafb` (gray-50) |
| Text primary | `#111827` (gray-900) |
| Text secondary | `#6b7280` (gray-500) |
| Accent | `#10b981` (emerald-500) |
| Accent hover | `#059669` (emerald-600) |
| Border | `#e5e7eb` (gray-200) |

### Typography
- Headings: `Inter` (or `Geist`) — weight 700
- Body: `Inter` — weight 400/500
- Code/tech labels: `JetBrains Mono` or `Fira Code`
- Base size: 16px; scale: 1.25 type scale

### Animations
Subtle scroll-triggered fade-ins using `framer-motion` or CSS `@keyframes` + `IntersectionObserver`:
- Sections fade up (opacity 0→1, translateY 20px→0) over 0.4s
- Cards stagger in 0.1s apart
- Hover: cards lift with `box-shadow` transition

---

## Page Layout — Single-Page Scroll

```
/
├── <Nav>          sticky top, smooth-scroll links
├── <Hero>         name, tagline, CTA buttons
├── <Projects>     live GitHub API, featured cards
├── <Experience>   timeline of past roles
├── <Skills>       traits + tech stack grid
└── <Contact>      links + optional email form
```

---

## Sections

### 1. Nav
- Sticky, transparent → frosted glass on scroll
- Links: About · Projects · Experience · Skills · Contact
- Right side: GitHub icon link + "Hire Me" emerald CTA button
- Mobile: hamburger menu, full-screen overlay

---

### 2. Hero
- Full-viewport height (100vh)
- Layout: centered, stacked
  - Optional: circular avatar/photo (left-aligned on desktop)
  - **Name** — H1, large (4–5rem)
  - **Tagline** — one line, secondary color (e.g. "Software Engineer · Builder of things")
  - **Short bio** — 2–3 sentences max
  - CTA buttons: `View Projects` (emerald, primary) · `Download Resume` (outline)
  - Social icon row: GitHub · LinkedIn · Email

---

### 3. GitHub Projects  *(primary section)*
- **Data source:** GitHub REST API — `GET /users/{username}/repos` filtered to pinned or top-starred
- Fetch strategy: `getStaticProps` at build time → cached HTML (no client-side API key exposure)
- Optional: `GITHUB_TOKEN` env var for higher rate limits (stored in GitHub Actions secret)

**Card layout:** responsive grid (1 → 2 → 3 columns)

Each card shows:
- Repo name (links to GitHub)
- Description (from repo metadata, overridable via local config)
- Language tag (colored dot)
- Topics/tags (emerald pill badges)
- ⭐ Star count · 🍴 Fork count
- "Live Demo" button (if `homepage` field set in repo)

**Featured projects:** optionally pin 2–3 repos to appear as larger hero cards above the grid (config-driven, not API-dependent).

---

### 4. Work Experience
- Layout: vertical timeline (centered line, alternating cards on desktop; left-aligned on mobile)
- Each entry:
  - Company name + logo (optional)
  - Role / title
  - Date range (e.g. "Jan 2022 – Present")
  - Location / Remote
  - 3–5 bullet points of responsibilities/achievements
  - Tech stack used (small badges)

---

### 5. Skills & Characteristics
Two sub-sections:

**Personal Characteristics** — a short grid of trait cards (icon + label + one-line description):
- e.g. Fast Learner, Team Player, Detail-Oriented, Problem Solver

**Tech Stack** — icon grid (using `react-icons` or Devicon):
- Organized by category: Languages · Frameworks · Tools · Cloud

---

### 6. Contact
- Centered, minimal
- Heading: "Let's work together" or "Get in touch"
- Sub-copy: 1–2 sentences
- Icon links: GitHub · LinkedIn · Email (mailto)
- Optional: simple contact form (name, email, message) — can use Formspree (free, no backend needed)

---

## Tech Stack

| Concern | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | Static export support, great DX |
| Styling | Tailwind CSS | Fast, consistent, pairs well with minimal design |
| Animations | Framer Motion | Clean scroll fade-ins, easy to tune |
| Icons | `react-icons` | Huge library, lightweight |
| GitHub data | GitHub REST API via `fetch` in `generateStaticParams` | Build-time fetch, no secrets exposed |
| Deployment | GitHub Pages via GitHub Actions | Free, auto-deploys on push to `main` |

### Next.js Static Export Config (`next.config.js`)
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // required for static export
  basePath: '/your-repo-name',   // set to your GitHub repo name
}
module.exports = nextConfig
```

---

## File Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # font imports, metadata
│   ├── page.tsx            # assembles all sections
│   └── globals.css
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx        # fetches + renders GitHub repos
│   ├── ProjectCard.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── lib/
│   └── github.ts           # GitHub API fetch utility
├── data/
│   ├── experience.ts       # work history (manual)
│   ├── skills.ts           # skills list (manual)
│   └── featured-projects.ts # override/pin specific repos
├── public/
│   └── resume.pdf          # downloadable resume
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions → Pages deploy
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## GitHub Actions Deploy Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

---

## Content Checklist (to fill in before building)

- [ ] Name + tagline
- [ ] Short bio (2–3 sentences)
- [ ] Avatar/photo (optional)
- [ ] GitHub username (for API)
- [ ] Which repos to pin/feature (names or topic tag)
- [ ] Work experience entries (company, role, dates, bullets)
- [ ] Skills list (languages, frameworks, tools)
- [ ] Personal characteristic traits (4–6)
- [ ] LinkedIn URL
- [ ] Contact email
- [ ] Resume PDF
- [ ] Custom domain (optional)

---

## Open Questions / Decisions

| Question | Default |
|---|---|
| Include a blog/writing section? | No — can add later |
| Dark mode toggle? | No — keep it simple for now |
| Contact form or just icon links? | Icon links only (add Formspree form later if needed) |
| Custom domain? | Not yet — use `username.github.io/repo-name` |

# Digital-IT-Hub-in-Wurzburg

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Routes

| Route       | Description   |
| ----------- | ------------- |
| `/`         | Homepage      |
| `/news`     | News page     |
| `/events`   | Events page   |
| `/projects` | Projects page |

## Basic Project Structure Setup

### Summary

Sets up the foundational Next.js (App Router) project structure for [project name]. This PR establishes the folder architecture, routing skeleton, and shared component scaffolding. No real page content or component logic is implemented yet — this is purely structural, using draft/placeholder components to confirm the routing and build pipeline work correctly end-to-end.

### What's included

**Routing (`src/app/`)**

- Root `layout.tsx` and `page.tsx` for the homepage
- `not-found.tsx` for a custom 404 page
- `(pages)` route group containing the three main sections — `news`, `events`, `projects` — each with its own `page.tsx` and `loading.tsx` (currently return placeholder markup)
- Route group syntax (`(pages)`) keeps these organized without affecting the URL structure (`/news`, `/events`, `/projects`)

**Components**

- `src/app/components/` — homepage-only components, colocated since they're not reused elsewhere: `HeroSection`, `SocialMediaSection`, `ActivitiesSection`, `AboutUsSection`, `PartnersSection`, `CategoryCard`, `FounderCard`
- `src/components/` — shared components used across multiple routes: `Header`, `Footer`
- All components currently return placeholder markup to verify they render without errors — no real styling or content yet

**Config / project setup**

- Next.js scaffolded with TypeScript, ESLint, and the `src/` directory convention
- `<html lang="de">` set in the root layout for German as the primary language

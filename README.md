# Raj Kumar — Portfolio Replica

A pixel-and-behaviour replica of [rajkumar.dev](https://www.rajkumar.dev/), rebuilt from
scratch with **React 19 + Vite + TypeScript (TSX)** and **Tailwind CSS**. All content is
served from static data files — the app makes no runtime API calls.

## Running locally

### Prerequisites

- **Node.js 20 or newer** (developed on v22 LTS) — check with `node -v`, install from
  [nodejs.org](https://nodejs.org) if missing. npm ships with it.

### Setup

```bash
git clone https://github.com/<your-username>/portfolio.git
cd portfolio
npm install
npm run dev
```

Open **http://localhost:5173**. The dev server hot-reloads on save.

No environment variables and no API keys are needed — every page renders from the static
files in `src/data/`, so a fresh clone runs with nothing else configured.

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with hot module replacement on port 5173 |
| `npm run build` | Type-checks with `tsc -b`, then bundles to `dist/` |
| `npm run preview` | Serves the built `dist/` locally — use this to sanity-check a production build before deploying |
| `npm run lint` | Runs `oxlint` across the project |

### Notes

- **`npm run dev` won't catch type errors.** Vite strips types without checking them, so
  run `npm run build` before pushing — that's the step CI and Vercel will fail on.
- **Port 5173 in use?** Vite picks the next free port and prints it; or pin one with
  `npm run dev -- --port 3000`.
- **Testing client-side routes in a preview build.** `npm run preview` serves the SPA
  fallback automatically, matching the `vercel.json` rewrite used in production. Opening
  `dist/index.html` directly through `file://` will *not* work — the routes need a server.

## Deploying

The repo is set up for **Vercel** with zero configuration: it auto-detects Vite, builds
with `npm run build`, and publishes `dist/`. Pushes to `main` redeploy automatically.

`vercel.json` adds the SPA rewrite that sends every path to `index.html` — without it, a
direct hit or refresh on `/about` would 404, since routing is client-side.

If you attach a custom domain, add both the apex and `www` and set **`www` as primary** —
that is the host the canonical tags and `sitemap.xml` point at.

## Folder structure

```
portfolio/
├── index.html                    # Shell + SEO meta + pre-paint theme script
├── vite.config.ts                # React plugin, "@/*" → "src/*" alias
├── vercel.json                   # SPA rewrite — all paths → index.html
├── tailwind.config.js            # class dark mode, primary/secondary/accent palettes
├── postcss.config.js
├── public/
│   ├── favicon.ico
│   ├── developer.svg             # About page illustration
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   └── company/                  # Experience timeline logos
└── src/
    ├── main.tsx                  # Providers + BrowserRouter mount
    ├── App.tsx                   # Layout shell: Navbar / routes / Footer / widgets
    ├── index.css                 # Tailwind layers + component classes + tag gradients
    ├── routes/
    │   └── AppRoutes.tsx         # Lazy-loaded route table
    ├── context/
    │   ├── theme-context.ts      # Theme context object + value type
    │   ├── ThemeContext.tsx      # Provider: dark/light, persisted + OS-preference aware
    │   ├── chat-context.ts       # Chat context object + value type
    │   └── ChatContext.tsx       # Provider: assistant widget conversation state
    ├── hooks/
    │   ├── useTheme.ts           # useContext wrapper (throws outside provider)
    │   ├── useChat.ts            # useContext wrapper
    │   ├── useScrollPosition.ts  # Scroll threshold listener
    │   └── useTypewriter.ts      # Hero typing/deleting loop + caret blink
    ├── components/
    │   ├── layout/               # Navbar, Footer
    │   ├── common/               # SEO, StructuredData, LoadingSpinner,
    │   │                         # ScrollToTop, BackToTopButton, TypewriterText
    │   ├── chat/                 # ChatWidget, MarkdownText
    │   └── icons/                # BrandIcons (GitHub / LinkedIn SVGs)
    ├── data/                     # All static content
    │   ├── personal.ts           # Bio, socials, nav items, hero stats
    │   ├── skills.ts             # Tech stack, achievements, proficiency bars
    │   ├── projects.ts           # Project records + filter definitions
    │   ├── experience.ts         # Five roles with achievements/tech/projects
    │   ├── contact.ts            # Contact details, socials, collaboration, FAQs
    │   └── chatbot.ts            # Assistant knowledge base
    ├── pages/                    # Home, About, Experience, Projects,
    │                             # Contact, NotFound
    └── types/index.ts            # Shared TypeScript interfaces
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — hero, typewriter, particle field, stats, CTA |
| `/about` | About — journey, technical skills grid, achievements |
| `/experience` | Experience — company switcher, achievements, proficiency bars |
| `/projects` | Projects — technology filters, animated grid |
| `/contact` | Contact — validated form, socials, collaboration, FAQ |
| `*` | 404 |

## Hooks used

- **`useContext`** — `useTheme` and `useChat` read from `ThemeContext` / `ChatContext`.
- **`useState`** — form state, filters, menu and chat open state.
- **`useEffect`** — theme class + `localStorage` sync, OS colour-scheme listener,
  scroll listeners, route-change scroll reset, chat autoscroll, typewriter timers.
- **`useMemo`** — hero particle positions, project filtering, context values.
- **`useCallback`** — theme and chat actions, stable across renders.
- **`useRef`** — chat scroll anchor, input focus, reply timer handle.
- **`lazy` + `Suspense`** — per-route code splitting.

## Differences from the live site

Behaviour matches; the network-dependent pieces run on static data instead:

- **Contact form** — validated with `react-hook-form` exactly as on the live site, but
  the submit is simulated (logged to the console) rather than POSTed to an email API.
- **Assistant widget** — replies come from a keyword-matched knowledge base in
  `src/data/chatbot.ts` instead of the AI endpoint.
- **SEO meta** — uses React 19's native document-metadata hoisting rather than
  `react-helmet-async`; the rendered `<head>` output is the same.
- **Brand icons** — `lucide-react` v1 dropped GitHub/LinkedIn marks, so those two live
  in `src/components/icons/BrandIcons.tsx`.

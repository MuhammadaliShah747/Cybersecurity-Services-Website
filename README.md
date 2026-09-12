# Perimeter Six — Landing Page

## If you're merging this into an existing Next.js project

Copy these folders/files into your project root, merging rather than
overwriting where your project already has content:

```
app/                    → merge into your app/ (adds layout.tsx, page.tsx,
                          robots.ts, sitemap.ts — back up your existing
                          layout.tsx/page.tsx first if you have one, since
                          these will overwrite files of the same name)
components/sections/    → copy in as new files (Navbar.tsx, Hero.tsx, etc.)
components/ui/          → copy in as new files (Button.tsx, Reveal.tsx, etc.)
lib/site-data.ts        → copy in (all landing page copy/content lives here)
lib/utils.ts            → merge — if you already have a lib/utils.ts, add
                          the `cn()` export instead of overwriting
styles/globals.css      → merge into your existing global stylesheet,
                          or replace if this is a fresh project
public/images/          → copy in (currently just a placeholder note —
                          add your own og-cover.jpg here)
```

Config files — compare against what you already have rather than blindly
overwriting, since your project may already customize these:

```
next.config.mjs         → merge the security headers block into your
                          existing config if you have one
tailwind.config.ts      → merge the `theme.extend` tokens (colors, fonts,
                          keyframes) into your existing config
postcss.config.js       → only needed if you don't already have one
tsconfig.json           → only needed if you don't already have one
eslint.config.mjs       → only needed if you don't already have one
.env.example            → merge — add the documented variables to your
                          existing .env.example
.gitignore              → merge — make sure .env*.local stays ignored
```

Do NOT copy over: `package.json` (see dependency list below instead),
`node_modules`, `.next`, `package-lock.json`, `tsconfig.tsbuildinfo`,
`next-env.d.ts` — these are either generated automatically or specific
to this build's exact dependency versions.

## Dependencies to add to your existing package.json

```bash
npm install next@16.3.5 react@^19.0.0 react-dom@^19.0.0 framer-motion@^11.11.9 lucide-react@^0.446.0 clsx@^2.1.1

npm install -D typescript@^5.6.3 @types/node@^20.16.10 @types/react@^19.0.0 @types/react-dom@^19.0.0 tailwindcss@^3.4.13 postcss@^8.4.47 autoprefixer@^10.4.20 eslint@^9.14.0 eslint-config-next@16.3.5
```

If your project is currently on Next 14/15 with React 18, this is a real
upgrade (Next 16 requires React 19). I moved to this combination
deliberately: the Next.js versions in the 14.x/15.x lines that were current
in my training data turned out to have several disclosed CVEs (RCE, DoS,
cache poisoning, SSRF — see https://github.com/vercel/next.js/security/advisories)
that have since been patched. 16.3.5 is the current version with zero
outstanding `npm audit` findings as of this build. If upgrading your whole
project to React 19 isn't feasible right now, at minimum pin your existing
major version to its latest patch release and check it against that
advisories page.

## Fresh project (not merging)

If you don't have an existing project, just:

```bash
npm install
npm run dev
```

and open http://localhost:3000.

## What's in lib/site-data.ts

All landing-page copy — nav links, service categories, industries,
methodology steps, trust badges, metrics — lives in this one file as typed
constants. Edit the copy there rather than hunting through components.

## Images and icons

- **Icons**: `lucide-react` (already in the install command above). No
  manual downloads needed — icons are imported as components, e.g.
  `import { ShieldHalf } from "lucide-react"`.
- **Hero visual**: drawn on an HTML canvas in `components/ui/NetworkVisual.tsx`
  — no external asset, no 3D library, no license to track. This was a
  deliberate choice over Three.js/React Three Fiber: continuous animation of
  ~34 nodes is far cheaper on a 2D canvas than a WebGL scene, and it reads as
  "network topology" without the bundle size or GPU cost of 3D.
- **Photography**: none is bundled. The brief allowed Unsplash/Pexels/Pixabay
  imagery for later pages, but this landing page doesn't currently place any
  photography — every section uses typography, iconography, or the code-drawn
  network visual instead. If you want to add a datacentre/infrastructure
  photo later (e.g. behind the trust bar or an industries card), use
  `next/image` with a `remotePatterns` entry in `next.config.mjs` for
  whichever source you pick — `images.unsplash.com` is already whitelisted
  there as an example.
- **OpenGraph image**: `app/layout.tsx` references `/public/images/og-cover.jpg`
  (1200×630) for social share previews. Add your own — none is bundled.

## Security notes carried into this build

- Strict CSP, HSTS, X-Frame-Options, Permissions-Policy set in `next.config.mjs`
- No source maps shipped in production (`productionBrowserSourceMaps: false`)
- `poweredByHeader` disabled so responses don't advertise the framework
- `.env.example` documents that secrets must never use the `NEXT_PUBLIC_` prefix
- The one `dangerouslySetInnerHTML` in the codebase (`app/layout.tsx`, for the
  Organization JSON-LD schema) is a static, hardcoded object — nothing
  user-controlled ever reaches it
- All external links (LinkedIn, mailto) use `rel="noopener noreferrer"`
- `npm audit` reports zero vulnerabilities at the pinned versions above —
  re-run it yourself after installing, since new CVEs surface over time

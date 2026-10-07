# Merkabanooks

An immersive, cinematic site for Merkabanooks: furniture, commercial
facility, and maintenance supply for transitional housing, municipal
programs, nonprofits, and commercial/residential clients.

Built with Next.js App Router, Tailwind CSS, Framer Motion, GSAP + ScrollTrigger,
and React Three Fiber.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4** — charcoal/slate base with warm amber/wood accents (see
  design tokens in [`src/app/globals.css`](src/app/globals.css))
- **Framer Motion** — micro-interactions, tab transitions, modals
- **GSAP + ScrollTrigger + SplitText** — hero text reveal, pinned scroll
  storytelling
- **React Three Fiber + drei** — interactive 3D product viewer

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    page.tsx          # composes every section
    api/quote/route.ts # RFQ submission endpoint (stub — see below)
  components/
    HeroCinematic.tsx       # video background, parallax, split-text headline
    Scene3D.tsx              # R3F canvas: fallback mesh / GLTF, hotspots, finish color
    ProductConfigurator.tsx  # wraps Scene3D with finish switcher + low-power fallback
    SectorShowcase.tsx       # dual-sector tabbed showcase
    ScrollExperience.tsx     # pinned "blueprint to furnished" scroll sequence
    QuoteCalculator.tsx      # bulk RFQ / facility package calculator + modal
    SiteHeader.tsx / SiteFooter.tsx
  lib/
    quote-data.ts      # room types, grades, add-ons, pricing logic
    utils.ts            # `cn()` class helper
public/
  videos/README.md     # hero video spec + ffmpeg compression commands
  models/README.md     # GLTF/GLB model spec + wiring instructions
```

## Asset pipeline (before launch)

Nothing here ships with real media — every visual degrades gracefully to a
procedural/placeholder state so the site is fully functional without assets:

- **Hero video** — drop `hero-loop.webm` / `hero-loop.mp4` / `hero-poster.jpg`
  into `public/videos/`. Spec and ffmpeg compression commands are in
  [`public/videos/README.md`](public/videos/README.md). Until then, the hero
  falls back to the dark gradient background.
- **3D product models** — drop a `.glb` into `public/models/` and pass its
  path as `modelUrl` to `<Scene3D />` (via `<ProductConfigurator />`). Spec,
  Draco compression, and finish-switcher material naming are in
  [`public/models/README.md`](public/models/README.md). Until then, the
  viewer renders a procedural stand-in chair.

## RFQ / quote submission

`POST /api/quote` ([`src/app/api/quote/route.ts`](src/app/api/quote/route.ts))
is wired for [Resend](https://resend.com) but works without it: by default
(no `RESEND_API_KEY` set) it just logs each request server-side and returns
success, so the form is fully functional with no setup.

To switch on real email, no code changes needed:

1. Create a free account at [resend.com](https://resend.com) and generate an
   API key at [resend.com/api-keys](https://resend.com/api-keys).
2. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY`.
3. Set `QUOTE_NOTIFICATION_EMAIL` to the inbox that should receive RFQs
   (defaults to `sales@merkabanooks.com`).
4. **Verify your sending domain** in the Resend dashboard and set
   `QUOTE_FROM_EMAIL` to an address on it (e.g.
   `"Merkabanooks <quotes@merkabanooks.com>"`). Until a domain is verified,
   Resend restricts the default `onboarding@resend.dev` sender to only
   deliver to the email address on your Resend account — fine for local
   testing, not for production.

Once `RESEND_API_KEY` is set, the route sends a notification email to
`QUOTE_NOTIFICATION_EMAIL` with the full spec, plus a confirmation email back
to the requester.

To switch to a CRM (HubSpot, Salesforce) instead of/in addition to email,
add a second call inside the `POST` handler in `route.ts`.

## Performance notes

- The 3D canvas (`Scene3D`) is code-split via `next/dynamic` with `ssr:false`
  and only mounted when the device isn't flagged as low-power
  (`prefers-reduced-motion` or `navigator.connection.saveData`) — users can
  still opt back in with a button.
- `prefers-reduced-motion` disables the hero's autoplay video, GSAP text
  reveal, and the pinned scroll sequence (jumps straight to the finished
  state) in addition to the global CSS animation-duration override.

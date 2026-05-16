# Ishan Electronic Press Kit

[Live site](https://epk-ishan.vercel.app/)

This repo contains a small Next.js website for Ishan's electronic press kit. The app lives in `epk-website/` and is intended to stay lightweight: artist bio, press photos, media links, and streaming/social links.

## Current Stack

- Next.js 15.5.18 using the Pages Router
- React 18
- Tailwind CSS 3 and DaisyUI 2
- NextUI `1.0.0-beta.12` for the existing component styling
- Framer Motion for page animations
- Node 20 for Vercel/local consistency

## Local Development

```bash
cd epk-website
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
npm audit --omit=dev
```

The app currently builds and lints cleanly. `npm audit --omit=dev` may still report a moderate PostCSS advisory from Next's bundled internal dependency; forcing npm to override it creates an invalid dependency tree, so leave that to a future Next patch unless the advisory becomes exploitable for this app.

## Useful Future Updates

- Refresh the artist bio with Ishan's current release story.
- Add Instagram or other current social links.
- Add a contact/booking page.
- Replace the legacy NextUI beta components with HeroUI or simpler local components when doing a larger redesign.

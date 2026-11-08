# Reference-led navigation, hero and motion implementation

Date: 6 November 2026

## Reference projects studied

- Anugraha Events: https://anugraha-lake.vercel.app/
  - Floating pill navigation, frosted track, elastic active indicator, scroll-aware condensed header, and an animated mobile Explore drawer.
  - Source reviewed in `Sanaulla7676/anugraha`, including `PillNav.tsx` and `SiteHeader.tsx`.

- Ashu Silks: https://ashu-silksss.vercel.app/
  - Sticky full-viewport hero, scroll-linked image scale and dimming, copy drift/fade, page progress, parallax imagery, reveal transitions and image unmasking.
  - Source reviewed in `Sanaulla7676/Ashu-silksss`, mainly `src/pages/Home.jsx` and `src/components/Header.jsx`.

- React Bits: https://reactbits.dev/
  - Magnet interaction, Animated Content scroll reveals and Glare Hover button treatment.
  - These interaction patterns are recreated with the existing GSAP dependency instead of adding a second animation runtime.

## Implementation

### Navigation
- Replaced the plain top-line navigation with a floating pill-style desktop nav.
- Added a GSAP elastic active indicator and active-state dot.
- Added services category popover and a responsive Explore drawer with staggered rows.
- Header begins translucent over the homepage hero and condenses to an ivory/frosted bar after scrolling.
- Inner pages use an ivory header so their page hero is not obscured.
- Added responsive focus styles and Escape/backdrop close behavior.

### Homepage hero
- Replaced the constrained two-column hero image card with a full-viewport, cover-cropped hero using the existing `/images/hero-salon.jpg` asset.
- The hero is sticky within a longer scroll track. The lower content sheet overlaps it as the page moves.
- At scroll, the image scales toward 1.12, the scrim darkens, and the copy drifts downward and fades.
- The image remains illustrative category photography. Replace it with a salon-owned photograph for an authentic business hero.

### Scroll motion
- Added a page scroll-progress indicator.
- Added scroll-triggered content reveals (rise, fade and blur-to-clear).
- Added image unmask reveals and parallax movement to existing feature and service images.
- Added reduced-motion handling.
- Kept the existing service, package, blog and static page structures; effects bind to existing semantic sections.

### Buttons
- Applied pill-shaped, higher-contrast primary/secondary/light buttons.
- Added a directional glare sweep on hover.
- Added restrained cursor magnetism on fine-pointer devices; touch devices do not receive cursor-follow behavior.

## Files changed
- `src/components/Header.tsx`
- `src/components/ScrollEffects.tsx` (new)
- `src/app/page.tsx` (homepage hero structure only; existing copy and lower sections retained)
- `src/app/layout.tsx` (global ScrollEffects mount)
- `src/app/globals.css` (final reference interaction layer appended)

No service, package or blog data, slugs, SEO metadata, canonical URLs, structured data or route templates were modified.

## Verification
- TypeScript: `npx tsc --noEmit --incremental false` passed.
- Direct local HTTP test: all 66 routes returned HTTP 200 with unique page titles, H1s and canonical URLs.
- 390px viewport: document width 390px (no horizontal overflow).
- Mobile Explore panel: closed, open and backdrop-close states verified.
- Desktop active indicator: x-position and width match the active navigation link.
- Scroll test at 650px: hero image scale 1.066, scrim opacity 0.786, hero copy opacity 0.319, header condensed, progress 0.070.
- Scroll test at 1150px: hero image scale 1.104, scrim opacity 0.867, hero copy opacity 0.08, content sheet overlaps the hero, progress 0.124.
- Mobile caption ends above the fixed action bar with a 17px clearance.
- Local development server remains active at http://localhost:3000.

## Build/deploy note
The local dev server is running. Do not run `npm run build` concurrently with `npm run dev` because both share the `.next` output folder. No Vercel deployment was triggered by this task.

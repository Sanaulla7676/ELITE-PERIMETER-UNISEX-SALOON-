# Elite Perimeter — Motion & Interaction Implementation

## Research basis

### Codegrid

Reviewed:
- How to Build a GSAP Landing Page Reveal (June 1, 2025).
- Your Next.js Site Needs This Text Animation, Trust Me (ScrollTrigger Goes Crazy) (September 7, 2025).
- Codegrid channel topic summaries for ScrollTrigger text highlighting, smooth sliders, full-screen carousels and fluid-gradient backgrounds.

The landing-page-reveal tutorial uses duplicate full-screen overlay layers and opposing clip paths to reveal the site, along with masked text and a central content reveal. This project adapts the useful masking and line-reveal ideas to the salon hero, rather than copying the blocking two-panel intro. ScrollTrigger ideas are adapted to reveal headings, images and card groups as they enter view.

### Online Tutorials

Reviewed the channel's published video index and recent effect topics:
- Scroll Animation Effects for Website (CSS & JavaScript).
- CSS Magic Line Image Fill Hover Effects.
- Animated Service Section Card UI.
- CSS Directional Fadeout Hover Effects.
- CSS 3D Card Hover Effects.
- Modern JavaScript Button Hover Animation Effects.
- CSS Inverted Border-radius Card.
- Active Link on Page Scroll / ScrollSpy.
- Cursor Trails, 3D tilt/parallax cards and image-hover demonstrations.

For this salon site, the implementation uses image-fill hover, a directional light sweep, an animated active navigation underline and scroll-triggered reveals. It intentionally does not use cursor trails, neon/glassmorphism, smoke/particle effects or card flips because those effects distract from service discovery and booking on a local business website.

## Effects implemented

| Effect | Placement | Implementation | Timing |
|---|---|---|---|
| Hero text line mask reveal | Homepage H1 | GSAP yPercent reveal inside overflow-hidden line wrappers | 0.88s per line; 0.12s stagger |
| Hero image curtain | Homepage hero image | GSAP clip-path inset reveal | 1.15s, power4.inOut |
| Hero image settle | Homepage hero | Scale 1.12 → 1 | 1.45s |
| Hero copy entrance | Eyebrow, intro and CTAs | GSAP y + opacity stagger | 0.5–0.65s |
| Section heading reveal | Section headings | ScrollTrigger y + opacity stagger | 0.72s; 0.09s stagger |
| Content-card entrance | Category, service, package and journey cards | ScrollTrigger y + opacity stagger | 0.68s; 0.075s stagger |
| Media curtain reveal | Service hero, page hero, split images and video | ScrollTrigger clip-path reveal | 1.05s |
| Media image settle | Images inside media blocks | ScrollTrigger scale 1.085 → 1 | 1.25s |
| Compact navigation | Sticky header | ScrollTrigger toggles is-scrolled after 48px | CSS 0.28s |
| Scroll progress | Top edge of viewport | ScrollTrigger scrub on scaleX | scrub 0.25 |
| Image-fill hover | Category and service-card images | CSS transform scale and subtle saturation | 0.85s |
| Directional image sheen | Service card images | CSS pseudo-element gradient sweep | 0.8s |
| Navigation magic line | Active/hover navigation links | CSS underline scaleX | 0.2s |
| Button sheen | Primary/nav/light buttons | CSS skewed gradient sweep on hover | 0.65s |
| CTA arrow micro-movement | Button and text-link arrows | CSS translate | 0.22–0.25s |

## Motion architecture

- GSAP 3 with ScrollTrigger.
- Motion initialises in a client component mounted from the root layout.
- Animations use a GSAP context and matchMedia lifecycle for cleanup.
- ScrollTrigger reveals run once; they do not replay on every scroll pass.
- Most transforms use opacity and transform for compositor-friendly animation.
- Clip-path is limited to image containers and hero/media reveals.
- Active states and navigation interactions remain functional without GSAP.

## Accessibility and responsive behaviour

- prefers-reduced-motion: reduce disables GSAP animation timelines.
- Reduced-motion CSS removes clip-path transforms and hides the scroll progress indicator.
- Content remains visible if animation JavaScript does not run.
- No smooth-scroll hijacking, forced full-screen intro or autoplay audio.
- Hover effects are decorative; they do not hide content or controls.
- Mobile layout uses the same reveal system with no pointer-dependent interaction requirement.

## Technical files

- src/components/MotionSystem.tsx
- src/app/layout.tsx
- src/app/globals.css
- package.json — GSAP dependency

## QA

- TypeScript check passed after GSAP installation.
- Production build passed and Next.js prerendered all 45 routes.
- Browser QA: hero line transform returned to identity, hero mask completed, section headings/cards visible after scroll, scroll progress changed with scroll position, compact header state activated.
- Mobile emulation at 390px: service directory had no horizontal overflow and retained its menu, search and mobile action bar.
- Reduced-motion emulation: preference matched, hero clip-path was removed, progress indicator hidden and content remained visible.
- Browser runtime errors: none recorded in the motion QA run.

## Attribution and design distinction

The code is an original implementation adapted from publicly described animation techniques. It does not copy tutorial source code, branded assets, course files or another website's design. Effect choices and timings are tailored to Elite Perimeter's visual identity and customer journey.
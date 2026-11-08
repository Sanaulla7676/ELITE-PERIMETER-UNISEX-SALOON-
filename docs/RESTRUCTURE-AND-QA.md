# Elite Perimeter — Website Structure, UI/UX & QA

## Page architecture

- Homepage: targets the business-level intent **Unisex Salon in Ullal, Bengaluru**.
- Services directory: /services/.
- Five service hubs:
  - /services/hair/ — Hair salon in Ullal
  - /services/facials/ — Facial salon in Ullal
  - /services/waxing/ — Waxing salon in Ullal
  - /services/threading/ — Threading salon in Ullal
  - /services/nails/ — Manicure and pedicure in Ullal
- 28 individual service routes generated from the service catalogue in src/lib/data.ts.
- 14 unique printed combo packages at /packages/.
- Supporting pages: /about/, /location/ullal/, /contact/.

## UX journey

1. Understand the salon and local area from the homepage hero.
2. Choose a service category or search the full service menu.
3. Open a service page to understand the menu wording, what's included and what must be confirmed.
4. Compare full combo-package inclusions and printed prices.
5. Call the salon to confirm the current standalone price, availability and treatment details.
6. Open directions and plan the visit.

## UI/UX upgrades

- Sticky desktop header with active route state, clear call CTA and category mega-menu.
- Mobile drawer with explicit open/close state, scroll lock, Escape key handling, backdrop close and expandable service categories.
- Searchable service catalogue with category filters, result count, empty state and reset behavior.
- Package catalogue with group filters, ascending/descending price sort and live result count.
- Homepage section order follows the buyer journey: business promise, service category discovery, popular services, appointment planning, packages, salon film placeholder, location, FAQs and final call action.
- Package cards distinguish the whole combo price from an unlisted standalone service price.
- Footer includes navigation, address, Google Maps action and published hours from the business data.
- Mobile fixed Call and Directions actions with safe-area padding.
- Visible keyboard focus, current-page navigation state, reduced-motion support, semantic labels and accessible disclosure buttons.
- Responsive image ratios and restrained hover states; no unnecessary parallax or scroll-jacking.

## Individual service-page template

Every generated service page includes breadcrumbs, unique title/meta description/canonical URL, service-specific H1 and opening copy, a category image placement, call and directions actions, local context, service explanation, before-booking questions, image gallery, package and price clarification, business address and directions, FAQs, enquiry sidebar, contextual related-service links, and Service/Breadcrumb structured data.

Pages with unconfirmed service names remain noindex and are excluded from the sitemap until confirmed:
- Botox Spa: confirm whether this is Hair Botox or another service.
- Hyder Facial: confirm whether the actual menu item is Hydra Facial.

## Design system

- Display font: Cormorant Garamond.
- Body/UI font: Manrope.
- Palette: warm ivory, muted plum, dusty rose and brushed-gold accents.
- Tokens cover typography, radii, easing and content width; components use shared color tokens.
- Desktop: minimal sticky navigation, editorial hero, image-led category cards, consistent service/package cards and editorial information blocks.
- Mobile: collapsed navigation, stacked hero/content, responsive grids, horizontally scrollable filter chips inside their own container and fixed call/directions bar.

The workflow adapts public design principles from the supplied research: Juxtopposed for user flow and design-system thinking, Adrian Twarog for visual composition, and Kevin Powell for semantic responsive implementation. These implementation choices are not claimed to be exact templates from those creators.

## Media sources and content truth

- Hair, facial, nail and hero images currently include illustrative stock imagery.
- Waxing and threading now have separate Pexels category images; source credits are documented in IMAGE-AND-VIDEO-ASSET-GUIDE.md.
- Stock images are never described as actual salon premises, workers, clients or results.
- The homepage video area is a clearly labelled placeholder until original salon MP4 footage is supplied.
- No fake ratings, reviews, certifications, achievements or results were added.

## Technical SEO

- Next.js App Router with static generation for service routes.
- Unique metadata and canonical URLs.
- Open Graph metadata.
- XML sitemap and robots.txt.
- BeautySalon/LocalBusiness business schema.
- Service schema and BreadcrumbList schema.
- Responsive imagery, accessible alt text and contextual internal links.

## QA performed

- TypeScript check: passed (npx tsc --noEmit).
- Production build: passed (npm run build).
- Next.js prerendered 45 routes.
- Local HTTP checks for homepage, service directory, service detail, category, package, About, Contact, location, sitemap and robots.txt returned HTTP 200.
- Browser interaction checks passed:
  - Mobile navigation opens and closes; body scroll locks and releases.
  - Service mega-menu expands and exposes all five categories.
  - Search for "chocolate" returns three matching services.
  - Facial category filter returns nine facial services.
  - Package price sorting returns ascending values from ₹999 to ₹4,999.
  - Premium package filter returns four packages.
  - No uncaught browser runtime exceptions during those interactions.
- Responsive DOM checks at 390px: homepage, service directory, package page and service detail had no page-level horizontal overflow; mobile menu control was visible.
- Tablet home check at 768px: no horizontal overflow.
- Desktop screenshots captured for homepage, service directory and packages; mobile captures checked for homepage, service directory and service detail.

## Before production launch

- Replace illustrative stock images with original salon-owned photographs.
- Add a real compressed salon introduction MP4 by setting NEXT_PUBLIC_SALON_VIDEO_URL.
- Confirm standalone rates and detailed service steps with the salon.
- Confirm the meaning of Botox Spa and Hyder Facial.
- Verify published opening hours against the salon's actual current hours.
- Set NEXT_PUBLIC_SITE_URL to the permanent HTTPS domain.
- Add Google Search Console verification and submit the sitemap.
- Add only genuine customer reviews; do not fabricate ratings or testimonials.

  
## Motion and animation QA

See docs/MOTION-IMPLEMENTATION.md for the effect inventory, source-channel research, timing, implementation locations and accessibility details.

- GSAP 3.15.1 and ScrollTrigger installed.
- Homepage: masked two-line H1 entrance, image curtain reveal, image settle and staggered CTA entrance.
- Content sections: staggered heading and card reveals when they enter the viewport.
- Service and editorial media: clip-path curtain reveal and subtle image scale settle.
- Header: compacts after the first 48px of scroll; top progress indicator follows page scroll.
- Hover: image-fill zoom, directional image sheen, button sheen, animated nav underline and small CTA arrow movement.
- Reduced-motion browser emulation: all content remains visible, hero clip-path is removed, scroll-progress line is hidden.
- Browser runtime errors during motion QA: none.
- Desktop, mobile homepage and service-detail screenshots captured after a 2.7-second real-time animation wait.

## Typography update

- Selected display font: Bodoni Moda.
- Selected body/UI font: Inter.
- The choice is tailored to the salon's existing premium editorial direction: Bodoni Moda for high-contrast display headings; Inter for readable service descriptions and UI controls.
- Google Fonts stylesheet endpoint returned HTTP 200 for both families.
- Existing --serif and --sans tokens were updated; page copy, URLs, SEO metadata and motion selectors remain unchanged.
- See docs/TYPOGRAPHY-DECISION.md.
## Final font-pair validation

- Selected font pair: Bodoni Moda for display headings and Inter for body/UI.
- Google Fonts CSS endpoint returned HTTP 200.
- Chrome loaded both font families (`document.fonts.check` returned true for Bodoni Moda 500 and Inter 400).
- Desktop viewport: 1440px; mobile viewport: 390px. Homepage screenshots captured after the hero animation settled.
- Mobile homepage: document width matched the 390px viewport; no horizontal overflow.
- Hero heading remained fully visible after the GSAP line reveal; animation selectors and timings were not changed.
- Final TypeScript and production build passed; all 45 routes prerendered.
- Final local smoke test: 47/47 page and asset URLs returned HTTP 200, including all 28 individual service URLs.

## SEO content expansion — November 6, 2026

### Added page layers

- Kept the full existing 28-service catalogue and all original service slugs.
- Added a unique editorial/problem-solving brief for all 28 individual service pages in `src/lib/service-editorial.ts`.
- Added 14 individual combo-package detail routes at `/packages/[slug]/`, each with its own keyword, H1, meta description, opening copy, inclusion explanation, booking checklist and links to the included services.
- Added the guides hub at `/blog/` and 12 individual articles at `/blog/[slug]/`.
- Added article-to-service, article-to-package, package-to-service, package-to-guide and category-to-guide/package internal links.
- Added guide navigation in the main menu and footer, plus a featured guide section on the homepage.
- Updated the XML sitemap to include the blog hub/articles and every package detail route. The sitemap continues to exclude the two unverified service names.
- Added `docs/BACKLINK-OUTREACH-PLAN.md` with current core profile/directories, local editorial prospects, journalist request platforms, outreach angles and Google's link-spam safeguards.

### Content quality and factual safeguards

- Each service page has a different problem statement, service-specific decision guidance, booking questions and FAQs; the PDF's sample list was treated as an illustration rather than replacing the actual salon menu.
- Every combo price remains attached to the full printed combination. It is not repeated as a standalone rate for any one included service.
- The service names `Botox Spa` and `Hyder Facial` remain visible as menu items but retain `noindex` until the salon confirms what the names mean. They are omitted from the XML sitemap until then.
- The website copy does not claim unverified salon certifications, organic ingredients, customer reviews, results, service durations, bridal makeup or other menu items absent from the supplied business data.
- Existing Bodoni Moda / Inter font declarations, motion component and GSAP animation timelines were not changed. New visual rules were appended for the added editorial/card components only.

### Validation

- Production build: `npm run build` passed.
- Static generation: 72 app routes generated by Next.js.
- Local HTTP smoke test on `http://127.0.0.1:3010`: 68/68 tested page, sitemap and robots URLs returned HTTP 200; HTML pages contained a title and H1.
- SEO field audit: 28/28 service pages, 14/14 package pages and 12/12 blog posts passed the keyword placement audit for title/H1, meta description and opening copy.
- Meta descriptions: no content record exceeded 160 characters in the audit.
- Cross-reference audit: no missing service, package or blog slug references.
- Sitemap checks: blog and package routes present; all indexable service routes present.
- Local production server launched at `http://127.0.0.1:3010`.

### Before production deployment

- Set `NEXT_PUBLIC_SITE_URL` to the permanent canonical HTTPS domain and rebuild.
- Confirm the exact meanings and service descriptions for Botox Spa and Hyder Facial before removing their noindex flags.
- Verify the salon's opening hours, exact menu prices and all service availability with the business.
- Complete external business profile verification and third-party publisher outreach using `docs/BACKLINK-OUTREACH-PLAN.md`. No external backlink is counted until a real public listing/article is live and its URL is recorded.
- Submit the updated sitemap to Google Search Console after the permanent domain and canonical URL are set.


## Final SEO implementation pass — 6 November 2026

- Added three source-grounded FAQs to each of the 12 existing blog records; preserved all blog slugs and primary-keyword assignments.
- Added topic-matched illustrative image categories and descriptive alt text to all 12 guides. The existing stock images remain visibly identified as illustrative; replace with real salon-owned photographs before production.
- Blog article pages now render their featured illustrative media, FAQ section and a FAQ anchor in the article table of contents. BlogPosting structured data and Open Graph metadata now include the relevant image.
- Added direct Contact and Ullal Location links to all service-page sidebars.
- Changed the third service detail gallery image to use the current service's own category instead of a fixed nails image.
- Updated Bing Places in the outreach plan to the current owner portal, `https://www.bing.com/forbusiness`.
- Added `docs/SEO-IMPLEMENTATION-AUDIT.md` and `docs/FOUNDATIONAL-CITATION-KIT.md` with requirement statuses, pain-point mapping, owner approval gates, profile-ready business data, external listing workflows and PR tracking.
- Added a production guard in `src/lib/seo.ts` so production builds reject missing, non-HTTPS, localhost, Vercel preview and reserved test origins. `.env.example` now leaves the production domain blank with instructions.
- Final TypeScript check passed. Production build passed and generated 72 app routes.
- Local production HTTP test passed: 66/66 HTML page routes returned 200 with a title and H1; all 12 blog pages rendered three FAQs and alt text; all 28 service pages exposed Contact and Location links; both ambiguous service URLs remained noindex and absent from the sitemap; sitemap and robots returned 200.
- Validation build used a temporary test origin only. Production deployment is still blocked until the owner supplies the permanent HTTPS domain and verifies the real opening hours and service details.


## Final hub keyword refinement — 6 November 2026

- The `/packages/` and `/blog/` index pages received more intent-specific H1/opening copy; the packages hub now links to the existing salon-budget guide.
- TypeScript and Next.js production build were rerun successfully after the final copy changes (72 routes generated).
- HTTP verification of both changed hubs passed (200, title, H1, expected link).
- The temporary validation build output was cleared after testing so the placeholder canonical domain cannot be mistaken for a deployment build.

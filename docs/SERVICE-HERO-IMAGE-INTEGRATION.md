# Service hero image integration

Date: 6 November 2026

## Source supplied by the site owner
- Archive: `Salon_Service_Hero_Images_JPG (10).zip`
- Source dimensions for all 22 files: 2064 × 762 pixels.
- Source image count: 22.
- Installed without re-generating the artwork; original JPEGs were preserved.

## Installed assets and matching service routes

| Service | Service route | Hero asset |
|---|---|---|
| Whitening Facial | `/services/facials/whitening-facial-ullal/` | `whitening-facial-ullal.jpg` |
| Korean Glass Facial | `/services/facials/korean-glass-facial-ullal/` | `korean-glass-facial-ullal.jpg` |
| Gold Facial | `/services/facials/gold-facial-ullal/` | `gold-facial-ullal.jpg` |
| Bridal Facial | `/services/facials/bridal-facial-ullal/` | `bridal-facial-ullal.jpg` |
| Hyder Facial | `/services/facials/hyder-facial-ullal/` | `hyder-facial-ullal.jpg` |
| 10-Step Whitening Facial | `/services/facials/10-step-whitening-facial-ullal/` | `10-step-whitening-facial-ullal.jpg` |
| Face De-Tan | `/services/facials/face-de-tan-ullal/` | `face-de-tan-ullal.jpg` |
| Full Arms Waxing | `/services/waxing/full-arms-waxing-ullal/` | `full-arms-waxing-ullal.jpg` |
| Underarms Waxing | `/services/waxing/underarms-waxing-ullal/` | `underarms-waxing-ullal.jpg` |
| Half Legs Waxing | `/services/waxing/half-legs-waxing-ullal/` | `half-legs-waxing-ullal.jpg` |
| Full Legs Waxing | `/services/waxing/full-legs-waxing-ullal/` | `full-legs-waxing-ullal.jpg` |
| Chocolate Waxing | `/services/waxing/chocolate-waxing-ullal/` | `chocolate-waxing-ullal.jpg` |
| Eyebrow Threading | `/services/threading/eyebrow-threading-ullal/` | `eyebrow-threading-ullal.jpg` |
| Upper Lip Threading | `/services/threading/upper-lip-threading-ullal/` | `upper-lip-threading-ullal.jpg` |
| Chin Threading | `/services/threading/chin-threading-ullal/` | `chin-threading-ullal.jpg` |
| Forehead Threading | `/services/threading/forehead-threading-ullal/` | `forehead-threading-ullal.jpg` |
| Pedicure | `/services/nails/pedicure-ullal/` | `pedicure-ullal.jpg` |
| Manicure | `/services/nails/manicure-ullal/` | `manicure-ullal.jpg` |
| Lavender Pedi Spa | `/services/nails/lavender-pedi-spa-ullal/` | `lavender-pedi-spa-ullal.jpg` |
| Lavender Mani Spa | `/services/nails/lavender-mani-spa-ullal/` | `lavender-mani-spa-ullal.jpg` |
| Glass Shine Pedi Spa | `/services/nails/glass-shine-pedi-spa-ullal/` | `glass-shine-pedi-spa-ullal.jpg` |
| Glass Shine Mani Spa | `/services/nails/glass-shine-mani-spa-ullal/` | `glass-shine-mani-spa-ullal.jpg` |

## Implementation
- Assets live in `public/images/services/`.
- The service detail template renders the matching service image in the main hero on these 22 routes.
- The supplied images are panoramic. Those 22 pages use a wide full-row hero layout (desktop 2.7:1; mobile 1.8:1) rather than forcing the images into the previous narrow image column.
- `next/image` is used with priority loading and responsive `sizes`.
- Existing generic category imagery remains the fallback on service pages without a dedicated supplied asset.
- No standalone image was supplied for Hair Cut, Hair Spa, Keratin Spa or Botox Spa; those continue with their existing image/hold behaviour.

## SEO and route preservation
- Service names, route slugs, titles, H1s, descriptions, canonicals, structured data and editorial copy were not rewritten.
- Hyder Facial displays the supplied hero image but remains `noindex, follow` and outside the sitemap until its treatment details are owner-verified.
- Botox Spa remains held/noindex pending owner verification.
- The two verification-only pages are still individual routes and were not redirected.

## Verification
- Installed JPEG hero images: 22.
- All 22 image URLs: HTTP 200, `image/jpeg`.
- All 22 matching service pages: HTTP 200 and reference the correct image path.
- TypeScript: `npx tsc --noEmit --incremental false` passed.
- All source-defined pages: 66/66 HTTP 200 with distinct title, H1 and canonical URL.
- Sitemap remains 64 URLs; two owner-verification pages stay excluded.
- Development server remains running at `http://localhost:3000`.

## Files changed
- `public/images/services/*.jpg` (22 new image files)
- `src/app/services/[category]/[slug]/page.tsx`
- `src/app/globals.css`

## Site-wide service image placement (follow-up)
- Added `src/lib/service-images.ts` as the single allow-list for the 22 supplied service hero assets.
- `CategoryImage` now accepts an optional `serviceSlug`. When that slug has a supplied hero image, it uses that exact asset; otherwise it keeps the existing category fallback.
- `ServiceCard` now passes its own service slug. This covers the homepage featured-service cards, services index/search results, category grids and related-service cards on service pages.
- `ReferenceTreatmentBands` and `ServiceGallery` now pass the current service slug, so their images match the service being described.
- Homepage category tiles now use representative images for facials, waxing, threading and nail care. Hair keeps its prior category image because no hair hero asset was included in the supplied ZIP.
- Each category landing page uses a representative uploaded service image in its hero and a different uploaded service image in the lower feature block. Hair retains its existing image fallback.
- The homepage's main salon-interior hero and the location page remain on their own salon/location imagery; treatment images are not substituted for the salon interior.
- Missing dedicated images (including Cleanup, Chocolate Facial, Hair Cut and Hair Spa) retain the appropriate existing category fallback rather than incorrectly reusing a different treatment image.
- The Whitening Facial page's related cards now resolve to three distinct paths: `10-step-whitening-facial-ullal.jpg`, the existing `facial-service.jpg` fallback for Cleanup, and `face-de-tan-ullal.jpg`.

### Additional verification
- `npx tsc --noEmit --incremental false`: passed.
- `docs/verify-service-images-everywhere.cjs`: passed for homepage, service index, all five category pages and representative service routes.
- Five homepage category tiles resolve to five distinct image paths.
- The Whitening Facial related-service card images resolve to three distinct files.
- `docs/verify-all-routes.cjs`: all 66 routes returned HTTP 200 with their existing titles, H1s and canonical URLs.

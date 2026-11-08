# Homepage keratin banner and service-image fixes — 7 November 2026

## Keratin banner
- Replaced the former two-column “Compare the combination, not just the price” block with a full-bleed linked banner.
- Created `public/images/keratin-treatment-banner-19x6.webp` at exactly 1900 × 600 pixels (19:6).
- Source: used only the clean glossy-hair close-up from the existing local keratin collage; excluded its before/after panels so those are not presented as verified client results.
- Added salon-specific headline, Ullal location, explanatory copy and a clickable Keratin Spa call to action to the banner artwork.
- Desktop uses the full-width 19:6 banner image. Clicking the banner opens `/services/hair/keratin-spa-ullal/`.
- Created `public/images/keratin-treatment-mobile.webp` for the mobile layout; mobile shows a larger image, real HTML heading and copy, plus working service and telephone links.
- The banner does not include the unrelated phone number or website seen in the previously supplied poster.
- Removed the corrupted `keratin-treatment-panel.webp` asset and temporary base64 files after verifying there were no remaining source references.

## Homepage service images
- Added a mapped facial-category visual for `chocolate-facial-ullal` and `face-cleanup-ullal` using the existing `/images/facial-service.jpg` asset.
- Their cards retain the visible “Illustrative image · replace with salon photo” disclosure.
- Existing specific service images remain mapped for haircut, hair spa, Korean Glass Facial, eyebrow threading and pedicure.
- The homepage was checked for “ORIGINAL SERVICE PHOTO” placeholders; count returned zero.
- Botox Spa remains an intentional photo/detail hold outside the homepage featured-card set because its exact treatment details are still unverified.

## Verification
- TypeScript check: passed (`npx tsc --noEmit --incremental false`).
- Homepage route: HTTP 200.
- Keratin service route: HTTP 200.
- Desktop banner asset: HTTP 200, 124,870 bytes.
- Mobile image asset: HTTP 200, 109,510 bytes.
- Facial service image asset: HTTP 200.
- Rendered homepage HTML references the new desktop banner, mobile image and facial service image.
- Rendered homepage HTML has no reference to the removed corrupted asset and no “ORIGINAL SERVICE PHOTO” placeholders.
- Production build was not rerun after this visual update because the local Next.js development server is running on the same `.next` output directory.

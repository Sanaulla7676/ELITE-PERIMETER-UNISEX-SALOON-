# Elite Perimeter Unisex Salon — Local SEO Website

A Next.js App Router website for Elite Perimeter Unisex Salon, Ullal Main Road, Jnana Ganga Nagar, Bengaluru.

## Included architecture

- Homepage targeting Unisex Salon in Ullal, Bengaluru.
- Services directory with five service category hubs.
- 28 individual service landing pages generated from src/lib/data.ts.
- 14 unique combo packages with printed prices transcribed from supplied posters.
- About, Ullal location and Contact pages.
- Dynamic sitemap.xml, robots.txt, structured data and page-specific metadata.

## Visual system

- Brand direction: clean WordPress-inspired block theme for a premium unisex salon.
- Display / headings: standard system serif (Georgia / Times New Roman).
- Body / interface: Poppins only (400, 500, 600 and 700).
- Palette: white page surfaces, very light-grey alternate sections, charcoal text, Espresso primary actions and restrained sage accents.
- WordPress-inspired block layout, responsive content sections/cards and mobile Call/Directions bar.
- Clean WordPress-inspired block layout with minimal transitions and standard content spacing.
- The root layout does not run the custom GSAP animation system.
- Implementation reference: docs/BRAND-SYSTEM.md.

## Run locally

Requirements: Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Motion and typography documentation

- docs/MOTION-IMPLEMENTATION.md
- docs/TYPOGRAPHY-DECISION.md
- docs/RESTRUCTURE-AND-QA.md
- docs/IMAGE-AND-VIDEO-ASSET-GUIDE.md

## Before production

1. Replace illustrative stock images with original salon-owned/consented photographs.
2. Supply original salon footage for the homepage video slot.
3. Confirm standalone prices and current opening hours.
4. Confirm the meanings of Botox Spa and Hyder Facial before indexing their pages.
5. Set NEXT_PUBLIC_SITE_URL to the permanent HTTPS domain and submit sitemap.xml in Search Console.
6. Use only genuine customer reviews and business credentials.
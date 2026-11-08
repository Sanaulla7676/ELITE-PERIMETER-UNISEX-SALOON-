# SEO structure upgrade — 7 November 2026

## Scope
Updated the existing Elite Perimeter Unisex Salon Next.js website in place. Existing URL routes and content records were retained. This pass adds distinct data-table modules, expands contextual internal-link anchors and connects visible FAQs to page-level FAQ structured data where applicable.

## Page groups covered

| Page type | Existing pages | Structure added or strengthened |
|---|---:|---|
| Homepage | 1 | Local primary phrase included in the main H1 as a styled subtitle; current service/category/package/guide discovery paths retained |
| Service directory | 1 | Category directory with descriptive keyword anchors and counts |
| Category hubs | 5 | Per-category service comparison table; each primary service phrase links to its individual detail page |
| Service details | 28 | Service facts table with primary phrase, category, locality and price clarification; FAQPage JSON-LD matching visible FAQ content; existing service-specific sections, gallery, booking questions and contextual links retained |
| Package directory | 1 | Full 14-package price/inclusion summary table linking to the package detail pages |
| Package details | 14 | Printed inclusions table; links to the matching service page where the inclusion name exactly matches a verified service record |
| Blog directory | 1 | 12-guide topic/search phrase directory |
| Blog articles | 12 | Article summary table with primary phrase, reader question, key takeaway and next action; FAQPage JSON-LD matching visible FAQs; contextual links to relevant services/packages retained |
| About | 1 | Business information table and local keyword in H1 |
| Contact | 1 | Contact/booking reference table and local keyword in H1 |
| Location | 1 | Local address/landmark/contact table and Ullal location phrase in H1 |

## Keyword placement
The data audit already found primary phrases in the core metadata/H1/intro fields across service, package and blog records. The existing URL paths retain the relevant topic/service phrase and Ullal locality where appropriate. This pass adds natural exact-match primary-phrase anchor text in the directory tables so links are descriptive and point to the matching destination. It does not repeat the exact phrase at the start of every paragraph: that would make the content awkward and risks keyword stuffing. Supporting terms should be used where the paragraph actually covers that subtopic.

## Internal-link structure
- Homepage → service directory, category hubs, featured services, packages, guides, contact and location.
- Service directory → five category hubs; each hub → its individual services.
- Service details → parent category, related services, matching packages, related customer guides, contact and location.
- Package directory → each package detail; package details → matching individual service pages and relevant guides.
- Blog directory → all guides; each guide → related service/package pages, guide library and relevant location/contact information.
- About/contact/location pages → service directory, packages and each other through existing navigation and contextual CTAs.

## Structured data
- Existing BeautySalon, Service, BlogPosting and BreadcrumbList markup retained.
- Added FAQPage data only where visible FAQ content exists.
- Removed openingHoursSpecification from the BeautySalon JSON-LD because hours need business-owner confirmation. Do not re-add them until verified.

## Build verification
- TypeScript check: passed.
- Next.js production build: passed.
- Static route generation: 72/72 generated.
- Build environment used a temporary build-check HTTPS origin; `.env.local` was not changed.
- Homepage returned HTTP 200 after the build. The local dev server remains available.
- External deployment and live search indexing were not part of this code change.

## Owner / off-site actions still required
1. Set `NEXT_PUBLIC_SITE_URL` to the real permanent HTTPS custom domain in the production environment, then rebuild and check canonicals and sitemap URLs.
2. Verify the business hours with the salon owner before adding them to structured data or synchronising external profiles.
3. Verify uncertain service names and processes (Botox Spa and Hyder Facial remain noindex); verify products, service steps, current standalone pricing and any changed menu details.
4. Replace illustrative images with actual salon/team/interior/service photographs. Add before-and-after images only when they show the same consenting client under comparable conditions.
5. Claim/verify Google Business Profile, Bing Places, Apple Business and relevant local profiles; keep business name/address/phone consistent and use the production domain.
6. Earn real local editorial citations and relevant directory links. A backlink exists only when an external website links to the salon site. This code change does not create external backlinks, and no publisher outreach has been sent.
7. Submit the verified sitemap in Google Search Console and Bing Webmaster Tools, then inspect index coverage, canonical selection, mobile usability and page performance after production deployment.

## SEO guardrails
Do not keyword-stuff paragraphs, titles, alt text, footer copy or anchor text. Do not place the same exact-match anchor on every occurrence. Use descriptive anchors only when the destination is relevant. Do not buy bulk backlinks, manufacture testimonials, imply unverified results or create thin duplicate locality pages. Better rankings are not guaranteed by on-page code alone; domain history, competition, useful content, real-world business prominence, links and technical performance also matter.

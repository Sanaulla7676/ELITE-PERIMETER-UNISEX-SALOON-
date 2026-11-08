# Elite Perimeter — Local SEO strategy and implementation roadmap

Prepared: 5 November 2026  
Primary market: Ullal Main Road / Jnana Ganga Nagar, Bengaluru 560056  
Primary site objective: turn relevant local service searches into calls, directions requests and in-person enquiries.

## Executive strategy

**Primary homepage topic:** Unisex salon in Ullal, Bengaluru.  
**Primary GBP category supplied by the owner:** Beauty Parlour.  
**Core location entity:** Elite Perimeter Unisex Salon, 1st Floor, No. 39, Ullal Main Road, near Mangalore Independent PU College, above HDFC Bank, Annapurneshwari Layout, Jnana Ganga Nagar, Bengaluru, Karnataka 560056.

This plan adapts publicly available methods from Edward Sturm. It is not a claim that he endorses this site or that his advice guarantees rankings.

## Edward Sturm principles used

### 1. Service hub and dedicated bottom-of-funnel pages

Edward's article for service businesses recommends a `/services/` hub containing individual, task-specific service pages. He advises placing the target phrase in the page title, H1 and opening sentence, and linking to the service hub from the footer. Applied here:

- `/services/` is the service index.
- Category hubs divide the inventory into hair, facials, waxing, threading and nail care.
- Individual service URLs have distinct intent and a distinct primary query.
- Footer and contextual links connect the hierarchy.

Source: https://edwardsturm.com/articles/seo-for-services-businesses-under-one-minute-read-time/

### 2. Compact, bottom-of-funnel keyword targeting

Prioritise queries that imply a service decision, rather than writing broad articles that attract readers who may never visit the salon. Examples include `Korean Glass Facial in Ullal`, `eyebrow threading in Ullal`, `hair spa in Ullal` and `full arms waxing in Ullal`.

Do not force every locality into every page. Use Ullal, Ullal Main Road and Jnana Ganga Nagar as the core location context; use the Mangalore Independent PU College / HDFC Bank landmarks as navigational context. Do not claim a branch in Nagarbhavi, Kengeri or another area.

Edward's source pages list low-hanging-fruit analysis, bottom-of-funnel targeting, compact keywords and structured hub pages as focus areas:
- https://edwardsturm.com/services/
- https://edwardsturm.com/articles/pareto-seo/

### 3. Pareto SEO and Search Console refreshes

Edward's March 2026 Pareto SEO article recommends using Search Console to find queries where a page already appears around positions 3–20. If that page genuinely matches the query, improve the relevant section. If the query has a distinct intent, create a dedicated page and link to it from the related existing page.

Application:
- After the site is indexed, export queries and landing pages from Search Console monthly.
- Filter for non-brand local service phrases with impressions and positions around 3–20.
- Improve a relevant existing service page if it already matches that intent.
- Create a new page only if the service is real, the query has distinct intent and the page can contain useful original information.
- Review title and snippet CTR before rewriting already relevant pages.

Source: https://edwardsturm.com/articles/pareto-seo/

### 4. Technical on-site SEO and local SEO foundations

Edward's public service outline includes metadata, Open Graph, semantic tags, server-side rendering, duplicate-content cleanup, information architecture, breadcrumbs, UX, crawlability, NAP consistency, reviews, local keyword optimisation and directory usage.

Application:
- Server-rendered Next.js pages with crawlable HTML links.
- Unique title and description on every indexable route.
- Canonical URL, XML sitemap, robots.txt and breadcrumb navigation.
- `BeautySalon` / `LocalBusiness` and `Service` structured data using facts supplied by the owner.
- One canonical business name, address and phone number across the website and legitimate profiles.
- No fabricated reviews, aggregate ratings, awards, staff credentials, treatment claims or unverified product claims.

Source: https://edwardsturm.com/services/

### 5. Off-site proof and distribution

Edward's public material discusses niche/general directories, outreach, podcast backlinks and short-form social videos as distribution and authority tactics. For a local salon, adapt this cautiously:

- Accurate listings on relevant Indian/local business directories; do not submit to bulk spam directories.
- Local partnerships with nearby wedding/event vendors, photographers, boutiques and community businesses where there is a real relationship.
- Genuine customer reviews requested neutrally after a real visit; never buy reviews, gate reviews or offer rewards for positive feedback.
- Short original videos showing real salon work, staff and premises. Mention the genuine business name and link to the matching service page.
- Ask local publishers or community sites for relevant coverage only when there is an actual story or contribution.

Do not buy links or run mass guest-post schemes. A link must make sense for a real person.

## Site architecture

```text
/
├── /services/
│   ├── /services/hair/
│   │   ├── haircut
│   │   ├── hair-spa
│   │   ├── keratin-spa
│   │   └── botox-spa* (noindex pending confirmation)
│   ├── /services/facials/
│   │   ├── face-cleanup
│   │   ├── chocolate-facial
│   │   ├── whitening-facial
│   │   ├── korean-glass-facial
│   │   ├── 24k-gold-facial
│   │   ├── bridal-facial
│   │   ├── hyder-facial* (noindex pending confirmation)
│   │   ├── 10-step-whitening-facial
│   │   └── face-de-tan
│   ├── /services/waxing/ (5 pages)
│   ├── /services/threading/ (4 pages)
│   └── /services/nails/ (6 pages)
├── /packages/ (14 unique printed combos)
├── /location/ullal/
├── /about/
└── /contact/
```

There are 28 service routes in the code. The two ambiguous menu items are `noindex` and excluded from the sitemap until confirmed. That leaves 26 service pages eligible for indexing after quality review.

## Service-page content template

Every indexable service page should contain:

1. Breadcrumbs: Home → Services → Category → Service.
2. One H1 with the service and the location (for example, `Korean Glass Facial in Ullal`).
3. Opening sentence that naturally names the service, salon and location.
4. An original salon photograph of that service, with descriptive alt text. Do not use stock or AI images as if they depict the actual salon.
5. A useful, accurate explanation of what the salon actually offers.
6. Specific inclusions only where confirmed by the printed menu or salon staff.
7. A short “before you book” checklist for the actual service.
8. Price status: exact amount only where a standalone price is supplied; otherwise say to enquire. Do not show a combo price as a standalone service price.
9. Related service links and a link back to its category hub.
10. The accurate salon address, directions link and a call-to-enquire CTA.
11. A small FAQ section that answers real customer questions, not keyword variations disguised as questions.

Do not publish empty pages that only repeat the service name with a changed locality. Before indexation, each page needs original facts, photographs or other evidence that distinguishes it from sibling pages.

## Keyword ownership map

| Page | Primary query | Supporting intent (examples) |
|---|---|---|
| Homepage | Unisex salon in Ullal | beauty parlour Ullal, salon Ullal Main Road, unisex hair and beauty salon |
| Hair category | Hair salon in Ullal | hair care Jnana Ganga Nagar, haircut and hair spa |
| Haircut | Haircut in Ullal | ladies haircut, gents haircut, hairdresser Ullal Main Road |
| Hair Spa | Hair spa in Ullal | hair care, conditioning, Jnana Ganga Nagar |
| Keratin Spa | Keratin hair treatment in Ullal | keratin spa Bengaluru, hair treatment Ullal Main Road |
| Botox Spa* | Botox Spa in Ullal | Keep noindex until exact treatment is confirmed |
| Face Cleanup | Face cleanup in Ullal | cleanup salon, facial cleansing |
| Chocolate Facial | Chocolate facial in Ullal | chocolate facial Bengaluru, facial salon Ullal |
| Whitening Facial | Whitening facial in Ullal | brightening facial, skin care salon Ullal |
| Korean Glass Facial | Korean Glass Facial in Ullal | Korean facial Bengaluru, glass-skin-inspired facial |
| Gold Facial | 24K Gold Facial in Ullal | gold facial Bengaluru, premium facial |
| Bridal Facial | Bridal facial in Ullal | pre-bridal facial, wedding facial Bengaluru |
| Hyder Facial* | Hyder Facial in Ullal | Keep noindex until wording is verified (do not assume Hydra) |
| 10-Step Whitening | 10-step whitening facial in Ullal | multi-step facial, brightening facial |
| Face De-Tan | Face de-tan in Ullal | de-tan facial, facial care Ullal |
| Full Arms Waxing | Full arms waxing in Ullal | arm waxing Bengaluru, full arm hair removal |
| Underarms Waxing | Underarms waxing in Ullal | underarm hair removal, waxing salon |
| Half Legs Waxing | Half legs waxing in Ullal | half leg waxing, leg waxing salon |
| Full Legs Waxing | Full legs waxing in Ullal | full leg waxing, body grooming |
| Chocolate Waxing | Chocolate waxing in Ullal | chocolate wax Bengaluru, chocolate body waxing |
| Eyebrow Threading | Eyebrow threading in Ullal | brow shaping, facial threading |
| Upper Lip Threading | Upper lip threading in Ullal | upper lip hair removal, facial threading |
| Chin Threading | Chin threading in Ullal | chin hair removal, threading salon |
| Forehead Threading | Forehead threading in Ullal | forehead hair removal, face threading |
| Pedicure | Pedicure in Ullal | foot care, pedicure salon Bengaluru |
| Manicure | Manicure in Ullal | nail care, hand care salon |
| Lavender Pedi Spa | Lavender Pedi Spa in Ullal | Lavender pedicure, foot spa |
| Lavender Mani Spa | Lavender Mani Spa in Ullal | Lavender manicure, hand spa |
| Glass Shine Pedi Spa | Glass Shine Pedi Spa in Ullal | Glass Shine pedicure, premium foot care |
| Glass Shine Mani Spa | Glass Shine Mani Spa in Ullal | Glass Shine manicure, premium hand care |

`*` Service name requires owner confirmation before public indexing.

## Image plan for each page

Use photographs the salon owns or has permission to publish:

- Homepage: storefront signage, reception/interior, one wide salon photograph.
- Hair pages: real haircut, hair spa setup, stylist working (with client consent).
- Facial pages: actual products/setup and treatment-room photographs; do not imply medical efficacy.
- Waxing/threading pages: clean, professional setup; obtain consent before showing a customer.
- Nail pages: real manicure/pedicure work and spa setup.
- Location page: street-facing entrance, signage, floor/access directions, landmark photo.

Filename pattern: `haircut-ullal-elite-perimeter.webp`. Alt text should describe the actual image, e.g. `Haircut service at Elite Perimeter Unisex Salon in Ullal`. Never repeat the same alt text on every image. Compress to modern formats and provide responsive dimensions.

## Internal linking rules

- Homepage links to all five service hubs, packages and location.
- `/services/` links to every category hub.
- Each category hub links to its service pages.
- Each service page links to its parent hub, 2–4 genuinely related services, packages that actually include it, and contact/location.
- Packages link to every related individual service page.
- Footer links to Services, Packages, Location, About and Contact.
- Use descriptive anchor text that makes sense to a visitor. Do not repeat exact-match anchors mechanically.

## Technical implementation in this project

- Next.js App Router pages are rendered on the server.
- Titles, descriptions, canonical URLs and Open Graph metadata are provided by Next.js Metadata API.
- `sitemap.ts` outputs indexable routes. Ambiguous pages are excluded.
- `robots.ts` points crawlers to the sitemap.
- `BeautySalon` structured data identifies the business, address, telephone and supplied opening hours.
- Service pages use `Service` and `BreadcrumbList` structured data.
- No review/aggregateRating markup is added because no verified first-party review collection or review-permission evidence has been supplied.
- All navigation uses ordinary crawlable links.

Structured data helps Google understand the entity; it does not guarantee a special search display or higher ranking.

## 90-day implementation roadmap

### Before launch (days 1–3)

- Verify the exact real-world business name and address against storefront signage and legal/public-facing use.
- Reconcile the old public listing name (if the same address/phone listing remains under another name) before changing profile identity or creating another listing.
- Confirm actual opening hours. The website uses the current GBP hours supplied by the owner; a previous GoDaddy site reportedly showed 9 AM–5 PM.
- Confirm the salon phone number, map pin and directions.
- Confirm exact meaning of `Botox Spa` and `Hyder Facial`; retain noindex until resolved.
- Confirm standalone rates, service steps, products, timings and actual staff qualifications. Do not invent them.
- Replace decorative art with genuine salon photographs and obtain model/client consent.

### Launch week (days 4–7)

- Deploy on Vercel and connect a domain the business owns.
- Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain.
- Test all 28 service URLs, five hubs, packages, contact and location pages.
- Submit `/sitemap.xml` in Google Search Console.
- Verify the site is crawlable, mobile usable and has no accidental `noindex` on the main pages.
- Update the website field on the correct Google Business Profile only after the final domain is live.
- Add `/services/` as the menu/services link if the GBP field is available and appropriate.

### First 30 days

- Publish 6–10 original images per major service group over time; do not upload duplicate images.
- Ask real customers for honest reviews without incentives or review gating.
- Respond helpfully to reviews. Do not insert forced keywords into replies.
- Add consistent NAP details to a small number of relevant, legitimate local directories.
- Check Search Console for indexed pages, query impressions, CTR and crawl errors.
- Compare GBP calls, direction requests and website clicks with the previous period.

### Days 31–60

- Review service-page impressions and query intent.
- Improve pages that have impressions but weak click-through rate by making titles/descriptions clearer.
- For pages ranking around positions 3–20, inspect whether the page truly satisfies the query; add real missing information or photos.
- Ask the salon for additional service-specific information to enrich pages that currently have only menu-level details.
- Add local partnerships and genuinely earned mentions where relevant.

### Days 61–90

- Consolidate pages that show overlapping search intent; do not keep several pages competing for one query.
- Create new pages only for genuine services with distinct search intent and enough original information.
- Review organic leads, calls and direction requests, not just ranking screenshots.
- Re-check NAP consistency and GBP categories/services quarterly or when the business changes.

## Measurement dashboard

Track monthly:

- Search Console: clicks, impressions, CTR and average position by page/query.
- Google Business Profile: searches, views, calls, website clicks and direction requests.
- Website: call clicks, directions clicks and service-page enquiries.
- Operations: enquiry-to-appointment conversion and the most frequently requested services.

Rank checks should be taken from defined points around the salon and recorded consistently. A single search from the owner's phone is not a reliable city-wide ranking measurement.

## Competitor context

A live local search in November 2026 returned nearby salons with established review histories, including Envoq Salon – Ullal, Spin Unisex Salon Ullal, Naturals Unisex Salon Ullal, Hair Bonds Unisex Salon & Academy and The Cutz Unisex Salon Ullal. Review counts and ratings change and should be rechecked before using in a formal competitor report. The practical implication is to build genuine local prominence and proof, not to copy competitors' text or chase their review counts with incentives.

## What this plan does not promise

- No first-page or top-3 ranking guarantee.
- No guarantee that every service page will be indexed.
- No guarantee that schema creates rich results.
- No guaranteed timeline for Google ranking changes.
- No keyword-volume claims without Keyword Planner / Search Console data.

Google's local ranking guidance says local results are mainly based on relevance, distance and prominence: https://support.google.com/business/answer/7091

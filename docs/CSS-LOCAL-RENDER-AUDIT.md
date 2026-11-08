# CSS / local-render audit — 6 November 2026

## Findings

1. The CSS source itself parses. The browser initially rendered unstyled HTML because the live development server requested generated CSS and JavaScript chunks that returned HTTP 404/500.
2. The production `next build` and `next dev` processes had been run concurrently against the same `.next` directory. This replaced development artifacts while the dev server was active, leaving stale chunk references in the browser.
3. The stale Turbopack development session continued to report missing chunk resources after cache cleanup. The local development session was restarted cleanly using Webpack. The stylesheet is now served from `/_next/static/css/app/layout.css` with HTTP 200 (about 158 KB).
4. A separate mobile-navigation cascade issue was found. A late global `.main-nav { display:flex }` rule overrode the earlier mobile `display:none` rule. A final `@media (max-width:780px)` override now keeps the menu closed until `.main-nav.is-open` is applied.

## Verification

- CSS stylesheet loaded in browser: HTTP 200.
- Computed body font: Poppins, Arial, sans-serif.
- Computed heading font: Georgia, Times New Roman, serif.
- Mobile navigation default state: hidden; open/close state follows the menu button.
- Mobile viewport widths tested: 320, 360, 390, 430 and 768 pixels. No horizontal page overflow.
- Desktop/tablet widths tested: 781, 1024, 1365 and 1920 pixels; desktop navigation displayed.
- Local HTTP smoke test: 13 of 13 sampled routes returned HTTP 200.
- TypeScript: `npx tsc --noEmit --incremental false` passed.

## Maintenance note

The stylesheet is approximately 156 KB and contains 1,746 rules, 32 media queries and 339 repeated selectors. Some selectors (for example `.main-nav`, `.home-hero-copy h1` and `.category-tile`) appear in multiple design revisions. This is not a CSS syntax error, but it increases cascade complexity and makes future responsive changes more fragile. A controlled stylesheet consolidation should be done separately, with screenshot comparisons at each breakpoint.

## Local development rule

Do not run `npm run build` while `npm run dev` is active in this project; both use the same `.next` output directory. Stop the dev server before a production build, then clear/restart development artifacts before running local dev again.

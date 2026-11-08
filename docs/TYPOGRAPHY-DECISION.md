# Typography and theme decision — Elite Perimeter

## Theme direction

Use a clean WordPress-inspired block-theme presentation: plain white header, standard navigation, readable content width, consistent section spacing, simple borders, modest buttons and minimal motion. WordPress has many themes, so this is a deliberate implementation of familiar WordPress block-theme conventions rather than a claim that one universal WordPress design exists.

## Allowed type families

**Poppins** is the only sans-serif family. It is loaded in weights 400, 500, 600 and 700.

**Georgia / Times New Roman / generic serif** is the system serif stack for headings and selected display details. These are standard system fonts and do not require a third-party font request.

No Playfair Display, Instrument Serif, Inter, Bodoni, Montserrat or other decorative or additional font families should be introduced.

## Usage rules

- Body text, navigation, buttons, forms, labels, captions, prices, metadata and all controls: Poppins.
- H1–H4 and selected editorial headings: Georgia / Times New Roman / serif.
- H5–H6 and compact interface headings: Poppins 600.
- Keep body copy at 16px where practical, with 400 weight for normal reading.
- Do not add font files or additional Google Fonts for this theme.

## Implementation

- Google Fonts stylesheet in src/app/layout.tsx loads Poppins only.
- CSS variables in src/app/globals.css set --sans to Poppins and --serif to Georgia / Times New Roman / serif.
- The Next.js marketing site remains a Next.js project. It has not been converted into a WordPress CMS.
- The custom GSAP motion system is removed from the root layout so the site follows a simpler WordPress-style presentation.

## Validation

- Confirm Poppins loads in the browser.
- Confirm computed H1/H2 font stacks use only the standard serif stack.
- Check homepage, service pages, packages, about and contact at desktop and mobile widths.
- Confirm no horizontal overflow or runtime errors.

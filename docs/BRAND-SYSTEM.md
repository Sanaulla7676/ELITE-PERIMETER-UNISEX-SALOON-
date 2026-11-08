# Elite Perimeter — Brand and WordPress-style system

Version: 2.0  
Status: Implemented locally  
Website stack: Next.js App Router  
Visual direction: Clean WordPress-inspired block theme

## Theme approach

This implementation uses familiar WordPress block-theme conventions: a simple site header, clear navigation, generous but consistent content spacing, readable content width, plain content sections, restrained borders, simple buttons and a straightforward footer. WordPress has many different themes; this is a clean block-theme interpretation, not a claim that WordPress has one universal look.

The existing salon information architecture is preserved: homepage, service categories, individual service pages, packages, guides, about, location and contact.

## Allowed typography

Only two font categories are used:

- **Poppins**: the only sans-serif font. Loaded in weights 400, 500, 600 and 700.
- **Georgia / Times New Roman / generic serif**: standard system serif fonts for H1–H4 and selected display details. No external serif font is loaded.

Do not add Playfair Display, Instrument Serif, Inter, Bodoni, Montserrat, Roboto, Lora or other font families.

## Typography hierarchy

| Element | Font | Weight |
|---|---|---:|
| H1–H4 | Georgia / Times New Roman / serif | 400 |
| H5–H6 | Poppins | 600 |
| Body paragraphs | Poppins | 400 |
| Navigation | Poppins | 500–600 |
| Buttons | Poppins | 600 |
| Forms and labels | Poppins | 400–600 |
| Captions and metadata | Poppins | 400–500 |

Body text targets 16px with comfortable 1.7–1.8 line-height. Keep UI text readable on mobile.

## Colour and surfaces

The original salon identity remains recognizable through Espresso, ivory and restrained sage accents. The layout itself uses a simple white page background, light-grey alternate blocks, dark neutral text and plain white cards.

| Token | Hex | Use |
|---|---|---|
| Page background | #FFFFFF | Main canvas |
| Alternate block | #F5F5F3 | Section background |
| Main text | #222222 | Headings and body |
| Secondary text | #5B5B5B | Supporting copy |
| Brand action | #272522 | Primary buttons |
| Sage accent | #59634F | Active state and emphasis |
| Border | #DEDEDE | Cards, controls and separators |
| Footer | #242424 | Footer background |

## Layout and component rules

- Header: white, one subtle bottom border, no decorative utility strip.
- Main content width: 1200px maximum; responsive gutters on smaller screens.
- Sections: consistent 52–72px vertical spacing.
- Hero: simple two-column cover block on desktop and stacked layout on mobile.
- Cards: white surface, 1px neutral border, 3px radius and no heavy shadows.
- Buttons: 44–48px height, 3px radius, Poppins 600 and sentence-case labels.
- Footer: charcoal background, clear columns and readable contact details.
- Mobile: stacked sections and no horizontal overflow; retain Call and Directions quick actions.
- Motion: minimal transitions only. The custom GSAP motion system is not mounted in the root layout.

## Files

- Font loading: src/app/layout.tsx
- Global layout and font tokens: src/app/globals.css
- Typography notes: docs/TYPOGRAPHY-DECISION.md
- Local backup before this update: docs/backup-before-wordpress-style-20261106/

## Important technical note

The website remains a Next.js application. Its appearance has been changed to a WordPress-inspired block theme; it has not been converted into a WordPress CMS or given WordPress administration, plugins or database functionality.

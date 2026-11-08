# Image & Video Asset Guide

## Current illustrative assets

These are stock/illustrative images, not photographs of Elite Perimeter, its premises, staff or customer results.

| File | Current placement | Replace with |
|---|---|---|
| public/images/hero-salon.jpg | Homepage hero and video poster | Real exterior/interior salon photograph |
| public/images/hair-service.jpg | Hair category | Real haircut / hair spa work |
| public/images/facial-service.jpg | Facial category and package hero | Real facial service photograph |
| public/images/beauty-editorial.jpg | Waxing/threading and editorial section | Real waxing/threading photograph |
| public/images/nail-service.jpg | Manicure/pedicure category | Real manicure/pedicure photograph |

Replace these files with owned/consented images using the same filenames to keep the page layout intact, or update src/components/Media.tsx and related Image references.

## Video slot

The homepage includes a video placement component. It shows a labelled placeholder until a real video URL is supplied.

Set this environment variable in Vercel or .env.local:

NEXT_PUBLIC_SALON_VIDEO_URL=https://your-domain.example/videos/elite-perimeter-salon-tour.mp4

Use a compressed MP4 in 16:9, with captions or a transcript. The clip should show the actual salon entrance, interiors, team (with permission) and service environment. Do not publish a generated or competitor video as footage of this salon.

## Recommended image checklist

- Storefront and signage.
- Salon reception and interior.
- Haircut / styling.
- Hair spa / treatment.
- Facial treatment room and process.
- Waxing and threading service setup.
- Manicure and pedicure.
- Combo/package display.
- Staff portraits only with permission.

Use descriptive filenames and alt text that accurately describe each image. Do not stuff location keywords into every image alt attribute.
## Added category-specific stock imagery

Two category images were added to avoid using the same visual for both waxing and threading:

- `public/images/waxing-service.jpg`: Pexels, Larysa Stratiichuk, “Close-up of Waxing Procedure in Salon”, Pexels photo ID 35103884. Pexels marks the download as free-use. The original file was resized to 1,100px wide and compressed for web delivery.
- `public/images/threading-service.jpg`: Pexels, Nataliya Vaitkevich, “A Side View of a Woman Having a Threading Procedure”, Pexels photo ID 8558244. Pexels marks the download as free-use. The original file was resized to 1,100px wide and compressed for web delivery.

Pexels source pages:
- https://www.pexels.com/photo/close-up-of-waxing-procedure-in-salon-35103884/
- https://www.pexels.com/photo/a-side-view-of-a-woman-having-a-threading-procedure-8558244/

These are category-representative stock images only. They must not be presented as photographs of Elite Perimeter staff, clients, premises or completed work.

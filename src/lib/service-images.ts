export const serviceHeroImageSlugs = [
  "whitening-facial-ullal",
  "korean-glass-facial-ullal",
  "gold-facial-ullal",
  "bridal-facial-ullal",
  "hyder-facial-ullal",
  "10-step-whitening-facial-ullal",
  "face-de-tan-ullal",
  "full-arms-waxing-ullal",
  "underarms-waxing-ullal",
  "half-legs-waxing-ullal",
  "full-legs-waxing-ullal",
  "chocolate-waxing-ullal",
  "eyebrow-threading-ullal",
  "upper-lip-threading-ullal",
  "chin-threading-ullal",
  "forehead-threading-ullal",
  "pedicure-ullal",
  "manicure-ullal",
  "lavender-pedi-spa-ullal",
  "lavender-mani-spa-ullal",
  "glass-shine-pedi-spa-ullal",
  "glass-shine-mani-spa-ullal",
] as const;

export type ServiceHeroImageSlug = (typeof serviceHeroImageSlugs)[number];

const serviceHeroImageSet: ReadonlySet<string> = new Set(serviceHeroImageSlugs);

// Use the closest available service visual. Category-level facial imagery
// is marked as illustrative until the salon supplies a dedicated treatment photo.
const serviceHeroImageOverrides: Record<string, string> = {
  "haircut-ullal": "/images/services/haircut-ullal-01-closeup.webp",
  "hair-spa-ullal": "/images/services/hair-spa-ullal-01-closeup.webp",
  "keratin-spa-ullal": "/images/beauty-editorial.jpg",
  "chocolate-facial-ullal": "/images/facial-service.jpg",
  "face-cleanup-ullal": "/images/facial-service.jpg",
};

const serviceProcessImageOverrides: Record<string, string> = {
  "haircut-ullal": "/images/services/haircut-ullal-02-process.webp",
  "hair-spa-ullal": "/images/services/hair-spa-ullal-02-process.webp",
};

export function getServiceHeroImage(slug: string): string | null {
  return serviceHeroImageOverrides[slug]
    ?? (serviceHeroImageSet.has(slug) ? `/images/services/${slug}.jpg` : null);
}

export function getServiceProcessImage(slug: string): string | null {
  return serviceProcessImageOverrides[slug] ?? null;
}

export const categoryRepresentativeSlugs: Record<string, string> = {
  hair: "haircut-ullal",
  facials: "whitening-facial-ullal",
  waxing: "full-arms-waxing-ullal",
  threading: "eyebrow-threading-ullal",
  nails: "pedicure-ullal",
};

export const categorySecondaryImageSlugs: Record<string, string> = {
  hair: "keratin-spa-ullal",
  facials: "gold-facial-ullal",
  waxing: "half-legs-waxing-ullal",
  threading: "upper-lip-threading-ullal",
  nails: "manicure-ullal",
};

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
const hasPermanentHttpsOrigin = (() => {
  if (!configuredSiteUrl || !/^https:\/\/[^/]+$/i.test(configuredSiteUrl)) return false;
  try {
    const hostname = new URL(configuredSiteUrl).hostname.toLowerCase();
    // The project-owned Vercel production alias is allowed as a temporary
    // canonical until the salon connects its own custom domain. Other
    // Vercel preview aliases, localhost and reserved test hosts stay blocked.
    const approvedVercelProductionAlias = hostname === "elite-perimeter-unisex-salon.vercel.app";
    const nonProductionHost =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "0.0.0.0" ||
      (hostname.endsWith(".vercel.app") && !approvedVercelProductionAlias) ||
      /\.(invalid|test|example)$/.test(hostname);
    return !nonProductionHost;
  } catch {
    return false;
  }
})();

if (process.env.NODE_ENV === "production" && !hasPermanentHttpsOrigin) {
  throw new Error("Set NEXT_PUBLIC_SITE_URL to the salon's permanent custom HTTPS domain before building for production. Localhost, preview and reserved test domains must never be published as canonical URLs.");
}

export const siteUrl = configuredSiteUrl || "http://localhost:3000";

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteUrl}/#business`,
    name: "Elite Perimeter Unisex Salon",
    description: "A unisex beauty parlour on Ullal Main Road in Jnana Ganga Nagar, Bengaluru, offering hair, facial, waxing, threading, manicure and pedicure services.",
    telephone: "+918088442684",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, No. 39, Ullal Main Road, Near Mangalore Independent PU College, Above HDFC Bank, Annapurneshwari Layout, Jnana Ganga Nagar",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560056",
      addressCountry: "IN",
    },
    areaServed: [{ "@type": "Place", name: "Ullal, Bengaluru" }, { "@type": "Place", name: "Jnana Ganga Nagar, Bengaluru" }],
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path),
    })),
  };
}

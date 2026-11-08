export type PackageEditorial = {
  primaryKeyword: string;
  h1: string;
  metaDescription: string;
  intro: string;
  decisionHeading: string;
  decisionCopy: string;
  beforeBooking: string[];
  serviceSlugs: string[];
  blogSlugs: string[];
};

export const packageEditorial: Record<string, PackageEditorial> = {
  "haircut-hair-spa": {
    primaryKeyword: "hair cut + hair spa package in Ullal",
    h1: "Hair Cut + Hair Spa Package in Ullal, Bengaluru",
    metaDescription: "Hair Cut + Hair Spa package in Ullal is printed at ₹999. Review the two listed services and confirm the current appointment availability.",
    intro: "Hair Cut + Hair Spa package in Ullal is the ₹999 combination listed on the Elite Perimeter Unisex Salon poster. It includes the two named hair services in one printed package.",
    decisionHeading: "Check the haircut plan and hair-spa process separately",
    decisionCopy: "Before booking, discuss the haircut length and shape you want, then ask which hair spa product and steps are included. The package price covers both services; it should not be treated as the standalone price of either one.",
    beforeBooking: ["Agree on the haircut length and shape before starting.", "Ask which hair spa product and steps are included.", "Confirm the combined appointment duration and current availability.", "Ask for separate prices if you do not want both services."],
    serviceSlugs: ["haircut-ullal", "hair-spa-ullal"],
    blogSlugs: ["prevent-hair-damage-after-salon-treatments", "mens-grooming-guide-ullal", "quick-beauty-fixes-busy-schedules"]
  },
  "cleanup-waxing-threading": {
    primaryKeyword: "cleanup + waxing + threading package in Ullal",
    h1: "Cleanup + Waxing + Threading Package in Ullal, Bengaluru",
    metaDescription: "Cleanup + Waxing + Threading package in Ullal is printed at ₹999. Check the full-arm, underarm, half-leg and facial-threading inclusions.",
    intro: "Cleanup + Waxing + Threading package in Ullal is printed at ₹999. The combination lists Cleanup, waxing for full arms, underarms and half legs, plus eyebrow and upper-lip threading.",
    decisionHeading: "Check the waxing areas and threading areas",
    decisionCopy: "This package is useful to compare only when you want the complete set of listed services. Confirm the exact waxing coverage and the two threading areas before booking; the poster does not list chin or forehead threading in this combination.",
    beforeBooking: ["Confirm waxing for full arms, underarms and half legs.", "Confirm threading for eyebrows and upper lip.", "Ask which cleanup steps and products are included.", "Confirm whether the salon currently offers the full combination."],
    serviceSlugs: ["face-cleanup-ullal", "full-arms-waxing-ullal", "underarms-waxing-ullal", "half-legs-waxing-ullal", "eyebrow-threading-ullal", "upper-lip-threading-ullal"],
    blogSlugs: ["threading-vs-waxing", "eyebrow-threading-first-visit", "salon-hygiene-checklist", "salon-care-on-a-budget-ullal"]
  },
  "chocolate-facial-det-an-threading": {
    primaryKeyword: "chocolate facial + face de-tan + threading package in Ullal",
    h1: "Chocolate Facial + Face De-Tan + Threading Package in Ullal",
    metaDescription: "Chocolate Facial + Face De-Tan + Threading package in Ullal is listed at ₹1,399. Review all four threading areas before booking.",
    intro: "Chocolate Facial + Face De-Tan + Threading package in Ullal is listed at ₹1,399. The menu includes eyebrow, upper-lip, chin and forehead threading with the two named facial services.",
    decisionHeading: "Confirm all four threading areas",
    decisionCopy: "This combination lists more threading areas than packages that include only eyebrows and upper lip. Confirm that eyebrows, upper lip, chin and forehead are all included, and ask which facial products and steps are used.",
    beforeBooking: ["Confirm Chocolate Facial and Face De-Tan steps.", "Confirm threading for eyebrows, upper lip, chin and forehead.", "Mention any known product sensitivities.", "Ask whether you need the full combination or only one service."],
    serviceSlugs: ["chocolate-facial-ullal", "face-de-tan-ullal", "eyebrow-threading-ullal", "upper-lip-threading-ullal", "chin-threading-ullal", "forehead-threading-ullal"],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "eyebrow-threading-first-visit", "salon-care-on-a-budget-ullal"]
  },
  "chocolate-facial-det-an-waxing": {
    primaryKeyword: "chocolate facial + face de-tan + waxing package in Ullal",
    h1: "Chocolate Facial + Face De-Tan + Waxing Package in Ullal",
    metaDescription: "Chocolate Facial + Face De-Tan + Waxing package in Ullal is listed at ₹1,399. Confirm the full arms, underarms and full legs coverage.",
    intro: "Chocolate Facial + Face De-Tan + Waxing package in Ullal is listed at ₹1,399. The printed waxing areas are full arms, underarms and full legs.",
    decisionHeading: "Compare this option with the threading combination",
    decisionCopy: "The two Chocolate Facial packages at ₹1,399 have different grooming add-ons. This option lists waxing for full arms, underarms and full legs; the other ₹1,399 option lists threading for eyebrows, upper lip, chin and forehead. Choose after checking which areas you actually need.",
    beforeBooking: ["Confirm the Chocolate Facial and Face De-Tan steps.", "Confirm full-arm, underarm and full-leg waxing coverage.", "Ask whether the selected waxing is regular or another menu option.", "Discuss previous skin sensitivity before the appointment."],
    serviceSlugs: ["chocolate-facial-ullal", "face-de-tan-ullal", "full-arms-waxing-ullal", "underarms-waxing-ullal", "full-legs-waxing-ullal"],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "threading-vs-waxing", "salon-care-on-a-budget-ullal"]
  },
  "chocolate-facial-mani-pedi": {
    primaryKeyword: "chocolate facial + de-tan + waxing + mani-pedi package in Ullal",
    h1: "Chocolate Facial + De-Tan + Waxing + Mani-Pedi Package in Ullal",
    metaDescription: "Chocolate Facial + De-Tan + Waxing + Mani-Pedi package in Ullal is listed at ₹1,799. Check the waxing areas, manicure and pedicure inclusions.",
    intro: "Chocolate Facial + De-Tan + Waxing + Mani-Pedi package in Ullal is listed at ₹1,799. The waxing areas are full arms, underarms and half legs.",
    decisionHeading: "Check whether half-leg waxing matches your plan",
    decisionCopy: "This package includes manicure and pedicure but lists half legs rather than full legs. Confirm the waxing boundary and ask what the manicure and pedicure appointments include before choosing the combination.",
    beforeBooking: ["Confirm full arms, underarms and half legs waxing.", "Ask which Manicure and Pedicure steps are included.", "Confirm Chocolate Facial and Face De-Tan products.", "Ask about tool preparation and aftercare for hand and foot care."],
    serviceSlugs: ["chocolate-facial-ullal", "face-de-tan-ullal", "full-arms-waxing-ullal", "underarms-waxing-ullal", "half-legs-waxing-ullal", "manicure-ullal", "pedicure-ullal"],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "threading-vs-waxing", "make-manicure-pedicure-last-longer", "salon-care-on-a-budget-ullal"]
  },
  "complete-chocolate-beauty": {
    primaryKeyword: "complete chocolate facial beauty package in Ullal",
    h1: "Complete Chocolate Facial Beauty Package in Ullal",
    metaDescription: "Complete Chocolate Facial Beauty package in Ullal is listed at ₹2,299. Review the facial, de-tan, waxing, threading, mani-pedi and hair inclusions.",
    intro: "Complete Chocolate Facial Beauty package in Ullal is listed at ₹2,299. It combines Chocolate Facial, Face De-Tan, selected waxing, eyebrow and upper-lip threading, Pedicure, Manicure, Hair Cut and Keratin Spa.",
    decisionHeading: "This is a multi-service visit: confirm the complete sequence",
    decisionCopy: "The package contains several services across skin, hair removal, hands and feet and hair care. Ask the salon to confirm the planned sequence, the appointment time and whether every service is available on the same visit.",
    beforeBooking: ["Confirm full arms, underarms and half legs waxing.", "Confirm eyebrow and upper-lip threading.", "Ask which Manicure, Pedicure and Keratin Spa processes are included.", "Confirm the Hair Cut plan, appointment sequence and total duration."],
    serviceSlugs: ["chocolate-facial-ullal", "face-de-tan-ullal", "full-arms-waxing-ullal", "underarms-waxing-ullal", "half-legs-waxing-ullal", "eyebrow-threading-ullal", "upper-lip-threading-ullal", "pedicure-ullal", "manicure-ullal", "haircut-ullal", "keratin-spa-ullal"],
    blogSlugs: ["prevent-hair-damage-after-salon-treatments", "choosing-the-right-facial-for-your-skin-type", "threading-vs-waxing", "make-manicure-pedicure-last-longer", "salon-care-on-a-budget-ullal"]
  },
  "whitening-facial-det-an-threading": {
    primaryKeyword: "whitening facial + face de-tan + threading package in Ullal",
    h1: "Whitening Facial + Face De-Tan + Threading Package in Ullal",
    metaDescription: "Whitening Facial + Face De-Tan + Threading package in Ullal is listed at ₹1,499. Includes eyebrows, upper lip, chin and forehead threading.",
    intro: "Whitening Facial + Face De-Tan + Threading package in Ullal is listed at ₹1,499. The poster includes eyebrow, upper-lip, chin and forehead threading.",
    decisionHeading: "Confirm what the facial name means and which areas are included",
    decisionCopy: "Ask for the Whitening Facial product and step details rather than assuming a promised skin-tone result. Confirm all four threading areas and ask whether the salon can explain the full appointment sequence.",
    beforeBooking: ["Ask about Whitening Facial products and steps.", "Confirm Face De-Tan inclusion.", "Confirm eyebrows, upper lip, chin and forehead threading.", "Mention known product sensitivity before the service."],
    serviceSlugs: ["whitening-facial-ullal", "face-de-tan-ullal", "eyebrow-threading-ullal", "upper-lip-threading-ullal", "chin-threading-ullal", "forehead-threading-ullal"],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "eyebrow-threading-first-visit", "salon-care-on-a-budget-ullal"]
  },
  "whitening-facial-det-an-waxing": {
    primaryKeyword: "whitening facial + face de-tan + waxing package in Ullal",
    h1: "Whitening Facial + Face De-Tan + Waxing Package in Ullal",
    metaDescription: "Whitening Facial + Face De-Tan + Waxing package in Ullal is listed at ₹1,499. Check the full arms, underarms and full legs inclusions.",
    intro: "Whitening Facial + Face De-Tan + Waxing package in Ullal is listed at ₹1,499. The waxing coverage includes full arms, underarms and full legs.",
    decisionHeading: "Compare it with the threading version at the same price",
    decisionCopy: "The ₹1,499 Whitening Facial combinations have different add-ons. This version lists full arms, underarms and full legs waxing; the other version lists threading for eyebrows, upper lip, chin and forehead. Choose by the service areas you need.",
    beforeBooking: ["Ask which Whitening Facial products and steps are included.", "Confirm Face De-Tan.", "Confirm full arms, underarms and full legs waxing.", "Discuss previous skin sensitivity and aftercare."],
    serviceSlugs: ["whitening-facial-ullal", "face-de-tan-ullal", "full-arms-waxing-ullal", "underarms-waxing-ullal", "full-legs-waxing-ullal"],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "threading-vs-waxing", "salon-care-on-a-budget-ullal"]
  },
  "whitening-facial-mani-pedi": {
    primaryKeyword: "whitening facial + de-tan + waxing + mani-pedi package in Ullal",
    h1: "Whitening Facial + De-Tan + Waxing + Mani-Pedi Package in Ullal",
    metaDescription: "Whitening Facial + De-Tan + Waxing + Mani-Pedi package in Ullal is listed at ₹1,899. Check the half-leg waxing, manicure and pedicure inclusions.",
    intro: "Whitening Facial + De-Tan + Waxing + Mani-Pedi package in Ullal is listed at ₹1,899. The waxing inclusion lists full arms, underarms and half legs.",
    decisionHeading: "Compare the extra hand and foot services with the waxing coverage",
    decisionCopy: "This combination adds manicure and pedicure to the facial, de-tan and waxing services. It lists half-leg waxing, not full-leg waxing. Confirm the coverage and the exact hand and foot care steps before booking.",
    beforeBooking: ["Confirm full arms, underarms and half legs waxing.", "Ask what the Manicure and Pedicure include.", "Confirm facial products and steps.", "Ask about tool preparation and aftercare."],
    serviceSlugs: ["whitening-facial-ullal", "face-de-tan-ullal", "full-arms-waxing-ullal", "underarms-waxing-ullal", "half-legs-waxing-ullal", "manicure-ullal", "pedicure-ullal"],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "make-manicure-pedicure-last-longer", "salon-care-on-a-budget-ullal"]
  },
  "complete-whitening-beauty": {
    primaryKeyword: "complete whitening facial beauty package in Ullal",
    h1: "Complete Whitening Facial Beauty Package in Ullal",
    metaDescription: "Complete Whitening Facial Beauty package in Ullal is listed at ₹2,399. Review all facial, waxing, threading, mani-pedi and hair inclusions.",
    intro: "Complete Whitening Facial Beauty package in Ullal is listed at ₹2,399. It combines Whitening Facial, Face De-Tan, waxing, eyebrow and upper-lip threading, Manicure, Pedicure, Hair Cut and Keratin Spa.",
    decisionHeading: "Plan the full appointment before choosing the largest regular combination",
    decisionCopy: "This package brings together several appointment types. Confirm the planned sequence and total time with the salon, then check that you want every listed service. The package price covers the full combination.",
    beforeBooking: ["Confirm full arms, underarms and half legs waxing.", "Confirm eyebrow and upper-lip threading.", "Ask which Manicure, Pedicure and Keratin Spa processes are included.", "Confirm the haircut plan and total appointment duration."],
    serviceSlugs: ["whitening-facial-ullal", "face-de-tan-ullal", "full-arms-waxing-ullal", "underarms-waxing-ullal", "half-legs-waxing-ullal", "eyebrow-threading-ullal", "upper-lip-threading-ullal", "manicure-ullal", "pedicure-ullal", "haircut-ullal", "keratin-spa-ullal"],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "threading-vs-waxing", "make-manicure-pedicure-last-longer", "prevent-hair-damage-after-salon-treatments", "salon-care-on-a-budget-ullal"]
  },
  "korean-glass-facial-premium": {
    primaryKeyword: "Korean Glass Facial premium package in Ullal",
    h1: "Korean Glass Facial Premium Package in Ullal",
    metaDescription: "Korean Glass Facial premium package in Ullal is listed at ₹3,499. Review all eight printed inclusions and confirm Botox Spa details.",
    intro: "Korean Glass Facial premium package in Ullal is listed at ₹3,499. The combination includes the facial, Face De-Tan, full arms/underarms/full legs waxing, eyebrow and upper-lip threading, Lavender Mani Spa, Lavender Pedi Spa, Hair Cut and Botox Spa.",
    decisionHeading: "Confirm every premium add-on before booking",
    decisionCopy: "This is a multi-service premium combination. The poster uses the name Botox Spa without describing it, so confirm exactly what the add-on is before accepting the package. Ask for the facial steps, waxing coverage and mani-pedi inclusions as well.",
    beforeBooking: ["Ask which Korean Glass Facial products and steps are included.", "Confirm full arms, underarms and full legs waxing.", "Confirm eyebrow and upper-lip threading.", "Verify the exact Botox Spa service and total appointment time."],
    serviceSlugs: ["korean-glass-facial-ullal", "face-de-tan-ullal", "full-arms-waxing-ullal", "underarms-waxing-ullal", "full-legs-waxing-ullal", "eyebrow-threading-ullal", "upper-lip-threading-ullal", "lavender-mani-spa-ullal", "lavender-pedi-spa-ullal", "haircut-ullal", "botox-spa-ullal"],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "natural-and-organic-beauty-treatments", "salon-care-on-a-budget-ullal"]
  },
  "10-step-whitening-facial-premium": {
    primaryKeyword: "10-step whitening facial premium package in Ullal",
    h1: "10-Step Whitening Facial Premium Package in Ullal",
    metaDescription: "10-Step Whitening Facial premium package in Ullal is listed at ₹3,499. Ask for the ten steps and confirm every printed add-on.",
    intro: "10-Step Whitening Facial premium package in Ullal is listed at ₹3,499. The menu includes Face De-Tan, full arms/underarms/full legs waxing, eyebrow and upper-lip threading, Lavender Mani Spa, Lavender Pedi Spa, Hair Cut and Botox Spa.",
    decisionHeading: "Request the ten-step list and verify the additional service",
    decisionCopy: "The poster names a ten-step facial but does not enumerate the steps. Ask the salon for the current step list and product names. Also confirm what Botox Spa means before you rely on it as a package inclusion.",
    beforeBooking: ["Request the names of all ten facial steps.", "Confirm the facial products and Face De-Tan.", "Confirm waxing areas and threading areas.", "Verify Botox Spa and the full appointment duration."],
    serviceSlugs: ["10-step-whitening-facial-ullal", "whitening-facial-ullal", "face-de-tan-ullal", "full-arms-waxing-ullal", "underarms-waxing-ullal", "full-legs-waxing-ullal", "eyebrow-threading-ullal", "upper-lip-threading-ullal", "lavender-mani-spa-ullal", "lavender-pedi-spa-ullal", "haircut-ullal", "botox-spa-ullal"],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "salon-care-on-a-budget-ullal", "natural-and-organic-beauty-treatments"]
  },
  "24k-gold-facial-premium": {
    primaryKeyword: "Luxury 24K Gold Facial premium package in Ullal",
    h1: "Luxury 24K Gold Facial Premium Package in Ullal",
    metaDescription: "Luxury 24K Gold Facial premium package in Ullal is listed at ₹4,499. Check chocolate waxing, threading, Glass Shine mani-pedi and add-ons.",
    intro: "Luxury 24K Gold Facial premium package in Ullal is listed at ₹4,499. The package includes Face De-Tan, Chocolate Waxing for full arms, underarms and full legs, eyebrow and upper-lip threading, Glass Shine Pedi Spa, Glass Shine Mani Spa, Hair Cut and Botox Spa.",
    decisionHeading: "Understand the complete premium combination",
    decisionCopy: "The ₹4,499 figure is not a standalone 24K Gold Facial rate. Check the full service list and ask the salon to explain the facial product, Glass Shine hand and foot services and the Botox Spa item before booking.",
    beforeBooking: ["Ask about the 24K Gold Facial process and products.", "Confirm Chocolate Waxing coverage for full arms, underarms and full legs.", "Confirm the Glass Shine Mani Spa and Pedi Spa inclusions.", "Verify Botox Spa and ask for the total appointment duration."],
    serviceSlugs: ["gold-facial-ullal", "face-de-tan-ullal", "chocolate-waxing-ullal", "eyebrow-threading-ullal", "upper-lip-threading-ullal", "glass-shine-pedi-spa-ullal", "glass-shine-mani-spa-ullal", "haircut-ullal", "botox-spa-ullal"],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "make-manicure-pedicure-last-longer", "bridal-beauty-prep-ullal"]
  },
  "bridal-hyder-facial-premium": {
    primaryKeyword: "Bridal Facial / Hyder Facial premium package in Ullal",
    h1: "Bridal Facial / Hyder Facial Premium Package in Ullal",
    metaDescription: "Bridal Facial / Hyder Facial premium package in Ullal is printed at ₹4,999. Confirm the facial name and review all waxing, threading and spa inclusions.",
    intro: "Bridal Facial / Hyder Facial premium package in Ullal is the ₹4,999 combination printed on the supplied poster. The facial name must be confirmed with the salon before booking.",
    decisionHeading: "Resolve the facial name before planning bridal services",
    decisionCopy: "The poster presents Bridal Facial / Hyder Facial as one package line. Ask which exact facial is currently offered and which products and steps it includes. The package includes Face De-Tan, Chocolate Waxing, threading, Glass Shine mani-pedi, Hair Cut and Botox Spa; the poster does not list bridal makeup or trials.",
    beforeBooking: ["Confirm whether the facial is called Bridal Facial or Hyder Facial.", "Review the full waxing, threading and Glass Shine inclusions.", "Verify the Botox Spa service name and process.", "Ask about appointment timing and any service not listed on the poster, such as makeup."],
    serviceSlugs: ["bridal-facial-ullal", "hyder-facial-ullal", "face-de-tan-ullal", "chocolate-waxing-ullal", "eyebrow-threading-ullal", "upper-lip-threading-ullal", "glass-shine-pedi-spa-ullal", "glass-shine-mani-spa-ullal", "haircut-ullal", "botox-spa-ullal"],
    blogSlugs: ["bridal-beauty-prep-ullal", "choosing-the-right-facial-for-your-skin-type", "salon-care-on-a-budget-ullal"]
  }
};

export function getPackageEditorial(slug: string) {
  return packageEditorial[slug];
}

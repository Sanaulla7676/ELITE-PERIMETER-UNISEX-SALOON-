export const site = {
  name: "Elite Perimeter Unisex Salon",
  shortName: "Elite Perimeter",
  description:
    "Unisex salon in Ullal, Bengaluru, offering hair, facial, waxing, threading, manicure and pedicure services at Elite Perimeter on Ullal Main Road.",
  phoneDisplay: "080884 42684",
  phoneE164: "+918088442684",
  address: {
    street: "1st Floor, No. 39, Ullal Main Road, Near Mangalore Independent PU College, Above HDFC Bank, Annapurneshwari Layout, Jnana Ganga Nagar",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560056",
    country: "IN",
  },
  hours: [
    { day: "Monday", opens: "09:00", closes: "23:30" },
    { day: "Tuesday", opens: "09:00", closes: "23:30" },
    { day: "Wednesday", opens: "09:00", closes: "23:30" },
    { day: "Thursday", opens: "09:00", closes: "23:30" },
    { day: "Friday", opens: "09:00", closes: "23:30" },
    { day: "Saturday", opens: "09:00", closes: "23:30" },
    { day: "Sunday", opens: "09:00", closes: "21:30" },
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=1st+Floor+No+39+Ullal+Main+Road+Jnana+Ganga+Nagar+Bengaluru+560056",
};

export type ServiceCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  primaryKeyword: string;
  description: string;
  serviceSlugs: string[];
};

export type Service = {
  slug: string;
  category: string;
  name: string;
  h1: string;
  primaryKeyword: string;
  supportingTerms: string[];
  metaDescription: string;
  intro: string;
  detail: string;
  beforeBooking: string[];
  menuNote: string;
  related: string[];
  verifyBeforePublishing?: boolean;
};

export const categories: ServiceCategory[] = [
  {
    slug: "hair",
    title: "Hair services",
    eyebrow: "Cuts, care & smoothing",
    primaryKeyword: "hair salon in Ullal",
    description:
      "Hair salon in Ullal: explore haircut, hair spa and hair-treatment services at Elite Perimeter Unisex Salon on Ullal Main Road in Jnana Ganga Nagar, Bengaluru.",
    serviceSlugs: ["haircut-ullal", "hair-spa-ullal", "keratin-spa-ullal", "botox-spa-ullal"],
  },
  {
    slug: "facials",
    title: "Facial & skincare",
    eyebrow: "Facials & skin care",
    primaryKeyword: "facial salon in Ullal",
    description:
      "Facial salon in Ullal: compare facial, cleanup and de-tan options at Elite Perimeter Unisex Salon near Ullal Main Road, Jnana Ganga Nagar, Bengaluru.",
    serviceSlugs: [
      "face-cleanup-ullal", "chocolate-facial-ullal", "whitening-facial-ullal",
      "korean-glass-facial-ullal", "gold-facial-ullal", "bridal-facial-ullal",
      "hyder-facial-ullal", "10-step-whitening-facial-ullal", "face-de-tan-ullal",
    ],
  },
  {
    slug: "waxing",
    title: "Waxing",
    eyebrow: "Body grooming",
    primaryKeyword: "waxing salon in Ullal",
    description:
      "Waxing salon in Ullal: find full arms, underarms, half legs, full legs and chocolate waxing services at Elite Perimeter Unisex Salon, Bengaluru.",
    serviceSlugs: [
      "full-arms-waxing-ullal", "underarms-waxing-ullal", "half-legs-waxing-ullal",
      "full-legs-waxing-ullal", "chocolate-waxing-ullal",
    ],
  },
  {
    slug: "threading",
    title: "Threading",
    eyebrow: "Facial grooming",
    primaryKeyword: "threading salon in Ullal",
    description:
      "Threading salon in Ullal: browse eyebrow, upper lip, chin and forehead threading services at Elite Perimeter Unisex Salon on Ullal Main Road.",
    serviceSlugs: [
      "eyebrow-threading-ullal", "upper-lip-threading-ullal", "chin-threading-ullal", "forehead-threading-ullal",
    ],
  },
  {
    slug: "nails",
    title: "Manicure & pedicure",
    eyebrow: "Hand & foot care",
    primaryKeyword: "manicure and pedicure in Ullal",
    description:
      "Manicure and pedicure in Ullal: explore standard, Lavender and Glass Shine hand and foot care at Elite Perimeter Unisex Salon, Bengaluru.",
    serviceSlugs: [
      "pedicure-ullal", "manicure-ullal", "lavender-pedi-spa-ullal", "lavender-mani-spa-ullal",
      "glass-shine-pedi-spa-ullal", "glass-shine-mani-spa-ullal",
    ],
  },
];

export const services: Service[] = [
  {
    slug: "haircut-ullal", category: "hair", name: "Hair Cut", h1: "Haircut in Ullal, Bengaluru",
    primaryKeyword: "haircut in Ullal",
    supportingTerms: ["unisex haircut", "hair salon on Ullal Main Road", "men's haircut", "women's haircut", "haircut in Jnana Ganga Nagar", "local hairdresser", "haircut near Mangalore Independent PU College"],
    metaDescription: "Looking for a haircut in Ullal? Visit Elite Perimeter Unisex Salon on Ullal Main Road for haircut services for men and women. Call to confirm rates.",
    intro: "Haircut in Ullal is available at Elite Perimeter Unisex Salon, located on Ullal Main Road in Jnana Ganga Nagar, Bengaluru. The salon offers haircut appointments for customers looking for a local unisex hair salon for men and women.",
    detail: "A good haircut starts with a clear conversation about the length, shape and finish you want. Bring a reference photo if you have one, and tell the stylist how you normally maintain your hair. This helps you discuss a style that fits your preference and routine rather than choosing from a trend alone.",
    beforeBooking: ["Tell the stylist the length you want to keep or remove.", "Share a reference image if you have a particular style in mind.", "Confirm the current haircut rate and whether wash or styling is included."],
    menuNote: "The printed salon menu lists Hair Cut + Hair Spa together at ₹999. It does not show a separate standalone haircut rate; confirm the individual price with the salon.",
    related: ["hair-spa-ullal", "keratin-spa-ullal", "botox-spa-ullal"],
  },
  {
    slug: "hair-spa-ullal", category: "hair", name: "Hair Spa", h1: "Hair Spa in Ullal, Bengaluru",
    primaryKeyword: "hair spa in Ullal",
    supportingTerms: ["hair spa near Ullal Main Road", "unisex hair spa", "hair care salon Jnana Ganga Nagar", "hair conditioning service", "hair treatment in Bengaluru", "hair spa near Nagarbhavi", "salon hair care"],
    metaDescription: "Explore hair spa services in Ullal at Elite Perimeter Unisex Salon, Jnana Ganga Nagar. Ask the team about the treatment steps and current rate.",
    intro: "Hair spa in Ullal is offered at Elite Perimeter Unisex Salon on Ullal Main Road, near Mangalore Independent PU College. Visit the local hair care salon to discuss the available hair spa option and the process suited to your needs.",
    detail: "Hair spa services can differ by product, process and hair concern. Before starting, ask the stylist what the session includes, how long it takes and what aftercare is recommended for the specific product being used. The salon menu also lists a combined Hair Cut + Hair Spa package.",
    beforeBooking: ["Ask which hair spa product or treatment option is being used.", "Explain any colouring, smoothing or other recent hair service.", "Confirm session duration, aftercare and the current standalone price."],
    menuNote: "The printed menu lists Hair Cut + Hair Spa at ₹999 as a combo. A separate hair spa price is not printed.",
    related: ["haircut-ullal", "keratin-spa-ullal", "botox-spa-ullal"],
  },
  {
    slug: "keratin-spa-ullal", category: "hair", name: "Keratin Spa", h1: "Keratin Hair Treatment in Ullal",
    primaryKeyword: "keratin hair treatment in Ullal",
    supportingTerms: ["keratin spa Ullal", "hair smoothing salon", "keratin treatment Bengaluru", "hair treatment Ullal Main Road", "unisex hair salon", "hair care Jnana Ganga Nagar", "keratin service near Nagarbhavi"],
    metaDescription: "Ask about keratin hair treatment in Ullal at Elite Perimeter Unisex Salon. Discuss the product, process, suitability and aftercare before booking.",
    intro: "Keratin hair treatment in Ullal is listed on the Elite Perimeter Unisex Salon menu as Keratin Spa. The salon is on Ullal Main Road in Jnana Ganga Nagar, Bengaluru; contact the team to confirm the exact treatment and process.",
    detail: "Keratin-labelled salon services can refer to different products and methods. Do not assume that every keratin spa is the same as a long-duration smoothing service. Ask the stylist to explain the product, expected finish, application steps and home-care requirements before you decide.",
    beforeBooking: ["Confirm whether the service is a conditioning spa or a smoothing treatment.", "Ask which product and process are included.", "Discuss previous colour, chemical treatments and aftercare with the stylist."],
    menuNote: "No standalone Keratin Spa price is shown on the supplied posters. Confirm the exact service and price before booking.",
    related: ["hair-spa-ullal", "haircut-ullal", "botox-spa-ullal"],
  },
  {
    slug: "botox-spa-ullal", category: "hair", name: "Botox Spa", h1: "Botox Spa in Ullal",
    primaryKeyword: "Botox Spa in Ullal",
    supportingTerms: ["salon spa service Ullal", "hair care salon Bengaluru", "beauty parlour Ullal Main Road", "unisex salon Jnana Ganga Nagar", "salon treatment near Nagarbhavi"],
    metaDescription: "The salon menu lists Botox Spa. Contact Elite Perimeter Unisex Salon in Ullal to confirm the exact treatment, ingredients and current price.",
    intro: "Botox Spa in Ullal appears on the supplied Elite Perimeter Unisex Salon package menu. The poster does not explain whether this is a hair treatment or another spa service, so confirm the exact service details with the salon before visiting.",
    detail: "The word Botox is used in different beauty-service names and should not be confused with an injectable medical procedure. This page intentionally avoids making claims about ingredients, results or treatment type until the salon confirms what the menu item includes.",
    beforeBooking: ["Confirm the exact name and purpose of the spa service.", "Ask which product or procedure is used and who performs it.", "Confirm suitability, aftercare, duration and the current rate."],
    menuNote: "This name is transcribed from the poster. Confirm the service details before publishing this page for search indexing.",
    related: ["hair-spa-ullal", "keratin-spa-ullal"], verifyBeforePublishing: true,
  },
  {
    slug: "face-cleanup-ullal", category: "facials", name: "Cleanup", h1: "Face Cleanup in Ullal, Bengaluru",
    primaryKeyword: "face cleanup in Ullal",
    supportingTerms: ["cleanup salon Ullal", "face cleansing service", "beauty parlour Jnana Ganga Nagar", "facial cleanup Bengaluru", "skin care salon Ullal Main Road", "cleanup near Nagarbhavi", "unisex beauty parlour"],
    metaDescription: "Book or enquire about a face cleanup in Ullal at Elite Perimeter Unisex Salon, Jnana Ganga Nagar. Ask about the steps and current price.",
    intro: "Face cleanup in Ullal is listed among the beauty services at Elite Perimeter Unisex Salon, on Ullal Main Road in Jnana Ganga Nagar. Contact the salon to understand the cleanup steps and choose an option appropriate for your preferences.",
    detail: "A cleanup appointment is a salon skincare service. The exact products and steps can vary, so ask what is included before the session begins. Share any product sensitivities or skin-related concerns directly with the salon professional and confirm whether the service is suitable for you.",
    beforeBooking: ["Ask which cleansing and finishing steps are included.", "Mention any known product sensitivities before the service.", "Confirm whether threading or another add-on is included or charged separately."],
    menuNote: "Cleanup appears in a ₹999 combo with waxing and threading. No standalone cleanup price is printed.",
    related: ["chocolate-facial-ullal", "whitening-facial-ullal", "face-de-tan-ullal"],
  },
  {
    slug: "chocolate-facial-ullal", category: "facials", name: "Chocolate Facial", h1: "Chocolate Facial in Ullal",
    primaryKeyword: "chocolate facial in Ullal",
    supportingTerms: ["chocolate facial Bengaluru", "facial salon Ullal Main Road", "beauty parlour Jnana Ganga Nagar", "chocolate skin care facial", "facial near Mangalore Independent PU College", "unisex facial service", "premium facial Ullal"],
    metaDescription: "Explore a chocolate facial in Ullal at Elite Perimeter Unisex Salon. Ask about the products, facial steps and current standalone price.",
    intro: "Chocolate facial in Ullal is available as a named option in the Elite Perimeter Unisex Salon menu. The salon is located on Ullal Main Road, Jnana Ganga Nagar, Bengaluru, and also lists chocolate facial combinations with de-tan and other services.",
    detail: "The salon's printed menu uses the name Chocolate Facial. Before booking, ask which facial products are used, what steps are included and whether the service is offered as a standalone appointment or as part of a package. The menu lists several package combinations.",
    beforeBooking: ["Confirm the facial product range and steps included.", "Tell the salon about any known product sensitivities.", "Ask whether you are booking the standalone facial or a package."],
    menuNote: "Chocolate Facial is included in packages priced at ₹1,399, ₹1,799 and ₹2,299. No standalone facial price is printed.",
    related: ["face-cleanup-ullal", "face-de-tan-ullal", "whitening-facial-ullal"],
  },
  {
    slug: "whitening-facial-ullal", category: "facials", name: "Whitening Facial", h1: "Whitening Facial in Ullal",
    primaryKeyword: "whitening facial in Ullal",
    supportingTerms: ["brightening facial Ullal", "facial salon Bengaluru", "beauty parlour Ullal Main Road", "skin care Jnana Ganga Nagar", "face facial near Nagarbhavi", "unisex facial service", "facial treatment Bengaluru 560056"],
    metaDescription: "Ask about a whitening facial in Ullal at Elite Perimeter Unisex Salon. Confirm the facial steps, products and current price before booking.",
    intro: "Whitening facial in Ullal is one of the facial options listed by Elite Perimeter Unisex Salon in Bengaluru. The salon is on Ullal Main Road near Mangalore Independent PU College; ask the team about the exact facial steps and products.",
    detail: "The menu uses the term Whitening Facial. The website also uses the more descriptive phrase brightening facial when explaining the service, without promising a particular skin-tone change or guaranteed result. Ask the salon to explain the product and process before choosing a treatment.",
    beforeBooking: ["Ask for the exact product name and facial steps.", "Discuss any known sensitivities with the salon professional.", "Confirm whether de-tan or threading is included or separate."],
    menuNote: "Whitening Facial appears in packages priced at ₹1,499, ₹1,899 and ₹2,399, and in a premium 10-step package at ₹3,499. No standalone price is printed.",
    related: ["10-step-whitening-facial-ullal", "face-cleanup-ullal", "face-de-tan-ullal"],
  },
  {
    slug: "korean-glass-facial-ullal", category: "facials", name: "Korean Glass Facial", h1: "Korean Glass Facial in Ullal",
    primaryKeyword: "Korean Glass Facial in Ullal",
    supportingTerms: ["Korean facial Bengaluru", "glass skin facial Ullal", "Korean skincare facial", "premium facial Jnana Ganga Nagar", "facial salon Ullal Main Road", "beauty parlour Bengaluru 560056", "Korean facial near Nagarbhavi"],
    metaDescription: "Discover the Korean Glass Facial package at Elite Perimeter Unisex Salon in Ullal. Check the included services and confirm current availability.",
    intro: "Korean Glass Facial in Ullal is listed in the premium menu at Elite Perimeter Unisex Salon, Jnana Ganga Nagar. The salon's ₹3,499 package combines the named facial with additional grooming and spa services.",
    detail: "The phrase Korean Glass Facial describes the salon's menu item and a glass-skin-inspired beauty service. The package also lists face de-tan, waxing, threading, Lavender Mani Spa, Lavender Pedi Spa, Hair Cut and Botox Spa. Confirm the exact steps and any service substitutions before booking.",
    beforeBooking: ["Ask which facial products and steps are included.", "Confirm all package add-ons and the body areas included in waxing.", "Verify the exact meaning of Botox Spa before accepting that add-on."],
    menuNote: "The printed Korean Glass Facial premium package is ₹3,499. No standalone Korean Glass Facial price is shown.",
    related: ["whitening-facial-ullal", "gold-facial-ullal", "face-de-tan-ullal"],
  },
  {
    slug: "gold-facial-ullal", category: "facials", name: "Luxury 24K Gold Facial", h1: "24K Gold Facial in Ullal",
    primaryKeyword: "24K Gold Facial in Ullal",
    supportingTerms: ["gold facial Bengaluru", "luxury facial Ullal", "24 carat gold facial", "facial salon Jnana Ganga Nagar", "beauty parlour Ullal Main Road", "premium facial near Nagarbhavi", "gold facial Bengaluru 560056"],
    metaDescription: "Explore the Luxury 24K Gold Facial package at Elite Perimeter Unisex Salon in Ullal. Confirm the treatment steps and availability.",
    intro: "24K Gold Facial in Ullal is a named premium facial option at Elite Perimeter Unisex Salon on Ullal Main Road, Bengaluru. The salon menu lists it in a package with de-tan, chocolate waxing, threading and Glass Shine hand and foot spa services.",
    detail: "The printed menu calls this service Luxury 24K Gold Facial. Ask the salon which products are used and what the facial session includes. The package price covers multiple services, so confirm whether you want the complete package or are enquiring about the facial alone.",
    beforeBooking: ["Confirm the facial product and steps with the salon.", "Check the package's waxing areas and threading inclusions.", "Ask whether a standalone 24K Gold Facial appointment is available."],
    menuNote: "The printed Luxury 24K Gold Facial package is ₹4,499. No standalone facial price is provided.",
    related: ["korean-glass-facial-ullal", "bridal-facial-ullal", "glass-shine-pedi-spa-ullal"],
  },
  {
    slug: "bridal-facial-ullal", category: "facials", name: "Bridal Facial", h1: "Bridal Facial in Ullal, Bengaluru",
    primaryKeyword: "bridal facial in Ullal",
    supportingTerms: ["pre-bridal facial Bengaluru", "wedding facial Ullal", "bridal skincare salon", "beauty parlour Jnana Ganga Nagar", "bridal beauty services Ullal Main Road", "facial for wedding preparation", "bridal facial near Nagarbhavi"],
    metaDescription: "Ask about bridal facial services at Elite Perimeter Unisex Salon in Ullal. Review the printed package inclusions and confirm the treatment details.",
    intro: "Bridal facial in Ullal is listed in the premium package menu at Elite Perimeter Unisex Salon, Jnana Ganga Nagar, Bengaluru. The poster presents Bridal Facial / Hyder Facial as a combined menu option, so confirm the exact facial name and inclusions.",
    detail: "For wedding preparation, plan the appointment early enough to discuss products, steps and timing with the salon. Do not assume a facial is suitable immediately before an event without checking the products and any personal sensitivities with the salon professional.",
    beforeBooking: ["Confirm whether the booked facial is Bridal Facial or the poster's Hyder Facial option.", "Ask about products, steps and suggested appointment timing.", "Review waxing, threading and spa add-ons included in the package."],
    menuNote: "The poster lists one Bridal Facial / Hyder Facial premium package at ₹4,999. It does not provide a standalone Bridal Facial price.",
    related: ["hyder-facial-ullal", "gold-facial-ullal", "10-step-whitening-facial-ullal"],
  },
  {
    slug: "hyder-facial-ullal", category: "facials", name: "Hyder Facial", h1: "Hyder Facial in Ullal",
    primaryKeyword: "Hyder Facial in Ullal",
    supportingTerms: ["facial salon Ullal", "premium facial Bengaluru", "bridal facial Jnana Ganga Nagar", "beauty parlour Ullal Main Road", "facial treatment near Nagarbhavi"],
    metaDescription: "The poster lists a Hyder Facial option. Contact Elite Perimeter Unisex Salon in Ullal to confirm the correct treatment name and package details.",
    intro: "Hyder Facial in Ullal is the wording visible on the supplied Elite Perimeter Unisex Salon poster. The same package line reads Bridal Facial / Hyder Facial, so the exact treatment name needs confirmation before this page is published for search indexing.",
    detail: "This page deliberately preserves the printed wording instead of guessing that it means Hydra Facial or another treatment. Ask the salon to confirm the correct name, products, steps and whether it is the same package as the Bridal Facial option.",
    beforeBooking: ["Confirm the correct service name: Hyder, Hydra or another term.", "Ask which treatment steps and products are included.", "Confirm whether the ₹4,999 package covers the selected facial and all listed add-ons."],
    menuNote: "The poster shows Bridal Facial / Hyder Facial at ₹4,999 as one package. Keep this page out of search indexing until the service name is verified.",
    related: ["bridal-facial-ullal", "whitening-facial-ullal", "gold-facial-ullal"], verifyBeforePublishing: true,
  },
  {
    slug: "10-step-whitening-facial-ullal", category: "facials", name: "Whitening Facial – 10 Steps", h1: "10-Step Whitening Facial in Ullal",
    primaryKeyword: "10-step whitening facial in Ullal",
    supportingTerms: ["10 step facial Bengaluru", "multi-step facial Ullal", "whitening facial Jnana Ganga Nagar", "brightening facial service", "facial salon Ullal Main Road", "premium facial Bengaluru", "skin care parlour near Nagarbhavi"],
    metaDescription: "Explore the 10-Step Whitening Facial package at Elite Perimeter Unisex Salon in Ullal. Ask the team about all steps and current availability.",
    intro: "10-Step Whitening Facial in Ullal is listed as a premium package at Elite Perimeter Unisex Salon on Ullal Main Road. The poster names the facial and lists additional grooming services in the ₹3,499 package.",
    detail: "The poster identifies this as a 10-step facial but does not detail the ten steps or product names. Ask the salon for the step-by-step process before booking, and confirm which add-ons are included in the package price.",
    beforeBooking: ["Request the list of the ten facial steps.", "Ask which products are used and discuss known sensitivities.", "Confirm waxing areas, threading, Lavender Mani/Pedi Spa and other package inclusions."],
    menuNote: "The printed 10-Step Whitening Facial package is ₹3,499. The standalone facial price is not listed.",
    related: ["whitening-facial-ullal", "face-cleanup-ullal", "bridal-facial-ullal"],
  },
  {
    slug: "face-de-tan-ullal", category: "facials", name: "Face De-Tan", h1: "Face De-Tan in Ullal, Bengaluru",
    primaryKeyword: "face de-tan in Ullal",
    supportingTerms: ["de-tan facial Bengaluru", "face tan care Ullal", "de-tan salon Jnana Ganga Nagar", "beauty parlour Ullal Main Road", "skin care service near Nagarbhavi", "face de-tan near Mangalore Independent PU College", "facial salon Bengaluru 560056"],
    metaDescription: "Enquire about face de-tan treatment in Ullal at Elite Perimeter Unisex Salon. Confirm the product, process and standalone price before booking.",
    intro: "Face de-tan in Ullal is listed in several Elite Perimeter Unisex Salon packages. The salon is located on Ullal Main Road in Jnana Ganga Nagar, Bengaluru; contact the team to confirm the standalone service and its steps.",
    detail: "The salon menu includes Face De-Tan alongside different facial and waxing combinations. Ask which product is used, how the session is carried out and what aftercare the salon recommends. Avoid assuming a particular result or timeline before discussing the treatment.",
    beforeBooking: ["Ask which de-tan product and steps are used.", "Mention any known product sensitivities.", "Confirm whether the service is standalone or part of a facial package."],
    menuNote: "Face De-Tan appears in several packages. No standalone de-tan price is printed.",
    related: ["chocolate-facial-ullal", "whitening-facial-ullal", "face-cleanup-ullal"],
  },
  {
    slug: "full-arms-waxing-ullal", category: "waxing", name: "Full Arms Waxing", h1: "Full Arms Waxing in Ullal",
    primaryKeyword: "full arms waxing in Ullal",
    supportingTerms: ["arm waxing Bengaluru", "waxing salon Ullal Main Road", "unisex waxing service", "body grooming Jnana Ganga Nagar", "full arm hair removal", "waxing near Mangalore Independent PU College", "beauty parlour Ullal"],
    metaDescription: "Enquire about full arms waxing in Ullal at Elite Perimeter Unisex Salon. Confirm the wax type, coverage and current individual price.",
    intro: "Full arms waxing in Ullal is available as a listed salon service at Elite Perimeter Unisex Salon on Ullal Main Road, Jnana Ganga Nagar. Ask the team to confirm the wax type and exact coverage before your appointment.",
    detail: "Waxing menus can differ in the areas included and the product used. Confirm whether the service covers the full arm up to the shoulder and whether the hands are included. The salon's posters show full arms as part of several combined waxing packages.",
    beforeBooking: ["Confirm the exact coverage included in full arms waxing.", "Ask which wax type is available for the appointment.", "Mention any skin sensitivities or recent skin treatments to the professional."],
    menuNote: "Full Arms Waxing is included in multiple packages. No standalone price is printed.",
    related: ["underarms-waxing-ullal", "half-legs-waxing-ullal", "chocolate-waxing-ullal"],
  },
  {
    slug: "underarms-waxing-ullal", category: "waxing", name: "Underarms Waxing", h1: "Underarms Waxing in Ullal",
    primaryKeyword: "underarms waxing in Ullal",
    supportingTerms: ["underarm waxing Bengaluru", "underarm hair removal Ullal", "waxing salon Jnana Ganga Nagar", "body grooming Ullal Main Road", "unisex waxing service", "underarm waxing near Nagarbhavi", "beauty parlour Bengaluru 560056"],
    metaDescription: "Ask about underarms waxing in Ullal at Elite Perimeter Unisex Salon. Confirm the wax type, appointment details and current price.",
    intro: "Underarms waxing in Ullal is listed among the waxing services at Elite Perimeter Unisex Salon, near Mangalore Independent PU College on Ullal Main Road. Contact the salon to confirm the wax type and appointment details.",
    detail: "For a clear appointment, ask which waxing product is used and what preparation is recommended. Tell the salon professional about any known skin sensitivities or recent use of products on the area before the service begins.",
    beforeBooking: ["Confirm the product and service price before booking.", "Ask the salon about any preparation or aftercare instructions.", "Discuss known sensitivities with the service professional."],
    menuNote: "Underarms Waxing appears in the printed combination packages; no standalone rate is provided.",
    related: ["full-arms-waxing-ullal", "full-legs-waxing-ullal", "chocolate-waxing-ullal"],
  },
  {
    slug: "half-legs-waxing-ullal", category: "waxing", name: "Half Legs Waxing", h1: "Half Legs Waxing in Ullal",
    primaryKeyword: "half legs waxing in Ullal",
    supportingTerms: ["half leg waxing Bengaluru", "leg waxing salon Ullal", "waxing Jnana Ganga Nagar", "body grooming Ullal Main Road", "half leg hair removal", "waxing near Nagarbhavi", "unisex beauty parlour"],
    metaDescription: "Find half legs waxing in Ullal at Elite Perimeter Unisex Salon. Ask which leg area is covered and confirm the current individual rate.",
    intro: "Half legs waxing in Ullal is included in the waxing menu at Elite Perimeter Unisex Salon on Ullal Main Road. Before booking, confirm whether the salon defines half legs as lower legs or another specific coverage area.",
    detail: "The salon posters include half legs in several package combinations. Because salons can define the coverage differently, clarify the exact area, wax type and whether the feet or knees are included before the appointment.",
    beforeBooking: ["Confirm the exact half-leg coverage area.", "Ask whether the wax type can be selected.", "Check whether the service is standalone or part of a package."],
    menuNote: "Half Legs Waxing is included in the ₹999 cleanup combo and other packages. No standalone price is printed.",
    related: ["full-legs-waxing-ullal", "full-arms-waxing-ullal", "chocolate-waxing-ullal"],
  },
  {
    slug: "full-legs-waxing-ullal", category: "waxing", name: "Full Legs Waxing", h1: "Full Legs Waxing in Ullal",
    primaryKeyword: "full legs waxing in Ullal",
    supportingTerms: ["full leg waxing Bengaluru", "leg hair removal Ullal", "waxing salon Ullal Main Road", "body waxing Jnana Ganga Nagar", "full legs wax near Nagarbhavi", "unisex waxing service", "beauty parlour Ullal"],
    metaDescription: "Enquire about full legs waxing in Ullal at Elite Perimeter Unisex Salon. Confirm the coverage, wax type and standalone price.",
    intro: "Full legs waxing in Ullal is listed in the Elite Perimeter Unisex Salon menu and in several facial package combinations. The salon is on Ullal Main Road in Jnana Ganga Nagar, Bengaluru.",
    detail: "Before booking full legs waxing, clarify the coverage from the upper leg through the lower leg and whether the feet are included. Ask about available wax types, preparation and aftercare so the appointment matches your expectations.",
    beforeBooking: ["Confirm whether the feet are included in full-leg coverage.", "Ask which wax product is used.", "Mention known sensitivities and confirm the current rate."],
    menuNote: "Full Legs Waxing is included in packages priced at ₹1,399, ₹1,499 and several premium combinations. No standalone rate is printed.",
    related: ["half-legs-waxing-ullal", "full-arms-waxing-ullal", "chocolate-waxing-ullal"],
  },
  {
    slug: "chocolate-waxing-ullal", category: "waxing", name: "Chocolate Waxing", h1: "Chocolate Waxing in Ullal",
    primaryKeyword: "chocolate waxing in Ullal",
    supportingTerms: ["chocolate wax Bengaluru", "chocolate body waxing Ullal", "waxing salon Jnana Ganga Nagar", "premium waxing Ullal Main Road", "full arms chocolate waxing", "underarms chocolate waxing", "full legs chocolate waxing"],
    metaDescription: "Explore chocolate waxing in Ullal at Elite Perimeter Unisex Salon. Confirm the areas included, wax type and current standalone price.",
    intro: "Chocolate waxing in Ullal is listed in the Elite Perimeter Unisex Salon premium package menu. The poster specifies chocolate waxing for full arms, underarms and full legs in the 24K Gold and Bridal/Hyder packages.",
    detail: "The package menu identifies the areas included with chocolate waxing. If you want the service on its own, ask whether it is available as a standalone appointment and confirm the exact coverage and price before booking.",
    beforeBooking: ["Confirm whether all three listed areas are included.", "Ask whether chocolate wax is available as a standalone service.", "Discuss preparation and any known sensitivities with the professional."],
    menuNote: "Chocolate Waxing is included in the ₹4,499 and ₹4,999 premium packages. No standalone rate is printed.",
    related: ["full-arms-waxing-ullal", "underarms-waxing-ullal", "full-legs-waxing-ullal"],
  },
  {
    slug: "eyebrow-threading-ullal", category: "threading", name: "Eyebrow Threading", h1: "Eyebrow Threading in Ullal",
    primaryKeyword: "eyebrow threading in Ullal",
    supportingTerms: ["eyebrow shaping Ullal", "threading salon Jnana Ganga Nagar", "eyebrow threading Bengaluru", "beauty parlour Ullal Main Road", "brow grooming near Nagarbhavi", "threading near Mangalore Independent PU College", "facial threading service"],
    metaDescription: "Get eyebrow threading in Ullal at Elite Perimeter Unisex Salon. Ask about shaping preferences and confirm the current individual price.",
    intro: "Eyebrow threading in Ullal is listed at Elite Perimeter Unisex Salon, located on Ullal Main Road in Jnana Ganga Nagar. Share your preferred brow shape with the service professional before the appointment begins.",
    detail: "Eyebrow shaping is personal, so explain whether you prefer a natural tidy-up or a more defined shape. A reference image can help communicate your preference. Confirm whether any additional facial threading is included or priced separately.",
    beforeBooking: ["Explain the shape and amount of hair removal you prefer.", "Show a reference photo if useful.", "Confirm whether upper lip or other threading is an add-on."],
    menuNote: "Eyebrow threading appears in the printed combo packages. A separate eyebrow threading price is not listed.",
    related: ["upper-lip-threading-ullal", "chin-threading-ullal", "forehead-threading-ullal"],
  },
  {
    slug: "upper-lip-threading-ullal", category: "threading", name: "Upper Lip Threading", h1: "Upper Lip Threading in Ullal",
    primaryKeyword: "upper lip threading in Ullal",
    supportingTerms: ["upper lip hair removal Ullal", "facial threading Bengaluru", "threading salon Ullal Main Road", "beauty parlour Jnana Ganga Nagar", "upper lip threading near Nagarbhavi", "face grooming Ullal", "threading near Mangalore Independent PU College"],
    metaDescription: "Enquire about upper lip threading in Ullal at Elite Perimeter Unisex Salon. Confirm the current rate and any combo inclusions.",
    intro: "Upper lip threading in Ullal is available as a listed facial grooming service at Elite Perimeter Unisex Salon on Ullal Main Road, Jnana Ganga Nagar, Bengaluru.",
    detail: "If you are combining upper lip threading with eyebrow or other facial threading, ask the salon to confirm which areas are included in the selected service or package. This avoids confusion about add-on charges at the appointment.",
    beforeBooking: ["Confirm whether the service is standalone or part of a threading combo.", "Ask about current pricing before the appointment.", "Mention any known skin sensitivities to the professional."],
    menuNote: "Upper lip threading is included in several printed packages. No standalone price is shown.",
    related: ["eyebrow-threading-ullal", "chin-threading-ullal", "forehead-threading-ullal"],
  },
  {
    slug: "chin-threading-ullal", category: "threading", name: "Chin Threading", h1: "Chin Threading in Ullal",
    primaryKeyword: "chin threading in Ullal",
    supportingTerms: ["chin hair removal Ullal", "facial threading Bengaluru", "threading salon Jnana Ganga Nagar", "beauty parlour Ullal Main Road", "chin grooming near Nagarbhavi", "facial hair threading Ullal", "threading near Mangalore Independent PU College"],
    metaDescription: "Ask about chin threading in Ullal at Elite Perimeter Unisex Salon. Confirm whether it is available individually and check the current price.",
    intro: "Chin threading in Ullal is listed as part of the facial-threading combination on the Elite Perimeter Unisex Salon poster. The salon is on Ullal Main Road in Jnana Ganga Nagar, Bengaluru.",
    detail: "The printed package groups chin threading with eyebrow, upper lip and forehead threading. If you need only the chin area, contact the salon to check individual availability and pricing rather than assuming the combo price applies.",
    beforeBooking: ["Ask whether chin threading is available on its own.", "Confirm the current standalone price.", "Mention any known skin sensitivities before the service."],
    menuNote: "Chin threading appears in the ₹1,399 and ₹1,499 facial-threading packages. No individual rate is printed.",
    related: ["eyebrow-threading-ullal", "upper-lip-threading-ullal", "forehead-threading-ullal"],
  },
  {
    slug: "forehead-threading-ullal", category: "threading", name: "Forehead Threading", h1: "Forehead Threading in Ullal",
    primaryKeyword: "forehead threading in Ullal",
    supportingTerms: ["forehead hair removal Ullal", "facial threading Bengaluru", "threading salon Ullal Main Road", "beauty parlour Jnana Ganga Nagar", "forehead grooming near Nagarbhavi", "face threading Ullal", "threading near Mangalore Independent PU College"],
    metaDescription: "Enquire about forehead threading in Ullal at Elite Perimeter Unisex Salon. Check individual availability and current pricing.",
    intro: "Forehead threading in Ullal is listed in the facial-threading package at Elite Perimeter Unisex Salon, near Mangalore Independent PU College on Ullal Main Road.",
    detail: "The salon poster includes forehead threading with eyebrow, upper lip and chin threading in a facial package. Contact the team if you need only the forehead area, and confirm the service coverage and current rate.",
    beforeBooking: ["Confirm whether forehead threading is available separately.", "Discuss the hairline or shape you want to maintain.", "Ask whether other threading areas are included or extra."],
    menuNote: "Forehead threading is listed as part of the facial-threading combo. No standalone price is printed.",
    related: ["eyebrow-threading-ullal", "upper-lip-threading-ullal", "chin-threading-ullal"],
  },
  {
    slug: "pedicure-ullal", category: "nails", name: "Pedicure", h1: "Pedicure in Ullal, Bengaluru",
    primaryKeyword: "pedicure in Ullal",
    supportingTerms: ["pedicure salon Bengaluru", "foot care Ullal Main Road", "unisex pedicure Jnana Ganga Nagar", "pedicure near Nagarbhavi", "beauty parlour Ullal", "foot grooming service", "pedicure near Mangalore Independent PU College"],
    metaDescription: "Enquire about pedicure services in Ullal at Elite Perimeter Unisex Salon. Ask which steps are included and confirm the current standalone rate.",
    intro: "Pedicure in Ullal is listed at Elite Perimeter Unisex Salon on Ullal Main Road, Jnana Ganga Nagar, Bengaluru. The printed menu also offers Lavender Pedi Spa and Glass Shine Pedi Spa options.",
    detail: "Ask the salon which steps are included in its standard pedicure, whether polish or other add-ons are available, and how much time to allow. If you prefer a named spa option, compare the Lavender and Glass Shine packages before booking.",
    beforeBooking: ["Confirm the standard pedicure steps and any add-ons.", "Ask whether polish or nail shaping is part of the service.", "Check the current rate and appointment availability."],
    menuNote: "Pedicure appears in combination packages. A standalone pedicure price is not printed.",
    related: ["manicure-ullal", "lavender-pedi-spa-ullal", "glass-shine-pedi-spa-ullal"],
  },
  {
    slug: "manicure-ullal", category: "nails", name: "Manicure", h1: "Manicure in Ullal, Bengaluru",
    primaryKeyword: "manicure in Ullal",
    supportingTerms: ["manicure salon Bengaluru", "nail care Ullal Main Road", "unisex manicure Jnana Ganga Nagar", "manicure near Nagarbhavi", "beauty parlour Ullal", "hand grooming service", "manicure near Mangalore Independent PU College"],
    metaDescription: "Explore manicure services in Ullal at Elite Perimeter Unisex Salon. Confirm the included hand and nail-care steps and current price.",
    intro: "Manicure in Ullal is available as a listed hand and nail-care service at Elite Perimeter Unisex Salon in Jnana Ganga Nagar. The salon menu also names Lavender Mani Spa and Glass Shine Mani Spa options.",
    detail: "Before choosing a manicure, ask which steps are included, whether nail shaping or polish is part of the session and whether any upgrades are available. If you are comparing packages, check the Lavender and Glass Shine options listed on the menu.",
    beforeBooking: ["Confirm the steps included in the standard manicure.", "Ask whether polish or other nail add-ons are available.", "Check the standalone price before booking."],
    menuNote: "Manicure is included in several printed combo packages. No standalone rate is shown.",
    related: ["pedicure-ullal", "lavender-mani-spa-ullal", "glass-shine-mani-spa-ullal"],
  },
  {
    slug: "lavender-pedi-spa-ullal", category: "nails", name: "Lavender Pedi Spa", h1: "Lavender Pedi Spa in Ullal",
    primaryKeyword: "Lavender Pedi Spa in Ullal",
    supportingTerms: ["Lavender pedicure Bengaluru", "Lavender foot spa Ullal", "premium pedicure Jnana Ganga Nagar", "foot care Ullal Main Road", "pedi spa near Nagarbhavi", "beauty parlour Bengaluru 560056", "Lavender foot care"],
    metaDescription: "Ask about Lavender Pedi Spa in Ullal at Elite Perimeter Unisex Salon. Confirm the treatment steps and current standalone price.",
    intro: "Lavender Pedi Spa in Ullal is listed in the Korean Glass Facial and 10-Step Whitening Facial premium packages at Elite Perimeter Unisex Salon, Jnana Ganga Nagar.",
    detail: "The supplied poster identifies the service by the name Lavender Pedi Spa but does not list the products or exact steps. Contact the salon to understand what the session includes and whether it can be booked separately from a premium facial package.",
    beforeBooking: ["Ask which Lavender Pedi Spa steps and products are included.", "Confirm whether it is available as a standalone appointment.", "Ask about duration and current pricing."],
    menuNote: "Lavender Pedi Spa is included in the ₹3,499 premium packages. No standalone price is printed.",
    related: ["pedicure-ullal", "lavender-mani-spa-ullal", "glass-shine-pedi-spa-ullal"],
  },
  {
    slug: "lavender-mani-spa-ullal", category: "nails", name: "Lavender Mani Spa", h1: "Lavender Mani Spa in Ullal",
    primaryKeyword: "Lavender Mani Spa in Ullal",
    supportingTerms: ["Lavender manicure Bengaluru", "Lavender hand spa Ullal", "premium manicure Jnana Ganga Nagar", "nail care Ullal Main Road", "mani spa near Nagarbhavi", "beauty parlour Bengaluru 560056", "Lavender hand care"],
    metaDescription: "Enquire about Lavender Mani Spa in Ullal at Elite Perimeter Unisex Salon. Confirm the included steps and standalone price.",
    intro: "Lavender Mani Spa in Ullal is listed as a hand-care add-on in the premium packages at Elite Perimeter Unisex Salon on Ullal Main Road, Bengaluru.",
    detail: "The printed menu names Lavender Mani Spa but does not explain the products or sequence. Ask the salon which steps are included, whether nail shaping or polish is part of the appointment and whether this option is sold separately.",
    beforeBooking: ["Confirm the Lavender Mani Spa steps and products.", "Ask whether nail shaping or polish is included.", "Check availability and the current standalone rate."],
    menuNote: "Lavender Mani Spa is included in the ₹3,499 premium packages. No standalone price is printed.",
    related: ["manicure-ullal", "lavender-pedi-spa-ullal", "glass-shine-mani-spa-ullal"],
  },
  {
    slug: "glass-shine-pedi-spa-ullal", category: "nails", name: "Glass Shine Pedi Spa", h1: "Glass Shine Pedi Spa in Ullal",
    primaryKeyword: "Glass Shine Pedi Spa in Ullal",
    supportingTerms: ["Glass Shine pedicure Bengaluru", "premium foot spa Ullal", "foot care Jnana Ganga Nagar", "pedi spa Ullal Main Road", "luxury pedicure near Nagarbhavi", "beauty parlour Bengaluru 560056", "Glass Shine foot care"],
    metaDescription: "Discover Glass Shine Pedi Spa in Ullal at Elite Perimeter Unisex Salon. Ask about the included steps and current standalone rate.",
    intro: "Glass Shine Pedi Spa in Ullal is listed in the Luxury 24K Gold Facial and Bridal/Hyder Facial premium packages at Elite Perimeter Unisex Salon, Jnana Ganga Nagar.",
    detail: "The poster identifies this as a Glass Shine Pedi Spa but does not describe the process. Ask the salon to explain the included foot-care steps, products and any optional add-ons before choosing the package or requesting the service on its own.",
    beforeBooking: ["Ask what the Glass Shine Pedi Spa includes.", "Confirm whether the service is available separately.", "Check the package price and current appointment availability."],
    menuNote: "Glass Shine Pedi Spa is included in the ₹4,499 and ₹4,999 premium packages. No standalone price is printed.",
    related: ["pedicure-ullal", "glass-shine-mani-spa-ullal", "lavender-pedi-spa-ullal"],
  },
  {
    slug: "glass-shine-mani-spa-ullal", category: "nails", name: "Glass Shine Mani Spa", h1: "Glass Shine Mani Spa in Ullal",
    primaryKeyword: "Glass Shine Mani Spa in Ullal",
    supportingTerms: ["Glass Shine manicure Bengaluru", "premium hand spa Ullal", "nail care Jnana Ganga Nagar", "mani spa Ullal Main Road", "luxury manicure near Nagarbhavi", "beauty parlour Bengaluru 560056", "Glass Shine hand care"],
    metaDescription: "Explore Glass Shine Mani Spa in Ullal at Elite Perimeter Unisex Salon. Confirm the included hand-care steps and current standalone price.",
    intro: "Glass Shine Mani Spa in Ullal is included in the premium facial packages listed by Elite Perimeter Unisex Salon on Ullal Main Road, Bengaluru.",
    detail: "The supplied poster gives the service name but does not list the exact manicure steps or products. Contact the salon to check what is included, whether nail polish is part of the service and whether a standalone booking is available.",
    beforeBooking: ["Confirm the Glass Shine Mani Spa process and products.", "Ask whether nail shaping or polish is included.", "Check availability and individual pricing."],
    menuNote: "Glass Shine Mani Spa is included in the ₹4,499 and ₹4,999 premium packages. No standalone price is printed.",
    related: ["manicure-ullal", "glass-shine-pedi-spa-ullal", "lavender-mani-spa-ullal"],
  },
];

export const packages = [
  {
    slug: "haircut-hair-spa",
    name: "Hair Cut + Hair Spa Package",
    price: 999,
    group: "Hair package",
    description: "A printed combo that includes Hair Cut and Hair Spa.",
    includes: ["Hair Cut", "Hair Spa"],
    note: "This package appears on both regular package posters at the same price; counted once.",
  },
  {
    slug: "cleanup-waxing-threading",
    name: "Cleanup + Waxing + Threading Package",
    price: 999,
    group: "Beauty package",
    description: "A printed combo with cleanup, selected waxing areas and eyebrow plus upper lip threading.",
    includes: ["Cleanup", "Waxing: Full Arms, Underarms and Half Legs", "Threading: Eyebrows and Upper Lip"],
    note: "This package appears on both regular package posters at the same price; counted once.",
  },
  {
    slug: "chocolate-facial-det-an-threading",
    name: "Chocolate Facial + Face De-Tan + Threading Package",
    price: 1399,
    group: "Chocolate facial package",
    description: "Chocolate Facial, Face De-Tan and threading for eyebrows, upper lip, chin and forehead.",
    includes: ["Chocolate Facial", "Face De-Tan", "Threading: Eyebrows, Upper Lip, Chin and Forehead"],
  },
  {
    slug: "chocolate-facial-det-an-waxing",
    name: "Chocolate Facial + Face De-Tan + Waxing Package",
    price: 1399,
    group: "Chocolate facial package",
    description: "Chocolate Facial, Face De-Tan and waxing for full arms, underarms and full legs.",
    includes: ["Chocolate Facial", "Face De-Tan", "Waxing: Full Arms, Underarms and Full Legs"],
  },
  {
    slug: "chocolate-facial-mani-pedi",
    name: "Chocolate Facial + De-Tan + Waxing + Mani-Pedi Package",
    price: 1799,
    group: "Chocolate facial package",
    description: "Chocolate Facial, Face De-Tan, selected waxing areas, Pedicure and Manicure.",
    includes: ["Chocolate Facial", "Face De-Tan", "Waxing: Full Arms, Underarms and Half Legs", "Pedicure", "Manicure"],
  },
  {
    slug: "complete-chocolate-beauty",
    name: "Complete Chocolate Facial Beauty Package",
    price: 2299,
    group: "Chocolate facial package",
    description: "The largest regular Chocolate Facial package, combining facial, de-tan, waxing, threading, mani-pedi, haircut and Keratin Spa.",
    includes: ["Chocolate Facial", "Face De-Tan", "Waxing: Full Arms, Underarms and Half Legs", "Threading: Eyebrows and Upper Lip", "Pedicure", "Manicure", "Hair Cut", "Keratin Spa"],
  },
  {
    slug: "whitening-facial-det-an-threading",
    name: "Whitening Facial + Face De-Tan + Threading Package",
    price: 1499,
    group: "Whitening facial package",
    description: "Whitening Facial, Face De-Tan and threading for eyebrows, upper lip, chin and forehead.",
    includes: ["Whitening Facial", "Face De-Tan", "Threading: Eyebrows, Upper Lip, Chin and Forehead"],
  },
  {
    slug: "whitening-facial-det-an-waxing",
    name: "Whitening Facial + Face De-Tan + Waxing Package",
    price: 1499,
    group: "Whitening facial package",
    description: "Whitening Facial, Face De-Tan and waxing for full arms, underarms and full legs.",
    includes: ["Whitening Facial", "Face De-Tan", "Waxing: Full Arms, Underarms and Full Legs"],
  },
  {
    slug: "whitening-facial-mani-pedi",
    name: "Whitening Facial + De-Tan + Waxing + Mani-Pedi Package",
    price: 1899,
    group: "Whitening facial package",
    description: "Whitening Facial, Face De-Tan, selected waxing areas, Pedicure and Manicure.",
    includes: ["Whitening Facial", "Face De-Tan", "Waxing: Full Arms, Underarms and Half Legs", "Pedicure", "Manicure"],
  },
  {
    slug: "complete-whitening-beauty",
    name: "Complete Whitening Facial Beauty Package",
    price: 2399,
    group: "Whitening facial package",
    description: "A multi-service Whitening Facial package with de-tan, waxing, threading, mani-pedi, haircut and Keratin Spa.",
    includes: ["Whitening Facial", "Face De-Tan", "Waxing: Full Arms, Underarms and Half Legs", "Threading: Eyebrows and Upper Lip", "Pedicure", "Manicure", "Hair Cut", "Keratin Spa"],
  },
  {
    slug: "korean-glass-facial-premium",
    name: "Korean Glass Facial Premium Package",
    price: 3499,
    group: "Premium beauty package",
    description: "Korean Glass Facial with face de-tan, waxing, threading, Lavender Mani Spa, Lavender Pedi Spa, Hair Cut and Botox Spa.",
    includes: ["Korean Glass Facial", "Face De-Tan", "Waxing: Full Arms, Underarms and Full Legs", "Threading: Eyebrows and Upper Lip", "Lavender Pedi Spa", "Lavender Mani Spa", "Hair Cut", "Botox Spa"],
    note: "Confirm the exact Botox Spa service before promising what the add-on includes.",
  },
  {
    slug: "10-step-whitening-facial-premium",
    name: "10-Step Whitening Facial Premium Package",
    price: 3499,
    group: "Premium beauty package",
    description: "10-Step Whitening Facial with face de-tan, waxing, threading, Lavender Mani Spa, Lavender Pedi Spa, Hair Cut and Botox Spa.",
    includes: ["Whitening Facial – 10 Steps", "Face De-Tan", "Waxing: Full Arms, Underarms and Full Legs", "Threading: Eyebrows and Upper Lip", "Lavender Pedi Spa", "Lavender Mani Spa", "Hair Cut", "Botox Spa"],
    note: "Confirm the ten facial steps and exact Botox Spa service before publishing detailed claims.",
  },
  {
    slug: "24k-gold-facial-premium",
    name: "Luxury 24K Gold Facial Premium Package",
    price: 4499,
    group: "Premium beauty package",
    description: "Luxury 24K Gold Facial with face de-tan, chocolate waxing, threading, Glass Shine Pedi Spa, Glass Shine Mani Spa, Hair Cut and Botox Spa.",
    includes: ["Luxury 24K Gold Facial", "Face De-Tan", "Chocolate Waxing: Full Arms, Underarms and Full Legs", "Threading: Eyebrows and Upper Lip", "Glass Shine Pedi Spa", "Glass Shine Mani Spa", "Hair Cut", "Botox Spa"],
    note: "Confirm the exact Botox Spa service before promising what the add-on includes.",
  },
  {
    slug: "bridal-hyder-facial-premium",
    name: "Bridal Facial / Hyder Facial Premium Package",
    price: 4999,
    group: "Premium beauty package",
    description: "The poster lists Bridal Facial / Hyder Facial with face de-tan, chocolate waxing, threading, Glass Shine Pedi Spa, Glass Shine Mani Spa, Hair Cut and Botox Spa.",
    includes: ["Bridal Facial / Hyder Facial (confirm selected facial name)", "Face De-Tan", "Chocolate Waxing: Full Arms, Underarms and Full Legs", "Threading: Eyebrows and Upper Lip", "Glass Shine Pedi Spa", "Glass Shine Mani Spa", "Hair Cut", "Botox Spa"],
    note: "The poster presents Bridal Facial / Hyder Facial as one package at ₹4,999. Do not split it into two separately priced packages without confirmation.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getServiceCategory(service: Service) {
  return getCategory(service.category);
}

export function getRelatedServices(service: Service) {
  return service.related.map(getService).filter(Boolean) as Service[];
}

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}

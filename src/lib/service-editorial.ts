export type EditorialSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ServiceEditorial = {
  metaDescription: string;
  problemTitle: string;
  problem: string;
  sections: EditorialSection[];
  bookingQuestions: string[];
  faqs: { question: string; answer: string }[];
  blogSlugs: string[];
};

export const serviceEditorial: Record<string, ServiceEditorial> = {
  "haircut-ullal": {
    metaDescription: "Haircut in Ullal at Elite Perimeter Unisex Salon. Discuss the length, shape and finish you want, then confirm the current rate before booking.",
    problemTitle: "Avoiding a haircut that does not match your plan",
    problem: "A common haircut concern is leaving with a length or shape that was not clearly agreed. The most useful step is to communicate the result before the first cut, not after the length has already changed.",
    sections: [
      { heading: "Agree on length, shape and maintenance", paragraphs: ["Describe how much length you want to keep, where you want layers or shape, and how you normally style your hair. A reference photo can help explain the direction, but discuss which parts of the image suit your own hair and routine.", "Ask the stylist to repeat the plan before starting. If you are uncertain about a major change, discuss a smaller adjustment first and confirm the current price and what the appointment includes."] },
      { heading: "Connect the haircut with other hair services carefully", paragraphs: ["The printed menu lists Hair Cut + Hair Spa at ₹999. That is a combined package price, not a separate haircut rate. Ask for the current standalone haircut price if you do not want the full combination.", "If you are also considering a hair spa or Keratin Spa, discuss the order and the exact process with the stylist. The service names alone do not explain which products or steps will be used."] }
    ],
    bookingQuestions: ["How much length will be removed, and can we confirm the shape before starting?", "Is wash or styling included in the current standalone rate?", "If I choose Hair Cut + Hair Spa, what exactly is included in the ₹999 combination?"],
    faqs: [
      { question: "Can I bring a haircut reference photo?", answer: "Yes. Use it to explain the length and shape you prefer, then ask the stylist to discuss what is practical for your hair before starting." },
      { question: "Is the ₹999 Hair Cut + Hair Spa price a standalone haircut rate?", answer: "No. The printed poster lists ₹999 for the combined Hair Cut + Hair Spa package. Confirm the current standalone haircut rate with the salon." }
    ],
    blogSlugs: ["prevent-hair-damage-after-salon-treatments", "best-unisex-salon-near-me-ullal", "mens-grooming-guide-ullal"]
  },
  "hair-spa-ullal": {
    metaDescription: "Hair spa in Ullal at Elite Perimeter Unisex Salon. Ask about the product, steps and aftercare, and confirm the standalone price before visiting.",
    problemTitle: "Choosing a hair spa when dryness or damage is the concern",
    problem: "A customer may search for a hair spa because hair feels dry, frizzy or difficult to manage. The phrase hair spa does not identify a single process, so the customer should understand the product and steps before booking.",
    sections: [
      { heading: "Ask what the hair spa appointment actually includes", paragraphs: ["Ask which product or treatment option is used, how the appointment is performed and what the session includes. If you have recently coloured, straightened or otherwise treated your hair, explain that history before the service.", "The salon's printed menu lists Hair Cut + Hair Spa at ₹999 as a combination. It does not show a separate standalone Hair Spa price."] },
      { heading: "Get aftercare advice for the product used", paragraphs: ["Before leaving, ask for the aftercare instructions that apply to the actual product used. Do not assume that the same washing or styling advice applies to every hair spa product.", "If your concern includes breakage, scalp itching or a previous reaction, explain it first and ask whether the salon recommends proceeding or seeking other advice."] }
    ],
    bookingQuestions: ["Which product or hair spa process is being used?", "How long does the session take, and what aftercare is recommended?", "What is the current standalone Hair Spa price?"],
    faqs: [
      { question: "Is every hair spa the same?", answer: "No assumption should be made from the name alone. Ask the salon which product, steps and aftercare are included in its current service." },
      { question: "Does the printed menu show a standalone Hair Spa price?", answer: "No. It lists Hair Cut + Hair Spa together at ₹999. Confirm the standalone rate directly." }
    ],
    blogSlugs: ["prevent-hair-damage-after-salon-treatments", "natural-and-organic-beauty-treatments"]
  },
  "keratin-spa-ullal": {
    metaDescription: "Keratin hair treatment in Ullal at Elite Perimeter. Confirm whether the menu item is a spa or smoothing process, its products and aftercare.",
    problemTitle: "Understanding what a keratin-labelled service means",
    problem: "Customers may search for keratin treatment because they want to discuss frizz, dryness or manageability. A menu label does not tell you whether the service is a conditioning spa or a smoothing process.",
    sections: [
      { heading: "Confirm whether it is a spa or a smoothing treatment", paragraphs: ["Ask the stylist to explain the exact Keratin Spa process and product. Do not assume it is the same as every keratin or smoothing treatment advertised elsewhere.", "Tell the stylist about previous colour, chemical services and any scalp concerns. Ask about the finish, process and aftercare before agreeing to the appointment."] },
      { heading: "Compare the standalone service with package inclusions", paragraphs: ["The supplied menu includes Keratin Spa in the Complete Chocolate Facial Beauty Package at ₹2,299 and the Complete Whitening Facial Beauty Package at ₹2,399. Those amounts cover the full combinations, not the standalone Keratin Spa.", "Ask the salon for the current standalone rate and whether the exact service is available separately."] }
    ],
    bookingQuestions: ["Is this a conditioning spa or a smoothing treatment?", "Which product and process are included?", "What are the aftercare instructions and standalone price?"],
    faqs: [
      { question: "Does Keratin Spa always mean a long-duration smoothing treatment?", answer: "No. Confirm the exact process and product with the salon rather than inferring it from the service name." },
      { question: "Are the package prices the standalone Keratin Spa price?", answer: "No. Keratin Spa appears as one included item in larger combinations. Ask for its current individual price." }
    ],
    blogSlugs: ["prevent-hair-damage-after-salon-treatments", "natural-and-organic-beauty-treatments"]
  },
  "botox-spa-ullal": {
    metaDescription: "Botox Spa in Ullal is listed in the salon menu. Contact Elite Perimeter to confirm the exact service name, process, products and price.",
    problemTitle: "Confirming the exact service before booking",
    problem: "The printed poster names Botox Spa but does not explain the treatment. The name alone is not enough to identify its products, process or intended use, so those details must be confirmed before a customer relies on this page.",
    sections: [
      { heading: "Do not infer the treatment from the word Botox", paragraphs: ["Ask the salon to confirm the exact service name and whether this is a hair spa or another salon treatment. The word should not be confused with an injectable medical procedure.", "Request the product name, steps, who performs the service and any suitability or aftercare information before accepting the package inclusion."] },
      { heading: "Confirm the package before treating it as a booking option", paragraphs: ["The poster includes Botox Spa in several premium combinations. It does not provide a standalone Botox Spa rate or detailed treatment steps.", "This page remains excluded from search indexing until the salon verifies the service description."] }
    ],
    bookingQuestions: ["What is the exact treatment meant by Botox Spa on the menu?", "Which product and steps are included?", "Is the service available separately, and what is its current rate?"],
    faqs: [
      { question: "Is Botox Spa an injectable procedure?", answer: "The salon poster lists a spa service name, but does not define it. Confirm the exact salon treatment; do not infer that it is an injectable procedure." },
      { question: "Is this service page ready for Google indexing?", answer: "No. The exact service name and details must be confirmed with the salon before indexing." }
    ],
    blogSlugs: ["prevent-hair-damage-after-salon-treatments", "natural-and-organic-beauty-treatments"]
  },
  "face-cleanup-ullal": {
    metaDescription: "Face cleanup in Ullal at Elite Perimeter Unisex Salon. Confirm the cleansing steps, product details and standalone rate before booking.",
    problemTitle: "Knowing what a cleanup appointment includes",
    problem: "A customer may choose a cleanup because they want a facial-care appointment without knowing which steps are included. The service should be explained before the customer agrees to it.",
    sections: [
      { heading: "Ask for the steps and product details", paragraphs: ["Ask which cleansing and finishing steps are part of the cleanup, which products are used and whether anything is added for your skin preference. Tell the professional about known product sensitivities before the service begins.", "Do not assume that threading or waxing is included with a cleanup unless the package or appointment confirmation says so."] },
      { heading: "Understand the printed combo price", paragraphs: ["Cleanup appears in the ₹999 Cleanup + Waxing + Threading package. The poster lists full arms, underarms and half legs for waxing, plus eyebrow and upper-lip threading.", "The ₹999 is the complete combination price. The poster does not state a standalone cleanup price."] }
    ],
    bookingQuestions: ["Which cleansing and finishing steps are included?", "Are waxing or threading add-ons included in this appointment?", "What is the current standalone cleanup price?"],
    faqs: [
      { question: "Does cleanup automatically include threading?", answer: "Not as a standalone service based on the supplied menu. Threading is included in the printed ₹999 combination; confirm the appointment you are booking." },
      { question: "What is the standalone cleanup rate?", answer: "The supplied poster does not show one. Ask the salon for the current individual rate." }
    ],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "salon-hygiene-checklist"]
  },
  "chocolate-facial-ullal": {
    metaDescription: "Chocolate facial in Ullal at Elite Perimeter Unisex Salon. Ask about facial steps, products and the current standalone rate before booking.",
    problemTitle: "Comparing a named facial with its actual inclusions",
    problem: "Customers searching for a chocolate facial may want to know what the service includes and whether it is available by itself or only as part of a package. The poster names the facial but does not detail its steps.",
    sections: [
      { heading: "Ask what the facial session includes", paragraphs: ["Confirm which products are used and what steps are included. Mention any known product sensitivity and ask whether the salon offers the facial as a standalone appointment.", "Avoid assuming the name proves a particular ingredient formula or skin result. The salon should explain its actual product and process."] },
      { heading: "Compare the three printed combinations", paragraphs: ["Chocolate Facial appears in packages at ₹1,399 with threading, ₹1,399 with waxing, ₹1,799 with selected waxing plus manicure and pedicure, and ₹2,299 in the complete chocolate package.", "Each price covers the full set of inclusions shown for that package. No separate Chocolate Facial rate is printed."] }
    ],
    bookingQuestions: ["Which products and steps are included in the Chocolate Facial?", "Is a standalone appointment available?", "Which package inclusions are included at the price shown?"],
    faqs: [
      { question: "Is Chocolate Facial available as a standalone service?", answer: "The poster shows it inside combo packages but does not confirm a standalone rate. Ask the salon whether a standalone appointment is available." },
      { question: "Does the ₹1,399 price cover only the facial?", answer: "No. The printed ₹1,399 options are combinations that include the facial plus threading or waxing and de-tan." }
    ],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "salon-care-on-a-budget-ullal"]
  },
  "whitening-facial-ullal": {
    metaDescription: "Whitening facial in Ullal at Elite Perimeter. Ask about products, steps and package inclusions; confirm the current standalone rate.",
    problemTitle: "Understanding the service name without assuming a promised result",
    problem: "The printed menu uses the term Whitening Facial. Customers should understand the actual products and process rather than interpreting the name as a guarantee of a skin-tone change.",
    sections: [
      { heading: "Ask for the product and process explanation", paragraphs: ["Ask the salon which products are used, what the appointment includes and what the word whitening means in the context of this specific service. Mention sensitivities or previous reactions before the appointment.", "If you are comparing it with a de-tan facial, ask the salon to explain how the services differ and whether the same add-ons are included."] },
      { heading: "Compare regular and 10-step combinations", paragraphs: ["The regular printed options include Whitening Facial with threading at ₹1,499, with waxing at ₹1,499, with mani-pedi at ₹1,899 and a complete combination at ₹2,399. The premium 10-step Whitening Facial package is ₹3,499.", "Those are complete package prices. The poster does not show a separate standalone Whitening Facial rate."] }
    ],
    bookingQuestions: ["Which products and steps are used?", "What does Whitening Facial mean for this particular service?", "Which body areas and add-ons are included in the package?"],
    faqs: [
      { question: "Does Whitening Facial guarantee a particular skin colour or result?", answer: "No guaranteed skin-tone outcome is stated on the supplied menu. Ask the salon to explain the products, process and realistic expectations." },
      { question: "Is ₹1,499 the standalone facial price?", answer: "No. The printed ₹1,499 price is for a combination with de-tan and either threading or waxing." }
    ],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "salon-care-on-a-budget-ullal"]
  },
  "korean-glass-facial-ullal": {
    metaDescription: "Korean Glass Facial in Ullal at Elite Perimeter. Review the ₹3,499 package inclusions and confirm the facial steps before booking.",
    problemTitle: "Separating the facial from the complete premium combination",
    problem: "A customer may search for a Korean Glass Facial but see a package containing several other treatments. The decision is whether they want the facial itself or the complete premium combination.",
    sections: [
      { heading: "Confirm the facial process and its product details", paragraphs: ["Ask which facial products and steps are used and whether the salon offers a standalone appointment. Do not treat the phrase glass skin as a guaranteed result; ask what the salon's service actually includes.", "Mention any known product sensitivity before the appointment and ask the professional to explain the steps."] },
      { heading: "Review the ₹3,499 premium package line by line", paragraphs: ["The printed package includes Korean Glass Facial, Face De-Tan, waxing for full arms, underarms and full legs, eyebrow and upper-lip threading, Lavender Pedi Spa, Lavender Mani Spa, Hair Cut and Botox Spa.", "Confirm the exact Botox Spa service before accepting that add-on. The ₹3,499 is the complete package price, not the standalone facial price."] }
    ],
    bookingQuestions: ["Is a standalone Korean Glass Facial available?", "Which facial steps and products are included?", "Can the salon confirm the exact Botox Spa add-on and every package area?"],
    faqs: [
      { question: "What is included in the ₹3,499 Korean Glass Facial package?", answer: "The poster lists the facial, de-tan, full arms/underarms/full legs waxing, eyebrow/upper-lip threading, Lavender Mani Spa, Lavender Pedi Spa, Hair Cut and Botox Spa." },
      { question: "Is the package price a standalone facial rate?", answer: "No. ₹3,499 is the complete printed premium combination price." }
    ],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "salon-care-on-a-budget-ullal", "bridal-beauty-prep-ullal"]
  },
  "gold-facial-ullal": {
    metaDescription: "24K Gold Facial in Ullal at Elite Perimeter. Compare the ₹4,499 package inclusions and ask about the standalone facial rate.",
    problemTitle: "Understanding the premium facial package before paying",
    problem: "A premium service name can make it difficult to tell whether the displayed amount is for the facial alone or a larger combination. Check the full package before deciding.",
    sections: [
      { heading: "Ask what the 24K Gold Facial involves", paragraphs: ["The printed menu calls this Luxury 24K Gold Facial. Ask which products are actually used, what the facial steps are and whether the facial can be booked by itself.", "The name on the poster does not give a product list or guarantee a particular result. Ask for the details needed to make an informed choice."] },
      { heading: "Read the full ₹4,499 package list", paragraphs: ["The menu combines Luxury 24K Gold Facial with Face De-Tan, Chocolate Waxing for full arms, underarms and full legs, eyebrow and upper-lip threading, Glass Shine Pedi Spa, Glass Shine Mani Spa, Hair Cut and Botox Spa.", "Confirm the exact Botox Spa service. The ₹4,499 price applies to the complete premium package, not just the facial."] }
    ],
    bookingQuestions: ["Can the salon explain the facial products and steps?", "Is the facial available separately?", "What does the full ₹4,499 package include, including the Botox Spa item?"],
    faqs: [
      { question: "What does the ₹4,499 price cover?", answer: "It covers the printed Luxury 24K Gold Facial premium combination and its listed add-ons, not only the facial." },
      { question: "Is the product formula listed on the poster?", answer: "No. Ask the salon for the actual product information and treatment steps." }
    ],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "salon-care-on-a-budget-ullal", "bridal-beauty-prep-ullal"]
  },
  "bridal-facial-ullal": {
    metaDescription: "Bridal facial in Ullal at Elite Perimeter. Confirm the facial name, package inclusions and appointment timing before wedding preparation.",
    problemTitle: "Avoiding confusion about bridal package inclusions",
    problem: "Wedding preparation often involves several services and a fixed date. The printed menu combines Bridal Facial / Hyder Facial wording, so the exact facial name and timing should be confirmed early.",
    sections: [
      { heading: "Confirm which facial name the salon currently uses", paragraphs: ["The poster shows Bridal Facial / Hyder Facial as one combined menu line. Ask whether the salon currently calls the chosen service Bridal Facial, Hyder Facial or another name, and ask for the steps and product details.", "Mention any product sensitivities and ask how far in advance the salon recommends scheduling the facial. Do not leave the first discussion until the event is immediately due."] },
      { heading: "Know what the ₹4,999 package includes", paragraphs: ["The printed package lists the selected facial, Face De-Tan, Chocolate Waxing for full arms, underarms and full legs, eyebrow and upper-lip threading, Glass Shine Pedi Spa, Glass Shine Mani Spa, Hair Cut and Botox Spa.", "The poster does not list bridal makeup or makeup trials. Ask separately about any service not named in the inclusion list. Confirm the Botox Spa item before relying on it."] }
    ],
    bookingQuestions: ["Is this the Bridal Facial or the Hyder Facial option?", "How far ahead should the facial be scheduled?", "Is bridal makeup included? The printed poster does not list it, so confirm separately."],
    faqs: [
      { question: "Does the ₹4,999 package include bridal makeup?", answer: "Bridal makeup is not listed on the supplied poster. Ask the salon whether it offers makeup separately." },
      { question: "Is Bridal Facial and Hyder Facial two separately priced packages?", answer: "The poster presents them as one combined ₹4,999 line. Do not treat them as two separately priced offers without confirmation." }
    ],
    blogSlugs: ["bridal-beauty-prep-ullal", "choosing-the-right-facial-for-your-skin-type"]
  },
  "hyder-facial-ullal": {
    metaDescription: "Hyder Facial in Ullal is wording on the salon poster. Confirm whether it means Hyder or Hydra Facial before booking or indexing this page.",
    problemTitle: "Verifying the menu name before choosing the service",
    problem: "The printed poster says Bridal Facial / Hyder Facial. It does not establish whether Hyder is the correct service name or a spelling variant. Customers should confirm the service before booking.",
    sections: [
      { heading: "Ask the salon to confirm the exact name", paragraphs: ["Do not assume the word means Hydra Facial or another treatment. Ask which service is currently offered, what the actual products and steps are, and whether it is the same option as Bridal Facial.", "The page keeps the printed wording until the business verifies it. It should remain excluded from Google indexing while the service name is uncertain."] },
      { heading: "Check the combined package details", paragraphs: ["The poster lists a single ₹4,999 Bridal Facial / Hyder Facial package with Face De-Tan, Chocolate Waxing, threading, Glass Shine Pedi Spa, Glass Shine Mani Spa, Hair Cut and Botox Spa.", "Confirm the facial selected and the exact Botox Spa add-on. No separate Hyder Facial price is printed."] }
    ],
    bookingQuestions: ["What is the confirmed service name?", "Is it the same treatment as the Bridal Facial option?", "Can the salon confirm every ₹4,999 package inclusion?"],
    faqs: [
      { question: "Does Hyder Facial mean Hydra Facial?", answer: "The poster alone does not confirm that. Ask the salon for the correct service name before booking." },
      { question: "Should this page be indexed?", answer: "Not until the service name and treatment description are verified by the business." }
    ],
    blogSlugs: ["bridal-beauty-prep-ullal", "choosing-the-right-facial-for-your-skin-type"]
  },
  "10-step-whitening-facial-ullal": {
    metaDescription: "10-step whitening facial in Ullal at Elite Perimeter. Ask for the ten steps, product names and full package inclusions before booking.",
    problemTitle: "Knowing what the ten steps actually are",
    problem: "The menu identifies a 10-Step Whitening Facial but does not name each step or product. Customers should request the actual sequence before deciding whether the service matches their expectations.",
    sections: [
      { heading: "Request the step-by-step list", paragraphs: ["Ask the salon to explain all ten steps and identify the products used. The number of steps alone does not describe the process or guarantee a particular skin result.", "Mention known sensitivities and ask which products are used at each stage. Confirm whether the salon offers the facial alone or only as part of the premium combination."] },
      { heading: "Check the other services in the ₹3,499 package", paragraphs: ["The printed premium package includes 10-Step Whitening Facial, Face De-Tan, waxing for full arms, underarms and full legs, eyebrow and upper-lip threading, Lavender Pedi Spa, Lavender Mani Spa, Hair Cut and Botox Spa.", "Confirm the actual ten steps and the exact Botox Spa service. ₹3,499 is the full package price, not the standalone facial rate."] }
    ],
    bookingQuestions: ["Can you provide the names of all ten facial steps?", "Which products are used and what aftercare is recommended?", "What is included in the full ₹3,499 combination?"],
    faqs: [
      { question: "Are the ten steps listed on the poster?", answer: "No. The poster names a 10-Step Whitening Facial but does not enumerate the steps. Ask the salon for the current step list." },
      { question: "Does the ₹3,499 price cover only the facial?", answer: "No. It is the full premium combination price with waxing, threading, mani-pedi, Hair Cut and Botox Spa." }
    ],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "salon-care-on-a-budget-ullal"]
  },
  "face-de-tan-ullal": {
    metaDescription: "Face de-tan in Ullal at Elite Perimeter. Ask about the product, steps and package areas, and confirm the current standalone price.",
    problemTitle: "Clarifying what a de-tan appointment can and cannot promise",
    problem: "Customers may search for de-tan because of a visible tan or uneven-looking skin. The service name does not identify the product, process or expected result, so these should be discussed before booking.",
    sections: [
      { heading: "Ask which product and steps are included", paragraphs: ["Ask the salon which de-tan product is used, how it is applied and what the appointment includes. Mention any known sensitivity or previous reaction before the service begins.", "Avoid assuming that a de-tan treatment guarantees a particular complexion or removes every mark. Ask the salon to explain the realistic purpose of its listed service."] },
      { heading: "Check how de-tan is bundled with facials", paragraphs: ["Face De-Tan appears alongside Chocolate Facial and Whitening Facial options in several packages. Depending on the combination, the poster also includes threading, waxing, manicure and pedicure or other hair services.", "Check the complete inclusion list and ask for the standalone de-tan price if you only need this service. A package price is not the rate for de-tan alone."] }
    ],
    bookingQuestions: ["Which de-tan product is used?", "What result can reasonably be expected from this service?", "Is the service standalone or part of a package?"],
    faqs: [
      { question: "Does Face De-Tan guarantee complete tan removal?", answer: "No such guarantee is stated on the printed menu. Ask the salon to explain the process and realistic expectations." },
      { question: "Is de-tan included in the facial packages?", answer: "Yes. The printed Chocolate, Whitening and premium combinations list Face De-Tan among the inclusions. Check each package for its full details." }
    ],
    blogSlugs: ["choosing-the-right-facial-for-your-skin-type", "salon-care-on-a-budget-ullal"]
  },
  "full-arms-waxing-ullal": {
    metaDescription: "Full arms waxing in Ullal at Elite Perimeter. Confirm the coverage, waxing process, preparation and current standalone price before booking.",
    problemTitle: "Confirming full-arm coverage before waxing",
    problem: "Customers may mean different coverage when they ask for full-arm waxing. Confirm the exact area, product and process before the appointment so there is no confusion about what is included.",
    sections: [
      { heading: "Agree on the body area and product", paragraphs: ["Ask the professional to confirm the area covered by full-arm waxing and whether the service includes the hands or stops at a particular point. The package poster lists full arms as an inclusion but does not define the exact boundaries.", "The menu also lists Chocolate Waxing in premium packages. Ask whether the chosen service is regular or chocolate waxing and which product is used."] },
      { heading: "Discuss sensitivity and hygiene before starting", paragraphs: ["Mention any previous redness or skin sensitivity. Ask how the work area and tools are prepared and what aftercare is recommended. Do not assume a specific technique is pain-free or suitable for every customer.", "Full Arms Waxing appears in the ₹1,399 Chocolate Facial + De-Tan + Waxing option and several larger packages. Confirm the full package inclusion list if you are choosing a combination."] }
    ],
    bookingQuestions: ["What exact area is included in full-arm waxing?", "Is this regular waxing or chocolate waxing?", "What preparation, hygiene and aftercare steps should I know?"],
    faqs: [
      { question: "Is full-arm waxing included in the ₹1,399 package?", answer: "The Chocolate Facial + Face De-Tan + Waxing package at ₹1,399 lists full arms, underarms and full legs." },
      { question: "Is the package price the standalone full-arm waxing rate?", answer: "No. It is the price for the full combination. Ask for the standalone waxing rate." }
    ],
    blogSlugs: ["threading-vs-waxing", "salon-hygiene-checklist"]
  },
  "underarms-waxing-ullal": {
    metaDescription: "Underarms waxing in Ullal at Elite Perimeter. Discuss sensitivity, product choice and preparation, then confirm the current standalone price.",
    problemTitle: "Planning an underarm waxing appointment with sensitivity in mind",
    problem: "Underarm skin may be a concern for customers who have previously experienced discomfort or redness. Tell the professional about your experience and ask how the service is performed before proceeding.",
    sections: [
      { heading: "Confirm the product and appointment area", paragraphs: ["Ask whether the booking is for underarms only or part of a larger waxing combination. The printed packages include underarms alongside full arms and either half or full legs.", "Ask which wax product is being used and whether the service is regular or chocolate waxing. Do not infer the product from the package price alone."] },
      { heading: "Discuss preparation, hygiene and aftercare", paragraphs: ["Mention any previous skin reaction, irritation or concern before the service. Ask how the work area and tools are prepared and what aftercare the salon recommends.", "If you have an active skin problem or are unsure whether waxing is suitable, pause and seek appropriate advice rather than treating a salon service as a solution."] }
    ],
    bookingQuestions: ["Is the booking for underarms only or a complete package?", "Which wax product is being used?", "What preparation and aftercare are recommended for this area?"],
    faqs: [
      { question: "Which printed packages include underarms waxing?", answer: "Several Chocolate Facial, Whitening Facial and premium combinations list underarms alongside other body areas. Check the full package inclusion list." },
      { question: "Is the standalone underarms waxing price printed?", answer: "No standalone rate is shown on the supplied posters. Confirm it with the salon." }
    ],
    blogSlugs: ["threading-vs-waxing", "salon-hygiene-checklist"]
  },
  "half-legs-waxing-ullal": {
    metaDescription: "Half legs waxing in Ullal at Elite Perimeter. Confirm the exact coverage, product and current standalone price before choosing a package.",
    problemTitle: "Clarifying what half legs means in the appointment",
    problem: "A customer comparing half-leg and full-leg waxing should confirm the exact coverage rather than assume the same boundary is used by every service provider.",
    sections: [
      { heading: "Confirm the coverage before booking", paragraphs: ["Ask the professional where the half-leg service begins and ends and whether the feet are included. The printed menu lists half legs in selected packages, but does not define the precise boundary.", "If you need the full leg area, ask for the full-legs option instead and confirm the price difference."] },
      { heading: "Check which package lists half legs", paragraphs: ["The ₹999 Cleanup + Waxing + Threading package lists full arms, underarms and half legs. The ₹1,799 Chocolate Facial mani-pedi combination, ₹2,299 Complete Chocolate package and some Whitening Facial packages also list half legs.", "The package price applies to all included services. Ask for the standalone half-legs rate when booking only waxing."] }
    ],
    bookingQuestions: ["Where does the salon define half-leg coverage?", "Are the feet included?", "Does your selected package list half legs or full legs?"],
    faqs: [
      { question: "Which ₹999 package includes half legs waxing?", answer: "Cleanup + Waxing + Threading at ₹999 lists full arms, underarms and half legs, plus eyebrow and upper-lip threading." },
      { question: "Is half legs the same as full legs?", answer: "The menu lists them separately. Confirm the exact coverage with the salon before booking." }
    ],
    blogSlugs: ["threading-vs-waxing", "salon-care-on-a-budget-ullal"]
  },
  "full-legs-waxing-ullal": {
    metaDescription: "Full legs waxing in Ullal at Elite Perimeter. Ask about coverage, product, preparation and aftercare, and confirm the standalone rate.",
    problemTitle: "Knowing what full-leg waxing covers",
    problem: "Customers should confirm the full-leg coverage and whether the feet are included. This avoids comparing packages that list different body areas as if they were identical.",
    sections: [
      { heading: "Check the exact coverage", paragraphs: ["Ask the salon to define the full-leg area included in the appointment. If you want the feet included, confirm that explicitly rather than relying on the phrase full legs.", "Ask whether the booking uses regular or chocolate wax and which product is planned. Mention previous sensitivity or reactions before the appointment."] },
      { heading: "Compare full-leg and half-leg package options", paragraphs: ["The ₹1,399 Chocolate Facial + Face De-Tan + Waxing package lists full arms, underarms and full legs. The ₹1,499 Whitening Facial + Face De-Tan + Waxing option lists the same areas. Several other combinations list half legs instead.", "Read the inclusion list carefully and confirm the current standalone price if you are not booking the complete package."] }
    ],
    bookingQuestions: ["Does full-leg waxing include the feet?", "Which wax product is being used?", "Does the package list full legs or half legs?"],
    faqs: [
      { question: "Which package prices show full-leg waxing?", answer: "The printed Chocolate Facial + De-Tan + Waxing and Whitening Facial + De-Tan + Waxing packages are each ₹1,399 and list full arms, underarms and full legs." },
      { question: "Can I use the package price for only full-leg waxing?", answer: "No. The package price applies to every service listed in that combination. Ask for the separate full-leg waxing rate." }
    ],
    blogSlugs: ["threading-vs-waxing", "salon-care-on-a-budget-ullal"]
  },
  "chocolate-waxing-ullal": {
    metaDescription: "Chocolate waxing in Ullal at Elite Perimeter. Confirm the wax product, included body areas and current standalone rate before booking.",
    problemTitle: "Finding out what makes the waxing option different",
    problem: "A customer may choose Chocolate Waxing because of the menu name but still need to know which product is used and which body areas are included. Ask for those details rather than assuming the name explains the formula.",
    sections: [
      { heading: "Confirm the product and body areas", paragraphs: ["Ask whether the appointment is for full arms, underarms, full legs or another area. The premium 24K Gold Facial and Bridal Facial / Hyder Facial packages label their waxing inclusion as Chocolate Waxing for full arms, underarms and full legs.", "Ask the salon which product is used and whether any preparation or aftercare instructions apply. Mention previous reactions or sensitivities."] },
      { heading: "Read the price as a package amount", paragraphs: ["Chocolate Waxing is included in the ₹4,499 Luxury 24K Gold Facial package and ₹4,999 Bridal Facial / Hyder Facial package. Those amounts cover multiple treatments, not only waxing.", "The supplied poster does not show a standalone Chocolate Waxing price. Confirm the individual rate and current availability before booking."] }
    ],
    bookingQuestions: ["Which chocolate wax product is used?", "Which body areas are included in this booking?", "Is the standalone service available and what is its current price?"],
    faqs: [
      { question: "Which printed packages include Chocolate Waxing?", answer: "The ₹4,499 24K Gold Facial and ₹4,999 Bridal Facial / Hyder Facial premium packages list Chocolate Waxing for full arms, underarms and full legs." },
      { question: "Does the poster list a standalone Chocolate Waxing rate?", answer: "No. The printed amount belongs to the complete premium package." }
    ],
    blogSlugs: ["threading-vs-waxing", "salon-hygiene-checklist"]
  },
  "eyebrow-threading-ullal": {
    metaDescription: "Eyebrow threading in Ullal at Elite Perimeter. Discuss the shape, skin sensitivity and current standalone price before your appointment.",
    problemTitle: "Getting the eyebrow shape agreed before threading",
    problem: "The concern is often not only threading itself but whether the final shape matches what the customer asked for. Discuss the shape and the amount of hair to remove before starting.",
    sections: [
      { heading: "Use a reference to explain the shape", paragraphs: ["Show a reference image or describe whether you want a light clean-up or a more defined shape. Ask the professional to confirm the plan before removing more hair.", "If you are unsure, say so and discuss a conservative approach. A reference is a guide for the conversation, not a promise that the exact same shape will suit every face."] },
      { heading: "Check sensitivity and combo inclusions", paragraphs: ["Tell the professional about previous redness or irritation and ask what preparation and aftercare are recommended. Ask how tools and the work area are prepared.", "Eyebrow threading is included in several printed combinations, sometimes with upper lip and sometimes also chin and forehead. Read the exact inclusion list before choosing the package."] }
    ],
    bookingQuestions: ["Can we agree on the brow shape before starting?", "Is this a standalone eyebrow service or a package inclusion?", "What preparation and aftercare do you recommend?"],
    faqs: [
      { question: "Does every threading package include chin and forehead?", answer: "No. Some packages list only eyebrows and upper lip, while the ₹1,399 facial/threading combinations include eyebrows, upper lip, chin and forehead." },
      { question: "Is the standalone eyebrow-threading price printed?", answer: "No separate rate is shown in the supplied menu. Contact the salon for the current price." }
    ],
    blogSlugs: ["eyebrow-threading-first-visit", "threading-vs-waxing", "salon-hygiene-checklist"]
  },
  "upper-lip-threading-ullal": {
    metaDescription: "Upper lip threading in Ullal at Elite Perimeter. Confirm the service area, skin preparation and current standalone price before booking.",
    problemTitle: "Planning a small-area threading appointment",
    problem: "Customers booking upper-lip threading may be concerned about discomfort or a skin reaction. Explain your previous experience and ask how the appointment is prepared.",
    sections: [
      { heading: "Confirm the area and service", paragraphs: ["Ask whether the appointment is for upper lip only or part of a larger threading combination. The poster includes upper-lip threading alongside eyebrows in several packages.", "If you also need chin or forehead threading, confirm those areas separately. They appear in some package inclusion lists but not every combination."] },
      { heading: "Discuss previous irritation and aftercare", paragraphs: ["Tell the professional if you have experienced redness or irritation after threading. Ask what to expect, how the area is prepared and which aftercare instructions are recommended.", "A package price includes the other services listed with upper-lip threading. Ask for its separate rate if you need only this area."] }
    ],
    bookingQuestions: ["Is the booking for upper lip only?", "Does the package include eyebrows, chin or forehead as well?", "What should I know about preparation and aftercare?"],
    faqs: [
      { question: "Which packages include upper-lip threading?", answer: "Several packages include it with eyebrows. The ₹1,399 Chocolate and Whitening Facial threading combinations also list chin and forehead." },
      { question: "Is upper-lip threading priced separately on the poster?", answer: "No standalone price is printed. Confirm the current rate with the salon." }
    ],
    blogSlugs: ["eyebrow-threading-first-visit", "threading-vs-waxing"]
  },
  "chin-threading-ullal": {
    metaDescription: "Chin threading in Ullal at Elite Perimeter. Confirm the exact area, threading process and current standalone price before booking.",
    problemTitle: "Clarifying the area included in chin threading",
    problem: "A customer may use the term chin threading for a particular small area or a wider facial-grooming request. Agree on the exact area before the appointment begins.",
    sections: [
      { heading: "Point out the area you want treated", paragraphs: ["Explain which part of the chin you want threaded and whether you are booking chin only or a larger facial-threading appointment. If you are unsure, ask the professional to confirm the area before starting.", "The salon menu includes chin threading in selected facial and threading combinations, but does not show a separate standalone chin-threading price."] },
      { heading: "Check the full package inclusion", paragraphs: ["The ₹1,399 Chocolate Facial + De-Tan + Threading and ₹1,499 Whitening Facial + De-Tan + Threading packages list eyebrows, upper lip, chin and forehead.", "The price is for the complete facial, de-tan and threading combination. Ask for the current individual rate if you need chin threading alone."] }
    ],
    bookingQuestions: ["Can we confirm the exact area before starting?", "Is chin threading booked alone or with other facial areas?", "What is the current standalone rate?"],
    faqs: [
      { question: "Does the ₹1,399 Chocolate Facial threading package include chin?", answer: "Yes. It lists eyebrows, upper lip, chin and forehead threading, in addition to the facial and de-tan." },
      { question: "Does chin threading have a printed standalone rate?", answer: "No standalone chin-threading rate is shown on the supplied poster." }
    ],
    blogSlugs: ["eyebrow-threading-first-visit", "threading-vs-waxing"]
  },
  "forehead-threading-ullal": {
    metaDescription: "Forehead threading in Ullal at Elite Perimeter. Discuss the hairline area, skin sensitivity and current standalone price before booking.",
    problemTitle: "Agreeing on the forehead and hairline boundary",
    problem: "Forehead threading needs a clear discussion about the area to be cleaned and the hairline boundary. A quick confirmation helps prevent misunderstanding about how much hair will be removed.",
    sections: [
      { heading: "Show the exact area you want threaded", paragraphs: ["Point out the area and explain whether you want only stray hairs addressed or a wider forehead clean-up. Ask the professional to confirm the boundary before starting.", "Mention any previous skin irritation or sensitivity and ask about preparation and aftercare."] },
      { heading: "Check whether forehead is part of your selected package", paragraphs: ["Forehead threading is listed in the ₹1,399 Chocolate Facial + De-Tan + Threading and ₹1,499 Whitening Facial + De-Tan + Threading packages. Those combinations also include eyebrows, upper lip and chin.", "Other packages list only eyebrows and upper lip. Compare the exact inclusion list and ask for the standalone forehead-threading price if needed."] }
    ],
    bookingQuestions: ["Which forehead area will be included?", "Does the chosen package include forehead as well as chin?", "What is the standalone rate and recommended aftercare?"],
    faqs: [
      { question: "Which package lists forehead threading?", answer: "The Chocolate Facial threading package at ₹1,399 and the Whitening Facial threading package at ₹1,499 list eyebrows, upper lip, chin and forehead." },
      { question: "Is forehead threading included in every combo?", answer: "No. Check the specific inclusion list. Several packages list only eyebrows and upper lip." }
    ],
    blogSlugs: ["eyebrow-threading-first-visit", "threading-vs-waxing"]
  },
  "pedicure-ullal": {
    metaDescription: "Pedicure in Ullal at Elite Perimeter Unisex Salon. Ask what foot-care steps are included and confirm the current standalone price.",
    problemTitle: "Knowing what a pedicure appointment includes",
    problem: "The word pedicure can cover different service details. Customers should confirm the steps, finish and hygiene process rather than assume a package includes every type of foot care.",
    sections: [
      { heading: "Confirm the service steps and finish", paragraphs: ["Ask which foot-care steps are included, whether nail shaping or polish is part of the appointment and how long the session is expected to take. If you want a particular finish, say so before starting.", "The menu separately lists standard Pedicure, Lavender Pedi Spa and Glass Shine Pedi Spa. Ask the salon to explain the differences before choosing."] },
      { heading: "Compare standalone pedicure with package inclusion", paragraphs: ["Pedicure appears in the Chocolate Facial mani-pedi combination at ₹1,799 and Whitening Facial mani-pedi combination at ₹1,899. Larger packages include named Lavender or Glass Shine versions.", "The listed package rate covers every service included. No separate standalone Pedicure price is printed."] }
    ],
    bookingQuestions: ["What foot-care steps are included?", "Is nail polish or another finish included?", "How are tools and the foot-care area prepared?"],
    faqs: [
      { question: "What is the difference between Pedicure and Lavender Pedi Spa?", answer: "The menu lists them as separate options but does not explain the process difference. Ask the salon to compare the inclusions." },
      { question: "Is ₹1,799 the standalone pedicure price?", answer: "No. It is the printed Chocolate Facial + De-Tan + Waxing + Mani-Pedi combination price." }
    ],
    blogSlugs: ["make-manicure-pedicure-last-longer", "salon-hygiene-checklist", "salon-care-on-a-budget-ullal"]
  },
  "manicure-ullal": {
    metaDescription: "Manicure in Ullal at Elite Perimeter Unisex Salon. Confirm nail-care steps, finish, hygiene preparation and the current standalone price.",
    problemTitle: "Choosing a manicure finish and understanding maintenance",
    problem: "Customers may want tidier nails or a longer-lasting finish but not know which steps or products the appointment includes. Confirm the service details before comparing prices.",
    sections: [
      { heading: "Agree on shaping and finishing", paragraphs: ["Ask what nail shaping, cleaning and finishing steps are included. If you want polish or another finish, confirm whether it is included or charged separately.", "The menu also lists Lavender Mani Spa and Glass Shine Mani Spa as separate options. Ask the salon to explain the process and differences."] },
      { heading: "Understand maintenance and hygiene", paragraphs: ["Ask for aftercare advice based on the product and finish used. If your nails are uncomfortable, weak or discoloured, tell the professional before the appointment and ask whether the service should be adjusted.", "Manicure appears in the ₹1,799 Chocolate Facial mani-pedi package and ₹1,899 Whitening Facial mani-pedi package. Those amounts cover full combinations, not the standalone manicure."] }
    ],
    bookingQuestions: ["Which shaping and finishing steps are included?", "Is polish or nail art included?", "How are reusable tools prepared between customers?"],
    faqs: [
      { question: "Does a standard manicure include nail art?", answer: "The supplied menu does not specify nail art inclusions. Ask the salon whether it is available and priced separately." },
      { question: "Which combos include manicure?", answer: "The printed ₹1,799 Chocolate Facial and ₹1,899 Whitening Facial mani-pedi combinations include Manicure and Pedicure." }
    ],
    blogSlugs: ["make-manicure-pedicure-last-longer", "salon-hygiene-checklist"]
  },
  "lavender-pedi-spa-ullal": {
    metaDescription: "Lavender Pedi Spa in Ullal at Elite Perimeter. Ask about the included foot-care steps, products and current package or standalone rate.",
    problemTitle: "Understanding the Lavender Pedi Spa menu option",
    problem: "The name Lavender Pedi Spa identifies a menu option but does not list the product formula or exact treatment steps. Customers should ask for those details before booking.",
    sections: [
      { heading: "Ask what the Lavender option includes", paragraphs: ["Confirm the products used, the foot-care steps and the finish included in the appointment. Do not assume a particular essential oil, ingredient or result from the service name alone.", "Ask whether the service is available by itself or only within a premium combination, and request the current standalone price if applicable."] },
      { heading: "Check the premium package inclusion", paragraphs: ["Lavender Pedi Spa appears in the ₹3,499 Korean Glass Facial and ₹3,499 10-Step Whitening Facial premium packages. Both include several other services, including hair, waxing, threading and Lavender Mani Spa.", "The ₹3,499 rate is for the complete package. Confirm the Botox Spa item listed in both combinations."] }
    ],
    bookingQuestions: ["Which products and steps are included in Lavender Pedi Spa?", "Is it available as a standalone appointment?", "What is the current standalone rate and package availability?"],
    faqs: [
      { question: "Which packages include Lavender Pedi Spa?", answer: "The ₹3,499 Korean Glass Facial and ₹3,499 10-Step Whitening Facial premium packages list Lavender Pedi Spa." },
      { question: "Does the menu specify the lavender product ingredients?", answer: "No ingredient list is printed. Ask the salon for the product details." }
    ],
    blogSlugs: ["make-manicure-pedicure-last-longer", "natural-and-organic-beauty-treatments", "salon-hygiene-checklist"]
  },
  "lavender-mani-spa-ullal": {
    metaDescription: "Lavender Mani Spa in Ullal at Elite Perimeter. Confirm the products, hand-care steps and current package or standalone price before booking.",
    problemTitle: "Checking the details behind a named hand-spa option",
    problem: "A premium menu name may sound clear but still leave questions about the products, steps and finish. Confirm those details so you know what your appointment includes.",
    sections: [
      { heading: "Ask about the hand-care process", paragraphs: ["Ask which products are used, which hand-care steps are included and what finish to expect. If you have known sensitivities, request the product information before the service.", "Do not infer a particular natural, organic or certified ingredient claim from the word Lavender. Ask the salon for the product details."] },
      { heading: "Compare the premium combinations", paragraphs: ["Lavender Mani Spa appears in the ₹3,499 Korean Glass Facial and ₹3,499 10-Step Whitening Facial packages. Each package also lists Lavender Pedi Spa, hair, waxing, threading and Botox Spa.", "Confirm every included service and ask whether a standalone Lavender Mani Spa appointment is available."] }
    ],
    bookingQuestions: ["Which products and steps are part of Lavender Mani Spa?", "Is the service available independently?", "Can you confirm the full package inclusions and current rate?"],
    faqs: [
      { question: "Is Lavender Mani Spa the same as standard Manicure?", answer: "The menu lists them separately but does not explain the detailed differences. Ask the salon to compare the process and inclusions." },
      { question: "What is the standalone Lavender Mani Spa price?", answer: "No standalone price is printed. Confirm the current rate with the salon." }
    ],
    blogSlugs: ["make-manicure-pedicure-last-longer", "natural-and-organic-beauty-treatments"]
  },
  "glass-shine-pedi-spa-ullal": {
    metaDescription: "Glass Shine Pedi Spa in Ullal at Elite Perimeter. Ask about the foot-care process, products and current premium package inclusions.",
    problemTitle: "Confirming the finish and steps of Glass Shine Pedi Spa",
    problem: "The phrase Glass Shine Pedi Spa describes a menu option but does not specify its exact process or products. Ask the salon what is included rather than relying on the finish name alone.",
    sections: [
      { heading: "Ask for the actual service description", paragraphs: ["Confirm the foot-care steps, products and finish included. If you are comparing it with standard Pedicure or Lavender Pedi Spa, ask the salon to explain the practical differences.", "Mention any discomfort or concern before the appointment and ask how the work area and tools are prepared."] },
      { heading: "Review its premium package price", paragraphs: ["Glass Shine Pedi Spa appears in the ₹4,499 Luxury 24K Gold Facial package and ₹4,999 Bridal Facial / Hyder Facial package. Both combinations also include Glass Shine Mani Spa and other services.", "Those amounts apply to the complete package. The poster does not show a standalone Glass Shine Pedi Spa rate."] }
    ],
    bookingQuestions: ["Which products and steps are used?", "How does this differ from standard Pedicure or Lavender Pedi Spa?", "Is the service available alone and what is its current rate?"],
    faqs: [
      { question: "Which packages include Glass Shine Pedi Spa?", answer: "The ₹4,499 Luxury 24K Gold Facial and ₹4,999 Bridal Facial / Hyder Facial premium packages list it." },
      { question: "Does Glass Shine mean a guaranteed finish?", answer: "The poster names the service but does not guarantee a specific result. Ask the salon to explain the finish and products." }
    ],
    blogSlugs: ["make-manicure-pedicure-last-longer", "salon-hygiene-checklist"]
  },
  "glass-shine-mani-spa-ullal": {
    metaDescription: "Glass Shine Mani Spa in Ullal at Elite Perimeter. Confirm the hand-care steps, products and full premium package inclusions before booking.",
    problemTitle: "Comparing Glass Shine Mani Spa with other manicure options",
    problem: "Customers may see Glass Shine Mani Spa and standard Manicure as similar choices. The menu lists them separately but does not describe the detailed process, so ask the salon what distinguishes them.",
    sections: [
      { heading: "Understand the service before choosing", paragraphs: ["Ask about the products, nail preparation, hand-care steps and finish. Confirm whether polish, shaping or another add-on is included or priced separately.", "If you have weak or uncomfortable nails, mention that before the appointment. Ask how the salon handles tool preparation and what maintenance advice applies to the finish."] },
      { heading: "Check which premium packages list the service", paragraphs: ["Glass Shine Mani Spa appears in the ₹4,499 Luxury 24K Gold Facial and ₹4,999 Bridal Facial / Hyder Facial premium packages. Both include Glass Shine Pedi Spa as well.", "The printed price covers the complete package. Ask for the standalone rate if you only need the hand-care service."] }
    ],
    bookingQuestions: ["What steps distinguish Glass Shine Mani Spa from standard Manicure?", "Is polish or nail art included?", "What is the standalone price and how are tools prepared?"],
    faqs: [
      { question: "Which combo includes Glass Shine Mani Spa?", answer: "The ₹4,499 24K Gold Facial package and ₹4,999 Bridal Facial / Hyder Facial package list Glass Shine Mani Spa." },
      { question: "Is nail art included?", answer: "The supplied poster does not mention nail art. Ask the salon whether it is offered and priced separately." }
    ],
    blogSlugs: ["make-manicure-pedicure-last-longer", "salon-hygiene-checklist"]
  }
};

export function getServiceEditorial(slug: string) {
  return serviceEditorial[slug];
}

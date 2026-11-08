import Image from "next/image";
import Link from "next/link";
import { categories, services, site, packages, formatINR } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";
import { JsonLd } from "@/components/StructuredData";
import { businessJsonLd } from "@/lib/seo";
import { ServiceCard } from "@/components/ServiceCard";
import { CategoryImage, VideoSlot } from "@/components/Media";
import { ReferenceTreatmentBands } from "@/components/ReferenceTreatmentBands";
import { categoryRepresentativeSlugs } from "@/lib/service-images";

export default function HomePage() {
  const featured = ["haircut-ullal", "hair-spa-ullal", "chocolate-facial-ullal", "korean-glass-facial-ullal", "eyebrow-threading-ullal", "pedicure-ullal"]
    .map((slug) => services.find((service) => service.slug === slug)!)
    .filter(Boolean);
  const featuredPackages = packages.filter((item) => ["haircut-hair-spa", "complete-chocolate-beauty", "korean-glass-facial-premium"].includes(item.slug));
  const referenceFeatured = ["hair-spa-ullal", "chocolate-facial-ullal", "pedicure-ullal"]
    .map((slug) => services.find((service) => service.slug === slug)!)
    .filter(Boolean);

  return (
    <>
      <JsonLd data={businessJsonLd()} />
      <section className="home-hero-track home-hero-track--peach" data-home-hero-track>
        <div className="home-hero-sticky">
          <div className="home-hero-background" aria-hidden="true">
            <div className="home-hero-bg-media" data-hero-media>
              <Image
                className="home-hero-bg-image"
                src="/images/elite-peach-hero-v2.webp"
                alt="Premium beauty portrait with glossy brunette hair against a soft peach background"
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
            <div className="home-hero-scrim" data-hero-scrim />
            <div className="home-hero-grain" />
          </div>

          <div className="container home-hero-stage">
            <div className="home-hero-copy" data-hero-copy>
              <div className="eyebrow">Beauty · Care · Confidence · Ullal</div>
              <h1 className="hero-title"><span className="hero-title-line"><span>Unisex Salon</span></span><span className="hero-title-line"><span>in Ullal, Bengaluru.</span></span></h1>
              <p className="lead">Explore hair, facial and personal grooming services for men and women at Elite Perimeter Unisex Salon on Ullal Main Road.</p>
              <div className="hero-actions">
                <a className="button-primary" href={`tel:${site.phoneE164}`}>Call the salon <span aria-hidden="true">↗</span></a>
                <Link className="button-secondary" href="/services/">Explore services</Link>
              </div>
              <div className="hero-location-line"><span className="location-pin" aria-hidden="true">⌖</span> Near Mangalore Independent PU College · Above HDFC Bank · Bengaluru 560056</div>
            </div>

            <div className="home-hero-caption">
              <span>ELITE PERIMETER · ULLAL</span>
              <strong>Beauty, care and your own kind of confidence.</strong>
              <small>Hair, skin and grooming · Ullal, Bengaluru</small>
            </div>
            <div className="home-hero-scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div>
          </div>
        </div>
      </section>

      <div className="home-content-sheet">
      <section className="trust-strip" aria-label="Salon information">
        <div className="container trust-strip-inner">
          <div className="trust-item"><strong>Men & women</strong><span>Unisex salon services</span></div>
          <div className="trust-item"><strong>Ullal Main Road</strong><span>Jnana Ganga Nagar</span></div>
          <div className="trust-item"><strong>28 services</strong><span>Across five menu groups</span></div>
          <div className="trust-item"><strong>Since 2021</strong><span>Opening date supplied by the business</span></div>
        </div>
      </section>

      <section className="section reference-feature-section">
        <div className="container">
          <div className="section-heading">
            <div><div className="kicker">A few ways to make time for yourself</div><h2>Three treatments to explore.</h2></div>
            <p>Editorial service highlights inspired by the layered treatment boards in your references. Each link opens the full service page.</p>
          </div>
          <ReferenceTreatmentBands services={referenceFeatured} categories={categories} />
        </div>
      </section>

      <section className="section home-category-section">
        <div className="container">
          <div className="section-heading">
            <div><div className="kicker">Explore the menu</div><h2>Start with what you need.</h2></div>
            <p>Browse by service type, then open the individual service page for details and the questions to ask before booking.</p>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link className="category-tile" href={`/services/${category.slug}/`} key={category.slug}>
                <CategoryImage
                  category={category.slug}
                  serviceSlug={categoryRepresentativeSlugs[category.slug]}
                  alt={`Representative ${category.title} service image at Elite Perimeter.`}
                />
                <div className="category-tile-content">
                  <span className="category-tile-number">0{index + 1} / {category.serviceSlugs.length.toString().padStart(2, "0")} SERVICES</span>
                  <h3>{category.title}</h3><p>{category.eyebrow}</p>
                  <span className="text-link">Explore category <span aria-hidden="true">↗</span></span>
                </div>
              </Link>
            ))}
          </div>
          <p className="image-disclaimer">Service imagery is for visual reference. It is not a record of an individual client's result or a claim about completed salon work.</p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-heading">
            <div><div className="kicker">Popular starting points</div><h2>Explore individual services.</h2></div>
            <Link className="text-link" href="/services/">View all 28 services <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="feature-grid">{featured.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container journey-section">
          <div className="journey-intro">
            <div className="kicker">A clearer way to plan</div>
            <h2>From first look to salon visit.</h2>
            <p>Explore the menu at your pace, then speak with the team to confirm the details before travelling.</p>
            <Link className="text-link" href="/contact/">Contact the salon <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="journey-steps">
            <article className="journey-step">
              <span className="journey-step-number">01</span>
              <div><h3>Choose a service</h3><p>Browse hair, facial, waxing, threading and hand-and-foot care. Open the service that interests you.</p></div>
              <Link href="/services/" aria-label="Browse all salon services">Explore menu <span aria-hidden="true">↗</span></Link>
            </article>
            <article className="journey-step">
              <span className="journey-step-number">02</span>
              <div><h3>Confirm the details</h3><p>Call to check availability, treatment steps, current standalone price and package inclusions.</p></div>
              <a href={`tel:${site.phoneE164}`}>Call {site.phoneDisplay} <span aria-hidden="true">↗</span></a>
            </article>
            <article className="journey-step">
              <span className="journey-step-number">03</span>
              <div><h3>Find the salon</h3><p>Use the Ullal Main Road address and nearby landmarks to plan your visit.</p></div>
              <Link href="/location/ullal/">View location <span aria-hidden="true">↗</span></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container split-feature">
          <div className="split-feature-image">
            <Image src="/images/beauty-editorial.jpg" alt="Illustrative beauty editorial image; replace with a real Elite Perimeter service photograph" fill sizes="(max-width: 780px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            <span className="image-note">Illustrative image · replace with original work</span>
          </div>
          <div className="split-feature-copy">
            <div className="kicker">Know what's included</div>
            <h2>Compare the combination, not just the price.</h2>
            <p>The printed menu includes combinations of facials, de-tan, waxing, threading, mani-pedi and hair services. Review the complete list of inclusions so you can ask about the right package.</p>
            <div className="number-points">
              <div className="number-point"><b>01</b><p>Compare the printed package price with the services listed inside it.</p></div>
              <div className="number-point"><b>02</b><p>Ask the salon to confirm any treatment names or options that are unclear.</p></div>
              <div className="number-point"><b>03</b><p>Confirm current availability and any standalone price before your visit.</p></div>
            </div>
            <Link className="button-primary" href="/packages/">View all salon packages</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark salon-film-section">
        <div className="container">
          <div className="section-heading">
            <div><div className="kicker">The salon, in person</div><h2>A look inside Elite Perimeter.</h2></div>
            <p>Original salon footage can help visitors understand the space before they arrive. This video area is ready for the salon's own introduction film.</p>
          </div>
          <VideoSlot />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><div className="kicker">Printed menu</div><h2>Salon packages & combinations.</h2></div>
            <Link className="text-link" href="/packages/">Compare all 14 packages <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="package-feature-grid">
            {featuredPackages.map((item) => (
              <article className="package-feature" key={item.slug}>
                <div className="kicker">{item.group}</div>
                <h3>{item.name}</h3>
                <div className="price">{formatINR(item.price)}</div>
                <p>{item.description}</p>
                <Link className="text-link" href={`/packages/${item.slug}/`}>See package inclusions <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
          <p className="muted" style={{ fontSize: 10, marginTop: 16 }}>Package rates are transcribed from the supplied posters. Confirm current availability before booking.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><div><div className="kicker">Customer guides</div><h2>Useful answers before you book.</h2></div><Link className="text-link" href="/blog/">Read all 12 guides <span aria-hidden="true">↗</span></Link></div>
          <div className="blog-feature-grid">
            {blogPosts.slice(0, 3).map((post) => <article className="blog-feature-card" key={post.slug}><span className="kicker">{post.category}</span><h3><Link href={`/blog/${post.slug}/`}>{post.h1}</Link></h3><p>{post.excerpt}</p><Link className="text-link" href={`/blog/${post.slug}/`}>Read guide <span aria-hidden="true">↗</span></Link></article>)}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container split-feature location-feature">
          <div className="split-feature-copy">
            <div className="kicker">Find us in Ullal</div>
            <h2>On Ullal Main Road, in Jnana Ganga Nagar.</h2>
            <p>{site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}, India.</p>
            <p className="muted">Near Mangalore Independent PU College and above HDFC Bank. Check directions and contact the salon before your visit.</p>
            <div className="hero-actions">
              <a className="button-primary" href={site.mapUrl} target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
              <Link className="button-secondary" href="/location/ullal/">Opening hours & location</Link>
            </div>
          </div>
          <div className="map-panel"><iframe title="Map showing Ullal Main Road, Jnana Ganga Nagar, Bengaluru" src="https://www.google.com/maps?q=1st%20Floor%20No%2039%20Ullal%20Main%20Road%20Jnana%20Ganga%20Nagar%20Bengaluru%20560056&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>

      <section className="section">
        <div className="container home-faq-cta">
          <div className="home-faq">
            <div className="kicker">A few useful details</div>
            <h2>Before you make the trip.</h2>
            <div className="faq-list">
              <details><summary>Are individual service prices listed?</summary><p>The supplied posters show combination package prices, not standalone rates for every service. Call the salon to confirm the current individual price.</p></details>
              <details><summary>Can I compare the package inclusions online?</summary><p>Yes. The packages page lists each printed combination and its included services. Confirm current availability with the salon.</p></details>
              <details><summary>Where is Elite Perimeter Unisex Salon?</summary><p>The salon is on Ullal Main Road in Jnana Ganga Nagar, near Mangalore Independent PU College and above HDFC Bank.</p></details>
            </div>
          </div>
          <aside className="home-final-cta">
            <span className="eyebrow light">Your next step</span>
            <h2>Have a service in mind?</h2>
            <p>Call the salon to confirm the treatment, current rate and appointment availability.</p>
            <a className="button-light" href={`tel:${site.phoneE164}`}>Call {site.phoneDisplay} <span aria-hidden="true">↗</span></a>
            <Link className="cta-text-link" href="/contact/">View contact details</Link>
          </aside>
        </div>
      </section>
      </div>
    </>
  );
}

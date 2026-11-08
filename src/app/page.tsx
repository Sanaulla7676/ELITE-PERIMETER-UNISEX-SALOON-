import Image from "next/image";
import Link from "next/link";
import ShinyText from "@/components/ShinyText";
import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollVelocity from "@/components/ScrollVelocity";
import CountUp from "@/components/CountUp";
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
              <h1 className="hero-title home-hero-brand-title">
                <span className="hero-title-line"><span className="home-hero-wordmark">ELITE</span></span>
                <span className="hero-title-line"><span className="home-hero-wordmark">PERIMETER</span></span>
                {" "}<span className="home-hero-keyword"><ShinyText text="Unisex Salon in Ullal, Bengaluru" color="#80534e" shineColor="#fffaf5" speed={5} shineWidth={28} softness={0.55} trigger="loop" /></span>
              </h1>
              <AnimatedContent direction="vertical" distance={24} duration={0.78} delay={0.28} ease="power3.out" threshold={0.2} trigger="mount" once initialOpacity={0} className="home-hero-description-reveal" style={{ visibility: "visible" }}>
                <p className="lead home-hero-brand-description">Elite Perimeter is a unisex salon in Ullal, Bengaluru, offering hair, facial and personal grooming services for men and women.</p>
              </AnimatedContent>

            </div>


          </div>
        </div>
      </section>

      <section className="home-motion-loop" aria-label="Elite Perimeter salon motion identity">
        <DeferredMotionFrame />
      </section>

      <div className="home-content-sheet">
      <section className="trust-strip" aria-label="Salon information">
        <div className="container trust-strip-inner">
          <div className="trust-item"><strong>Men & women</strong><span>Unisex salon services</span></div>
          <div className="trust-item"><strong>Ullal Main Road</strong><span>Jnana Ganga Nagar</span></div>
          <div className="trust-item"><strong><CountUp className="trust-count" to={28} from={0} duration={1.2} trigger="view" separator="," /> services</strong><span>Across five menu groups</span></div>
          <div className="trust-item"><strong>Since 2021</strong><span>Opening date supplied by the business</span></div>
        </div>
      </section>

      <section className="service-name-marquee" aria-label="Salon services">
        <ScrollVelocity
          texts={["Hair Cut   •   Hair Spa   •   Chocolate Facial   •   Keratin Spa   •   Bridal Facial   •   Manicure   •   Waxing"]}
          velocity={22}
          numCopies={5}
          gap={30}
          separator="✦"
          fontSize="clamp(16px, 1.55vw, 22px)"
          fontWeight={500}
          color="#642b43"
          pauseOnHover
          fadeEdges
          skewWithVelocity={0.12}
        />
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
          <AnimatedContent className="category-grid" direction="horizontal" distance={90} duration={0.9} ease="power3.out" threshold={0.2} stagger={0.1} once initialOpacity={0}>
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
          </AnimatedContent>
          <p className="image-disclaimer">Service imagery is for visual reference. It is not a record of an individual client's result or a claim about completed salon work.</p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-heading">
            <div><div className="kicker">Popular starting points</div><h2>Explore individual services.</h2></div>
            <Link className="text-link" href="/services/">View all 28 services <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="feature-grid">
            {featured.map((service, index) => (
              <AnimatedContent
                key={service.slug}
                className="service-card-reveal"
                direction="horizontal"
                reverse={index % 2 === 0}
                distance={120}
                duration={0.9}
                delay={index * 0.1}
                ease="power3.out"
                threshold={0.2}
                once
                initialOpacity={0}
              >
                <ServiceCard service={service} />
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container journey-section">
          <div className="journey-intro">
            <div className="kicker">A clearer way to plan</div>
            <h2>From first look to salon visit.</h2>
            <ScrollReveal enableBlur baseOpacity={0.18} blurStrength={3} baseOffset={18} stagger={0.025} smoothing={0.18} splitBy="words" effect="rise" mode="scrub" duration={0.9} containerClassName="home-intro-scroll-reveal" textClassName="home-intro-scroll-text">
              Explore the menu at your pace, then speak with the team to confirm the details before travelling.
            </ScrollReveal>
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

      <section className="home-keratin-banner" aria-label="Keratin hair treatment in Ullal, Bengaluru">
        <Link
          className="home-keratin-banner-desktop"
          href="/services/hair/keratin-spa-ullal/"
          aria-label="Explore Keratin Spa at Elite Perimeter Unisex Salon in Ullal, Bengaluru"
        >
          <Image
            src="/images/keratin-treatment-banner-19x6.webp"
            alt="Keratin hair treatment in Ullal, Bengaluru. Elite Perimeter salon banner with glossy brunette hair and a Keratin Spa enquiry message."
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </Link>
        <div className="home-keratin-banner-mobile">
          <div className="home-keratin-mobile-artwork">
            <Image
              src="/images/keratin-treatment-mobile.webp"
              alt="Illustrative close-up of glossy brunette hair for the Keratin Spa service"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="home-keratin-mobile-copy">
            <div className="kicker">Hair care · Elite Perimeter · Ullal</div>
            <h2>Keratin hair treatment in Ullal, Bengaluru.</h2>
            <p>Explore the Keratin Spa service listed at Elite Perimeter Unisex Salon. Confirm the exact process, products, suitability, appointment duration and current price with the team before booking.</p>
            <div className="hero-actions">
              <Link className="button-primary" href="/services/hair/keratin-spa-ullal/">Explore Keratin Spa</Link>
              <a className="button-secondary" href={"tel:" + site.phoneE164}>Call the salon</a>
            </div>
            <p className="home-keratin-disclaimer">Illustrative treatment image. The salon will confirm its actual process and products during your enquiry.</p>
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
          <FadeContent className="package-feature-grid" blur={3} duration={0.82} ease="power3.out" threshold={0.18} stagger={0.1} once>
            {featuredPackages.map((item) => (
              <article className="package-feature" key={item.slug}>
                <div className="kicker">{item.group}</div>
                <h3>{item.name}</h3>
                <div className="price">{formatINR(item.price)}</div>
                <p>{item.description}</p>
                <Link className="text-link" href={`/packages/${item.slug}/`}>See package inclusions <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </FadeContent>
          <p className="muted" style={{ fontSize: 10, marginTop: 16 }}>Package rates are transcribed from the supplied posters. Confirm current availability before booking.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading"><div><div className="kicker">Customer guides</div><h2>Useful answers before you book.</h2></div><Link className="text-link" href="/blog/">Read all 12 guides <span aria-hidden="true">↗</span></Link></div>
          <FadeContent className="blog-feature-grid" blur={3} duration={0.8} ease="power3.out" threshold={0.18} stagger={0.1} once>
            {blogPosts.slice(0, 3).map((post) => <article className="blog-feature-card" key={post.slug}><span className="kicker">{post.category}</span><h3><Link href={`/blog/${post.slug}/`}>{post.h1}</Link></h3><p>{post.excerpt}</p><Link className="text-link" href={`/blog/${post.slug}/`}>Read guide <span aria-hidden="true">↗</span></Link></article>)}
          </FadeContent>
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

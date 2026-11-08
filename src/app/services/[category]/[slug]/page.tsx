import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, categories, packages, site, getService, getServiceCategory, getRelatedServices } from "@/lib/data";
import { getServiceEditorial } from "@/lib/service-editorial";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { packageEditorial } from "@/lib/package-editorial";
import { absoluteUrl, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/StructuredData";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceGallery } from "@/components/ServiceGallery";
import { CategoryImage } from "@/components/Media";
import { SeoDataTable } from "@/components/SeoDataTable";
import { getServiceHeroImage } from "@/lib/service-images";

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((service) => ({ category: service.category, slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  const editorial = getServiceEditorial(slug);
  if (!service) return {};
  const title = service.h1;
  const description = editorial?.metaDescription ?? service.metaDescription;
  return {
    title,
    description,
    alternates: { canonical: `/services/${service.category}/${service.slug}/` },
    robots: service.verifyBeforePublishing ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { title: `${title} | Elite Perimeter Unisex Salon`, description, type: "website" },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: categorySlug, slug } = await params;
  const service = getService(slug);
  const category = service ? getServiceCategory(service) : null;
  const editorial = getServiceEditorial(slug);
  if (!service || !category || category.slug !== categorySlug || !editorial) notFound();

  const serviceHeroImage = getServiceHeroImage(service.slug);
  const related = getRelatedServices(service);
  const relatedPackages = packages.filter((item) => packageEditorial[item.slug]?.serviceSlugs.includes(service.slug));
  const relatedBlogs = editorial.blogSlugs.map(getBlogPost).filter(Boolean);
  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: category.title, path: `/services/${category.slug}/` },
    { name: service.name, path: `/services/${category.slug}/${service.slug}/` },
  ]);
  const faqSchema = faqPageJsonLd([
    ...editorial.faqs,
    { question: "Where is Elite Perimeter Unisex Salon?", answer: "At 1st Floor, No. 39, Ullal Main Road, near Mangalore Independent PU College and above HDFC Bank, Annapurneshwari Layout, Jnana Ganga Nagar, Bengaluru, Karnataka 560056." },
    { question: "Should I call before travelling?", answer: "Yes. Confirm service availability, appointment timing, the exact treatment details and the current standalone price before travelling." },
  ]);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: editorial.metaDescription,
    provider: { "@id": absoluteUrl("/#business") },
    areaServed: { "@type": "Place", name: "Ullal, Bengaluru, Karnataka" },
    url: absoluteUrl(`/services/${service.category}/${service.slug}/`),
  };

  return (
    <>
      <div className={`service-detail-page service-detail-page--${service.category} service-detail-page--${service.slug}${serviceHeroImage ? " service-detail-page--has-dedicated-hero" : ""}`}>
      <JsonLd data={serviceSchema} />
      <JsonLd data={crumbs} />
      <JsonLd data={faqSchema} />
      <section className="page-hero service-detail-hero">
        <div className="container service-hero-grid">
          <div className="service-hero-copy">
            <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/services/">Services</Link><span>/</span><Link href={`/services/${category.slug}/`}>{category.title}</Link><span>/</span><span>{service.name}</span></div>
            <div className="eyebrow">{category.title} · Elite Perimeter · Ullal Main Road</div>
            <h1>{service.h1}</h1>
            <p className="lead">{service.intro}</p>
            <div className="hero-actions">
              <a className="button-primary" href={`tel:${site.phoneE164}`}>Enquire about this service</a>
              <a className="button-secondary" href={site.mapUrl} target="_blank" rel="noreferrer">Get directions</a>
            </div>
            <div className="hero-location-line">Ullal Main Road · Jnana Ganga Nagar · Bengaluru 560056</div>
          </div>
          <div className="service-hero-photo">
            {serviceHeroImage ? (
              <>
                <Image
                  src={serviceHeroImage}
                  alt={`Illustrative ${service.name} service image; not a verified Elite Perimeter client result.`}
                  fill
                  priority
                  sizes="(max-width: 780px) 100vw, (max-width: 1296px) calc(100vw - 56px), 1240px"
                  className="service-dedicated-hero-image"
                />
                <span className="image-note">Illustrative image · not an actual client result</span>
              </>
            ) : service.verifyBeforePublishing ? (
              <div className="service-image-hold">Service imagery is held until the exact treatment name and process are confirmed.</div>
            ) : (
              <CategoryImage
                category={service.category}
                serviceSlug={service.slug}
                alt={`Illustrative ${category.title.toLowerCase()} service photograph for ${service.name}; not actual salon client work.`}
                priority
                showNote
              />
            )}
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-strip-inner">
          <div className="trust-item"><strong>For men & women</strong><span>Unisex salon service</span></div>
          <div className="trust-item"><strong>Ullal Main Road</strong><span>Actual salon location</span></div>
          <div className="trust-item"><strong>Price transparency</strong><span>Printed package rates only</span></div>
          <div className="trust-item"><strong>Call before visiting</strong><span>Confirm availability</span></div>
        </div>
      </section>

      {service.verifyBeforePublishing && (
        <section className="section-tight"><div className="container"><div className="notice warning"><strong>Confirm before indexing:</strong> The supplied poster does not fully explain this service name. Confirm the exact treatment, products and inclusions before asking Google to index this page.</div></div></section>
      )}

      <section className="section">
        <div className="container service-main-grid">
          <article className="content-prose service-editorial-content">
            <div className="kicker">The customer question</div>
            <h2>{editorial.problemTitle}</h2>
            <p>{editorial.problem}</p>

            <h2>Service details at a glance</h2>
            <SeoDataTable
              caption={`Quick facts for ${service.name}`}
              headers={["Detail", "What to know"]}
              rows={[
                ["Primary search phrase", service.primaryKeyword],
                ["Service category", category.title],
                ["Location", "Ullal Main Road, Jnana Ganga Nagar, Bengaluru 560056"],
                ["Standalone price", "Confirm the current individual rate with the salon before booking."],
                ["Package pricing", "Any printed combo price applies to the complete package, not this service alone."],
              ]}
            />

            {editorial.sections.map((section, index) => (
              <section className="service-editorial-section" key={section.heading}>
                <div className="service-content-number">0{index + 1}</div>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}

            <h2>Questions to ask before booking</h2>
            <p>Use these questions to confirm that the service matches what you need. The exact process, products, timing and current rate should be confirmed with the salon.</p>
            <ul>{editorial.bookingQuestions.map((question) => <li key={question}>{question}</li>)}</ul>

            {service.verifyBeforePublishing ? (
              <div className="service-image-hold service-image-hold--gallery">Service gallery pending owner verification. No treatment imagery will be shown until the exact service and process are confirmed.</div>
            ) : (
              <>
                <ServiceGallery slug={service.slug} name={service.name} category={service.category} />
                <p className="muted image-disclaimer" style={{ fontSize: 10 }}>Service imagery is for visual reference, not proof of an individual client's result. Genuine before-and-after images may be added only with permission from the same client.</p>
              </>
            )}

            <h2>Menu and price information</h2>
            <p>{service.menuNote}</p>
            <p>The supplied posters show package prices for complete combinations. They do not show a standalone price for every individual service. A package price must not be presented as the individual rate for one included treatment; contact the salon to confirm the current standalone price.</p>

            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              {editorial.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
            </div>
            <div className="faq-list service-price-faq">
              <details><summary>Where is Elite Perimeter Unisex Salon?</summary><p>At 1st Floor, No. 39, Ullal Main Road, near Mangalore Independent PU College and above HDFC Bank, Annapurneshwari Layout, Jnana Ganga Nagar, Bengaluru, Karnataka 560056.</p></details>
              <details><summary>Should I call before travelling?</summary><p>Yes. Confirm service availability, appointment timing, the exact treatment details and the current standalone price before travelling.</p></details>
            </div>
          </article>

          <aside className="service-sidebar">
            <div className="kicker">Plan your visit</div>
            <h3>{service.name}</h3>
            <p className="muted" style={{ fontSize: 12 }}>At Elite Perimeter Unisex Salon, Ullal.</p>
            <div className="sidebar-divider" />
            <div className="quickfacts">
              <div className="quickfact"><span>Standalone price</span><strong>Enquire</strong></div>
              <div className="quickfact"><span>Service type</span><strong>{category.title}</strong></div>
              <div className="quickfact"><span>Location</span><strong>Ullal, Bengaluru</strong></div>
            </div>
            <div className="sidebar-divider" />
            <p className="muted" style={{ fontSize: 11 }}>Ask for the individual rate if you do not want the complete combo package.</p>
            <a className="button-primary" style={{ width: "100%" }} href={`tel:${site.phoneE164}`}>Call {site.phoneDisplay}</a>
            <a className="button-secondary" style={{ width: "100%", marginTop: 10 }} href={site.mapUrl} target="_blank" rel="noreferrer">Get directions</a>
            <div className="sidebar-divider" />
            <Link className="text-link" href={`/services/${category.slug}/`}>More {category.title.toLowerCase()} ↗</Link>
            <Link className="text-link" href="/location/ullal/" style={{ display: "block", marginTop: 12 }}>Address and directions ↗</Link>
            <Link className="text-link" href="/contact/" style={{ display: "block", marginTop: 12 }}>Contact details ↗</Link>
            <Link className="text-link" href="/blog/" style={{ display: "block", marginTop: 12 }}>Read customer guides ↗</Link>
          </aside>
        </div>
      </section>

      {relatedPackages.length > 0 && (
        <section className="section section-paper">
          <div className="container">
            <div className="section-heading"><div><div className="kicker">Printed combo packages</div><h2>Packages that include this service.</h2></div><Link className="text-link" href="/packages/">View all packages ↗</Link></div>
            <div className="blog-package-links">
              {relatedPackages.map((item) => <Link className="blog-package-link" key={item.slug} href={`/packages/${item.slug}/`}><span className="kicker">{item.group}</span><strong>{item.name}</strong><span className="blog-package-price">₹{item.price.toLocaleString("en-IN")}</span><small>{item.description}</small><b>View package ↗</b></Link>)}
            </div>
          </div>
        </section>
      )}

      {relatedBlogs.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-heading"><div><div className="kicker">Related guides</div><h2>More help before you book.</h2></div><Link className="text-link" href="/blog/">Explore all 12 guides ↗</Link></div>
            <div className="blog-link-grid">
              {relatedBlogs.map((post) => post && <Link className="blog-link-card" href={`/blog/${post.slug}/`} key={post.slug}><span className="kicker">{post.category}</span><strong>{post.h1}</strong><small>{post.excerpt}</small><b>Read guide ↗</b></Link>)}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section section-paper">
          <div className="container">
            <div className="section-heading"><div><div className="kicker">SEO colony · Related services</div><h2>Explore related services.</h2></div><Link className="text-link" href={`/services/${category.slug}/`}>View {category.title.toLowerCase()} ↗</Link></div>
            <div className="feature-grid">{related.map((item) => <ServiceCard key={item.slug} service={item} />)}</div>
          </div>
        </section>
      )}
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, services, packages, getCategory } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";
import { packageEditorial } from "@/lib/package-editorial";
import { ServiceCard } from "@/components/ServiceCard";
import { CategoryImage } from "@/components/Media";
import { categoryRepresentativeSlugs, categorySecondaryImageSlugs } from "@/lib/service-images";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/StructuredData";
import { SeoDataTable } from "@/components/SeoDataTable";

export const dynamicParams = false;
export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

function headingKeyword(keyword: string) {
  return keyword.charAt(0).toUpperCase() + keyword.slice(1);
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const primary = headingKeyword(category.primaryKeyword);
  return {
    title: `${primary}, Bengaluru`,
    description: `${category.description} View individual service details and contact Elite Perimeter Unisex Salon on Ullal Main Road.`,
    alternates: { canonical: `/services/${category.slug}/` },
    openGraph: { title: `${primary}, Bengaluru | Elite Perimeter`, description: category.description },
  };
}

export default async function ServiceCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const group = services.filter((service) => service.category === category.slug);
  const groupSlugs = new Set(group.map((service) => service.slug));
  const relevantGuides = blogPosts.filter((post) => post.relatedServices.some((slug) => groupSlugs.has(slug))).slice(0, 3);
  const relevantPackages = packages.filter((item) => packageEditorial[item.slug]?.serviceSlugs.some((slug) => groupSlugs.has(slug))).slice(0, 3);
  const primary = headingKeyword(category.primaryKeyword);
  const heroImageSlug = categoryRepresentativeSlugs[category.slug];
  const secondaryImageSlug = categorySecondaryImageSlugs[category.slug];
  const crumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
    { name: category.title, path: `/services/${category.slug}/` },
  ]);

  return (
    <>
      <JsonLd data={crumbs} />
      <div className={`category-landing category-landing--${category.slug}`}>
      <section className="page-hero category-landing-hero">
        <div className="container page-hero-grid">
          <div>
            <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/services/">Services</Link><span>/</span><span>{category.title}</span></div>
            <div className="eyebrow">{category.eyebrow} · Ullal</div>
            <h1>{primary}, Bengaluru.</h1>
            <p className="lead">{category.description}</p>
            <div className="hero-actions"><a className="button-primary" href="tel:+918088442684">Call to enquire</a><Link className="button-secondary" href="/services/">All services</Link></div>
          </div>
          <div className="page-hero-media">
            <CategoryImage
              category={category.slug}
              serviceSlug={heroImageSlug}
              alt={`Representative ${category.title} service image at Elite Perimeter.`}
              priority
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><div className="kicker">Choose a service</div><h2>Explore {category.title.toLowerCase()}.</h2></div>
            <p>{group.length} menu items are listed in this category. Open a service for its full description, package information and booking questions.</p>
          </div>
          <div className="feature-grid">{group.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
          <h2 className="section-table-heading">{primary}: service menu comparison</h2>
          <SeoDataTable
            caption={`Compare ${category.title.toLowerCase()} at Elite Perimeter`}
            headers={["Primary search phrase", "Service", "Details"]}
            rows={group.map((service) => [
              <Link key={service.slug} href={`/services/${service.category}/${service.slug}/`}>{service.primaryKeyword}</Link>,
              service.name,
              service.menuNote,
            ])}
          />
          <div className="notice">Service images are visual references, not verified records of individual client results. Individual rates are not shown on the supplied posters.</div>
          {relevantPackages.length > 0 && <div className="category-linked-content"><div className="section-heading"><div><div className="kicker">Related combinations</div><h2>Printed packages that include these services.</h2></div><Link className="text-link" href="/packages/">All packages ↗</Link></div><div className="package-service-grid">{relevantPackages.map((item) => <Link key={item.slug} href={`/packages/${item.slug}/`}><span>{item.name}</span><small>{item.description}</small><b>₹{item.price.toLocaleString("en-IN")} · View package ↗</b></Link>)}</div></div>}
          {relevantGuides.length > 0 && <div className="category-linked-content"><div className="section-heading"><div><div className="kicker">Helpful guides</div><h2>Read before you book.</h2></div><Link className="text-link" href="/blog/">All 12 guides ↗</Link></div><div className="blog-link-grid">{relevantGuides.map((post) => <Link className="blog-link-card" key={post.slug} href={`/blog/${post.slug}/`}><span className="kicker">{post.category}</span><strong>{post.h1}</strong><small>{post.excerpt}</small><b>Read guide ↗</b></Link>)}</div></div>}
        </div>
      </section>
      <section className="section section-paper">
        <div className="container split-feature">
          <div className="split-feature-copy">
            <div className="kicker">Before your appointment</div>
            <h2>Confirm the details that matter.</h2>
            <p>Service steps, products, duration and availability can vary. Contact the salon to confirm the exact treatment and current standalone rate before travelling.</p>
            <div className="hero-actions"><Link className="button-primary" href="/contact/">Contact the salon</Link><Link className="button-secondary" href="/packages/">See combo packages</Link></div>
          </div>
          <div className="split-feature-image">
            <CategoryImage
              category={category.slug}
              serviceSlug={secondaryImageSlug}
              alt={`Another ${category.title} service image at Elite Perimeter.`}
            />
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

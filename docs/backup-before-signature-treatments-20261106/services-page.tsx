import type { Metadata } from "next";
import Link from "next/link";
import { categories, services } from "@/lib/data";
import { CategoryImage } from "@/components/Media";
import { ServiceExplorer } from "@/components/ServiceExplorer";

export const metadata: Metadata = {
  title: "Salon Services in Ullal | Hair, Facials, Waxing & Nail Care",
  description: "Explore hair, facial and skincare, waxing, threading, manicure and pedicure services at Elite Perimeter Unisex Salon on Ullal Main Road, Bengaluru.",
  alternates: { canonical: "/services/" },
  openGraph: { title: "Salon Services in Ullal | Elite Perimeter", description: "Browse the salon service menu by category and explore individual treatment details." },
};

export default function ServicesIndexPage() {
  return (
    <>
      <div className="services-index-page">
      <section className="page-hero services-page-hero">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Services</span></div>
          <div className="eyebrow">The service menu · Ullal Main Road</div>
          <h1>Explore salon services in Ullal, Bengaluru.</h1>
          <p className="lead">Explore hair, facial, waxing, threading, manicure and pedicure services at Elite Perimeter Unisex Salon. Search the menu, compare the options and open any service for its details.</p>
          <div className="hero-actions">
            <a className="button-primary" href="tel:+918088442684">Call to enquire <span aria-hidden="true">↗</span></a>
            <Link className="button-secondary" href="/packages/">Compare packages</Link>
          </div>
          <div className="services-hero-meta"><span><strong>28</strong> listed menu services</span><span><strong>5</strong> service categories</span><span>Ullal Main Road · Bengaluru</span></div>
        </div>
      </section>

      <section className="section-tight service-category-section">
        <div className="container">
          <div className="section-heading">
            <div><div className="kicker">Browse by category</div><h2>Start with a service type.</h2></div>
            <p>Each category has its own page with the available menu items and useful booking information.</p>
          </div>
          <div className="category-grid service-category-grid">
            {categories.map((category, index) => (
              <Link className="category-tile" href={`/services/${category.slug}/`} key={category.slug}>
                <CategoryImage category={category.slug} alt={`Illustrative image for ${category.title} at Elite Perimeter`} />
                <div className="category-tile-content">
                  <span className="category-tile-number">0{index + 1} / {category.serviceSlugs.length.toString().padStart(2, "0")} SERVICES</span>
                  <h3>{category.title}</h3>
                  <p>{category.eyebrow}</p>
                  <span className="text-link">Explore category <span aria-hidden="true">↗</span></span>
                </div>
              </Link>
            ))}
          </div>
          <p className="image-disclaimer">Category photography is illustrative. Original Elite Perimeter service photographs should replace stock images before launch.</p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <ServiceExplorer services={services} categories={categories} />
          <div className="notice">Individual prices were not printed on the supplied posters. Package prices apply to the complete combination and are not standalone prices for the individual services.</div>
        </div>
      </section>
      </div>
    </>
  );
}

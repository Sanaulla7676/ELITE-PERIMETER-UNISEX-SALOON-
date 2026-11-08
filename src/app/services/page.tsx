import type { Metadata } from "next";
import Link from "next/link";
import { categories, services } from "@/lib/data";
import { SignatureTreatments } from "@/components/SignatureTreatments";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { SeoDataTable } from "@/components/SeoDataTable";

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

      <SignatureTreatments services={services} />

      <section className="section section-paper">
        <div className="container">
          <ServiceExplorer services={services} categories={categories} />
          <h2>Salon services in Ullal: browse by category</h2>
          <SeoDataTable
            caption="Elite Perimeter service directory"
            headers={["Service category", "Local search focus", "Menu items"]}
            rows={categories.map((category) => [
              <Link href={`/services/${category.slug}/`}>{category.primaryKeyword}</Link>,
              category.title,
              `${category.serviceSlugs.length} listed services`,
            ])}
          />
          <div className="notice">Individual prices were not printed on the supplied posters. Package prices apply to the complete combination and are not standalone prices for the individual services.</div>
        </div>
      </section>
      </div>
    </>
  );
}

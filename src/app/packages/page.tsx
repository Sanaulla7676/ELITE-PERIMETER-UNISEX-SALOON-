import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PackageExplorer } from "@/components/PackageExplorer";
import { packages } from "@/lib/data";
import { SeoDataTable } from "@/components/SeoDataTable";
import { packageEditorial } from "@/lib/package-editorial";

export const metadata: Metadata = {
  title: "Salon Packages & Combo Prices in Ullal",
  description: "Compare the printed Chocolate Facial, Whitening Facial and Premium Beauty combo packages at Elite Perimeter Unisex Salon on Ullal Main Road, Bengaluru.",
  alternates: { canonical: "/packages/" },
  openGraph: { title: "Salon Packages in Ullal | Elite Perimeter", description: "Explore printed salon combo packages and their included services." },
};

export default function PackagesPage() {
  return (
    <>
      <div className="package-index-page">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Packages</span></div>
            <div className="eyebrow">The printed salon menu</div>
            <h1>Salon combo packages in Ullal, Bengaluru.</h1>
            <p className="lead">Compare salon combo packages in Ullal, Bengaluru, using the Chocolate Facial, Whitening Facial and Premium Beauty combinations listed on the Elite Perimeter Unisex Salon posters. Each package shows its included services and printed menu price.</p>
            <p className="muted" style={{ fontSize: 12 }}>Package prices are transcribed from the supplied printed menu. Confirm availability, selected options and inclusions with the salon before booking.</p>
            <div className="hero-actions"><a className="button-primary" href="tel:+918088442684">Enquire about a package</a><Link className="button-secondary" href="/services/">Browse individual services</Link></div>
            <Link className="text-link" href="/blog/salon-care-on-a-budget-ullal/">Read the salon package comparison guide ↗</Link>
          </div>
          <div className="page-hero-media"><Image src="/images/facial-service.jpg" alt="Illustrative facial skincare image; not a photograph of the salon" fill sizes="(max-width: 780px) 100vw, 45vw" style={{ objectFit: "cover" }} /><span className="image-note">Illustrative image · replace with salon photography</span></div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading package-section-intro">
            <div><div className="kicker">Choose your combination</div><h2>Find the right package for your plan.</h2></div>
            <p>Filter by package type or sort by price. Package rates apply to the complete combination, not to individual services.</p>
          </div>
          <PackageExplorer />
          <h2>Salon combo packages in Ullal: compare the printed menu</h2>
          <SeoDataTable
            caption="Package price and inclusion overview"
            headers={["Package", "Printed price", "Included services", "Details"]}
            rows={packages.map((item) => [
              <Link href={`/packages/${item.slug}/`}>{packageEditorial[item.slug]?.primaryKeyword ?? item.name}</Link>,
              `₹${item.price.toLocaleString("en-IN")}`,
              `${item.includes.length} listed inclusions`,
              "Review the package-specific inclusions and booking details",
            ])}
          />
          <div className="notice">The Hair Cut + Hair Spa and Cleanup + Waxing + Threading packages appeared on both regular posters at the same price and are listed once here. Standalone service prices are not inferred from package rates.</div>
        </div>
      </section>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/StructuredData";
import { CategoryImage } from "@/components/Media";
import { SeoDataTable } from "@/components/SeoDataTable";

export const metadata: Metadata = {
  title: "Unisex Beauty Parlour on Ullal Main Road, Bengaluru",
  description: "Find Elite Perimeter Unisex Salon on Ullal Main Road in Jnana Ganga Nagar, near Mangalore Independent PU College and above HDFC Bank, Bengaluru 560056.",
  alternates: { canonical: "/location/ullal/" },
  openGraph: { title: "Elite Perimeter Unisex Salon Location | Ullal", description: "Address, landmarks, opening hours and directions to the salon on Ullal Main Road." },
};

export default function UllalLocationPage() {
  return (
    <>
      <JsonLd data={businessJsonLd()} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Location", path: "/location/ullal/" }])} />
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Location</span></div>
            <div className="eyebrow">Visit the salon</div>
            <h1>Unisex Salon on Ullal Main Road, Bengaluru: Find Elite Perimeter.</h1>
            <p className="lead">Our beauty parlour is in Jnana Ganga Nagar, Bengaluru 560056, near Mangalore Independent PU College and above HDFC Bank.</p>
            <div className="hero-actions"><a className="button-primary" href={site.mapUrl} target="_blank" rel="noreferrer">Get directions ↗</a><a className="button-secondary" href={`tel:${site.phoneE164}`}>Call the salon</a></div>
          </div>
          <div className="page-hero-media"><CategoryImage category="salon" alt="Illustrative salon interior image; replace with the real Ullal storefront" /></div>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div className="address-card">
            <div className="kicker">Salon address</div>
            <h2>Visit us in Ullal.</h2>
            <p>{site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}, India.</p>
            <p><strong>Landmarks:</strong> Near Mangalore Independent PU College · Above HDFC Bank.</p>
            <p><strong>Phone:</strong> <a className="text-link" href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a></p>
            <a className="button-primary" href={site.mapUrl} target="_blank" rel="noreferrer">Open directions in Google Maps</a>
          </div>
          <div className="address-card">
            <div className="kicker">Opening hours</div>
            <h2>Plan your visit.</h2>
            <table className="hours-table"><tbody>
              {site.hours.map((hour) => <tr key={hour.day}><td>{hour.day}</td><td>{hour.opens} – {hour.closes}</td></tr>)}
            </tbody></table>
            <div className="notice">These hours reflect the Google Business Profile settings supplied for this build. Confirm they match the salon's actual operating hours before production launch.</div>
          </div>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container">
          <h2>Unisex salon in Ullal: address and visit details</h2>
          <SeoDataTable
            caption="Location and contact summary"
            headers={["Visit detail", "Information"]}
            rows={[
              ["Street address", `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`],
              ["Nearby landmarks", "Near Mangalore Independent PU College · Above HDFC Bank"],
              ["Locality", "Jnana Ganga Nagar, Ullal Main Road, Bengaluru"],
              ["Phone", <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>],
              ["Directions", <a href={site.mapUrl} target="_blank" rel="noreferrer">Open Elite Perimeter in Google Maps</a>],
            ]}
          />
        </div>
      </section>
      <section className="section section-paper">
        <div className="container split-feature">
          <div className="split-feature-copy">
            <div className="kicker">Local salon service menu</div>
            <h2>Explore services before travelling.</h2>
            <p>Browse hair services, facial and skincare options, waxing, threading, manicure and pedicure services. Contact the salon to confirm treatment details and current standalone prices.</p>
            <div className="hero-actions"><Link className="button-primary" href="/services/">Explore all services</Link><Link className="button-secondary" href="/packages/">Compare salon packages</Link></div>
          </div>
          <div className="map-panel"><iframe title="Map showing Elite Perimeter Unisex Salon on Ullal Main Road" src="https://www.google.com/maps?q=1st%20Floor%20No%2039%20Ullal%20Main%20Road%20Jnana%20Ganga%20Nagar%20Bengaluru%20560056&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>
    </>
  );
}

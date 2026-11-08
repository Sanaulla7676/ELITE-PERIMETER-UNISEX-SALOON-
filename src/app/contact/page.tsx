import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data";
import { SeoDataTable } from "@/components/SeoDataTable";

export const metadata: Metadata = {
  title: "Contact & Directions | Elite Perimeter Unisex Salon Ullal",
  description: "Contact Elite Perimeter Unisex Salon for service availability, printed package details and directions to Ullal Main Road, Jnana Ganga Nagar, Bengaluru.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Contact</span></div>
          <div className="eyebrow">Contact & directions</div>
          <h1>Contact Elite Perimeter Unisex Salon in Ullal, Bengaluru.</h1>
          <p className="lead">Contact Elite Perimeter Unisex Salon to confirm service availability, individual prices, package details and appointment timing before travelling.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <article className="contact-card">
            <div className="kicker">Call the salon</div>
            <h2>{site.phoneDisplay}</h2>
            <p>Ask about the current service menu, standalone prices, package inclusions and appointment availability.</p>
            <a className="button-primary" href={`tel:${site.phoneE164}`}>Call now ↗</a>
          </article>
          <article className="contact-card">
            <div className="kicker">Visit us</div>
            <h2>Ullal Main Road</h2>
            <p>{site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}, India.</p>
            <a className="button-primary" href={site.mapUrl} target="_blank" rel="noreferrer">Get Google Maps directions ↗</a>
          </article>
          <article className="contact-card">
            <div className="kicker">Nearby landmarks</div>
            <h2>Find the entrance.</h2>
            <p>Near Mangalore Independent PU College and above HDFC Bank, Annapurneshwari Layout, Jnana Ganga Nagar.</p>
            <Link className="text-link" href="/location/ullal/">View full location details ↗</Link>
          </article>
          <article className="contact-card">
            <div className="kicker">Before you visit</div>
            <h2>Confirm the details.</h2>
            <p>Most standalone service prices are not printed on the supplied menu. Package rates apply to the complete combination only.</p>
            <Link className="text-link" href="/packages/">Review printed package prices ↗</Link>
          </article>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container">
          <h2>Contact Elite Perimeter Unisex Salon in Ullal</h2>
          <SeoDataTable
            caption="Contact and booking reference"
            headers={["Contact method", "Details"]}
            rows={[
              ["Telephone", <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>],
              ["Address", `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`],
              ["Directions", <a href={site.mapUrl} target="_blank" rel="noreferrer">Google Maps directions</a>],
              ["Before booking", "Confirm the exact service, availability, timing and current standalone price."],
              ["Package price", "Printed package rates apply to the complete combination shown on the menu."],
            ]}
          />
        </div>
      </section>
      <section className="section section-paper">
        <div className="container split-feature">
          <div className="split-feature-copy">
            <div className="kicker">Location</div>
            <h2>Elite Perimeter Unisex Salon, Ullal.</h2>
            <p>Find the salon on Ullal Main Road in Jnana Ganga Nagar, Bengaluru 560056.</p>
            <a className="button-secondary" href={site.mapUrl} target="_blank" rel="noreferrer">Open directions ↗</a>
          </div>
          <div className="map-panel"><iframe title="Map showing Elite Perimeter Unisex Salon in Ullal" src="https://www.google.com/maps?q=1st%20Floor%20No%2039%20Ullal%20Main%20Road%20Jnana%20Ganga%20Nagar%20Bengaluru%20560056&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>
    </>
  );
}

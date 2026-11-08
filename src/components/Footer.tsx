import Link from "next/link";
import { categories, site } from "@/lib/data";

function formatTime(value: string) {
  const [rawHours, minutes] = value.split(":").map(Number);
  const suffix = rawHours >= 12 ? "pm" : "am";
  const hours = rawHours % 12 || 12;
  return `${hours}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

export function Footer() {
  const weekdays = site.hours.slice(0, 6);
  const sunday = site.hours[6];

  return (
    <footer className="site-footer layered-site-footer">
      <div className="footer-image-layer" aria-hidden="true" />
      <div className="footer-glass-layer" aria-hidden="true" />

      <div className="footer-content-layer">
        <div className="container footer-top">
          <div className="footer-brand-block">
            <Link href="/" className="brand footer-brand brand-wordmark" aria-label="Elite Perimeter home">
              <span className="brand-copy"><strong>ELITE PERIMETER</strong><small>UNISEX SALON · ULLAL</small></span>
            </Link>
            <p>Hair, facial and personal grooming services for men and women at Ullal Main Road, Bengaluru.</p>
            <a className="footer-call" href={`tel:${site.phoneE164}`}>{site.phoneDisplay} <span aria-hidden="true">↗</span></a>
          </div>

          <div className="footer-column">
            <span className="footer-label">Explore</span>
            <Link href="/services/">All services</Link>
            <Link href="/packages/">Salon packages</Link>
            <Link href="/blog/">Customer guides</Link>
            <Link href="/about/">About the salon</Link>
            <Link href="/location/ullal/">Location &amp; hours</Link>
            <Link href="/contact/">Contact</Link>
          </div>

          <div className="footer-column">
            <span className="footer-label">Service menu</span>
            {categories.map((category) => <Link key={category.slug} href={`/services/${category.slug}/`}>{category.title}</Link>)}
            <Link href="/services/" className="footer-all-services">View all 28 services <span aria-hidden="true">↗</span></Link>
          </div>

          <div className="footer-column footer-address">
            <span className="footer-label">Visit us</span>
            <p>{site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}, India.</p>
            <a href={site.mapUrl} target="_blank" rel="noreferrer">Open Google Maps <span aria-hidden="true">↗</span></a>
            <div className="footer-hours">
              <span className="footer-label">Opening hours</span>
              <div><span>Monday – Saturday</span><strong>{formatTime(weekdays[0].opens)} – {formatTime(weekdays[0].closes)}</strong></div>
              <div><span>Sunday</span><strong>{formatTime(sunday.opens)} – {formatTime(sunday.closes)}</strong></div>
              <small>Confirm current hours before visiting.</small>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Elite Perimeter Unisex Salon</span>
          <span>Ullal Main Road · Jnana Ganga Nagar · Bengaluru 560056</span>
        </div>
      </div>
    </footer>
  );
}

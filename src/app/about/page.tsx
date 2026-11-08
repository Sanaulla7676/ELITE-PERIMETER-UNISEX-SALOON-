import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/data";
import { SeoDataTable } from "@/components/SeoDataTable";

export const metadata: Metadata = {
  title: "About Elite Perimeter Unisex Salon in Ullal",
  description: "Learn about Elite Perimeter Unisex Salon, a beauty parlour on Ullal Main Road in Jnana Ganga Nagar, Bengaluru, and explore its salon service menu.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>About</span></div>
            <div className="eyebrow">About the salon</div>
            <h1>About Elite Perimeter, a Unisex Salon in Ullal, Bengaluru.</h1>
            <p className="lead">Elite Perimeter Unisex Salon is a neighbourhood beauty parlour on Ullal Main Road, serving customers looking for hair, facial and personal grooming services in Bengaluru.</p>
            <div className="hero-actions"><Link className="button-primary" href="/services/">Explore the service menu</Link><Link className="button-secondary" href="/contact/">Contact the salon</Link></div>
          </div>
          <div className="page-hero-media"><Image src="/images/beauty-editorial.jpg" alt="Illustrative beauty editorial image; replace with a real salon team or interior photograph" fill sizes="(max-width: 780px) 100vw, 45vw" style={{ objectFit: "cover" }} /></div>
        </div>
      </section>
      <section className="section section-paper">
        <div className="container">
          <h2>Elite Perimeter Unisex Salon: business details</h2>
          <SeoDataTable
            caption="Business information"
            headers={["Detail", "Information"]}
            rows={[
              ["Business name", site.name],
              ["Business type", "Unisex salon and beauty parlour"],
              ["Primary location", "Ullal Main Road, Jnana Ganga Nagar, Bengaluru 560056"],
              ["Menu coverage", "Hair, facials, waxing, threading, manicure and pedicure"],
              ["Phone", <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>],
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container split-feature">
          <div className="split-feature-copy">
            <div className="kicker">A local salon in Jnana Ganga Nagar</div>
            <h2>Hair, facial and grooming services in one place.</h2>
            <p>The salon's supplied menu includes haircuts, Hair Spa, Keratin Spa, facial and de-tan options, waxing, threading, manicure and pedicure services, along with printed combo packages.</p>
            <p>Customers can review the service descriptions and package inclusions on this website. Service steps, products and individual prices should be confirmed with the salon before an appointment.</p>
            <p>The business details supplied for this website list an opening date of 6 May 2021. The salon address is {site.address.street}, Bengaluru, Karnataka 560056.</p>
            <div className="hero-actions"><Link className="button-secondary" href="/packages/">View packages</Link><Link className="button-secondary" href="/location/ullal/">Find the salon</Link></div>
          </div>
          <div className="split-feature-image"><Image src="/images/hero-salon.jpg" alt="Illustrative salon interior; replace with an original Elite Perimeter interior photo" fill sizes="(max-width: 780px) 100vw, 50vw" style={{ objectFit: "cover" }} /><span className="image-note">Illustrative photography · replace before launch</span></div>
        </div>
      </section>
    </>
  );
}

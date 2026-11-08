import Image from "next/image";
import { CategoryImage } from "@/components/Media";
import { getServiceProcessImage } from "@/lib/service-images";

function ImageCaption({ name }: { name: string }) {
  return <span className="reference-image-disclaimer">Service imagery for reference · not a verified client outcome · {name}</span>;
}

export function ServiceGallery({ slug, name, category }: { slug: string; name: string; category: string }) {
  const photo = <CategoryImage
    category={category}
    serviceSlug={slug}
    alt={`Service image for ${name} at Elite Perimeter Unisex Salon.`}
  />;

  if (category === "hair") {
    const processImage = getServiceProcessImage(slug);
    return (
      <section className="reference-service reference-service--hair" aria-label={`${name} showcase`}>
        <div className="reference-service-hair-copy">
          <span className="reference-service-overline">Hair culture · Ullal</span>
          <div className="reference-service-display">MO<br />RE</div>
          <h2>{name}</h2>
          <p>Shape. Texture. Confidence.</p>
          <div className="reference-service-hair-notes"><span>Personal style</span><span>Care routine</span><span>Finish</span></div>
        </div>
        <div className="reference-service-hair-gallery">
          <figure className="reference-service-hair-image">
            {photo}
            <figcaption><strong>{name}</strong><small><ImageCaption name={name} /></small></figcaption>
          </figure>
          <figure className="reference-service-hair-image reference-service-hair-process">
            {processImage ? (
              <div className="image-frame">
                <Image
                  src={processImage}
                  alt={`Illustrative ${name.toLowerCase()} process demonstration.`}
                  fill
                  sizes="(max-width: 720px) 100vw, 42vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <div className="image-frame image-frame--pending" role="img" aria-label={`${name} process photograph pending`}>
                <div className="image-frame-pending-content">
                  <span>PROCESS PHOTOGRAPH</span>
                  <strong>Salon demonstration pending</strong>
                  <small>Use a genuine photograph of this exact treatment.</small>
                </div>
              </div>
            )}
            <figcaption><strong>In the salon</strong><small>Process reference · verify products and steps with the stylist</small></figcaption>
          </figure>
        </div>
        <div className="reference-client-slot reference-hair-client-slot">
          <span>CLIENT PORTFOLIO</span>
          <strong>Before &amp; after</strong>
          <p>Add a genuine photo pair of the same client, captured in comparable lighting and angles, only with written permission. No generated result imagery.</p>
          <small>REAL CLIENT PHOTOGRAPHY · PENDING</small>
        </div>
      </section>
    );
  }

  if (category === "facials") {
    return (
      <section className="reference-service reference-service--facial" aria-label={`${name} showcase`}>
        <div className="reference-service-facial-heading">
          <span className="reference-service-overline">Skin ritual · Elite Perimeter</span>
          <h2>{name}</h2>
          <p>Understand the treatment steps and products before your appointment.</p>
        </div>
        <div className="reference-service-facial-photo">{photo}<span className="reference-photo-caption">{name}</span></div>
        <div className="reference-service-benefits">
          <article><b>01</b><strong>Consultation</strong><span>Discuss skin concerns and known sensitivities.</span></article>
          <article><b>02</b><strong>Treatment steps</strong><span>Confirm the sequence and products with the salon.</span></article>
          <article><b>03</b><strong>After-care</strong><span>Ask for the care guidance relevant to the service.</span></article>
        </div>
        <div className="reference-client-slot"><span>CLIENT PORTFOLIO</span><strong>Before &amp; after</strong><p>Genuine photographs of the same client can be added here with permission.</p><small>REAL CLIENT PHOTOGRAPHY · PENDING</small></div>
      </section>
    );
  }

  if (category === "waxing") {
    return (
      <section className="reference-service reference-service--waxing" aria-label={`${name} showcase`}>
        <div className="reference-service-waxing-image">{photo}<span className="reference-photo-caption">{name}</span></div>
        <div className="reference-service-waxing-copy">
          <span className="reference-service-overline">Personal care · Service details</span>
          <h2>{name}</h2>
          <p>Know the exact service area, preparation and after-care guidance before booking.</p>
          <div className="reference-service-waxing-facts"><div><b>01</b><strong>Area</strong><span>Confirm the exact area included.</span></div><div><b>02</b><strong>Preparation</strong><span>Ask about preparation and skin sensitivities.</span></div><div><b>03</b><strong>After-care</strong><span>Follow the professional's after-care advice.</span></div></div>
        </div>
      </section>
    );
  }

  if (category === "threading") {
    return (
      <section className="reference-service reference-service--threading" aria-label={`${name} showcase`}>
        <div className="reference-service-threading-title"><span className="reference-service-overline">Precision · Detail · Shape</span><h2>{name}</h2><p>Small details, discussed before the service begins.</p></div>
        <div className="reference-service-threading-body">
          <div className="reference-service-threading-photo">{photo}</div>
          <div className="reference-service-threading-card"><span>THE APPOINTMENT</span><strong>Shape first.</strong><p>Tell the professional which areas you would like treated and the shape you prefer to maintain.</p><div className="reference-threading-lines"><i/><i/><i/><i/></div><small>CONFIRM AREAS · CONFIRM PRICE · THEN BOOK</small></div>
        </div>
      </section>
    );
  }

  return (
    <section className="reference-service reference-service--nails" aria-label={`${name} showcase`}>
      <div className="reference-service-nails-intro"><span className="reference-service-overline">Hand &amp; foot care</span><h2>{name}</h2><p>A considered care ritual, with the included steps confirmed before your appointment.</p></div>
      <div className="reference-service-nails-photo">{photo}<span className="reference-photo-caption">{name}</span></div>
      <div className="reference-service-nails-details"><article><span>01</span><strong>Care</strong><p>Confirm the hand or foot care steps.</p></article><article><span>02</span><strong>Finish</strong><p>Ask about shaping, polish and available add-ons.</p></article><article><span>03</span><strong>Products</strong><p>Check which products are included.</p></article></div>
      <div className="reference-client-slot"><span>CLIENT PORTFOLIO</span><strong>Before &amp; after</strong><p>Genuine client photographs can be added with the client's permission.</p><small>REAL CLIENT PHOTOGRAPHY · PENDING</small></div>
    </section>
  );
}

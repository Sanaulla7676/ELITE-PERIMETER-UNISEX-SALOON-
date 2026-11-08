import Link from "next/link";
import type { Service } from "@/lib/data";
import { categories } from "@/lib/data";
import { CategoryImage } from "@/components/Media";

export function ServiceCard({ service }: { service: Service }) {
  const category = categories.find((item) => item.slug === service.category);
  const href = `/services/${service.category}/${service.slug}/`;

  return (
    <article className={`service-card service-card--${service.category}`}>
      <Link className="service-card-image-link" href={href} aria-label={`View ${service.name} details`}>
        <CategoryImage
          category={service.category}
          serviceSlug={service.slug}
          alt={`Illustrative service image for ${service.name}; not a verified client outcome.`}
          showNote
        />
      </Link>
      <div className="service-card-body">
        <div className="service-card-top">
          <span className="service-index">{category?.title ?? service.category}</span>
          {service.verifyBeforePublishing && <span className="status-pill">Confirm details</span>}
        </div>
        <h3><Link href={href}>{service.name}</Link></h3>
        <p>{service.intro}</p>
        <div className="card-foot">
          <span>Individual price: enquire</span>
          <Link href={href} className="text-link">View details <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </article>
  );
}

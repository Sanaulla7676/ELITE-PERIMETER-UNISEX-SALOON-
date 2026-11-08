import Link from "next/link";
import type { Service, ServiceCategory } from "@/lib/data";
import { CategoryImage } from "@/components/Media";

export function ReferenceTreatmentBands({ services, categories }: { services: Service[]; categories: ServiceCategory[] }) {
  return (
    <div className="reference-treatment-bands">
      {services.map((service, index) => {
        const category = categories.find((item) => item.slug === service.category);
        return (
          <article className={`reference-treatment-band reference-treatment-band--${index % 2 ? "reverse" : "forward"} reference-treatment-band--${service.category}`} key={service.slug}>
            <Link className="reference-treatment-image" href={`/services/${service.category}/${service.slug}/`} aria-label={`Explore ${service.name}`}>
              <CategoryImage
                category={service.category}
                serviceSlug={service.slug}
                alt={`Service image for ${service.name} at Elite Perimeter Unisex Salon.`}
              />
            </Link>
            <div className="reference-treatment-copy">
              <span className="reference-treatment-index">0{index + 1} / {category?.title ?? service.category}</span>
              <h3>{service.name}</h3>
              <p>{service.intro}</p>
              <Link className="reference-treatment-link" href={`/services/${service.category}/${service.slug}/`}>Explore treatment <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

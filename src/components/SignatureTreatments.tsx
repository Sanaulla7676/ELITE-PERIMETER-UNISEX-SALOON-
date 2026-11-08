import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/data";
import styles from "./SignatureTreatments.module.css";

const FEATURED_TREATMENTS = [
  {
    slug: "hair-spa-ullal",
    title: "HAIR SPA TREATMENT",
    description: "Explore a scalp-care ritual and discuss the products, massage steps and aftercare with your stylist.",
    image: "/images/services/hair-spa-ullal-01-closeup.webp",
    imageAlt: "Illustrative close-up of a hair spa scalp treatment",
    icon: "spa",
    imagePosition: "center",
  },
  {
    slug: "keratin-spa-ullal",
    title: "KERATIN SPA",
    description: "Discuss your hair texture, the smoothing products used and the aftercare routine before choosing a treatment.",
    image: "/images/beauty-editorial.jpg",
    imageAlt: "Long, glossy hair shown in an editorial style photograph",
    icon: "keratin",
    imagePosition: "center 38%",
  },
  {
    slug: "haircut-ullal",
    title: "HAIRCUT & STYLE",
    description: "Find a shape that works with your texture, preferred length and everyday styling routine.",
    image: "/images/services/haircut-ullal-01-closeup.webp",
    imageAlt: "Illustrative close-up of a finished layered haircut",
    icon: "cut",
    imagePosition: "center",
  },
] as const;

function TreatmentIcon({ type }: { type: (typeof FEATURED_TREATMENTS)[number]["icon"] }) {
  if (type === "spa") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M19 48c-4-4-6-10-6-17 0-12 8-21 19-21s19 9 19 21c0 7-2 13-6 17" />
        <path d="M22 38c3 4 7 6 10 6s7-2 10-6M24 28h.1M40 28h.1M28 35c2 1 6 1 8 0" />
        <circle cx="15" cy="12" r="3" /><circle cx="31" cy="5" r="2.5" /><circle cx="48" cy="12" r="3" />
        <path d="M13 53h38" />
      </svg>
    );
  }
  if (type === "keratin") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M13 50c8-3 10-13 13-23 3-10 8-15 15-13 7 2 8 10 5 19-2 7-7 12-14 14" />
        <path d="M22 51c7-1 13-5 17-12M29 51c8 0 14-4 19-10" />
        <path d="M17 15l3-7 3 7 7 3-7 3-3 7-3-7-7-3 7-3ZM48 8l2-4 2 4 4 2-4 2-2 4-2-4-4-2 4-2Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="15" cy="13" r="6" />
      <circle cx="15" cy="51" r="6" />
      <path d="m20 17 29 30M20 47 49 17M20 32h24" />
      <path d="M44 17h6v6M44 47h6v-6" />
    </svg>
  );
}

export function SignatureTreatments({ services }: { services: Service[] }) {
  const featured = FEATURED_TREATMENTS.flatMap((item) => {
    const service = services.find((candidate) => candidate.slug === item.slug);
    return service ? [{ ...item, service }] : [];
  });

  return (
    <section className={styles.section} aria-labelledby="signature-treatments-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.heading}>
          <div className={styles.headingMain}>
            <span className={styles.eyebrow}><i /> OUR SIGNATURE TREATMENTS · ULLAL</span>
            <h2 id="signature-treatments-title">
              Signature
              <span>Hair Care at <em>Elite Perimeter</em></span>
            </h2>
          </div>
          <p className={styles.headingNote}>
            Thoughtful hair care starts with the right conversation. Explore the menu, then speak with our team about the treatment and aftercare.
          </p>
        </div>

        <div className={styles.bands}>
          <svg className={styles.ribbon} viewBox="0 0 1200 920" preserveAspectRatio="none" aria-hidden="true">
            <path d="M-90 100 C 120 105 95 235 305 244 C 420 250 430 210 485 200" />
            <path d="M1285 360 C 1060 370 1125 515 950 545 C 880 557 865 590 870 638" />
            <path d="M-80 665 C 120 685 160 785 340 805 C 425 814 470 800 520 780" />
          </svg>
          {featured.map((item, index) => (
            <article
              className={`${styles.band} ${index % 2 === 1 ? styles.reverse : ""}`}
              key={item.slug}
            >
              <Link
                className={styles.photo}
                href={`/services/${item.service.category}/${item.service.slug}/`}
                aria-label={`Explore ${item.service.name}`}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 560px"
                  priority={index === 0}
                  style={{ objectPosition: item.imagePosition }}
                />
                <span className={styles.photoShade} />
              </Link>
              <div className={styles.copy}>
                <span className={styles.index}>0{index + 1} / HAIR CARE</span>
                <div className={styles.copyMain}>
                  <span className={styles.icon}><TreatmentIcon type={item.icon} /></span>
                  <div className={styles.text}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link className={styles.link} href={`/services/${item.service.category}/${item.service.slug}/`}>
                      Explore treatment <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.note}>Service names follow the salon menu. Confirm current availability, treatment steps and pricing directly with the salon before booking.</p>
      </div>
    </section>
  );
}

import { site } from "@/lib/data";
import StarBorder from "@/components/StarBorder";

export function MobileActionBar() {
  const whatsappHref = "https://wa.me/" + site.phoneE164.replace(/\D/g, "") + "?text=" + encodeURIComponent(
    "Hello Elite Perimeter Unisex Salon, I would like to enquire about an appointment."
  );

  return (
    <nav className="floating-contact-actions" aria-label="Quick salon actions">
      <StarBorder
        as="a"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Message Elite Perimeter Unisex Salon on WhatsApp"
        title="WhatsApp"
        className="floating-contact-action floating-contact-action--whatsapp"
        color="#F9D7D3"
        trailColor="#F9D7D3"
        duration={10}
        thickness={1.2}
        radius={999}
        trailLength={0.12}
        stars={3}
        glow={0.12}
        sparkle={false}
        direction="clockwise"
        hover="brighten"
        theme="dark"
        backgroundColor="#642B43"
        textColor="#FFFAF5"
        borderColor="rgba(221,200,166,.45)"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.2 11.7a8.1 8.1 0 0 1-12 7.1L4 20l1.2-4A8.1 8.1 0 1 1 20.2 11.7Z" />
          <path d="M8.8 8.2c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.3 0 .6.4.7 1 1.3 1.8 1.7.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .4-.2 1.1-.6 1.4-.4.4-1 .6-1.6.5-1-.2-2.3-.8-3.5-1.9-1-1-1.7-2.2-1.9-3.1-.2-.7.1-1.6.6-2.1Z" />
        </svg>
        <span>WhatsApp</span>
      </StarBorder>

      <a
        className="floating-contact-action floating-contact-action--call"
        href={"tel:" + site.phoneE164}
        aria-label={"Call Elite Perimeter Unisex Salon at " + site.phoneDisplay}
        title="Call salon"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3.8 9.6 3a1.4 1.4 0 0 1 1.7.8l1.1 2.7a1.4 1.4 0 0 1-.4 1.6l-1.5 1.2a14.6 14.6 0 0 0 4.2 4.2l1.2-1.5a1.4 1.4 0 0 1 1.6-.4l2.7 1.1a1.4 1.4 0 0 1 .8 1.7l-.8 2.6a1.8 1.8 0 0 1-1.8 1.2C10.5 18.2 5.8 13.5 5.8 5.6A1.8 1.8 0 0 1 7 3.8Z" />
        </svg>
        <span>Call salon</span>
      </a>

      <a
        className="floating-contact-action floating-contact-action--directions"
        href={site.mapUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Get directions to Elite Perimeter Unisex Salon"
        title="Directions"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.2" />
        </svg>
        <span>Directions</span>
      </a>
    </nav>
  );
}

import { site } from "@/lib/data";

export function MobileActionBar() {
  return (
    <nav className="mobile-action-bar" aria-label="Quick salon actions">
      <a href={`tel:${site.phoneE164}`} aria-label={`Call Elite Perimeter Unisex Salon at ${site.phoneDisplay}`}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.8 9.6 3a1.4 1.4 0 0 1 1.7.8l1.1 2.7a1.4 1.4 0 0 1-.4 1.6l-1.5 1.2a14.6 14.6 0 0 0 4.2 4.2l1.2-1.5a1.4 1.4 0 0 1 1.6-.4l2.7 1.1a1.4 1.4 0 0 1 .8 1.7l-.8 2.6a1.8 1.8 0 0 1-1.8 1.2C10.5 18.2 5.8 13.5 5.8 5.6A1.8 1.8 0 0 1 7 3.8Z" /></svg>
        <span>Call salon</span>
      </a>
      <a href={site.mapUrl} target="_blank" rel="noreferrer" aria-label="Get directions to Elite Perimeter Unisex Salon">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" /><circle cx="12" cy="9" r="2.2" /></svg>
        <span>Directions</span>
      </a>
    </nav>
  );
}

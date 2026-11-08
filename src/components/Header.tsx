"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { categories, site } from "@/lib/data";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Packages", href: "/packages/" },
  { label: "Guides", href: "/blog/" },
  { label: "Our salon", href: "/about/" },
  { label: "Location", href: "/location/ullal/" },
  { label: "Contact", href: "/contact/" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  const activeIndex = Math.max(0, primaryLinks.findIndex((item) => isCurrent(pathname, item.href)));

  const moveIndicator = (index: number) => {
    const item = itemRefs.current[index];
    const indicator = indicatorRef.current;
    if (!item || !indicator) return;
    gsap.to(indicator, {
      x: item.offsetLeft,
      width: item.offsetWidth,
      duration: 0.56,
      ease: "elastic.out(1, 0.72)",
      overwrite: true,
    });
  };

  useLayoutEffect(() => {
    moveIndicator(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 36);
    const onResize = () => moveIndicator(activeIndex);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, [activeIndex]);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const isHome = pathname === "/";

  return (
    <header
      className={`site-header pill-site-header ${isHome ? "is-home" : "is-inner-page"} ${scrolled ? "is-scrolled" : ""}`}
      data-site-header
    >
      <div className="header-inner container">
        <Link href="/" className="brand brand-wordmark" aria-label="Elite Perimeter Unisex Salon home" onClick={closeMenu}>
          <span className="brand-copy">
            <strong>ELITE PERIMETER</strong>
            <small>UNISEX SALON · ULLAL</small>
          </span>
        </Link>

        <div className="pill-nav-desktop" ref={navRef}>
          <div className="pill-nav-track" onPointerLeave={() => moveIndicator(activeIndex)}>
            <ul className="pill-nav-list" ref={listRef} aria-label="Main navigation">
              {primaryLinks.map((item, index) => (
                <li
                  key={item.href}
                  ref={(node) => { itemRefs.current[index] = node; }}
                  className={item.label === "Services" ? "pill-nav-item pill-nav-item-services" : "pill-nav-item"}
                  onPointerEnter={() => moveIndicator(index)}
                >
                  <Link
                    href={item.href}
                    className={isCurrent(pathname, item.href) ? "pill-nav-link active" : "pill-nav-link"}
                    aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                    onFocus={() => moveIndicator(index)}
                  >
                    {item.label}
                  </Link>
                  {item.label === "Services" && (
                    <>
                      <button
                        className="pill-nav-services-toggle"
                        type="button"
                        aria-label="Browse service categories"
                        aria-expanded={servicesOpen}
                        onClick={() => setServicesOpen((current) => !current)}
                      >
                        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 6 4.5 4 4.5-4" /></svg>
                      </button>
                      <div className={servicesOpen ? "pill-services-menu is-open" : "pill-services-menu"}>
                        <div className="pill-services-menu-heading">
                          <span>THE SERVICE MENU</span>
                          <strong>Choose your ritual.</strong>
                        </div>
                        <div className="pill-services-menu-grid">
                          {categories.map((category) => (
                            <Link key={category.slug} href={`/services/${category.slug}/`} onClick={closeMenu}>
                              <span>{category.title}</span>
                              <small>{category.eyebrow}</small>
                              <b aria-hidden="true">↗</b>
                            </Link>
                          ))}
                        </div>
                        <Link className="pill-services-all" href="/services/" onClick={closeMenu}>View all 28 services <span>↗</span></Link>
                      </div>
                    </>
                  )}
                </li>
              ))}
              <li className="pill-nav-indicator-slot" aria-hidden="true">
                <span className="pill-nav-indicator" ref={indicatorRef} />
              </li>
            </ul>
          </div>
        </div>

        <div className="header-actions">
          <a className="header-call-btn magnetic-btn" href={`tel:${site.phoneE164}`}>
            <span>Call the salon</span><b aria-hidden="true">↗</b>
          </a>
          <button
            className={menuOpen ? "pill-nav-toggle is-open" : "pill-nav-toggle"}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-primary-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span>Explore</span>
            <span className="pill-burger" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </div>

      {menuOpen && <button className="pill-nav-backdrop" type="button" aria-label="Close navigation menu" onClick={closeMenu} />}
      <div id="mobile-primary-navigation" className={menuOpen ? "pill-nav-panel is-open" : "pill-nav-panel"} aria-hidden={!menuOpen}>
        <div className="pill-nav-panel-top"><span>EXPLORE ELITE PERIMETER</span><small>ULLAL · BENGALURU</small></div>
        {primaryLinks.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={isCurrent(pathname, item.href) ? "pill-nav-row active" : "pill-nav-row"}
            style={{ animationDelay: `${index * 38}ms` }}
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            {item.label}<span aria-hidden="true">↗</span>
          </Link>
        ))}
        <div className="pill-nav-mobile-services">
          <span className="pill-nav-mobile-label">SERVICE CATEGORIES</span>
          <div>
            {categories.map((category) => (
              <Link key={category.slug} href={`/services/${category.slug}/`} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>{category.title}</Link>
            ))}
          </div>
        </div>
        <a className="pill-nav-mobile-cta magnetic-btn" href={`tel:${site.phoneE164}`} tabIndex={menuOpen ? 0 : -1} onClick={closeMenu}>
          Call {site.phoneDisplay}<span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

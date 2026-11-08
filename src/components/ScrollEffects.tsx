"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealGroup = {
  selector: string;
  items: string;
  start?: string;
  stagger?: number;
  y?: number;
};

export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const eventCleanups: Array<() => void> = [];
    const context = gsap.context(() => {
      const progress = document.querySelector<HTMLElement>(".ep-scroll-progress-fill");
      if (progress && !reducedMotion) {
        gsap.to(progress, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.25,
          },
        });
      }

      if (reducedMotion) {
        gsap.set(
          "[data-scroll-reveal], [data-scroll-image], .section-heading, .category-tile, .service-card, .package-feature, .package-card, .journey-step, .blog-feature-card, .trust-item, .reference-treatment-copy, .home-faq, .home-final-cta",
          { clearProps: "all", autoAlpha: 1 },
        );
        return;
      }

      // Hero: keep the existing peach image/copy movement tied to scroll.
      const heroTrack = document.querySelector<HTMLElement>("[data-home-hero-track]");
      if (heroTrack) {
        const heroMedia = heroTrack.querySelector<HTMLElement>("[data-hero-media]");
        const heroScrim = heroTrack.querySelector<HTMLElement>("[data-hero-scrim]");
        const heroCopy = heroTrack.querySelector<HTMLElement>("[data-hero-copy]");

        if (heroMedia) {
          gsap.to(heroMedia, {
            scale: 1.24,
            transformOrigin: "78% center",
            ease: "none",
            scrollTrigger: {
              trigger: heroTrack,
              start: "top top",
              end: "bottom top",
              scrub: 0.65,
            },
          });
        }
        if (heroScrim) {
          gsap.fromTo(heroScrim, { opacity: 0.68 }, {
            opacity: 0.9,
            ease: "none",
            scrollTrigger: {
              trigger: heroTrack,
              start: "top top",
              end: "bottom top",
              scrub: 0.65,
            },
          });
        }
        if (heroCopy) {
          // React Bits BlurText and AnimatedContent handle the hero copy entrance.
          gsap.to(heroCopy, {
            yPercent: 28,
            autoAlpha: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: heroTrack,
              start: "top top",
              end: "65% top",
              scrub: 0.65,
            },
          });
        }
      }

      // Editorial section headings arrive in a short, readable sequence.
      gsap.utils.toArray<HTMLElement>(".section-heading").forEach((heading) => {
        const parts = heading.querySelectorAll<HTMLElement>(".kicker, h2, p, .text-link");
        if (!parts.length) return;
        gsap.fromTo(parts,
          { y: 26, autoAlpha: 0, filter: "blur(4px)" },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.72,
            stagger: 0.085,
            ease: "power3.out",
            scrollTrigger: { trigger: heading, start: "top 87%", once: true },
          },
        );
      });

      // Related cards enter as a group, not as unrelated items firing at random.
      const revealGroups: RevealGroup[] = [
        { selector: ".package-grid", items: ".package-card", stagger: 0.075, y: 28 },
        { selector: ".journey-steps", items: ".journey-step", stagger: 0.12, y: 26 },
        { selector: ".contact-grid", items: ".contact-card, .address-card", stagger: 0.09, y: 28 },
        { selector: ".home-faq-cta", items: ".home-faq, .home-final-cta", stagger: 0.15, y: 34 },
        { selector: ".footer-top", items: ":scope > *", stagger: 0.08, y: 22 },
      ];

      revealGroups.forEach((config) => {
        gsap.utils.toArray<HTMLElement>(config.selector).forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>(config.items);
          if (!items.length) return;
          gsap.fromTo(items,
            { y: config.y ?? 28, autoAlpha: 0, filter: "blur(3px)" },
            {
              y: 0,
              autoAlpha: 1,
              filter: "blur(0px)",
              duration: 0.72,
              stagger: config.stagger ?? 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: group,
                start: config.start ?? "top 88%",
                once: true,
              },
            },
          );
        });
      });

      // Long-form copy blocks on service, blog and location pages.
      const copySelector = [
        ".split-feature-copy",
        ".home-keratin-mobile-copy",
        ".service-detail-content",
        ".blog-content-section",
        ".service-editorial-section",
      ].join(",");
      gsap.utils.toArray<HTMLElement>(copySelector).forEach((copy) => {
        if (copy.closest(".home-faq-cta")) return;
        gsap.fromTo(copy,
          { y: 34, autoAlpha: 0, filter: "blur(4px)" },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.82,
            ease: "power3.out",
            scrollTrigger: { trigger: copy, start: "top 87%", once: true },
          },
        );
      });

      // Individual editorial treatment bands: the picture and its copy move
      // together with the scroll, alternating reveal direction for each band.
      gsap.utils.toArray<HTMLElement>(".reference-treatment-band").forEach((band, index) => {
        const visual = band.querySelector<HTMLElement>(".reference-treatment-image");
        const image = visual?.querySelector<HTMLElement>("img");
        const copy = band.querySelector<HTMLElement>(".reference-treatment-copy");
        const fromRight = band.classList.contains("reference-treatment-band--reverse") || index % 2 === 1;
        const trigger = {
          trigger: band,
          start: "top 88%",
          end: "top 34%",
          scrub: 0.72,
          invalidateOnRefresh: true,
        } as const;

        if (visual) {
          gsap.fromTo(visual,
            { x: fromRight ? -42 : 42, y: 30, scale: 0.965, autoAlpha: 0 },
            { x: 0, y: 0, scale: 1, autoAlpha: 1, ease: "none", scrollTrigger: trigger },
          );
        }
        if (image) {
          gsap.fromTo(image,
            { scale: 1.15, yPercent: 4 },
            { scale: 1, yPercent: -3, ease: "none", scrollTrigger: trigger },
          );
        }
        if (copy) {
          gsap.fromTo(copy,
            { x: fromRight ? -30 : 30, y: 22, autoAlpha: 0 },
            { x: 0, y: 0, autoAlpha: 1, ease: "none", scrollTrigger: trigger },
          );
        }
      });

      // Image and illustration surfaces: the reveal and gentle image drift are
      // scrubbed by the visitor's scroll position, so reversing the scroll reverses them.
      const visualSelector = [
        ".home-motion-loop__frame",
        ".category-tile .image-frame",
        ".service-card-image-link .image-frame",
        ".home-keratin-banner-desktop",
        ".home-keratin-mobile-artwork",
        ".video-frame",
        ".map-panel",
        ".split-feature-image .image-frame",
        ".split-feature-image > img",
        ".service-hero-photo .image-frame",
        ".service-hero-photo > img",
        ".page-hero-media .image-frame",
        ".page-hero-media > img",
        ".service-ritual-photo .image-frame",
        ".blog-featured-media .image-frame",
        ".photo-grid .image-frame",
      ].join(",");

      gsap.utils.toArray<HTMLElement>(visualSelector).forEach((visual, index) => {
        if (getComputedStyle(visual).display === "none") return;
        const fromRight = index % 2 === 1;
        const trigger = {
          trigger: visual,
          start: "top 91%",
          end: "top 43%",
          scrub: 0.72,
          invalidateOnRefresh: true,
        } as const;

        gsap.fromTo(visual,
          { x: fromRight ? 24 : -24, y: 44, scale: 0.975, autoAlpha: 0 },
          { x: 0, y: 0, scale: 1, autoAlpha: 1, ease: "none", scrollTrigger: trigger },
        );

        const image = visual.matches("img") ? visual : visual.querySelector<HTMLElement>("img");
        if (image) {
          gsap.fromTo(image,
            { scale: 1.13, yPercent: 4 },
            { scale: 1.015, yPercent: -3, ease: "none", scrollTrigger: trigger },
          );
        }
      });

      // FAQ answers and the final contact panel reveal in a calm stagger.
      const faqList = document.querySelector<HTMLElement>(".home-faq .faq-list");
      if (faqList) {
        const rows = faqList.querySelectorAll<HTMLElement>("details");
        gsap.fromTo(rows,
          { y: 16, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            stagger: 0.09,
            ease: "power2.out",
            scrollTrigger: { trigger: faqList, start: "top 88%", once: true },
          },
        );
      }

      // Keep the established responsive header and progress feedback.
      ScrollTrigger.create({
        start: "top -48",
        end: 99999,
        toggleClass: { targets: ".site-header", className: "is-scrolled" },
      });

      if (!coarsePointer) {
        const magneticButtons = gsap.utils.toArray<HTMLElement>(
          ".button-primary, .button-secondary, .button-light, .header-call-btn, .pill-nav-mobile-cta",
        );
        magneticButtons.forEach((button) => {
          const xTo = gsap.quickTo(button, "x", { duration: 0.35, ease: "power3.out" });
          const yTo = gsap.quickTo(button, "y", { duration: 0.35, ease: "power3.out" });
          const onMove = (event: PointerEvent) => {
            const rect = button.getBoundingClientRect();
            const dx = event.clientX - (rect.left + rect.width / 2);
            const dy = event.clientY - (rect.top + rect.height / 2);
            xTo(dx * 0.12);
            yTo(dy * 0.16);
          };
          const onLeave = () => { xTo(0); yTo(0); };
          button.addEventListener("pointermove", onMove);
          button.addEventListener("pointerleave", onLeave);
          eventCleanups.push(() => {
            button.removeEventListener("pointermove", onMove);
            button.removeEventListener("pointerleave", onLeave);
          });
        });
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
      const refreshOnLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", refreshOnLoad, { once: true });
      eventCleanups.push(() => window.removeEventListener("load", refreshOnLoad));
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    });

    const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      window.cancelAnimationFrame(refreshFrame);
      eventCleanups.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, [pathname]);

  return <div className="ep-scroll-progress" aria-hidden="true"><span className="ep-scroll-progress-fill" /></div>;
}

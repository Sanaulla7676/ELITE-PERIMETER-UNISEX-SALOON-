"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
        gsap.set("[data-scroll-reveal], [data-scroll-image]", {
          clearProps: "all",
          autoAlpha: 1,
        });
        return;
      }

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
          const heroTitleLines = heroCopy.querySelectorAll<HTMLElement>(".home-hero-brand-title .hero-title-line > span");
          const heroDescription = heroCopy.querySelector<HTMLElement>(".home-hero-brand-description");

          if (heroTitleLines.length) {
            gsap.fromTo(heroTitleLines,
              { yPercent: 112, autoAlpha: 0, filter: "blur(10px)" },
              {
                yPercent: 0,
                autoAlpha: 1,
                filter: "blur(0px)",
                duration: 1.05,
                stagger: 0.16,
                delay: 0.18,
                ease: "power4.out",
                clearProps: "filter",
              },
            );
          }

          if (heroDescription) {
            gsap.fromTo(heroDescription,
              { y: 22, autoAlpha: 0, filter: "blur(5px)" },
              {
                y: 0,
                autoAlpha: 1,
                filter: "blur(0px)",
                duration: 0.82,
                delay: 0.62,
                ease: "power3.out",
                clearProps: "filter",
              },
            );
          }

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

      const revealSelector = [
        ".section-heading",
        ".reference-treatment-band",
        ".category-tile",
        ".service-card",
        ".journey-step",
        ".package-feature",
        ".blog-feature-card",
        ".package-card",
        ".blog-card",
        ".service-ritual",
        ".contact-card",
        ".address-card",
        ".blog-content-section",
        ".service-editorial-section",
        ".split-feature-copy",
        ".service-detail-content",
      ].join(",");

      gsap.utils.toArray<HTMLElement>(revealSelector).forEach((element) => {
        gsap.fromTo(element,
          { autoAlpha: 0, y: 38, filter: "blur(5px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.78,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      const imageSelector = [
        ".split-feature-image .image-frame",
        ".split-feature-image > img",
        ".reference-treatment-image .image-frame",
        ".service-ritual-photo .image-frame",
        ".service-hero-photo .image-frame",
        ".blog-featured-media .image-frame",
      ].join(",");

      gsap.utils.toArray<HTMLElement>(imageSelector).forEach((element) => {
        gsap.fromTo(element,
          { clipPath: "inset(12% 0% 0% 0%)", scale: 1.045 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      const parallaxSelector = [
        ".split-feature-image .image-frame",
        ".reference-treatment-image .image-frame",
        ".service-ritual-photo .image-frame",
      ].join(",");

      gsap.utils.toArray<HTMLElement>(parallaxSelector).forEach((element) => {
        gsap.fromTo(element,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: element.closest("section") ?? element,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          },
        );
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

      ScrollTrigger.refresh();
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

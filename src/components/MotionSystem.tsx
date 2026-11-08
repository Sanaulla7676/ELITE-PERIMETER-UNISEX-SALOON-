"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionSystem() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const homeHero = document.querySelector(".home-hero");

        if (homeHero) {
          const timeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            delay: 0.08,
          });

          timeline
            .fromTo(
              ".home-hero-copy .eyebrow",
              { y: 14, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.55 },
            )
            .fromTo(
              ".hero-title-line > span",
              { yPercent: 112, opacity: 0 },
              { yPercent: 0, opacity: 1, duration: 0.88, stagger: 0.12 },
              "-=0.22",
            )
            .fromTo(
              ".home-hero-copy .lead",
              { y: 22, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.65 },
              "-=0.48",
            )
            .fromTo(
              ".home-hero-copy .hero-actions > *",
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
              "-=0.36",
            )
            .fromTo(
              ".home-hero-media",
              { clipPath: "inset(0 0 100% 0 round 3px)" },
              { clipPath: "inset(0 0 0% 0 round 3px)", duration: 1.15, ease: "power4.inOut" },
              "-=0.82",
            )
            .fromTo(
              ".home-hero-media img",
              { scale: 1.12 },
              { scale: 1, duration: 1.45, ease: "power2.out" },
              "-=1.1",
            )
            .fromTo(
              ".hero-image-caption",
              { y: 16, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.55 },
              "-=0.35",
            );
        } else {
          gsap.fromTo(
            ".service-hero-copy h1, .page-hero h1",
            { y: 28, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          );
        }

        gsap.utils.toArray<HTMLElement>(".section-heading").forEach((heading) => {
          const parts = heading.querySelectorAll(".kicker, h2, p, .text-link");
          if (!parts.length) return;

          gsap.fromTo(
            parts,
            { y: 25, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.72,
              stagger: 0.09,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 86%",
                once: true,
              },
            },
          );
        });

        const cardGroups = gsap.utils.toArray<HTMLElement>(
          ".category-grid, .feature-grid, .package-feature-grid, .package-grid, .journey-steps, .contact-grid",
        );

        cardGroups.forEach((group) => {
          const cards = group.querySelectorAll(
            ".category-tile, .service-card, .package-feature, .package-card, .journey-step, .contact-card, .address-card",
          );
          if (!cards.length) return;

          gsap.fromTo(
            cards,
            { y: 26, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.68,
              stagger: 0.075,
              ease: "power3.out",
              scrollTrigger: {
                trigger: group,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

        const mediaBlocks = gsap.utils.toArray<HTMLElement>(
          ".split-feature-image, .service-hero-photo, .page-hero-media, .video-frame",
        );

        mediaBlocks.forEach((block) => {
          gsap.fromTo(
            block,
            { clipPath: "inset(0 0 88% 0 round 3px)" },
            {
              clipPath: "inset(0 0 0% 0 round 3px)",
              duration: 1.05,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: block,
                start: "top 88%",
                once: true,
              },
            },
          );

          const image = block.querySelector("img");
          if (image) {
            gsap.fromTo(
              image,
              { scale: 1.085 },
              {
                scale: 1,
                duration: 1.25,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: block,
                  start: "top 88%",
                  once: true,
                },
              },
            );
          }
        });

        ScrollTrigger.create({
          start: "top -48",
          end: 99999,
          toggleClass: { targets: ".site-header", className: "is-scrolled" },
        });

        gsap.to(".scroll-progress-fill", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.25,
          },
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());
      });

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-fill" />
    </div>
  );
}

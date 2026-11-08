'use client';

import { useEffect, useRef, useState } from "react";

export function DeferredMotionFrame() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.01 }
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="home-motion-loop__frame">
      {active ? (
        <iframe
          src="/animations/elite-perimeter-salon-loop.html"
          title="Elite Perimeter Unisex Salon animated brand identity"
          loading="eager"
        />
      ) : (
        <div className="home-motion-loop__placeholder" aria-hidden="true" />
      )}
    </div>
  );
}

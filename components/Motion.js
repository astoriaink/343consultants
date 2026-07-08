"use client";

import { useEffect } from "react";

const motionSelector = [
  ".hero-copy",
  ".page-hero-copy",
  ".page-hero-image",
  ".section-heading",
  ".card",
  ".stat-card",
  ".founder-card",
  ".content-panel",
  ".faq-item",
  ".featured-project-card",
  ".project-row",
  ".cta-band"
].join(", ");

export default function Motion() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(motionSelector));
    if (!elements.length) return undefined;

    elements.forEach((element) => {
      element.classList.add("motion-reveal");

      const siblings = Array.from(element.parentElement?.children || []).filter((child) =>
        elements.includes(child)
      );
      const index = siblings.indexOf(element);
      if (index > 0) {
        element.style.setProperty("--motion-delay", `${Math.min(index * 70, 280)}ms`);
      }
    });

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
      elements.forEach((element) => {
        element.classList.remove("motion-reveal", "is-visible");
        element.style.removeProperty("--motion-delay");
      });
    };
  }, []);

  return null;
}

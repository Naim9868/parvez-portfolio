"use client";
import { useEffect } from "react";

export default function useScrollAnimate() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate, .scroll-animate-left");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            // Optional: re-trigger animation every time
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

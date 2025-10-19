"use client";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlighting
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header
      id="header"
      className={`bg-black/30 backdrop-blur-lg fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-white flex items-center"
        >
          <span className="bg-purple-600 text-white rounded-full h-10 w-10 flex items-center justify-center mr-3 font-extrabold">
            P
          </span>
          Pervez
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex space-x-1 items-center bg-gray-800/50 p-2 rounded-full">
          {[
            { href: "#about", label: "About" },
            { href: "#portfolio", label: "Portfolio" },
            { href: "#courses", label: "Courses" },
            { href: "#blog", label: "Blog" },
            { href: "#youtube", label: "YouTube" },
            { href: "#contact", label: "Contact", primary: true },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link-item px-4 py-2 text-white rounded-full ${
                activeSection === item.href ? "active" : ""
              } ${item.primary ? "btn-primary" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900">
          {[
            "About",
            "Portfolio",
            "Courses",
            "Blog",
            "YouTube",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 px-6 text-white hover:bg-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

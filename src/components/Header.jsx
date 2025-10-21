"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

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

  // Close menu when clicking on a link
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking outside (optional but good UX)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('#header')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

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
          onClick={handleNavClick}
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
            { href: "/portfolio", label: "Portfolio" },
            { href: "/course", label: "Courses" },
            { href: "/blog", label: "Blog" },
            { href: "#youtube", label: "YouTube" },
            { href: "#contact", label: "Contact", primary: true },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link-item px-4 py-2 text-white rounded-full ${
                activeSection === item.href ? "active" : ""
              } ${item.primary ? "btn-primary" : ""}`}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          className="lg:hidden text-white text-2xl w-10 h-10 flex items-center justify-center bg-gray-800/50 rounded-full"
          aria-label="Toggle menu"
        >
          {/* Simple hamburger icon using CSS */}
          <div className="flex flex-col space-y-1">
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-gray-900 transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="py-2">
          {[
            { href: "#about", label: "About" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "#courses", label: "Courses" },
            { href: "#blog", label: "Blog" },
            { href: "#youtube", label: "YouTube" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-3 px-6 text-white hover:bg-gray-800 transition-colors ${
                activeSection === item.href ? 'bg-purple-600/20 border-l-4 border-purple-500' : ''
              }`}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
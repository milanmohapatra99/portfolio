"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-[10%] z-[1000] border-b border-white/5 transition-all duration-300
        ${scrolled ? "py-3.75 shadow-[0_5px_30px_rgba(0,0,0,0.3)]" : "py-5"}
        bg-[rgba(11,15,26,0.95)] backdrop-blur-[15px]`}
    >
      {/* Logo */}
      <div
        className="text-[1.8rem] font-bold gradient-text cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => handleLinkClick("#home")}
      >
        Aethonex
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-[35px] list-none">
        {navItems.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => handleLinkClick(item.href)}
              className="relative text-white font-medium text-[0.95rem] transition-colors duration-300 hover:text-[#00F5A0] nav-link bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <button
        className={`md:hidden flex flex-col gap-1.25 cursor-pointer bg-transparent border-none z-[1001] ${menuOpen ? "toggle-active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="w-6.25 h-0.75 bg-white rounded-sm transition-all duration-300 block" />
        <span className="w-6.25 h-0.75 bg-white rounded-sm transition-all duration-300 block" />
        <span className="w-6.25 h-0.75 bg-white rounded-sm transition-all duration-300 block" />
      </button>

      {/* Mobile Nav */}
      <ul
        className={`fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-[rgba(11,15,26,0.98)] backdrop-blur-[20px]
          flex flex-col items-center justify-start pt-12.5 gap-7.5 list-none transition-all duration-500 z-[999]
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {navItems.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => handleLinkClick(item.href)}
              className="relative text-white font-medium text-xl transition-colors duration-300 hover:text-[#00F5A0] nav-link bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

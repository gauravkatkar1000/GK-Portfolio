"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
          : "py-8"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="font-display text-lg font-black tracking-tight">
          GK
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-300"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="/Gaurav_Katkar_Resume.pdf"
            download="Gaurav_Katkar_Resume.pdf"
            className="text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-300"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            Resume ↓
          </a>
          <a
            href="mailto:gauravkatkar1000@gmail.com"
            className="text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-300"
            style={{ color: "var(--accent)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent)")}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden transition-colors duration-300"
          style={{ color: "var(--muted)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t px-6 py-6 space-y-5" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm tracking-wide transition-colors duration-300"
              style={{ color: "var(--muted)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:gauravkatkar1000@gmail.com"
            className="block text-sm pt-2"
            style={{ color: "var(--accent)" }}
          >
            Hire Me →
          </a>
        </div>
      )}
    </header>
  );
}

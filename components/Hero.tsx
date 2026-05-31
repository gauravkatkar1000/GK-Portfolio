"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "AI Solutions Developer",
  "GenAI Engineer",
  "LLM Specialist",
  "AI Engineer",
  "Multi-Agent Systems Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed,  setDisplayed] = useState("");
  const [deleting,   setDeleting]  = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-[11px] font-medium tracking-[0.2em] uppercase mb-12"
          style={{ color: "var(--muted)" }}
        >
          Pune, India · Available for AI roles
        </motion.p>

        {/* Name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="font-display font-black leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(72px, 12vw, 152px)", color: "var(--fg)" }}
          >
            Gaurav
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
            className="font-display font-black leading-[0.88] tracking-tight italic"
            style={{ fontSize: "clamp(72px, 12vw, 152px)", color: "var(--fg)" }}
          >
            Katkar
          </motion.h1>
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="text-sm md:text-base" style={{ color: "var(--muted)" }}>—</span>
          <span className="text-sm md:text-base tracking-wide" style={{ color: "var(--fg)" }}>
            {displayed}
            <span className="cursor-blink inline-block w-[2px] h-4 ml-0.5 align-middle" style={{ background: "var(--accent)" }} />
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="flex flex-wrap items-center gap-10"
        >
          <a
            href="#projects"
            className="text-sm font-medium tracking-[0.1em] uppercase pb-0.5 transition-all duration-300"
            style={{ borderBottom: "1px solid var(--fg)", color: "var(--fg)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.borderBottomColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--fg)";
              e.currentTarget.style.borderBottomColor = "var(--fg)";
            }}
          >
            View Work
          </a>
          <a
            href="#contact"
            className="text-sm font-medium tracking-[0.1em] uppercase transition-colors duration-300"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            Get in Touch →
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {[
            { value: "4+",   label: "Years Experience" },
            { value: "3",    label: "Production AI Systems" },
            { value: "200+", label: "Documents Indexed" },
            { value: "8+",   label: "Assessment Modules" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="font-display font-black leading-none mb-2"
                style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "var(--fg)" }}
              >
                {s.value}
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase" style={{ color: "var(--muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--muted)" }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-current to-transparent" />
      </motion.div>
    </section>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Contact() {
  return (
    <section id="contact" className="py-32" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="section-label">
            <span>05</span>
            <span>Contact</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Left: big heading */}
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            <h2
              className="font-display font-black leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(48px, 7vw, 96px)", color: "var(--fg)" }}
            >
              Let&apos;s build<br />
              <em>something</em><br />
              great.
            </h2>
            <p className="mt-8 text-sm leading-relaxed max-w-xs" style={{ color: "var(--muted)" }}>
              Open to AI Solutions Developer and GenAI Engineer roles.
              If you have an interesting problem that AI could solve, I&apos;d love to talk.
            </p>
          </motion.div>

          {/* Right: contact details */}
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col justify-center gap-8"
          >
            {/* Email */}
            <div>
              <div className="text-[10px] tracking-[0.15em] uppercase mb-2" style={{ color: "var(--muted)" }}>
                Email
              </div>
              <a
                href="mailto:gauravkatkar1000@gmail.com"
                className="transition-colors duration-300"
                style={{ fontSize: "clamp(16px, 1.8vw, 20px)", color: "var(--fg)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg)")}
              >
                gauravkatkar1000@gmail.com
              </a>
            </div>

            {/* Other links */}
            <div className="space-y-4 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/gauravkatkar1000",  value: "linkedin.com/in/gauravkatkar1000" },
                { label: "GitHub",   href: "https://github.com/gauravkatkar1000",            value: "github.com/gauravkatkar1000" },
                { label: "Phone",    href: "tel:+919604499373",                              value: "+91 9604499373" },
                { label: "Location", href: null,                                             value: "Pune, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-baseline gap-6">
                  <span
                    className="text-[10px] tracking-[0.12em] uppercase shrink-0 w-16"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm transition-colors duration-300"
                      style={{ color: "#aaaaaa" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#aaaaaa")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: "#aaaaaa" }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="mailto:gauravkatkar1000@gmail.com"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium tracking-[0.1em] uppercase pb-0.5 w-fit transition-all duration-300"
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
              Say Hello →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

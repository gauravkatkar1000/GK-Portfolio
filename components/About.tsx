"use client";

import { motion, type Variants } from "framer-motion";

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function About() {
  return (
    <section id="about" className="py-32" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="section-label">
            <span>01</span>
            <span>About</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_360px] gap-16 md:gap-24 items-start">

          {/* Left: statement */}
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
            <p
              className="font-display font-normal italic leading-snug mb-8"
              style={{ fontSize: "clamp(22px, 2.5vw, 30px)", color: "var(--fg)" }}
            >
              &ldquo;I approach AI development the way I approach all engineering —
              starting from the problem, not the technology.&rdquo;
            </p>
            <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "#aaaaaa" }}>
              <p>
                Over the last year I have designed and shipped three production AI systems end-to-end:
                a semantic knowledge retrieval engine, an AI-powered pricing intelligence system, and
                a full recruitment intelligence pipeline with async video interviews and AI candidate
                scoring. I bring both the technical depth and the solution-design mindset that AI
                roles demand.
              </p>
              <p>
                I am particularly strong at identifying{" "}
                <span style={{ color: "var(--fg)" }}>where AI adds real value versus where simpler
                solutions suffice</span>{" "}
                — and that judgement is what separates engineers who ship from those who over-engineer.
              </p>
            </div>
          </motion.div>

          {/* Right: details */}
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6 md:pt-2"
          >
            {[
              { label: "Location",     value: "Pune, India" },
              { label: "Current Role", value: "Senior Full Stack & AI Developer @ Jombay" },
              { label: "Education",    value: "B.E. Computer Science, JSCOE Pune (2021)" },
              { label: "Email",        value: "gauravkatkar1000@gmail.com", href: "mailto:gauravkatkar1000@gmail.com" },
              { label: "Open to",      value: "AI Solutions Developer / GenAI Engineer roles" },
            ].map((item) => (
              <div
                key={item.label}
                className="pb-5"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div
                  className="text-[10px] tracking-[0.15em] uppercase mb-1.5"
                  style={{ color: "var(--muted)" }}
                >
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "var(--fg)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg)")}
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="text-sm" style={{ color: "var(--fg)" }}>{item.value}</div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

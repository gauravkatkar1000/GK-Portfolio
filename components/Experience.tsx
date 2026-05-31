"use client";

import { motion, type Variants } from "framer-motion";

const AI_BULLETS = [
  "Architected a semantic search RAG pipeline on AWS using Amazon Titan Embedding v2 and Anthropic Claude API over a corpus of 200+ documents, with tiered retrieval fallback and confidence scoring.",
  "Built an AI-powered pricing recommendation system using 3 years of historical data to suggest prices for new client engagements.",
  "Designed an end-to-end recruitment intelligence pipeline: JD parsing, rubric generation, resume ingestion, AI interview question generation, async video interviews, transcript scoring, and fit recommendation.",
  "Built multi-agent AI systems to automate complex enterprise workflows.",
  "Applied prompt engineering to enforce strict output schemas and structured JSON responses for downstream reliability.",
  "Worked extensively with Ruby on Rails backend and Angular frontend alongside AI integrations.",
];

const DEV_BULLETS = [
  "Built and deployed two cross-platform applications from scratch on Android, iOS, and Web using Flutter with Clean Architecture and CI/CD best practices.",
  "Architected scalable enterprise applications applying SOLID principles, Repository Pattern, and Dependency Injection — spanning 50+ screens across multiple domains.",
  "Developed secure assessment modules (8+) including aptitude tests, psychometric assessments, and live proctoring with face detection and tab-switch alerts.",
  "Engineered real-time data synchronisation using stream-based REST architecture and offline-first Realm caching with custom sync retry mechanisms.",
  "Integrated Zoom Video SDK with session scheduling, attendance tracking, and recorded playback; implemented Firebase Auth with JWT and role-based access.",
  "Established automated CI/CD pipelines for iOS and Android with integrated build and test stages.",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 text-[13px] leading-relaxed" style={{ color: "#aaaaaa" }}>
          <span
            className="mt-2 w-1 h-1 rounded-full shrink-0"
            style={{ background: "var(--accent)", opacity: 0.6 }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-32" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="section-label">
            <span>03</span>
            <span>Experience</span>
          </div>
        </motion.div>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
          {/* Role header */}
          <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-16 mb-14">
            <div className="space-y-1">
              <div className="text-[10px] tracking-[0.15em] uppercase" style={{ color: "var(--muted)" }}>
                Jul 2021 — Present
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase" style={{ color: "var(--muted)" }}>
                4+ years
              </div>
            </div>
            <div>
              <h3
                className="font-display font-bold mb-1.5"
                style={{ fontSize: "clamp(22px, 2.5vw, 30px)", color: "var(--fg)" }}
              >
                Senior Full Stack & AI Developer
              </h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>Jombay · Pune, India</p>
            </div>
          </div>

          {/* Bullets */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <div
                className="text-[10px] tracking-[0.15em] uppercase mb-6 pb-4"
                style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}
              >
                AI & LLM Work
              </div>
              <BulletList items={AI_BULLETS} />
            </div>
            <div>
              <div
                className="text-[10px] tracking-[0.15em] uppercase mb-6 pb-4"
                style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}
              >
                Application Development
              </div>
              <BulletList items={DEV_BULLETS} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

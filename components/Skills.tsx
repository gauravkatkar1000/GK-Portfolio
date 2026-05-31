"use client";

import { motion } from "framer-motion";

const GROUPS = [
  {
    category: "AI & LLM",
    items: ["Anthropic Claude API", "LLM Application Development", "Prompt Engineering", "Multi-Agent Systems", "AI Workflow Design"],
  },
  {
    category: "AI Architecture",
    items: ["RAG Pipelines", "Vector Databases", "Pinecone & Chroma", "Semantic Search", "Embedding Systems", "AWS RAG", "Amazon Titan Embeddings v2"],
  },
  {
    category: "Development",
    items: ["Python", "Flutter / Dart", "Ruby on Rails", "Angular", "REST APIs", "Firebase", "CI/CD Pipelines", "Clean Architecture"],
  },
  {
    category: "Strengths",
    items: ["Problem-solving", "Solution Design", "Scalable Architecture", "Cross-platform Development", "Real-time Systems", "SOLID Principles"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <div className="section-label">
            <span>02</span>
            <span>Core Skills</span>
          </div>
        </motion.div>

        <div>
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-16 py-7"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div
                className="text-[11px] font-medium tracking-[0.12em] uppercase pt-0.5"
                style={{ color: "var(--muted)" }}
              >
                {group.category}
              </div>
              <div className="text-sm leading-relaxed" style={{ color: "#aaaaaa" }}>
                {group.items.join("  ·  ")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

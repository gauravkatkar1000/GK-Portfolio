"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    number: "01",
    title: "AI Knowledge Base",
    subtitle: "Live Demo",
    live: true,
    demo: "https://ai-knowledge-base-gk1000.streamlit.app",
    description:
      "A fully working RAG chatbot you can try right now. Ask it anything about AI, LLMs, RAG, or transformers — it retrieves the most relevant chunks from 7 Wikipedia articles using cosine similarity, then synthesises a cited answer via Groq's LLaMA 3.3 70B.",
    highlights: [
      "Groq LLaMA 3.3 70B for sub-second inference",
      "Sentence Transformers (all-MiniLM-L6-v2) for local embeddings",
      "Numpy vector store — no external DB required",
      "Multi-turn chat with per-response source citations",
    ],
    tags: ["RAG", "Groq", "LLaMA 3.3 70B", "Sentence Transformers", "Streamlit", "Python"],
  },
  {
    number: "02",
    title: "Intelligent Knowledge Retrieval Engine",
    subtitle: null,
    live: false,
    demo: null,
    description:
      "A semantic search system over 200+ enterprise knowledge documents using RAG on AWS. Built end-to-end with Amazon Titan Embedding v2 for ingestion and Anthropic Claude API for response synthesis. Features a multi-dimensional confidence scoring engine — with 6-tier fallback logic to always return results.",
    highlights: [
      "Amazon Titan Embedding v2 for document ingestion on AWS",
      "Anthropic Claude API for response synthesis",
      "Multi-dimensional confidence scoring across 4 dimensions",
      "6-tier fallback logic ensuring results are always returned",
    ],
    tags: ["Anthropic Claude", "RAG", "AWS", "Vector DB", "Ruby on Rails", "Angular", "Amazon Titan v2"],
  },
  {
    number: "03",
    title: "AI-Powered Pricing Intelligence System",
    subtitle: null,
    live: false,
    demo: null,
    description:
      "A data-driven pricing recommendation engine trained on 3 years of historical engagement data. Uses AI to identify patterns across past engagements — industry, program type, audience size, delivery model — and surfaces the most comparable reference points for new proposals.",
    highlights: [
      "3 years of historical engagement data as training signal",
      "Pattern matching across industry, program type, audience size",
      "Comparable reference surfacing for new proposals",
      "Edge case flagging when historical coverage is insufficient",
    ],
    tags: ["AI", "Python", "Ruby on Rails", "Data Analysis", "LLM"],
  },
  {
    number: "04",
    title: "Recruitment Intelligence Pipeline",
    subtitle: null,
    live: false,
    demo: null,
    description:
      "End-to-end AI recruitment system: JD upload → competency framework and rubric generation → resume ingestion → personalised interview question generation → async video interview (mobile app) → transcript scoring → candidate fit recommendation.",
    highlights: [
      "JD parsing → competency framework and rubric generation",
      "Resume ingestion with personalised interview question generation",
      "Async video interview via Flutter mobile app",
      "Transcript scoring and candidate fit recommendation",
    ],
    tags: ["Anthropic Claude", "RAG", "Python", "Flutter", "LLM", "Prompt Engineering", "Ruby on Rails"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <div className="section-label">
            <span>04</span>
            <span>AI Projects</span>
          </div>
        </motion.div>

        <div>
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group grid md:grid-cols-[100px_1fr] gap-6 md:gap-14 py-12 transition-all duration-500"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              {/* Large dim project number */}
              <div className="pt-0.5">
                <span
                  className="font-display font-black leading-none select-none transition-colors duration-500"
                  style={{
                    fontSize: "clamp(48px, 6vw, 80px)",
                    color: "#2a2a2a",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#3a3a3a")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#2a2a2a")}
                >
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <div>
                {/* Title row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3 mb-1.5">
                      <h3
                        className="font-display font-bold transition-colors duration-300"
                        style={{ fontSize: "clamp(18px, 2vw, 24px)", color: "var(--fg)" }}
                      >
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <span
                          className="text-[10px] tracking-[0.15em] uppercase"
                          style={{ color: "var(--accent)" }}
                        >
                          — {project.subtitle}
                        </span>
                      )}
                    </div>
                    {project.live && (
                      <span
                        className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm"
                        style={{ background: "var(--accent)", color: "#fff" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] tracking-[0.1em] uppercase flex items-center gap-1.5 transition-colors duration-300 shrink-0"
                      style={{ color: "var(--muted)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                    >
                      Try it Live <span className="text-sm">↗</span>
                    </a>
                  )}
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6 max-w-2xl"
                  style={{ color: "#aaaaaa" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-[0.06em] px-2.5 py-1 rounded-sm transition-colors duration-300"
                      style={{ border: "1px solid rgba(255,255,255,0.1)", color: "var(--muted)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

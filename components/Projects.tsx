const PROJECTS = [
  {
    number: "01",
    title: "AI Knowledge Base — Live Demo",
    emoji: "🤖",
    color: "#22d3ee",
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
    emoji: "🔍",
    color: "#a78bfa",
    description:
      "A semantic search system over 200+ enterprise knowledge documents using RAG on AWS. Built end-to-end with Amazon Titan Embedding v2 for ingestion and Anthropic Claude API for response synthesis. Features a multi-dimensional confidence scoring engine that ranks results across use case, industry, experience level, and engagement type — with 6-tier fallback logic to always return results.",
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
    emoji: "💰",
    color: "#a78bfa",
    description:
      "A data-driven pricing recommendation engine trained on 3 years of historical engagement data. Uses AI to identify patterns across past engagements — industry, program type, audience size, delivery model — and surfaces the most comparable reference points for new proposals. Flags edge cases where historical coverage is insufficient.",
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
    emoji: "🧠",
    color: "#34d399",
    description:
      "End-to-end AI recruitment system: JD upload → competency framework and rubric generation → resume ingestion → personalised interview question generation → async video interview (mobile app) → transcript scoring → candidate fit recommendation. Each layer — extraction, reasoning, scoring, recommendation — is independently testable.",
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
    <section id="projects" className="py-24 bg-[#0a0e18]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[#22d3ee] text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">AI Projects</h2>
          <div className="flex-1 h-px bg-[#1e2d3d]" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.number}
              className="group border border-[#1e2d3d] rounded-2xl p-6 bg-[#0f1621] hover:border-[#22d3ee]/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.emoji}</span>
                  <span className="font-mono text-xs text-[#64748b]">{project.number}</span>
                  {"demo" in project && (
                    <span className="px-2 py-0.5 text-xs font-mono bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/30 rounded-full">
                      LIVE
                    </span>
                  )}
                </div>
                {"demo" in project ? (
                  <a
                    href={(project as { demo: string }).demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-[#22d3ee]/30 flex items-center justify-center text-[#22d3ee] hover:bg-[#22d3ee]/10 transition-colors"
                  >
                    ↗
                  </a>
                ) : (
                  <div className="w-8 h-8 rounded-full border border-[#1e2d3d] flex items-center justify-center text-[#64748b] group-hover:text-[#22d3ee] group-hover:border-[#22d3ee]/30 transition-colors">
                    ↗
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

              <p className="text-sm text-[#94a3b8] leading-relaxed mb-5">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-xs text-[#64748b]">
                    <span style={{ color: project.color }} className="mt-1">›</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#07090f] border border-[#1e2d3d] text-[#64748b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {"demo" in project && (
                  <a
                    href={(project as { demo: string }).demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-[#22d3ee] text-[#07090f] font-semibold rounded-lg text-sm hover:bg-[#06b6d4] transition-colors"
                  >
                    Try it Live →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

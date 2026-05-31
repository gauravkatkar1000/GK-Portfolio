const PROJECTS = [
  {
    number: "01",
    title: "Intelligent Knowledge Retrieval Engine",
    emoji: "🔍",
    color: "#22d3ee",
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
    number: "02",
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
    number: "03",
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

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.number}
              className="group border border-[#1e2d3d] rounded-2xl p-6 bg-[#0f1621] hover:border-[#22d3ee]/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.emoji}</span>
                  <span className="font-mono text-xs text-[#64748b]">{project.number}</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#1e2d3d] flex items-center justify-center text-[#64748b] group-hover:text-[#22d3ee] group-hover:border-[#22d3ee]/30 transition-colors">
                  ↗
                </div>
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

              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#07090f] border border-[#1e2d3d] text-[#64748b]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

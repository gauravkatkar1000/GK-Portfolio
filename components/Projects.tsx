const PROJECTS = [
  {
    number: "01",
    title: "Document Intelligence System",
    emoji: "📄",
    color: "#22d3ee",
    description:
      "An end-to-end RAG pipeline for intelligent Q&A over large document collections, powered by Anthropic Claude API. Built semantic chunking, embedding, and retrieval strategies to maximise answer accuracy and minimise hallucinations.",
    highlights: [
      "End-to-end RAG pipeline using Anthropic Claude API",
      "Vector database integration for document storage and retrieval",
      "Semantic chunking strategy for improved context relevance",
      "Hallucination mitigation through controlled retrieval",
    ],
    tags: ["Anthropic Claude", "RAG", "Vector DB", "Python", "Embeddings"],
  },
  {
    number: "02",
    title: "Multi-Agent Automation System",
    emoji: "🤝",
    color: "#a78bfa",
    description:
      "A multi-agent architecture where specialised AI agents collaborate to break down and execute complex, multi-step business workflows. Integrated agent memory, tool use, and orchestration logic to handle real-world edge cases reliably in production.",
    highlights: [
      "Specialised agents with distinct roles and capabilities",
      "Agent memory for stateful, context-aware execution",
      "Tool use integration for real-world action execution",
      "Orchestration layer for reliable edge case handling",
    ],
    tags: ["Multi-Agent", "Anthropic Claude", "Agent Memory", "Tool Use", "Python"],
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

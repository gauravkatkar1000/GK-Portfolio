const AI_BULLETS = [
  "Designed and implemented RAG pipelines integrating Anthropic Claude APIs to enable intelligent, document-aware AI responses within enterprise applications.",
  "Built multi-agent AI systems to automate complex workflows, reducing manual processing time significantly.",
  "Engineered vector database solutions (Pinecone, Chroma) for semantic search and context retrieval across large document sets.",
  "Applied advanced prompt engineering techniques to optimise LLM outputs for structured, domain-specific tasks.",
  "Evaluated trade-offs between RAG vs fine-tuning approaches for production AI deployments.",
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
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-[#94a3b8] leading-relaxed">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#22d3ee]/50 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-[#22d3ee] text-sm">03.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Experience</h2>
        <div className="flex-1 h-px bg-[#1e2d3d]" />
      </div>

      {/* Timeline item */}
      <div className="relative pl-6 border-l border-[#1e2d3d]">
        <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-[#22d3ee]" />

        <div className="mb-2">
          <h3 className="text-lg font-semibold text-white">
            Senior Flutter Developer{" "}
            <span className="text-[#22d3ee]">with AI Integration</span>
          </h3>
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <span className="text-sm text-[#94a3b8]">Jombay · Pune, India</span>
            <span className="w-1 h-1 rounded-full bg-[#1e2d3d]" />
            <span className="font-mono text-xs text-[#64748b]">Jul 2021 – Present</span>
            <span className="px-2 py-0.5 text-xs bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/20 rounded-full">
              4+ years
            </span>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* AI Work */}
          <div className="border border-[#1e2d3d] rounded-xl p-5 bg-[#0f1621]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-base">🤖</span>
              <h4 className="font-semibold text-sm text-[#22d3ee]">AI & LLM Work</h4>
            </div>
            <BulletList items={AI_BULLETS} />
          </div>

          {/* App Dev */}
          <div className="border border-[#1e2d3d] rounded-xl p-5 bg-[#0f1621]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-base">📱</span>
              <h4 className="font-semibold text-sm text-[#a78bfa]">Application Development</h4>
            </div>
            <BulletList items={DEV_BULLETS} />
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILL_GROUPS = [
  {
    title: "AI & LLM",
    icon: "🤖",
    color: "#22d3ee",
    skills: [
      "Anthropic Claude API",
      "LLM Application Development",
      "Prompt Engineering",
      "Multi-Agent Systems",
      "AI Workflow Design",
    ],
  },
  {
    title: "AI Architecture",
    icon: "🏗️",
    color: "#a78bfa",
    skills: [
      "RAG Pipelines",
      "Vector Databases",
      "Pinecone & Chroma",
      "Semantic Search",
      "Embedding Systems",
    ],
  },
  {
    title: "Development",
    icon: "⚙️",
    color: "#34d399",
    skills: [
      "Python",
      "Flutter / Dart",
      "REST APIs",
      "Firebase",
      "CI/CD Pipelines",
      "Clean Architecture",
    ],
  },
  {
    title: "Strengths",
    icon: "✦",
    color: "#f59e0b",
    skills: [
      "Problem-solving",
      "Solution Design",
      "Scalable Architecture",
      "Cross-platform Dev",
      "Real-time Systems",
      "SOLID Principles",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0e18]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[#22d3ee] text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Core Skills</h2>
          <div className="flex-1 h-px bg-[#1e2d3d]" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="border border-[#1e2d3d] rounded-xl p-6 bg-[#0f1621] hover:border-[#22d3ee]/30 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3
                  className="font-semibold text-sm"
                  style={{ color: group.color }}
                >
                  {group.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                    <span className="w-1 h-1 rounded-full bg-[#1e2d3d] group-hover:bg-[#22d3ee]/40 transition-colors" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech badges row */}
        <div className="mt-10 flex flex-wrap gap-2">
          {[
            "Anthropic Claude",
            "Python",
            "Flutter",
            "Dart",
            "Pinecone",
            "Chroma",
            "Firebase",
            "REST API",
            "Zoom SDK",
            "JWT",
            "Realm DB",
            "CI/CD",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono border border-[#1e2d3d] text-[#64748b] rounded-full hover:border-[#22d3ee]/40 hover:text-[#94a3b8] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

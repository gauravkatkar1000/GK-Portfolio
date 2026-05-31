export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-[#22d3ee] text-sm">01.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white">About Me</h2>
        <div className="flex-1 h-px bg-[#1e2d3d]" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4 text-[#94a3b8] leading-relaxed">
          <p>
            I approach AI development the way I approach all engineering —{" "}
            <span className="text-white">starting from the problem, not the technology</span>.
            Over the last year I have designed and shipped three production AI systems end-to-end:
            a semantic knowledge retrieval engine, an AI-powered pricing intelligence system, and
            a full recruitment intelligence pipeline with async video interviews and AI candidate
            scoring. I bring both the technical depth and the solution-design mindset that AI
            roles demand.
          </p>
        </div>

        <div className="space-y-3">
          {[
            { icon: "📍", label: "Location", value: "Pune, India" },
            { icon: "🎓", label: "Education", value: "B.E. Computer Science, JSCOE Pune (2021)" },
            { icon: "🏢", label: "Current Role", value: "Senior Full Stack & AI Developer @ Jombay" },
            { icon: "📧", label: "Email", value: "gauravkatkar1000@gmail.com" },
            { icon: "💼", label: "Open to", value: "AI Solutions Developer / GenAI Engineer roles" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 border border-[#1e2d3d] rounded-lg px-4 py-3 bg-[#0f1621]/40"
            >
              <span className="text-base mt-0.5">{item.icon}</span>
              <div>
                <div className="text-xs font-mono text-[#22d3ee] mb-0.5">{item.label}</div>
                <div className="text-sm text-[#e2e8f0]">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

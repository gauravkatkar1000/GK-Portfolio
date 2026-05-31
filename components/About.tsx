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
            With hands-on experience building production AI systems using Anthropic APIs, RAG,
            and multi-agent architectures, I bring both the technical depth and the
            solution-design mindset that AI roles demand.
          </p>
          <p>
            Currently working as a{" "}
            <span className="text-[#22d3ee]">Senior Flutter Developer with AI Integration</span>{" "}
            at Jombay, where I design and implement intelligent, document-aware AI responses
            within enterprise applications and automate complex workflows using multi-agent
            systems.
          </p>
          <p>
            I am particularly strong at identifying where AI adds real value versus where simpler
            solutions suffice — and that judgement is what separates engineers who ship from
            those who over-engineer.
          </p>
        </div>

        <div className="space-y-3">
          {[
            { icon: "📍", label: "Location", value: "Pune, India" },
            { icon: "🎓", label: "Education", value: "B.E. Computer Science, JSCOE Pune (2021)" },
            { icon: "🏢", label: "Current Role", value: "Senior Flutter Developer @ Jombay" },
            { icon: "📧", label: "Email", value: "gauravkatkar1000@gmail.com" },
            { icon: "💼", label: "Open to", value: "AI Solutions Developer roles" },
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

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-[#22d3ee] text-sm">05.</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Get In Touch</h2>
        <div className="flex-1 h-px bg-[#1e2d3d]" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-[#94a3b8] leading-relaxed mb-6">
            I&apos;m currently open to{" "}
            <span className="text-white">AI Solutions Developer</span>{" "}roles where I can
            architect and build intelligent systems from scratch. If you have an interesting
            problem that AI could solve, I&apos;d love to talk.
          </p>
          <a
            href="mailto:gauravkatkar1000@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#22d3ee] text-[#07090f] font-semibold rounded hover:bg-[#06b6d4] transition-colors duration-200 text-sm"
          >
            Say Hello →
          </a>
        </div>

        <div className="space-y-4">
          {[
            {
              icon: "✉️",
              label: "Email",
              value: "gauravkatkar1000@gmail.com",
              href: "mailto:gauravkatkar1000@gmail.com",
            },
            {
              icon: "💼",
              label: "LinkedIn",
              value: "linkedin.com/in/gauravkatkar1000",
              href: "https://www.linkedin.com/in/gauravkatkar1000",
            },
            {
              icon: "📍",
              label: "Location",
              value: "Pune, India",
              href: null,
            },
            {
              icon: "📱",
              label: "Phone",
              value: "+91 9604499373",
              href: "tel:+919604499373",
            },
            {
              icon: "🐙",
              label: "GitHub",
              value: "github.com/gauravkatkar1000",
              href: "https://github.com/gauravkatkar1000",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 border border-[#1e2d3d] rounded-xl px-5 py-4 bg-[#0f1621] hover:border-[#22d3ee]/30 transition-colors group"
            >
              <span className="text-xl">{item.icon}</span>
              <div className="flex-1">
                <div className="text-xs font-mono text-[#64748b] mb-0.5">{item.label}</div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm text-[#e2e8f0] group-hover:text-[#22d3ee] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm text-[#e2e8f0]">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

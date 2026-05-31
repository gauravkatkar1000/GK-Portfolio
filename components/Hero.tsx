"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "AI Solutions Developer",
  "GenAI Engineer",
  "LLM Specialist",
  "Full Stack AI Developer",
  "Multi-Agent Systems Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#22d3ee]/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <p className="font-mono text-[#22d3ee] text-sm tracking-widest mb-6 fade-up">
          &gt; Hello, world — I&apos;m
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 fade-up" style={{ animationDelay: "0.1s" }}>
          Gaurav Katkar
        </h1>

        <div
          className="text-xl md:text-3xl font-mono text-[#22d3ee] mb-6 h-10 flex items-center fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {displayed}
          <span className="ml-0.5 w-0.5 h-7 bg-[#22d3ee] inline-block cursor-blink" />
        </div>

        <p
          className="text-[#94a3b8] text-lg max-w-2xl leading-relaxed mb-10 fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Full Stack Developer with{" "}
          <span className="text-white">4+ years of experience</span>, specialising in
          production-grade LLM solutions using{" "}
          <span className="text-[#22d3ee]">Anthropic Claude APIs</span>, RAG pipelines,
          vector databases, and multi-agent systems.
        </p>

        <div className="flex flex-wrap gap-4 fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="px-6 py-3 bg-[#22d3ee] text-[#07090f] font-semibold rounded hover:bg-[#06b6d4] transition-colors duration-200 text-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#1e2d3d] text-[#e2e8f0] rounded hover:border-[#22d3ee] hover:text-[#22d3ee] transition-colors duration-200 text-sm"
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/gauravkatkar1000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#1e2d3d] text-[#94a3b8] rounded hover:border-[#1e2d3d] hover:text-white transition-colors duration-200 text-sm"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Quick stats */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { value: "4+", label: "Years Experience" },
            { value: "3", label: "Production AI Systems" },
            { value: "200+", label: "Documents Indexed" },
            { value: "8+", label: "Assessment Modules" },
          ].map((stat) => (
            <div key={stat.label} className="border border-[#1e2d3d] rounded-lg p-4 bg-[#0f1621]/50">
              <div className="text-2xl font-bold text-[#22d3ee]">{stat.value}</div>
              <div className="text-xs text-[#64748b] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#64748b]">
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#64748b] to-transparent" />
      </div>
    </section>
  );
}

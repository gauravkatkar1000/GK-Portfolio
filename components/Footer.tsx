"use client";

export default function Footer() {
  return (
    <footer className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-[11px] tracking-[0.1em]"
          style={{ color: "var(--muted)" }}
          suppressHydrationWarning
        >
          © {new Date().getFullYear()} Gaurav Katkar
        </p>
        <div className="flex items-center gap-8">
          {[
            { label: "Email",    href: "mailto:gauravkatkar1000@gmail.com" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/gauravkatkar1000" },
            { label: "GitHub",   href: "https://github.com/gauravkatkar1000" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.15em] uppercase transition-colors duration-300"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

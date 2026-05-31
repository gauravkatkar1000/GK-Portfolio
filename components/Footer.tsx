export default function Footer() {
  return (
    <footer className="border-t border-[#1e2d3d] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[#64748b]" suppressHydrationWarning>
          © {new Date().getFullYear()} Gaurav Katkar. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:gauravkatkar1000@gmail.com"
            className="text-xs text-[#64748b] hover:text-[#22d3ee] transition-colors font-mono"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/gauravkatkar1000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#64748b] hover:text-[#22d3ee] transition-colors font-mono"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

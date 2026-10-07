export function TrustStrip() {
  const technologies = [
    { name: "Next.js 16", role: "App Router & Turbopack" },
    { name: "TypeScript", role: "Strict Type Safety" },
    { name: "Python / PyTorch", role: "Model Fine-Tuning" },
    { name: "Rust", role: "High-Speed Tooling" },
    { name: "PostgreSQL", role: "pgvector Indexing" },
    { name: "Docker", role: "Isolated Containers" },
    { name: "Cohere API", role: "Command-R & Embed" },
    { name: "Tailwind v4", role: "Design Systems" },
  ];

  return (
    <section className="bg-white py-14 sm:py-16 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-[#75758a] mb-8">
          FOUNDATIONAL PLATFORMS &amp; TECHNICAL ECOSYSTEM
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center justify-center">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-3 text-center rounded-[8px] hover:bg-[#eeece7]/50 transition-colors group cursor-default"
            >
              <div className="font-display font-medium text-sm text-[#17171c] group-hover:text-black">
                {tech.name}
              </div>
              <div className="font-mono text-[10px] text-[#93939f] mt-1 group-hover:text-[#616161]">
                {tech.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

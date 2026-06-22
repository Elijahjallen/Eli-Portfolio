const timeline = [
  {
    year: "2007",
    title: "Technology & Customer Operations",
    detail: "Built a strong foundation in customer experience, technical support, and operational problem solving.",
  },
  {
    year: "2020",
    title: "Business Ownership",
    detail: "Launched Allen Group NW and expanded experience in business systems, client service, and operations.",
  },
  {
    year: "2023",
    title: "Systems Experience Manager",
    detail: "Supported cybersecurity, fraud, product ownership, release testing, backlog management, and cross-functional delivery.",
  },
  {
    year: "2026",
    title: "Software Engineering Portfolio",
    detail: "Building GuardianOps, analytics dashboards, automation workflows, and professional web projects.",
  },
];

function CareerTimeline() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="mb-2 text-cyan-400">CAREER JOURNEY</p>
      <h2 className="mb-12 text-4xl font-bold">Operations to Software Engineering</h2>

      <div className="space-y-6 border-l border-cyan-400/30 pl-8">
        {timeline.map((item) => (
          <div key={item.year} className="relative rounded-2xl border border-white/10 bg-slate-900/80 p-6">
            <div className="absolute -left-[42px] top-6 h-5 w-5 rounded-full bg-cyan-400" />

            <p className="text-sm font-bold text-cyan-400">{item.year}</p>
            <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
            <p className="mt-3 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CareerTimeline;
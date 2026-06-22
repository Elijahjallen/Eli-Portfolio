function CareerHighlights() {
  const highlights = [
    "19+ years of technology and operations leadership",
    "35% backlog reduction experience",
    "20% sprint throughput improvement",
    "Cybersecurity and fraud systems support",
    "Product ownership and release testing experience",
    "Experience with Jira, ServiceNow, SQL, Power BI, React, and AI automation",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-8">
        <p className="mb-2 text-cyan-400">CAREER HIGHLIGHTS</p>

        <h2 className="mb-8 text-4xl font-bold">
          Business impact through systems, process, and technology.
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerHighlights;
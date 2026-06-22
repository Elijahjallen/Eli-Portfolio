const impactItems = [
  {
    value: "19+",
    label: "Years in Technology & Operations",
  },
  {
    value: "35%",
    label: "Backlog Reduction Experience",
  },
  {
    value: "20%",
    label: "Sprint Throughput Improvement",
  },
  {
    value: "4+",
    label: "Web & Software Projects Built",
  },
];

function Impact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
        <p className="mb-2 text-cyan-400">FEATURED IMPACT</p>

        <h2 className="mb-8 text-3xl font-bold">
          Real operations experience applied to software solutions.
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {impactItems.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-bold text-cyan-400">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
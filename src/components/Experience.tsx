function Experience() {
  const experience = [
    {
      title: "Assistant Manager – Customer Experience Center",
      company: "T-Mobile",
      description:
        "Lead operational performance, coaching, customer experience initiatives, and process improvement efforts across customer support operations.",
    },
    {
      title: "Systems Experience Manager",
      company: "T-Mobile Security & Stability",
      description:
        "Supported cybersecurity and fraud initiatives, release testing, backlog management, defect prioritization, product ownership activities, and cross-functional delivery.",
    },
    {
      title: "Process & Project Analyst",
      company: "T-Mobile",
      description:
        "Analyzed business processes, identified operational improvements, and supported project delivery through data-driven decision making.",
    },
  ];

  return (
    <section
        id="experience"
        className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="mb-2 text-cyan-400">PROFESSIONAL EXPERIENCE</p>

      <h2 className="mb-12 text-4xl font-bold">
        Technology & Operations Leadership
      </h2>

      <div className="space-y-6">
        {experience.map((job) => (
          <div
            key={job.title}
            className="rounded-2xl border border-white/10 bg-slate-900/80 p-6"
          >
            <h3 className="text-2xl font-bold">{job.title}</h3>

            <p className="mt-2 text-cyan-400">{job.company}</p>

            <p className="mt-4 text-slate-300 leading-7">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
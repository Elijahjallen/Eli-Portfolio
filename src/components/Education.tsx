function Education() {
  const education = [
    {
      degree: "Bachelor of Science",
      field: "Accounting",
      status: "Completed",
    },
    {
      degree: "Master of Business Administration",
      field: "Project Management",
      status: "Completed",
    },
    {
      degree: "Bachelor of Science",
      field: "Computer Science – Software Engineering & Cybersecurity",
      status: "Completed",
    },
    {
      degree: "Master of Science",
      field: "Computer Science – Software Engineering",
      status: "In Progress",
    },
  ];

  return (
    <section
        id="education"
        className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="mb-2 text-cyan-400">EDUCATION</p>

      <h2 className="mb-12 text-4xl font-bold">
        Academic Foundation
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.field}
            className="rounded-2xl border border-white/10 bg-slate-900/80 p-6"
          >
            <h3 className="text-xl font-bold">{item.degree}</h3>

            <p className="mt-2 text-slate-300">{item.field}</p>

            <span className="mt-4 inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
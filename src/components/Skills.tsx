const skillGroups = [
  {
    title: "Front-End Development",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Back-End & Data",
    skills: ["PostgreSQL", "SQL", "REST APIs", "Prisma", "Express"],
  },
  {
    title: "Analytics & Reporting",
    skills: ["Power BI", "Dashboards", "KPI Reporting", "Data Visualization"],
  },
  {
    title: "Automation & Operations",
    skills: ["AI Automation", "n8n", "Webhooks", "Jira", "ServiceNow"],
  },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <p className="mb-2 text-cyan-400">SKILLS</p>
      <h2 className="mb-12 text-4xl font-bold">What I’m Building With</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-slate-900/80 p-6"
          >
            <h3 className="mb-5 text-xl font-bold">{group.title}</h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
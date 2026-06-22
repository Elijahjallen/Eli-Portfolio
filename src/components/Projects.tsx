import guardianOpsDashboard from "../assets/projects/guardianops-dashboard.jpeg";
import guardianOpsCases from "../assets/projects/guardianops-cases.jpeg";
import rdasHome from "../assets/projects/rdas-home.jpeg";
import allenInkHome from "../assets/projects/allen-ink-home.jpeg";

const projects = [
  {
    number: "01",
    title: "GuardianOps Dashboard",
    description:
      "A case management and operational workflow platform built for youth transportation services including intake, scheduling, staff assignment, reporting, and workflow automation.",
    image: guardianOpsDashboard,
    tech: ["React", "TypeScript", "PostgreSQL", "REST APIs"],
    live: "/guardianops",
    github: "#",
  },
  {
    number: "02",
    title: "GuardianOps Case Management",
    description:
      "Case tracking, workflow management, assignment tracking, notifications, and operational visibility for transportation teams.",
    image: guardianOpsCases,
    tech: ["React", "Case Management", "Workflow Design"],
    live: "/guardianops",
    github: "#",
  },
  {
    number: "03",
    title: "RDAS.net",
    description:
      "Business website focused on responsive design, service presentation, user experience, and professional branding.",
    image: rdasHome,
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    live: "rdas",
    github: "#",
  },
  {
    number: "04",
    title: "Allen Ink",
    description:
      "Web design and branding project focused on creating a professional online presence and customer engagement experience.",
    image: allenInkHome,
    tech: ["HTML", "CSS", "Branding", "UX/UI"],
    live: "allen-ink",
    github: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <p className="mb-2 text-cyan-400">FEATURED WORK</p>
      <h2 className="mb-16 text-4xl font-bold">Projects</h2>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`grid items-center gap-10 md:grid-cols-2 ${
              index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div>
              <p className="mb-3 text-6xl font-bold text-white/10">
                {project.number}
              </p>

              <h3 className="mb-4 text-3xl font-bold">{project.title}</h3>

              <p className="mb-6 leading-8 text-slate-300">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950"
                >
                  Live Site
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="rounded-full border border-white/20 px-5 py-2 font-semibold text-white"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
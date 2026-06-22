import { Link } from "react-router-dom";
import guardianOpsDashboard from "../assets/projects/guardianops-dashboard.jpeg";

function FeaturedProject() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-8">
        <p className="mb-2 text-cyan-400">FLAGSHIP PROJECT</p>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl font-bold">GuardianOps</h2>

            <p className="mb-6 leading-8 text-slate-300">
              A full-stack operational workflow platform designed for youth
              transportation services. GuardianOps demonstrates case management,
              intake workflows, staff assignment, quote tracking, scheduling,
              reporting, and automation-focused design.
            </p>

            <div className="mb-6 flex flex-wrap gap-3">
              {["React", "TypeScript", "PostgreSQL", "REST APIs", "Power BI"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <Link
                to="/guardianops"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
            >
              View Project Details
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={guardianOpsDashboard}
              alt="GuardianOps dashboard"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
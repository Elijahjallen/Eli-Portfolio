import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import guardianOpsDashboard from "../assets/projects/guardianops-dashboard.jpeg";
import guardianOpsCases from "../assets/projects/guardianops-cases.jpeg";

function GuardianOps() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Link
            to="/"
            className="mb-10 inline-block text-sm text-slate-400 hover:text-cyan-400"
        >
            ← Back to Home
        </Link>

        <p className="mb-3 text-cyan-400">FLAGSHIP PROJECT</p>

        <h1 className="mb-6 text-5xl font-bold">GuardianOps</h1>

        <p className="mb-10 max-w-3xl leading-8 text-slate-300">
          GuardianOps is a case management and workflow platform built to
          streamline intake, scheduling, staff assignment, quote tracking,
          reporting, and automation for transport operations.
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
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

        <div className="space-y-10">
          <img
            src={guardianOpsDashboard}
            alt="GuardianOps dashboard"
            className="rounded-2xl border border-white/10"
          />

          <img
            src={guardianOpsCases}
            alt="GuardianOps case management"
            className="rounded-2xl border border-white/10"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default GuardianOps;
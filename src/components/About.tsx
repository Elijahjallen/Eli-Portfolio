function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-2 text-cyan-400">ABOUT ME</p>

          <h2 className="mb-6 text-4xl font-bold">
            Bridging Operations, Business, and Technology
          </h2>

          <p className="mb-4 text-slate-300">
            I bring nearly 20 years of operational leadership experience at
            T-Mobile combined with a strong academic foundation in accounting,
            project management, computer science, software engineering, and
            cybersecurity.
          </p>

          <p className="mb-4 text-slate-300">
            My focus is building software, automation, and data solutions that
            solve real business problems through modern web development,
            AI-assisted workflows, analytics, and process optimization.
          </p>

          <p className="text-slate-300">
            Current interests include AI automation, network operations,
            full-stack development, Power BI, SaaS application design, and
            software engineering leadership.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-slate-900 p-6">
            <h3 className="mb-2 font-semibold">Experience</h3>
            <p className="text-3xl font-bold text-cyan-400">19+</p>
            <p className="text-slate-400">Years</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900 p-6">
            <h3 className="mb-2 font-semibold">Projects</h3>
            <p className="text-3xl font-bold text-cyan-400">10+</p>
            <p className="text-slate-400">Built</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900 p-6">
            <h3 className="mb-2 font-semibold">Degrees</h3>
            <p className="text-3xl font-bold text-cyan-400">3 Earned</p>
            <p className="text-slate-400">
              Accounting • MBA • Computer Science
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900 p-6">
            <h3 className="mb-2 font-semibold">Current</h3>
            <p className="text-3xl font-bold text-cyan-400">MSCS</p>
            <p className="text-slate-400">
              Software Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-10">
        <p className="mb-2 text-cyan-400">CONTACT</p>

        <h2 className="mb-6 text-4xl font-bold">
          Let's Connect
        </h2>

        <p className="mb-8 max-w-2xl text-slate-300">
          I'm passionate about software engineering, AI automation,
          network operations, analytics, and building solutions that
          improve operational efficiency.
        </p>

       <div className="space-y-4">
        <a
            href="mailto:elijahjallen@gmail.com"
            className="block text-cyan-400 hover:text-cyan-300"
        >
            📧 elijahjallen@gmail.com
        </a>

        <a
            href="https://www.linkedin.com/in/eli-allen--"
            target="_blank"
            rel="noreferrer"
            className="block text-cyan-400 hover:text-cyan-300"
        >
            💼 LinkedIn: linkedin.com/in/eli-allen--
        </a>

        <a
            href="https://github.com/Elijahjallen"
            target="_blank"
            rel="noreferrer"
            className="block text-cyan-400 hover:text-cyan-300"
        >
            💻 GitHub: github.com/Elijahjallen
        </a>
        </div>

        <div className="mt-8">
          <a
            href="/resume.pdf"
            download
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
            >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
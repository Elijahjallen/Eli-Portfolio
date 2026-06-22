import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-10">
        <p className="mb-2 text-cyan-400">CONTACT</p>

        <h2 className="mb-6 text-4xl font-bold">Let's Connect</h2>

        <p className="mb-8 max-w-2xl text-slate-300">
          I'm passionate about software engineering, AI automation, network
          operations, analytics, and building solutions that improve operational
          efficiency.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="mailto:elijahjallen@gmail.com?subject=Portfolio Inquiry"
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-cyan-400 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            📧 Email
            <span className="mt-2 block text-sm text-slate-300">
              elijahjallen@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/eli-allen--"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-cyan-400 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            💼 LinkedIn
            <span className="mt-2 block text-sm text-slate-300">
              linkedin.com/in/eli-allen--
            </span>
          </a>

          <a
            href="https://github.com/Elijahjallen"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-cyan-400 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            💻 GitHub
            <span className="mt-2 block text-sm text-slate-300">
              github.com/Elijahjallen
            </span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href="/resume.pdf"
            download
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
          >
            Download Resume
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/eli-allen--"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-2xl text-slate-400 transition hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Elijahjallen"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-2xl text-slate-400 transition hover:text-cyan-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://x.com/YOUR_X_HANDLE"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="text-2xl text-slate-400 transition hover:text-cyan-400"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
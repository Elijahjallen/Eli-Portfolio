import heroImage from "../assets/hero.jpg";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-[1.15fr_0.85fr]">
      <div>
        <p className="mb-4 inline-block rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300">
          Software Engineer • AI Automation Builder • Operations Leader
        </p>

<p className="mb-6 text-sm text-slate-400">
  BS Accounting • MBA Project Management • BS Computer Science • MS Computer Science Candidate
</p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
          Software Engineer, AI Automation Builder, and Operations Leader
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          With nearly 20 years of technology and operations leadership at T-Mobile,
          I combine business expertise, project management, software engineering,
          cybersecurity, analytics, and AI automation to build solutions that solve
          real-world business challenges.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950">
            View Projects
          </a>

          <a href="#contact" className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white">
            Contact Me
          </a>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-5">
  <a
    href="https://www.linkedin.com/in/eli-allen--"
    target="_blank"
    rel="noreferrer"
    className="text-3xl text-slate-400 transition hover:text-cyan-400"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/Elijahjallen"
    target="_blank"
    rel="noreferrer"
    className="text-3xl text-slate-400 transition hover:text-cyan-400"
  >
    <FaGithub />
  </a>

  <a
    href="https://x.com/Eli_Allen__"
    target="_blank"
    rel="noreferrer"
    className="text-3xl text-slate-400 transition hover:text-cyan-400"
  >
    <FaXTwitter />
  </a>
</div>

      <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-3 shadow-2xl">
        <img
          src={heroImage}
          alt="Eli Allen"
          className="h-[460px] w-full rounded-2xl object-cover object-top"
        />
      </div>
    </section>
  );
}

export default Hero;
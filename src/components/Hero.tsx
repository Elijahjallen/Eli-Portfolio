import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-[1.15fr_0.85fr]">
      <div>
        <p className="mb-5 inline-block rounded-full border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300">
          Software Engineer • AI Automation Builder • Operations Leader
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
          Building software, automation, and analytics solutions that improve{" "}
          <span className="text-cyan-400">operational efficiency.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          With 19+ years in technology and operations at T-Mobile, I combine
          real-world leadership with modern development skills to build tools
          that solve business problems.
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
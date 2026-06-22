function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold">
            Eli<span className="text-cyan-400">Allen</span>
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Software Engineering • AI Automation • Operations Leadership
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 Eli Allen
        </p>
      </div>
    </footer>
  );
}

export default Footer;
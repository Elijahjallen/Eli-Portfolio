function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050816]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="text-lg font-bold tracking-tight">
          Eli<span className="text-cyan-400">Allen</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#education" className="hover:text-cyan-400 transition">
            Education
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
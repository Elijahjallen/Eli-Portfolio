import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import allenInkHome from "../assets/projects/allen-ink-home.jpeg";

function AllenInk() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Link to="/" className="mb-10 inline-block text-sm text-slate-400 hover:text-cyan-400">
          ← Back to Home
        </Link>

        <p className="mb-3 text-cyan-400">WEB DESIGN PROJECT</p>
        <h1 className="mb-6 text-5xl font-bold">Allen Ink</h1>

        <p className="mb-10 max-w-3xl leading-8 text-slate-300">
          A branding and web design project focused on customer-facing design,
          visual presentation, responsive layout, and business development.
        </p>

        <img src={allenInkHome} alt="Allen Ink website" className="rounded-2xl border border-white/10" />
      </section>

      <Footer />
    </main>
  );
}

export default AllenInk;
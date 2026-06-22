import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import FeaturedProject from "../components/FeaturedProject";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import CareerTimeline from "../components/CareerTimeline";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <Impact />
      <FeaturedProject />
      <About />
      <Projects />
      <Skills />
      <CareerTimeline />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
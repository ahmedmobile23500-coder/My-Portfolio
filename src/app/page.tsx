import Navbar from "./components/Navbar/page";
import Hero from "./components/Hero/page";
import About from "./components/About/page";
import Skills from "./components/Skills/page";
import Projects from "./components/Projects/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </main>
    </>
  );
}
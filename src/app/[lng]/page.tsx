import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <main>
      <Navbar />
      <section id="about" className="section">
        <About />
      </section>
      <section id="projects" className="section">
        <Projects lng={lng} />
      </section>
      <section id="skills" className="section">
        <Skills />
      </section>
      <section id="contact" className="section">
        <Contact lng={lng} />
      </section>
    </main>
  );
}

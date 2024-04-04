import "@fortawesome/fontawesome-free/css/all.min.css";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <main>
      <Navbar />
      <section id="about" className="section"></section>
      <section id="projects" className="section">
        <Projects lng={lng}/>
      </section>
      <section id="resume" className="section">
        <Resume lng={lng} />
      </section>
      <section id="contact" className="section">
        <Contact lng={lng} />
      </section>
    </main>
  );
}

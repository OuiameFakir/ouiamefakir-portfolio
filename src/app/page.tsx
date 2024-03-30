import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin as fabLinkedin,
  faGithub as fabGithub,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home"></section>
      <section id="about"></section>
      <section id="projects"></section>
      <section id="resume"></section>
      <section id="contact">
        <h3 className="fw-bold text-center">GET IN TOUCH !</h3>
        <div className="contact">
          <p className="contact-text">
            <span className="fw-bold text-danger fs-5">
              Thank you for visiting my portfolio &#128522;!
            </span>
            <br />
            I'm excited to connect with you. Whether you have a question about
            my work, want to collaborate on a project, or just want to say hello
            &#128075;, I'd love to hear from you. Feel free to reach out. I'll
            do my best to get back to you as soon as possible. Looking forward
            to hearing from you! I'm always open to new opportunities and
            excited to connect with fellow enthusiasts in the field.
          </p>

          <div className="contact-info ">
            <a href="tel:+212699099123">
              <FontAwesomeIcon icon={faPhone} className="icon text-danger" />{" "}
              +212 699099123
            </a>
            <a href="mailto:ouiamefakir@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="icon text-warning"
              />
              ouiamefakir@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/ouiame-el-fakir/">
              <FontAwesomeIcon
                icon={fabLinkedin}
                className="icon text-danger"
              />
              linkedin.com/in/ouiame-el-fakir
            </a>
            <a href=" https://github.com/OuiameFakir">
              <FontAwesomeIcon icon={fabGithub} className="icon text-warning" />{" "}
              github.com/OuiameFakir
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin as fabLinkedin,
  faGithub as fabGithub,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { PrimaryButton } from "@/components/Button/Button";
import { useTranslation } from "../i18n/client";
import {
  ResumeIframeContainer,
  ResumeDownloadContainer,
  ResumeContainer,
} from "./portfolio.style";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  const pdfPath = `/${lng}/Resume Ouiame EL FAKIR.pdf`;

  return (
    <main>
      <Navbar />
      <section id="about"></section>
      <section id="projects"></section>
      <section id="resume">
        <ResumeContainer>
          <ResumeDownloadContainer>
            <h2>My Resume</h2>
            <a
              href={pdfPath}
              download="your_cv.pdf"
              className="text-decoration-none"
            >
              <PrimaryButton title={"Download resume in english"} />
            </a>
            <a
              href={pdfPath}
              download="your_cv.pdf"
              className="text-decoration-none"
            >
              <PrimaryButton title={"Download resume in english"} />
            </a>
          </ResumeDownloadContainer>
          <ResumeIframeContainer>
            <iframe src={pdfPath} width="100%" height="400px"></iframe>
          </ResumeIframeContainer>
        </ResumeContainer>
      </section>
      <section id="contact" className="section">
        <h3 className="fw-bold text-center">CONTACT ME</h3>
        <div className="contact">
          <p className="contact-text">
            <span className="fw-bold text-danger fs-5">
              Thank you for visiting my portfolio &#128522;!
            </span>
            <br />
            I&apos;m excited to connect with you. Whether you have a question
            about my work, want to collaborate on a project, or just want to say
            hello &#128075;, I&apos;d love to hear from you. Feel free to reach
            out. I&apos;ll do my best to get back to you as soon as possible.
            <br />
            Looking forward to hearing from you! I&apos;m always open to new
            opportunities and excited to connect with fellow enthusiasts in the
            field.
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

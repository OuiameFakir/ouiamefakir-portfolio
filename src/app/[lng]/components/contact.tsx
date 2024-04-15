import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin as fabLinkedin,
  faGithub as fabGithub,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  ContactContainer,
  ContactInfo,
  ContactLink,
  ContactText,
  IconContainer,
  Subtitle,
  Title,
} from "../portfolio.style";
export default function Contact({ lng }: { lng: string }) {
  return (
    <div>
      <Title>Contact Me</Title>
      <Subtitle>Get In Touch</Subtitle>
      <ContactContainer>
        <ContactText>
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
        </ContactText>
        <ContactInfo>
          <ContactLink href="tel:+212699099123">
            <IconContainer>
              <FontAwesomeIcon icon={faPhone} className="text-danger" />
            </IconContainer>{" "}
            +212 699099123
          </ContactLink>
          <ContactLink href="mailto:ouiamefakir@gmail.com">
            <IconContainer>
              <FontAwesomeIcon icon={faEnvelope} className="text-warning" />
            </IconContainer>
            ouiamefakir@gmail.com
          </ContactLink>
          <ContactLink href="https://www.linkedin.com/in/ouiame-el-fakir/">
            <IconContainer>
              <FontAwesomeIcon icon={fabLinkedin} className="text-danger" />
            </IconContainer>
            linkedin.com/in/ouiame-el-fakir
          </ContactLink>
          <ContactLink href=" https://github.com/OuiameFakir">
            <IconContainer>
              <FontAwesomeIcon icon={fabGithub} className="text-warning" />
            </IconContainer>{" "}
            github.com/OuiameFakir
          </ContactLink>
        </ContactInfo>
      </ContactContainer>
    </div>
  );
}

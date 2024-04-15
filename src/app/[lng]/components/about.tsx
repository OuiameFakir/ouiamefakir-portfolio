"use client";
import React from "react";
import {
  AboutDesc,
  Subtitle,
  Name,
  ResumeDownloadContainer,
  Title,
} from "../portfolio.style";
import { PrimaryButton } from "@/components/button";

export default function About() {
  const pdf_en = `/en/Resume.pdf`;
  const pdf_fr = `/fr/CV.pdf`;
  return (
    <div>
      <Title>About Me</Title>
      <Subtitle>Hello I am</Subtitle>
      <Name>
        <span className="text-danger">Ouiame EL FAKIR</span>
      </Name>
      <AboutDesc>
        An enthusiastic Front-End Developer dedicated to crafting captivating
        and intuitive web solutions. I have sharpened my expertise in NextJS,
        ReactJS, TypeScript, Bootstrap, SaaS, CSS, and HTML.
      </AboutDesc>
      {/* Resume */}
      <ResumeDownloadContainer>
        <a
          href={pdf_en}
          download="Ouiame EL FAKIR RESUME.pdf"
          className="text-decoration-none"
        >
          <PrimaryButton title={"My resume in english"} />
        </a>
        <a
          href={pdf_fr}
          download="Ouiame EL FAKIR CV.pdf"
          className="text-decoration-none"
        >
          <PrimaryButton title={"My resume in french"} />
        </a>
      </ResumeDownloadContainer>
    </div>
  );
}

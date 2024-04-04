import React from "react";
import {
  ResumeContainer,
  ResumeDownloadContainer,
  ResumeIframeContainer,
  Title,
} from "../portfolio.style";
import { PrimaryButton } from "@/components/button";

export default function Resume({ lng }: { lng: string }) {
  const pdfPath = `/${lng}/Resume Ouiame EL FAKIR.pdf`;

  return (
    <ResumeContainer>
      <Title>MY RESUME</Title>
      <ResumeDownloadContainer>
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
        <iframe
          src={pdfPath}
          width="100%"
          height="400px"
          style={{ border: "3px solid gray" }}
        ></iframe>
      </ResumeIframeContainer>
    </ResumeContainer>
  );
}

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
import { useTranslation } from "../../i18n/client";

export default function About({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "about");
  const pdf_en = `/en/Resume.pdf`;
  const pdf_fr = `/fr/CV.pdf`;
  return (
    <div>
      <div style={{ backgroundColor: "white" }}>
        <Title>{t("about_me")}</Title>
        <Subtitle>{t("hello")}</Subtitle>
        <Name>
          <span className="text-warning">Ouiame EL FAKIR</span>
        </Name>
        <AboutDesc>{t("about_me_description")}</AboutDesc>
      </div>
      {/* Resume */}
      <ResumeDownloadContainer>
        <a
          href={pdf_en}
          download="Ouiame EL FAKIR RESUME.pdf"
          className="text-decoration-none"
        >
          <PrimaryButton title={t("resume_en")} />
        </a>
        <a
          href={pdf_fr}
          download="Ouiame EL FAKIR CV.pdf"
          className="text-decoration-none"
        >
          <PrimaryButton title={t("resume_fr")} />
        </a>
      </ResumeDownloadContainer>
    </div>
  );
}

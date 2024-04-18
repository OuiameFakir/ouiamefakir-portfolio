"use client";
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
import { useTranslation } from "../../i18n/client";
export default function Contact({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "contact");
  return (
    <div>
      <Title>{t("contact_me")}</Title>
      <Subtitle>{t("get_in_touch")}</Subtitle>
      <ContactContainer>
        <ContactText>
          <span className="fw-bold text-warning fs-5">{t("tnx")}</span>
          <br />
          {t("contact_text")}
        </ContactText>
        <ContactInfo>
          <ContactLink href="tel:+212699099123">
            <IconContainer>
              <FontAwesomeIcon icon={faPhone} className="text-secondary" />
            </IconContainer>{" "}
            +212 699099123
          </ContactLink>
          <ContactLink href="mailto:ouiamefakir@gmail.com">
            <IconContainer>
              <FontAwesomeIcon icon={faEnvelope} className="text-secondary" />
            </IconContainer>
            ouiamefakir@gmail.com
          </ContactLink>
          <ContactLink href="https://www.linkedin.com/in/ouiame-el-fakir/">
            <IconContainer>
              <FontAwesomeIcon icon={fabLinkedin} className="text-secondary" />
            </IconContainer>
            linkedin.com/in/ouiame-el-fakir
          </ContactLink>
          <ContactLink href=" https://github.com/OuiameFakir">
            <IconContainer>
              <FontAwesomeIcon icon={fabGithub} className="text-secondary" />
            </IconContainer>{" "}
            github.com/OuiameFakir
          </ContactLink>
        </ContactInfo>
      </ContactContainer>
    </div>
  );
}

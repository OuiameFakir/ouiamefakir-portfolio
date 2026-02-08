"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin as fabLinkedin,
  faGithub as fabGithub,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Box, Typography } from "@mui/material";
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
          <Typography sx={{ fontWeight: 800, color: "primary.main", fontSize: "1.1rem" }}>
            {t("tnx")}
          </Typography>
          <br />
          {t("contact_text")}
        </ContactText>
        <ContactInfo>
          <ContactLink href="tel:+212699099123">
            <IconContainer>
              <Box sx={{ color: "text.secondary" }}>
                <FontAwesomeIcon icon={faPhone} />
              </Box>
            </IconContainer>{" "}
            +212 699099123
          </ContactLink>
          <ContactLink href="mailto:ouiamefakir@gmail.com">
            <IconContainer>
              <Box sx={{ color: "text.secondary" }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </Box>
            </IconContainer>
            ouiamefakir@gmail.com
          </ContactLink>
          <ContactLink href="https://www.linkedin.com/in/ouiame-el-fakir/">
            <IconContainer>
              <Box sx={{ color: "text.secondary" }}>
                <FontAwesomeIcon icon={fabLinkedin} />
              </Box>
            </IconContainer>
            linkedin.com/in/ouiame-el-fakir
          </ContactLink>
          <ContactLink href=" https://github.com/OuiameFakir">
            <IconContainer>
              <Box sx={{ color: "text.secondary" }}>
                <FontAwesomeIcon icon={fabGithub} />
              </Box>
            </IconContainer>{" "}
            github.com/OuiameFakir
          </ContactLink>
        </ContactInfo>
      </ContactContainer>
    </div>
  );
}

"use client";
import React from "react";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import {
  ResumeDownloadContainer,
} from "../portfolio.style";
import { PrimaryButton } from "@/components/button";
import { useTranslation } from "../../i18n/client";
import { motion } from "framer-motion";

export default function About({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "about");
  const pdf_en = `/en/Resume.pdf`;
  const pdf_fr = `/fr/CV.pdf`;
  return (
    <Container maxWidth="lg">
      <Stack
        component={motion.div}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        spacing={2}
        alignItems="center"
        sx={{ textAlign: "center", py: { xs: 4, sm: 6, md: 8 } }}
      >
        <Chip
          label={t("about_me")}
          variant="outlined"
          sx={{ fontWeight: 800, borderRadius: "999px" }}
        />

        <Typography sx={{ color: "text.secondary", fontWeight: 700 }}>
          {t("hello")}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
          }}
        >
          <Box component="span" sx={{ color: "primary.main" }}>
            Ouiame EL FAKIR
          </Box>
        </Typography>

        <Typography
          sx={{
            maxWidth: 860,
            color: "text.secondary",
            fontSize: { xs: "1rem", md: "1.05rem" },
          }}
        >
          {t("about_me_description")}
        </Typography>

        {/* Resume */}
        <ResumeDownloadContainer sx={{ maxWidth: 860 }}>
          <a
            href={pdf_en}
            download="Ouiame EL FAKIR RESUME.pdf"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <PrimaryButton title={t("resume_en")} />
          </a>
          <a
            href={pdf_fr}
            download="Ouiame EL FAKIR CV.pdf"
            style={{ textDecoration: "none", width: "100%" }}
          >
            <PrimaryButton title={t("resume_fr")} />
          </a>
        </ResumeDownloadContainer>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{ pt: 1, width: "100%", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            sx={{ borderRadius: "999px", px: 3, fontWeight: 800 }}
          >
            {lng === "fr" ? "Voir mes projets" : "View projects"}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            sx={{ borderRadius: "999px", px: 3, fontWeight: 800 }}
          >
            {lng === "fr" ? "Me contacter" : "Contact me"}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

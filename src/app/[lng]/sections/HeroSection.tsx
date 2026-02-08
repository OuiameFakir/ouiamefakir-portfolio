"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDownRight } from "react-icons/fi";
import { useTranslation } from "../../i18n/client";
import GlassCard from "@/components/ui/GlassCard";
import NeonButton from "@/components/ui/NeonButton";
import { BentoGrid, BentoItem } from "@/components/ui/BentoGrid";
import Spotlight from "@/components/ui/Spotlight";

export default function HeroSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "about");
  const theme = useTheme();
  const headingColor =
    theme.palette.mode === "light" ? alpha(theme.palette.common.black, 0.82) : theme.palette.text.primary;

  const pdf_en = `/en/Resume.pdf`;
  const pdf_fr = `/fr/CV.pdf`;

  const role =
    lng === "fr" ? "Développeuse Full‑stack (Next.js & Node.js)" : "Full‑stack Developer (Next.js & Node.js)";

  return (
    <Box sx={{ pt: { xs: 2, md: 4 }, position: "relative" }}>
      <Spotlight
        intensity={0.20}
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: 6,
          zIndex: 0,
        }}
      />
      <BentoGrid>
        <BentoItem colSpan={{ xs: 12, md: 7 }}>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            spacing={2.25}
            sx={{ position: "relative", zIndex: 1 }}
          >
            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
              <Chip
                label={lng === "fr" ? "Disponible" : "Available"}
                sx={{
                  fontWeight: 900,
                  borderRadius: "999px",
                  border: `1px solid ${theme.glass.border}`,
                  bgcolor: alpha(theme.palette.background.paper, 0.25),
                  backdropFilter: `blur(${theme.glass.blur}px)`,
                }}
              />
              <Chip
                label={role}
                variant="outlined"
                sx={{
                  fontWeight: 800,
                  borderRadius: "999px",
                  borderColor: alpha(theme.palette.primary.main, 0.3),
                  color: "text.primary",
                  bgcolor: alpha(theme.palette.background.paper, 0.16),
                  backdropFilter: `blur(${theme.glass.blur}px)`,
                }}
              />
            </Stack>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 950,
                letterSpacing: "-0.05em",
                lineHeight: 1.02,
                fontSize: { xs: "2.4rem", sm: "3.3rem", md: "4.2rem" },
              }}
            >
              <Box component="span" sx={{ color: "text.primary" }}>
                {t("hello")}{" "}
              </Box>
              <Box
                component="span"
                sx={{
                  backgroundImage: theme.glass.gradientText,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Ouiame EL FAKIR
              </Box>
            </Typography>

            <Typography sx={{ color: "text.secondary", maxWidth: 720, fontSize: { xs: "1rem", md: "1.05rem" } }}>
              {t("about_me_description")}
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} alignItems={{ xs: "stretch", sm: "center" }}>
              <NeonButton
                variantStyle="solid"
                endIcon={<FiArrowDownRight />}
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                {lng === "fr" ? "Explorer mes projets" : "Explore my projects"}
              </NeonButton>
              <NeonButton
                variantStyle="ghost"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                {lng === "fr" ? "Me contacter" : "Contact me"}
              </NeonButton>
              <Box sx={{ flexGrow: 1 }} />
              <Stack direction="row" spacing={0.5}>
                <IconButton
                  component={Link}
                  href="mailto:ouiamefakir@gmail.com"
                  aria-label="Email"
                  sx={{ border: `1px solid ${theme.glass.border}`, bgcolor: alpha(theme.palette.background.paper, 0.18) }}
                >
                  <FiMail />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://www.linkedin.com/in/ouiame-el-fakir/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  sx={{ border: `1px solid ${theme.glass.border}`, bgcolor: alpha(theme.palette.background.paper, 0.18) }}
                >
                  <FiLinkedin />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://github.com/OuiameFakir"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  sx={{ border: `1px solid ${theme.glass.border}`, bgcolor: alpha(theme.palette.background.paper, 0.18) }}
                >
                  <FiGithub />
                </IconButton>
              </Stack>
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ pt: 0.5 }}>
              <Link href={pdf_en} download="Ouiame EL FAKIR RESUME.pdf" sx={{ textDecoration: "none" }}>
                <NeonButton variantStyle="ghost" fullWidth>
                  {t("resume_en")}
                </NeonButton>
              </Link>
              <Link href={pdf_fr} download="Ouiame EL FAKIR CV.pdf" sx={{ textDecoration: "none" }}>
                <NeonButton variantStyle="ghost" fullWidth>
                  {t("resume_fr")}
                </NeonButton>
              </Link>
            </Stack>
          </Stack>
        </BentoItem>

        <BentoItem colSpan={{ xs: 12, md: 5 }}>
          <Stack spacing={2.25}>
            <GlassCard
              glow="secondary"
              sx={{
                p: 2.5,
                minHeight: { xs: 180, md: 220 },
              }}
            >
              <Typography sx={{ fontWeight: 900, letterSpacing: "-0.03em", color: headingColor }}>
                {lng === "fr" ? "Ce que je construis" : "What I build"}
              </Typography>
              <Typography sx={{ color: "text.secondary", mt: 0.75 }}>
                {lng === "fr"
                  ? "Applications web performantes, interfaces modernes, et APIs Node.js propres."
                  : "Performant web apps, modern interfaces, and clean Node.js APIs."}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                {["Next.js", "Node.js", "TypeScript", "MUI", "Framer Motion"].map((x) => (
                  <Chip
                    key={x}
                    label={x}
                    size="small"
                    sx={{
                      fontWeight: 800,
                      borderRadius: "999px",
                      bgcolor: alpha(theme.palette.background.paper, 0.18),
                      border: `1px solid ${theme.glass.border}`,
                    }}
                  />
                ))}
              </Stack>
            </GlassCard>

            <GlassCard
              glow="primary"
              sx={{
                p: 2.5,
              }}
            >
              <Typography sx={{ fontWeight: 900, letterSpacing: "-0.03em", color: headingColor }}>
                {lng === "fr" ? "Stack" : "Stack"}
              </Typography>
              <Typography sx={{ color: "text.secondary", mt: 0.75 }}>
                Next.js • Node.js • React • MySQL • Git/GitHub
              </Typography>

              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                sx={{
                  mt: 2,
                  borderRadius: 3,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                  background: alpha(theme.palette.background.paper, 0.12),
                  p: 2,
                }}
              >
                <Typography sx={{ fontWeight: 900, color: headingColor }}>
                  {lng === "fr" ? "Objectif" : "Goal"}
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 0.5 }}>
                  {lng === "fr"
                    ? "Créer des expériences web créatives et fiables, de l’UI à l’API."
                    : "Build creative and reliable web experiences, from UI to API."}
                </Typography>
              </Box>
            </GlassCard>
          </Stack>
        </BentoItem>
      </BentoGrid>
    </Box>
  );
}


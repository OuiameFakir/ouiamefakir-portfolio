"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Data } from "@/_assets/variables/projectsData";
import { useTranslation } from "../../i18n/client";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { BentoGrid, BentoItem } from "@/components/ui/BentoGrid";
import Tilt from "@/components/ui/Tilt";

function ProjectBentoCard({
  title,
  desc,
  img,
  codeUrl,
  siteUrl,
  featured,
}: {
  title: string;
  desc: string;
  img: any;
  codeUrl: string;
  siteUrl: string;
  featured?: boolean;
}) {
  const theme = useTheme();

  return (
    <Tilt sx={{ height: "100%" }}>
      <GlassCard
        glow={featured ? "primary" : false}
        sx={{
          height: "100%",
          p: 0,
          "&:hover .media": {
            transform: "scale(1.03)",
          },
        }}
      >
        <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            position: "relative",
            borderBottom: `1px solid ${theme.glass.border}`,
            overflow: "hidden",
          }}
        >
          <Box
            className="media"
            component="img"
            src={img?.src ?? img}
            alt={title}
            sx={{
              width: "100%",
              height: featured ? { xs: 220, md: 260 } : { xs: 200, md: 220 },
              objectFit: "cover",
              transition: "transform 350ms ease",
              display: "block",
              filter: theme.palette.mode === "dark" ? "saturate(1.05) contrast(1.05)" : "saturate(1.05)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                theme.palette.mode === "dark"
                  ? `linear-gradient(180deg, transparent 35%, ${alpha("#000", 0.55)} 100%)`
                  : `linear-gradient(180deg, transparent 35%, ${alpha("#000", 0.35)} 100%)`,
            }}
          />

          <Box sx={{ position: "absolute", left: 16, bottom: 14, right: 16 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                width: "fit-content",
                maxWidth: "100%",
                px: 1.25,
                py: 0.75,
                borderRadius: 2,
                bgcolor: alpha("#000", theme.palette.mode === "dark" ? 0.35 : 0.45),
                backdropFilter: "blur(8px)",
                border: `1px solid ${alpha("#fff", 0.16)}`,
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  textShadow: "0 10px 30px rgba(0,0,0,0.55)",
                  fontWeight: 950,
                  letterSpacing: "-0.03em",
                  fontSize: featured ? "1.25rem" : "1.05rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {title}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Stack spacing={1.25} sx={{ p: 2.25, flexGrow: 1 }}>
          <Typography
            sx={{
              color: "text.secondary",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "4.5em",
            }}
          >
            {desc}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip
              label={featured ? "Featured" : "Project"}
              size="small"
              sx={{
                fontWeight: 900,
                borderRadius: "999px",
                bgcolor: alpha(theme.palette.background.paper, 0.18),
                border: `1px solid ${theme.glass.border}`,
              }}
            />
          </Stack>

          <Stack direction="row" spacing={1} sx={{ pt: 0.5 }}>
            <Link
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                fontWeight: 850,
                color: "text.primary",
                textDecoration: "none",
                borderRadius: "999px",
                px: 1.5,
                py: 0.9,
                border: `1px solid ${theme.glass.border}`,
                bgcolor: alpha(theme.palette.background.paper, 0.20),
                "&:hover": { bgcolor: alpha(theme.palette.background.paper, 0.32) },
              }}
            >
              <FiGithub /> Code
            </Link>
            <Link
              href={siteUrl}
              target="_blank"
              rel="noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                fontWeight: 850,
                color: "white",
                textDecoration: "none",
                borderRadius: "999px",
                px: 1.5,
                py: 0.9,
                backgroundImage: theme.glass.gradientText,
                boxShadow: theme.glass.glow.secondary,
                "&:hover": { opacity: 0.95 },
              }}
            >
              <FiExternalLink /> Live
            </Link>
          </Stack>
        </Stack>
        </Stack>
      </GlassCard>
    </Tilt>
  );
}

export default function ProjectsSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "projects");
  const theme = useTheme();
  const projectData = Data({ params: { lng } });

  const featuredIds = new Set([1, 2]); // pick 1-2 as featured (uses existing data)

  return (
    <Stack spacing={3.5}>
      <SectionHeader title={t("my_projects")} subtitle={t("my_recent_work")} />

      <BentoGrid>
        {projectData.map((p: any, idx: number) => {
          const featured = featuredIds.has(p.id);
          const colSpan =
            idx === 0
              ? { xs: 12, md: 7 }
              : idx === 1
                ? { xs: 12, md: 5 }
                : { xs: 12, md: 6 };

          return (
            <BentoItem key={p.id} colSpan={colSpan}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 * idx }}
                sx={{ height: "100%" }}
              >
                <ProjectBentoCard
                  title={p.title}
                  desc={p.desc}
                  img={p.img}
                  codeUrl={p.code_url}
                  siteUrl={p.site_url}
                  featured={featured}
                />
              </Box>
            </BentoItem>
          );
        })}
      </BentoGrid>

      <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
        {lng === "fr"
          ? "Plus de projets sur GitHub."
          : "More projects on GitHub."}{" "}
        <Link
          href="https://github.com/OuiameFakir"
          target="_blank"
          rel="noreferrer"
          sx={{
            fontWeight: 900,
            color: alpha(theme.palette.primary.main, 0.95),
          }}
        >
          github.com/OuiameFakir
        </Link>
      </Typography>
    </Stack>
  );
}


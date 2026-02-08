"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { experienceData } from "@/_assets/variables/experienceData";
import { FiChevronDown } from "react-icons/fi";

function fmtMonth(lng: string, ym: string) {
  const [y, m] = ym.split("-").map(Number);
  const date = new Date(y, m - 1, 1);
  return new Intl.DateTimeFormat(lng === "fr" ? "fr-FR" : "en-US", {
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function diffLabel(startYm: string, endYm: string | "present") {
  const [sy, sm] = startYm.split("-").map(Number);
  const start = new Date(sy, sm - 1, 1);
  const end =
    endYm === "present"
      ? new Date()
      : (() => {
          const [ey, em] = endYm.split("-").map(Number);
          return new Date(ey, em - 1, 1);
        })();

  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (months < 0) months = 0;

  const years = Math.floor(months / 12);
  const rem = months % 12;

  // For the current role we keep it simple (e.g. "1y+").
  if (endYm === "present" && years >= 1) return `${years}y+`;
  if (endYm === "present" && months >= 1) return `${months}m+`;
  if (years >= 1) return `${years}y${rem ? ` ${rem}m` : ""}`;
  if (months >= 6) return `${months}m+`;
  return `${Math.max(months, 1)}m`;
}

export default function ExperienceSection({ lng }: { lng: string }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [activeId, setActiveId] = React.useState<number>(experienceData[0]?.id ?? 1);
  const [expanded, setExpanded] = React.useState<number | false>(experienceData[0]?.id ?? false);
  const headingColor =
    theme.palette.mode === "light" ? alpha(theme.palette.common.black, 0.82) : theme.palette.text.primary;

  const active = React.useMemo(
    () => experienceData.find((x) => x.id === activeId) ?? experienceData[0],
    [activeId]
  );

  React.useEffect(() => {
    // Keep mobile accordion aligned with the active selection.
    setExpanded(activeId);
  }, [activeId]);

  return (
    <Stack spacing={3.5}>
      <SectionHeader
        title={lng === "fr" ? "Expérience professionnelle" : "Professional experience"}
        subtitle={
          lng === "fr"
            ? "Rôles récents, missions freelance et stage."
            : "Recent roles, freelance work, and internship."
        }
      />

      {/* Desktop: left selector + right details */}
      {isDesktop ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 360px) 1fr",
            gap: 2.5,
            alignItems: "stretch",
            minHeight: 520,
          }}
        >
          <GlassCard sx={{ p: 0, height: "100%" }}>
            <Stack sx={{ p: 1 }}>
              {experienceData.map((item) => {
                const isActive = item.id === activeId;
                const isPresent = item.end === "present";
                const range =
                  `${fmtMonth(lng, item.start)} — ` +
                  (isPresent ? (lng === "fr" ? "Aujourd’hui" : "Present") : fmtMonth(lng, item.end));

                return (
                  <Box
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    sx={{
                      cursor: "pointer",
                      borderRadius: 3,
                      p: 1.5,
                      position: "relative",
                      border: `1px solid ${alpha(theme.palette.primary.main, isActive ? 0.30 : 0.08)}`,
                      bgcolor: alpha(theme.palette.background.paper, isActive ? 0.24 : 0.08),
                      transition: "transform 160ms ease, background-color 160ms ease, border-color 160ms ease",
                      "&:hover": {
                        transform: "translateY(-1px)",
                        bgcolor: alpha(theme.palette.background.paper, 0.16),
                        borderColor: alpha(theme.palette.primary.main, 0.22),
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 10,
                        top: 14,
                        bottom: 14,
                        width: 3,
                        borderRadius: 999,
                        backgroundImage: theme.glass.gradientText,
                        opacity: isActive ? 1 : 0,
                        transition: "opacity 180ms ease",
                      },
                    }}
                  >
                    <Stack spacing={0.5} sx={{ pl: 1.25 }}>
                      <Typography
                        sx={{
                          fontWeight: 950,
                          letterSpacing: "-0.03em",
                          color: headingColor,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          minHeight: "2.6em",
                        }}
                      >
                        {item.role[lng === "fr" ? "fr" : "en"]}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 900,
                          display: "inline-block",
                          width: "fit-content",
                          backgroundImage: theme.glass.gradientText,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                          opacity: 0.95,
                        }}
                      >
                        {item.company}
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                        <Chip
                          label={range}
                          size="small"
                          sx={{
                            fontWeight: 900,
                            borderRadius: "999px",
                            bgcolor: alpha(theme.palette.background.paper, 0.14),
                            border: `1px solid ${theme.glass.border}`,
                          }}
                        />
                        {isPresent ? (
                          <Chip
                            label={lng === "fr" ? "En cours" : "Current"}
                            size="small"
                            sx={{
                              fontWeight: 900,
                              borderRadius: "999px",
                              bgcolor: alpha(theme.palette.primary.main, 0.10),
                              border: `1px solid ${alpha(theme.palette.primary.main, 0.32)}`,
                            }}
                          />
                        ) : null}
                      </Stack>
                    </Stack>
                  </Box>
                );
              })}
            </Stack>
          </GlassCard>

          <Box
            component={motion.div}
            key={active?.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            sx={{ height: "100%" }}
          >
            {active ? (
              <GlassCard
                glow={active.end === "present" ? "primary" : "secondary"}
                sx={{ p: 2.5, height: "100%" }}
              >
                <Stack spacing={1.5}>
                  <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={2}>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 950,
                          letterSpacing: "-0.03em",
                          fontSize: "1.25rem",
                          color: headingColor,
                        }}
                      >
                        {active.role[lng === "fr" ? "fr" : "en"]}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 900,
                          display: "inline-block",
                          backgroundImage: theme.glass.gradientText,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                          opacity: 0.95,
                        }}
                      >
                        {active.company}
                      </Typography>
                    </Box>
                    <Stack spacing={0.75} alignItems="flex-end">
                      <Chip
                        label={
                          `${fmtMonth(lng, active.start)} — ` +
                          (active.end === "present"
                            ? lng === "fr"
                              ? "Aujourd’hui"
                              : "Present"
                            : fmtMonth(lng, active.end))
                        }
                        size="small"
                        sx={{
                          fontWeight: 900,
                          borderRadius: "999px",
                          bgcolor: alpha(theme.palette.background.paper, 0.16),
                          border: `1px solid ${theme.glass.border}`,
                        }}
                      />
                      <Chip
                        label={diffLabel(active.start, active.end)}
                        size="small"
                        sx={{
                          fontWeight: 950,
                          borderRadius: "999px",
                          bgcolor: alpha(theme.palette.background.paper, 0.12),
                          border: `1px solid ${theme.glass.border}`,
                        }}
                      />
                    </Stack>
                  </Stack>

                  <Divider sx={{ borderColor: alpha(theme.palette.primary.main, 0.18) }} />

                  <Typography sx={{ color: "text.secondary", fontSize: "1.02rem" }}>
                    {active.summary[lng === "fr" ? "fr" : "en"]}
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ pt: 0.5 }}>
                    {active.tools.map((tool) => (
                      <Chip
                        key={tool}
                        label={tool}
                        size="small"
                        sx={{
                          fontWeight: 850,
                          borderRadius: "999px",
                          bgcolor: alpha(theme.palette.background.paper, 0.12),
                          border: `1px solid ${theme.glass.border}`,
                        }}
                      />
                    ))}
                  </Stack>
                </Stack>
              </GlassCard>
            ) : null}
          </Box>
        </Box>
      ) : (
        /* Mobile: accordion list */
        <Stack spacing={1.25}>
          {experienceData.map((item, idx) => {
            const isPresent = item.end === "present";
            const range =
              `${fmtMonth(lng, item.start)} — ` +
              (isPresent ? (lng === "fr" ? "Aujourd’hui" : "Present") : fmtMonth(lng, item.end));

            return (
              <Box
                key={item.id}
                component={motion.div}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.03 * idx }}
              >
                <GlassCard sx={{ p: 0 }} glow={isPresent ? "primary" : false}>
                  <Accordion
                    expanded={expanded === item.id}
                    onChange={(_, v) => setExpanded(v ? item.id : false)}
                    sx={{
                      background: "transparent",
                      borderRadius: 4,
                      "&::before": { display: "none" },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <IconButton size="small" aria-label="Expand">
                          <FiChevronDown />
                        </IconButton>
                      }
                      sx={{ px: 2, py: 1.25 }}
                    >
                      <Stack spacing={0.5} sx={{ width: "100%" }}>
                        <Typography sx={{ fontWeight: 950, letterSpacing: "-0.03em" }}>
                          {item.company}
                        </Typography>
                        <Typography sx={{ color: "text.secondary", fontWeight: 850 }}>
                          {item.role[lng === "fr" ? "fr" : "en"]}
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                          <Chip
                            label={range}
                            size="small"
                            sx={{
                              fontWeight: 900,
                              borderRadius: "999px",
                              bgcolor: alpha(theme.palette.background.paper, 0.14),
                              border: `1px solid ${theme.glass.border}`,
                            }}
                          />
                          <Chip
                            label={diffLabel(item.start, item.end)}
                            size="small"
                            sx={{
                              fontWeight: 900,
                              borderRadius: "999px",
                              bgcolor: alpha(theme.palette.background.paper, 0.10),
                              border: `1px solid ${theme.glass.border}`,
                            }}
                          />
                        </Stack>
                      </Stack>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 2, pb: 2 }}>
                      <Typography sx={{ color: "text.secondary" }}>
                        {item.summary[lng === "fr" ? "fr" : "en"]}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ pt: 1.25 }}>
                        {item.tools.map((tool) => (
                          <Chip
                            key={tool}
                            label={tool}
                            size="small"
                            sx={{
                              fontWeight: 850,
                              borderRadius: "999px",
                              bgcolor: alpha(theme.palette.background.paper, 0.12),
                              border: `1px solid ${theme.glass.border}`,
                            }}
                          />
                        ))}
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                </GlassCard>
              </Box>
            );
          })}
        </Stack>
      )}
    </Stack>
  );
}


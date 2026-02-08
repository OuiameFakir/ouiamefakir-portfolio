"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { skillsData } from "@/_assets/variables/skillsData";
import { certifData } from "@/_assets/variables/certifData";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const theme = useTheme();
  const doubled = [...items, ...items];
  return (
    <Box
      sx={{
        overflow: "hidden",
        borderRadius: 4,
        border: `1px solid ${theme.glass.border}`,
        background: alpha(theme.palette.background.paper, 0.10),
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: `${reverse ? "marqueeReverse" : "marquee"} 26s linear infinite`,
          "@keyframes marquee": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-50%)" },
          },
          "@keyframes marqueeReverse": {
            from: { transform: "translateX(-50%)" },
            to: { transform: "translateX(0)" },
          },
        }}
      >
        {doubled.map((s, i) => (
          <Chip
            key={`${s}-${i}`}
            label={s}
            sx={{
              m: 1,
              fontWeight: 900,
              borderRadius: "999px",
              border: `1px solid ${alpha(theme.palette.primary.main, 0.22)}`,
              bgcolor: alpha(theme.palette.background.paper, 0.18),
              backdropFilter: `blur(${theme.glass.blur}px)`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function SkillsCertSection({ lng }: { lng: string }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeImg, setActiveImg] = React.useState<string | null>(null);

  const skills = skillsData.map((s) => s.skill);

  const openImg = (src: string) => {
    setActiveImg(src);
    setOpen(true);
  };

  return (
    <Stack spacing={3.5}>
      <SectionHeader
        title={lng === "fr" ? "Compétences & Certifications" : "Skills & Certificates"}
        subtitle={lng === "fr" ? "Ce que j’utilise pour construire." : "Tools I use to build."}
      />

      <Stack spacing={1.5}>
        <MarqueeRow items={skills} />
        <MarqueeRow items={[...skills].reverse()} reverse />
      </Stack>

      <Stack spacing={2}>
        <Typography sx={{ fontWeight: 950, letterSpacing: "-0.03em", textAlign: "center" }}>
          <Box
            component="span"
            sx={{
              backgroundImage: theme.glass.gradientText,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {lng === "fr" ? "Certifications" : "Certificates"}
          </Box>
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" },
            gap: { xs: 1.5, md: 2 },
          }}
        >
          {certifData.map((c: any, idx: number) => (
            <Box
              key={c.id}
              component={motion.div}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.03 * idx }}
              onClick={() => openImg(c.img?.src ?? c.img)}
              sx={{ cursor: "pointer" }}
            >
              <GlassCard
                sx={{
                  p: 0,
                  borderRadius: 3,
                  "&:hover": {
                    boxShadow: theme.glass.glow.secondary,
                    transform: "translateY(-2px)",
                    transition: "transform 160ms ease, box-shadow 160ms ease",
                  },
                }}
              >
                <Box
                  component="img"
                  src={c.img?.src ?? c.img}
                  alt={`Certificate ${c.id}`}
                  sx={{
                    width: "100%",
                    height: { xs: 110, sm: 130, md: 140 },
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </GlassCard>
            </Box>
          ))}
        </Box>
      </Stack>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            background: alpha(theme.palette.background.paper, 0.65),
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: `blur(${theme.glass.blur}px)`,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton aria-label="Close" onClick={() => setOpen(false)}>
            <FiX />
          </IconButton>
        </Box>
        <Box sx={{ p: { xs: 2, sm: 3 }, pt: 0 }}>
          {activeImg ? (
            <Box
              component="img"
              src={activeImg}
              alt="Certificate"
              sx={{ width: "100%", height: "auto", borderRadius: 2, border: `1px solid ${theme.glass.border}` }}
            />
          ) : null}
        </Box>
      </Dialog>
    </Stack>
  );
}


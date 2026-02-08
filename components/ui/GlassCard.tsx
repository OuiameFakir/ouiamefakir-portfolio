"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import { alpha, useTheme } from "@mui/material/styles";

type GlassCardProps = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  glow?: "primary" | "secondary" | false;
};

export default function GlassCard({ children, sx, glow = false }: GlassCardProps) {
  const theme = useTheme();

  const glowShadow =
    glow === "primary"
      ? theme.glass.glow.primary
      : glow === "secondary"
        ? theme.glass.glow.secondary
        : undefined;

  return (
    <Box
      sx={{
        borderRadius: 4,
        border: `1px solid ${theme.glass.border}`,
        background: theme.glass.background,
        backdropFilter: `blur(${theme.glass.blur}px)`,
        boxShadow: glowShadow ?? theme.glass.shadow,
        overflow: "hidden",
        position: "relative",
        ...(sx as any),
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))",
          opacity: theme.palette.mode === "dark" ? 1 : 0.7,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            theme.palette.mode === "dark"
              ? `radial-gradient(600px 320px at 20% 0%, ${alpha(
                  theme.palette.primary.main,
                  0.18
                )}, transparent 60%)`
              : `radial-gradient(600px 320px at 20% 0%, ${alpha(
                  theme.palette.secondary.main,
                  0.12
                )}, transparent 60%)`,
          opacity: 0.9,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </Box>
  );
}


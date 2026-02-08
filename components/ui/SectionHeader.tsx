"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const theme = useTheme();

  return (
    <Stack spacing={1} sx={{ textAlign: align }}>
      {eyebrow ? (
        <Typography
          sx={{
            fontWeight: 900,
            letterSpacing: "0.14em",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            color: alpha(theme.palette.text.primary, 0.75),
          }}
        >
          {eyebrow}
        </Typography>
      ) : null}

      <Typography
        variant="h4"
        sx={{
          fontWeight: 950,
          letterSpacing: "-0.04em",
          lineHeight: 1.1,
        }}
      >
        <Box
          component="span"
          sx={{
            backgroundImage: theme.glass.gradientText,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {title}
        </Box>
      </Typography>

      {subtitle ? (
        <Typography sx={{ color: "text.secondary", maxWidth: 820, mx: align === "center" ? "auto" : 0 }}>
          {subtitle}
        </Typography>
      ) : null}
    </Stack>
  );
}


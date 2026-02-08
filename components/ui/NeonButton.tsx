"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";

type NeonButtonProps = ButtonProps & {
  variantStyle?: "solid" | "ghost";
};

export default function NeonButton({
  variantStyle = "solid",
  sx,
  ...props
}: NeonButtonProps) {
  const theme = useTheme();
  const gradient = theme.glass.gradientText;

  const isSolid = variantStyle === "solid";

  return (
    <Button
      {...props}
      sx={{
        borderRadius: "999px",
        px: 2.5,
        py: 1.1,
        fontWeight: 800,
        letterSpacing: "-0.01em",
        textTransform: "none",
        ...(isSolid
          ? {
              color: "white",
              backgroundImage: gradient,
              boxShadow: theme.glass.glow.primary,
              "&:hover": {
                backgroundImage: gradient,
                boxShadow: `0 0 0 1px ${alpha(
                  theme.palette.primary.main,
                  0.22
                )}, 0 12px 48px ${alpha(theme.palette.primary.main, 0.28)}`,
              },
            }
          : {
              color: "text.primary",
              backgroundColor: alpha(theme.palette.background.paper, 0.25),
              border: `1px solid ${theme.glass.border}`,
              "&:hover": {
                backgroundColor: alpha(theme.palette.background.paper, 0.35),
              },
            }),
        ...(sx as any),
      }}
    />
  );
}


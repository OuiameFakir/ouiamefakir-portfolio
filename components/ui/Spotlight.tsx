"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import { alpha, useTheme } from "@mui/material/styles";

export default function Spotlight({
  sx,
  intensity = 0.22,
}: {
  sx?: SxProps<Theme>;
  intensity?: number;
}) {
  const theme = useTheme();
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--spot-x", `${x}px`);
      el.style.setProperty("--spot-y", `${y}px`);
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        "--spot-x": "50%",
        "--spot-y": "30%",
        ...(sx as any),
        "&::before": {
          content: '""',
          position: "absolute",
          inset: -2,
          pointerEvents: "none",
          background: `radial-gradient(520px 320px at var(--spot-x) var(--spot-y), ${alpha(
            theme.palette.primary.main,
            intensity
          )}, transparent 60%)`,
          opacity: theme.palette.mode === "dark" ? 1 : 0.65,
          filter: "blur(2px)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: -2,
          pointerEvents: "none",
          background: `radial-gradient(520px 320px at calc(var(--spot-x) + 120px) calc(var(--spot-y) + 40px), ${alpha(
            theme.palette.secondary.main,
            intensity * 0.8
          )}, transparent 62%)`,
          opacity: theme.palette.mode === "dark" ? 1 : 0.6,
          filter: "blur(3px)",
        },
      }}
    />
  );
}


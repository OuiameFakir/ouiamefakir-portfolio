"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

export default function Tilt({
  children,
  sx,
  max = 10,
}: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  max?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * max * 2;
    const rx = (0.5 - py) * max * 2;
    el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <Box
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      sx={{
        transformStyle: "preserve-3d",
        transform: "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        transition: "transform 160ms ease",
        willChange: "transform",
        ...(sx as any),
      }}
    >
      {children}
    </Box>
  );
}


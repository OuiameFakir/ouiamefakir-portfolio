"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

export function BentoGrid({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" },
        gap: { xs: 2, md: 2.5 },
        alignItems: "stretch",
        ...(sx as any),
      }}
    >
      {children}
    </Box>
  );
}

export function BentoItem({
  children,
  colSpan = { xs: 12, md: 6 },
  sx,
}: {
  children: React.ReactNode;
  colSpan?: { xs: number; md: number };
  sx?: SxProps<Theme>;
}) {
  return (
    <Box
      sx={{
        gridColumn: {
          xs: `span ${colSpan.xs}`,
          md: `span ${colSpan.md}`,
        },
        ...(sx as any),
      }}
    >
      {children}
    </Box>
  );
}


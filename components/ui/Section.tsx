"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { SxProps, Theme } from "@mui/material/styles";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

export default function Section({ id, children, sx }: SectionProps) {
  return (
    <Box id={id} component="section" className="section" sx={sx}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}


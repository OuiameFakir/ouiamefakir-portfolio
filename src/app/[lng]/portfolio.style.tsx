"use client";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import theme from "@/utils/theme";
export const ResumeContainer = styled(Box)({
  width: "100%",
  display: "flex",
  padding: "0.5rem",
  gap: "2rem",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    padding: "4rem",
  },
});
export const ResumeIframeContainer = styled(Box)({
  width: "60%",
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
});
export const ResumeDownloadContainer = styled(Box)({
  width: "30%",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
  fontFamily: `${theme.typography.fontFamily}`,
  fontSize: "600",
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
});

"use client";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import theme from "@/utils/theme";

export const Title = styled(Box)({
  fontFamily: `${theme.typography.fontFamily}`,
  fontWeight: 600,
  fontSize: "1.5rem",
  textAlign: "center",
});
export const ResumeContainer = styled(Box)({
  width: "100%",
  display: "flex",
  padding: "4rem",
  gap: "2rem",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  flexDirection: "column",
});
export const ResumeIframeContainer = styled(Box)({
  width: "100%",
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
});
export const ResumeDownloadContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  padding: "1rem",
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    gap: "1rem",
  },
});
export const CardsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "4rem",
});

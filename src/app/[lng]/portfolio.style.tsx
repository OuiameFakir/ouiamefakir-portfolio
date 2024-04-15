"use client";
import { Box, Link } from "@mui/material";
import styled from "@emotion/styled";
import theme from "@/utils/theme";

// Common
export const Title = styled(Box)({
  fontFamily: `${theme.typography.fontFamily}`,
  fontWeight: 600,
  fontSize: "1.5rem",
  textAlign: "center",
});
export const ResumeDownloadContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  padding: "2rem",
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    gap: "1rem",
  },
});
export const CardsContainer = styled(Box)({
  justifyContent: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  padding: "4rem",
});

// About Me
export const Subtitle = styled(Box)({
  fontFamily: `${theme.typography.fontFamily}`,
  fontWeight: 400,
  fontSize: "0.9rem",
  textAlign: "center",
  color: "#6c757d",
});
export const Name = styled(Box)({
  fontFamily: `${theme.typography.fontFamily}`,
  fontWeight: 500,
  fontSize: "1.2rem",
  textAlign: "center",
});
export const AboutDesc = styled(Box)({
  fontFamily: `${theme.typography.fontFamily}`,
  fontWeight: 400,
  fontSize: "1rem",
  textAlign: "center",
  paddingInline: "7rem",
  [theme.breakpoints.down("xs")]: {
    paddingInline: "2rem",
  },
});

// contact me
export const ContactContainer = styled(Box)({
  fontFamily: `${theme.typography.fontFamily}`,
  fontWeight: 400,
  fontSize: "1rem",
  paddingInline: "7rem",
  padding: "3rem",
  textAlign: "justify",
  display: "flex",
  gap: "3rem",
  [theme.breakpoints.down("xs")]: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});
export const ContactText = styled(Box)({
  textAlign: "justify",
  width: "70%",
  fontSize: "0.9rem",
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
});
export const ContactInfo = styled(Box)({
  fontFamily: `${theme.typography.fontFamily}`,
  fontWeight: 400,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});
export const ContactLink = styled(Link)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1rem",
  textDecoration: "none",
  color: "black",
  fontWeight: "400",
  fontSize: "smaller",
});
export const IconContainer = styled(Box)({
  width: "1.2rem",
});

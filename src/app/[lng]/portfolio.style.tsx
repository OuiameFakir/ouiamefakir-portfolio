"use client";
import { Box, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

// Common
export const Title = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 700,
  fontSize: "1.5rem",
  textAlign: "center",
  color: theme.palette.text.primary,
}));
export const ResumeDownloadContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  padding: "2rem",
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    gap: "1rem",
  },
}));
export const CardsContainer = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  padding: "1rem",
  paddingInline: "10rem",
  [theme.breakpoints.down("md")]: {
    paddingInline: "2rem",
  },
}));

// About Me
export const Subtitle = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 500,
  fontSize: "0.9rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export const Name = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 700,
  fontSize: "1.1rem",
  textAlign: "center",
  color: theme.palette.text.primary,
}));
export const AboutDesc = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: "1rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
  paddingInline: "7rem",
  [theme.breakpoints.down("xs")]: {
    paddingInline: "2rem",
  },
}));

// contact me
export const ContactContainer = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: "1rem",
  padding: "3rem",
  paddingInline: "10rem",
  textAlign: "justify",
  display: "flex",
  gap: "3rem",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    paddingInline: "3rem",
  },
}));
export const ContactText = styled(Box)(({ theme }) => ({
  textAlign: "justify",
  width: "70%",
  fontSize: "0.9rem",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "0.75rem",
  padding: "1rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export const ContactInfo = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
}));
export const ContactLink = styled(Link)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1rem",
  textDecoration: "none",
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: "0.95rem",
  "&:hover": {
    textDecoration: "underline",
  },
}));
export const IconContainer = styled(Box)({
  width: "1.2rem",
});

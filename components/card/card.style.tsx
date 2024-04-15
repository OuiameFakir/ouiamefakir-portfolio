import { Box } from "@mui/material";
import styled from "@emotion/styled";
import theme from "@/utils/theme";

export const CardContainer = styled(Box)({
  display: "flex",
  width: "100%",
  boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.2)",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
});
export const CardFooter = styled(Box)({
  display: "flex",
  gap: "0.5rem",
  padding: "1rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
});

// certifications Cards

export const CertifCardImgContainer = styled(Box)({
  width: "15rem",
  height: "10rem",
});
export const CertifCardContainer = styled(Box)({
  display: "flex",
  gap: "2rem",
  flexDirection: "row",
  boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.2)",
});

// Skills Card
export const SkillsCardContainer = styled(Box)({
  boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.2)",
  padding: "0.7rem",
  borderRadius: "0.5rem",
});

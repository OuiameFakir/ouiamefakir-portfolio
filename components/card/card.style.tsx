import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  borderRadius: "1rem",
  overflow: "hidden",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[4],
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
export const CardFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "0.75rem",
  padding: "1rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

// certifications Cards

export const CertifCardPrincipalImgContainer = styled(Box)({
  width: "20rem",
  height: "15rem",
});
export const CertifCardImgContainer = styled(Box)({
  width: "15rem",
  height: "10rem",
});
export const CertifCardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  flexDirection: "row",
  borderRadius: "1rem",
  overflow: "hidden",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[3],
  backgroundColor: theme.palette.background.paper,
}));

// Skills Card
export const SkillsCardContainer = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[2],
  padding: "0.75rem 1rem",
  borderRadius: "0.75rem",
  zIndex: 10,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
}));

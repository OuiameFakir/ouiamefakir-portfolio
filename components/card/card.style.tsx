import { Box } from "@mui/material";
import styled from "@emotion/styled";
import theme from "@/utils/theme";

export const CardContainer = styled(Box)({
  display: "flex",
  boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
});
export const CardImgContainer = styled(Box)({
  width: "60%",
  background: "red",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
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

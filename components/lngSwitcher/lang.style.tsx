import { Box, FormControl } from "@mui/material";
import styled from "@emotion/styled";

export const LngSelectContainer = styled(Box)({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledFormControl = styled(FormControl)({
  "& .MuiSelect-icon": { display: "none" },
  "& .MuiInputBase-input": { color: "white" },
});

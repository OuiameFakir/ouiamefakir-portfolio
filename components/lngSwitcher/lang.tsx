"use client";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { FiGlobe } from "react-icons/fi";
import { useTranslation } from "@/src/app/i18n/client";
import { LngSelectContainer, StyledFormControl } from "./lang.style";

const LngSwitcher = ({ lng, path }: { lng: string; path?: string }) => {
  const { t } = useTranslation(lng, "common");
  return (
    <StyledFormControl
      fullWidth
      variant="standard"
      style={{ minWidth: "120px" }}
    >
      <Select
        value="langues"
        onChange={(e) => {
          const selectedLanguage = e.target.value;
          window.location.href = `/${selectedLanguage}/${path}`;
        }}
      >
        <MenuItem value="langues" selected>
          <LngSelectContainer>
            <FiGlobe /> {t("lang")}
          </LngSelectContainer>
        </MenuItem>
        <MenuItem value="fr">Français</MenuItem>
        <MenuItem value="en">English</MenuItem>
      </Select>
    </StyledFormControl>
  );
};
export default LngSwitcher;

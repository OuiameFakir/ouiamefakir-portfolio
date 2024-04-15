// "use client";
// import { Box, FormControl, MenuItem, Select } from "@mui/material";

// const LngSwitcher = ({ path }: { path?: string }) => {
//   return (
//     <Box sx={{ width: "100px", marginTop: "20px", color: "white" }}>
//       <FormControl
//         fullWidth
//         variant="standard"
//         sx={{
//           "& .MuiSelect-icon": { color: "white" },
//           "& .MuiInputBase-input": { color: "white" },
//           "& .MuiInput-underline:before": { borderBottom: "none" },
//         }}
//       >
//         <Select
//           labelId="Langues"
//           id="Langues"
//           value="langues"
//           label="Langues"
//           onChange={(e) => {
//             const selectedLanguage = e.target.value;
//             window.location.href = `/${selectedLanguage}/${path}`;
//           }}
//         >
//           <MenuItem value="langues" selected>
//             {/* Langues */}
//           </MenuItem>
//           <MenuItem value="fr">Français</MenuItem>
//           <MenuItem value="en">English</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };
// export default LngSwitcher;
// components/LanguageSwitchButton.js
"use client";
import React from "react";
import { FiGlobe } from "react-icons/fi"; 
import { useTranslation } from "react-i18next";

const LngSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = () => {
    const newLanguage = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button onClick={handleLanguageChange}>
      <FiGlobe className="text-light" />
    </button>
  );
};

export default LngSwitcher;

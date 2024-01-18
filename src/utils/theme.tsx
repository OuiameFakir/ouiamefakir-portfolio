"use client"
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
 
  typography:{
    fontFamily: 'Omnes',
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none', 
        },
      },
    },
  },
});
export default theme
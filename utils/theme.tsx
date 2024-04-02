"use client";
import { alpha, createTheme } from "@mui/material/styles";
import { colors } from "../_assets/variables/var";
declare module "@mui/material/styles" {
  interface Palette {
    customColors: PaletteOptions["customColors"];
  }
  interface PaletteOptions {
    customColors: {
      main: string;
      pink: {
        [key in number]: string;
      };
      purple: {
        [key in number]: string;
      };
      gray: {
        [key in number]: string;
      };
      green: {
        [key in number]: string;
      };
      oranged: {
        [key in number]: string;
      };
      test: string;
      alpha: {
        [key in string]: {
          [key in number]: {
            [key in number]: string;
          };
        };
      };
    };
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true; // for small screen mobile
    xs: true; // for small screen mobile
    sm: true; // for mobile screen
    md: true; // for tablets
    lg: true; // for laptops
    xl_lg: true; // for desktop / monitors
    xl: true; // for big screens
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
  },
  palette: {
    customColors: {
      main: "#FFFFFF",
      pink: {
        500: "#AD2184",
      },
      purple: {
        100: "#DFCCEA",
        500: "#582E71",
        600: "#47255B",
      },
      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        500: "#6B7280",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      green: {
        100: "#21A334",
        200: "#008000",
      },
      oranged: {
        300: "#FF5733",
        500: "#D84315",
      },
      test: "#FF0000",
      alpha: {
        pink: {
          500: {
            10: alpha(colors.pink[500], 0.1),
          },
        },
        purple: {
          500: {
            10: alpha(colors.purple[500], 0.1),
          },
        },
      },
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0rem",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          flexGrow: "unset",
          WebkitFlexGrow: "unset",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: 600,
          textTransform: "capitalize",
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  breakpoints: {
    values: {
      xxs: 420.98,
      xs: 570.98,
      sm: 767.98,
      md: 991.98,
      lg: 1200.98,
      xl_lg: 1400.98,
      xl: 1600.98,
    },
  },
});
export default theme;

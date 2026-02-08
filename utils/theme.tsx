"use client";
import { alpha, createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";
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

declare module "@mui/material/styles" {
  interface Theme {
    glass: {
      blur: number;
      border: string;
      background: string;
      backgroundStrong: string;
      shadow: string;
      glow: {
        primary: string;
        secondary: string;
      };
      gradientText: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    glass?: Theme["glass"];
  }
}

export function createAppTheme(mode: PaletteMode) {
  const isDark = mode === "dark";

  return createTheme({
    typography: {
      fontFamily:
        'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
    },
    palette: {
      mode,
      primary: { main: colors.pink[500] },
      secondary: { main: colors.purple[500] },
      background: {
        default: isDark ? "#0B1020" : "#F6F7FB",
        paper: isDark ? "#0F172A" : "#FFFFFF",
      },
      customColors: {
        main: isDark ? "#0B1020" : "#FFFFFF",
        pink: {
          500: colors.pink[500],
        },
        purple: {
          100: colors.purple[100],
          500: colors.purple[500],
          600: colors.purple[600],
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
    shape: {
      borderRadius: 16,
    },
    glass: {
      blur: 14,
      border: isDark ? "rgba(255,255,255,0.14)" : "rgba(15,23,42,0.10)",
      background: isDark ? "rgba(15,23,42,0.55)" : "rgba(255,255,255,0.55)",
      backgroundStrong: isDark ? "rgba(15,23,42,0.72)" : "rgba(255,255,255,0.72)",
      shadow: isDark ? "0 18px 60px rgba(0,0,0,0.55)" : "0 18px 60px rgba(2,6,23,0.14)",
      glow: {
        primary: `0 0 0 1px ${alpha(colors.pink[500], 0.18)}, 0 10px 40px ${alpha(
          colors.pink[500],
          0.20
        )}`,
        secondary: `0 0 0 1px ${alpha(colors.purple[500], 0.16)}, 0 10px 40px ${alpha(
          colors.purple[500],
          0.18
        )}`,
      },
      gradientText: `linear-gradient(90deg, ${colors.pink[500]}, ${colors.purple[500]})`,
    },
    components: {
      MuiCssBaseline: {
        defaultProps: {
          enableColorScheme: true,
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
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
            fontFamily:
              'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: 600,
            textTransform: "none",
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
}

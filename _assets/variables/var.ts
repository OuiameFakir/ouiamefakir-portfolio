interface IcustomColorsProps {
  main: string;
  pink: {
    500: string;
  };
  purple: {
    100: string;
    500: string;
    600: string;
  };
  gray: {
    200: string;
    500: string;
    700: string;
    800: string;
    900: string;
  };
}
export const colors: IcustomColorsProps = {
  main: "#FFFFFF",
  pink: {
    // Primary accent (cobalt)
    500: "#2563EB",
  },
  purple: {
    // Secondary accent (cyan)
    100: "#CFFAFE",
    500: "#06B6D4",
    600: "#0891B2",
  },
  gray: {
    200: "#E5E7EB",
    500: "#6B7280",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
};

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
    500: "#AD2184",
  },
  purple: {
    100: "#DFCCEA",
    500: "#582E71",
    600: "#47255B",
  },
  gray: {
    200: "#E5E7EB",
    500: "#6B7280",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
};

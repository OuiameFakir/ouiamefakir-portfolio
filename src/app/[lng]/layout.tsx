import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "../../../utils/ThemeRegistry";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "Ouiame EL FAKIR Portfolio",
  description:
    "Ouiame EL FAKIR Portfolio | Personal Portfolio, Ouiame EL FAKIR is a Frontend Developer ",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <ThemeRegistry options={{ key: "mui-theme" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

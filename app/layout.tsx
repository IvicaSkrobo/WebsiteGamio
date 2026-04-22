import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sora",
  display: "swap",
});

const kumbhSans = localFont({
  src: [
    {
      path: "./fonts/KumbhSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/KumbhSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kumbh",
  display: "swap",
});

const nohemi = localFont({
  src: [
    {
      path: "../nohemi-font-family/Nohemi-Regular-BF6438cc579d934.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../nohemi-font-family/Nohemi-SemiBold-BF6438cc57db2ff.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../nohemi-font-family/Nohemi-Bold-BF6438cc577b524.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gamio",
  description: "Game & Gain - B2B iGaming platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${kumbhSans.variable} ${nohemi.variable}`}>
      <body>{children}</body>
    </html>
  );
}

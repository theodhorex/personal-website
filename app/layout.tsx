import type { Metadata, Viewport } from "next";
import { Anybody, Archivo, DM_Mono } from "next/font/google";
import "./globals.css";

const anybody = Anybody({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["wdth"],
});

const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#0a0b10",
};

export const metadata: Metadata = {
  title: "Theodhore - Full-Stack Web Developer",
  description:
    "Personal website and portfolio of Theodhore. Building fast web applications, APIs, and developer tooling, plus Web3 interfaces and smart contracts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anybody.variable} ${archivo.variable} ${dmMono.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

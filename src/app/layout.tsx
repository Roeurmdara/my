import Navbar from "@/components/navbar_footer/NavbarComponent";
import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/navbar_footer/footer-taped-design";
import React from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Roeurm Dara - Frontend Engineer",
  description:
    "Portfolio of Roeurm Dara, a frontend engineer specializing in building performant, accessible, and visually engaging web applications.",
  generator: "v0.dev",

  openGraph: {
    title: "Roeurm Dara - Frontend Engineer",
    description:
      "Portfolio of Roeurm Dara, a frontend engineer specializing in building performant, accessible, and visually engaging web applications.",
    url: "https://me-delta-tawny.vercel.app/",
    siteName: "Roeurm Dara Portfolio",
    images: [
      {
        url: "me.jpg", // put image in /public
        width: 1200,
        height: 630,
        alt: "Roeurm Dara Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Roeurm Dara - Frontend Engineer",
    description:
      "Portfolio of Roeurm Dara, frontend engineer building modern web experiences.",
    images: ["https://your-domain.com/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Navbar from "@/components/navbar_footer/NavbarComponent";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/navbar_footer/footer-taped-design";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://me-delta-tawny.vercel.app"),
  title: "Roeurm Dara — Fullstack Developer & Creative Engineer",
  description:
    "Portfolio of Roeurm Dara, a fullstack developer specializing in building performant, accessible, and visually engaging web applications and cloud architectures.",
  openGraph: {
    title: "Roeurm Dara — Fullstack Developer",
    description:
      "Portfolio of Roeurm Dara, a fullstack developer specializing in building performant, accessible, and visually engaging web applications.",
    url: "https://me-delta-tawny.vercel.app/",
    siteName: "Roeurm Dara Portfolio",
    images: [
      {
        url: "/me.jpg",
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
    title: "Roeurm Dara — Fullstack Developer",
    description:
      "Portfolio of Roeurm Dara, fullstack developer building modern web experiences.",
    images: ["/me.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased" suppressHydrationWarning>
      <body
        className="min-h-screen bg-[#F5F3ED] text-[#090909] font-sans selection:bg-[#C5F451] selection:text-[#090909]"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="min-h-screen flex flex-col justify-between">
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { seo } from "@/data/data";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts moved to _document.tsx */}
  {/* Favicon and theme color */}
  {/* Prefer the .ico file for broadest browser support; keep SVG as a modern fallback */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <meta name="theme-color" content="#0ea5a4" />
      </head>
      <body className="antialiased">
        <SmoothScroll />
        <div className="w-full max-w-[700px] mx-auto px-4">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

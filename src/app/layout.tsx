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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
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

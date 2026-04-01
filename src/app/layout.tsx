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

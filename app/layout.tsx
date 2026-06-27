import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import "./globals.css";

const displayFont = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://temkatattoo.com", // Updated URL
  ),
  title: {
    default: "Temka Tattoo | Улаанбаатар дахь мэргэжлийн шивээсчин",
    template: "%s | Temka Tattoo",
  },
  description:
    "Улаанбаатар хотын мэргэжлийн шивээсний студи. Fine line, минималист болон хувь хүний онцлогт тохирсон шивээсний үйлчилгээ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="mn" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {/* Mobile дээр доод CTA bar-ын ард текст нуугдахаас сэргийлж padding нэмнэ */}
        <main className="pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}

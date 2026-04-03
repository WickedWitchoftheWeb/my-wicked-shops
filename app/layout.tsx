import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/* BODY FONT (Cormorant Garamond) */
const bodyFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

/* BEAU RIVAGE (your header font) */
const beauFont = localFont({
  src: "../public/Fonts/Beau_Rivage/beau_rivage_regular.ttf",
  variable: "--font-beau",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Wicked Witch of the Web",
  description: "A living digital grimoire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${beauFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
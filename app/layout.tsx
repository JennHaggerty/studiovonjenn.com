import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { siteSettings } from "./cms";

const montserratSans = Montserrat({
  variable: "--font-sans",
});

const cormorantSerif = Cormorant_Garamond({
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: siteSettings.name,
  description: siteSettings.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratSans.variable} ${cormorantSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

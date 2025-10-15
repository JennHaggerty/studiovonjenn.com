import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { siteStrings } from "./strings";

const montserratSans = Montserrat({
  variable: "--font-sans",
});

const cormorantSerif = Cormorant_Garamond({
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: siteStrings.siteTitle,
  description: siteStrings.siteDescription,
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

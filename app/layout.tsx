import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { settings } from "./cms";
import SocialLinks from "./components/lists/socialLinksList";

const montserratSans = Montserrat({
  variable: "--font-sans",
});

const cormorantSerif = Cormorant_Garamond({
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: settings.name,
  description: settings.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const copyrightText = settings.copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  return (
    <html lang="en">
      <body
        className={`${montserratSans.variable} ${cormorantSerif.variable} antialiased`}
      >
        {children}

        <footer>
          <SocialLinks />
          <p className="mt-2">{copyrightText}</p>
        </footer>
      </body>
    </html>
  );
}

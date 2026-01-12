"use client";

import { settings } from "@/app/cms";
import SocialLinks from "@/app/components/lists/socialLinksList";

const Footer = () => {
  const copyrightText = settings.copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  return (
    <footer>
      <SocialLinks />
      <p className="mt-2">{copyrightText}</p>
    </footer>
  );
};

export default Footer;

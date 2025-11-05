"use client";

import { siteSettings } from "../cms";
import SocialLinks from "./socialLinks";

const Footer = () => {
  const copyrightText = siteSettings.copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  return (
    <footer>
      <SocialLinks />
      {copyrightText}
    </footer>
  );
};

export default Footer;

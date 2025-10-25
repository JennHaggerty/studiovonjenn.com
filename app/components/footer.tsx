"use client";

import { siteStrings } from "../cms";
import SocialLinks from "./socialLinks";

const Footer = () => {
  const copyrightText = siteStrings.copyright.replace(
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

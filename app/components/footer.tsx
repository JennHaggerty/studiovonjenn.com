"use client";

import { settings } from "../cms";
import SocialLinks from "./lists/socialLinksList";

const Footer = () => {
  const copyrightText = settings.copyright.replace(
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

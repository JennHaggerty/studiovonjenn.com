"use client";

import { settings } from "../cms";
import SocialLinks from "./lists/SocialLinksList";

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

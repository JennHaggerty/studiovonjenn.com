"use client";

import { siteSettings } from "../cms";

const Footer = () => {
  const copyrightText = siteSettings.copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  return <footer>{copyrightText}</footer>;
};

export default Footer;

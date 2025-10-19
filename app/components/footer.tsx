"use client";

import { siteStrings } from "../cms";

const Footer = () => {
  const copyrightText = siteStrings.copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  return <footer>{copyrightText}</footer>;
};

export default Footer;

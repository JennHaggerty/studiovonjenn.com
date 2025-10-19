"use client";

import { site } from "../cms";

const Footer = () => {
  const copyrightText = site.copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  return <footer>{copyrightText}</footer>;
};

export default Footer;

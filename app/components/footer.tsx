"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  const [copyrightText, setCopyrightText] = useState("");
  useEffect(() => {
    const text =
      "Copyright © " +
      new Date().getFullYear() +
      " Jennifer Haggerty. All rights reserved.";
    setCopyrightText(text);
  }, []);

  return <footer>{copyrightText}</footer>;
};

export default Footer;

"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  const copyrightText =
    "Copyright © " +
    new Date().getFullYear() +
    " Jennifer Haggerty. All rights reserved.";

  return <footer>{copyrightText}</footer>;
};

export default Footer;

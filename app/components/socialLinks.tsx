"use client";

import { siteSettings } from "../cms";

const SocialLinks = () => {
  return (
    <ul className="socials">
      <li>
        <a
          className="outline"
          href={siteSettings.email}
          aria-label="Email Jennifer"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          className="outline"
          href={siteSettings.pricelist}
          target="_blank"
          aria-label="Price list"
        >
          Prices
        </a>
      </li>
      <li>
        <a
          className="outline"
          href={siteSettings.social}
          target="_blank"
          aria-label="Connect with Jennifer"
        >
          Discord
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;

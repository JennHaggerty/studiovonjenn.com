"use client";

import { settings } from "../../cms";

const SocialLinks = () => {
  return (
    <ul className="socials">
      <li>
        <a href={settings.email} aria-label="Email Jennifer">
          Contact
        </a>
      </li>
      <li>
        <a href={settings.pricelist} aria-label="Price list">
          Prices
        </a>
      </li>
      <li>
        <a
          href={settings.social}
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

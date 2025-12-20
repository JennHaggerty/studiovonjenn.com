"use client";

import { settings, strings } from "../../cms";

const SocialLinks = () => {
  return (
    <ul className="socials">
      <li>
        <a href={settings.email}>{strings.contact}</a>
      </li>
      <li>
        <a href={settings.pricelist}>{strings.prices}</a>
      </li>
      <li>
        <a href={settings.social} target="_blank" aria-label={strings.connect}>
          {strings.discord}
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;

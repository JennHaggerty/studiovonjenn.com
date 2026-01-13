"use client";

import { settings, strings } from "@/app/cms";

const SocialLinks = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <a href={settings.email}>{strings.contact}</a>
        </li>
        <li>
          <a href={settings.pricelist}>{strings.prices}</a>
        </li>
        <li>
          <a
            href={settings.social}
            target="_blank"
            aria-label={strings.connect}
          >
            {strings.discord}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialLinks;

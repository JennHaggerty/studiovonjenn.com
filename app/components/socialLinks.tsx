"use client";

import { siteSettings } from "../cms";
import AddFriendIcon from "./svgs/addFriendIcon";
import AmpersandIcon from "./svgs/ampersandIcon";

const SocialLinks = () => {
  return (
    <ul className="socials">
      <li>
        <a href={siteSettings.email} aria-label="Email Jennifer">
          <AmpersandIcon />
        </a>
      </li>
      <li>
        <a
          href={siteSettings.social}
          target="_blank"
          aria-label="Connect with Jennifer"
        >
          <AddFriendIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;

"use client";

import { site } from "../cms";
import AddFriendIcon from "./svgs/addFriendIcon";
import AmpersandIcon from "./svgs/ampersandIcon";

const SocialLinks = () => {
  return (
    <ul className="socials">
      <li>
        <a href={site.email} aria-label="Email Jennifer">
          <AmpersandIcon />
        </a>
      </li>
      <li>
        <a
          href={site.discordLink}
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

"use client";

import { navigation, settings, strings } from "@/app/site";

const SocialLinks = () => {
  const mainMenu = navigation.find((i) => i.id === "main");

  if (!mainMenu) return;
  return (
    <nav>
      <ul className={`${mainMenu.customClass}`}>
        {mainMenu.items.map((item, i) => (
          <li key={`main-nav-${i}`}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;

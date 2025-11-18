import { GalleryInterface } from "./interfaces";

const atmosDirectory = "/images/galleries/atmos/{date}/";
const atmosDescriptionText =
  "Images from the monthly event available for client use on mobile devices, websites, and social networks for personal, non-commercial, use only. Alterations are prohibited.";
const atmosOnCloseText = "Return to index";

const galleryDescription =
  "Images are available for client use on mobile devices, websites, and social networks for personal, non-commercial, use only. Alterations are prohibited.";

export const galleries: GalleryInterface[] = [
  {
    directory: "/images/galleries/pirate-party-1125/",
    title: "Pirate Ball, Augusta GA, November 2025",
    description: galleryDescription,
    onCloseText: atmosOnCloseText,
  },
  {
    directory: atmosDirectory.replace("{date}", "1125"),
    title: "Atmosphere, Augusta GA, November 2025",
    description: atmosDescriptionText,
    onCloseText: atmosOnCloseText,
  },
  {
    directory: atmosDirectory.replace("{date}", "1025"),
    title: "Atmosphere, Augusta GA, October 2025",
    description: atmosDescriptionText,
    onCloseText: atmosOnCloseText,
  },
  {
    directory: atmosDirectory.replace("{date}", "0925"),
    title: "Atmosphere, Augusta GA, September 2025",
    description: atmosDescriptionText,
    onCloseText: atmosOnCloseText,
  },
];

export const siteSettings = {
  name: "Portrait Photography",
  description: "by Jennifer Haggerty in Augusta, Georgia.",
  note: "LGBTQIA+, poc, and immigrant friendly. Not MAGA friendly.",
  email: "thejenniferhaggerty@gmail.com",
  social: "https://discord.gg/gh9TMHQsdB",
  copyright: "Copyright © {year} Jennifer Haggerty. All rights reserved.",
};

export const siteStrings = {
  loadingGalleryPage: "Loading gallery page",
  loadingHomePage: "Loading home page",
  loadingGallery: "Loading images",
};

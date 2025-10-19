import { GalleryInterface } from "./interfaces";

const atmosDirextory = "/images/galleries/atmos/{date}/";
const atmosDescriptionText =
  "Images from the monthly event available for client use on mobile devices, websites, and social networks for personal, non-commercial, use only. Alterations are prohibited.";
const atmosOnCloseText = "Return to index";

export const galleries: GalleryInterface[] = [
  {
    directory: atmosDirextory.replace("{date}", "1025"),
    title: "Atmosphere, Augusta GA, October 2025",
    description: atmosDescriptionText,
    onCloseText: atmosOnCloseText,
  },
  {
    directory: atmosDirextory.replace("{date}", "0925"),
    title: "Atmosphere, Augusta GA, September 2025",
    description: atmosDescriptionText,
    onCloseText: atmosOnCloseText,
  },
];

export const site = {
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

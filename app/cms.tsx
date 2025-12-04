import { GalleryInterface } from "./interfaces";

const atmosSlug = "atmosphere/{date}";
const atmosDescriptionText =
  "Images from the monthly event available for client use on mobile devices, websites, and social networks for personal, non-commercial, use only. Alterations are prohibited.";
const atmosOnCloseText = "Return to index";

const galleryDescription =
  "Images are available for client use on mobile devices, websites, and social networks for personal, non-commercial, use only. Alterations are prohibited.";

export const galleries: GalleryInterface[] = [
  {
    slug: "pirate-party-1125",
    title: "3rd Annual Buccaneer's Ball",
    description: galleryDescription,
    onCloseText: atmosOnCloseText,
  },
  {
    slug: atmosSlug.replace("{date}", "11-25"),
    title: "Atmosphere, Augusta GA, November 2025",
    description: atmosDescriptionText,
    onCloseText: atmosOnCloseText,
  },
  {
    slug: atmosSlug.replace("{date}", "10-25"),
    title: "Atmosphere, Augusta GA, October 2025",
    description: atmosDescriptionText,
    onCloseText: atmosOnCloseText,
  },
  {
    slug: atmosSlug.replace("{date}", "09-25"),
    title: "Atmosphere, Augusta GA, September 2025",
    description: atmosDescriptionText,
    onCloseText: atmosOnCloseText,
  },
];

export const settings = {
  name: "Portrait Photography",
  description: "by Jennifer Haggerty in Augusta, Georgia.",
  note: "Specializing in Gothic Renaissance and the painterly style. Posted monthly on the first Saturday at Le Chat Noir on 8th Street. Available for events and private sessions.",
  email: "mailto:thejenniferhaggerty@gmail.com",
  social: "https://discord.gg/gh9TMHQsdB",
  pricelist: "/pdfs/Photography-Recipe-Book.pdf",
  copyright: "Copyright © {year} Jennifer Haggerty. All rights reserved.",
};

export const strings = {
  loadingGalleryPage: "Loading gallery page",
  loadingHomePage: "Loading home page",
  loadingGallery: "Loading images",
};

import { GalleryInterface } from "./interfaces";

const atmosSlug = "atmos{date}";
const atmosDirectory = "/images/galleries/atmos/{date}/";
const atmosDescriptionText =
  "Images from the monthly event available for client use on mobile devices, websites, and social networks for personal, non-commercial, use only. Alterations are prohibited.";

const defaultGalleryDescription =
  "Images are available for client use on mobile devices, websites, and social networks for personal, non-commercial, use only. Alterations are prohibited.";

export const galleries: GalleryInterface[] = [
  {
    slug: "pirateparty1125",
    directory: "/images/galleries/pirate-party-1125/",
    title: "3rd Annual Buccaneer's Ball",
    description: defaultGalleryDescription,
  },
  {
    slug: atmosSlug.replace("{date}", "1125"),
    directory: atmosDirectory.replace("{date}", "1125"),
    title: "Atmosphere, Augusta GA, November 2025",
    description: atmosDescriptionText,
  },
  {
    slug: atmosSlug.replace("{date}", "1025"),
    directory: atmosDirectory.replace("{date}", "1125"),
    title: "Atmosphere, Augusta GA, October 2025",
    description: atmosDescriptionText,
  },
  {
    slug: atmosSlug.replace("{date}", "0925"),
    directory: atmosDirectory.replace("{date}", "1125"),
    title: "Atmosphere, Augusta GA, September 2025",
    description: atmosDescriptionText,
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

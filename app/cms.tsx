import { GalleryInterface } from "./interfaces";

const atmosSlug = "atmos{date}";
const atmosDirectory = "/images/galleries/atmos/{date}/";

export const defaultGalleryDescription =
  "Images are for personal use only and may not be used commercially; selling prints, advertisements, representing goods and services, and editing/retouching/alterations/manipulations to the images are prohibited. Inquires to request commercial licenses, prints, and personal printing licenses may be sent to thejenniferhaggerty@gmail.com.";

export const galleries: GalleryInterface[] = [
  {
    slug: "pirateparty1125",
    directory: "/images/galleries/pirate-party-1125/",
    title: "3rd Annual Buccaneer's Ball",
  },
  {
    slug: atmosSlug.replace("{date}", "1125"),
    directory: atmosDirectory.replace("{date}", "1125"),
    title: "Atmosphere, Augusta GA, November 2025",
  },
  {
    slug: atmosSlug.replace("{date}", "1025"),
    directory: atmosDirectory.replace("{date}", "1025"),
    title: "Atmosphere, Augusta GA, October 2025",
  },
  {
    slug: atmosSlug.replace("{date}", "0925"),
    directory: atmosDirectory.replace("{date}", "0925"),
    title: "Atmosphere, Augusta GA, September 2025",
  },
];

export const prices = [
  {
    name: "Prints à la carte ",
    options: [
      {
        name: "8in x 10in (x1)",
        price: 30,
      },
      {
        name: "5in x 7in (x2)",
        price: 30,
      },
      {
        name: "2.5in x 3.5in (x4)",
        price: 30,
      },
      {
        name: "Personal printing license (per image)",
        price: 175,
      },
    ],
  },
  {
    name: "Le Chat Noir Photo Booth",
    image: "",
    time: "8:30pm - 1:30am",
    delivery: "1-3 days",
    price: 25,
    includes: [
      "1 digital image, light and color corrected, sized  for social media. Includes watermark.",
      "Posing and direction.",
    ],
  },
  {
    name: "Fine Art Portraiture",
    image: "",
    time: "45 - 90 minutes",
    delivery: "3-5 days",
    price: 325,
    includes: [
      "1 digital image artistically rendered; light and color corrected, sized  for social media. Includes watermark.",
      "1 personal print license with full-sized digital photo. No watermark.",
      "1-2 backdrops/backgrounds.",
      "1 outfit/look.",
      "Posing and direction.",
    ],
    addons: [
      { name: "Additional person, limit 3", price: 80 },
      { name: "Aristic rendering, per image", price: 125 },
    ],
  },
  {
    name: "Parties and Events",
    image: "",
    time: "2.5 hours",
    delivery: "2-3 weeks",
    price: 575,
    includes: [
      "All images, light and color corrected, sized for social media. Includes watermark.",
      "1 backdrop/background.",
      "Posing and direction.",
    ],
    addons: [
      { name: "Additional hour, limit 2", price: 100 },
      { name: "Aristic rendering, per image", price: 125 },
    ],
  },
];

export const settings = {
  name: "Portrait Photography",
  description: "by Jennifer Haggerty in Augusta, Georgia.",
  note: "Specializing in Gothic Renaissance and the painterly style. Posted monthly on the first Saturday at Le Chat Noir on 8th Street. Available for events and private sessions.",
  email: "mailto:thejenniferhaggerty@gmail.com",
  social: "https://discord.gg/gh9TMHQsdB",
  pricelist: "/prices",
  copyright: "Copyright © {year} Jennifer Haggerty. All rights reserved.",
};

export const strings = {
  loadingGalleryPage: "Loading gallery page",
  loadingHomePage: "Loading home page",
  loadingGallery: "Loading images",
};

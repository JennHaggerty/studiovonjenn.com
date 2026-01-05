import { GalleryInterface } from "./interfaces";

const atmosSlug = "atmos{date}";
const atmosDirectory = "/images/galleries/atmos/{date}/";

export const defaultGalleryDescription =
  "Images are for personal use only and may not be used commercially; selling prints, advertisements, representing goods and services, and editing/retouching/alterations/manipulations to the images are prohibited. Inquires to request commercial licenses, prints, and personal printing licenses may be sent to thejenniferhaggerty@gmail.com.";

export const galleries: GalleryInterface[] = [
  {
    slug: atmosSlug.replace("{date}", "0126"),
    directory: atmosDirectory.replace("{date}", "0126"),
    title: "Atmosphere, Augusta GA, January 2026",
  },
  {
    slug: "pirateparty1125",
    directory: "/images/galleries/pirate-party-1125/",
    title: "3rd Annual Buccaneer's Ball",
  },
  {
    slug: "2025",
    directory: atmosDirectory.replace("{date}", "2025"),
    title: "Atmosphere, Augusta GA, 2025",
  },
];

export const prices = [
  {
    name: "à la carte",
    options: [
      {
        name: "8in x 10in —x1 print",
        price: 30,
      },
      {
        name: "5in x 7in —x2 prints",
        price: 30,
      },
      {
        name: "2.5in x 3.5in —x4 prints",
        price: 30,
      },
      {
        name: "Light and color correction —per image",
        price: 65,
      },
      {
        name: "Artistic rendering —starts at",
        price: 125,
      },
      {
        name: "Personal printing license —per image",
        price: 175,
      },
    ],
  },
  {
    name: "Le Chat Noir Photo Booth",
    image: "/images/galleries/atmos/2025/atmos09258.jpg",
    time: "8:30pm - 1:30am",
    delivery: "1-3 days",
    price: 25,
    includes: [
      "1 digital image, light and color corrected, sized  for social media. Includes watermark.",
      "Posing and direction.",
    ],
    tips: [
      "There's no obligation to purchase a photo. Come in, we’ll take a few and if you don’t want to keep them they get deleted.",
      "Bring cash for the $10 door fee and tips for the staff and performers.",
    ],
  },
  {
    name: "Fine Art Portraiture",
    image: "/images/safara-1.jpg",
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
    addons: [{ name: "Additional person —limit 3", price: 80 }],
    tips: [
      "Book your professional makeup and hair artist(s) prior to our session for a truly elevated experience!",
      "Get a good night’s rest and drink lots of water before our session.",
      "Eat a filling meal that’s not overly heavy or bloating. Feel free to bring non-messy snacks (carrots, celery, power bars).",
    ],
  },
  {
    name: "Parties and Events",
    image: "/images/galleries/pirate-party-1125/pirateparty11202561.jpg",
    time: "2.5 hours",
    delivery: "2-3 weeks",
    price: 575,
    includes: [
      "All images, light and color corrected, sized for social media. Includes watermark.",
      "1 backdrop/background.",
      "Posing and direction.",
    ],
    addons: [{ name: "Additional hour —limit 2", price: 100 }],
    tips: [
      "Make sure an electrical outlet is available nearby and is free of water, debris, and rust.",
      "If you have furniture and fabrics that fit the vibe you can send me a photo or set them to the side.",
      "Send me the vibes/dress code, I love immersion and will dress to blend in!",
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
  home: "Home",
  pricing: "Pricing",
  sessionTime: "Session time",
  imagesReadyIn: "Images ready in",
  includes: "Includes",
  addons: "Add-ons",
  contact: "Contact",
  prices: "Prices",
  discord: "Discord",
  connect: "Connect with Jennifer on Discord",
  loading: "Loading",
  portfolioHeaderNote:
    "Tattoo and piercing portraiture for clients and their artists.",
  summary: "Summary",
  tips: "Tips",
};

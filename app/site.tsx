import { GalleryInterface } from "./interfaces";
import Link from "next/link";

const atmosSlug = "atmos{date}";
const atmosDirectory = "/images/galleries/atmos/{date}/";

export const settings = {
  name: "Portrait Photography",
  description: "by Jennifer in Augusta, Georgia.",
  note: "Specializing in Gothic Renaissance and the painterly style. Posted monthly on the first Saturday at Le Chat Noir on 8th Street. Available for events and private sessions.",
  email: "thejenniferhaggerty@gmail.com",
  discord: "https://discord.gg/gh9TMHQsdB",
  instagram: "https://www.instagram.com/studiovonjenn/",
  pricelist: "/prices",
  googleTagManagerId: "GTM-KB6ZXVPL",
  googleAnalyticsId: "G-E56J5RYR35",
  copyright: (
    <>
      Copyright © {new Date().getFullYear().toString()} all rights reserved.
      Website designed and developed by{" "}
      <a href="https://jenniferhaggerty.com" target="_blank">
        Jennifer Haggerty
      </a>
      .
    </>
  ),
  defaultFeaturedImage: "/images/jennifer-3.jpg",
  meta: {
    title: "Jennifer Haggerty | Portrait Photographer | Augusta, GA",
    description:
      "Portrait Photographer specializing in fine art dark fantasy with a painter style.",
    keywords: `Portrait Photographer, Portrait Photography, Fine Art Photography, 
      Gothic Art, Alternative Photographer, Editorial Photographer, 
      Event Photographer, Renaissance Photographer, Fantasy Photographer,
      Photo-Booth Photographer, Local Photo-Booth`,
  },
};

export const defaultGalleryDescription = (
  <div className="flex flex-col gap-2">
    <p>
      Ready to share images from{" "}
      <a href="https://www.facebook.com/p/Atmosphere-Augusta-100088686398685/">
        Atmosphere
      </a>
      , Augusta Georgia's premiere dark electronic night hosted by{" "}
      <a href="https://www.instagram.com/lcnaugusta/">Le Chat Noir</a> on the
      first Saturday of the month. Images are for personal use only and may not
      be used commercially; selling prints, advertisements, representing goods
      and services, and editing/retouching/alterations/manipulations to the
      images are prohibited –
      <a href="https://www.instagram.com/studiovonjenn/">Instagram</a> is the
      exception, you may add a filter for personal posting/viewing. Inquires to
      request commercial licenses, prints, and personal printing licenses may be
      sent to{" "}
      <a href={`mailto:${settings.email}`}>thejenniferhaggerty@gmail.com</a>.
    </p>
  </div>
);

export const galleries: GalleryInterface[] = [
  {
    slug: atmosSlug.replace("{date}", "0226"),
    directory: atmosDirectory.replace("{date}", "0226"),
    title: "Atmosphere February 2026",
    featuredImg: "/images/galleries/atmos/0226/atmos02266.jpg",
  },
  {
    slug: atmosSlug.replace("{date}", "0126"),
    directory: atmosDirectory.replace("{date}", "0126"),
    title: "Atmosphere January 2026",
    featuredImg: "/images/galleries/atmos/0126/atmos012610.jpg",
  },
  {
    slug: "pirateparty112025",
    directory: "/images/galleries/pirate-party-1125/",
    title: "Annual Buccaneer's Party",
    featuredImg: "/images/galleries/pirate-party-1125/pirateparty11202537.jpg",
  },
  {
    slug: atmosSlug.replace("{date}", "1125"),
    directory: atmosDirectory.replace("{date}", "1125"),
    title: "Atmosphere November 2025",
    featuredImg: "/images/galleries/atmos/1125/atmos11254.jpg",
  },
  {
    slug: atmosSlug.replace("{date}", "1025"),
    directory: atmosDirectory.replace("{date}", "1025"),
    title: "Atmosphere October 2025",
    featuredImg: "/images/galleries/atmos/1025/atmos10255.jpg",
  },
  {
    slug: atmosSlug.replace("{date}", "0925"),
    directory: atmosDirectory.replace("{date}", "0925"),
    title: "Atmosphere September 2025",
    featuredImg: "/images/galleries/atmos/0925/atmos09258.jpg",
  },
];

export const prices = [
  {
    name: "Le Chat Noir Photo Booth",
    image: "/images/galleries/atmos/0126/atmos012610.jpg",
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
    image: "/images/egan-1.jpg",
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
    image: "/images/galleries/pirate-party-1125/pirateparty11202559.jpg",
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
];

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
  about: "About",
  portfolio: "Portfolio",
  galleries: "Galleries",
};

export const navigation = [
  {
    id: "main",
    customClass: "flex w-full justify-center gap-3",
    items: [
      <a href="/">{strings.portfolio}</a>,
      <a href="/about">{strings.about}</a>,
      <a href="/gallery">{strings.galleries}</a>,
      <a href={settings.pricelist}>{strings.prices}</a>,
      <a href="/contact">{strings.contact}</a>,
    ],
  },
];

export const portfolioImages = [
  {
    src: "/images/birds-1.jpg",
    alt: "A black raven mask with red eyes adorns Jennifer in this Raven in Flight portrait",
  },
  {
    src: "/images/birds-2.jpg",
    alt: "Blood red crystal adorn the white plague doctor mask Jana is wearing in this Gothesque editorial",
  },
  {
    src: "/images/birds-3.jpg",
    alt: "The Raven wearing a black cape and a black plague doctor mask with red eyes.",
  },
  {
    src: "/images/safara-1.jpg",
    alt: "Safara's portrait in a dark realm",
  },
  {
    src: "/images/sarah-2.jpg",
    alt: "A black spiral shell crown sits atop Sarah's head.",
  },
  {
    src: "/images/safara-2.jpg",
    alt: "Safara's portrait in a dark realm with lace.",
  },
  {
    src: "/images/jennifer-3.jpg",
    alt: "Jennifer is the burgundy Queen with an iron crown.",
  },
  {
    src: "/images/jennifer-2.jpg",
    alt: "A lady must always smile is painted in blood above Jennifer's head in this Joker portrait",
  },
  {
    src: "/images/jennifer-1.jpg",
    alt: "Jennifer wears a warm floral crown against her long teal hair, her dress and lips are a bold red",
  },
  {
    src: "/images/winter-queen-1.jpg",
    alt: "Melanie wears a brilliant silver crown of twigs with intense makeup.",
  },
  {
    src: "/images/winter-queen-2.jpg",
    alt: "Melanie is the ice queen with her crown of sparkling twigs and silver corset gown.",
  },
  {
    src: "/images/winter-queen-3.jpg",
    alt: "Her crown and scepter of silver twigs, Melanie stands against a winter backdrop in falling snow",
  },
  {
    src: "/images/tiffany-rae-knight-3.jpg",
    alt: "Portrait of Tiffay featured in Dark Beauty Magazine",
  },
  {
    src: "/images/tiffany-rae-knight-2.jpg",
    alt: "Steampunk portrait of Tiffay in warm tones looking into your eyes",
  },
  {
    src: "/images/tiffany-rae-knight-1.jpg",
    alt: "Victorian portrait of Tiffay in purple holding a mirror",
  },
  {
    src: "/images/rozi-1.jpg",
    alt: "Editorial portrait of Rozi",
  },
  {
    src: "/images/rozi-paige-1.jpg",
    alt: "Editorial portrait of Paige and Rozi together",
  },
  {
    src: "/images/paige-1.jpg",
    alt: "Editorial portrait of Paige",
  },
  {
    src: "/images/demons-1.jpg",
    alt: "Manzin wearing horns against a green background",
  },
  {
    src: "/images/demons-2.jpg",
    alt: "A demon against a red background",
  },
  {
    src: "/images/demons-3.jpg",
    alt: "Manzin as a demon biting a chain",
  },
  {
    src: "/images/egan-3.jpg",
    alt: "Egan wearing black horns, a red heart eye patch, and pentagram top for Gothesque Magazine",
  },
  {
    src: "/images/egan-2.jpg",
    alt: "gan is wearing ram horns and a white dress personifying Aries in this Gothesque editorial portrait",
  },
  {
    src: "/images/egan-1.jpg",
    alt: "Statuesque beauty",
  },
];

export const cv = [
  {
    title: <h3 className="h2 text-4xl!">{strings.summary}</h3>,
    content: (
      <p>
        Jennifer has been obsessed with light, color, and painting since 1997.
        She began photographing portraits in 2003. When she's not at the
        computer she's working on something creative or is out in the garden
        with her partner and their dogs.
      </p>
    ),
  },
  {
    title: <h3 className="h2 text-4xl!">Publications</h3>,
    content: (
      <ul>
        <li>
          <a target="_blank" href="https://gothesquemagazine.com/">
            Gothesque Magazine
          </a>{" "}
          issue #88 Augusta, GA 2020
        </li>
        <li>Gothesque Magazine August issue Austin, TX 2016</li>
        <li>
          <a target="_blank" href="https://tenebrousmag.com/">
            Tenebrous Mag
          </a>{" "}
          issue #8 New York, NY 2014
        </li>
        <li>
          <a target="_blank" href="https://beautifulbizarre.net/">
            Beautiful Bizarre Magazine
          </a>{" "}
          New York, NY 2014
        </li>
        <li>BadSkin Magazine New York, NY 2014</li>
        <li>Gothesque Magazine issue #11 (cover) New York, NY 2014</li>
        <li>Gothesque Magazine issue #10 New York, NY 2014</li>
        <li>Gothesque Magazine issue #9 New York, NY 2014</li>
        <li>Freque Magazine Vol 5 Part 1 New York, NY 2014</li>
        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/darkbeautymag/?hl=en"
          >
            Dark Beauty Magazine
          </a>{" "}
          issue #24 New York, NY 2013
        </li>
        <li>Tenebrous Mag issue #1 New York, NY 2013</li>
        <li>Strange Beauty Magazine premier issue New York, NY 2013</li>
        <li>Dark Beauty Magazine issue #19 New York, NY 2013</li>
        <li>
          <a target="_blank" href="https://www.pfmagazine.net/">
            Photographer’s Forum Magazine
          </a>{" "}
          Columbia, SC 2011
        </li>
      </ul>
    ),
  },
  {
    title: <h3 className="h2 text-4xl!">Shows &amp; Exhibits</h3>,
    content: (
      <ul>
        <li>Art & Soul Gallery in Aiken, South Carolina, 2022-2023</li>
        <li>Meadowlands Museum in Rutherford, New Jersey, 2013</li>
        <li>
          <a target="_blank" href="https://www.cityartonline.com/">
            City Art
          </a>{" "}
          in Columbia, South Carolina, 2012
        </li>
      </ul>
    ),
  },
  {
    title: <h3 className="h2 text-4xl!">Education</h3>,
    content: (
      <ul>
        <li>Augusta Technical College, AAS Computer Programming 2021</li>
        <li>University of South Carolina, BA Studio Arts 2012</li>
      </ul>
    ),
  },
  {
    title: <h3 className="h2 text-4xl!">Events</h3>,
    content: (
      <ul>
        {galleries.map((gallery) => (
          <li key={gallery.slug}>
            <Link rel="internal" href={`/gallery/${gallery.slug}`}>
              {gallery.title}
            </Link>
          </li>
        ))}
        <li>Hero's Con, Charlotte NC, 2018</li>
        <li>Steampunk World's Fair, Piscataway NJ, 2016</li>
        <li>Steampunk World's Fair, Piscataway NJ, 2015</li>
      </ul>
    ),
  },
];

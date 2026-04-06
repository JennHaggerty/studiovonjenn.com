import { Metadata } from "next";

import { portfolioImages, settings } from "./site/site";
import HeaderElement from "./components/header";

export const metadata: Metadata = {
  title: settings.meta.title,
  description: settings.meta.description,
  keywords: settings.meta.keywords,
};

export default function Home() {
  return (
    <>
      <HeaderElement />
      <div className="p-[2em] primary-bg">
        <div className=" max-w-[var(--max-width)] center">
          {settings.description + " " + settings.note}
        </div>
      </div>
      <div className="portfolio">
        {portfolioImages.map((image, i) => (
          <img key={`portfolio-image-${i}`} src={image.src} alt={image.alt} />
        ))}
      </div>
    </>
  );
}

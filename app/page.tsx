import { Metadata } from "next";

import { cv, portfolioImages, settings, strings } from "./site";
import Nav from "./components/nav";

export const metadata: Metadata = {
  title: settings.name,
  description: settings.description,
};

export default function Home() {
  return (
    <>
      <div className="header p-2!">
        <div className="outline m-auto!">
          <h1>{settings.name}</h1>
          <h2>{settings.description}</h2>
          <p className="note mb-3">{settings.note}</p>
        </div>
      </div>
      <Nav
        customClass="flex! mb-2 align-center justify-center gap-5"
        id="main"
      />
      <div className="portfolio">
        {portfolioImages.map((image, i) => (
          <img key={`portfolio-image-${i}`} src={image.src} alt={image.alt} />
        ))}
      </div>
      <div className="primary-bg">
        <div className="col-2-img-right">
          <div className="col col-text flex flex-col gap-2">
            {cv.map((item, i) => (
              <div key={`cv-item-${i}`}>
                {item.title}
                {item.content}
              </div>
            ))}
          </div>
          <div className="col col-image">
            <img src={`/images/ophelia-1.jpg`} alt="Ophelia in the waters" />
          </div>
        </div>
      </div>
    </>
  );
}

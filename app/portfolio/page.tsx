"use client";

import Link from "next/link";
import { settings, strings } from "../cms";
import PortfolioGallery from "../components/portfolioGallery";

const TattooGallery = () => {
  return (
    <div>
      <div className="introduction">
        <div className="smoke-background max-xl:justify-center w-full">
          <div className="center">
            <div className="outline">
              <Link href={`/`}>{strings.home}</Link>
              <h1>{settings.name}</h1>
              <h2>{settings.description}</h2>
              <p className="note">{strings.portfolioHeaderNote}</p>
            </div>
          </div>
        </div>
      </div>
      <PortfolioGallery />
    </div>
  );
};

export default TattooGallery;

"use client";

import { Suspense, useState } from "react";
import HomepageGallery from "./homepageGallery";
import HomepageHeader from "./homepageHeader";
import Loading from "./loading";
import GalleryPage from "./Gallery/galleryPage";
import PublicationsList from "./publicationsList";
import ExhibitList from "./exhibitsList";
import EducationList from "./educationList";

interface GalleryInterface {
  directory: string;
  title: string;
  description?: string;
}

const atmosDir = "/galleries/atmos/{date}/";
const atmosDesc =
  "Images from the monthly event available for client use on mobile devices, websites, and social networks for personal, non-commercial, use only. Alterations are prohibited.";
const atmos1025 = atmosDir.replace("{date}", "1025");

export default function Homepage() {
  const [activeGallery, setActiveGallery] = useState<GalleryInterface>();
  const [galleries, setGalleries] = useState<GalleryInterface[]>();
  const [showGallery, setShowGallery] = useState<boolean>();

  const handleGalleryPageLinkClick = (directory: string) => {
    if (!galleries) return;

    const target = galleries.find((gallery) => gallery.directory === directory);

    setActiveGallery(target);
    setShowGallery(true);
  };

  return (
    <Suspense fallback={<Loading />}>
      {activeGallery ? (
        <GalleryPage
          directory={activeGallery.directory}
          title={activeGallery.title}
          description={activeGallery.description}
        />
      ) : (
        <>
          <HomepageHeader />
          <HomepageGallery />
          <div className="cv">
            <PublicationsList />
            <ExhibitList />
            <EducationList />
            <div>
              <h2>Events</h2>
              <ul>
                <li>
                  <a href="/galleries/atmos/1025/index">
                    Atmosphere October 2025
                  </a>
                  , Augusta, GA 2025.
                </li>
                <li>
                  <a href="/galleries/atmos/0925/index">
                    Atmosphere September 2025
                  </a>
                  , Augusta, GA 2025.
                </li>
                <li>Hero's Con, Charlotte NC, 2018</li>
                <li>Steampunk World's Fair, Piscataway NJ, 2016</li>
                <li>Steampunk World's Fair, Piscataway NJ, 2015</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </Suspense>
  );
}

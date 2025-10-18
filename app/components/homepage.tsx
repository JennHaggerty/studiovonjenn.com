"use client";

import { Suspense, useEffect, useState } from "react";
import HomepageGallery from "./homepageGallery";
import HomepageHeader from "./homepageHeader";
import Loading from "./loading";
import GalleryPage from "./Gallery/galleryPage";
import PublicationsList from "./publicationsList";
import ExhibitList from "./exhibitsList";
import EducationList from "./educationList";
import { scrollToTop } from "../functions";

interface GalleryInterface {
  directory: string;
  title: string;
  description?: string;
  onCloseText?: string;
}

const atmosDirextory = "/galleries/atmos/{date}/";
const atmosDescriptionText =
  "Images from the monthly event available for client use on mobile devices, websites, and social networks for personal, non-commercial, use only. Alterations are prohibited.";
const atmosOnCloseText = "Return to index";

const galleries: GalleryInterface[] = [
  {
    directory: atmosDirextory.replace("{date}", "1025"),
    title: "Atmosphere October 2025",
    description: atmosDescriptionText,
    onCloseText: atmosOnCloseText,
  },
  {
    directory: atmosDirextory.replace("{date}", "0925"),
    title: "Atmosphere September 2025",
    description: atmosDescriptionText,
    onCloseText: atmosOnCloseText,
  },
];

export default function Homepage() {
  const [activeGallery, setActiveGallery] = useState<GalleryInterface>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const handleGalleryPageLinkClick = (directory: string) => {
    if (!galleries) return;

    const target = galleries.find((gallery) => gallery.directory === directory);
    setActiveGallery(target);
  };

  const closeActiveGallery = () => {
    setActiveGallery(undefined);
    scrollToTop();
  };

  return (
    <>
      {activeGallery ? (
        loading ? (
          <Loading text="Loading gallery page" />
        ) : (
          <GalleryPage
            directory={activeGallery.directory}
            title={activeGallery.title}
            description={activeGallery.description}
            onClose={closeActiveGallery}
            onCloseText={activeGallery.onCloseText}
          />
        )
      ) : (
        <>
          <HomepageHeader />
          {loading ? (
            <Loading text="Loading home page" />
          ) : (
            <>
              <HomepageGallery />
              <div className="cv">
                <PublicationsList />
                <ExhibitList />
                <EducationList />
                <div>
                  <h2>Events</h2>
                  <ul>
                    {galleries.map((gallery) => (
                      <li key={gallery.directory}>
                        <button
                          className="a"
                          type="button"
                          onClick={() =>
                            handleGalleryPageLinkClick(gallery.directory)
                          }
                        >
                          {gallery.title}
                        </button>
                      </li>
                    ))}
                    <li>Hero's Con, Charlotte NC, 2018</li>
                    <li>Steampunk World's Fair, Piscataway NJ, 2016</li>
                    <li>Steampunk World's Fair, Piscataway NJ, 2015</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

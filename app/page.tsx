"use client";

import { useState } from "react";
import { galleries } from "./cms";
import About from "./components/about";
import EducationList from "./components/educationList";
import EventList from "./components/eventList";
import ExhibitList from "./components/exhibitsList";
import GalleryPage from "./components/galleryPage";
import HomepageGallery from "./components/homepageGallery";
import HomepageHeader from "./components/homepageHeader";
import PublicationsList from "./components/publicationsList";
import { GalleryInterface } from "./interfaces";

export default function Home() {
  const [activeGallery, setActiveGallery] = useState<GalleryInterface>();

  const handleGalleryPageLinkClick = (directory: string) => {
    if (!galleries) return;

    const target = galleries.find((gallery) => gallery.directory === directory);
    setActiveGallery(target);
  };

  const closeActiveGallery = () => {
    setActiveGallery(undefined);
  };

  return (
    <>
      {activeGallery ? (
        <GalleryPage
          directory={activeGallery.directory}
          title={activeGallery.title}
          description={activeGallery.description}
          onClose={closeActiveGallery}
          onCloseText={activeGallery.onCloseText}
        />
      ) : (
        <>
          <HomepageHeader />
          <HomepageGallery />
          <div className="primary-bg">
            <div className="col-2-img-right">
              <div className="col col-text">
                <About />
                <PublicationsList />
                <ExhibitList />
                <EducationList />
                <EventList onClick={handleGalleryPageLinkClick} />
              </div>
              <div className="col col-image">
                <img
                  src={`/images/ophelia-1.jpg`}
                  alt="Ophelia in the waters"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import HomepageGallery from "./homepageGallery";
import HomepageHeader from "./homepageHeader";
import GalleryPage from "./galleryPage";
import PublicationsList from "./publicationsList";
import ExhibitList from "./exhibitsList";
import EducationList from "./educationList";
import { GalleryInterface } from "../interfaces";
import { galleries } from "../cms";
import EventList from "./eventList";
import AdminDashboard from "./adminDashboard";

export default function Homepage() {
  const [activeGallery, setActiveGallery] = useState<GalleryInterface>();
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const env = process.env.NODE_ENV;
  const isAdmin = env !== "production";

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
      {isAdmin && (
        <div className="sitewide-banner">
          {showPreview ? (
            <button onClick={() => setShowPreview(!showPreview)}>
              Show admin dashboard
            </button>
          ) : (
            <>
              <button onClick={() => setShowPreview(!showPreview)}>
                Show live view
              </button>
            </>
          )}
        </div>
      )}
      {isAdmin && !showPreview ? (
        <AdminDashboard />
      ) : activeGallery ? (
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
          <div className="cv">
            <PublicationsList />
            <ExhibitList />
            <EducationList />
            <EventList onClick={handleGalleryPageLinkClick} />
          </div>
        </>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import HomepageGallery from "./homepageGallery";
import HomepageHeader from "./homepageHeader";
import GalleryPage from "./galleryPage";
import PublicationsList from "./publicationsList";
import ExhibitList from "./exhibitsList";
import EducationList from "./educationList";
import { scrollToTop } from "../functions";
import { GalleryInterface } from "../interfaces";
import { galleries } from "../cms";
import EventList from "./eventList";
import AdminDashboard from "./adminDashboard";

export default function Homepage() {
  const [activeGallery, setActiveGallery] = useState<GalleryInterface>();

  const env = process.env.NODE_ENV;
  const isAdmin = env !== "production";

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
      {isAdmin ? (
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

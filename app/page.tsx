import { galleries, settings } from "./cms";
import { Metadata } from "next";
import About from "./components/about";
import EducationList from "./components/educationList";
import EventList from "./components/eventList";
import ExhibitList from "./components/exhibitsList";
import HomepageGallery from "./components/homepageGallery";
import HomepageHeader from "./components/homepageHeader";
import PublicationsList from "./components/publicationsList";

export const metadata: Metadata = {
  title: settings.name,
  description: settings.description,
};

export default function Home() {
  const handleGalleryPageLinkClick = (slug: string) => {
    if (!galleries) return;

    const target = galleries.find((gallery) => gallery.slug === slug);
    console.log(target);
  };

  return (
    <main>
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
            <img src={`/images/ophelia-1.jpg`} alt="Ophelia in the waters" />
          </div>
        </div>
      </div>
    </main>
  );
}

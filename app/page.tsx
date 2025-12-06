import { Metadata } from "next";

import { settings } from "./cms";

import EducationList from "./components/lists/educationList";
import EventList from "./components/lists/eventList";
import ExhibitList from "./components/lists/exhibitsList";
import HomepageGallery from "./components/homepageComponents/homepageGallery";
import HomepageHeader from "./components/homepageComponents/homepageHeader";
import PublicationsList from "./components/lists/publicationsList";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: settings.name,
  description: settings.description,
};

export default function Home() {
  return (
    <main>
      <HomepageHeader />
      <HomepageGallery />
      <div className="primary-bg">
        <div className="col-2-img-right">
          <div className="col col-text">
            <div>
              <h3>Summary</h3>
              <p>
                Jennifer has been obsessed with light, color, and painting since
                1997. She began photographying portraits in 2003. When she's not
                at the computer she's working on something creative or is out in
                the garden with her partner and their dogs.
              </p>
            </div>
            <PublicationsList />
            <ExhibitList />
            <EducationList />
            <EventList />
          </div>
          <div className="col col-image">
            <img src={`/images/ophelia-1.jpg`} alt="Ophelia in the waters" />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

import { Metadata } from "next";

import { settings, strings } from "./cms";

import EducationList from "./components/lists/EducationList";
import EventList from "./components/lists/EventList";
import ExhibitList from "./components/lists/ExhibitsList";
import HomepageGallery from "./components/HomepageGallery";
import PublicationsList from "./components/lists/PublicationsList";
import Footer from "./components/Footer";
import SocialLinks from "./components/lists/SocialLinksList";

export const metadata: Metadata = {
  title: settings.name,
  description: settings.description,
};

export default function Home() {
  return (
    <main>
      <section className="introduction">
        <div
          className="smoke-background relative overflow-hidden 
      flex max-xl:justify-center min-xl:flex-row w-full"
        >
          <div className="header xl:min-w-1/2 xl:my-auto">
            <div className="outline">
              <h1>{settings.name}</h1>
              <h2>{settings.description}</h2>
              <p className="note mb-5">{settings.note}</p>
              <SocialLinks />
            </div>
          </div>
          <div className="cover-image max-xl:hidden faded">
            <img
              className=""
              src="/images/jennifer.jpg"
              alt="Self portrait as Morticia Addams drinking tea."
            />
          </div>
        </div>
      </section>
      <HomepageGallery />
      <div className="primary-bg">
        <div className="col-2-img-right">
          <div className="col col-text flex flex-col gap-2">
            <div>
              <h3>{strings.summary}</h3>
              <p>
                Jennifer has been obsessed with light, color, and painting since
                1997. She began photographing portraits in 2003. When she's not
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

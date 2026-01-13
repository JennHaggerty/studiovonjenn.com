import { Metadata } from "next";

import { settings, strings } from "./site";

import EducationList from "@/app/components/lists/educationList";
import EventList from "@/app/components/lists/eventList";
import ExhibitList from "@/app/components/lists/exhibitsList";
import HomepageGallery from "@/app/components/homepageGallery";
import PublicationsList from "@/app/components/lists/publicationsList";
import SocialLinks from "@/app/components/lists/socialLinksList";

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
    </main>
  );
}

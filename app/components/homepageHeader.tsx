import { siteSettings } from "../cms";
import SocialLinks from "./socialLinks";

const HomepageHeader = () => {
  return (
    <section className="introduction">
      <div className="smoke-background relative overflow-hidden flex max-lg:justify-center min-lg:flex-row w-full">
        <div className="header lg:min-w-1/2 lg:my-auto">
          <div className="outline">
            <h1>{siteSettings.name}</h1>
            <h2>{siteSettings.description}</h2>
            <p className="note">{siteSettings.note}</p>
            <SocialLinks />
          </div>
        </div>
        <div className="cover-image max-lg:hidden faded">
          <img
            className=""
            src="/images/jennifer.jpg"
            alt="Self portrait as Morticia Addams drinking tea."
          />
        </div>
      </div>
    </section>
  );
};

export default HomepageHeader;

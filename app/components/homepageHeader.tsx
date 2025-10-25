import { siteSettings } from "../cms";
import SocialLinks from "./socialLinks";

const HomepageHeader = () => {
  return (
    <section className="introduction">
      <div className="header">
        <div className="outline">
          <h1>{siteSettings.name}</h1>
          <h2>{siteSettings.description}</h2>
          <p className="note">{siteSettings.note}</p>
          <SocialLinks />
        </div>
      </div>
      <img
        src="/images/jennifer.jpg"
        alt="Self portrait as Morticia Addams drinking tea."
      />
    </section>
  );
};

export default HomepageHeader;

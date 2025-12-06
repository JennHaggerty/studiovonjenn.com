import { settings } from "../../cms";
import SocialLinks from "../lists/socialLinksList";

const HomepageHeader = () => {
  return (
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
  );
};

export default HomepageHeader;

import { site } from "../cms";
import SocialLinks from "./socialLinks";
import AddFriendIcon from "./svgs/addFriendIcon";
import AmpersandIcon from "./svgs/ampersandIcon";

const HomepageHeader = () => {
  return (
    <section className="introduction">
      <div className="header">
        <div className="outline">
          <h1>{site.name}</h1>
          <h2>{site.description}</h2>
          <p className="note">{site.note}</p>
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

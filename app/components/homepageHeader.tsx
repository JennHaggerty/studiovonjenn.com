import { siteSettings } from "../cms";
import AddFriendIcon from "./svgs/addFriendIcon";
import AmpersandIcon from "./svgs/ampersandIcon";

const HomepageHeader = () => {
  return (
    <section className="introduction">
      <div className="header">
        <div className="outline">
          <h1 className="site-title">{siteSettings.name}</h1>
          <h2>{siteSettings.description}</h2>
          <p className="note">{siteSettings.note}</p>
          <ul>
            <li>
              <a href={siteSettings.email} aria-label="Email Jennifer">
                <AmpersandIcon />
              </a>
            </li>
            <li>
              <a
                href={siteSettings.social}
                target="_blank"
                aria-label="Connect with Jennifer"
              >
                <AddFriendIcon />
              </a>
            </li>
          </ul>
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

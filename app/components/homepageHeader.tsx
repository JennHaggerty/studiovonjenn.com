import { site } from "../cms";
import AddFriendIcon from "./svgs/addFriendIcon";
import AmpersandIcon from "./svgs/ampersandIcon";

const HomepageHeader = () => {
  return (
    <section className="introduction">
      <div className="header">
        <div className="outline">
          <h1 className="site-title">{site.name}</h1>
          <h2>{site.description}</h2>
          <p className="note">{site.note}</p>
          <ul>
            <li>
              <a href={site.email} aria-label="Email Jennifer">
                <AmpersandIcon />
              </a>
            </li>
            <li>
              <a
                href={site.social}
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

import { settings } from "../site/site";
import Nav from "./nav";

const Footer = () => {
  return (
    <footer className="outline">
      <div className="flex flex-col md:flex-row w-full space-between max-w-[var(--max-width)] mx-auto gap-5 py-[2em]">
        <div className="w-full md:w-3/4 md:text-left m-auto md:mt-0">
          <h3 className="">{settings.siteName}</h3>
          <p>{settings.description}</p>
        </div>
        <div className="w-full md:w-1/4 mx-auto">
          <h3 className="mb-2">Menu</h3>
          <Nav id="main" customClass="flex flex-col gap-3" />
        </div>
        <div className="w-full md:w-1/4 mx-auto">
          <h3 className="mb-2">Connect</h3>
          <Nav id="socials" customClass="flex flex-col gap-3" />
        </div>
      </div>
      <p className="mt-2">{settings.copyright}</p>
    </footer>
  );
};

export default Footer;

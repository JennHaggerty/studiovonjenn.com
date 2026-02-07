import { settings } from "../site";
import Nav from "./nav";

const Footer = () => {
  const copyrightText = settings.copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  return (
    <footer>
      <div className="flex flex-col md:flex-row w-full space-between max-w-[1200px] m-auto mt-5 gap-5 pl-3! lg:p-0">
        <div className="w-full md:w-3/4 md:text-left m-auto md:mt-0">
          <h3 className="md:text-[2.5rem]!">{settings.name}</h3>
          <p className="mt-2">{copyrightText}</p>
        </div>
        <div className="w-full md:w-1/4 m-auto">
          <h3 className="mb-2">Menu</h3>
          <Nav id="main" customClass="flex flex-col gap-3" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { settings } from "../site";
import Nav from "./nav";

const Footer = () => {
  const copyrightText = settings.copyright.replace(
    "{year}",
    new Date().getFullYear().toString(),
  );

  return (
    <footer>
      <Nav />
      <p className="mt-2">{copyrightText}</p>
    </footer>
  );
};

export default Footer;

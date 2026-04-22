import { settings } from "../site/site";
import Nav from "./nav";

interface Props {
  title?: string;
}

const HeaderElement = (props: Props) => {
  const { title } = props;

  return (
    <div className="header">
      <div className="outline w-full">
        <div className="flex flex-col m-auto align-middle gap-3">
          <h1 className="">{settings.siteName}</h1>
          <Nav customClass="flex gap-5 m-auto align-middle" id="main" />
          <a
            href={`mailto:${settings.email}`}
            className="capitalize p-3 w-full bg-[var(--accent-000)] hover:text-black! rounded-sm hover:bg-[var(--accent-100)] text-white!"
          >
            Book your portrait
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderElement;

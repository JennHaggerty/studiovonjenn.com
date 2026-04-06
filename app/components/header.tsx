import { settings } from "../site/site";
import Nav from "./nav";

interface Props {
  title?: string;
}

const HeaderElement = (props: Props) => {
  const { title } = props;

  return (
    <div className="header">
      <div className="outline w-full flex justify-between max-md:flex-col">
        <div className="flex align-middle gap-3 max-sm:flex-col">
          <h1 className="">{settings.siteName}</h1>
          <Nav customClass="flex gap-5 m-auto align-middle" id="main" />
        </div>
        <div className="flex gap-3 my-auto">
          {title && <h2 className="bold">{title}</h2>}
          <a
            href={`mailto:${settings.email}`}
            className="p-3 bg-[var(--primary-100)] text-[var(--primary-200)]! rounded-sm hover:bg-[var(--primary-000)] hover:text-white!"
          >
            Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderElement;

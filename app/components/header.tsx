import Link from "next/link";
import { settings } from "../site/site";
import Nav from "./nav";

interface Props {
  title: string;
}

const HeaderElement = (props: Props) => {
  const { title } = props;

  return (
    <div className="header">
      <div className="outline w-full">
        <div className="max-w-[1500px] grid grid-col-1 lg:grid-cols-3 items-center mx-auto">
          <div className="max-md:hidden lg:text-left text-xl">
            <Link href={"/"} className="text-white!">
              {settings.siteName}
            </Link>
          </div>
          <div>
            <h1>{title}</h1>
          </div>
          <Nav
            id="main"
            customClass="flex flex-row gap-5 justify-center lg:justify-end"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderElement;

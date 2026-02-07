import { strings } from "../site";
import Nav from "./nav";

interface Props {
  title: string;
}

const HeaderElement = (props: Props) => {
  const { title } = props;

  return (
    <div className="header">
      <div className="outline mx-auto!">
        <h1>{title}</h1>
      </div>
      <div className="mb-2 mx-auto">
        <Nav id="main" customClass="flex flex-row gap-5" />
      </div>
    </div>
  );
};

export default HeaderElement;

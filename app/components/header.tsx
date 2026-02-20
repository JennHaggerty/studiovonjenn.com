import Nav from "./nav";

interface Props {
  title: string;
}

const HeaderElement = (props: Props) => {
  const { title } = props;

  return (
    <div className="header p-2">
      <div className="outline mx-auto! w-full">
        <h1>{title}</h1>
        <div className="mb-2 mx-auto!">
          <Nav id="main" customClass="flex flex-row gap-5 justify-center" />
        </div>
      </div>
    </div>
  );
};

export default HeaderElement;

import { navigation } from "../site/site";

interface Props {
  id: string;
  customClass?: string;
}

const Nav = (props: Props) => {
  const { id, customClass } = props;

  const menu = navigation.find((i) => i.id === id);

  if (!menu) return;

  const concatCss = menu.customClass
    ? menu.customClass + customClass
      ? ` ${customClass}`
      : ""
    : "";

  return (
    <nav className="content-center m-auto max-sm:pb-[10px]">
      <ul className={`${concatCss}`}>
        {menu.items.map((item, i) => (
          <li key={`main-nav-${i}`}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

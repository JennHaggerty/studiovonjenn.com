import { navigation } from "../site";

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
    <nav>
      <ul className={`${concatCss}`}>
        {menu.items.map((item, i) => (
          <li key={`main-nav-${i}`}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

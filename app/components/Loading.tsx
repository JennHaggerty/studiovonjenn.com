import { strings } from "../site/site";

interface Props {
  text?: string;
  customClass?: string;
}

const Loading = (props: Props) => {
  const { text, customClass } = props;

  return (
    <div className={`loader ${customClass}`}>
      {text ? text : strings.loading}
    </div>
  );
};

export default Loading;

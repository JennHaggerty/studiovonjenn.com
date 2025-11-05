interface Props {
  text?: string;
}
const Loading = (props: Props) => {
  const { text } = props;

  return <div className="loader outline main">{text ? text : "Loading"}</div>;
};

export default Loading;

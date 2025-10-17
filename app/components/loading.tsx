interface Props {
  text?: string;
}
const Loading = (props: Props) => {
  const { text } = props;

  return <div className="loader outline main">{text}</div>;
};

export default Loading;

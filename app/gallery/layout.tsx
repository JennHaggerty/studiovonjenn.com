export default function Layout(props: LayoutProps<"/">) {
  return (
    <div className=" max-w-[1200px] m-auto">
      <div className="gallery-page">{props.children}</div>
    </div>
  );
}

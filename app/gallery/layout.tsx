export default function Layout(props: LayoutProps<"/">) {
  return (
    <div className="w-full">
      <div className="gallery-page">{props.children}</div>
    </div>
  );
}

import Footer from "../components/footer";

export default function Layout(props: LayoutProps<"/">) {
  return (
    <div className="flex flex-col justify-between h-screen max-w-[1200px] m-auto">
      <div className="gallery-page">{props.children}</div>
      <Footer />
    </div>
  );
}

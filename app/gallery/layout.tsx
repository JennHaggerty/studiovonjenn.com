import Footer from "../components/footer";

export default function Layout(props: LayoutProps<"/">) {
  return (
    <section className="flex flex-col justify-between h-screen max-w-[1200px]">
      <div className="gallery-page">{props.children}</div>
      <Footer />
    </section>
  );
}

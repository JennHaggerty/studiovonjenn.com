import Footer from "../components/footer";

export default function Layout(props: LayoutProps<"/gallery">) {
  return (
    <section>
      {props.children}
      {/* If you have app/dashboard/@analytics, it appears as a typed slot: */}
      {/* {props.analytics} */}
      <Footer />
    </section>
  );
}

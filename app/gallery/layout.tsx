import Link from "next/link";
import Footer from "../components/footer";

export default function Layout(props: LayoutProps<"/gallery">) {
  return (
    <section>
      <div className="w-full text-center">
        <Link href={`/`}>Home</Link>
      </div>
      <div className="main gallery-page">{props.children}</div>
      <Footer />
    </section>
  );
}

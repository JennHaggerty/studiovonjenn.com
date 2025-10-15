import HomepageHeader from "./components/homepageHeader";
import Footer from "./components/footer";
import HomepageGallery from "./components/homepageGallery";

export default function Home() {
  return (
    <>
      <main>
        <HomepageHeader />
        <HomepageGallery />
      </main>
      <Footer />
    </>
  );
}

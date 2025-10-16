"use client";

import HomepageHeader from "./components/homepageHeader";
import Footer from "./components/footer";
import HomepageGallery from "./components/homepageGallery";
import HomepagegCV from "./components/homepageCV";

import { useState } from "react";

export default function Home() {
  const [showGallery, setShowGallery] = useState<boolean>();

  return (
    <>
      <main>
        {!showGallery && (
          <>
            <HomepageHeader />
            <HomepageGallery />
            <HomepagegCV />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

import { settings, strings, galleries } from "../site/site";
import HeaderElement from "../components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fine Art Portraiture Galleries | 30901",
  description:
    "Collections and galleries of fine art photography and studio artworks.",
  alternates: {
    canonical: settings.domain + "/gallery",
  },
};

export default async function Page() {
  const items = galleries;
  return (
    <>
      <HeaderElement title={strings.galleries} />
      <div className="mx-auto">
        <div className="p-[2em] primary-bg">
          <div className=" max-w-[var(--max-width)] center">
            <h2>Galleries</h2>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <a
              key={`galleries-${i}`}
              href={`/gallery/${item.slug}`}
              className="relative border-1"
            >
              <div className="bg-[var(--black-000)] absolute z-1 w-full p-2 text-center">
                <span className="text-lg">{item.title}</span>
              </div>
              <img
                alt=" "
                className="object-cover h-screen w-full grayscale hover:grayscale-0 duration-300 ease-in-out"
                src={item.featuredImg || settings.defaultFeaturedImage}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

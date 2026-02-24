import { settings, strings } from "../site/site";
import { posts } from "../site/blog";
import HeaderElement from "../components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: settings.siteName + " | Blog ",
  description:
    "Collections and galleries of fine art photography and studio artworks.",
};

export default async function Page() {
  const items = posts;
  return (
    <>
      <HeaderElement title={strings.blog} />
      <div className=" max-w-[var(--max-width)] mx-auto">
        <div className="w-full grid grid-cols-2 md:grid-cols-3">
          {!items.length ? (
            <div className="p-8 my-20">No posts yet. Check back soon!</div>
          ) : (
            items.map((item, i) => (
              <a
                key={`posts-${i}`}
                href={`/blog/${item.slug}`}
                className="relative border-1"
              >
                <div className="bg-[var(--black-000)] absolute z-1 w-full p-2 text-center">
                  <span className="text-lg">{item.title}</span>
                </div>
                <img
                  alt=""
                  className="object-cover h-screen w-full grayscale hover:grayscale-0 duration-300 ease-in-out"
                  src={item.featuredImg || settings.defaultFeaturedImage}
                />
              </a>
            ))
          )}
        </div>
      </div>
    </>
  );
}

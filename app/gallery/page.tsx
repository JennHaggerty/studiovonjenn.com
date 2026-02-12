import { settings, strings } from "../site";
import HeaderElement from "../components/header";
import { galleries } from "@/app/site";

export default async function Page() {
  const items = galleries;
  return (
    <>
      <HeaderElement title={strings.galleries} />
      <div className=" max-w-[var(--max-width)] mx-auto">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <a
              key={`galleries-${i}`}
              href={`/gallery/${item.slug}`}
              className="relative border-1"
            >
              <img
                alt=""
                className="object-cover h-full w-full grayscale hover:grayscale-0 duration-300 ease-in-out"
                src={item.featuredImg || settings.defaultFeaturedImage}
              />

              <div className="bg-[var(--black-000)] absolute bottom-0 w-full p-2 text-center">
                <span className="text-lg">{item.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

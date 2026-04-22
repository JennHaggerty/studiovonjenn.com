import { customStringSort, getGallery } from "@/app/functions";
import {
  defaultGalleryDescription,
  galleries,
  settings,
} from "@/app/site/site";
import { promises as fs } from "fs";
import path from "path";
import HeaderElement from "@/app/components/header";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;

  // fetch post information
  const gallery = await getGallery(slug);

  return {
    title: gallery ? gallery.title : "Gallery",
    description: gallery ? gallery.description : " ",
    alternates: {
      canonical: new URL(slug, settings.domain),
    },
  };
}

export async function generateStaticParams() {
  return galleries.map((gallery) => ({
    slug: gallery.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const gallery = await getGallery(slug);

  if (!gallery) return;

  const directory = path.join(process.cwd(), "public", gallery.directory);
  const dirents = await fs.readdir(directory, { withFileTypes: true });
  const files = dirents
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);
  const sortedFiles = files.sort(customStringSort);
  const images = sortedFiles.map((fileName: string) => {
    return { src: gallery.directory + fileName, alt: "" };
  });

  return (
    <div>
      <div className="gallery-page">
        <HeaderElement
          title={gallery.title ? gallery.title : "Photo Gallery"}
        />
        <div className="p-[2em] primary-bg">
          <div className="text-center">
            <h2>Welcome to the Gallery</h2>
          </div>
          <div className=" max-w-[var(--max-width)] m-auto">
            {gallery.description
              ? gallery.description
              : defaultGalleryDescription}
          </div>
        </div>

        <div className="bg-[var(--black-000)]">
          <div className="m-auto gallery py-[2em]">
            {images.map((image, i) => (
              <img
                key={`${gallery.slug}-${i}`}
                src={image.src}
                alt={image.alt ? image.alt : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

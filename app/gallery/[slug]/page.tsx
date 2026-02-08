import { customStringSort, getGallery } from "@/app/functions";
import { defaultGalleryDescription, galleries } from "@/app/site";
import { promises as fs } from "fs";
import path from "path";
import HeaderElement from "@/app/components/header";

export async function generateStaticParams() {
  return galleries.map((gallery) => ({
    slug: gallery.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
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
          <div className=" max-w-[1200px] m-auto">
            {gallery.description
              ? gallery.description
              : defaultGalleryDescription}
          </div>
        </div>

        <div className="bg-[var(--black-000)]">
          <div className="max-w-[1200px] m-auto gallery py-[2em]">
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

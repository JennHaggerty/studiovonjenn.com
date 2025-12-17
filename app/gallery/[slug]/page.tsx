import { customStringSort, getGallery } from "@/app/functions";
import { defaultGalleryDescription, galleries } from "../../cms";
import { promises as fs } from "fs";
import path from "path";

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
    <>
      <div className="header">
        <div className="outline mx-auto!">
          <h1>{gallery.title ? gallery.title : "Photo Gallery"}</h1>
          <p className="text-left">
            {gallery.description
              ? gallery.description
              : defaultGalleryDescription}
          </p>
        </div>
      </div>

      <div className="gallery">
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt ? image.alt : ""}
          />
        ))}
      </div>
    </>
  );
}

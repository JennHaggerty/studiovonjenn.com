import type { MetadataRoute } from "next";
import { galleries } from "../../app/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return galleries.map((item) => ({
    url: `/gallery/${item.slug}`,
    lastModified: new Date(),
  }));
}

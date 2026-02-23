import type { MetadataRoute } from "next";
import { posts } from "../site/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return posts.map((item) => ({
    url: `${process.env["HOST"]}/blog/${item.slug}`,
    lastModified: item.lastUpdated ? item.lastUpdated : item.dateCreated,
  }));
}

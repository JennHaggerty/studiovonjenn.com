export interface GalleryInterface {
  title: string;
  slug: string;
  directory: string;
  imgAlt?: string;
  featuredImg?: string;
  description?: string;
}

export interface File {
  name: string;
  extension?: string;
  isDirectory?: boolean;
}

export interface PostInterface {
  title: string;
  author: string;
  content: React.ReactElement;
  slug: string;
  dateCreated: string | Date | undefined;
  lastUpdated?: string | Date | undefined;
  featuredImg?: string;
  imgAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyword?: string;
  metaKeywords?: string;
}

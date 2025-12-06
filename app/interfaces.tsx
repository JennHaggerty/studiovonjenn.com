export interface GalleryInterface {
  title: string;
  slug: string;
  directory: string;
  description?: string;
  onCloseText?: string;
}

export interface File {
  name: string;
  extension?: string;
  isDirectory?: boolean;
}

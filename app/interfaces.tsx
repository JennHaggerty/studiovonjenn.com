export interface GalleryInterface {
  directory: string;
  title: string;
  description?: string;
  onCloseText?: string;
}

export interface File {
  name: string;
  extension?: string;
  isDirectory?: boolean;
}

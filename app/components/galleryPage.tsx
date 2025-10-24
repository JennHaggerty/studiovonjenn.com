import { customStringSort, getFiles } from "@/app/functions";
import { useEffect, useState } from "react";
import Gallery from "./gallery";

interface Props {
  directory: string;
  title: string;
  description?: string;
  onCloseText?: string;
  onClose?: () => void;
}

const GalleryPage = (props: Props) => {
  const { directory, title, description, onClose, onCloseText } = props;

  const [images, setImages] = useState();

  const getImages = async () => {
    const fileNames = await getFiles({ directory }).then((data) => {
      return data;
    });
    const sortedFiles = fileNames.sort(customStringSort);
    const images = sortedFiles.map((fileName: string) => {
      return { src: directory + fileName, alt: "" };
    });

    setImages(images);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="main gallery-page">
      <div className="header">
        <div className="outline">
          <h2 className="subtle-h1">{title}</h2>
          {description && <p>{description}</p>}
        </div>
      </div>
      {images && <Gallery images={images} />}
      {onClose && (
        <button type="button" onClick={onClose}>
          {onCloseText ? onCloseText : "Return"}
        </button>
      )}
    </div>
  );
};

export default GalleryPage;

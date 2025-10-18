import { getFilenames, scrollToTop } from "@/app/functions";
import { useEffect, useState } from "react";
import Gallery from "./gallery";
import Loading from "../loading";

interface Props {
  directory: string;
  title: string;
  description?: string;
  onCloseText?: string;
  onClose?: () => void;
}

const GalleryPage = (props: Props) => {
  const { directory, title, description, onClose, onCloseText } = props;

  const [loading, setLoading] = useState<boolean>(true);
  const [images, setImages] = useState();

  const getImages = async () => {
    const fileNames = await getFilenames({ directory }).then((res) => {
      const data = res.json();

      return data;
    });
    const images = fileNames.map((fileName: string) => {
      return { src: directory + fileName, alt: "" };
    });

    setImages(images);
  };

  useEffect(() => {
    getImages();
  }, []);
  useEffect(() => {
    if (images != undefined) setTimeout(() => setLoading(false), 2000);
  }, [images]);

  return (
    <div className="main gallery-page">
      <div className="header">
        <div className="outline">
          <h2 className="subtle-h1">{title}</h2>
          {description && <p>{description}</p>}
        </div>
      </div>
      {loading ? (
        <Loading text="Loading images" />
      ) : (
        images && <Gallery images={images} />
      )}
      {onClose && (
        <button type="button" onClick={onClose}>
          {onCloseText ? onCloseText : "Return"}
        </button>
      )}
    </div>
  );
};

export default GalleryPage;

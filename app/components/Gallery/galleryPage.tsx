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
    setLoading(false);
    scrollToTop();
  }, []);

  return (
    <div className="main">
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
        <button className="w-full" type="button" onClick={onClose}>
          {onCloseText ? onCloseText : "Return"}
        </button>
      )}
    </div>
  );
};

export default GalleryPage;

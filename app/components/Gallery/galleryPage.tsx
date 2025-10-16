import { getFilenames } from "@/app/functions";
import { useEffect, useState } from "react";
import Gallery from "./gallery";

interface Props {
  directory: string;
  title: string;
  description?: string;
}

const GalleryPage = (props: Props) => {
  const { directory, title, description } = props;

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

  return (
    <div className="main">
      <div className="header">
        <div className="outline">
          <h2 className="subtle-h1">{title}</h2>
          {description && <p>{description}</p>}
        </div>
      </div>
      {images && <Gallery images={images} />}
    </div>
  );
};

export default GalleryPage;

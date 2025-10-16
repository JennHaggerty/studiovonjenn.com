import { promises as fs } from "fs";

interface Image {
  src: string;
  alt?: string;
}

interface Props {
  title: string;
  description?: string;
  images?: Image[];
  directory?: string;
}

const GalleryPage = async (props: Props) => {
  const { title, description, images, directory } = props;

  if (directory) {
    const fileNames = await fs.readdir(directory);
    console.log(fileNames);
  }

  return (
    <div className="main">
      {(title || description) && (
        <div className="header">
          <div className="outline">
            {title && <h2 className="subtle-h1">{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        </div>
      )}
      {images && (
        <div className="gallery">
          {images &&
            images.map((image) => (
              <img src={image.src} alt={image.alt ? image.alt : ""} />
            ))}
        </div>
      )}
    </div>
  );
};
export default GalleryPage;

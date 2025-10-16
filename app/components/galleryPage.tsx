interface Image {
  src: string;
  alt?: string;
}

interface Props {
  title: string;
  description?: string;
  images: Image[];
}

const GalleryPage = (props: Props) => {
  const { title, description, images } = props;

  return (
    <div className="main">
      <div className="header">
        <div className="outline">
          <h2 className="subtle-h1">{title}</h2>
          {description && <p>{description}</p>}
        </div>
      </div>
      <div className="gallery">
        {images.map((image) => (
          <img src={image.src} alt={image.alt ? image.alt : ""} />
        ))}
      </div>
    </div>
  );
};
export default GalleryPage;

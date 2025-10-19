"use client";

interface Image {
  src: string;
  alt?: string;
}

interface Props {
  images: Image[];
}

const Gallery = (props: Props) => {
  const { images } = props;

  return (
    <div className="gallery">
      {images.map((image) => (
        <img key={image.src} src={image.src} alt={image.alt ? image.alt : ""} />
      ))}
    </div>
  );
};

export default Gallery;

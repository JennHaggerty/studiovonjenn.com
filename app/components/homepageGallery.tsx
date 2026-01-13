import { portfolioImages } from "../site";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {portfolioImages.map((image, i) => (
        <img key={`portfolio-image-${i}`} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default Portfolio;

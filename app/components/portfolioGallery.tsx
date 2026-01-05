import { useState } from "react";

const PortfolioGallery = () => {
  const [zoom, setZoom] = useState(false);

  return (
    <div className="relative grid gap-3 my-3 md:grid-cols-3 lg:grid-cols-3 *:h-full *:w-full *:object-cover">
      <img
        alt=""
        className="md:col-span-3"
        src="/images/galleries/atmos/2025/atmos09259.jpg"
      />
      <img alt="" src="/images/galleries/atmos/2025/atmos11254.jpg" />
      <img alt="" src="/images/galleries/atmos/2025/atmos092513.jpg" />
      <img alt="" src="/images/kris_tattoo.jpg" />
      <button
        aria-label="View full image"
        type="button"
        className={`zoom-button p-0!`}
        onClick={() => setZoom(!zoom)}
      >
        <img
          className={`${zoom ? "zoom-image" : "h-full object-cover"}`}
          alt=""
          src="/images/galleries/atmos/2025/atmos10251.jpg"
        />
      </button>
      <img alt="" src="/images/columbia_tattoo.jpg" />
      <img alt="" src="/images/galleries/atmos/2025/atmos09258.jpg" />
    </div>
  );
};

export default PortfolioGallery;

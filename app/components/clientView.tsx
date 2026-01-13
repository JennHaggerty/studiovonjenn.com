import { cv, portfolioImages, settings } from "../site";
import Nav from "./nav";

const ClientView = () => {
  return (
    <>
      <section className="introduction">
        <div
          className="smoke-background relative overflow-hidden 
      flex max-xl:justify-center min-xl:flex-row w-full"
        >
          <div className="header xl:min-w-1/2 xl:my-auto">
            <div className="outline">
              <h1>{settings.name}</h1>
              <h2>{settings.description}</h2>
              <p className="note mb-5">{settings.note}</p>
              <Nav />
            </div>
          </div>
          <div className="cover-image max-xl:hidden faded">
            <img
              className=""
              src="/images/jennifer.jpg"
              alt="Self portrait as Morticia Addams drinking tea."
            />
          </div>
        </div>
      </section>
      <div className="portfolio">
        {portfolioImages.map((image, i) => (
          <img key={`portfolio-image-${i}`} src={image.src} alt={image.alt} />
        ))}
      </div>
      <div className="primary-bg">
        <div className="col-2-img-right">
          <div className="col col-text flex flex-col gap-2">
            {cv.map((item, i) => (
              <div key={`cv-item-${i}`}>
                {item.title}
                {item.content}
              </div>
            ))}
          </div>
          <div className="col col-image">
            <img src={`/images/ophelia-1.jpg`} alt="Ophelia in the waters" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientView;

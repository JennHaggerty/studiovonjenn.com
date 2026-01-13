import Link from "next/link";
import { settings, strings } from "@/app/site";

const TattooGallery = () => {
  return (
    <div>
      <div className="introduction">
        <div className="smoke-background max-xl:justify-center w-full">
          <div className="center">
            <div className="outline">
              <Link href={`/`}>{strings.home}</Link>
              <h1>{settings.name}</h1>
              <h2>{settings.description}</h2>
              <p className="note">{strings.portfolioHeaderNote}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-3 my-3 md:grid-cols-3 lg:grid-cols-3 *:h-full *:w-full *:object-cover">
        <img
          alt=""
          className="md:col-span-3"
          src="/images/galleries/atmos/2025/atmos09259.jpg"
        />
        <img
          src="/images/galleries/atmos/0126/atmos012610.jpg"
          alt="Statuesque beauty in monochrome"
        />
        <img alt="" src="/images/galleries/atmos/2025/atmos092513.jpg" />
        <img alt="" src="/images/galleries/atmos/2025/atmos11254.jpg" />
        <img
          alt=""
          className="md:col-span-3"
          src="/images/galleries/atmos/2025/atmos10251.jpg"
        />
      </div>
    </div>
  );
};

export default TattooGallery;

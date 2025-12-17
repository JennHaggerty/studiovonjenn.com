import Link from "next/link";
import { settings } from "../cms";

const TattooGallery = () => {
  return (
    <div>
      <div className="introduction">
        <div className="smoke-background max-xl:justify-center w-full">
          <div className="center md:w-1/2">
            <div className="outline">
              <h1>
                <Link href="/" className="">
                  Photography
                </Link>
              </h1>
              <h2>{settings.description}</h2>
              <p className="note">
                Tattoo and piercing portraiture for clients and their artists.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-3 my-3 md:grid-cols-3 lg:grid-cols-3 *:h-full *:w-full *:object-cover">
        <img
          alt=""
          className="md:col-span-3"
          src="/images/galleries/atmos/0925/atmos09259.jpg"
        />
        <img alt="" src="/images/galleries/atmos/1125/atmos11254.jpg" />
        <img alt="" src="/images/galleries/atmos/0925/atmos092513.jpg" />
        <img alt="" src="/images/unknown.jpg" />
        <img
          alt=""
          className="md:col-span-3"
          src="/images/galleries/atmos/1025/atmos10251.jpg"
        />
      </div>
      <div className="w-full text-center">
        <Link href={`/`}>Home</Link>
      </div>
    </div>
  );
};

export default TattooGallery;

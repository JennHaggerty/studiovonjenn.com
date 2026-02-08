import { settings, strings } from "../site";
import HeaderElement from "../components/header";

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  return (
    <>
      <HeaderElement title={strings.contact} />
      <div className="primary-bg">
        <div className=" max-w-[1200px] mx-auto">
          <div className="col-2-img-right">
            <div className="col col-text flex flex-col gap-2">
              <h2 className="text-4xl!">Hey there,</h2>
              <p>
                Ready to make some art, email me at{" "}
                <a href={`mailto:${settings.email}`}>{settings.email}</a>.
              </p>
              <p>
                Add me on <a href={settings.discord}>Discord</a> and I recently
                joined <a href={settings.instagram}>Instagram</a>, let's share
                art together!
              </p>
              <p>
                On the first Saturday of the month the photo-booth is posted in{" "}
                <a target="_blank" href="http://www.lcnaugusta.com/">
                  Le Chat Noir
                </a>{" "}
                at 304 8th Street in Augusta Georgia, from 8:30pm — 2:00am for{" "}
                <a href="https://www.facebook.com/p/Atmosphere-Augusta-100088686398685/">
                  Atmosphere
                </a>
                . Wear your editorial best and come get a photo.
              </p>
            </div>
            <div className="col col-image">
              <img src={`/images/karinA.jpg`} alt="Ophelia in the waters" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

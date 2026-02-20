import { settings, strings } from "../site";
import HeaderElement from "../components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: settings.name + " | Book Your Photographer",
  description:
    "Email Jennifer at thejenniferhaggerty@gmail.com to book your fine art portrait photography session.",
};

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
        <div className=" max-w-[var(--max-width)] mx-auto">
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
                at 304 8th Street in Augusta Georgia, from 8:30pm — 12:00am for{" "}
                <a href="https://www.facebook.com/p/Atmosphere-Augusta-100088686398685/">
                  Atmosphere
                </a>
                .
              </p>
            </div>
            <div className="col col-image">
              <img
                src={`/images/karinA.jpg`}
                alt="Portrait of woman with red hair and wearing a white dress"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

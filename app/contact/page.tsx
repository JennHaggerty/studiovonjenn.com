import { settings, strings } from "../site/site";
import HeaderElement from "../components/header";
import { Metadata } from "next";
import Contact from "../components/contact";

export const metadata: Metadata = {
  title: settings.siteName + " | Book Your Photographer",
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
            <div className="col col-text">
              <Contact />
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

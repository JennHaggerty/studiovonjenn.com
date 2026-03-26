import { settings, strings } from "../site/site";
import HeaderElement from "../components/header";
import { Metadata } from "next";
import Contact from "../components/contact";

export const metadata: Metadata = {
  title: "Contact Your " + settings.meta.title,
  description:
    "Email Jennifer at thejenniferhaggerty@gmail.com to book your fine art portrait photography session.",
  alternates: {
    canonical: settings.domain + "/contact",
  },
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
            <div className="col col-text min-h-[25vh]">
              <div className="pt-6">
                <h2>Let's make some art</h2>
                <Contact />
              </div>
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

import { strings } from "../site/site";
import HeaderElement from "../components/header";
import { Metadata } from "next";
import Contact from "../components/contact";

export const metadata: Metadata = {
  title: "Book your portrait session with Jennifer | 30901",
  description:
    "Email Jennifer to book your fine art portrait photography session in Augusta GA.",
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
              <h2>Contact</h2>
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

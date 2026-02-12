import { cv, strings } from "../site";
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
      <HeaderElement title={strings.about} />
      <div className="primary-bg">
        <div className=" max-w-[var(--max-width)] mx-auto">
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
      </div>
    </>
  );
}

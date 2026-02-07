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
        <div className="flex flex-col gap-5 max-w-[1200px] m-auto min-h-[350px] p-[2em]">
          <h2 className="text-4xl!">Hey there,</h2>
          <div>
            Ready to make some art,{" "}
            <a href={settings.email}>
              email me at thejenniferhaggerty@gmail.com
            </a>
            .
          </div>
          <div>
            Add me on Discord via <a href={settings.social}>my invite</a>.
          </div>
          <div>
            On the first Saturday of the month the photo-booth is posted at{" "}
            <a target="_blank" href="http://www.lcnaugusta.com/">
              Le Chat Noir
            </a>
            , 304 8th Street in Augusta Georgia, from 8:30pm — 2:00am.
          </div>
        </div>
      </div>
    </>
  );
}

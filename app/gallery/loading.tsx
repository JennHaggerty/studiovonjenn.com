import { strings } from "@/app/cms";
import Link from "next/link";
import Loading from "@/app/components/loading";

export default async function Page() {
  return (
    <>
      <div className="header">
        <div className="outline mx-auto!">
          <Link href={`/`}>{strings.home}</Link>
        </div>
      </div>
      <div className="my-3">
        <Loading />
      </div>
      <div className="gallery">
        {Array(6)
          .fill(1)
          .map(() => {
            let i = 0;
            return (
              <div
                key={`loading-gallery-${i++}`}
                className="w-[400px] h-[500px] bg-(--old-black-000) animate-pulse"
              ></div>
            );
          })}
      </div>
    </>
  );
}

import { strings } from "@/app/cms";
import Loading from "@/app/components/loading";
import Link from "next/link";

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
          .map((i) => (
            <div
              key={`gallery-${i}`}
              className="w-[400px] h-[500px] bg-(--old-black-000) animate-pulse"
            ></div>
          ))}
      </div>
    </>
  );
}

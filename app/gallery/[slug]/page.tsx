import { galleries } from "../../cms";

export async function generateStaticParams() {
  return galleries.map((gallery) => ({
    slug: gallery.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log(slug);

  return (
    <div className="main gallery-page">
      <div className="header">
        <div className="outline mx-auto!">
          <h2 className="subtle-h1">{slug}</h2>
          <p>{slug}</p>
        </div>
      </div>
    </div>
  );
}

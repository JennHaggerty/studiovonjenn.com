import { portfolioImages, settings, strings } from "../site/site";
import HeaderElement from "../components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio of " + settings.meta.title,
  description:
    "A curated collection of fine art portrait photography by Jennifer.",
  alternates: {
    canonical: settings.domain + "/portfolio",
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
      <HeaderElement title={strings.portfolio} />

      <div className="portfolio">
        {portfolioImages.map((image, i) => (
          <img key={`portfolio-image-${i}`} src={image.src} alt={image.alt} />
        ))}
      </div>
    </>
  );
}

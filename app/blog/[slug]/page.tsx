import { posts } from "@/app/site/blog";
import HeaderElement from "@/app/components/header";
import { getPost } from "@/app/functions";
import { settings, strings } from "@/app/site/site";

export async function generateStaticParams() {
  return posts.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const item = await getPost(slug);

  if (!item) return;

  return (
    <div>
      <HeaderElement title={`${strings.blog}`} />
      <div className="primary-bg">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="h-full">
              <img
                className="object-cover h-full w-full"
                src={item.featuredImg}
                alt={item.imgAlt}
              />
            </div>
            <div className="p-3 md:p-5">
              <h2>{item.title}</h2>
              <div>{item.content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { prices as recipes, strings } from "@/app/site";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  return (
    <div className=" max-w-[1200px] mx-auto">
      <div className="header">
        <div className="outline mx-auto!">
          <Link href={`/`}>{strings.home}</Link>
          <h1>{strings.pricing}</h1>
          <p className="note">Updated December 18, 2025</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mx-2">
        {recipes.map((recipe, i) => (
          <div key={`pricing-${i}`} className="primary-bg p-5">
            <div>
              <div className="flex justify-between">
                <div>
                  <h2 className="text-4xl!">{recipe.name}</h2>
                  {recipe.time && (
                    <p>
                      {strings.sessionTime} <b>{recipe.time}</b>
                    </p>
                  )}
                  {recipe.delivery && (
                    <p>
                      {strings.imagesReadyIn} <b>{recipe.delivery}</b>
                    </p>
                  )}
                </div>
                {recipe.price && (
                  <p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(recipe.price)}
                  </p>
                )}
              </div>

              {(recipe.addons || recipe.includes || recipe.image) && (
                <div className="flex mx-0! max-sm:flex-col justify-between gap-5 outline">
                  {recipe.image && (
                    <div className="w-full lg:w-1/2 mx-0!">
                      <img
                        className="h-full w-full object-cover"
                        src={recipe.image}
                        alt=""
                      />
                    </div>
                  )}
                  <div className="w-full lg:w-1/2 mx-0! flex flex-col gap-5">
                    {recipe.includes && (
                      <div>
                        <h3>{strings.includes}</h3>
                        <ul className="flex flex-col gap-2">
                          {recipe.includes.map((item, i) => (
                            <li key={`includes-${i}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {recipe.addons && (
                      <div>
                        <h3>{strings.addons}</h3>
                        <ul className="flex flex-col gap-2">
                          {recipe.addons.map((item, i) => (
                            <li
                              key={`addons-${i}`}
                              className="flex justify-between gap-3"
                            >
                              <span>{item.name}</span>
                              <span>
                                {new Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                }).format(item.price)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {recipe.tips && (
                      <div>
                        <h3>{strings.tips}</h3>
                        <ul className="flex flex-col gap-2 list-disc">
                          {recipe.tips.map((item, i) => (
                            <li
                              key={`tips-${i}`}
                              className="flex justify-between gap-3"
                            >
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {recipe.options && (
                <ul className="w-full flex flex-col justify-between m-2 gap-2">
                  {recipe.options.map((item, i) => (
                    <li
                      key={`addons-${i}`}
                      className="flex justify-between gap-3"
                    >
                      <span>{item.name}</span>
                      <span>
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(item.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

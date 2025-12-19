import { customStringSort, getGallery } from "@/app/functions";
import { promises as fs } from "fs";
import path from "path";
import { prices as recipes, settings } from "../cms";
import Footer from "../components/footer";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  return (
    <div className="flex h-screen flex-col justify-between max-w-[1200px] mx-auto">
      <main>
        <div className="header">
          <div className="outline mx-auto!">
            <Link href={`/`}>Home</Link>
            <h1>Pricing</h1>
            <p className="note">Updated December 18, 2025</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mx-2">
          {recipes.map((recipe, i) => (
            <div key={`pricing-${i}`} className="primary-bg p-3">
              <div>
                <div className="flex justify-between">
                  <div>
                    <h2>{recipe.name}</h2>
                    {recipe.image && <img src={recipe.image} aria-label={``} />}
                    {recipe.time && (
                      <p>
                        Session time <b>{recipe.time}</b>
                      </p>
                    )}
                    {recipe.delivery && (
                      <p>
                        Images ready in <b>{recipe.delivery}</b>
                      </p>
                    )}
                  </div>
                  {recipe.price && (
                    <p>
                      <b>
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(recipe.price)}
                      </b>
                    </p>
                  )}
                </div>

                <div className="flex justify-between">
                  {recipe.includes && (
                    <div className="outline w-full">
                      <h3>Includes</h3>
                      <ul className="flex flex-col gap-2">
                        {recipe.includes.map((item, i) => (
                          <li key={`includes-${i}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {recipe.addons && (
                    <div className="outline w-full">
                      <h3>Add-ons</h3>
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
                  {recipe.options && (
                    <ul className="w-full flex flex-col justify-between m-2">
                      {recipe.options.map((item, i) => (
                        <li
                          key={`addons-${i}`}
                          className="flex justify-between gap-3"
                        >
                          <span>{item.name}</span>
                          <span className="font-bold">
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
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

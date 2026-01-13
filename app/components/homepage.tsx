"use client";

import { useState } from "react";
import { Metadata } from "next";

import AdminView from "@/app/components/adminView";
import ClientView from "@/app/components/clientView";
import { settings } from "../site";

export const metadata: Metadata = {
  title: settings.name,
  description: settings.description,
};

export default function Homepage() {
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const env = process.env.NODE_ENV;
  const isAdmin = env !== "production";

  return (
    <>
      {isAdmin && (
        <div className="sitewide-banner">
          {showPreview ? (
            <button onClick={() => setShowPreview(!showPreview)}>
              Show admin
            </button>
          ) : (
            <>
              <button onClick={() => setShowPreview(!showPreview)}>
                Show live view
              </button>
            </>
          )}
        </div>
      )}
      {isAdmin && !showPreview ? <AdminView /> : <ClientView />}
    </>
  );
}

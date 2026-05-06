import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      /*
      {
        source: "/pdfs/Photography-Recipe-Book.pdf",
        destination: "/prices",
        permanent: true,
      },
      {
        source: "/events/atmos/0925/index.html",
        destination: "/gallery/atmos0925",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "https://jenniferhaggerty.com/photography/gallery",
        permanent: true,
      },
      {
        source: "/about",
        destination: "https://jenniferhaggerty.com/photography/about",
        permanent: true,
      },
      {
        source: "/prices",
        destination: "https://jenniferhaggerty.com/photography/prices",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "https://jenniferhaggerty.com/photography/contact",
        permanent: true,
      },
      {
        source: "/gallery/atmos0426",
        destination:
          "https://jenniferhaggerty.com/photography/gallery/atmos0426",
        permanent: true,
      },
      {
        source: "/gallery/no-kings-protest-march-28-2026",
        destination:
          "https://jenniferhaggerty.com/photography/gallery/no-kings-protest-march-28-2026",
        permanent: true,
      },
      {
        source: "/gallery/atmos0226",
        destination:
          "https://jenniferhaggerty.com/photography/gallery/atmos0226",
        permanent: true,
      },
      {
        source: "/gallery/atmos0126",
        destination: "https://jenniferhaggerty.com/photography/atmos0126",
        permanent: true,
      },
      {
        source: "/gallery/pirateparty112025",
        destination:
          "https://jenniferhaggerty.com/photography/gallery/pirateparty112025",
        permanent: true,
      },
      {
        source: "/gallery/atmos1125",
        destination:
          "https://jenniferhaggerty.com/photography/gallery/atmos1125",
        permanent: true,
      },
      {
        source: "/gallery/atmos1025",
        destination:
          "https://jenniferhaggerty.com/photography/gallery/atmos1025",
        permanent: true,
      },
      {
        source: "/gallery/atmos0925",
        destination:
          "https://jenniferhaggerty.com/photography/gallery/atmos0925",
        permanent: true,
      },*/
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "sameorigin" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: "default=src" },
        ],
      },
    ];
  },
};

export default nextConfig;

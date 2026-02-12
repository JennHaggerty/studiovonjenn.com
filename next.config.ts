import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;

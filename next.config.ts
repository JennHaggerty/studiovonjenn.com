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

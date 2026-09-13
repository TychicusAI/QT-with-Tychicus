import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/devotional/:weekId(\\d{4}-\\d{2}-\\d{2})/:dayId",
        destination: "/devotional/youth/:weekId/:dayId",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

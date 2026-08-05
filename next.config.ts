import type { NextConfig } from "next";

const isGitHubPages = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const } : {}),
  basePath: isGitHubPages ? basePath : "",
  assetPrefix: isGitHubPages ? basePath : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
